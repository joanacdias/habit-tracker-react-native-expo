import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Colours, Typography } from '../../styles';

const InputText = ({
  inputPlaceholder
}) => {

  const [text, onChangeText] = React.useState("");

  return (
    <SafeAreaView>
      <TextInput 
        style={styles.input} 
        value={text}
        onChangeText={onChangeText}
        keyboardAppearance='dark'
        placeholder={inputPlaceholder}
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
    borderRadius: 12,
    fontSize: Typography.FONT_SIZE_18,
    marginBottom: 16,
  },
});

export default InputText;