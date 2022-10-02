import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, ScrollView,StyleSheet,Button,Dimensions,SafeAreaView,ImageBackground, Image, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Header from "../utils/Header";
import Items from "../utils/Items";
import TrendingCard from "../utils/TrendingCard";
import SectionTitle from "../utils/SectionTitle";

const sw = Dimensions.get('window').width;
const sh = Dimensions.get('window').height;

const HomeScreen = ({navigation}) => {

        // #141e30 → #243b55
    return(
        <SafeAreaView  style={styles.container}>
           <Header/>
           <View style={styles.recent}>
                <SectionTitle title="Trending" source={require('../../assets/Images/trending.png')} />
                <ScrollView horizontal={true} style={styles.scrollStyle}>
                    {
                        Items.map((item) => {
                            return(
                               <TrendingCard source={require('../../assets/Images/web3wall.png')} 
                                    title={item.title}
                                    description={item.description}
                                    onPress={() => {}}/>
                            )
                        })
                    }
                </ScrollView>
           </View>
           <View> 

           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container : {
        height:sh,
        width:'100%',
        display:'flex',
        backgroundColor:'#141e30',
        flexDirection:'column'
    },

    recent : {
        display:'flex',
        flexDirection:'column',
        marginTop:'-25%',
        zIndex:2,
    },

    scrollStyle : {
        height:sh*0.2,
        width:'90%',
        marginHorizontal:'5%',
        marginVertical:'2.5%'
    },

});

export default HomeScreen;