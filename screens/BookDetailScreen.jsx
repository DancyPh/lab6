// screens/BookDetailScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookDetailScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={require('../assets/image.png')}
        style={styles.bookCover}
      />

      <Text style={styles.title}>Other Words For Home</Text>
      <Text style={styles.author}>Jasmine Warga</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>⭐ 4.5</Text>
        <Text style={styles.infoText}>📄 341 Pages</Text>
        <Text style={styles.infoText}>🌐 Eng</Text>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        Jude never thought she’d be leaving her beloved older brother and father behind, all the way...
      </Text>

      <TouchableOpacity style={styles.readButton}>
        <Text style={styles.readText}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#121212' },
  backButton: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  bookCover: {
    width: 120,
    height: 180,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 60
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  author: {
    color: '#bbb',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 10
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  },
  infoText: {
    color: '#fff',
    fontSize: 14
  },
  descriptionTitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  description: {
    color: '#aaa',
    marginTop: 6
  },
  readButton: {
    marginTop: 30,
    backgroundColor: '#ff7043',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  readText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
