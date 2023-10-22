import React from 'react';
import { View, Text } from 'react-native';
import DynamicTextInputComponent from './Addtext';
import { StyleSheet } from 'react-native';

class InputComponent extends React.Component {
  render() {
    const initialValues = ['Example 1']; // Define the array within the render method

    return (
      <View>
        <DynamicTextInputComponent initialValues={initialValues}  style={styles.thedate}/>
        {/* Other components or content */}
      </View>
    );
  }
}

export default InputComponent;

const styles = StyleSheet.create({
   
    thedate: {
      flex: 1,
      fontSize: 18,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#CDA2AB',
      padding: 8,
      fontWeight: "bold",
    },
});