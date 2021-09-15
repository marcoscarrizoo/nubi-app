import React, {useState} from "react";
import { View, Picker, Text, Button, TouchableHighlight, StyleSheet } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';

export default function Files  ({ responseFromApi }) {
  const [responseType, setResponseType] = useState(false)
  const [responseFile, setResponseFile] = useState(false)
  const [responseType1, setResponseType1] = useState(false)
  const [responseFile1, setResponseFile1] = useState(false)
 
 
const resType = () => {
  if(responseType === false) return setResponseType(true);
  setResponseType(false)
  
}
const resFile = () => {
 if(responseFile === false) return setResponseFile(true);
 setResponseFile(false)
  
}

const resType1 = () => {
if(responseType1 === false) return setResponseType1(true) ;
  setResponseType1(false)
}

const resFile1 = () => {
 if(responseFile1 === false) return setResponseFile1(true) ;
 setResponseFile1(false)
}


  return (
    <View style={{margin: 50, width: 300}}>
     {responseFromApi ? 
      <View >
      <TouchableHighlight  onPress={resType}>
          <MaterialCommunityIcons  name='folder' color='rgb(25, 40, 170)' size={30}><Text style={styles.text}>{responseFromApi[0].name}</Text></MaterialCommunityIcons>
      </TouchableHighlight>

      {responseType === true?  
      <View style={{marginLeft: 40}}>
      <TouchableHighlight onPress={resFile}>
          <MaterialCommunityIcons name='folder' color='rgb(25, 40, 170)' size={30}><Text style={styles.text}>{responseFromApi[0].type}</Text></MaterialCommunityIcons>
      </TouchableHighlight> 
      </View>
      : <View></View>}



        {responseFile === true ? 
        <View style={{marginLeft: 65}}>
        {responseFromApi[0].files?.map(e => (
      <TouchableHighlight key={e.name} onPress={() => console.log('click')}>
          <MaterialCommunityIcons key={e.name} name='folder' color='rgb(25, 40, 170)' size={30}> <Text style={styles.text}>{e.name}</Text></MaterialCommunityIcons>

      </TouchableHighlight>
        ))}
      </View>
      : <View></View>}  




      
        
      <TouchableHighlight onPress={resType1}>
          <MaterialCommunityIcons name='folder' color='rgb(25, 40, 170)' size={30}><Text style={styles.text}>{responseFromApi[1].name}</Text></MaterialCommunityIcons>
      </TouchableHighlight>
    </View>
     : <View></View>}
    {responseType1 === true? 
     <View style={{marginLeft: 30}}>
      <TouchableHighlight onPress={resFile1}>
          <MaterialCommunityIcons name='folder' color='rgb(25, 40, 170)' size={30}><Text style={styles.text}>{responseFromApi[1].type}</Text></MaterialCommunityIcons>
      </TouchableHighlight> 
      </View>
  
      : <View></View>}

   {responseFile1 === true? 
   <View style={{marginLeft: 50}}>
        {responseFromApi[1]?.files.map(e => (
      <TouchableHighlight key={e.name} onPress={() => console.log('click')}>
          <MaterialCommunityIcons key={e.name} name='folder' color='rgb(25, 40, 170)' size={30}> <Text style={styles.text}>{e.name}</Text></MaterialCommunityIcons>

      </TouchableHighlight>
        ))}
      </View> : <View></View>}
     

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20
  }
})




