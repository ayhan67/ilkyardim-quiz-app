import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import TestBookLogo from '../TestBookLogo';
import { getPointsPerQuestion, getPassingScore } from '../utils/quizUtils';
import { commonStyles } from '../utils/commonStyles';

const ExamInfoScreen = ({ onStartExam, onBackToHome, selectedQuestionCount, setSelectedQuestionCount }) => {
  const pointsPerQuestion = getPointsPerQuestion(selectedQuestionCount);
  const passingScore = getPassingScore(selectedQuestionCount);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.infoContainer}>
          <View style={styles.infoTopImageContainer}>
            <TestBookLogo />
          </View>
          <Text style={styles.rulesTitle}>KURALLAR :</Text>
          <View style={styles.rulesList}>
            <Text style={styles.rulesTextSingleLine}>1. Her soru {pointsPerQuestion} puandır.</Text>
            <Text style={styles.rulesTextSingleLine}>2. Toplam {selectedQuestionCount} soru mevcuttur.</Text>
            <Text style={styles.rulesTextSingleLine}>3. Süreniz {selectedQuestionCount} dakikadır.</Text>
            <Text style={styles.rulesTextSingleLine}>4. Doğru yanlışı götürmez.</Text>
            <Text style={styles.rulesTextSingleLine}>5. Geçme notu {passingScore} puandır.</Text>
          </View>
          
          {/* Soru sayısı seçimi ve teste başla butonları */}
          <View style={styles.examOptionsContainer}>
            <Text style={styles.questionCountTitle}>Test Soru Sayısı Seç:</Text>
            
            <View style={styles.examOptionsRow}>
              <View style={styles.questionCountSelector}>
                <View style={styles.questionCountOptions}>
                  {/* 10 Soru ve Teste Başla aynı hizada */}
                  <View style={styles.buttonRowHorizontal}>
                    <TouchableOpacity
                      style={[
                        styles.questionCountOptionEqualSize,
                        selectedQuestionCount === 10 && styles.questionCountOptionSelected
                      ]}
                      onPress={() => setSelectedQuestionCount(10)}
                    >
                      <Text style={[
                        styles.questionCountOptionTextSmall,
                        selectedQuestionCount === 10 && styles.questionCountOptionTextSelected
                      ]}>10 Soru</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                      style={styles.actionButtonEqualSize}
                      onPress={onStartExam}
                    >
                      <Text style={styles.actionButtonTextSmall}>Teste Başla</Text>
                    </TouchableOpacity>
                  </View>
                  
                  {/* 20 Soru ve Ana Sayfa aynı hizada */}
                  <View style={styles.buttonRowHorizontal}>
                    <TouchableOpacity
                      style={[
                        styles.questionCountOptionEqualSize,
                        selectedQuestionCount === 20 && styles.questionCountOptionSelected
                      ]}
                      onPress={() => setSelectedQuestionCount(20)}
                    >
                      <Text style={[
                        styles.questionCountOptionTextSmall,
                        selectedQuestionCount === 20 && styles.questionCountOptionTextSelected
                      ]}>20 Soru</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={styles.actionButtonEqualSizeHome}
                      onPress={onBackToHome}
                    >
                      <Ionicons name="home" size={12} color="#fff" />
                      <Text style={styles.actionButtonTextSmall}>Ana Sayfa</Text>
                    </TouchableOpacity>
                  </View>
                  
                  {/* 40 Soru ve boş alan aynı hizada - buton boyutları eşit */}
                  <View style={styles.buttonRowHorizontal}>
                    <TouchableOpacity
                      style={[
                        styles.questionCountOptionEqualSize,
                        selectedQuestionCount === 40 && styles.questionCountOptionSelected
                      ]}
                      onPress={() => setSelectedQuestionCount(40)}
                    >
                      <Text style={[
                        styles.questionCountOptionTextSmall,
                        selectedQuestionCount === 40 && styles.questionCountOptionTextSelected
                      ]}>40 Soru (Orjinal)</Text>
                    </TouchableOpacity>
                    
                    {/* Boş alan - aynı boyutta görünmez buton */}
                    <View style={styles.actionButtonEqualSizeInvisible} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={commonStyles.splashFooter}>
          <Text style={commonStyles.splashFooterText}>Her hakkı saklıdır. 2025</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  safeArea: {
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
  },
  infoTopImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 24,
    backgroundColor: 'transparent',
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
  examOptionsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    gap: 15,
  },
  examOptionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    gap: 20,
  },
  buttonRowHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 15,
  },
  questionCountSelector: {
    width: '100%',
  },
  questionCountTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 5,
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  questionCountOptions: {
    gap: 6,
  },
  questionCountOptionEqualSize: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1976D2',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
    minHeight: 40,
    justifyContent: 'center',
  },
  questionCountOptionSelected: {
    backgroundColor: '#1976D2',
  },
  questionCountOptionTextSmall: {
    color: '#1976D2',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionCountOptionTextSelected: {
    color: '#fff',
  },
  actionButtonEqualSize: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
  },
  actionButtonEqualSizeHome: {
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
  },
  actionButtonEqualSizeInvisible: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
    gap: 4,
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
  },
  actionButtonTextSmall: {
    color: '#fff',
    fontSize: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ExamInfoScreen;