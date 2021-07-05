import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Things to do</Text>
            <MaterialIcons name="delete-sweep" size={40} color="black" />
        </View>
        
    )
}


const styles = StyleSheet.create({

    header: {
        height: '15%',
        backgroundColor: '#DCFDE4',
        //marginBottom: '7.5%',
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: '7.5%',
        alignItems: 'center',
    }

})