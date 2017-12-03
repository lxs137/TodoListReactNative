import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import TodoList from './components/todo_list';
import { styles } from './styles/app';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.data_arr = [{
      title: 'Task 1',
      date: new Date().toLocaleString(),
      is_done: true
    }];
    this.state = {
      ds: ds.cloneWithRows(this.data_arr)
    };
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <TodoList dataSource={this.state.ds}></TodoList>
      </View>      
    );
  }
}