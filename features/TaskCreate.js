import React,{useState} from 'react';
import { StyleSheet, View, Text,Alert} from 'react-native';
import { TextInput } from 'react-native-paper';
import { CircularButton } from '../components/CircularButton';


export const TaskCreate = (props) => {


    const[task,SetTask] = useState('');

   
    const HandleTaskCreate = () =>{
         props.OnTaskCreate(task);
    }


    return (
        <View style={styles.taskCreateContainer}>
            <View style={styles.taskCreateHeaderBox}>
                <Text style={styles.TaskHeader}>Hadi  Odaklanalım!</Text>
                <View style={styles.TaskInputBox}>
                    <TextInput style={styles.taskInput}  value={task} onChangeText={text => SetTask(text)} />
                     <CircularButton  onPress={() => HandleTaskCreate()} title="+"></CircularButton>
                </View>
                
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    taskCreateContainer: {
        flex: 1
    },
    taskCreateHeaderBox: {
        flex:0.5,
        justifyContent: 'center',
        padding:30,
        alignItems:'center'
    },
    TaskHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
        
    },
    TaskInputBox:{
        paddingTop:20,
        flexDirection:'row',
        alignItems:'center'
        
    },
    taskInput:{
       flex:1,
        marginRight:20,   
        height:40
    }

});