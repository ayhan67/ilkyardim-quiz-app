import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';

// Get screen width for responsive image sizing
const { width: screenWidth } = Dimensions.get('window');

// Topic images mapping
const topicImages = {
  // Vücut Sistemleri
  circulatory_system: require('../assets/images/topics/circulatory_system.png'),
  respiratory_system: require('../assets/images/topics/respiratory_system.png'),
  nervous_system: require('../assets/images/topics/nervous_system.png'),
  musculoskeletal_system: require('../assets/images/topics/musculoskeletal_system.png'),
  digestive_system: require('../assets/images/topics/digestive_system.png'),
  urinary_system: require('../assets/images/topics/urinary_system.png'),
  skin_system: require('../assets/images/topics/skin_system.png'),
  // Kanamalar
  nosebleed_first_aid: require('../assets/images/topics/nosebleed_first_aid.png'),
  // Şok
  shock_position: require('../assets/images/topics/shock_position.png'),
  // Hava Yolu Tıkanıklığı
  heimlich_maneuver: require('../assets/images/topics/heimlich_maneuver.png'),
  // Bilinç Bozuklukları
  recovery_position: require('../assets/images/topics/recovery_position.png'),
  // Yanıklar
  burn_degrees: require('../assets/images/topics/burn_degrees.png'),
  // Acil Taşıma Teknikleri
  firefighter_carry: require('../assets/images/topics/firefighter_carry.png'),
  cradle_carry: require('../assets/images/topics/cradle_carry.png'),
  rautek_maneuver: require('../assets/images/topics/rautek_maneuver.png'),
  // Temel Yaşam Desteği
  cpr_adult: require('../assets/images/topics/cpr_adult.png'),
  cpr_child: require('../assets/images/topics/cpr_child.png'),
  cpr_infant: require('../assets/images/topics/cpr_infant.png'),
  aed_device: require('../assets/images/topics/aed_device.png'),
};
import { Ionicons } from '@expo/vector-icons';
import { commonStyles } from '../utils/commonStyles';

// Import with fallback
let topicsContent = {};
try {
  const imported = require('../utils/quizUtils');
  topicsContent = imported.topicsContent || {};
} catch (error) {
  console.warn('Error importing topicsContent:', error);
}

