import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';

function AddTodo({addTodo}) {
  const [newItem, setItem] = useState('');
  return (
    <View>
      <TextInput
        style={styles.inputBox}
        placeholder="add new item here"
        value={newItem}
        onChangeText={item => setItem(item)}
      />
      <Button
        title="add"
        onPress={() => {
          addTodo(newItem);
          setItem('');
        }}
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
export default AddTodo;
