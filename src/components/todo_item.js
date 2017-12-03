import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles/list';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, date, is_done } = this.props.data;
    return (
      <View style={styles.itemContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.itemTitle}>{title}</Text>
          <Text style={styles.itemDate}>{date}</Text>
        </View>
        {
          is_done ? (
            <Icon name="md-checkmark" style={styles.itemIcon}></Icon>
          ) : null
        }
      </View>
    );
  }
}