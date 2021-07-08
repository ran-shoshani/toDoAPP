import React, { useState, useEffect } from 'react';
import { View, FlatList, SafeAreaView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import CategoryPicker from './components/CategoryPicker';

import { appStyles } from './styles/global';
//
// 
//
// 
//

export default function App() {

  // state  with todos
  const [todos, setTodos] = useState([]);

  const [category, setCategory] = useState();

  // starte with filtered Todos
  const [filteredTodos, setFilteredTodos] = useState([]);

  // constant for the AsyncStorage
  const TODO_LIST_STORAGE = 'TODO_LIST_STORAGE';



  //check if the arrray holding todos has 0 elements, if so, load from device storage
  //empty array passed as second argument means this useEffect will only run on mount/unmount
  // it does not depend on any changing values or changing states and does not need to re-run
  // since we only want to check devices storage once!!!!
  useEffect(() => {
    console.log("useEffect,[]");
    if (todos.length == 0) {
      loadFromStorage();
    }
  }, []);

  // save to storage after each render when the state of the todos has been changed.
  useEffect(() => {
    console.log("useEffect,[todos]");
    saveToStorage();
    filterTodoData(category);
  },[todos]);

useEffect(() => {
  console.log("useEffect,[category]"),
  console.log("category selected: ", category);
  filterTodoData(category);
},[category]);




  //filter the todo list based on the category selections
  const filterTodoData = (value) => {


    //  temp todo array
    let updatedTodos = [];

    switch (value) {
      case 'all':
        setFilteredTodos(todos);
        break;
      case 'completed':
        updatedTodos = todos.filter(todo => todo.completed == true);
        setFilteredTodos(updatedTodos);
        break;
      case 'remaining':
        updatedTodos = todos.filter(todo => todo.completed == false);
        setFilteredTodos(updatedTodos);
        break;

      default:
        setFilteredTodos(todos);

    }
  }


  //function to remove a todo from the list
  const removeTodoHandler = (id) => {

    // filter through the todos array, loop for the todo with the correct id and remove it
    const updatedTodos = todos.filter(todo => todo.id != id);

    //save the updated todos array into the state
    setTodos(updatedTodos);

  }


  const saveToStorage = async () => {
    try {
      await AsyncStorage.setItem(TODO_LIST_STORAGE, JSON.stringify(todos))
        .then(() => {
          //log a success message after storing the todo list
          console.log('data stored successfully');
        })
    } catch (err) {
      console.log(err);
    }
  }

  const loadFromStorage = async () => {
    try {
      await AsyncStorage.getItem(TODO_LIST_STORAGE)
        .then((stringifyTodoList) => {
          // if todolist is not null, there's a string to parse
          if (stringifyTodoList) {
            console.log("stringifyTodoList: ", stringifyTodoList);
            const parseTodoList = JSON.parse(stringifyTodoList)
            setTodos(parseTodoList);
          }
        });
    } catch (err) {
      console.log(err);
    }
  }




  // switch the state of the completed boolean for the clicked todo
  const toggleTodoHandler = (id) => {

    // map through the todos array, look for the todo with correct id and flip the completed value
    const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);

    // save the updated todos into the this state
    setTodos(updatedTodos);
  }


  // alert for text input
  const createAlert = () => {
    Alert.alert(
      "input too short!",
      " ",
      [{ text: "OK" }],
    )
  }

  // add the new object (todo) with the text input and the default values
  const addTodoHandler = (textInput) => {


    // of the string.length is too short, port alert instead of adding todo
    if (textInput.length <= 2) {
      console.log("input too short!");
      createAlert();

      //break the addTodoHandler function
      return;
    }


    const todo = {
      text: textInput,
      id: (new Date().getTime()).toString(),
      completed: false
    }


    //add the new todo object to the todos array
    const updatedTodos = todos.concat(todo);

    //save the update todos into the state
    setTodos(updatedTodos);

    // add will show on the console
    console.log("addTodoHandler: ", todos);

  }

  //function to render the Todo items in the flatlist component
  const renderTodos = ({ item }) => (
    <TodoItem item={item} removeTodoHandler={removeTodoHandler} toggleTodoHandler={toggleTodoHandler} />
  )


  // whipe the todo list by reverting it back to its initial state
  const deleteList = () => {
    setTodos([]);
  }




  //-------------------------------------
  // function to filter the todo list by Complete or Remaining or All
  const handleSelectedCategory = (value) => {
    // filter the todos based on selected item
    setCategory(value);
    console.log("category selected: ", category);
  }

  return (
    <SafeAreaView style={appStyles.container}>
      <View style={appStyles.content}>

      {/* Header */}
      <Header deleteList={deleteList} />
        <CategoryPicker handleSelectedCategory={handleSelectedCategory} />
        {/* todo list */}
        <View style={appStyles.todoList}>
          {/* flatL list with todos */}

          <FlatList
            data={filteredTodos}
            renderItem={renderTodos}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* create task button  */}
        <View style={appStyles.footer}>
        <AddTodo addTodoHandler={addTodoHandler} />
        </View>
      </View>
    </SafeAreaView>
  );






}



