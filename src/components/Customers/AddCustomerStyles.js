import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#f5dcf4',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: hp('70%'),
    width: wp('70%'),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    marginLeft: 100,
  },
  input: {
    width: wp('60%'),
    height: hp('6%'),
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },

  label: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
    textAlign: 'left',
  },
  button: {
    width: wp('28%'),
    height: hp('6%'),
    backgroundColor: '#073d94',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: '2%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dateInput: {
    width: wp('60%'),
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
});
