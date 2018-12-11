import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    marginHorizontal: 2
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginVertical: 4,
    paddingHorizontal: 8
  },
  contentContainer: {
    flexDirection: 'column'
  },
  itemTitle: {
    fontSize: 24,
    color: "#434343"
  },
  itemDate: {
    fontSize: 12,
    color: '#a4a4a4'
  },
  itemIcon: {
    color: '#32db64',
    fontSize: 36
  },
  leftSwipeItem: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 20,
    backgroundColor: '#32db64'
  },
  doneBackground: {
    backgroundColor: '#32db64'
  },
  notDoneBackground: {
    backgroundColor: '#ff5722'
  },
  rightSwipeItem: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: '#ff5722'
  }
});