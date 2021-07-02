import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

//
// 
//
// 
//

export default function App() {

  const [todos, setTodos] = useState( [ ] );


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
      id: (new Date().getTime()).toString(),
      completed: false
    }

    setTodos(todos.concat(todo));
    console.log(todos);
  }



  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header/>
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
    padding: 20,

  },
  header: {
    height: '15%',
    backgroundColor: '#DCFDE4',
  },
  todoList: {
    //padding: 10,
    height: '80%',
    paddingBottom: 3,
  },

});


