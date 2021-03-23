import React from 'react';
import { View, StyleSheet, FlatList, Text, SafeAreaView } from 'react-native';

export const History = (props) => {

    const HistoryItem = ({ item, index }) => {
        return (<Text key={index} style={styles.ItemStyle}>{item}</Text>)
    }
    return (
        <SafeAreaView style={styles.HistoryContainer}>
            <Text style={styles.ItemStyle}>Nelere Odaklandım ?</Text>
            {!!props.HistoryData.length &&
                <FlatList
                    data={props.HistoryData}
                    renderItem={HistoryItem}>
                </FlatList>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    HistoryContainer: {
        flex: 1,
        justifyContent:'center',
        marginTop:30
    },
 
    FlatContainer: {
        flex: 1,
        alignItems: 'center'
    },
    ItemStyle: {
        color: "white",
        fontSize: 25,
        textAlign:'center'      

    }

})