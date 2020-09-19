import React from 'react'

//Screens
import GetCalendar from '../Components/Calendar'
import Assign from '../Components/Assign'

//Components
import Header from '../Components/Header'
import Description from '../Components/Description'
import Attachment from '../Components/Attachment'

//Utils
import { TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import Box from '../Utils/Box'
import Text from '../Utils/Text'


export default function AssignScreen (){
    const [title, setTitle] = React.useState('Title');
    
    function handleTask(){

    }

    return(
        <Box backgroundColor='#FFFFFF' flex={1}>
          <Box>
              <Header />
          </Box>
          <Box flexDirection='row' justifyContents='flex-start'>
            <Text 
                    fontSize={18} 
                    fontWeight={700}
                    paddingBottom={15} 
                    marginLeft={30}
                    marginTop={30}
            > Summary 
            </Text>
          </Box>
          <Box flexDirection='row' justifyContent='center'>
            <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={title}
            />
          </Box>
          
          <Box marginTop={30}>
              <GetCalendar />
          </Box>
          
          <Assign />

          <Box flexDirection='column'>
            <Text 
              fontSize={18} 
              fontWeight={700}
              paddingBottom={15} 
              marginLeft={30}
              marginTop={30}
            > Description 
            </Text>
            <Box flexDirection='row' justifyContent='center'> 
              <Description />
            </Box>
          </Box>

          <Attachment />

          <Box flexDirection='row' justifyContent='center' marginTop={90} marginBottom={10}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleTask()}
                    marginTop={20} 
                >
                    <Box  flex={1} flexDirection='row' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={18} fontWeight={700}>Create Task</Text>   
                    </Box>
                </TouchableOpacity>
          </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6F52ED',
    width: 335,
    height: 48, 
    borderRadius: 5,
  },
    
  textInput: {
        width: 335,
        height: 48,
        color: '#949FB7',
        borderRadius: 5, 
        borderColor: '#DADEE8', 
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
      },

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