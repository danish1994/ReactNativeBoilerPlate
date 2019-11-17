import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'native-base';
import { Link } from 'react-router-native';

export const Home = props => {
    const { counter, increment, decrement } = props;
    return (
        <View>
            <Link to={'/about'}>
                <Text>Goto About</Text>
            </Link>
            <Text>This Is Home</Text>
            <Text>Counter is {counter}</Text>
            <Button success onPress={increment}>
                <Text>Increment</Text>
            </Button>
            <Button info onPress={decrement}>
                <Text>Decrement</Text>
            </Button>
        </View>
    );
};
