import React, { useState } from  'react';
import { StyleSheet, Text, View , TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



export default function TodoItem ({ item , removeTodo , toggleTodo }) {

const [isCompleted, setIsCompleted] = useState(item.completed);

return( 
    <View style={styles.todoItem}>
        { /* checkbox icon */}
        <TouchableOpacity onPress={() => toggleTodo(item.id)}>
            {/* checkbox icon */}
            <View style={styles.todoRow}>
                {/* ternary operator */}
                
                {isCompleted ? <MaterialIcons style={styles.checkIcon} name="check-circle" size={24} color="black" /> :
                <MaterialIcons style={styles.checkIcon} name="check-circle-outline" size={24} color="black" />}

            </View>
             <Text style={styles.todoText}> {item.text} </Text>
        </TouchableOpacity>
        {/* { deletebutton} */}
        <TouchableOpacity onPress={() => removeTodo(item.id)}>
            <View style={styles.deleteIcon}> 

                   {/* ternary operator */}
                {isCompleted ? 
                <MaterialIcons name="remove-circle" size={24} color="black" /> :
                <MaterialIcons name="remove-circle-outline" size={24} color="black" />
                }

            </View>
        </TouchableOpacity>
  </View>
  )
}


const styles =StyleSheet.create({

    todoItem: {
        backgroundColor: 'green',
        marginVertical: 8,
        marginHorizontal: 8,


        borderEndWidth: 1,
        borderColor:'#000',
        borderRadius: 5,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    
      },
      todoText: {
        fontSize: 32,
        fontWeight: 'bold',
        padding: 10,
      },

      deleteIcon: {
          padding: 10,
          borderColor: '#000',
          borderRadius: 5,
      },

    todoTextPicked:{
        textDecorationLine: 'underline line-through',
    },
    todoRow:{
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        borderWidth: 1,
        borderColor:'#000',
        borderRadius: 5,
    },

    checkIcon:{
        padding: 10,
    }

});