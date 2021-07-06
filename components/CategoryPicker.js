import React, { useState } from 'react';
import { View , StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { colors } from '../styles/global'; 


export default function CategoryPicker({ handleSelectedItem }) {


    const categories = [
        //{label: 'All', value: 'all'},
        {label: 'Completed', value: 'completed'},
        {label: 'Remaining', value: 'remaining' }
    ]


    return (
        <View>
            <RNPickerSelect
                items={categories}
                onValueChange={value => handleSelectedItem(value)}
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{label: ' All ', value: 'all'}}
                //placeholder={{label: 'Select category'}}
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
        borderRadius: 5
    },
    inputAndroid: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5
    }
})