import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Platform, Alert, } from 'react-native';
import { TaskCreate } from './features/TaskCreate';
import { TimerControl } from './features/TimerControl';
import { History } from './features/History';
export default function App() {


  const [IsTaskCreated, SetIsTaskCreated] = useState(null);
  const [focusHistory, SetFocusHistory] = useState([])


  const HandleTaskSet = (task) => {
    SetIsTaskCreated(task);
  }


  const HandleTimerFinish = () => {
    Alert.alert(IsTaskCreated + ' Bitti!');
    SetFocusHistory([...focusHistory, IsTaskCreated]);
    SetIsTaskCreated(null);
  }

  console.log(focusHistory);
  return (
    <View style={styles.container}>

      {IsTaskCreated ?
        (
          <React.Fragment>
            <TimerControl onTimerFinished={() => {
              HandleTimerFinish()
            }} task={IsTaskCreated}></TimerControl>
            <History HistoryData={focusHistory}></History>
          </React.Fragment>



        ) :
        (<TaskCreate OnTaskCreate={(taskName) => HandleTaskSet(taskName)}></TaskCreate>)}

      <View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bb2167',
    paddingTop: Platform.OS == "ios" ? 40 : 50

  },
});
