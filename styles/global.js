import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({

    container:{
        flex: 1,
        padding: 20
    },
    titleText:
    {
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    loading: {
        flex:1

    },
    startButton:{
        borderRadius:25,
        borderWidth:5,
        paddingTop: 10,
        alignItems:"center",
        margin:50,
        backgroundColor:"indigo",
        borderColor:"indigo",
        height:50
    },
    post: {
        padding:5,
        margin:5,
        backgroundColor:"#ffe2ff",
    },
    myImage:{
        marginTop:10,
        width: 180,
        height:180
        
    },
    myImage2:
    {
        marginTop:10,
        width: 300,
        height:180 
    }


})