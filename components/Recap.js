import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import InputComponent from './Addtext2';

const Recap = () => {
  return (
    <ScrollView>
      <View>
<Text>{"\n"}</Text>        
<Text style={styles.recapstyle}>
      Recap
      </Text>
            <Text style={styles.textstyle}>What has happened between the last check-in and now? Celebrate your wins! 
         </Text>
      </View>
      
      <InputComponent style={styles.thedate}/>
    </ScrollView>
  );
};

export default Recap;

const styles = StyleSheet.create({
   
    textstyle: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 8,
      fontWeight: "bold",
    },
    recapstyle: {
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        fontWeight: "bold",
      },
});
