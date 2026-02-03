import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ModernFirstAidLogo = () => {
  return (
    <View style={styles.container}>
      {/* Central circle with transparent background */}
      <View style={styles.centralCircle}>
        {/* Medical Cross */}
        <View style={styles.crossContainer}>
          <LinearGradient
            colors={['#e53e3e', '#c53030']}
            style={styles.crossVertical}
          />
          <LinearGradient
            colors={['#e53e3e', '#c53030']}
            style={styles.crossHorizontal}
          />
        </View>
      </View>
      
      {/* Education Book - Top Left */}
      <View style={styles.bookContainer}>
        <LinearGradient
          colors={['#1976D2', '#1565C0']}
          style={styles.book}
        >
          <View style={styles.bookLine1} />
          <View style={styles.bookLine2} />
          <View style={styles.bookLine3} />
          <View style={styles.bookLine4} />
          <View style={styles.bookmark} />
        </LinearGradient>
      </View>
      
      {/* Heart - Top Right */}
      <View style={styles.heartContainer}>
        <Ionicons name="heart" size={24} color="#e53e3e" />
        <View style={styles.pulseContainer}>
          <View style={styles.pulseLine} />
        </View>
      </View>
      
      {/* Medical Bag - Bottom Left */}
      <View style={styles.bagContainer}>
        <View style={styles.bag}>
          <View style={styles.bagHandle} />
          <View style={styles.bagCrossV} />
          <View style={styles.bagCrossH} />
        </View>
      </View>
      
      {/* Stethoscope - Bottom Right */}
      <View style={styles.stethoscopeContainer}>
        <Ionicons name="medical" size={20} color="#fff" />
      </View>
      
      {/* Decorative elements */}
      <View style={[styles.decorCircle, styles.decorCircle1]} />
      <View style={[styles.decorCircle, styles.decorCircle2]} />
      <View style={[styles.decorCircle, styles.decorCircle3]} />
      <View style={[styles.decorCircle, styles.decorCircle4]} />
      
      {/* Title */}
      <Text style={styles.title}>İLKYARDIM EĞİTİMİ</Text>
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
  centralCircle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  crossContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  crossVertical: {
    width: 16,
    height: 60,
    borderRadius: 8,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  crossHorizontal: {
    width: 60,
    height: 16,
    borderRadius: 8,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  bookContainer: {
    position: 'absolute',
    top: 40,
    left: 60,
  },
  book: {
    width: 30,
    height: 35,
    borderRadius: 3,
    padding: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  bookLine1: {
    width: 24,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 1,
    marginBottom: 3,
  },
  bookLine2: {
    width: 20,
    height: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 0.5,
    marginBottom: 2,
  },
  bookLine3: {
    width: 24,
    height: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 0.5,
    marginBottom: 2,
  },
  bookLine4: {
    width: 18,
    height: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 0.5,
  },
  bookmark: {
    position: 'absolute',
    right: 0,
    top: 0,
    width: 4,
    height: 15,
    backgroundColor: '#4CAF50',
  },
  heartContainer: {
    position: 'absolute',
    top: 45,
    right: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pulseContainer: {
    marginLeft: 10,
  },
  pulseLine: {
    width: 40,
    height: 2,
    backgroundColor: '#e53e3e',
    opacity: 0.8,
  },
  bagContainer: {
    position: 'absolute',
    bottom: 60,
    left: 60,
  },
  bag: {
    width: 35,
    height: 25,
    backgroundColor: '#c53030',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  bagHandle: {
    position: 'absolute',
    top: -5,
    width: 25,
    height: 3,
    backgroundColor: '#a02622',
    borderRadius: 1.5,
  },
  bagCrossV: {
    width: 2,
    height: 10,
    backgroundColor: '#ffffff',
    position: 'absolute',
  },
  bagCrossH: {
    width: 10,
    height: 2,
    backgroundColor: '#ffffff',
    position: 'absolute',
  },
  stethoscopeContainer: {
    position: 'absolute',
    bottom: 55,
    right: 70,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  decorCircle: {
    position: 'absolute',
    borderRadius: 50,
  },
  decorCircle1: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: 30,
    left: 30,
  },
  decorCircle2: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    top: 20,
    right: 30,
  },
  decorCircle3: {
    width: 6,
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    bottom: 50,
    left: 20,
  },
  decorCircle4: {
    width: 8,
    height: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    bottom: 50,
    right: 20,
  },
  title: {
    position: 'absolute',
    bottom: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default ModernFirstAidLogo;