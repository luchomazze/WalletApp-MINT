import React, { useEffect, useMemo, useContext } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { getAccount } from "../../store/actions/accountActions";
import { getTransfers } from "../../store/actions/transferActions";
import { getUser } from "../../store/actions/userActions";
import { createUser } from "../../store/actions/userActions";
import axios from "axios";


//
import { CredentialsContext } from '../../loginComponents/CredentialsContext';

function Home({ Navigation, Route }) {

  const dispatch = useDispatch();
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  const { email, name, photoUrl } = storedCredentials
  
  console.log("email Home",email)

  // async function pepe(){
  //   await axios.get(`http://192.168.1.114:3001/user/get/?mail=${email}`)
  //  .then(response => console.log("response home", response) ) }
  // pepe();

  useEffect(() => {
    dispatch(getUser(email));
  }, []);
  
  const user = useSelector((state) => state.user.user);
  const balance = useSelector((state) => state.account.accounts);
  
  useEffect(() => {

    if (user) {
      dispatch(getAccount(user.idusuario));
    } else {
      const dataFiltered = {
        nombre: name.split(" ")[0],
        apellidos: name.split(" ")[1],
        mail: email,
        direccion: "",
        nickname: email.split("@")[0],
        dni: "",
        telefono: "",
        foto: photoUrl,
        codigo_postal: "",
      };
      
      dispatch(createUser(dataFiltered))
      dispatch(getAccount(user.idusuario));
    }
    if (balance[0]) dispatch(getTransfers(balance[0].idcuentas));
  }, [dispatch, user, balance]);


  const transfers = useSelector((state) => state.transfer.history);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.titleCuenta}>ARS</Text>
        <Text style={styles.titleCuenta}>{balance[0]?.saldo}</Text>
      </View>

      <View>
        <Text style={styles.titleTransfer}>Transfers</Text>
      </View>

      <ScrollView style={styles.scrollTransfer}>
        <TouchableOpacity style={styles.userCard}>
          <View style={styles.userCardRight}>
            {transfers?.map((op, i) => (
              <View
              key={i}>
                {op?.origin == balance[0].idcuentas ? (
                  <Text style={styles.textname}> {"- " + op?.monto}</Text>
                ) : (
                  <Text style={styles.textname}> {"+ " + op?.monto}</Text>
                )}
                <Text style={styles.textdate}>{op?.fecha}</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </ScrollView>


    </View>
  );
}

export default Home;
