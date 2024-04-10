import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%',
    justifyContent: 'center',
    padding: 20,
  },

  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana, sans-serif',
    marginBottom: 20,
    color: '#000000',
    textAlign: 'center',
  },
  input: {
    alignSelf: 'center',
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
  button1: {
    alignSelf: 'center',
    width: '50%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },
  button3: {
    color: '#007bff',
    textDecorationLine: 'underline',
  },

  links: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '5%',
  },
});
