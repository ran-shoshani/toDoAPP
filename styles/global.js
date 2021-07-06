import {StyleSheet} from "react-native";


export const colors = {
    //primary: '#152349',
    primary: '#DCFDE4',
    secondary: '#FDDC5',
    primaryText: '#095585',
    secondaryText: '#FFFFFF',
    backgroundColor: '#F4F4F4',
}

export const appStyles = StyleSheet.create({


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

})


export const headerStyles = StyleSheet.create({
    header: {
        height: '15%',
        backgroundColor: '#152349',
        //backgroundColor: '#DCFDE4',
        //marginBottom: '7.5%',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        
        fontSize: 36,
        fontWeight: 'bold',

    }
})


export const addTodoStyles = StyleSheet.create({
    addTodo: {
        marginHorizontal: 8,

        borderBottomWidth: 2,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomColor: 'green',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textInput: {
        marginBottom: 10,
        paddingLeft: 10,

    },

    addIcon: {
        padding: 10,
    },
})

export const todoItemStyles = StyleSheet.create({
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
        fontSize: 24,
        fontWeight: 'bold',
        
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
        paddingRight: 10,
    }

})