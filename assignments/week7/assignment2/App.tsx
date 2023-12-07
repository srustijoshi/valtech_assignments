
import { useState } from "react";
import { Alert, Button, Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Switch, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
  box: {width:"50%", height: 200, backgroundColor:"grey", marginBottom:10},
  firstbox:{marginTop:30}
})



function App(): React.JSX.Element {
  const [widths,setWidth] = useState({width:"50%"})
  return <ScrollView>
    <TouchableWithoutFeedback onPress={()=> setWidth({width:"100%"})}>
    <View>
    <View style={[styles.box, styles.firstbox]}></View>
    <View style={{...styles.box, backgroundColor:'cyan'}}></View>
    <View style={{...styles.box, backgroundColor:'yellow'}}></View>
    <View style={{...styles.box, backgroundColor:'black'}}></View>
    <View style={{...styles.box, backgroundColor:'#f455ad'}}></View>
    <View style={{...styles.box, width:widths.width, height:200, backgroundColor:"black"}}></View>
    </View>
    </TouchableWithoutFeedback>
  </ScrollView>
}
export default App;