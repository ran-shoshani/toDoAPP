import React from 'react';
import { View, Text, TouchableOpacity , Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {headerStyles , colors} from '../styles/global';

export default function Header({deleteList}) {


    const alertDeleteButton = () => {
        Alert.alert(
            "clear list",
            "are you sure you want to clear the list?",
            [
                {text:"Cancel"},
                {text:"OK", onPress:()=> deleteList()}
            ]
        )
    }

    return (
        <View style={headerStyles.header}>
            <Text style={headerStyles.headerText}> Things to do</Text>
            <TouchableOpacity onPress={() =>alertDeleteButton()}>
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