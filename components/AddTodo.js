import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TextInputComponent } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function AddTodo({ addTodoHandler }) {


    const [textInput, setTextInput] = useState('');

    const textInputHandler = (value) => {
        setTextInput(value)
    }

    return (
        <View style={styles.textInput}>
            <TextInput
                style={styles.textInput}
                placeholder='What to do?'
                clearTextOnFocus
                onChangeText={textInputHandler}
            />
            <TouchableOpacity onPress={() => addTodoHandler(textInput)}>
                <MaterialIcons name="add-circle" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}




const styles = StyleSheet.create({
    addTodo: {
        marginHorizontal: 8,
    },
    textInput: {
        marginBottom: 10,
        paddingLeft: 10,


        borderBottomWidth: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomColor: '#DCFDE4',
    },

})