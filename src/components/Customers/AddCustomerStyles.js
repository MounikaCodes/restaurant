import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fffff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    marginLeft: 100,
  },
  input: {
    width: '100%',
    height: 40,
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
    width: '45%',
    height: 40,
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
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000000',
  },
});
