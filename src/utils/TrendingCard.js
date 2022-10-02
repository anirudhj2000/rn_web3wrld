import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, ScrollView,StyleSheet,Button,Dimensions,SafeAreaView,ImageBackground, Image, TouchableOpacity} from "react-native";

const sw = Dimensions.get('window').width;
const sh = Dimensions.get('window').height;

const TrendingCard = (props) => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.newsCard}>
                <Image source={props.source} style={styles.image} />
                <Text style={[styles.cardtitle,{fontSize:16}]}>{props.title}</Text>
                <Text style={[styles.cardtitle,{marginBottom:'2.5%',fontSize:12}]}>{props.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = new StyleSheet.create({
    image : {
        position:'absolute',
        height:'100%',
        width:'100%',
        zIndex:0
    },

    cardtitle : {
        marginHorizontal:'5%',
        color:'#fff',
        fontWeight:'bold'
    },

    newsCard : {
        width:sw*0.6,
        height:sh*0.2,
        backgroundColor:'#fff',
        marginRight:10,
        justifyContent:'flex-end',
    },

})

export default TrendingCard;