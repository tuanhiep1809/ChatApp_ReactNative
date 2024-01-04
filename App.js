import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Screens/Chat.js";
import Login from "./Screens/Login.js";
import Signup from "./Screens/Signup.js";
const Stack = createNativeStackNavigator();
import Home from "./Screens/Home.js";
import { AppRegistry } from 'react-native';

export default function App() {
  
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Login" component={Login}/>

      <Stack.Screen options={{headerShown:true}} name="Home" component={Home}/>
      <Stack.Screen options={{headerShown:true}} name="Chat" component={Chat}/>
      <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

