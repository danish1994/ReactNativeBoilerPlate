import React from 'react';
import { View } from 'react-native';
import { Link } from 'react-router-native';
import { Text } from 'native-base';

export const About = () => {
    return (
        <View>
            <Link to={'/'}>
                <Text>Goto Home</Text>
            </Link>
            <Text>This Is About</Text>
        </View>
    );
};
