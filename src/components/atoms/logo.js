import React from 'react';
import { Platform, StyleSheet, Image } from 'react-native';

const Logo = () => {

    return (
        <React.Fragment>
            {Platform.OS === 'web' 
                ? <Image source={require('../../assets/logo.svg')} style={styles.webLogo}/>
                : <YahtLogo width={200} height={200} />}
        </React.Fragment>
    );
}

export default Logo;

const styles = StyleSheet.create({
    webLogo: {
      marginBottom: 32,
      width: '300px',
      height: '60px',
      resizeMode: 'contain',
    }
  });