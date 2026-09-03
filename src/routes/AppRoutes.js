import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../pages/Welcome";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import HomeTutor from "../pages/HomeTutor";
import HomeCuidador from "../pages/HomeCuidador";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="HomeTutor" component={HomeTutor} />
      <Stack.Screen name="HomeCuidador" component={HomeCuidador} />
    </Stack.Navigator>
  );
}