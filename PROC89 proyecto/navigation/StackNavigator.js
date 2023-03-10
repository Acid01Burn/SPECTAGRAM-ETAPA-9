import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../screeens/PostScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Inicio" component={TabNavigator} />
            <Stack.Screen name="PantalladePublicaci√≥n" component={PostScreen} />
        </Stack.Navigator>
    );
};

export default StackNavigator;