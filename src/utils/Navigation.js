import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../home/Home";
import Favourites from "../home/Favourites";
import LatestBlog from "../home/LatestBlog";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return(
        <HomeStack.Navigator screenOptions={{headerShown:false}}>
            <HomeStack.Screen component={HomeScreen} name="Home"/>
            <HomeStack.Screen component={Favourites} name="Fav" />
            <HomeStack.Screen component={LatestBlog} name="Blog1" />
       </HomeStack.Navigator>
    )
}


export default HomeStackNavigator;