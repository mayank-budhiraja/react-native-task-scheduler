import React from 'react'

//Utils
import { StatusBar } from 'react-native'
import Box from '../Utils/Box'
import Text from '../Utils/Text'

export default function Header (){
    return(
        <>   
            <StatusBar backgroundColor='#6F52ED'/>
            <Box
                backgroundColor='primary'
                borderColor='primary'
                height={100}
            >
                <Text fontSize={28} marginTop={40} color='white'>  Create Task </Text>
            </Box>
        </>
    )
}