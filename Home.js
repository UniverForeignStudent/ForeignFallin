import { StatusBar } from 'expo-status-bar';
import { TouchableWithoutFeedback,TouchableOpacity,SafeAreaView,ScrollView,StyleSheet,TextInput, Text, Button, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-screens';
import React, {useState} from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';


const Stack = createNativeStackNavigator();
function Settings({ navigation,route }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

    </View>
  );
}

function HomeScreen(props) {
  const nav = useNavigation();
  return (
    <View style={styles.basic}>
      <View style={{backgroundColor: '#fff',flexDirection:'row',justifyContent:"space-between"}}>
        <Image style={styles.Logo} source={require("./assets/logo.png")}/>
        <View style={styles.Icon}>
          <TouchableOpacity title = "setting" onPress={() => nav.navigate("Settings")} >  
            <SimpleLineIcons name="settings" size={29} color="black" style={{marginTop:1.5}} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchbarSet}>
        <View style={styles.searchBar}> 
          <TextInput style={styles.search} placeholder="원하시는 커뮤니티를 찾아보세요"></TextInput>
        </View>
      </View>
      <Collapse>
        <CollapseHeader>
          <View style={{marginLeft:"5%"}}>
                <Text>커뮤니티 목록</Text>
            </View>
        </CollapseHeader>
        <CollapseBody>
          <View style={{marginLeft:"5%"}}>
            <Text>펼쳤을때 보일 내용 </Text>
          </View>
        </CollapseBody>
      </Collapse>

      <StatusBar style="auto" />
    </View>
  );
}

export default function Home({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootContainer: {
    alignItems: "center",
    backgroundColor: "#ffffff"
},
  Logo: {
    marginLeft:10,
    marginTop:50,
    width:64,
    heigth:37,
  },
  Icon:{
    marginRight:13,
    marginTop:50, 
    flexDirection:'row'
  },
  basic:{
    flex:1,
    backgroundColor: '#fff',
  },
  textInput: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
  },searchbarSet: {
    borderWidth:1.3,
    alignItems: 'center',
    justifyContent: 'center',
    height:50,
    width:"95%",
    marginBottom:5,
    marginTop:5,
    borderRadius:20,
    marginLeft:"2.5%"
},
searchBar:{
    marginTop:5,
    marginBottom:5,
    flexDirection:'row',
    width:"90%",
    backgroundColor:"white",
    borderRadius:10,
    alignItems:'center',
    padding:10,
},
  search:{
    fontSize:15,
  }
});
