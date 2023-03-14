import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Mypage from './Mypage';
import Settings from './Settings';
import Up from './Up';
import Notification from './Notification';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Settings'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
              
            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Mypage') {
              iconName = focused ? 'person' : 'person-outline';
            }else if (route.name === 'Up') {
              iconName = focused ? 'thumbs-up' : 'thumbs-up-outline';
            }else if (route.name === 'Notification') {
              iconName = focused ? 'paper-plane' : 'paper-plane-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Up" component={Up}/>
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Mypage" component={Mypage}/>
      </Tab.Navigator>

    </NavigationContainer>
  );
}
