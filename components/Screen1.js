import React from 'react';
import { View, Text, Button } from 'react-native';
import { Navigation } from '@react-navigation/native';


const Screen1 = ({ navigation }) => {
    return (
      <View>
        <Text>Welcome to the Relationship Check-In App</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => navigation.navigate('Screen2')}
        />
      </View>
    );
  };
  
  export default Screen1;