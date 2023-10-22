import React, { useState } from 'react';
import { View, Button, Text, Platform, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const NextDate = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setShowPicker(true);
  };

  return (
    <View>
        <Text>{"\n"}Before we get started, let's set a date and time ahead for our next relationship check-in.</Text>
      <Button title="Select Date" onPress={showDatepicker} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <Text style={styles.thedate}>Date: {date.toDateString()}</Text>
    </View>
  );
};

export default NextDate;

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

