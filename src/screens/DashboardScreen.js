import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {

    const navigation = useNavigation();

    const handleAllCustomers = () => {
        navigation.navigate('AllCustomers');
    };

    const handleAddCustomers = () => {
        navigation.navigate('AddCustomers');
    };

    const handleSendMessageToAll = () => {
        navigation.navigate('SendMessage');
    };

    const handleSendMessageToSelected = () => {
        navigation.navigate('SendMessageToSelected');
    };

    const handleSettings = () => {
        navigation.navigate('Settings');
    };


    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#FF5733' }]} onPress={handleAllCustomers}>
                <Text style={styles.cardText}>All Customers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#5D8AA8' }]} onPress={handleAddCustomers}>
                <Text style={styles.cardText}>Add A Customer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#33FF57' }]} onPress={handleSendMessageToAll}>
                <Text style={styles.cardText}>Send Message to All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#5733FF' }]} onPress={handleSendMessageToSelected}>
                <Text style={styles.cardText}>Send Message for Selected People</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.card, { backgroundColor: '#FF57A7' }]} onPress={handleSettings}>
                <Text style={styles.cardText}>Settings</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default DashboardScreen;
