import React, { useState } from  'react';
import { StyleSheet, Text, View ,FlatList , SafeAreaView } from 'react-native';
import TodoItem from './components/TodoItem'

//
// 
//
// 
//

export default function App() {

const [todos,setTodos] = useState ([
  {
    text: 'todo one',
    id: '1',
    completed: false
  },
  {
    text: 'todo two',
    id: '2',
    completed: false
  },
  {
    text: 'todo three',
    id: '3',
    completed: false
  },
  {
    text: 'todo four',
    id: '4',
    completed: true
  },


])


//function to remove a todo from the list
const removeTodo = (id) => {
  //update the satate, filter the todo base on its on its id
  setTodos((todos) => {
    return todos.filter(todo => todo.id != id);  
  })
}


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <View style={styles.content}>
        {/* todo list */}

        <View style={styles.todoList}>
          {/* flatL list with todos */}

          <FlatList 
          data={todos}
          renderItem = {( {item} ) => (
            <TodoItem item={item} removeTodo={removeTodo}/>
            )}
            keyExtractor={(item) =>item.id}
          /> 
        </View>

        {/* create task button  */}

      </View>


    </SafeAreaView>
  );



  


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  content: {
    padding: 30,

  },
  header: {
    height: '15%',
    backgroundColor: '#DCFDE4',
  },
  todoList: { 
    padding: 10,
  },
  
});


