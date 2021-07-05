import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {headerStyles , colors} from '../styles/global';

export default function Header({deleteList}) {

    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}> Things to do</Text>
            <TouchableOpacity onPress={() =>deleteList()}>
                <MaterialIcons name="delete-sweep" size={40} color={colors.primaryText} />
            </TouchableOpacity>
        </View>

    )
}


//const styles = StyleSheet.create({

    // header: {
    //     height: '15%',
    //     backgroundColor: '#DCFDE4',
    //     //marginBottom: '7.5%',

    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-around',
    // },
    // headerText: {
    //     fontSize: 36,
    //     fontWeight: 'bold',

    // }

//})