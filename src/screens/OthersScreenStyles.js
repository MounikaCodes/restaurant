import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  lottie: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    zIndex: -2,
  },

  text: {
    marginTop: 40,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
});
