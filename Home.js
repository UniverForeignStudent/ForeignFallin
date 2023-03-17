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
import Icon from 'react-native-vector-icons/Ionicons';

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
      <View style={styles.header}>
      <View style={{backgroundColor: '#2B3472',flexDirection:'row',justifyContent:"space-between"}}>
        <Image style={styles.Logo} source={require("./assets/logowhite.png")}/>
        <View style={styles.Icon}>
          <TouchableOpacity title = "setting" onPress={() => nav.navigate("Settings")} >  
            <SimpleLineIcons name="settings" size={29} color="white" style={{marginTop:1.5}} />
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
          <View style={{marginLeft:"3%", flexDirection:'row'}}>
            <Icon name="chevron-down-outline" size={25} color="white" style={{marginTop:"-1.2%"}}></Icon>
            <Text style={{color:"white"}}>커뮤니티 목록</Text>
            </View>
        </CollapseHeader>
        <CollapseBody style={{width:"100%",height:"30%"}}>
          <View style={styles.communitytable}>

            <View style={styles.firstline}>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} /> 
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
            </View>

            <View style={styles.secondline}>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} /> 
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
              <View>
                <View style={styles.community} />
                <Text>community</Text>
              </View>
          </View>

        </View>
        </CollapseBody>
      </Collapse>
      </View>
      <ScrollView horizontal={true} showsVerticalScrollIndicator={false} style={{marginTop:10}}>
        <View style={styles.advertisement}>
          
        </View>
        <View style={styles.advertisement}>

        </View>
        <View style={styles.advertisement}>

        </View>
        <View style={styles.advertisement}>

        </View>
        <View style={styles.advertisement}>

        </View>
      </ScrollView >
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
  header:{
    backgroundColor:"#2B3472"
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
    borderWidth:1.1,
    alignItems: 'center',
    justifyContent: 'center',
    height:45,
    width:"95%",
    marginBottom:5,
    marginTop:5,
    borderRadius:10,
    marginLeft:"2.5%",
    backgroundColor:"white"
  },
  searchBar:{
    marginTop:5,
    marginBottom:5,
    flexDirection:'row',
    width:"93%",
    backgroundColor:"white",
    borderRadius:10,
    alignItems:'center',
    padding:10,
  },
  search:{
    fontSize:15,
  },
  advertisement:{
    height:200,
    width:200,
    borderWidth:1,
    borderRadius:20,
    marginLeft:20
  },
  communitytable:{
    width:"100%",
    height:230,
  },
  firstline:{
    flexDirection:"row"
  },
  secondline:{
    flexDirection:"row",
  },
  community:{
    width:67,
    height:65,
    borderWidth:1,
    marginLeft:9,
    marginTop:10,
    borderColor:"white",
  }
});
