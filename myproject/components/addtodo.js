import React, {useState} from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

function Addtodo({ submitHandler }){

    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
    const handleButtonPress = () => {
        submitHandler(text);
        
      };

    return(
        <View>
            <TextInput 
                style={styles.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button onPress={handleButtonPress} title='add todo' color='coral'/>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default Addtodo
