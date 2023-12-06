import React from 'react';

import {Dimensions, Image, ImageBackground, SafeAreaView, ScrollView, Text, View,} from 'react-native';
import { Footer } from './components/Footer';
import { Header } from './components/Header';



function App(): JSX.Element {
  /* let mobheight=Dimensions.get("screen").height;
  console.log(mobheight) */

  //prg1
  /* return <SafeAreaView>
            <View style={{height:"100%", display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
              <Header/>
              <Footer/>
            </View>
          </SafeAreaView>
   */

  //prg2

  /* const images= require("./assets/images/antman.jpg")
  return <SafeAreaView>
  <View>
    <Image style={{height:150, width:150}} source={images} />
    <Text>Network Image</Text>
    <Image style={{height:150, width:150}} source={{uri:"https://i.ibb.co/QXDM5T3/01.jpg"}}/>
    <ImageBackground style={{height:"60%", width:"100%"}} source={{uri:"https://i.ibb.co/kmNYT15/02.jpg"}}>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quae libero commodi obcaecati sed corrupti deserunt, vero dolores quidem ab! Similique corrupti labore quis provident aspernatur nihil eveniet sit veritatis?</Text>
    </ImageBackground>
  </View>
</SafeAreaView> */

//prg3

/* const heroslist= [
  {title: "Ironman", poster:require("./assets/images/ironman.jpg")},
  {title: "Superman", poster:require("./assets/images/superman.jpg")},
  {title: "Rajni", poster:require("./assets/images/rajani.jpg")},
  {title: "Spiderman", poster:require("./assets/images/spiderman.jpg")},
  {title: "Hulk", poster:require("./assets/images/hulk.jpg")},
  {title: "WonderWoman", poster:require("./assets/images/wonderwoman.jpg")},
  {title: "Batman", poster:require("./assets/images/batman.jpg")}
]
return <SafeAreaView>
<ScrollView horizontal={true}>
  {heroslist.map((val,idx) => 
  <View key={idx} >
    <Text>{val.title}</Text>
    <Image source={val.poster}/>
    </View>)}
</ScrollView>
</SafeAreaView> */

const heroslist= [
  {title: "Ironman", poster:require("./assets/images/ironman.jpg")},
  {title: "Hawkeye", poster:require("./assets/images/hawkeye.jpg")},
  {title: "Rajni", poster:require("./assets/images/rajani.jpg")},
  {title: "Spiderman", poster:require("./assets/images/spiderman.jpg")},
  {title: "Hulk", poster:require("./assets/images/hulk.jpg")},
  {title: "WonderWoman", poster:require("./assets/images/wonderwoman.jpg")},
  {title: "Batman", poster:require("./assets/images/batman.jpg")},
  {title: "Black Widow", poster:require("./assets/images/blackwidow.jpg")}
]

return <SafeAreaView>
<ScrollView>
  <Header/>
  <View style={{display:'flex',flexWrap:"wrap",flexDirection:'row', padding:10, gap:10,justifyContent:'center'}}>
  {heroslist.map((val,idx) => 
  <View key={idx} >
    <ImageBackground style={{height:250,width:150, opacity:0.9}}  source={val.poster}>
      <Text style={{fontSize:25, fontWeight:'bold',color:'white', top:"80%", left:'5%', zIndex:1}}>{val.title}</Text>
    </ImageBackground>
    </View>)}
    </View>
</ScrollView>
</SafeAreaView>
}


export default App;
