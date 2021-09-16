import React from 'react';
import { StyleSheet, View } from 'react-native';
import Search from './components/Search';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name='md-code' size={50} style={styles.cod} />
      </View>

      <Search />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
  },
  cod: {
    marginLeft: 100,
    color: '#fff',
  },
  header: {
    backgroundColor: 'rgb(25, 40, 170)',
    width: 500
  }
});
