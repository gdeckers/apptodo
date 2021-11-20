import React, { useEffect, useState } from "react";
import {Alert, View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native'
import styles from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TaskCard from "../../components/TaskCard";

import api from '../../services/api';

export default function Home({ navigation }){
    const [filter, setFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);
    const [lateCount, setLateCount] = useState();

    async function loadTasks(){
        setLoad(true);
        await api.get(`task/filter/${filter}/11:22:33:44:55:66`).then(response => {
            setTasks(response.data)
            setLoad(false)
        });
    }

    async function lateVerify(){
        await api.get(`task/filter/late/11:22:33:44:55:66`).then(response => {
            setLateCount(response.data.length);
        });
    }

    function loadLate(){
        setFilter('late');
    }

    function Novo(){
        navigation.navigate('Task');
        //Alert.alert('Alerta!!',"Alerta vermelho!!");
    }
    function Back(){
        navigation.navigate('Home');
        //Alert.alert('Alerta!!',"Alerta vermelho!!");
    }

    useEffect(()=>{
        loadTasks();
        lateVerify();
    },[filter]);

    return(
        <View style={styles.container}>
            <Header showNotification={true} showBack={false} pressNotification={loadLate} late={lateCount} onBack={Back}/>
            
            <View style={styles.filter}>
                <TouchableOpacity onPress={()=>setFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>Todos</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>Hoje</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>Semana</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>Mês</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>Ano</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.title}>
                <Text style={styles.titleText}>TAREFAS {filter == 'late' && ' ATRASADAS'}</Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                
                {
                    load ?
                        <ActivityIndicator color={'#EE6B26'} size={50}/>
                    :
                        tasks.map(t => (
                            <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
                        ))
                }
            </ScrollView>

            <Footer icon={'add'} onPresss={Novo}/>
        </View>
    )
}