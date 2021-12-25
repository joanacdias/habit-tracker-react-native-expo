import React from 'react';
import { Logo, InputText }  from '../../components/atoms';
import { StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Platform 
} from 'react-native';
import { openShareDialogAsync, openImagePickerAsync } from '../../utils/imagePickerUtils';
import { Colours, Typography } from '../../styles';
import { Poppins_700Bold } from '@expo-google-fonts/poppins';

const Login = () => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {children}
        </TouchableWithoutFeedback>
    );

    const title = () =>  (
        <View style={styles.titleContainer}>
            <Text style={Typography.FONT_H1}>
                Welcome back 👋,
            </Text>
            <Text style={Typography.FONT_BODY_XL}>
                Log in to continue!,
            </Text>
        </View>
    );

    const fields = () => (
        <React.Fragment>
            <InputText
                inputPlaceholder="Email"
                // value={email}
                // onChange={setEmail}
            />
            <InputText
                inputPlaceholder="Password"
                // value={password}
                // onChange={setPassword}
            />
        </React.Fragment>                                                                                                                                                                                                                                                       
    );

    const mobileView = () => (
        <DismissKeyboard>
            <View style={styles.container}>
                { title() }
                { fields() }                                                                                                                                                                                                                                                     
            </View>
        </DismissKeyboard>
    );

    const webView = () => (
        <View style={styles.container}>
            { title() }
            { fields() }                                                                                                                                                                                                                                                     
        </View>
    );

    return (
        <React.Fragment>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                >
                { Platform.OS === 'android' || Platform.OS === 'ios' && mobileView() }
                { Platform.OS === 'web' && webView() }
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
  