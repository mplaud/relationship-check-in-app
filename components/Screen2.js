import React from 'react';
import { View, Text, Button } from 'react-native';
import KanbanBoard from './KanbanBoard';
import { Navigation } from '@react-navigation/native';

const Screen2 = () => {
  return (
    <View>
      <KanbanBoard/>
      <Button
      title="Go back to Screen 1"
      onPress={() => navigation.navigate('Screen1')}
    />
    </View>
  );
};

export default Screen2;