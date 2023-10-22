import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';
import InputComponent from './Addtext2';

const Agenda = () => {
  return (
    <ScrollView>
      <View>
      <Text>{"\n"}</Text>        

      <Text style={styles.agendastyle}>Agenda</Text>
        <Text style={styles.textstyle}>Add discussion topics or questions and then decide the order of topics. 
        </Text>
      </View>
       
      <InputComponent />
    </ScrollView>
  );
};

export default Agenda;

const styles = StyleSheet.create({
   
    textstyle: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 8,
      fontWeight: "bold",
    },
    agendastyle: {
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        fontWeight: "bold",
      },
});
