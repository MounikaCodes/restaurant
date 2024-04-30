import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    position: 'relative',
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: '5%',
    color: 'green',
    // marginTop: '5%',
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

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    maxWidth: 400,
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
