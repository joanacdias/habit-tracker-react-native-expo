import React from 'react';
import { Text } from 'react-native';

const HelloWorld = ({name}) => {

    return (
        <Text>
            Hello World {name}!
        </Text>
    );
}

export default HelloWorld;