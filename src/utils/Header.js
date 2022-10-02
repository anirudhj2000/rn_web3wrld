import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, ScrollView,StyleSheet,Button,Dimensions,SafeAreaView,ImageBackground} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

const sw = Dimensions.get('window').width;
const sh = Dimensions.get('window').height;

const Header = ({navigation}) => {

    // #141e30 → #243b55
return(
        <ImageBackground source={require('../../assets/Images/web3wall.png')} style={{height:sh*0.3}}>
            <LinearGradient colors={['rgba(20,30,48,0.2)','rgba(20,30,48,1)']}
                start={{x:0,y:0}} end={{x:0,y:1}} style={{height:sh*0.3}}>
                <View style={styles.header}>
                    <View style={styles.title}>
                        <Text style={{fontSize:24,fontWeight:'bold',color:'#000'}}>Web<Text style={{color:'#ff1c33'}}>3</Text>World</Text>
                    </View>
                </View>
            </LinearGradient>
        </ImageBackground>
)
}

const styles = StyleSheet.create({

container : {
    height:sh,
    width:'100%',
    display:'flex',
    backgroundColor:'#141e30',
    zIndex:0
},

header:{
    height:sh*0.2,
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
}


});

export default Header;