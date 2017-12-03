import React, { Component } from 'react';
import { Button, View, ListView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';
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
      isShowModal: false,
      newTaskTitle: '',
      ds: ds.cloneWithRows(this.data_arr)
    };
  }

  _onShowModal = () => {
    this.setState({
      isShowModal: true
    });
  }

  _onModalSubmit = () => {
    this.setState({
      isShowModal: false,
      newTaskTitle: ''
    })
  }

  _onModalCancel = () => {
    this.setState({
      isShowModal: false,
      newTaskTitle: ''
    });
  }

  _onModalInputChange = (value) => {
    this.setState({
      newTaskTitle: value
    });
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <TodoList dataSource={this.state.ds}></TodoList>
        <ActionButton buttonColor="#ff5722">
          <ActionButton.Item buttonColor='#3fa0f4' title="新任务" onPress={this._onShowModal}>
            <Icon name="md-create" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        <Modal isVisible={this.state.isShowModal}>
          <View style={styles.modalContainer}>
            <Sae
              label={'任务内容'}
              iconClass={FontAwesomeIcon}
              iconName={'pencil'}
              iconColor={'#37a0f4'}
              // TextInput props
              autoCapitalize={'none'}
              autoCorrect={false}
              inputStyle={styles.modalInputStyle}
              labelStyle={styles.modalLabelStyle}
              value={this.state.newTaskTitle}
              onChangeText={this._onModalInputChange}
            />
            <Button title="确认" onPress={this._onModalSubmit} color='#3fa0f4'></Button>
            <Button title="取消" onPress={this._onModalCancel} color='#ff5722'></Button>
          </View>
        </Modal>
      </View>      
    );
  }
}