import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, ScrollView,StyleSheet,Button,Dimensions,SafeAreaView,ImageBackground, Image, TouchableOpacity} from "react-native";

const sw = Dimensions.get('window').width;
const sh = Dimensions.get('window').height;

const SectionTitle = (props) => {
    return(
        <View style={styles.trendingTitle}>
            <Text style={styles.sectiontitle}>{props.title}</Text>
            <Image style={styles.trending} source={props.source} />
        </View>
    )
}

export default SectionTitle;

const styles = new StyleSheet.create({

    trending : {
        height:sh*0.03,
        width:sh*0.03,
        marginHorizontal:'2.5%'
    },

    sectiontitle : {
        fontSize:18,
        color:'#fff',
    },

    trendingTitle : {
        marginHorizontal:'5%',
        flexDirection:'row',
        alignItems:'center'
    },

})