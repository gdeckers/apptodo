import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import styles from "./styles";

import add from '../../assets/add.png';
import save from '../../assets/save.png';

export default function Footer({ icon, onPresss, navigation }){
    return(
        <View style={styles.footer}>
            
            <TouchableOpacity onPress={onPresss}>
                <Image source={icon == 'add' ? add : save} style={styles.icon}/>
            </TouchableOpacity>
            
            
            <Text style={styles.footerText}>Organizando sua vida</Text>
        </View>
    )
}