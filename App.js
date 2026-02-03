import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Modal, StatusBar, Image, BackHandler, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import logger from './utils/logger';

// AdMob removed


// Import our components
import SplashScreen from './components/SplashScreen';
import NavigationScreen from './components/NavigationScreen';
import TopicsScreen from './components/TopicsScreen';
import TopicContentScreen from './components/TopicContentScreen';
import ExamInfoScreen from './components/ExamInfoScreen';

// Import data and utilities
import { questionBank } from './questionBank';
import ModernFirstAidLogo from './ModernFirstAidLogo';
import ExamBookLogo from './ExamBookLogo';
import TestBookLogo from './TestBookLogo';
import { topicsData } from './utils/quizUtils';
import { calculateFinalScore, shuffleArray } from './utils/quizUtils';
import { commonStyles } from './utils/commonStyles';

// questionBank'ten rastgele soru seç (dinamik sayı) ve şıkları karıştır
const getRandomQuestions = (count = 40) => {
  // Validate count parameter
  const validCount = Math.min(count, questionBank.length);

  // Shuffle questions using utility function
  const shuffled = shuffleArray(questionBank);
  const selectedQuestions = shuffled.slice(0, validCount);

  // Her soru için şıkları karıştır ve doğru cevabın yeni pozisyonunu bul
  return selectedQuestions.map(question => {
    // "Hepsi doğru" veya "Hepsi yapılır" gibi şıkları kontrol et
    const hasAllCorrectOption = question.options.some(option =>
      option.toLowerCase().includes('hepsi') &&
      (option.toLowerCase().includes('doğru') || option.toLowerCase().includes('yapılır'))
    );

    if (hasAllCorrectOption) {
      // "Hepsi doğru" şıkkı varsa, son şıkkı sabit tut, diğerlerini karıştır
      const lastOption = question.options[question.options.length - 1];
      const otherOptions = question.options.slice(0, -1);

      // Diğer şıkları index'leriyle birlikte karıştır
      const otherOptionsWithIndex = otherOptions.map((option, index) => ({
        option,
        originalIndex: index
      }));

      // Fisher-Yates shuffle for options
      for (let i = otherOptionsWithIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [otherOptionsWithIndex[i], otherOptionsWithIndex[j]] = [otherOptionsWithIndex[j], otherOptionsWithIndex[i]];
      }

      // Yeni şık dizisini oluştur (karışık + son şık)
      const newOptions = [...otherOptionsWithIndex.map(item => item.option), lastOption];

      // Yeni doğru cevap pozisyonunu bul
      let newCorrectAnswer;
      if (question.correctAnswer === question.options.length - 1) {
        // Doğru cevap son şıktı (hepsi doğru), pozisyonu aynı kalır
        newCorrectAnswer = newOptions.length - 1;
      } else {
        // Doğru cevap diğer şıklardan biriydi
        newCorrectAnswer = otherOptionsWithIndex.findIndex(
          item => item.originalIndex === question.correctAnswer
        );
      }

      return {
        ...question,
        options: newOptions,
        correctAnswer: newCorrectAnswer
      };
    } else {
      // "Hepsi doğru" şıkkı yoksa normal karıştırma yap
      const optionsWithIndex = question.options.map((option, index) => ({
        option,
        originalIndex: index
      }));

      // Fisher-Yates shuffle for options
      for (let i = optionsWithIndex.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndex[i], optionsWithIndex[j]] = [optionsWithIndex[j], optionsWithIndex[i]];
      }

      // Yeni doğru cevap pozisyonunu bul
      const newCorrectAnswer = optionsWithIndex.findIndex(
        item => item.originalIndex === question.correctAnswer
      );

      return {
        ...question,
        options: optionsWithIndex.map(item => item.option),
        correctAnswer: newCorrectAnswer
      };
    }
  });
};

