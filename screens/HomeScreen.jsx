// screens/HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const books = [
  {
    id: 1,
    image: require('../assets/image.png'),
    timeLeft: '📆 3d 5h',
    love: '❤️ 75%',
    title: 'Sách 1',
    rating: '⭐ 4.5',
    pages: '📄 300 ',
    language: '🌐 English',
    description: 'Mô tả sách 1'
  },
  {
    id: 2,
    image: require('../assets/image copy.png'),
    timeLeft: '📆 10d 5h',
    love: '❤️ 23%',
    title: 'Sách 2',
    rating: '⭐ 4.5',
    pages: '📄 300',
    language: '🌐 English',
    description: 'Mô tả sách 2'
  },
  {
    id: 3,
    image: require('../assets/image copy.png'),
    timeLeft: '📆 1d 2h',
    love: '❤️ 40%',
    title: 'Sách 3',
    rating: '⭐ 4.5',
    pages: '📄 300',
    language: '🌐 English',
    description: 'Mô tả sách 3'
  },
  {
    id: 4,
    image: require('../assets/image copy.png'),
    timeLeft: '📆 1d 2h',
    love: '❤️ 40%',
    title: 'Sách 3',
    rating: '⭐ 4.5',
    pages: '📄 300',
    language: '🌐 English',
    description: 'Mô tả sách 3'
  },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good Morning</Text>
          <Text style={styles.username}>Username</Text>
        </View>
        <TouchableOpacity style={styles.pointBtn}>
          <Text style={styles.pointText}>+ 200 point</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionBtn}>
          <Text>📥 Claim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text>🎁 Get Point</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionBtn}>
          <Text>💳 My Card</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal style={styles.scroll}>
        {books.map((book) => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookItem}
            onPress={() => navigation.navigate('BookDetail', { book })}
          >
            <Image source={book.image} style={styles.bookImage} />
            <Text style={styles.meta}>
              {book.timeLeft} | {book.love}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.featuredContainer}>
        <Text style={styles.featuredTitle}>📚 Featured Book</Text>
        <View style={styles.featuredCard}>
          <Image
            source={require('../assets/image.png')}
            style={styles.featuredImage}
          />
          <View style={styles.featuredInfo}>
            <Text style={styles.featuredBookTitle}>The Book Thief</Text>
            <Text style={styles.featuredAuthor}>by Markus Zusak</Text>
            <Text style={styles.featuredDescription} numberOfLines={3}>
              A story narrated by Death about a girl who steals books in Nazi Germany, full of heart and courage.
            </Text>
            <TouchableOpacity style={styles.readNowButton}>
              <Text style={styles.readNowText}>Read Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.categories}>
        <Text style={styles.category}>Best Seller</Text>
        <Text style={styles.category}>The Latest</Text>
        <Text style={styles.category}>Coming Soon</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    color: '#333',
  },
  username: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  pointBtn: {
    backgroundColor: '#ff7043',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  pointText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  actionBtn: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  scroll: {},
  bookItem: {
    marginRight: 12,
  },
  bookImage: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  meta: {
    color: '#444',
    marginTop: 4,
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  category: {
    color: '#000',
    fontWeight: '600',
    borderRadius: 20,
    padding: 8,
    margin: 10,
    backgroundColor: '#fff',
    marginVertical: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  featuredContainer: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  featuredCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  featuredImage: {
    width: 120,
    height: 180,
  },
  featuredInfo: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  featuredBookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  featuredAuthor: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  featuredDescription: {
    fontSize: 13,
    color: '#444',
  },
  readNowButton: {
    marginTop: 8,
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  readNowText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
