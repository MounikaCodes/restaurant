import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: '25%',
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: '5%',
    marginHorizontal: '10%',
    borderRadius: 100,
    backgroundColor: 'red',
  },
  sidebarContainer: {
    position: 'relative',
    width: '85%',
    height: '100%',
    backgroundColor: '#ffffff',
  },
  sidebarButton: {
    paddingVertical: '3%',
    paddingHorizontal: '10%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
  },
  sidebarButtonLarge: {
    width: '100%',
  },
  sidebarItem: {
    fontSize: 16,
    color: '#406792',
    paddingVertical: '2%',
    fontWeight: 'bold',
  },
  dropdownContainer: {
    marginTop: '2%',
    backgroundColor: '#406792',
    paddingHorizontal: 2,
    marginBottom: '1%',
  },
  dropdownButton: {
    marginBottom: '1%',
    paddingVertical: '2%',
    paddingHorizontal: '10%',
    backgroundColor: '#406792',
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
    backgroundColor: '#406792',
    width: '14%',
    padding: '3%',
    borderRadius: 20,
    color: '#ffffff',
  },
});
