import React from 'react';
import { StyleSheet, View, Text } from 'react-native';


export default function Header() {

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}> Things to do</Text>
        </View>
        
    )
}


const styles = StyleSheet.create({

    header: {
        height: '15%',
        backgroundColor: '#DCFDE4',
        marginBottom: '7.5%',
        display: 'flex',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingTop: '7.5%',
        alignItems: 'center',
    }

})