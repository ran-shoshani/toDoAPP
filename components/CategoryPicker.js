import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../styles/global';


export default function CategoryPicker({ handleSelectedCategory }) {


    const [selectedValue, setSelectedValue] = useState();

    
    const categories = [
        { label: 'All', value: 'all' },
        { label: 'Completed', value: 'completed' },
        { label: 'Remaining', value: 'remaining' }
    ]


    return (
        <View>
            <RNPickerSelect
                items={categories}
                onValueChange={value => handleSelectedCategory(value)}
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                //placeholder={{ label: ' All ', value: 'all' }}
                placeholder={{ label: 'Select category', value: null }}
            />
        </View>
    )

}

const pickerStyle = StyleSheet.create({
    inputIOS: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        color: colors.primaryText,
    },
    inputAndroid: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        width: '40%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primaryText,
    },
    placeholder: {
        color: colors.primaryText,
    }
})