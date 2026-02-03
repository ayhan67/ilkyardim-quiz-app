import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import ModernFirstAidLogo from '../ModernFirstAidLogo';
import { commonStyles } from '../utils/commonStyles';

const SplashScreen = ({ onStart }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.splashContainer}>
          <View style={styles.splashImageShadow}>
            <ModernFirstAidLogo />
          </View>
          <Text style={styles.splashTitle}>ilkyardım konu anlatımı</Text>
          <TouchableOpacity
            style={styles.splashButtonSmallShadow}
            onPress={onStart}
          >
            <Text style={styles.splashButtonTextWhite}>GİRİŞ</Text>
          </TouchableOpacity>
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
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  splashImageShadow: {
    borderRadius: 24,
    marginBottom: 18,
    backgroundColor: 'transparent',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashTitle: {
    fontSize: 24,
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
  splashButtonTextWhite: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default SplashScreen;