import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Sandbox(){
    return(

       <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // everything in this flex container becomes a felx item, like with a master div as i call it 
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 60,
        backgroundColor: '#ddd'
    },
    boxOne: {
        backgroundColor: 'violet',
        padding: 10
    },
    boxTwo: {
        backgroundColor: 'gold',
        padding: 10
    },
    boxThree: {
        backgroundColor: 'coral',
        padding: 10
    },
    boxFour: {
        backgroundColor: 'skyblue',
        padding: 10
    }
});

export default Sandbox