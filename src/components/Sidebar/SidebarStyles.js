import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sidebarContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  fullContainer: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#ccc',
    width: '85%',
    height: '100%',
  },
  logoContainer: {
    marginVertical: '10%',
    backgroundColor: '#ccc',
    width: '100%',
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: '5%',
    marginHorizontal: '10%',
    borderRadius: 100,
  },
  editIcon: {
    display: 'flex',
    justifyContent: 'center',
  },
  userName: {
    marginTop: '8%',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#073d94',
    fontSize: 30,
    fontWeight: 'bold',
  },
  links: {
    marginTop: '10%',
  },
  sidebarButton: {
    marginTop: '5%',
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    backgroundColor: '#ccc',
    flexDirection: 'row',
  },

  sidebarButtonLarge: {
    width: '100%',
  },
  sidebarItem: {
    fontSize: 16,
    color: '#073d94',
    paddingVertical: '2%',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    marginTop: '2%',
    backgroundColor: '#073d94',
    paddingHorizontal: 2,
    marginBottom: '1%',
  },
  dropdownButton: {
    marginBottom: '1%',
    paddingVertical: '2%',
    paddingHorizontal: '10%',
    backgroundColor: '#073d94',
    flexDirection: 'row',
    width: '100%',
  },
  dropdownButtonLarge: {
    width: '100%',
  },
  dropdownItem: {
    fontSize: 16,
    color: 'black',
    paddingVertical: '3%',
    fontWeight: 'bold',
  },
  logoutIcon: {
    marginLeft: '8%',
    marginTop: '13%',
    backgroundColor: '#073d94',
    width: '14%',
    padding: '3%',
    borderRadius: 20,
    color: '#ffffff',
  },
});
