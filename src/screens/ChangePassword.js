import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ChangePasswordScreen = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        if (oldPassword === '' || newPassword === '' || confirmPassword === '') {
            alert('All fields are mandatory');
            return;
        }

        console.log('Changing password...');
    };

    return (
        <View style={styles.container}>
        <View style = {styles.container1}>
            <TextInput
                style={styles.input}
                placeholder="Old Password"
                placeholderTextColor= '#000'
                secureTextEntry={true}
                value={oldPassword}
                onChangeText={setOldPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="New Password"
                placeholderTextColor='#000'
                secureTextEntry={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />
            <TextInput
                style={styles.input}
                placeholder="Confirm New Password"
                placeholderTextColor='#000'
                secureTextEntry={true}
                value={''}
                onChangeText={''}
            />
            <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
                <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        paddingHorizontal: 20,
    },
    container1 : {
        marginTop : 50,
        width: '100%',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        color : '#000',
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: '#007bff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChangePasswordScreen;
