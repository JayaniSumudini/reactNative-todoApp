import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function SandBox() {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingTop: 40,
    backgroundColor: '#ddd',
  },
  boxOne: {
    // flex: 1,
    backgroundColor: 'violet',
    padding: 10,
  },
  boxTwo: {
    // flex: 0.5,
    backgroundColor: 'gold',
    padding: 10,
  },
  boxThree: {
    // flex: 1,
    backgroundColor: 'coral',
    padding: 10,
  },
  boxFour: {
    // flex: 1,
    backgroundColor: 'skyblue',
    padding: 10,
  },
});
export default SandBox;
