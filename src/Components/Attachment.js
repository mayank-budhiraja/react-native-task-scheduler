
import React from 'react'
import { TouchableOpacity } from 'react-native'
//utils
import Box from '../Utils/Box'
import Text from '../Utils/Text'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Attachment (){
  function handleAdd() {

  }
    return(
        <Box 
            flexDirection='row' 
            justifyContent='space-between' 
            marginLeft={30}
            marginRight={30}
            marginTop={40}
          >
            <Text 
              fontSize={18} 
              fontWeight={700}
            > Attachment 
            </Text>
            <Box flexDirection='row' alignItems='center'>
              <Icon name='attachment' size={30} color="#6F52ED" style={{marginRight: 10}}/>   
              <TouchableOpacity onPress={() => handleAdd()}>
                <Text
                  fontSize={18} 
                  fontWeight={700}
                  color='#6F52ED'
                > Add </Text>
              </TouchableOpacity> 
            </Box>
          </Box>
    )
}