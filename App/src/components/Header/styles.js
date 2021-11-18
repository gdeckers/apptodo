import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 100,
        height: 30,
    },
    notification: {
        position: 'absolute',
        right: 20,
    },
    bell: {
        width: 20,
        height: 25,
    },
    circle: {
        width: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13,
    },
    notificationText: {
        fontWeight: 'bold',
        color: '#EE6B26',
    },
    leftIconArea: {
        position: 'absolute',
        left: 20,
    },
    leftIconImage: {
        width:30,
        height: 30,
    },
});

export default styles;