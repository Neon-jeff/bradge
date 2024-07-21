import { View, Text } from 'react-native'
import React from 'react'

const CustomDrawer = ({props,children}) => {
    console.log(props.navigation.isFocused);
  return (
    <View>
      <Text>CustomDrawer</Text>
    </View>
  )
}

export default CustomDrawer