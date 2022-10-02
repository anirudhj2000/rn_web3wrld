import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, SafeViewArea, ScrollView,StyleSheet,Button} from "react-native";

const Favourites = ({navigation}) => {
    return(
        <View>
        <Button title="Java" onPress={() => {navigation.navigate('Blog1')}}/>
    </View>
    )
}

const styles = StyleSheet.create({

});

export default Favourites;