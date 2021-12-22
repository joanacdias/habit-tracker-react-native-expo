import React from 'react';
import { Logo }  from '../../components/atoms';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { openShareDialogAsync, openImagePickerAsync } from '../../utils/imagePickerUtils';

const Playground = () => {
    let [selectedImage, setSelectedImage] = React.useState(null);

    let handleOnPress = async () => {
        setSelectedImage({ localUri: await openImagePickerAsync() });
    };

    let handleSharePress = async (uri) => {
        await openShareDialogAsync(uri);
    };

    let closeShareDialog = () => {
        setSelectedImage(null);
    };

    {/* <Logo/> */}
    {/* <TouchableOpacity onPress={() => console.log("hello")} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
    </TouchableOpacity> */}

    const shareDialog = () => ( 
        <React.Fragment>
            <Image source={{ uri: selectedImage.localUri }} style={styles.thumbnail} />
            <TouchableOpacity onPress={() => handleSharePress(selectedImage.localUri)} style={styles.button}>
                <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeShareDialog} style={styles.button}>
            <Text style={styles.buttonText}>Return</Text>
            </TouchableOpacity>
        </React.Fragment>
    );

    const main = () =>  (
        <React.Fragment>
            <Logo/>
            <Text style={styles.instructions}>
                To share a photo from your phone with a friend, just press the button below!
            </Text>
            <TouchableOpacity onPress={handleOnPress} style={styles.button}>
                <Text style={styles.buttonText}>Pick a photo</Text>
            </TouchableOpacity>
        </React.Fragment>
    );

    return (
        <View style={styles.container}>
            { selectedImage !== null && shareDialog() }
            { selectedImage === null && main() }
        </View>
    );
}

export default Playground;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'blue',
      padding: 20,
      borderRadius: 5,
      marginTop: 32,
    },
    buttonText: {
      fontSize: 20,
      color: '#fff',
    },
    thumbnail: {
      width: 300,
      height: 300,
      resizeMode: 'contain',
    },
  });
  