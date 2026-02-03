import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { topicsData } from '../utils/quizUtils';
import { commonStyles } from '../utils/commonStyles';

const TopicsScreen = ({ onBack, onSelectTopic }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topicsContainer}>
          <Text style={styles.topicsTitle}>İLKYARDIM KONULARI</Text>
          
          <ScrollView 
            style={styles.topicsScrollView} 
            contentContainerStyle={styles.topicsScrollContent}
            showsVerticalScrollIndicator={false}
          >
            {topicsData.map((topic) => (
              <TouchableOpacity
                key={topic.id}
                style={styles.topicButton}
                onPress={() => onSelectTopic(topic)}
              >
                <View style={styles.topicButtonContent}>
                  <Text style={styles.topicNumber}>{topic.id}</Text>
                  <Text style={styles.topicTitle}>{topic.title}</Text>
                  <Ionicons name="chevron-forward" size={20} color="#1976D2" />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          
          {/* Back button */}
          <View style={styles.topicsFooter}>
            <TouchableOpacity 
              style={styles.backToNavigationButton}
              onPress={onBack}
            >
              <Ionicons name="arrow-back" size={16} color="#fff" />
              <Text style={styles.backButtonText}>Ana Menü</Text>
            </TouchableOpacity>
          </View>
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
  topicsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  topicsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    marginBottom: 25,
    textShadowColor: '#333',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
    letterSpacing: 1,
  },
  topicsScrollView: {
    flex: 1,
  },
  topicsScrollContent: {
    paddingBottom: 20,
  },
  topicButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topicButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 15,
  },
  topicNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1976D2',
    backgroundColor: '#E3F2FD',
    width: 32,
    height: 32,
    textAlign: 'center',
    lineHeight: 22,
    borderRadius: 16,
    textAlignVertical: 'center',
  },
  topicTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    lineHeight: 20,
  },
  topicsFooter: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  backToNavigationButton: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    gap: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TopicsScreen;