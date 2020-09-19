
import React from 'react'
import { TouchableOpacity } from 'react-native'

//utils
import Box from '../Utils/Box'
import Text from '../Utils/Text'

export default function Button (){
    return(
        <>
        <Box flexDirection='row' justifyContent='center' marginTop={10} marginBottom={10}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={'Update this'}
                    marginTop={20} 
                >
                    <Box  flex={1} flexDirection='row' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={18} fontWeight={600}>{title}</Text>   
                    </Box>
                </TouchableOpacity>
                </Box>
        </>
    )
}