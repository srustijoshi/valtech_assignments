import {View, Text, Image, ScrollView} from "react-native";
import {useEffect, useState} from 'react';
import axios from "axios";

function App(): React.JSX.Element {
  let [data,setData]=useState([])
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")
    .then((res)=> {setData(res.data.data)})
    .catch(error => console.log("Error",error))
  },[]);

return <ScrollView >
  <View style={{flexDirection:"row",flexWrap:"wrap"}}>
        {data.map((val)=> <View key={val.id} style={{width:300, height:180,backgroundColor:val.id%2 ? "rgba(255,0,0,0.7)": "rgba(0,0,255,0.4)", padding:10, margin:10, borderRadius:30,borderTopColor:"black",borderTopWidth:20}}>
    <Text>{val.first_name + " " + val.last_name}</Text>
    <Image style={{width:100, height:100}} source={{uri:val.avatar}}></Image>
    <Text>{val.email}</Text>
</View>)}
</View>
</ScrollView>
export default App;