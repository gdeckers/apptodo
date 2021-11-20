import React, { useEffect, useState } from "react";
import { Platform, Button,View, Text, TouchableOpacity, ScrollView, ActivityIndicator, KeyboardAvoidingView, Image, TextInput, Switch } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import styles from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";
import DateTimeInputAndroid from "../../components/DateTimeInput/index.android";

import typeIcons from "../../utils/typeIcons";
import iconCalendar from '../../assets/calendar.png';
import iconClock from '../../assets/clock.png';

import api from '../../services/api';

export default function Task({ navigation }){
    const [done, setDone] = useState(false);

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

  function Back(){
        navigation.navigate('Home');
    }
    
    
    return(
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <Header showNotification={true} showBack={true} navigation={navigation} onBack={Back}/>
            <ScrollView style={{width: '100%'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginVertical: 10}}>
                    { typeIcons.map(icon => (
                        icon != null &&
                        <TouchableOpacity>
                            <Image source={icon} style={styles.imageIcon}/>
                        </TouchableOpacity>
                        ))
                    }
                </ScrollView>

                <Text style={styles.label}></Text>
                <TextInput style={styles.input} maxLength={30} placeholder='Lembre-me de fazer...' />

                <Text style={styles.label}>Descrição</Text>
                <TextInput style={styles.inputarea} maxLength={200} multiline={true} placeholder='Descrição da tarefa...' />
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
                <TouchableOpacity onPress={showDatepicker} style={styles.datetimepicker}>
                    <TextInput style={styles.input} placeholder='Defina a data' editable={false} value={format(new Date(date), 'dd/MM/yyyy')}/>
                    <Image style={styles.imageIcon} source={iconCalendar}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={showTimepicker} style={styles.datetimepicker}>
                    <TextInput style={styles.input} placeholder='Defina a hora' editable={false} value={format(new Date(date), 'HH:mm')}/>
                    <Image style={styles.imageIcon} source={iconClock}/>
                </TouchableOpacity>
                

                    <Text>ASDFG</Text>
                    


                <View style={styles.inLine}>
                    <View style={styles.inputInline}>
                        <Switch onValueChange={()=>setDone(!done)} value={done} thumbColor={done ? '#00761B' : '#EE6B26'}/>
                        <Text style={styles.switchLabel}>Concluído</Text>
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.removeLabel}>Excluir</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
            
            

            <Footer icon={'save'} />
        </KeyboardAvoidingView>
    )
}