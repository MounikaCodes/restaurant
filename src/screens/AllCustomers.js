import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {getToken} from '../data/storage';
const AllCustomersScreen = () => {
  const [count, setCount] = useState(0);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchData();
  }, []);
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
  const columnWidths = [80, 150, 200, 150, 150];
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <Text style={styles.title}>Total Customers: {count}</Text>
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
          {customers.map((customer, index) => (
            <View key={index} style={styles.tableRow}>
              <Text
                style={[
                  styles.tableData,
                  styles.border,
                  {width: columnWidths[0]},
                ]}>
                {index + 1}
              </Text>
              <Text
                style={[
                  styles.tableData,
                  styles.border,
                  {width: columnWidths[1]},
                ]}>
                {customer[1]}
              </Text>
              <Text
                style={[
                  styles.tableData,
                  styles.border,
                  {width: columnWidths[2]},
                ]}>
                {customer[2]}
              </Text>
              <Text
                style={[
                  styles.tableData,
                  styles.border,
                  {width: columnWidths[3]},
                ]}>
                {customer[3]}
              </Text>
              <Text
                style={[
                  styles.tableData,
                  styles.border,
                  {width: columnWidths[4]},
                ]}>
                {customer[4]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'green',
    marginTop: 40,
    marginLeft: 20,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 'auto',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  tableHeader: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
    width: '90%',
  },
  tableData: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    textAlign: 'center',
    flex: 1,
    color: '#000',
  },
  border: {
    borderRightWidth: 1,
    borderColor: '#000',
  },
});

export default AllCustomersScreen;
