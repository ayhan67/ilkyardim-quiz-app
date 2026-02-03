// Common styles used across multiple components

import { StyleSheet } from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4CAF50',
  },
  safeArea: {
    flex: 1,
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
});