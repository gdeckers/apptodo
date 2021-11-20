import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput, Platform, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from "date-fns";

import styles from "./styles";
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';



export default function DateTimeInputAndroid({}){
    const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setShow(false)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
    
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <View>
      <TouchableOpacity onPress={showDatepicker} style={styles.datetimepicker}>
                    <TextInput style={styles.input} placeholder='Defina a data' editable={false} value={format(new Date(date), 'dd/MM/yyyy')}/>
                    <Image style={styles.imageIcon} source={iconCalendar}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={showTimepicker} style={styles.datetimepicker}>
                    <TextInput style={styles.input} placeholder='Defina a hora' editable={false} value={format(new Date(date), 'HH:mm')}/>
                    <Image style={styles.imageIcon} source={iconClock}/>
                </TouchableOpacity>
                {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                    )}
                <View>
                    
                </View>
    </View>
  );
}