import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  background: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  Card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: wp('100%'),
    height: hp('65%'),
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: hp('15%'),
    paddingHorizontal: wp('12%'),
  },

  title: {
    fontSize: hp('4%'),
    fontWeight: 'bold',
    fontFamily: 'Verdana, sans-serif',
    marginBottom: hp('2.5%'),
    color: '#000000',
    textAlign: 'center',
  },

  input: {
    color: 'black',
    alignSelf: 'center',
    width: wp('90%'),
    height: 45,
    // height: hp('5%'),
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: hp('2%'),
    paddingHorizontal: wp('2.5%'),
  },
  button: {
    alignSelf: 'center',
    width: wp('60%'),
    backgroundColor: '#073d94',
    borderRadius: 5,
    paddingVertical: hp('1.5%'),
    marginTop: hp('2.5%'),
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: hp('2%'), // responsive font size
  },
  button2: {
    alignSelf: 'center',
    marginTop: hp('2.5%'),
    color: '#073d94',
    textDecorationLine: 'underline',
  },
});
