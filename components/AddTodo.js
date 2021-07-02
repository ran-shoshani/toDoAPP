import React, { useState } from 'react';
import { StyleSheet, View , Text , TextInput , Button } from 'react-native';


export default function AddTodo() {


    const [textInput, setTextInput] = useState('');
    
    const textInputHandler = (value) => {
        setTextInput(value)
    }

    return(
        <View style={styles.textInput}>
            <Textinput 
            style={styles.textInput}
            placeholder='What to do?'
            clearTextOnFocus
            onChangeText={textInputHandler}
            />
        </View>
    )
}




const styles = styleSheet.create({ 
    addTodo: {
        marginHorizontal: 8,
    },
textInput:{
    marginBottom: 10,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#DCFDE4',
},

})