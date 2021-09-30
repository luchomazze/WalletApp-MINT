import React from 'react'

import { View, Text, Image, Button } from 'react-native'
import { styles } from './styles'


function UserProfile() {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/JimC.jpg')}
                style={styles.image} />
            <View>
                <Text style={styles.text}>Nombre: Jim Carrey</Text>
            </View>
            <View>
                <Text style={styles.text}>Mail: JimCar96@gmail.com</Text>
            </View>
            <View>
                <Text style={styles.text}>Nickname: Jim</Text>
            </View>
            <View>
                <Text style={styles.text}>Password: ********</Text>
                <View  style={styles.containerButtons}>
                    <Button title="show"  style={styles.button} />
                    <Button title="edit"  style={styles.button} />
                </View>
            </View>
            <View>
                <Text style={styles.text}>DNI: 17432564</Text>
            </View>
            <View>
                <Text style={styles.text}>telefono: 3534986748</Text>
            </View>
            <View>
                <Text style={styles.text}>CP: 16700</Text>
            </View>
        </View>
    )
}

export default UserProfile


/*
nombre
apellidos
mail
nickname
hash
dni
telefono
foto
codigo_postal
*/