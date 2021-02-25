import React,  { useState }from 'react';
import { StyleSheet, View, TextInput, Text} from 'react-native'; 
const FormLogIn = (props) => {
  const [textInput, setTextInput] = useState(styles.inputTextInvalid);
  const [newTextInput, setVewTextInput] = useState("");
  
  const validInputText = (text) => {
    if (text.length >= 6) {
      setTextInput(styles.inputTextValid);
    } else {
      setTextInput(styles.inputTextInvalid); 
    }
    setVewTextInput(text); 
  }

  return (
    <View  style={styles.container}>
      <TextInput 
        value = {newTextInput} 
        style = {textInput}
        placeholder = {props.placeholder}
        onChange = {(event) => {
          console.log(event.nativeEvent.eventCount);
          console.log(event.nativeEvent.target);
          console.log(event.nativeEvent.text);
        }}
        onChangeText = {(newTextInput) => {
          validInputText(newTextInput);
        }}
        keyboardType = {props.keyboardType}
        secureTextEntry = {props.secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTextValid: {
    marginVertical : 10,
    marginHorizontal : 10,
    padding : 8,    
    height: 40,
    width: 220,
    fontSize: 20,
    color: "white",
    borderColor: '#b5ed66',
    borderWidth: 1,
    backgroundColor: "#b5ed66",
  },
  inputTextInvalid: {
    marginVertical : 10,
    marginHorizontal : 10,
    padding : 8,
    height: 40,
    width: 220,
    fontSize: 20,
    color: "white",
    borderColor: 'ed8c66',
    borderWidth: 1,
    backgroundColor: "#ed8c66",
  }
});


export default FormLogIn;