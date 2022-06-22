import { createStackNavigator } from '@react-navigation/stack';
import Categori from '../categori';
import Home from '../home';
import Quiz from '../quiz';
import Result from '../result';

const Stack = createStackNavigator();

export default function  MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Categori" component={Categori} options={{headerShown:false}}/>
      <Stack.Screen name="Quiz" component={Quiz} options={{headerShown:false}}/>
      <Stack.Screen name="Result" component={Result} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
