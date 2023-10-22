import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { StyleSheet } from 'react-native';

class DynamicTextInputComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputs: props.initialValues || [''], 
    };
  }

  // Function to add a new text input
  addTextInput = () => {
    this.setState(prevState => ({
      textInputs: [...prevState.textInputs, ''], // Add an empty text input
    }));
  };

  // Function to handle changes in the text input value
  handleTextInputChange = (text, index) => {
    const updatedTextInputs = [...this.state.textInputs];
    updatedTextInputs[index] = text;
    this.setState({ textInputs: updatedTextInputs });
  };

  render() {
    const { textInputs } = this.state;

    return (
      <View style={styles.thetextbox}>
        {textInputs.map((text, index) => (
          <TextInput
            key={index}
            placeholder={`Text Input ${index + 1}`}
            value={text}
            onChangeText={(text) => this.handleTextInputChange(text, index)}
            
          style={styles.thedate}/>
        ))}
       
        <Button title="Add Text Input" onPress={this.addTextInput} style={styles.buttonstyle}/>
      </View>
    );
  }
}

export default DynamicTextInputComponent;

const styles = StyleSheet.create({
    thetextbox: {
        backgroundColor: '#ffffff',
      },
    buttonstyle: {
      backgroundColor: '#A8D5E2',
    },
    thedate: {
        flex: 1,
        fontSize: 18,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#CDA2AB',
        padding: 8,
        
      },

  });
  