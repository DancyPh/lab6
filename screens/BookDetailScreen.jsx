// screens/BookDetailScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BookDetailScreen({route, navigation}) {
   const { book } = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Image
        source={book.image}
        style={styles.bookCover}
      />

      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>

      <View style={styles.infoRow}>
        <Text style={styles.infoText}>{book.rating}</Text>
        <Text style={styles.infoText}>{book.pages} Pages</Text>
        <Text style={styles.infoText}>{book.language}</Text>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.description}>
        {book.description}
      </Text>

      <TouchableOpacity style={styles.readButton}>
        <Text style={styles.readText}>Start Reading</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' }, // Nền sáng
  backButton: { position: 'absolute', top: 40, left: 20, zIndex: 10 },
  bookCover: {
    width: 120,
    height: 180,
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 60
  },
  title: {
    color: '#333', // màu chữ tối
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10
  },
  author: {
    color: '#666', // xám nhạt
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
    color: '#444',
    fontSize: 14
  },
  descriptionTitle: {
    color: '#333',
    fontSize: 16,
    marginTop: 20,
    fontWeight: 'bold'
  },
  description: {
    color: '#555',
    marginTop: 6
  },
  readButton: {
    marginTop: 30,
    backgroundColor: '#4CAF50', // xanh lá sáng
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },
  readText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