export default function App() {
  // Sınavı bitirme modalı için state
  const [showEndExamModal, setShowEndExamModal] = useState(false);
  const [pendingEndAction, setPendingEndAction] = useState(null); // 'home' veya 'exit'
  const [showExitAppModal, setShowExitAppModal] = useState(false);

  // Onam formu için state
  const [hasAcceptedConsent, setHasAcceptedConsent] = useState(false);

  // Diğer state'ler
  const [showSplash, setShowSplash] = useState(true);
  const [showNavigation, setShowNavigation] = useState(false);
  const [showTopics, setShowTopics] = useState(false);
  const [showTopicContent, setShowTopicContent] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [selectedQuestionCount, setSelectedQuestionCount] = useState(40);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [timer, setTimer] = useState(2400); // 40 dakika = 2400 saniye
  const [timeUp, setTimeUp] = useState(false);
  const timerRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(120);
  const questionCardRef = useRef(null);

  // Cevap kontrol modu için yeni state'ler
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [reviewQuestionIndex, setReviewQuestionIndex] = useState(0);
  const [hasViewedAnswers, setHasViewedAnswers] = useState(false);

  // Cevaplanan soruların doğru/yanlış bilgisini tutmak için dizi
  const [answers, setAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);

  // Animasyon için yeni state
  const [pulseAnim] = useState(new Animated.Value(1));
  const [shakeAnim] = useState(new Animated.Value(0));

  // Sayaç kırmızı yanıp sönme state'i
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    let blinkInterval = null;

    if (timer <= 300) { // Son 5 dakikada yanıp sönsün
      blinkInterval = setInterval(() => {
        setBlink(prev => !prev);
      }, 500);
    } else {
      setBlink(true);
    }

    // Cleanup function
    return () => {
      if (blinkInterval) {
        clearInterval(blinkInterval);
      }
    };
  }, [timer]);

  // Sayaç başlatma ve durdurma
  useEffect(() => {
    // Clear any existing interval
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Start new interval only if conditions are met
    if (shuffledQuestions.length > 0 && !quizCompleted && !timeUp) {
      timerRef.current = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer <= 1) {
            // Clear interval before updating state
            if (timerRef.current) {
              clearInterval(timerRef.current);
              timerRef.current = null;
            }
            setTimeUp(true);
            setQuizCompleted(true);
            setShowTest(false);
            return 0;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    // Cleanup function
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [shuffledQuestions, quizCompleted, timeUp]);

  // Başarı animasyonu
  useEffect(() => {
    if (quizCompleted) {
      const totalQuestions = shuffledQuestions.length || 40;
      let passingScore;

      if (selectedQuestionCount === 10) {
        passingScore = 80;
      } else if (selectedQuestionCount === 20) {
        passingScore = 85;
      } else {
        passingScore = 85;
      }

      let not;
      if (selectedQuestionCount === 10) {
        not = Math.round((score * 10));
      } else if (selectedQuestionCount === 20) {
        not = Math.round((score * 5));
      } else {
        not = Math.round((score * 2.5));
      }

      const basarili = not >= passingScore;

      if (basarili) {
        const pulse = Animated.loop(
          Animated.sequence([
            Animated.timing(pulseAnim, {
              toValue: 1.1,
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
              toValue: 1,
              duration: 800,
              useNativeDriver: true,
            }),
          ])
        );
        pulse.start();
        return () => pulse.stop();
      } else {
        const shake = Animated.sequence([
          Animated.timing(shakeAnim, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: -10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 10,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(shakeAnim, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
        ]);
        shake.start();
      }
    }
  }, [quizCompleted, score, shuffledQuestions.length, pulseAnim, shakeAnim]);

  // --- Fonksiyonlar ---
  function handleAnswerSelect(answerIndex) {
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    // Kullanıcının seçtiği cevabı sakla
    setUserAnswers(prev => {
      const updated = [...prev];
      updated[currentQuestionIndex] = answerIndex;
      return updated;
    });

    // Cevaplanan soruların doğru/yanlış bilgisini kaydet
    setAnswers(prev => {
      const updated = [...prev];
      updated[currentQuestionIndex] = answerIndex === activeCurrentQuestion.correctAnswer;
      return updated;
    });

    // Score hesapla - sadece ilk kez cevaplanıyorsa puan ver
    const isFirstAnswer = userAnswers[currentQuestionIndex] === undefined;

    if (isFirstAnswer) {
      if (answerIndex === activeCurrentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 1);
      }
      setAnsweredQuestions(prevCount => prevCount + 1);
    } else {
      // Cevap değiştiriliyorsa score'u yeniden hesapla
      const oldAnswer = userAnswers[currentQuestionIndex];
      const oldCorrect = oldAnswer === activeCurrentQuestion.correctAnswer;
      const newCorrect = answerIndex === activeCurrentQuestion.correctAnswer;

      if (oldCorrect && !newCorrect) {
        setScore(prevScore => prevScore - 1);
      } else if (!oldCorrect && newCorrect) {
        setScore(prevScore => prevScore + 1);
      }
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      // Önceki cevabı kontrol et ve göster
      const nextIndex = currentQuestionIndex + 1;
      const previousAnswer = userAnswers[nextIndex];

      if (previousAnswer !== undefined) {
        setSelectedAnswer(previousAnswer);
        setShowResult(true);
      } else {
        setSelectedAnswer(null);
        setShowResult(false);
      }
    } else {
      // Clear interval and mark quiz as completed
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      setQuizCompleted(true);
      setShowTest(false);
    }
  }

  function resetQuiz() {
    // Clear all states to initial values
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(0);
    setQuizCompleted(false);
    setShuffledQuestions([]);
    setTimer(2400);
    setTimeUp(false);
    setAnswers([]);
    setUserAnswers([]);
    setIsReviewMode(false);
    setWrongQuestions([]);
    setReviewQuestionIndex(0);
    setHasViewedAnswers(false);
    setSelectedQuestionCount(40);

    // Clear interval if exists
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // Reset navigation states to show splash screen
    setShowSplash(true);
    setShowNavigation(false);
    setShowTopics(false);
    setShowTopicContent(false);
    setSelectedTopic(null);
    setShowInfo(false);
    setShowTest(false);
  }

  function getScoreColor() {
    const percentage = (score / (shuffledQuestions.length || 40)) * 100;
    if (percentage >= 85) return '#4CAF50';
    if (percentage >= 70) return '#FF9800';
    return '#F44336';
  }

  // Test ekranı (sorular karışık ve sayaç var)
  const activeQuestions = shuffledQuestions.length > 0 ? shuffledQuestions : getRandomQuestions();

  // Review mode için aktif soru belirleme
  let activeCurrentQuestion;
  let displayQuestionNumber;

  if (isReviewMode && wrongQuestions.length > 0) {
    const wrongQuestionOriginalIndex = wrongQuestions[reviewQuestionIndex];
    activeCurrentQuestion = activeQuestions[wrongQuestionOriginalIndex];
    displayQuestionNumber = wrongQuestionOriginalIndex + 1;
  } else {
    activeCurrentQuestion = activeQuestions[currentQuestionIndex];
    displayQuestionNumber = currentQuestionIndex + 1;
  }

  // Sayaç formatı (40 dakika için)
  const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
  const seconds = String(timer % 60).padStart(2, '0');

  // Render different screens based on state

  // Onam Formu - İlk açılışta gösterilir
  if (!hasAcceptedConsent) {
    return (
      <SafeAreaView style={styles.consentContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
        <ScrollView
          contentContainerStyle={styles.consentScrollContent}
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.consentHeader}>
            <Text style={styles.consentIcon}>⚠️</Text>
            <Text style={styles.consentTitle}>YASAL UYARI VE ONAM FORMU</Text>
          </View>

          <View style={styles.consentCard}>
            <Text style={styles.consentSubtitle}>📋 İlkyardım Uygulaması Hakkında</Text>

            <Text style={styles.consentText}>
              Bu uygulama, <Text style={styles.consentBold}>yalnızca eğitim ve bilgilendirme amaçlı</Text> hazırlanmıştır.
            </Text>

            <View style={styles.consentDivider} />

            <Text style={styles.consentSubtitle}>🏥 Yasal Düzenleme</Text>

            <Text style={styles.consentText}>
              Türkiye Cumhuriyeti mevzuatına göre, ilkyardım uygulamaları <Text style={styles.consentBold}>yalnızca T.C. Sağlık Bakanlığı tarafından onaylı İlkyardım Eğitim Merkezlerinden</Text> eğitim almış ve <Text style={styles.consentBold}>geçerli İLKYARDIMCI KİMLİK KARTI</Text> sahibi kişiler tarafından yapılabilir.
            </Text>

            <View style={styles.consentWarningBox}>
              <Text style={styles.consentWarningIcon}>⚠️</Text>
              <Text style={styles.consentWarningText}>
                İlkyardımcı kimlik kartı olmadan yapılan müdahaleler hukuki sorumluluk doğurabilir.
              </Text>
            </View>

            <View style={styles.consentDivider} />

            <Text style={styles.consentSubtitle}>📖 Uygulama Kapsamı</Text>

            <Text style={styles.consentText}>
              • Bu uygulama ilkyardım bilgilerini öğretim amaçlı sunmaktadır.{'\n'}
              • Gerçek acil durumlarda profesyonel sağlık hizmetleri tercih edilmelidir.{'\n'}
              • Uygulamadaki bilgiler, resmi ilkyardım eğitiminin yerini tutmaz.{'\n'}
              • İlkyardım eğitimi için yetkili kurumlara başvurunuz.
            </Text>

            <View style={styles.consentDivider} />

            <Text style={styles.consentSubtitle}>✅ Kabul Beyanı</Text>

            <Text style={styles.consentText}>
              Bu uygulamayı kullanarak yukarıdaki uyarıları okuduğumu, anladığımı ve uygulamadaki bilgilerin <Text style={styles.consentBold}>yalnızca eğitim amaçlı</Text> olduğunu, gerçek ilkyardım uygulaması için <Text style={styles.consentBold}>geçerli ilkyardımcı belgesine sahip olmam gerektiğini</Text> kabul ediyorum.
            </Text>
          </View>

          <View style={styles.consentButtonContainer}>
            <TouchableOpacity
              style={styles.consentAcceptButton}
              onPress={() => setHasAcceptedConsent(true)}
            >
              <Text style={styles.consentAcceptButtonText}>✓ KABUL EDİYORUM</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.consentRejectButton}
              onPress={() => BackHandler.exitApp()}
            >
              <Text style={styles.consentRejectButtonText}>✗ KABUL ETMİYORUM</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.consentFooter}>
            📞 Acil Durumlarda: 112
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (showSplash) {
    return <SplashScreen onStart={() => {
      setShowSplash(false);
      setShowNavigation(true);
    }} />;
  }

  if (showNavigation) {
    return <NavigationScreen
      onTopics={() => {
        setShowNavigation(false);
        setShowTopics(true);
      }}
      onExams={() => {
        setShowNavigation(false);
        setShowInfo(true);
      }}
    />;
  }

  if (showTopics) {
    return <TopicsScreen
      onBack={() => {
        setShowTopics(false);
        setShowNavigation(true);
      }}
      onSelectTopic={(topic) => {
        setSelectedTopic(topic);
        setShowTopics(false);
        setShowTopicContent(true);
      }}
    />;
  }

  if (showTopicContent && selectedTopic) {
    return <TopicContentScreen
      topic={selectedTopic}
      onBackToTopics={() => {
        setShowTopicContent(false);
        setShowTopics(true);
        setSelectedTopic(null);
      }}
      onBackToHome={() => {
        setShowTopicContent(false);
        setShowNavigation(true);
        setSelectedTopic(null);
      }}
    />;
  }

  if (!showSplash && !showNavigation && showInfo) {
    return <ExamInfoScreen
      selectedQuestionCount={selectedQuestionCount}
      setSelectedQuestionCount={setSelectedQuestionCount}
      onStartExam={() => {
        // Seçilen sayıda rastgele soru seç
        const randomQuestions = getRandomQuestions(selectedQuestionCount);
        setShuffledQuestions(randomQuestions);
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResult(false);
        setAnsweredQuestions(0);
        setQuizCompleted(false);
        setTimeUp(false);
        setTimer(selectedQuestionCount * 60);
        setAnswers([]);
        setUserAnswers([]);
        setShowInfo(false);
        setShowTest(true);
      }}
      onBackToHome={() => {
        setShowInfo(false);
        setShowNavigation(true);
      }}
    />;
  }

  // Test ekranı (sorular karışık ve sayaç var)
  if (!showSplash && !showNavigation && !showTopics && !showTopicContent && !showInfo && showTest && !timeUp) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          {/* Sayaç sağ üst köşe - sadece normal modda göster */}
          {!isReviewMode && (
            <View style={[styles.timerContainerLowerBlue, { top: 180 }]}>
              <Ionicons
                name="time-outline"
                size={22}
                color={timer <= 60 ? (blink ? "#F44336" : "#fff") : "#fff"}
              />
              <Text
                style={[
                  styles.timerTextWhite,
                  timer <= 60 && {
                    color: blink ? "#F44336" : "#fff",
                    fontWeight: 'bold',
                    textShadowColor: blink ? "#F44336" : "#fff",
                    textShadowOffset: { width: 0, height: 0 },
                    textShadowRadius: blink ? 10 : 0,
                  }
                ]}
              >
                {minutes}:{seconds}
              </Text>
            </View>
          )}

          {/* Home ve Exit ikonları sağ/sol alt köşede */}
          <View style={styles.examFooterAbsolute}>
            <TouchableOpacity
              style={styles.homeButtonMini}
              onPress={() => {
                if (isReviewMode) {
                  // Review mode'dayken direkt ana sayfaya dön
                  resetQuiz();
                } else {
                  setPendingEndAction('home');
                  setShowEndExamModal(true);
                }
              }}
            >
              <Ionicons name="home" size={26} color="#1976D2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.exitButtonMini}
              onPress={() => {
                setShowExitAppModal(true);
              }}
            >
              <Ionicons name="exit-outline" size={26} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* Başlık */}
          <View style={styles.headerSmallWithMargin}>
            <View style={{ height: 4 }} />
            <Text style={styles.titleBig3D}>
              {isReviewMode ? 'Yanlış Cevaplar' : 'İlkyardım Soru Bankası'}
            </Text>
          </View>

          <ScrollView
            style={styles.scrollViewSmall}
            contentContainerStyle={styles.scrollViewSmallContentCenter}
            showsVerticalScrollIndicator={false}
          >
            <View
              style={styles.questionCardTransparent}
              ref={questionCardRef}
              onLayout={event => {
                const { height: cardHeightValue } = event.nativeEvent.layout;
                if (Math.abs(cardHeight - cardHeightValue) > 2) {
                  setCardHeight(cardHeightValue);
                }
              }}
            >
              <Text style={styles.questionNumberBig3DWhite}>
                {isReviewMode
                  ? `Yanlış Soru ${reviewQuestionIndex + 1}/${wrongQuestions.length} (Orijinal Soru ${displayQuestionNumber})`
                  : `Soru ${displayQuestionNumber}/${activeQuestions.length}`
                }
              </Text>
              <Text style={styles.questionTextWhite}>{activeCurrentQuestion.question}</Text>

              <View style={styles.optionsContainerSmall}>
                {activeCurrentQuestion.options.map((option, index) => {
                  const isLongText = option.length > 40;
                  const isVeryLongText = option.length > 80;
                  const isExtremelyLongText = option.length > 120;

                  // Review mode'da renk belirleme
                  let buttonStyle = styles.optionButtonLargeGray;
                  if (isReviewMode) {
                    const wrongQuestionOriginalIndex = wrongQuestions[reviewQuestionIndex];
                    const userAnswer = userAnswers[wrongQuestionOriginalIndex];
                    const correctAnswer = activeCurrentQuestion.correctAnswer;

                    if (index === correctAnswer) {
                      // Doğru cevap - yeşil
                      buttonStyle = styles.correctOptionReview;
                    } else if (index === userAnswer) {
                      // Kullanıcının yanlış cevabı - kırmızı
                      buttonStyle = styles.wrongOptionReview;
                    }
                  } else if (selectedAnswer === index) {
                    buttonStyle = styles.selectedOptionOrange;
                  }

                  return (
                    <TouchableOpacity
                      key={index}
                      style={[
                        styles.optionButtonLargeGray,
                        buttonStyle === styles.selectedOptionOrange && styles.selectedOptionOrange,
                        buttonStyle === styles.correctOptionReview && styles.correctOptionReview,
                        buttonStyle === styles.wrongOptionReview && styles.wrongOptionReview,
                        isExtremelyLongText && { minHeight: 42, paddingVertical: 10 },
                        isVeryLongText && !isExtremelyLongText && { minHeight: 38, paddingVertical: 9 }
                      ]}
                      onPress={() => {
                        if (!isReviewMode) {
                          handleAnswerSelect(index);
                        }
                      }}
                      activeOpacity={isReviewMode ? 1 : 0.8}
                      disabled={isReviewMode}
                    >
                      <Text
                        style={[
                          styles.optionTextLargeGray,
                          isReviewMode && index === activeCurrentQuestion.correctAnswer && styles.correctOptionTextReview,
                          isReviewMode && index === userAnswers[wrongQuestions[reviewQuestionIndex]] && styles.wrongOptionTextReview,
                          !isReviewMode && selectedAnswer === index && styles.selectedOptionTextSmall,
                          isVeryLongText && { fontSize: 8, lineHeight: 11 },
                          isLongText && !isVeryLongText && { fontSize: 9, lineHeight: 12 }
                        ]}
                        numberOfLines={2}
                        ellipsizeMode="tail"
                      >
                        {String.fromCharCode(65 + index)}. {option}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>

              {/* Butonlar */}
              <View style={styles.resultContainerSmallRow}>
                {isReviewMode ? (
                  // Review mode butonları
                  <>
                    <View style={styles.prevButtonSmallLeftWrapper}>
                      {reviewQuestionIndex > 0 && (
                        <TouchableOpacity
                          style={styles.prevButtonSmallYellow}
                          onPress={() => setReviewQuestionIndex(reviewQuestionIndex - 1)}
                        >
                          <Ionicons name="arrow-back" size={15} color="#fff" />
                          <Text style={styles.prevButtonTextSmallWhite}>Önceki Yanlış</Text>
                        </TouchableOpacity>
                      )}
                    </View>

                    <View style={styles.nextButtonSmallRightWrapper}>
                      {reviewQuestionIndex < wrongQuestions.length - 1 ? (
                        <TouchableOpacity
                          style={styles.nextButtonSmall}
                          onPress={() => setReviewQuestionIndex(reviewQuestionIndex + 1)}
                        >
                          <Text style={styles.nextButtonTextSmall}>Sonraki Yanlış</Text>
                          <Ionicons name="arrow-forward" size={15} color="#fff" />
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.finishReviewButton}
                          onPress={() => {
                            setIsReviewMode(false);
                            setQuizCompleted(true);
                            setShowTest(false);
                          }}
                        >
                          <Text style={styles.finishReviewButtonText}>İncelemeyi Bitir</Text>
                          <Ionicons name="checkmark" size={15} color="#fff" />
                        </TouchableOpacity>
                      )}
                    </View>
                  </>
                ) : (
                  // Normal mode butonları
                  <>
                    {currentQuestionIndex > 0 ? (
                      <View style={styles.prevButtonSmallLeftWrapper}>
                        <TouchableOpacity style={styles.prevButtonSmallYellow} onPress={() => {
                          setCurrentQuestionIndex(currentQuestionIndex - 1);
                          const previousAnswer = userAnswers[currentQuestionIndex - 1];
                          if (previousAnswer !== undefined) {
                            setSelectedAnswer(previousAnswer);
                            setShowResult(true);
                          } else {
                            setSelectedAnswer(null);
                            setShowResult(false);
                          }
                        }}>
                          <Ionicons name="arrow-back" size={15} color="#fff" />
                          <Text style={styles.prevButtonTextSmallWhite}>Önceki Soru</Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={styles.prevButtonSmallLeftWrapper} />
                    )}

                    <View style={styles.nextButtonSmallRightWrapper}>
                      <TouchableOpacity style={styles.nextButtonSmall} onPress={handleNextQuestion}>
                        <Text style={styles.nextButtonTextSmall}>
                          {currentQuestionIndex < activeQuestions.length - 1 ? 'Sonraki Soru' : 'Sonuçları Görüntüle'}
                        </Text>
                        <Ionicons name="arrow-forward" size={15} color="#fff" />
                      </TouchableOpacity>
                    </View>
                  </>
                )}
              </View>
            </View>
          </ScrollView>
          {/* Sınavı bitirme modalı */}
          <Modal
            visible={showEndExamModal}
            transparent
            animationType="fade"
            onRequestClose={() => setShowEndExamModal(false)}
          >
            <View style={styles.endExamModalOverlay}>
              <View style={styles.endExamModalContent}>
                <Text style={styles.endExamModalTitle}>Sınavı bitirmek istiyor musunuz?</Text>
                <View style={styles.endExamModalButtons}>
                  <TouchableOpacity
                    style={styles.endExamModalButtonYes}
                    onPress={() => {
                      setShowEndExamModal(false);
                      if (pendingEndAction === 'home') {
                        resetQuiz();
                      } else if (pendingEndAction === 'exit') {
                        BackHandler.exitApp();
                      }
                    }}
                  >
                    <Text style={styles.endExamModalButtonTextYes}>Evet</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.endExamModalButtonNo}
                    onPress={() => setShowEndExamModal(false)}
                  >
                    <Text style={styles.endExamModalButtonTextNo}>Hayır</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          {/* Uygulamayı kapatma modalı */}
          <Modal
            visible={showExitAppModal}
            transparent
            animationType="fade"
            onRequestClose={() => setShowExitAppModal(false)}
          >
            <View style={styles.endExamModalOverlay}>
              <View style={styles.endExamModalContent}>
                <Text style={styles.endExamModalTitle}>Uygulamadan çıkmak istiyor musunuz?</Text>
                <View style={styles.endExamModalButtons}>
                  <TouchableOpacity
                    style={styles.endExamModalButtonYes}
                    onPress={() => {
                      setShowExitAppModal(false);
                      BackHandler.exitApp();
                    }}
                  >
                    <Text style={styles.endExamModalButtonTextYes}>Evet</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.endExamModalButtonNo}
                    onPress={() => setShowExitAppModal(false)}
                  >
                    <Text style={styles.endExamModalButtonTextNo}>Hayır</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </View>
    );
  }

  // Süre dolduysa özel sonuç ekranı
  if (timeUp) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.completedContainer}>
            <View style={styles.resultCard}>
              <Ionicons name="alert-circle" size={80} color="#F44336" />
              <Text style={styles.completedTitle}>Sınav süreniz doldu.</Text>
              <Text style={styles.finalScore}>
                Toplam puanınız: {score}
              </Text>
              <TouchableOpacity style={styles.restartButton} onPress={resetQuiz}>
                <Text style={styles.restartButtonText}>Tekrar Başla</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Home ve Exit ikonları */}
          <View style={styles.examFooterAbsolute}>
            <TouchableOpacity
              style={styles.homeButtonMini}
              onPress={resetQuiz}
            >
              <Ionicons name="home" size={26} color="#1976D2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.exitButtonMini}
              onPress={() => BackHandler.exitApp()}
            >
              <Ionicons name="exit-outline" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // Test tamamlandıysa
  if (quizCompleted) {
    // Notu 100 üzerinden hesapla (soru sayısına göre farklı puanlama)
    const totalQuestions = shuffledQuestions.length || 40;
    const not = calculateFinalScore(score, selectedQuestionCount);
    const passingScore = selectedQuestionCount === 10 ? 80 : 85;
    const basarili = not >= passingScore;
    const dogruSayisi = answers.filter(Boolean).length;
    const yanlisSayisi = totalQuestions - dogruSayisi;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.completedContainer}>
            <Image
              source={
                basarili
                  ? require('./mutlu.png')
                  : require('./uzgun.png')
              }
              style={{
                width: 80,
                height: 80,
                marginBottom: 10,
                marginTop: -100,
                opacity: basarili ? 1.0 : 1.0
              }}
              resizeMode="contain"
            />
            <Text style={styles.completedTitleWhite}>Test bitti.</Text>
            <Text style={styles.finalScoreWhite}>Notunuz: {not}</Text>
            <Text style={styles.scoreDetailWhite}>
              <Text>Doğru sayınız: </Text>
              <Text style={{ fontWeight: 'bold' }}>{dogruSayisi}</Text>
            </Text>
            <Text style={styles.scoreDetailWhite}>
              <Text>Yanlış sayınız: </Text>
              <Text style={{ fontWeight: 'bold' }}>{yanlisSayisi}</Text>
            </Text>
            {basarili ? (
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <Text style={styles.successTextWhiteModern}>
                  🎉 BAŞARILISINIZ! 🎉{'\n'}
                  <Text style={styles.congratsTextModern}>✨ Tebrikler ✨</Text>
                </Text>
              </Animated.View>
            ) : (
              <Animated.View style={{ transform: [{ translateX: shakeAnim }] }}>
                <Text style={styles.failTextWhiteModern}>
                  MALESEF BU SEFER OLMADI 😔{'\n'}
                </Text>
              </Animated.View>
            )}
            <View style={styles.resultButtonsContainer}>
              <TouchableOpacity style={styles.restartButtonSmall} onPress={resetQuiz}>
                <Text style={styles.restartButtonTextSmall}>Tekrar Başla</Text>
              </TouchableOpacity>
              {!hasViewedAnswers && (
                <TouchableOpacity
                  style={styles.viewAnswersButton}
                  onPress={() => {
                    // Yanlış cevaplanan soruları bul
                    const wrongQuestionIndexes = [];
                    answers.forEach((isCorrect, index) => {
                      if (!isCorrect) {
                        wrongQuestionIndexes.push(index);
                      }
                    });

                    if (wrongQuestionIndexes.length > 0) {
                      setWrongQuestions(wrongQuestionIndexes);
                      setReviewQuestionIndex(0);
                      setIsReviewMode(true);
                      setQuizCompleted(false);
                      setShowTest(true);
                      setHasViewedAnswers(true);
                    } else {
                      // Hiç yanlış cevap yoksa
                      alert('Tebrikler! Hiç yanlış cevabınız yok.');
                      setHasViewedAnswers(true);
                    }
                  }}
                >
                  <Text style={styles.viewAnswersButtonText}>Cevapları Kontrol Edin</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          {/* Home ve Exit ikonları */}
          <View style={styles.examFooterAbsolute}>
            <TouchableOpacity
              style={styles.homeButtonMini}
              onPress={resetQuiz}
            >
              <Ionicons name="home" size={26} color="#1976D2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.exitButtonMini}
              onPress={() => setShowExitAppModal(true)}
            >
              <Ionicons name="exit-outline" size={26} color="#fff" />
            </TouchableOpacity>
          </View>



          {/* Uygulamayı kapatma modalı - sonuç sayfasında da göster */}
          <Modal
            visible={showExitAppModal}
            transparent
            animationType="fade"
            onRequestClose={() => setShowExitAppModal(false)}
          >
            <View style={styles.endExamModalOverlay}>
              <View style={styles.endExamModalContent}>
                <Text style={styles.endExamModalTitle}>Uygulamayı kapatmak istiyor musunuz?</Text>
                <View style={styles.endExamModalButtons}>
                  <TouchableOpacity
                    style={styles.endExamModalButtonYes}
                    onPress={() => {
                      setShowExitAppModal(false);
                      // Uygulamayı tamamen sıfırla
                      setShowSplash(true);
                      setShowInfo(false);
                      setCurrentQuestionIndex(0);
                      setSelectedAnswer(null);
                      setShowResult(false);
                      setScore(0);
                      setAnsweredQuestions(0);
                      setQuizCompleted(false);
                      setShuffledQuestions([]);
                      setTimer(2400);
                      setTimeUp(false);
                      setAnswers([]);
                      setUserAnswers([]);
                      clearInterval(timerRef.current);
                      // Uygulamayı kapat
                      BackHandler.exitApp();
                    }}
                  >
                    <Text style={styles.endExamModalButtonTextYes}>Evet</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.endExamModalButtonNo}
                    onPress={() => setShowExitAppModal(false)}
                  >
                    <Text style={styles.endExamModalButtonTextNo}>Hayır</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      </View>
    );
  }

  // Default fallback
  return (
    <View style={styles.container}>
      <Text>Uygulama yükleniyor...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: commonStyles.container,
  safeArea: commonStyles.safeArea,
  headerSmallWithMargin: {
    padding: 10,
    paddingTop: 45,
  },
  titleBig3D: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 65,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
  },
  scrollViewSmall: {
    flex: 1,
    paddingHorizontal: 5,
  },
  scrollViewSmallContentCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  questionCardTransparent: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 5,
    marginBottom: 10,
    marginTop: -120,
    minWidth: 280,
    maxWidth: 400,
    width: '95%',
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  questionNumberBig3DWhite: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    elevation: 6,
    letterSpacing: 1,
    textAlign: 'left',
  },
  questionTextWhite: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 15,
    textAlign: 'left',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  optionsContainerSmall: {
    gap: 10,
    width: '100%',
  },
  optionButtonLargeGray: {
    backgroundColor: '#ececec',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    minWidth: 200,
    maxWidth: 380,
    width: 'auto',
    alignSelf: 'stretch',
    marginVertical: 0,
    flexWrap: 'wrap',
    minHeight: 35,
  },
  selectedOptionOrange: {
    backgroundColor: '#FF9800',
    borderColor: '#F57C00',
    elevation: 8,
    shadowColor: '#FF9800',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  correctOptionReview: {
    backgroundColor: '#fff',
    borderColor: '#4CAF50',
    borderWidth: 3,
    elevation: 8,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  wrongOptionReview: {
    backgroundColor: '#ececec',
    borderColor: 'transparent',
    borderWidth: 0,
    elevation: 8,
    shadowColor: '#F44336',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  optionTextLargeGray: {
    fontSize: 10,
    color: '#222',
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
    flexWrap: 'wrap',
    lineHeight: 14,
  },
  resultContainerSmallRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 7,
    width: '100%',
  },
  prevButtonSmallLeftWrapper: {
    flex: 1,
    alignItems: 'flex-start',
  },
  nextButtonSmallRightWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  nextButtonSmall: {
    backgroundColor: '#667eea',
    padding: 7,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 140,
  },
  nextButtonTextSmall: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  prevButtonSmallYellow: {
    backgroundColor: '#8B0000',
    padding: 7,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 140,
  },
  prevButtonTextSmallWhite: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  finishReviewButton: {
    backgroundColor: '#667eea',
    padding: 7,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 140,
  },
  finishReviewButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  selectedOptionTextSmall: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  correctOptionTextReview: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  wrongOptionTextReview: {
    color: '#F44336',
    fontWeight: 'bold',
  },
  timerContainerLowerBlue: {
    position: 'absolute',
    top: 180,
    right: 24,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 20,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: 0,
    shadowColor: 'transparent',
  },
  timerTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 10,
    letterSpacing: 1,
  },
  examFooterAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  homeButtonMini: {
    backgroundColor: '#fff',
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  exitButtonMini: {
    backgroundColor: '#F44336',
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  endExamModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  endExamModalContent: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 28,
    alignItems: 'center',
    width: 300,
    maxWidth: '90%',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
  },
  endExamModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 24,
    textAlign: 'center',
  },
  endExamModalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 18,
  },
  endExamModalButtonYes: {
    backgroundColor: '#1976D2',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginRight: 4,
  },
  endExamModalButtonNo: {
    backgroundColor: '#ececec',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    flex: 1,
    marginLeft: 4,
  },
  endExamModalButtonTextYes: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  endExamModalButtonTextNo: {
    color: '#1976D2',
    fontWeight: 'bold',
    fontSize: 14,
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingTop: 10,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  completedTitleWhite: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 0,
    marginBottom: 10,
    textShadowColor: '#333',
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 4,
  },
  finalScore: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
  },
  finalScoreWhite: {
    fontSize: 38,
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    fontWeight: 'bold',
  },
  scoreDetailWhite: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'left',
  },
  restartButton: {
    backgroundColor: '#667eea',
    padding: 18,
    borderRadius: 12,
    minWidth: 150,
    alignItems: 'center',
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  restartButtonSmall: {
    backgroundColor: '#667eea',
    padding: 8,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartButtonTextSmall: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  viewAnswersButton: {
    backgroundColor: '#8B0000',
    padding: 8,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
  },
  viewAnswersButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  resultButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: -10,
  },
  successTextWhiteModern: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 18,
    marginTop: 6,
    textAlign: 'center',
    color: '#FFD700',
    textShadowColor: '#FF6B35',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1.5,
    lineHeight: 28,
  },
  congratsTextModern: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFD700',
    textShadowColor: '#FF6B35',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 2,
  },
  failTextWhiteModern: {
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 8,
    marginTop: 6,
    textAlign: 'center',
    color: '#FF6B6B',
    textShadowColor: '#8B0000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1.2,
    lineHeight: 26,
  },
  // Consent Form Styles
  consentContainer: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  consentScrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  consentHeader: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  consentIcon: {
    fontSize: 50,
    marginBottom: 10,
  },
  consentTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#FFD700',
    textAlign: 'center',
    letterSpacing: 1,
  },
  consentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  consentSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#4FC3F7',
    marginBottom: 10,
    marginTop: 5,
  },
  consentText: {
    fontSize: 14,
    color: '#E0E0E0',
    lineHeight: 22,
    marginBottom: 10,
  },
  consentBold: {
    fontWeight: '700',
    color: '#FFD700',
  },
  consentDivider: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginVertical: 15,
  },
  consentWarningBox: {
    backgroundColor: 'rgba(255, 107, 107, 0.15)',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 107, 107, 0.4)',
    marginTop: 10,
  },
  consentWarningIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  consentWarningText: {
    flex: 1,
    fontSize: 13,
    color: '#FF6B6B',
    fontWeight: '600',
    lineHeight: 20,
  },
  consentButtonContainer: {
    marginTop: 25,
    gap: 12,
  },
  consentAcceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  consentAcceptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 1,
  },
  consentRejectButton: {
    backgroundColor: 'transparent',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF6B6B',
  },
  consentRejectButtonText: {
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  consentFooter: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginTop: 20,
    fontWeight: '600',
  },
});