import React, { useState } from  'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {todoItemStyles , colors} from '../styles/global';


export default function TodoItem ({ item , removeTodoHandler , toggleTodoHandler }) {



return( 
    <View style={todoItemStyles.todoItem}>
        { /* checkbox icon */}
        <TouchableOpacity onPress={() => toggleTodoHandler(item.id)}>
            {/* checkbox icon */}
            <View style={todoItemStyles.todoRow}>
                {/* ternary operator */}

                {item.completed? 
                <MaterialIcons style={todoItemStyles.checkIcon} name="check-circle" size={24} color="black" /> :
                <MaterialIcons style={todoItemStyles.checkIcon} name="check-circle-outline" size={24} color={colors.primaryText} />
                }
                <Text style={[todoItemStyles.todoText, item.completed? todoItemStyles.todoTextPicked : '']}> {item.text} </Text>
            </View>
             
        </TouchableOpacity>
        {/* { deletebutton} */}
        <TouchableOpacity onPress={() => removeTodoHandler(item.id)}>
            <View style={todoItemStyles.deleteIcon}> 

                   {/* ternary operator */}
                {item.completed? 
                <MaterialIcons name="remove-circle" size={24} color="black" /> :
                <MaterialIcons name="remove-circle-outline" size={24} color="black" />
                }

            </View>
        </TouchableOpacity>
  </View>
  )
}


const styles =StyleSheet.create({

    // todoItem: {
    //     backgroundColor: 'green',
    //     marginVertical: 8,
    //     marginHorizontal: 8,


    //     borderEndWidth: 1,
    //     borderColor:'#000',
    //     borderRadius: 5,

    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    
    //   },
    //   todoText: {
    //     fontSize: 24,
    //     fontWeight: 'bold',
        
    //   },

    //   deleteIcon: {
    //       padding: 10,
    //       borderColor: '#000',
    //       borderRadius: 5,
    //   },

    // todoTextPicked:{
    //     textDecorationLine: 'underline line-through',
    // },
    // todoRow:{
    //     padding: 10,
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',

    //     borderWidth: 1,
    //     borderColor:'#000',
    //     borderRadius: 5,
    // },

    // checkIcon:{
    //     paddingRight: 10,
    // }

});