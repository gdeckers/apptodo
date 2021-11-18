import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 70,
        position: 'absolute',
        bottom: 0,
        
        backgroundColor: '#20295F',
        borderTopWidth: 5,
        borderTopColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 80,
        height: 80,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    footerText: {
        color: '#fff'
    }
});

export default styles;