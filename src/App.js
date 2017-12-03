import React, { Component } from 'react';
import { View } from 'react-native';
import TodoList from './components/todo_list';
import { styles } from './styles/app';

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <TodoList></TodoList>
      </View>      
    );
  }
}