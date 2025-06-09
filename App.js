import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Modal,
  Dimensions,
  StatusBar,
  Image,
  BackHandler,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { questionBank } from './questionBank';

const { width, height } = Dimensions.get('window');

// questionBank'ten rastgele 40 soru seç
const getRandomQuestions = () => {
  const shuffled = [...questionBank].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 40);
};

export default function App() {
  // Sınavı bitirme modalı için state
  const [showEndExamModal, setShowEndExamModal] = useState(false);
  const [pendingEndAction, setPendingEndAction] = useState(null); // 'home' veya 'exit'
  const [showExitAppModal, setShowExitAppModal] = useState(false);

  // Diğer state'ler
  const [showSplash, setShowSplash] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
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
  const [hasViewedAnswers, setHasViewedAnswers] = useState(false); // Yeni state eklendi

  // Cevaplanan soruların doğru/yanlış bilgisini tutmak için dizi
  const [answers, setAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Kullanıcının seçtiği cevapları sakla

  // Animasyon için yeni state
  const [pulseAnim] = useState(new Animated.Value(1));
  const [shakeAnim] = useState(new Animated.Value(0));

  // Sayaç kırmızı yanıp sönme state'i
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    let blinkInterval;
    if (timer <= 300) { // Son 5 dakikada yanıp sönsün
      blinkInterval = setInterval(() => {
        setBlink((prev) => !prev);
      }, 500);
    } else {
      setBlink(true);
    }
    return () => {
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, [timer]);

  // Sayaç başlatma ve durdurma
  useEffect(() => {
    if (shuffledQuestions.length > 0 && !quizCompleted && !timeUp) {
      timerRef.current = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setTimeUp(true);
            setQuizCompleted(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
    return () => {};
  }, [shuffledQuestions, quizCompleted, timeUp]);

  // Başarı animasyonu
  useEffect(() => {
    if (quizCompleted) {
      const totalQuestions = shuffledQuestions.length || 40;
      const not = Math.round((score / totalQuestions) * 100);
      const basarili = not >= 85; // 85 puan ve üzeri geçer
      
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
        // Başarısızlık animasyonu - sallama efekti
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

  // Splash (Giriş) ekranı
  if (showSplash) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.splashContainer}>
            <View style={styles.splashImageShadow}>
              <Image
                source={require('./ilk-yardim.png')}
                style={styles.splashImage}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.splashTitle}>ilkyardım deneme sınavları</Text>
            <TouchableOpacity
              style={styles.splashButtonSmallShadow}
              onPress={() => setShowSplash(false)}
            >
              <Text style={styles.splashButtonTextWhite}>GİRİŞ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.splashFooter}>
            <Text style={styles.splashFooterText}>Her hakkı saklıdır. 2025</Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // Bilgilendirme ekranı
  if (showInfo === false) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          {/* 3 satır boşluk bırak */}
          <View style={{ height: 48 }} />
          <View style={styles.infoContainer}>
            <Image
              source={require('./test.png')}
              style={styles.infoTopImage}
              resizeMode="contain"
            />
            {/* 2 satır boşluk azaltıldı */}
            <View style={{ height: 52 }} />
            <Text style={styles.rulesTitle}>KURALLAR :</Text>
            <View style={styles.rulesList}>
              <Text style={styles.rulesTextSingleLine}>1. Her soru 2,5 puandır.</Text>
              <Text style={styles.rulesTextSingleLine}>2. Toplam 40 soru mevcuttur.</Text>
              <Text style={styles.rulesTextSingleLine}>3. Süreniz 40 dakikadır.</Text>
              <Text style={styles.rulesTextSingleLine}>4. Doğru yanlışı götürmez.</Text>
              <Text style={styles.rulesTextSingleLine}>5. Geçme notu 85 puandır.</Text>
            </View>
            <TouchableOpacity
              style={styles.startExamButton}
              onPress={() => {
                // Rastgele 40 soru seç
                const randomQuestions = getRandomQuestions();
                setShuffledQuestions(randomQuestions);
                setCurrentQuestionIndex(0);
                setScore(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setAnsweredQuestions(0);
                setQuizCompleted(false);
                setTimeUp(false);
                setTimer(2400); // 40 dakika
                setAnswers([]);
                setUserAnswers([]);
                setShowInfo(true);
              }}
            >
              <Text style={styles.startExamButtonText}>Teste Başla</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoFooterAbsolute}>
            <TouchableOpacity
              style={styles.homeButtonMini}
              onPress={() => {
                // Sınavda değilken direkt ana sayfaya dön
                setShowSplash(true);
                setShowInfo(false);
              }}
            >
              <Ionicons name="home" size={26} color="#1976D2" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.exitButtonMini}
              onPress={() => {
                BackHandler.exitApp();
              }}
            >
              <Ionicons name="exit-outline" size={26} color="#fff" />
            </TouchableOpacity>
          </View>
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
    // Notu 100 üzerinden hesapla (her doğru cevap 2,5 puan)
    const totalQuestions = shuffledQuestions.length || 40;
    const not = Math.round((score * 2.5));
    const basarili = not >= 85; // 85 puan ve üzeri geçer
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
                opacity: basarili ? 0.5 : 1.0 
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
                      setHasViewedAnswers(true); // Butonun tekrar gösterilmemesi için işaretle
                    } else {
                      // Hiç yanlış cevap yoksa
                      alert('Tebrikler! Hiç yanlış cevabınız yok.');
                      setHasViewedAnswers(true); // Bu durumda da buton gizlensin
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
                      setTimer(2400); // 40 dakika
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
    if (userAnswers[currentQuestionIndex] === undefined) {
      if (answerIndex === activeCurrentQuestion.correctAnswer) {
        setScore(score + 1);
      }
      setAnsweredQuestions(answeredQuestions + 1);
    } else {
      // Cevap değiştiriliyorsa score'u yeniden hesapla
      const oldAnswer = userAnswers[currentQuestionIndex];
      const oldCorrect = oldAnswer === activeCurrentQuestion.correctAnswer;
      const newCorrect = answerIndex === activeCurrentQuestion.correctAnswer;
      
      if (oldCorrect && !newCorrect) {
        setScore(score - 1);
      } else if (!oldCorrect && newCorrect) {
        setScore(score + 1);
      }
    }
  }

  function handleNextQuestion() {
    if (currentQuestionIndex < activeQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Önceki cevabı kontrol et ve göster
      const previousAnswer = userAnswers[currentQuestionIndex + 1];
      if (previousAnswer !== undefined) {
        setSelectedAnswer(previousAnswer);
        setShowResult(true);
      } else {
        setSelectedAnswer(null);
        setShowResult(false);
      }
    } else {
      clearInterval(timerRef.current);
      setQuizCompleted(true);
    }
  }

  function resetQuiz() {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions(0);
    setQuizCompleted(false);
    setShowSplash(true);
    setShowInfo(false);
    setShuffledQuestions([]);
    setTimer(2400); // 40 dakika
    setTimeUp(false);
    setAnswers([]); // cevap geçmişini sıfırla
    setUserAnswers([]); // kullanıcı cevaplarını sıfırla
    setIsReviewMode(false); // review mode'u sıfırla
    setWrongQuestions([]);
    setReviewQuestionIndex(0);
    setHasViewedAnswers(false); // Yeni quiz için sıfırla
    clearInterval(timerRef.current);
  }

  function getScoreColor() {
    const percentage = (score / (shuffledQuestions.length || 40)) * 100;
    if (percentage >= 85) return '#4CAF50';
    if (percentage >= 70) return '#FF9800';
    return '#F44336';
  }

  // Soru sayfası (test ekranı) renderı
  if (!showSplash && showInfo && !quizCompleted && !timeUp) {
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
                      setTimer(2400); // 40 dakika
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50', // yeşil arka plan
  },
  safeArea: {
    flex: 1,
  },
  header: {
    padding: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  titleSmall: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleBig3D: {
    fontSize: 13, // eski küçük boyut (önceki 28'di)
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 8,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 3,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 3,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  questionCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  questionNumber: {
    fontSize: 14,
    color: '#667eea',
    fontWeight: '600',
    marginBottom: 10,
  },
  questionNumberSmall: {
    // eski stil, artık kullanılmıyor
  },
  questionNumberBig3D: {
    fontSize: 13,            // changed from 18 to 15
    color: '#667eea',
    fontWeight: 'bold',
    marginBottom: 6,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    elevation: 6,
    letterSpacing: 1,
    textAlign: 'left',
  },
  questionText: {
    fontSize: 15,
    color: '#333',
    fontWeight: '600',
    marginBottom: 25,
    lineHeight: 28,
  },
  optionsContainer: {
    gap: 12,
  },
  optionButton: {
    backgroundColor: '#f8f9fa',
    padding: 18,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selectedOption: {
    borderColor: '#667eea',
    backgroundColor: '#f0f2ff',
  },
  correctOption: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  wrongOption: {
    backgroundColor: '#F44336',
    borderColor: '#F44336',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1,
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: '600',
  },
  resultContainer: {
    marginTop: 25,
    gap: 15,
  },
  nextButton: {
    backgroundColor: '#667eea',
    padding: 18,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    minWidth: 120,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    width: '100%',
    maxWidth: 400,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  explanationText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
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
  resultCardTransparent: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 40,
    alignItems: 'center',
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
  percentage: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#667eea',
    marginBottom: 30,
  
  },
  restartButton: {
    backgroundColor: '#667eea',
    padding: 18,
    borderRadius: 12,
    minWidth: 150,
    alignItems: 'center',
  },
  restartButtonSmall: {
    backgroundColor: '#667eea',
    padding: 8,
    borderRadius: 8,
    flex: 0.48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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
  // Splash (Giriş) ekranı stilleri
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  splashImageShadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    borderRadius: 16,
    marginBottom: 18,
    backgroundColor: 'transparent',
  },
  splashImage: {
    width: 220,
    height: 180,
    borderRadius: 16,
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginBottom: 40,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  splashButton: {
    // eski büyük buton, artık kullanılmıyor
  },
  splashButtonSmall: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
    // eski gölgesiz buton, artık kullanılmıyor
  },
  splashButtonSmallShadow: {
    backgroundColor: '#1976D2',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  splashFooter: {
    alignItems: 'center',
    marginBottom: 18,
  },
  splashFooterText: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.8,
    letterSpacing: 0.5,
  },
  // Bilgilendirme ekranı stilleri
  infoContainer: {
    flex: 1,
    justifyContent: 'flex-start', // yukarı çek
    alignItems: 'center',
    padding: 30,
    paddingTop: 32, // üstten boşluk azaltıldı
  },
  infoTopImage: {
    width: 120,
    height: 120,
    marginBottom: 0,
    alignSelf: 'center',
  },
  rulesTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 18,
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 1,
  },
  rulesList: {
    width: '100%',
    marginBottom: 36,
    gap: 4,
  },
  rulesTextSingleLine: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'left',
    marginBottom: 0,
    lineHeight: 20,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    includeFontPadding: false,
  },
  startExamButton: {
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 18,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 4,
    alignItems: 'center',
  },
  startExamButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  homeButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#1976D2',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  homeButtonText: {
    color: '#1976D2',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  exitButton: {
    backgroundColor: '#F44336',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  exitButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  splashButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  splashButtonTextWhite: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  infoFooterRow: {
    // eski stil, artık kullanılmıyor
  },
  infoFooterAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 108, // 118'den 108'e değiştirildi (10px aşağı)
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  examFooterAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 70, // 118'den 108'e değiştirildi (10px aşağı)
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  timerContainer: {
    // eski sayaç, artık kullanılmıyor
  },
  timerContainerLower: {
    position: 'absolute',
    top: 80,
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
  timerContainerLowerBig: {
    position: 'absolute',
    top: 80,
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
  timerContainerLowerBlue: {
    position: 'absolute',
    top: 180, // updated: shifted 3 rows further down (from 120 to 180)
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
  timerTextBig: {
    // eski sayaç, artık kullanılmıyor
  },
  timerTextBlue: {
    // eski sayaç, artık kullanılmıyor
  },
  timerTextWhite: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
    marginLeft: 10,
    letterSpacing: 1,
  },
  // Küçük test sayfası stilleri
  headerSmall: {
    padding: 10,
    paddingTop: 5,
  },
  headerSmallWithMargin: {
    padding: 10,
    paddingTop: 45, // başlığı 2 satır aşağıya çek
  },
  titleSmall: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  titleBig3D: {
    fontSize: 26, // 3 punto büyütüldü (orijinal 15, şimdi 28)
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 65,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    letterSpacing: 1,
  },
  progressContainerSmall: {
    alignItems: 'center',
  },
  progressTextSmall: {
    color: '#fff',
    fontSize: 10,
    marginBottom: 6,
    fontWeight: '600',
  },
  progressBarSmall: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
  },
  progressFillSmall: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 2,
  },
  scrollViewSmall: {
    flex: 1,
    paddingHorizontal: 5,
  },
  scrollViewSmallContent: {
    paddingBottom: 10,
  },
  scrollViewSmallContentCenter: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 10,
  },
  questionCardSmall: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 5,              // changed from 8 to 5
    marginBottom: 10,
    marginTop: -120,        // added missing comma here
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    minWidth: 210,           // changed from 220 to 210
    maxWidth: 320,
    alignItems: 'flex-start',
  },
  questionNumberSmall: {
    // eski stil, artık kullanılmıyor
  },
  questionNumberBig3D: {
    fontSize: 20,            // changed from 18 to 15
    color: '#667eea',
    fontWeight: 'bold',
    marginBottom: 6,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    elevation: 6,
    letterSpacing: 1,
    textAlign: 'left',
  },
  questionTextSmall: {
    fontSize: 12,
    color: '#333',
    fontWeight: '600',
    marginBottom: 8,
    lineHeight: 15,
    textAlign: 'left',
  },
  optionsContainerSmall: {
    gap: 10,
    width: '100%',
  },
  optionButtonLarge: {
    // eski stil, artık kullanılmıyor
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
  resultContainerSmall: {
    marginTop: 8,
    gap: 7,
    // eski tek kolonlu yapı, artık kullanılmıyor
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
    minWidth: 140, // butonun genişliğini artırarak ortalamayı garanti altına al
  },
  nextButtonTextSmall: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center', // yazıyı ortala
    flex: 1, // yazının tüm alanı kaplamasını sağla
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
  prevButtonSmallYellow: {
    backgroundColor: '#8B0000',
    padding: 7,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    minWidth: 140, // "Sonraki Soru" ile aynı genişlik
  },
  prevButtonTextSmallWhite: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  successText: {
    color: '#388e3c',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 6,
    textAlign: 'center',
  },
  failText: {
    color: '#F44336',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 18,
    marginTop: 6,
    textAlign: 'center',
  },
  homeButtonMini: {
    backgroundColor: '#fff',
    width: 48, // büyütüldü
    height: 48, // büyütüldü
    borderRadius: 24, // büyütüldü
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
    width: 48, // büyütüldü
    height: 48, // büyütüldü
    borderRadius: 24, // büyütüldü
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  timerProgressBarWrapper: {
    position: 'absolute',
    top: 90, // sayaçtan biraz yukarıda
    left: 24,
    right: 24,
    zIndex: 21,
    height: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerProgressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.25)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  timerProgressBarBgRed: {
    backgroundColor: 'rgba(244,67,54,0.18)',
  },
  timerProgressBarFill: {
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  questionCardTransparent: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    padding: 5,
    marginBottom: 10,
    marginTop: -120,
    minWidth: 280, // minimum genişliği artır
    maxWidth: 400, // maksimum genişliği artır
    width: '95%', // ekran genişliğinin %95'ini kullan
    alignSelf: 'center', // ortala
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
  tryAgainTextModern: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFA500',
    textShadowColor: '#FF4500',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 1.5,
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
});