import React from 'react';
import {View, Text, Image, ScrollView, TextInput, Button, StyleSheet} from 'react-native';
import Recap from './Recap';
import Agenda from './Agenda';
import ActionItems from './ActionItems';
import Reflection from './Reflection';
import NextDate from './NextDate';
import KanbanBoard from './KanbanBoard'


const Home = () => {
  return (
    <ScrollView>
      <View style={styles.box}>
        <Text>{"\n"}{"\n"}</Text>
        <Text style={styles.welcome}>Welcome to the Relationship Check-In App</Text>
        <Text> {"\n"}The Relationship Check-In App facilitates meaningful discussions with you and your loved ones. 
            Set relationship goals, brainstorm action items to tackle challenges, and develop security 
            by keeping an open dialogue. </Text>
        <NextDate/>
        <Recap />
        <Agenda />
        <ActionItems />
        <Reflection />
      </View>
    </ScrollView>
    
  );
};

export default Home;


  const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#A8D5E2',
        padding: 8,
        margin: 1,
        
      },
      welcome: {
        flex: 1,
        fontSize: 18,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#CDA2AB',
        padding: 8,
        fontWeight: "bold",
      },
  });
  '#A8D5E2'
  

  