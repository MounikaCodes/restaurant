import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  ScrollView,
  RefreshControl,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {removeToken, getToken} from '../../data/storage';
import {styles} from './DashboardScreenStyles';
import Sidebar from '../Sidebar/Sidebar';
import AddCustomerScreen from '../Customers/AddCustomer';

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const [customers, setCustomers] = useState([]);
  const [token, setToken] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showAddCustomerModal, setShowAddCustomerModal] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const scrollViewRef = useRef();

  useEffect(() => {
    // Retrieve token when component mounts
    const fetchToken = async () => {
      const userToken = await getToken();
      setToken(userToken);
    };
    fetchToken();
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
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
      console.log('data');
      // Update count based on the number of customers received
      setCount(data.customers.length);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors, e.g., show error message
    }
  };
  const handleEdit = customer => {
    navigation.navigate('EditCustomer', {customerData: customer});
    fetchData();
  };
  const handleDelete = customer => {
    console.log(customer[2]);
    fetch(
      `https://mssriharsha.pythonanywhere.com/customers?customer_email=${customer[2]}&token=${token}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({
        //   customer_email: customer[2],
        //   token: token,
        // }),
      },
    )
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Customer Removed Succesfully', data);
        Alert.alert('Customer Removed Succesfully');
        fetchData();
      })
      .catch(error => {
        console.error('Error:', error);
        // Show error alert message
        Alert.alert('Error', 'Network failed. Please try again later.');
      });
  };
  const filterCustomers = () => {
    const filtered = customers.filter(
      customer =>
        customer[1].toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer[2].toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCustomers(filtered);
  };
  const columnWidths = [80, 150, 200, 150, 150, 50, 70];
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
      <TouchableOpacity
        onPress={() => handleEdit(item)}
        style={[
          styles.tableData,
          styles.border,
          {
            width: columnWidths[5],
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Icon name="edit" color="blue" size={20} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleDelete(item)}
        style={[
          styles.tableData,
          styles.border,
          {
            width: columnWidths[6],
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Icon name="delete" color="red" size={20} />
      </TouchableOpacity>
    </View>
  );
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   fetchData();
  //   setRefreshing(false);
  // };
  const handleAddCustomer = () => {
    setShowAddCustomerModal(false);
    setRefreshDashboard(true);
  };
  const handleLogout = async () => {
    // Clear AsyncStorage and navigate to Login screen
    await removeToken();
    navigation.reset({
      index: 0,
      routes: [{name: 'Login'}],
    });
  };
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleMenuIconPress}
          style={{position: 'absolute', top: '30%', left: '20%', zIndex: 1}}>
          <Icon name="menu" color="#073d94" size={25} />
        </TouchableOpacity>
      ),
    });

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={handleLogout}
          style={{position: 'absolute', top: '30%', left: '65%', zIndex: 1}}>
          <Icon name="logout" color="#073d94" size={25} />
        </TouchableOpacity>
      ),
    });
  }, []);
  const handleMenuIconPress = () => {
    setSidebarOpen(prevState => !prevState); // Toggle the sidebar state
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );
  const handleCancel = () => {
    setShowAddCustomerModal(false);
    fetchData();
  };

  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    setScrollY(offsetY);
  };

  const scrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
    }
  };

  const onRefresh = () => {
    if (scrollY === 0) {
      setRefreshing(true);
      fetchData();
      setRefreshing(false);
    } else {
      scrollToTop();
      setRefreshing(true); // Set refreshing after scrolling to top
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or email"
          placeholderTextColor="#ccc"
          onChangeText={text => setSearchQuery(text)}
          value={searchQuery}
        />
        <ScrollView
          ref={scrollViewRef}
          onScroll={handleScroll}
          style={{height: '70%', backgroundColor: 'white'}}
          horizontal
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={[styles.table]}>
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
              <Text
                style={[
                  styles.tableHeader,
                  styles.border,
                  {
                    width: columnWidths[5],
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                Edit
              </Text>
              <Text
                style={[
                  styles.tableHeader,
                  styles.border,
                  {
                    width: columnWidths[6],
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                Delete
              </Text>
            </View>

            <FlatList
              data={filteredCustomers}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              style={{
                height: filteredCustomers.length * rowHeight,
              }}
            />
          </View>
        </ScrollView>
        <TouchableOpacity
          style={styles.scrollToTopButton}
          onPress={scrollToTop}>
          <Icon name="keyboard-arrow-up" size={30} color="#073d94" />
        </TouchableOpacity>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: '2%',
          }}>
          <Text style={[styles.title, {marginTop: '3%', marginLeft: '3%'}]}>
            Total Customers: {count}
          </Text>
          <TouchableOpacity
            onPress={() => setShowAddCustomerModal(true)}
            style={[
              styles.title,
              {
                display: 'flex',
                flexDirection: 'row',
                padding: '2%',
                marginRight: '5%',
                elevation: 2,
                borderRadius: 10,
                width: '40%',
                backgroundColor: '#073d94',
              },
            ]}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 20,
              }}>
              Add Customer
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {sidebarOpen && (
        <View style={styles.sidebar}>
          <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
        </View>
      )}
      {/* AddCustomerScreen Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showAddCustomerModal}
        onRequestClose={() => setShowAddCustomerModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setShowAddCustomerModal(false)}
              style={styles.closeButton}>
              <Icon name="close" size={25} color="#073d94" />
            </TouchableOpacity>
            <AddCustomerScreen
              handleAddCustomer={handleAddCustomer}
              handleCancel={handleCancel}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DashboardScreen;
