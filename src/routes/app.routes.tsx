import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";

const { Navigator, Screen } = createStackNavigator() 


export function AppRoutes () {
  return (
    <Navigator>
      <Screen name='home' component={Home} options={{headerShown: false}}/>
    </Navigator>
  )
}