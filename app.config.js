// app.config.js - Expo Dynamic Configuration
// Environment variables (.env) için dinamik yapılandırma
require('dotenv').config();

module.exports = {
    expo: {
        name: 'İlk Yardım Soru Bankası',
        slug: 'ilkyardim-soru-bankasi',
        version: '2.3.0',
        orientation: 'portrait',
        icon: './assets/icon.png',
        userInterfaceStyle: 'light',
        splash: {
            image: './ilk-yardim.png',
        },
        assetBundlePatterns: ['**/*'],
        ios: {
            supportsTablet: true,
            bundleIdentifier: 'com.ilkyardim.sorubankasi',
        },
        android: {
            adaptiveIcon: {
                foregroundImage: './assets/adaptive-icon.png',
                backgroundColor: '#667eea',
            },
            package: 'com.ilkyardim.sorubank',
            config: {
                // googleMobileAdsAppId removed
            },
        },
        web: {
            favicon: './assets/favicon.png',
        },
        extra: {
            eas: {
                projectId: '9b8c8dba-ccce-4747-af02-242b77602889',
            },
        },
        plugins: [
            'expo-font',
        ],
    },
};
