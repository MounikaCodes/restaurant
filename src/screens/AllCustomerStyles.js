import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    display: 'flex',
    position: 'relative',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: 'green',
    marginTop: '5%',
    marginLeft: '2%',
  },
  searchInput: {
    marginVertical: '2%',
    marginHorizontal: '2%',
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '95%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000000',
  },
  table: {
    // borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#000000',
  },
  tableHeader: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#073d94',
    width: '90%',
  },
  tableData: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    color: '#000000',
  },
  border: {
    borderWidth: 0.5,
    borderColor: '#000000',
  },
});
