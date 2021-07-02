import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

//
// 
//
// 
//

export default function App() {

  const [todos, setTodos] = useState([
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
  const removeTodoHandler = (id) => {
    //update the satate, filter the todo base on its on its id
    setTodos((todos) => {
      return todos.filter(todo => todo.id != id);
    })
  }


  const toggleTodoHandler = (id) => {

    console.log(id);
  }


  const addTodoHandler = (textInput) => {
    const todo = {
      text: textInput,
      id: (new Date().getTime.toString()),
      completed: false
    }

    setTodos(todos.concat(todo));
    console.log(todos);
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
            renderItem={({ item }) => (
              <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* create task button  */}
        <AddTodo addTodoHandler={addTodoHandler} />
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


