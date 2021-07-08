import React, { useState } from 'react';
import { View , TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { addTodoStyles } from '../styles/global';

export default function AddTodo({ addTodoHandler }) {


    const [textInput, setTextInput] = useState('');

    const textInputHandler = (value) => {
        setTextInput(value)
    }

    const clearInput = ()  => {
        setTextInput('');
    }

    return (
        <View style={addTodoStyles.addTodo}>
            
            <TextInput
                value={textInput}
                style={addTodoStyles.textInput}
                placeholder='What to do?'
                clearTextOnFocus
                onChangeText={textInputHandler}
            />
            <TouchableOpacity onPress={() => {addTodoHandler(textInput); clearInput()}}>

                <MaterialIcons style={addTodoStyles.addIcon} name="add-circle" size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}




//const styles = StyleSheet.create({
    // addTodo: {
    //     marginHorizontal: 8,

    //     borderBottomWidth: 2,
    //     borderBottomLeftRadius: 3,
    //     borderBottomRightRadius: 3,
    //     borderBottomColor: 'green',

    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    // },
    // textInput: {
    //     marginBottom: 10,
    //     paddingLeft: 10,

    // },

    // addIcon: {
    //     padding: 10,
    // },

//})