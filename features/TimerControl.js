import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Alert,Vibration,Platform } from 'react-native';
import { CircularButton } from '../components/CircularButton';
import { useKeepAwake} from 'expo-keep-awake'


export const TimerControl = (props) => {
  useKeepAwake();  //uygulamayı ayakta tutar
  const [timeCounter, settimeCounter] = useState(0);

  const [isPaused, setIsPaused] = useState(true);

  let IsActive = isPaused;
  const HandleStartEvent = (value) => {
    setIsPaused(value);
    IsActive = value;
  }

  const OnFinish = () =>{
    
    HandleStartEvent(true);
    if(Platform.OS === "ios")
    {
      const interval = setInterval(() => Vibration.vibrate(),1000);
      setTimeout(() => {
        clearInterval(interval)
      }, 5000);
    }
    else
    {
      Vibration.vibrate("5s")
    }

    props.onTimerFinished(); 
  }

  const mintoMiliSeconds = (time) => {
    var calculation = time * 1000 * 60;
    return calculation;
  }

  const HandleTime = (time) => {

    var setTime = mintoMiliSeconds(time)

    settimeCounter(setTime);
  }




  const getMin = () => {
    if (timeCounter == 0) {
      return FormatTimeHandler(0);
    }
    var mililsecondValue = timeCounter;

    var value = Math.floor(mililsecondValue / 1000 / 60) % 60;
    return FormatTimeHandler(value);

  }

  const getSecond = () => {
    if (timeCounter === 0) {
      return FormatTimeHandler(0);
    }
    var mililsecondValue = timeCounter;
    var value = Math.floor(mililsecondValue / 1000) % 60;
    return FormatTimeHandler(value);
  }

  const FormatTimeHandler = (time) => {
    return (
      time < 10 ? `0${time}` : time
    )
  }

  useEffect(() => {
    let intervalId;

    if (!IsActive) {

      if (timeCounter === 0) {
        
        OnFinish();
        return;
      }

      intervalId = setInterval(() => {
        settimeCounter(timeCounter - 1000);
      }, 1000)
    }

    return () => clearInterval(intervalId);
  }, [IsActive, timeCounter])

  return (
    <View styles={styles.Container}>

      <View style={styles.TitleBox}>
        <Text style={styles.Task}>{props.task}</Text>
      </View>
      <View style={styles.TimeBox}>
        <Text style={styles.CountDown}>{getMin()}:{getSecond()}</Text>
      </View>
      <View style={styles.ActionsButtons}>
        <CircularButton onPress={() => HandleStartEvent(false)} style={styles.WhiteBackground} title=">" styles={styles.timeButtons}></CircularButton>
        <CircularButton onPress={() => HandleStartEvent(true)} style={styles.WhiteBackground} title="||" styles={styles.timeButtons}></CircularButton>
      </View>
      <View style={styles.ButtonBox}>
        <CircularButton onPress={() => HandleTime(10)} title="15" styles={styles.timeButtons}></CircularButton>
        <CircularButton onPress={() => HandleTime(20)} title="20" styles={styles.timeButtons}></CircularButton>
        <CircularButton onPress={() => HandleTime(30)} title="30" styles={styles.timeButtons}></CircularButton>
      </View>

    </View>
  )
}


const styles = StyleSheet.create({

  Container: {
    flex: 1,
    justifyContent: 'center'

  },
  TitleBox: {
    paddingTop: 40,
    alignItems: 'center'
  },
  Task: {
    fontSize: 40,
    color: '#fff'
  },
  TimeBox: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  CountDown: {
    fontSize: 60,
    color: '#fff'
  },
  ButtonBox: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  timeButtons: {
    marginRight: 50
  },
  ActionsButtons: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },

  WhiteBackground: {
    backgroundColor: 'white',
    color: '#bb2167',
    fontSize: 20
  }


})