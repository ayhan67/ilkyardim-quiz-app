import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function TestBookLogo() {
  return (
    <View style={styles.container}>
      {/* Main Book Container */}
      <LinearGradient
        colors={['#2196F3', '#1976D2']}
        style={styles.bookContainer}
      >
        {/* Book Pages */}
        <View style={styles.bookPages}>
          <View style={styles.page1} />
          <View style={styles.page2} />
          <View style={styles.page3} />
        </View>
        
        {/* Book Cover */}
        <LinearGradient
          colors={['#1976D2', '#0D47A1']}
          style={styles.bookCover}
        >
          {/* Book Title */}
          <Text style={styles.bookTitle}>TEST</Text>
          <Text style={styles.bookSubtitle}>KİTABI</Text>
          
          {/* Quiz Icon */}
          <Ionicons name="document-text" size={24} color="#fff" style={styles.quizIcon} />
        </LinearGradient>
        
        {/* Book Spine */}
        <LinearGradient
          colors={['#0D47A1', '#1565C0']}
          style={styles.bookSpine}
        />
      </LinearGradient>
      
      {/* Pen */}
      <View style={styles.penContainer}>
        {/* Pen Body */}
        <LinearGradient
          colors={['#FF5722', '#D84315']}
          style={styles.penBody}
        />
        
        {/* Pen Tip */}
        <View style={styles.penTip} />
        
        {/* Pen Cap */}
        <LinearGradient
          colors={['#424242', '#212121']}
          style={styles.penCap}
        />
        
        {/* Pen Clip */}
        <View style={styles.penClip} />
      </View>
      
      {/* Question Mark Icon */}
      <View style={styles.questionMarkContainer}>
        <Ionicons name="help" size={20} color="#FF9800" />
      </View>
      
      {/* Check Mark Icon */}
      <View style={styles.checkMarkContainer}>
        <Ionicons name="checkmark-circle" size={18} color="#4CAF50" />
      </View>
      
      {/* Decorative Elements */}
      <View style={styles.decorativeCircle1} />
      <View style={styles.decorativeCircle2} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 280,
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'relative',
  },
  bookContainer: {
    width: 140,
    height: 110,
    borderRadius: 8,
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  bookPages: {
    position: 'absolute',
    right: -3,
    top: 3,
    width: 135,
    height: 105,
  },
  page1: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  page2: {
    position: 'absolute',
    width: '98%',
    height: '98%',
    backgroundColor: '#fafafa',
    borderRadius: 6,
    top: 1,
    left: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  page3: {
    position: 'absolute',
    width: '96%',
    height: '96%',
    backgroundColor: '#f5f5f5',
    borderRadius: 6,
    top: 2,
    left: 2,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  bookCover: {
    width: 130,
    height: 100,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 3,
  },
  bookTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bookSubtitle: {
    color: '#E3F2FD',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  quizIcon: {
    marginTop: 8,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  bookSpine: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 8,
    height: 100,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  penContainer: {
    position: 'absolute',
    right: 30,
    top: 40,
    width: 80,
    height: 12,
    transform: [{ rotate: '45deg' }],
  },
  penBody: {
    width: 60,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    left: 10,
    top: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  penTip: {
    width: 12,
    height: 6,
    backgroundColor: '#FFD700',
    borderRadius: 3,
    position: 'absolute',
    left: 68,
    top: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  penCap: {
    width: 12,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
    left: 0,
    top: 1,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  penClip: {
    width: 3,
    height: 8,
    backgroundColor: '#757575',
    borderRadius: 2,
    position: 'absolute',
    left: 2,
    top: -2,
  },
  questionMarkContainer: {
    position: 'absolute',
    left: 40,
    top: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  checkMarkContainer: {
    position: 'absolute',
    right: 40,
    bottom: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 11,
    width: 22,
    height: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  decorativeCircle1: {
    position: 'absolute',
    left: 20,
    bottom: 30,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 193, 7, 0.6)',
    shadowColor: '#FFC107',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  decorativeCircle2: {
    position: 'absolute',
    right: 20,
    top: 20,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(156, 39, 176, 0.6)',
    shadowColor: '#9C27B0',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
});