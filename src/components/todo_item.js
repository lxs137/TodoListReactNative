import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeable from 'react-native-swipeable';
import { styles } from '../styles/list';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, date, is_done } = this.props.data;
    return (
      <Swipeable leftContent={<LeftContent is_done={is_done}></LeftContent>}
        onLeftActionRelease={() => this.props.onItemDone(this.props.index)}>
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
      </Swipeable>      
    );
  }
}

class LeftContent extends Component {
  render() {
    return (
      <View style={[
        styles.leftSwipeItem, 
        this.props.is_done ? styles.notDoneBackground : styles.doneBackground]}>
        <Text>{this.props.is_done ? 'NotDone' : 'Done'}</Text>
      </View>
    )
  }
}