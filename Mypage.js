import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet,Image, Text, View } from 'react-native';

//const BUTTON_SIZE = Spacing * 7;
//const IMAGE_HEIGHT = Layout.window.height / 1.4;

export default function Mypage() {
  return (
    <View style={{height:"75%", backgroundColor:"#2B3472", borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
      <View style={styles.korea}>
        <Image source={require("./assets/Koreawhite.png")}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  korea:{
    position:'absolute',
    height:10,
    width:20,
    marginTop:"125%",
    marginLeft:"80%"
  }
});