import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>My Todos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
