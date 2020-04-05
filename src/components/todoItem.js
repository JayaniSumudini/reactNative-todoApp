import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TodoItem({item, onPressHandler}) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <View style={styles.icon}>
        <TouchableOpacity onPress={() => onPressHandler(item.key)}>
          <Icon name="delete" size={18} color="#000000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // flex: 1,
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    flex: 1,
  },
  text: {
    marginRight: 10,
    flex: 5,
  },
});

export default TodoItem;
