import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Colours, Sizes, Typography } from '../../styles';

const InputText = ({
  inputPlaceholder,
  autoCapitalize,
  keyboardType,
  autoFocus,
  onChangeText,
  value,
  secureTextEntry
}) => {

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input} 
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance='dark'
        placeholder={inputPlaceholder}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType || ''}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
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