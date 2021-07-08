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
        backgroundColor: '#FFF',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    content: {
        padding: 20,
      },
      todoList: {
        //padding: 10,
        height: '80%',
        paddingBottom: 3,
      },
      footer: {
          flex: 1,
          //paddingBottom: 20,
      }

})


export const headerStyles = StyleSheet.create({
    header: {
        height: '15%',
        //position: fixed,
        backgroundColor: '#152349',
        //backgroundColor: '#DCFDE4', 
        //marginBottom: '7.5%',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    headerText: {
        color: '#FFFFFF',
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
        borderBottomColor: 'black',

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
          borderRadius: 10,
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


export const pickerStyle = StyleSheet.create({
    inputIOS: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        color: colors.primaryText,
    },
    inputAndroid: {
        alignSelf: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.primaryText,
        borderWidth: 1,
        borderRadius: 5,
        width: '40%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.primaryText,
    },
    placeholder: {
        color: colors.primaryText,
    }
})