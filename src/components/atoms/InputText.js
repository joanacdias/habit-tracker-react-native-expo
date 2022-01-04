import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Colours, Sizes, Typography } from '../../styles';

import { useState } from 'react';

const InputText = ({
  inputPlaceholder,
  autoCapitalize,
  keyboardType,
  autoFocus,
  onChangeText,
  value,
  secureTextEntry
}) => {

  const [currentValue, setCurrentValue] = useState('');

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input} 
        keyboardAppearance='dark'
        placeholder={inputPlaceholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}

        value={value}
        onChangeText={onChangeText}

        // value={currentValue}
        // onChangeText={v => setCurrentValue(v)}
        // onBlur={onChangeText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderWidth: 1,
    paddingHorizontal: 16,
    color: Colours.PRIMARY,
    borderColor: Colours.GRAY_300,
    borderRadius: Sizes.BORDER_RADIUS_FIELDS,
    fontSize: Typography.FONT_SIZE_18,
    marginBottom: 16,
  },
});

export default InputText;