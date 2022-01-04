import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';

import { 
    Logo, 
    InputText,
    ButtonText,
    ErrorMessage
}  from '../../components/atoms';
import { 
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform 
} from 'react-native';
import { Colours, Typography } from '../../styles';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
    );

    const renderTitle = () =>  (
        <View style={styles.titleContainer}>
            <Text style={Typography.FONT_H1}>
                Welcome back 👋,
            </Text>
            <Text style={Typography.FONT_BODY_XL}>
                Log in to continue!,
            </Text>
        </View>
    );

    const renderFields = () => (
        <React.Fragment>
            <InputText
                inputPlaceholder="Email"
                autoCapitalize='none'
                keyboardType='email-address'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <InputText
                inputPlaceholder="Password"
                autoCapitalize='none'
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <ButtonText
                text="Login"
                onPress={() => { console.log("You Clicked on Me!"); }}
                type="button"
                buttonStyle="btnPrimaryNormal"
                buttonSize="btnLarge"
            />
        </React.Fragment>                                                                                                                                                                                                                                                       
    );

    const renderMobileView = () => (
        <DismissKeyboard>
            <View style={styles.container}>
                { renderTitle() }
                { renderFields() }                                                                                                                                                                                                                                                     
            </View>
        </DismissKeyboard>
    );

    const renderWebView = () => (
        <View style={styles.container}>
            { renderTitle() }
            { renderFields() }                                                                                                                                                                                                                                                     
        </View>
    );

    return (
        <React.Fragment>
            <StatusBar style='dark-content' />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                >
                { Platform.OS === 'android' || Platform.OS === 'ios' && renderMobileView() }
                { Platform.OS === 'web' && renderWebView() }
            </KeyboardAvoidingView>
        </React.Fragment>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'center',
        paddingHorizontal: 16,
    },  
    titleContainer: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 24,
    },
    button: {
        backgroundColor: Colours.PRIMARY,
        padding: 20,
        borderRadius: 5,
        marginTop: 32,
      },
      buttonText: {
        fontSize: 20,
        color: Colours.WHITE,
      },
  });
  