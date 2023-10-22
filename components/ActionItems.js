import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import InputComponent from './Addtext2';

const ActionItems = () => {
  return (
    <ScrollView>
      <View>
      <Text>{"\n"}</Text>        

      <Text style={styles.actionstyle}>Action Items </Text>
        <Text style={styles.textstyle}>Add goals based on the discussion you had with your loved one. </Text>
      </View>
      <InputComponent />
      
    </ScrollView>
  );
};

export default ActionItems;

const styles = StyleSheet.create({
   
    textstyle: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 8,
      fontWeight: "bold",
    },
    actionstyle: {
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        fontWeight: "bold",
      },
});