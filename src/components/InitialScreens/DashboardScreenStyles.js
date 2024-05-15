import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  title: {
    position: 'relative',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#073d94',
    marginLeft: '2%',
  },
  searchInput: {
    marginVertical: '2%',
    marginHorizontal: '2%',
    position: 'relative',
    backgroundColor: '#ffffff',
    width: wp('95%'),
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000000',
  },
  table: {
    borderWidth: 1,
    borderColor: '#073d94',
    borderRadius: 0,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderLeftWidth: 0.5,
    borderRightWidth: 0.5,
    borderColor: '#073d94',
  },
  tableHeader: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#073d94',
    width: wp('90%'),
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
    borderColor: '#073d94',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#f5dcf4',
    borderRadius: 10,
    padding: 20,
    width: wp('80%'),
    maxWidth: 400,
    maxHeight: hp('80%'),
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
