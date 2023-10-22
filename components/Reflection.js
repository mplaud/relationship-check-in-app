import {View, Text, Image, ScrollView, TextInput, StyleSheet} from 'react-native';


const Reflection = () => {
  return (
    <ScrollView>
      <View>
      <Text>{"\n"}</Text>        

        <Text style={styles.reflectionstyle}>
      Re-Connect </Text>
           <Text style={styles.textstyle}>Take turns sharing what you appreciate about each other. 
            Remember you are having these conversations to maintain a loving and healthy relationship.
        </Text>
        <TextInput style={styles.thereflection}/>
      </View>
      
    </ScrollView>
  );
};

export default Reflection;

const styles = StyleSheet.create({
   
    textstyle: {
      flex: 1,
      fontSize: 14,
      justifyContent: 'center',
      alignContent: 'center',
      padding: 8,
      fontWeight: "bold",
    },
    reflectionstyle: {
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 8,
        fontWeight: "bold",
      },
      thereflection: {
        flex: 1,
        fontSize: 14,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#CDA2AB',
        padding: 8,
        height: 125,
        
      },
});