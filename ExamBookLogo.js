import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ExamBookLogo = () => {
  return (
    <View style={styles.container}>
      {/* Main Book */}
      <View style={styles.bookContainer}>
        <LinearGradient
          colors={['#1976D2', '#1565C0']}
          style={styles.bookCover}
        >
          {/* Book spine */}
          <View style={styles.bookSpine} />
          
          {/* Book pages */}
          <View style={styles.pagesContainer}>
            <View style={styles.page1} />
            <View style={styles.page2} />
            <View style={styles.page3} />
          </View>
          
          {/* Book title area */}
          <View style={styles.bookTitleArea}>
            <Text style={styles.bookTitle}>TEST</Text>
            <Text style={styles.bookSubtitle}>KİTABI</Text>
          </View>
          
          {/* Test icon on book */}
          <View style={styles.testIconContainer}>
            <Ionicons name="document-text" size={24} color="#fff" />
          </View>
        </LinearGradient>
      </View>
      
      {/* Pen */}
      <View style={styles.penContainer}>
        <LinearGradient
          colors={['#FF6B35', '#FF8C42']}
          style={styles.penBody}
        >
          <View style={styles.penTip} />
          <View style={styles.penClip} />
        </LinearGradient>
      </View>
      
      {/* Additional elements */}
      <View style={styles.checkmark}>
        <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
      </View>
      
      <View style={styles.pencilIcon}>
        <Ionicons name="pencil" size={16} color="#FFD700" />
      </View>
      
      {/* Decorative dots */}
      <View style={[styles.decorDot, styles.dot1]} />
      <View style={[styles.decorDot, styles.dot2]} />
      <View style={[styles.decorDot, styles.dot3]} />
      
      {/* Title */}
      <Text style={styles.logoTitle}>SINAV HAZIRLIK</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 230,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'transparent',
  },
  bookContainer: {
    position: 'absolute',
    top: 30,
    left: 70,
    transform: [{ rotate: '-5deg' }],
  },
  bookCover: {
    width: 120,
    height: 160,
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    position: 'relative',
  },
  bookSpine: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  pagesContainer: {
    position: 'absolute',
    right: 8,
    top: 8,
    bottom: 8,
    width: 6,
  },
  page1: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    height: '30%',
    marginBottom: 2,
    borderRadius: 2,
  },
  page2: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    height: '25%',
    marginBottom: 2,
    borderRadius: 2,
  },
  page3: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    height: '20%',
    borderRadius: 2,
  },
  bookTitleArea: {
    alignItems: 'center',
    marginTop: 20,
  },
  bookTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  bookSubtitle: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  testIconContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  penContainer: {
    position: 'absolute',
    top: 80,
    right: 60,
    transform: [{ rotate: '25deg' }],
  },
  penBody: {
    width: 8,
    height: 80,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  penTip: {
    position: 'absolute',
    bottom: -4,
    left: 2,
    width: 4,
    height: 6,
    backgroundColor: '#333',
    borderRadius: 2,
  },
  penClip: {
    position: 'absolute',
    top: -2,
    left: 1,
    width: 6,
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 3,
  },
  checkmark: {
    position: 'absolute',
    top: 50,
    right: 40,
  },
  pencilIcon: {
    position: 'absolute',
    bottom: 80,
    left: 50,
  },
  decorDot: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
  },
  dot1: {
    top: 40,
    left: 40,
  },
  dot2: {
    top: 60,
    right: 30,
    backgroundColor: 'rgba(76, 175, 80, 0.6)',
  },
  dot3: {
    bottom: 60,
    right: 50,
    backgroundColor: 'rgba(255, 193, 7, 0.6)',
  },
  logoTitle: {
    position: 'absolute',
    bottom: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 1,
  },
});

export default ExamBookLogo;