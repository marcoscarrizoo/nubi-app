import React from 'react'
import { View } from 'react-native'

const Files = ({response}) => {
    console.log(response, 'response')
    let data0 = response[0]
    let data1 = response[1]
    console.log('response 0',data0)
    console.log('response 1',data1)
    return (
        <View>
           
        </View>
    )
}

export default Files
