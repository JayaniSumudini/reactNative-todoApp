import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddTodo from '../components/addTodo';

function Home() {
  const [todos, setTodos] = useState([
    {text: 'dog', key: '1'},
    {text: 'cat', key: '2'},
    {text: 'elephant', key: '3'},
    {text: 'bird', key: '4'},
  ]);

  const onPressHandler = (key) => {
    setTodos((preItems) => preItems.filter((item) => item.key !== key));
  };

  const addTodo = (newItem) => {
    if (newItem) {
      setTodos([...todos, {text: newItem, key: Math.random().toString()}]);
    } else {
      Alert.alert('Adding failed', 'Can not add empty value');
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addTodo={addTodo} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} onPressHandler={onPressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
    // marginBottom: 50,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
export default Home;
