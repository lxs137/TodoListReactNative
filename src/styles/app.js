import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1, 
    backgroundColor: '#f3f3f3', 
    paddingTop: 24
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 22,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalInputStyle: {
    color: '#868686'
  },
  modalLabelStyle: {
    color: '#37a0f4'
  }
});

export const Color = {
  primary: '#3fa0f4',
  accent: '#ff5722',
  check: '#32db64'
}