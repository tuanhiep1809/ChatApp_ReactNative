import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "./Screens/Chat.js";
import Login from "./Screens/Login.js";
import Signup from "./Screens/Signup.js";
const Stack = createNativeStackNavigator();

function ChatStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup}/>
    </Stack.Navigator>
  
  );
}
function RootNavigator(){
  return(
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}
export default function App() {
  return <RootNavigator/>
}

