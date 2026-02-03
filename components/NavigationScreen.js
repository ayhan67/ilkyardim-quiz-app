import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../utils/commonStyles';

const NavigationScreen = ({ onTopics, onExams }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.navigationContainerCompact}>
          <Text style={styles.navigationTitleCompact}>Hoş Geldiniz!</Text>
          
          <View style={styles.descriptionContainerCompact}>
            <Text style={styles.descriptionTextCompact}>
              Bu uygulama, Sağlık Bakanlığı verileri baz alınarak hazırlanmıştır. 
              İlkyardımcı Eğitimi almış/alacak olan kişilerin bilgilendirilmesi, konu tekrarı yaparak 
              bilgilerini pekiştirmesi amacı ile geliştirilmiştir.
            </Text>
          </View>
          
          <Text style={styles.readyTextCompact}>Şimdi hazırsanız;</Text>
          
          <View style={styles.navigationButtonsContainerCompact}>
            <TouchableOpacity 
              style={styles.navigationButtonCompact}
              onPress={onTopics}
            >
              <View style={styles.buttonContentCompact}>
                <Ionicons name="arrow-back" size={16} color="#fff" />
                <Text style={styles.navigationButtonTextCompact}>KONULAR</Text>
              </View>
              <Text style={styles.buttonSubTextCompact}>Konu anlatımlarını öğrenin</Text>
            </TouchableOpacity>
            
            <View style={styles.buttonSeparatorCompact}>
              <Text style={styles.orTextCompact}>VEYA</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.navigationButtonCompact}
              onPress={onExams}
            >
              <View style={styles.buttonContentCompact}>
                <Text style={styles.navigationButtonTextCompact}>SINAVLAR</Text>
                <Ionicons name="arrow-forward" size={16} color="#fff" />
              </View>
              <Text style={styles.buttonSubTextCompact}>Deneme sınavlarına katılın</Text>
            </TouchableOpacity>
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
  navigationContainerCompact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  navigationTitleCompact: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginBottom: 15,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
  descriptionContainerCompact: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionTextCompact: {
    fontSize: 12,
    color: '#333',
    lineHeight: 18,
    textAlign: 'center',
    fontWeight: '500',
  },
  readyTextCompact: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  navigationButtonsContainerCompact: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  navigationButtonCompact: {
    backgroundColor: '#1976D2',
    borderRadius: 12,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonContentCompact: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 3,
  },
  navigationButtonTextCompact: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  buttonSubTextCompact: {
    color: '#E3F2FD',
    fontSize: 10,
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonSeparatorCompact: {
    alignItems: 'center',
    marginVertical: 5,
  },
  orTextCompact: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default NavigationScreen;