import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { TransitionPresets } from '@react-navigation/stack';

const OtherSettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This Page is Under Development</Text>
            <LottieView 
                style={styles.lottie}
                source={require('../../lottie/one.json')}
                autoPlay
                loop
            />
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    lottie: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        zIndex: -2,
    },

    text: {
        marginTop : 40,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color : 'blue',
    },
});

export default OtherSettingsScreen;
