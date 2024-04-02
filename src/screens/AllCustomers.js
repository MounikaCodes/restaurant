import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {getToken, removeToken} from '../data/storage';

const AllCustomersScreen = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleLogout}
          style={{position: 'absolute', top: '30%', left: '65%', zIndex: 1}}>
          <Icon name="logout" color="white" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);
  const handleLogout = async () => {
    // Clear AsyncStorage and navigate to Login screen
    await removeToken();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  const rowHeight = 50;
  useEffect(() => {
    // Filter customers whenever the search query changes
    filterCustomers();
  }, [searchQuery, customers]);

  const fetchData = async () => {
    try {
      // Retrieve token
      const token = await getToken();
      if (!token) {
        console.error('Token not found');
        return;
      }

      // Fetch data from the API
      const response = await fetch(
        `https://mssriharsha.pythonanywhere.com/customers?token=${token}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Extract customers array from the response and update state
      setCustomers(data.customers);
      console.log(data);
      // Update count based on the number of customers received
      setCount(data.customers.length);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, e.g., show error message
    }
  };

  const filterCustomers = () => {
    const filtered = customers.filter(
      customer =>
        customer[1].toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer[2].toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCustomers(filtered);
  };

  const columnWidths = [80, 150, 200, 150, 150];

  const renderItem = ({item, index}) => (
    <View style={styles.tableRow}>
      <Text style={[styles.tableData, styles.border, {width: columnWidths[0]}]}>
        {index + 1}
      </Text>
      <Text style={[styles.tableData, styles.border, {width: columnWidths[1]}]}>
        {item[1]}
      </Text>
      <Text style={[styles.tableData, styles.border, {width: columnWidths[2]}]}>
        {item[2]}
      </Text>
      <Text style={[styles.tableData, styles.border, {width: columnWidths[3]}]}>
        {item[3]}
      </Text>
      <Text style={[styles.tableData, styles.border, {width: columnWidths[4]}]}>
        {item[4]}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by name or email"
        placeholderTextColor="#ccc"
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
      />
      <Text style={styles.title}>Total Customers: {count}</Text>
      <ScrollView horizontal>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text
              style={[
                styles.tableHeader,
                styles.border,
                {width: columnWidths[0]},
              ]}>
              Serial No
            </Text>
            <Text
              style={[
                styles.tableHeader,
                styles.border,
                {width: columnWidths[1]},
              ]}>
              Customer Name
            </Text>
            <Text
              style={[
                styles.tableHeader,
                styles.border,
                {width: columnWidths[2]},
              ]}>
              Customer Email
            </Text>
            <Text
              style={[
                styles.tableHeader,
                styles.border,
                {width: columnWidths[3]},
              ]}>
              Customer Mobile
            </Text>
            <Text
              style={[
                styles.tableHeader,
                styles.border,
                {width: columnWidths[4]},
              ]}>
              Date of Birth
            </Text>
          </View>
          {/* <FlatList
            data={filteredCustomers}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          /> */}

          <FlatList
            data={filteredCustomers}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            style={{height: filteredCustomers.length * rowHeight}} // Set height dynamically
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    display: 'flex',
    position: 'relative',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: '5%',
    color: 'green',
    marginTop: '5%',
    marginLeft: '2%',
  },
  searchInput: {
    borderWidth: 1,
    marginVertical: '2%',
    marginHorizontal: '2%',
    position: 'relative',
    backgroundColor: '#ffffff',
    width: '95%',
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000000',
  },
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000000',
  },
  tableHeader: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#073d94',
    width: '90%',
  },
  tableData: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    color: '#000000',
  },
  border: {
    borderRightWidth: 1,
    borderColor: '#000000',
  },
});

export default AllCustomersScreen;
