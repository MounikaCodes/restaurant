import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

const ProfileScreen = () => {
    const [username, setUsername] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@example.com');
    const [dob, setDob] = useState('1990-01-01');
    const [mobile, setMobile] = useState('123-456-7890');

    const handleEdit = (field) => {
        console.log('Editing ' + field);
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }}
                    style={styles.profileImage}
                />
                <TouchableOpacity onPress={() => handleEdit('image')} style={styles.editIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
                </TouchableOpacity>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Username:</Text>
                <TextInput
                    style={styles.fieldInput}
                    value={username}
                    onChangeText={setUsername}
                    editable={false}
                />
                <TouchableOpacity onPress={() => handleEdit('username')} style={styles.editIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
                </TouchableOpacity>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Email:</Text>
                <TextInput
                    style={styles.fieldInput}
                    value={email}
                    onChangeText={setEmail}
                    editable={false}
                />
                <TouchableOpacity onPress={() => handleEdit('email')} style={styles.editIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
                </TouchableOpacity>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Date of Birth:</Text>
                <TextInput
                    style={styles.fieldInput}
                    value={dob}
                    onChangeText={setDob}
                    editable={false}
                />
                <TouchableOpacity onPress={() => handleEdit('dob')} style={styles.editIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
                </TouchableOpacity>
            </View>
            <View style={styles.fieldContainer}>
                <Text style={styles.fieldLabel}>Mobile:</Text>
                <TextInput
                    style={styles.fieldInput}
                    value={mobile}
                    onChangeText={setMobile}
                    editable={false}
                />
                <TouchableOpacity onPress={() => handleEdit('mobile')} style={styles.editIcon}>
                    <FontAwesomeIcon icon={faEdit} size={20} color="#0000ff" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft : 10
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 40,
        marginTop: 20,
    },
    editIcon: {
        marginLeft: 10,
    },
    fieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        width: '100%',
    },
    fieldLabel: {
        width: 100, 
        marginRight: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    fieldInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        color: '#000',
    },
});

export default ProfileScreen;
