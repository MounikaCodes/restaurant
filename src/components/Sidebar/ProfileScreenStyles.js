import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 40,
    marginTop: 20,
  },
  editIcon: {
    marginLeft: 10,
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  fieldLabel: {
    width: 100,
    marginRight: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  fieldInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: '#000',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#073d94',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingHorizontal: '5%',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
