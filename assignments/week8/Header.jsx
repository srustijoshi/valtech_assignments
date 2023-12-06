const { View, Text, Image } = require("react-native")

/* export let Header = () => {
    return <View style={{height:200, backgroundColor:"yellow"}}>
      <Text>I am header</Text>
    </View>
  } */

export let Header = () => {
    return <View style={{display:'flex', flexDirection:'row' ,justifyContent:'space-between', margin:10}}>
        <Image style={{height:50, width:50}} source={{uri : "https://i.ibb.co/QXDM5T3/01.jpg"}}/>
        <Text style={{fontSize:25, fontWeight:'bold',color:'red'}}>Guide Along</Text>
    </View>
}