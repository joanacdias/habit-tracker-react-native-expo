import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    
    return pickerResult.uri;
};

export const openShareDialogAsync = async (uri) => {
    if (!(await Sharing.isAvailableAsync())) {
        alert(`Uh oh, sharing isn't available on your platform`);
        return;
    }

    await Sharing.shareAsync(uri);
}

  


