import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Onboarding from "../pages/Onboarding/Onboarding";
import Welcome from "../pages/Welcome/Welcome";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import HomeTutor from "../pages/HomeTutor/HomeTutor";
import HomeCuidador from "../pages/HomeCuidador/HomeCuidador";
import EncontreCuidador from "../pages/EncontreCuidador/EncontreCuidador";
import Mensagens from "../pages/Mensagens/Mensagens";
import Perfil from "../pages/Perfil/Perfil";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomeTutor" component={HomeTutor} />
      <Stack.Screen name="HomeCuidador" component={HomeCuidador} />
      <Stack.Screen name="EncontreCuidador" component={EncontreCuidador} />
      <Stack.Screen name="Mensagens" component={Mensagens} />
      <Stack.Screen name="Perfil" component={Perfil} />
    </Stack.Navigator>
  );
}