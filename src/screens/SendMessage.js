import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SendMessageScreen = () => {
    const [message, setMessage] = useState('');

    const handleSendMessage = () => {

        console.log('Message sent:', message);

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Send Message</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your message here"
                placeholderTextColor="#000000"
                multiline={true}
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity style={styles.button} onPress={handleSendMessage}>
                <Text style={styles.buttonText}>Send</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)', 
        paddingHorizontal: 20,
        
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop : 40,
        color: '#000',
        marginLeft : 100,
    },
    input: {
        width: '100%',
        height: 150,
        borderColor: '#cccccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        textAlignVertical: 'top', 
        color: '#000000',
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

export default SendMessageScreen;
