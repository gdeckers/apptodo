import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 25,
    },
    filter: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 70,
        alignItems: 'center',
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26',
    },
    filterTextInative: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#20295F',
        opacity: 0.5,

    },
    content: {
        width: '100%',
        marginTop: 30,
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#20295F',
        alignItems: 'center',
    },
    titleText: {
        color: '#20295F',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    },
    taskCard: {
        
        
    },
});

export default styles;