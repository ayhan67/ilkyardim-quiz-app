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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');

// Örnek sorular
const questions = [
  {
    id: 1,
    question: "Kanama durumunda ilk yapılması gereken nedir?",
    options: [
      "Yarayı ovmak",
      "Doğrudan baskı uygulamak",
      "Yarayı soğuk suyla yıkamak",
      "Turnike yapmak"
    ],
    correctAnswer: 1,
    explanation: "Kanama durumunda ilk olarak temiz bir bez veya gazlı bezle yaranın üzerine doğrudan baskı uygulanmalıdır."
  },
  {
    id: 2,
    question: "Kalp masajı yapılırken göğüs kafesine hangi hızda basınç uygulanmalıdır?",
    options: [
      "Dakikada 60-80 kez",
      "Dakikada 100-120 kez",
      "Dakikada 140-160 kez",
      "Dakikada 30-50 kez"
    ],
    correctAnswer: 1,
    explanation: "Kalp masajı sırasında göğüs kafesine dakikada 100-120 kez basınç uygulanmalıdır."
  },
  {
    id: 3,
    question: "Yanık durumunda ilk müdahale nedir?",
    options: [
      "Buz uygulamak",
      "Soğuk su ile serinletmek",
      "Krema sürmek",
      "Yanığı ovmak"
    ],
    correctAnswer: 1,
    explanation: "Yanık bölgesine 10-20 dakika boyunca soğuk (buzlu değil) su uygulanmalıdır."
  },
  {
    id: 4,
    question: "Bilinçsiz bir kişinin havayolu açıklığını sağlamak için ne yapılmalıdır?",
    options: [
      "Başı öne eğmek",
      "Başı geriye eğip çeneyi kaldırmak",
      "Yan yatırmak",
      "Oturur pozisyona getirmek"
    ],
    correctAnswer: 1,
    explanation: "Bilinçsiz hastanın havayolunu açmak için başı geriye eğilip çene kaldırılmalıdır."
  },
  {
    id: 5,
    question: "Nöbet geçiren bir kişiye nasıl müdahale edilir?",
    options: [
      "Ağzına kaşık koymak",
      "Güvenli bir yere koymak ve beklemek",
      "Soğuk su dökmek",
      "Sarsarak uyandırmaya çalışmak"
    ],
    correctAnswer: 1,
    explanation: "Nöbet geçiren kişi güvenli bir yere konmalı, etrafındaki tehlikeli objeler uzaklaştırılmalı ve nöbet geçmesi beklenmelidir."
  }
];

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
  const [timer, setTimer] = useState(300); // 5 dakika = 300 saniye
  const [timeUp, setTimeUp] = useState(false);
  const timerRef = useRef(null);
  const [cardHeight, setCardHeight] = useState(120);
  const questionCardRef = useRef(null);

  // Cevaplanan soruların doğru/yanlış bilgisini tutmak için dizi
  const [answers, setAnswers] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]); // Kullanıcının seçtiği cevapları sakla

  // Sayaç kırmızı yanıp sönme state'i
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    let blinkInterval;
    if (timer <= 60) {
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
              <Text style={styles.rulesTextSingleLine}>1. Her soru 10 puandır.</Text>
              <Text style={styles.rulesTextSingleLine}>2. Toplam 5 soru mevcuttur.</Text>
              <Text style={styles.rulesTextSingleLine}>3. Süreniz 5 dakikadır.</Text>
              <Text style={styles.rulesTextSingleLine}>4. Doğru yanlışı götürmez.</Text>
              <Text style={styles.rulesTextSingleLine}>5. Geçme notu 80 puandır.</Text>
            </View>
            <TouchableOpacity
              style={styles.startExamButton}
              onPress={() => {
                // Soruları karıştır
                const shuffled = [...questions].sort(() => Math.random() - 0.5);
                setShuffledQuestions(shuffled);
                setCurrentQuestionIndex(0);
                setScore(0);
                setSelectedAnswer(null);
                setShowResult(false);
                setAnsweredQuestions(0);
                setQuizCompleted(false);
                setTimeUp(false);
                setTimer(300);
                setAnswers([]);
                setUserAnswers([]);
                setShowInfo(true);
              }}
            >
              <Text style={styles.startExamButtonText}>Teste Başla</Text>
            </TouchableOpacity>
          </View>
          {/* Sol alt: Ana Sayfa, Sağ alt: Çıkış */}
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
    // Notu 100 üzerinden hesapla
    const totalQuestions = shuffledQuestions.length || questions.length;
    const not = Math.round((score / totalQuestions) * 100);
    const basarili = not >= 80;
    const dogruSayisi = answers.filter(Boolean).length;
    const yanlisSayisi = totalQuestions - dogruSayisi;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.completedContainer}>
            <View style={styles.resultCard}>
              <Image
                source={
                  basarili
                    ? require('./mutlu.png')
                    : require('./uzgun.png')
                }
                style={{ width: 80, height: 80, marginBottom: 10 }}
                resizeMode="contain"
              />
              <Text style={styles.completedTitle}>Test bitti.</Text>
              <Text style={styles.finalScore}>Notunuz: {not}</Text>
              <Text style={styles.finalScore}>
                <Text>Doğru sayınız: </Text>
                <Text style={{ fontWeight: 'bold' }}>{dogruSayisi}</Text>
              </Text>
              <Text style={styles.finalScore}>
                <Text>Yanlış sayınız: </Text>
                <Text style={{ fontWeight: 'bold' }}>{yanlisSayisi}</Text>
              </Text>
              {basarili ? (
                <Text style={styles.successText}>Başarılısınız. Tebrikler</Text>
              ) : (
                <Text style={styles.failText}>Malesef bu sefer olmadı</Text>
              )}
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

  // Test ekranı (sorular karışık ve sayaç var)
  const activeQuestions = shuffledQuestions.length > 0 ? shuffledQuestions : questions;
  const activeCurrentQuestion = activeQuestions[currentQuestionIndex];

  // Sayaç formatı
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
    setTimer(300);
    setTimeUp(false);
    setAnswers([]); // cevap geçmişini sıfırla
    setUserAnswers([]); // kullanıcı cevaplarını sıfırla
    clearInterval(timerRef.current);
  }

  function getScoreColor() {
    const percentage = (score / (shuffledQuestions.length || questions.length)) * 100;
    if (percentage >= 80) return '#4CAF50';
    if (percentage >= 60) return '#FF9800';
    return '#F44336';
  }

  // Soru sayfası (test ekranı) renderı
  if (!showSplash && showInfo && !quizCompleted && !timeUp) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safeArea}>
          {/* Sayaç sağ üst köşe */}
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
          {/* Home ve Exit ikonları sağ/sol alt köşede */}
          <View style={styles.examFooterAbsolute}>
            <TouchableOpacity
              style={styles.homeButtonMini}
              onPress={() => {
                setPendingEndAction('home');
                setShowEndExamModal(true);
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
            <Text style={styles.titleBig3D}>İlkyardım Soru Bankası</Text>
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
                Soru {currentQuestionIndex + 1}/{activeQuestions.length}
              </Text>
              <Text style={styles.questionTextWhite}>{activeCurrentQuestion.question}</Text>
              <View style={styles.optionsContainerSmall}>
                {activeCurrentQuestion.options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.optionButtonLargeGray,
                      selectedAnswer === index && styles.selectedOptionOrange,
                    ]}
                    onPress={() => handleAnswerSelect(index)}
                    activeOpacity={0.8}
                  >
                    <Text
                      style={[
                        styles.optionTextLargeGray,
                        selectedAnswer === index && styles.selectedOptionTextSmall
                      ]}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
              {/* Önceki/Sonraki Soru butonları - her zaman görünür */}
              <View style={styles.resultContainerSmallRow}>
                {currentQuestionIndex > 0 ? (
                  <View style={styles.prevButtonSmallLeftWrapper}>
                    <TouchableOpacity style={styles.prevButtonSmallYellow} onPress={() => {
                      setCurrentQuestionIndex(currentQuestionIndex - 1);
                      // Önceki sorunun cevabını kontrol et ve göster
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
                <Text style={styles.endExamModalTitle}>Uygulamayı kapatmak istiyor musunuz?</Text>
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
    padding: 20,
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
  finalScore: {
    fontSize: 20,
    color: '#555',
    marginBottom: 10,
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
  restartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
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
    bottom: 118, // 2 satır (2x24px+2x10px padding) yukarıya alındı
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    zIndex: 10,
  },
  examFooterAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 118, // 2 satır (2x24px+2x10px padding) yukarıya alındı
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
    justifyContent: 'space-between',
    minWidth: 200,
    maxWidth: 320,
    width: '100%',
    marginVertical: 0,
    // Boyut sabit, seçilince değişmesin
    transitionProperty: 'background-color,border-color',
    transitionDuration: '0.2s',
  },
  selectedOptionGreen: {
    backgroundColor: '#4CAF50',
    borderColor: '#388e3c',
  },
  selectedOptionOrange: {
    backgroundColor: '#FF9800',
    borderColor: '#F57C00',
  },
  correctOptionSmall: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  wrongOptionSmall: {
    backgroundColor: '#F44336',
    borderColor: '#F44336',
  },
  selectedOptionTextSmall: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  optionTextLargeGray: {
    fontSize: 10,
    color: '#222',
    fontWeight: '500',
    flex: 1,
    textAlign: 'left',
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
    justifyContent: 'center', // ortala
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
    minWidth: 210,
    maxWidth: 320,
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
});