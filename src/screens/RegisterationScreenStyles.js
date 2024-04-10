import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  Card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '90%',
    height: '60%',
    justifyContent: 'center',
    alignContent: 'center',
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
    width: '90%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 17,
    paddingHorizontal: 10,
  },
  button: {
    alignSelf: 'center',
    width: '60%',
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  button2: {
    alignSelf: 'center',
    marginTop: 20,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});
