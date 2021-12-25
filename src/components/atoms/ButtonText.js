import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import colours, { Colours, Sizes, Typography } from '../../styles'

const STYLES = [
    "btnPrimaryNormal"
];

const FORMAT = [
    "text"
];

const SIZES = [
    "btnSmall", 
    "btnMedium", 
    "btnLarge",
    "btnXLarge"
];

const Button = ({
    type,
    text,
    onPress,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
        ? buttonSize 
        : SIZES[0];

    return (
    <Pressable
        onPress={onPress}
        style={[styles[checkButtonStyle]]}
    >   
        <Text style={[styles[checkButtonStyle], styles[checkButtonSize]]}>{text}</Text>
    </Pressable>
    );
};

const styles = StyleSheet.create({
    btnPrimaryNormal: {
        backgroundColor: Colours.PRIMARY,
        color: Colours.WHITE,
        borderRadius: Sizes.BORDER_RADIUS_FIELDS,
        overflow: 'hidden',
    },
    btnLarge: {
        ...Typography.FONT_BUTTON_L,
        paddingHorizontal: 26,
        paddingVertical: 16,
    }
});

export default Button;