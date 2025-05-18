// screens/HomeScreen.jsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen({navigation }) {
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
        <TouchableOpacity style={styles.bookItem} onPress={() => navigation.navigate('BookDetail')}>
          <Image
            source={require('../assets/image.png')}
            style={styles.bookImage}
          />
          <Text style={styles.meta}>📆 3d 5h  | ❤️ 75%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookItem}>
          <Image
            source={require('../assets/image copy.png')}
            style={styles.bookImage}
          />
          <Text style={styles.meta}>📆 10d 5h | ❤️ 23%</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.categories}>
        <Text style={styles.category}>Best Seller</Text>
        <Text style={styles.category}>The Latest</Text>
        <Text style={styles.category}>Coming Soon</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  greeting: { color: '#aaa' },
  username: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  pointBtn: {
    backgroundColor: '#ff7043',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  pointText: { color: '#fff', fontWeight: 'bold' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  actionBtn: {
    backgroundColor: '#1e1e1e',
    padding: 12,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center'
  },
  scroll: { marginBottom: 20 },
  bookItem: { marginRight: 12 },
  bookImage: { width: 120, height: 180, borderRadius: 10 },
  meta: { color: '#aaa', marginTop: 4 },
  categories: { flexDirection: 'row', justifyContent: 'space-between' },
  category: { color: '#fff', fontWeight: '600' }
});
