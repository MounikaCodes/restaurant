import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const ForgotPasswordScreen = () => {
    const [mobile, setMobile] = useState('');

    const handleResetPassword = () => {
        if (mobile === '') {
            alert('Please enter your mobile number');
            return;
        }
        console.log('Reset Password button clicked');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your mobile number to reset your password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your Mobile Number"
                placeholderTextColor="#000000" 
                keyboardType="phone-pad"
                value={mobile}
                onChangeText={setMobile}
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color : '#000'
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color : 'blue',
        marginTop: 30
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#cccccc',
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop : 20
    },
    button: {
        width: '50%',
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

export default ForgotPasswordScreen;
