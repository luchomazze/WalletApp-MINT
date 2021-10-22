import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      flexDirection: "column"
    },
    cuentas: {
      marginTop:30,
      padding: 10,
      backgroundColor: "#5271FF",
      height: "20%",
      justifyContent: "space-around",
      flexDirection: "column",
      width: "100%",
      alignItems:"center",
      justifyContent:'center',
      borderRadius: 8
    },
    saldo: {
      fontSize:80,
      color:"#E7F1E5",
      marginTop:3,
      padding: 5,
    },
    titleCuenta: {
      fontWeight: "bold",
      color:"#FFFFFF", 
      fontSize: 25.0
    },
    buttonIngresar: {
      margin: "5%"
    },
    titleTransfer: {
      fontWeight: "bold",
    },
    scrollTransfer: {
      width: "100%",
      marginTop:60
    },
    inputView: {
      width: "100%",
      backgroundColor: "#99d98c",
      display: "flex",
      
    },

    titles:{
      marginTop:20,
      width:"100%",
      height: "5%",
      alignItems:"center",
      justifyContent:'center',
      borderRadius: 8,
      backgroundColor: "#5271FF",
    },
  
    userCard: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      alignSelf:"flex-end",
      alignContent:"space-between",
      justifyContent:"space-between",
     padding:10
    },
    textname: {
      fontSize:30,
      color:  "#5271FF",
      padding: 5
    },
    textdate: {
      alignContent: "flex-end",
      color: "#232020",
      fontSize:20,
      padding: 5
    },
    box:{
      paddingTop:8,
      flexDirection:"row",
      alignContent:"center",
     

    }
  });