const TopicContentScreen = ({ topic, onBackToTopics, onBackToHome }) => {
  // Get content for this topic with safety check
  const content = topicsContent && topic && topic.id ? topicsContent[topic.id] : null;


  // If no content available, show placeholder
  if (!content) {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.topicContentContainer}>
            <Text style={styles.topicContentTitle}>{topic.title}</Text>

            <ScrollView
              style={styles.topicContentScrollView}
              contentContainerStyle={styles.topicContentScrollContent}
              showsVerticalScrollIndicator={false}
            >
              <View style={styles.topicContentCard}>
                <Text style={styles.topicContentText}>
                  Bu konuya ait eğitim içeriği henüz hazırlanmaktadır.
                  {'\n\n'}
                  Konu: {topic.title}
                  {'\n\n'}
                  Yakında bu sayfada detaylı bilgileri bulabileceksiniz.
                </Text>
              </View>
            </ScrollView>

            {/* Navigation buttons */}
            <View style={styles.topicContentFooter}>
              <TouchableOpacity
                style={styles.backToTopicsButton}
                onPress={onBackToTopics}
              >
                <Ionicons name="arrow-back" size={16} color="#fff" />
                <Text style={styles.backButtonText}>Konular</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.backToHomeButton}
                onPress={onBackToHome}
              >
                <Ionicons name="home" size={16} color="#fff" />
                <Text style={styles.backButtonText}>Ana Menü</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }

  // Render content sections
  const renderSection = (section, index) => {
    // Get appropriate style based on section flags
    let sectionStyle = styles.section;
    let contentStyle = styles.sectionContent;

    if (section.isHighlight) {
      sectionStyle = styles.sectionHighlight;
      contentStyle = styles.sectionContentHighlight;
    } else if (section.isWarning) {
      sectionStyle = styles.sectionWarning;
      contentStyle = styles.sectionContentWarning;
    } else if (section.isImportant) {
      sectionStyle = styles.sectionImportant;
      contentStyle = styles.sectionContentImportant;
    } else if (section.isEmergency) {
      sectionStyle = styles.sectionEmergency;
      contentStyle = styles.sectionContentEmergency;
    }

    return (
      <View key={index} style={sectionStyle}>
        {section.heading && (
          <Text style={styles.sectionHeading}>{section.heading}</Text>
        )}

        {section.content && section.content.length > 0 && (
          <Text style={contentStyle}>{section.content}</Text>
        )}

        {/* Render topic image if exists */}
        {section.image && topicImages[section.image] && (
          <View style={styles.imageContainer}>
            <Image
              source={topicImages[section.image]}
              style={styles.topicImage}
              resizeMode="contain"
            />
            {section.imageCaption && (
              <Text style={styles.imageCaption}>{section.imageCaption}</Text>
            )}
          </View>
        )}

        {section.subsections && section.subsections.map((subsection, subIndex) => {
          let subStyle = styles.subsection;
          let subContentStyle = styles.subsectionContent;

          if (subsection.isImportant) {
            subStyle = styles.subsectionImportant;
            subContentStyle = styles.subsectionContentImportant;
          }

          return (
            <View key={subIndex} style={subStyle}>
              {subsection.subheading && (
                <Text style={styles.subsectionHeading}>{subsection.subheading}</Text>
              )}
              {subsection.content && (
                <Text style={subContentStyle}>{subsection.content}</Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.topicContentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.topicIcon}>{content.icon}</Text>
            <Text style={styles.topicContentTitle}>{content.title}</Text>
          </View>

          <ScrollView
            style={styles.topicContentScrollView}
            contentContainerStyle={styles.topicContentScrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.topicContentCard}>
              {content.sections.map((section, index) => renderSection(section, index))}
            </View>
          </ScrollView>

          {/* Navigation buttons */}
          <View style={styles.topicContentFooter}>
            <TouchableOpacity
              style={styles.backToTopicsButton}
              onPress={onBackToTopics}
            >
              <Ionicons name="arrow-back" size={16} color="#fff" />
              <Text style={styles.backButtonText}>Konular</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backToHomeButton}
              onPress={onBackToHome}
            >
              <Ionicons name="home" size={16} color="#fff" />
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
  topicContentContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  topicIcon: {
    fontSize: 40,
    marginBottom: 10,
  },
  topicContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
    textAlign: 'center',
    textShadowColor: '#333',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
    lineHeight: 24,
  },
  topicContentScrollView: {
    flex: 1,
  },
  topicContentScrollContent: {
    paddingBottom: 20,
  },
  topicContentCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  topicContentText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    textAlign: 'center',
    fontWeight: '500',
  },
  section: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#1976D2',
  },
  sectionHighlight: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  sectionWarning: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#fff3cd',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#ffc107',
  },
  sectionImportant: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffe5e5',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#dc3545',
  },
  sectionEmergency: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffebee',
    borderRadius: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#f44336',
    borderWidth: 2,
    borderColor: '#f44336',
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
  },
  sectionContentHighlight: {
    fontSize: 14,
    color: '#0d47a1',
    lineHeight: 22,
    fontWeight: '500',
  },
  sectionContentWarning: {
    fontSize: 14,
    color: '#856404',
    lineHeight: 22,
  },
  sectionContentImportant: {
    fontSize: 14,
    color: '#721c24',
    lineHeight: 22,
    fontWeight: '500',
  },
  sectionContentEmergency: {
    fontSize: 16,
    color: '#c62828',
    lineHeight: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subsection: {
    marginTop: 12,
    marginLeft: 10,
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#90caf9',
  },
  subsectionImportant: {
    marginTop: 12,
    marginLeft: 10,
    padding: 12,
    backgroundColor: '#fff5f5',
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#ef5350',
  },
  subsectionHeading: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1565c0',
    marginBottom: 8,
  },
  subsectionContent: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },
  subsectionContentImportant: {
    fontSize: 13,
    color: '#b71c1c',
    lineHeight: 20,
    fontWeight: '500',
  },
  topicContentFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    gap: 15,
  },
  backToTopicsButton: {
    backgroundColor: '#8B0000',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
    flex: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  backToHomeButton: {
    backgroundColor: '#1976D2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    gap: 8,
    flex: 1,
    justifyContent: 'center',
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
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  topicImage: {
    width: screenWidth - 100,
    height: 200,
    borderRadius: 8,
  },
  imageCaption: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default TopicContentScreen;