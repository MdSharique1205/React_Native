import React from "react";
import {Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
    },
});

const ComponentsScreen = () =>{
    return (
        <Text style = {styles.textStyle}> Components Screen </Text>
    );
}

export default ComponentsScreen;