import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    color: '#000000',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Verdana, sans-serif',
    marginBottom: 20,
    color: '#000000',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
  button1: {
    width: '50%',
    height: 40,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText1: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button2: {
    marginTop: 10,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
