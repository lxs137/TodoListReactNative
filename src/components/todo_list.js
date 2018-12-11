import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import TodoItem from './todo_item';
import { styles } from '../styles/list';

export default class TodoList extends Component {
  render() {
    return (
      <ListView
        enableEmptySections={true}
        style={{ marginHorizontal: 2 }}
        dataSource={this.props.dataSource}
        renderSeparator={() => <ListSeparator></ListSeparator>}
        renderRow={(data, sectionID, rowID) => (
          <TodoItem
            data={data}
            index={rowID}
            onItemRemove={this.props.onItemRemove}
            onItemDone={this.props.onItemDone}></TodoItem>
        )}
      />
    );
  }
}

const ListSeparator = (props) => (
  <View style={{ height: 1, width: '100%', backgroundColor: '#c4c4c4' }}></View>
)