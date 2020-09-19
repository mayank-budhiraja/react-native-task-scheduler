
import React, { useRef, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native';

//Components
import RBSheet from "react-native-raw-bottom-sheet";
import { Calendar } from '@ui-kitten/components';

//Utils
import Box from '../Utils/Box'
import Text from '../Utils/Text'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function GetCalendar() {
    const [date, setDate] = React.useState(new Date());
    const refRBSheet = useRef();

    return(
        <>
    <Box flexDirection='row' justifyContent='center'>
        <TouchableOpacity 
            style={styles.selectDate} 
            onPress={() => refRBSheet.current.open()} 
        >
            <Box  flex={1} flexDirection='row' alignItems='center' justifyContent='space-between'>
                <Text color='#949FB7'>
                    {date.toLocaleDateString()}
                </Text>
                <Icon name='calendar' size={30} color="#949FB7" style={{marginRight: 10}}/>   
            </Box>
            
        </TouchableOpacity>
        
        <RBSheet
            animationType="slide"
            openDuration={1000}
            closeDuration={1000}
            ref={refRBSheet}
            height={450}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
            wrapper: {
                backgroundColor: "transparent"
            },
            draggableIcon: {
                backgroundColor: "#000"
            }
            }}
        >
            <Box flexDirection='column' justifyContent='center'>
                <Box flexDirection='row' justifyContent='center'>
                    <Calendar
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                    />
                </Box>
                <Box flexDirection='row' justifyContent='center' marginTop={10} marginBottom={10}>
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => refRBSheet.current.close()}
                    marginTop={20} 
                >
                    <Box  flex={1} flexDirection='row' justifyContent='center' alignItems='center'>
                        <Text color='white' fontSize={18} fontWeight={600}>Apply</Text>   
                    </Box>
                </TouchableOpacity>
                </Box>
            </Box>
            
        </RBSheet>
        </Box>
    </>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6F52ED',
        width: 335,
        height: 48, 
        borderRadius: 10,
      },
      selectDate: {
        width: 335,
        height: 48, 
        color: '#949FB7',
        borderRadius: 5, 
        borderColor: '#DADEE8', 
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10
      }
})