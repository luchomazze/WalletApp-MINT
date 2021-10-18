import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Transfers from "../../Transfers/index.js";
import CardContact from "../../CardContact/index.js";
import AddContact from "../../AddContact/index.js";

const Stack = createStackNavigator();

function TransferNav() {
    return (
        <Stack.Navigator initialRouteName="TransferIndex" >
            <Stack.Screen name="TransferIndex" component={Transfers} />
            <Stack.Screen name="CardContact" component={CardContact} />
            <Stack.Screen name="AddContact" component={AddContact} />
        </Stack.Navigator>
    )
}

export default TransferNav