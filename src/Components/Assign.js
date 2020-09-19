
import React from 'react'
import { TouchableOpacity } from 'react-native'
//utils
import Box from '../Utils/Box'
import Text from '../Utils/Text'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Assign (){
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
            > Employee 
            </Text>
            <Box flexDirection='row' alignItems='center'>
              <Icon name='add' size={30} color="#6F52ED" style={{marginRight: 10}}/>   
              <TouchableOpacity onPress={() => handleAdd()}>
                <Text
                  fontSize={18} 
                  fontWeight={700}
                  color='#6F52ED'
                > Assign </Text>
              </TouchableOpacity> 
            </Box>
          </Box>
    )
}