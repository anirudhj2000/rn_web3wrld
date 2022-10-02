import React,{useState,useEffect,useContext} from "react";
import { Text, View, TextInput, SafeViewArea, ScrollView,StyleSheet, Button} from "react-native";

const LatestBlog = ({navigation}) => {
    return(
        <View>
            <Button title="Fav" onPress={() => {navigation.navigate('Home')}}/>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default LatestBlog;