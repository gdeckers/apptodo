import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        height: 80,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    typeActive: {
        width: 50,
        height: 50,
    },
    cardLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardRight: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    cardDate: {
        color: '#EE6B26',
        fontWeight: 'bold',
        fontSize: 16,
    },
    cardTime: {
        color: '#707070',
    },
    done: {
        opacity: 0.5,
    }
});

export default styles;