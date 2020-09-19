import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
}

  const Description = () => {
    const [value, onChangeText] = React.useState('Text');
    return (
      <View
        style={styles.description}>
        <UselessTextInput
          multiline
          numberOfLines={5}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  description:{
    width: 335,
    height: 120,
    color: '#949FB7',
    borderRadius: 5, 
    borderColor: '#DADEE8', 
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    paddingLeft: 10
      }
})

      export default Description;