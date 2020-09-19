import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { styles } from 'styled-system';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Useless Placeholder');
  
  return (
    <Box>
        <TextInput
            style={styles.textInput}
            onChangeText={text => onChangeText(text)}
            value={value}
        />
    </Box>
    
  );
}

const styles = StyleSheet.create({
    textInput: {
        position: absolute,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#FFFFFF',
        border: '1px solid #DADEE8',
    }
})

export default UselessTextInput;