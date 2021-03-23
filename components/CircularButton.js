import React from 'react';
import {TouchableOpacity,StyleSheet,Text,Alert} from 'react-native';

 export const CircularButton = (props) =>{

    const HandleClickEvent = () =>{
      props.onPress();
    }

  
    return(
        <TouchableOpacity style={{...styles.circularShape,...props.style}}>
            <Text style= {{...styles.textShape,...props.style}} onPress={HandleClickEvent}>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({

    circularShape :{
        borderRadius:30,
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#fff',
        borderWidth:2
    },
    textShape :{
        fontSize:25,
        color:'white'
    }

})