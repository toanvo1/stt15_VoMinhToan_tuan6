import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen2({ navigation }) {
  const [image, setImage] = useState(require("../assets/blue.png"));
  const [text,settext] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <Image source={image} style={{ width: '30%', height: '132px' , resizeMode:'contain' }} />
        <Text style={{width: '164px',height: '17px',marginTop: '17px',fontSize: '15',fontWeight: 'bold',lineHeight: "17.58px",marginLeft: '30px'}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
      </View>
      <View style={{ flex: 7, backgroundColor: "#C4C4C4" ,  alignItems:'center'}}>
        <Text style={{fontSize: '18px',right:'70px' }}>Chọn một màu bên dưới:</Text>
        <Pressable style={{backgroundColor: "gray", width:'85px' , marginTop:'10px' , marginBottom:'15px' , height:'80px',}}
          onPress={() => {setImage(require("../assets/vs_silver.png"));}}>
        </Pressable>
        <Pressable style={{backgroundColor: "#F30D0D", width:'85px', marginBottom:'10px' , height:'80px',}}
          onPress={() => {setImage(require("../assets/vs_red.png"));}}>
        </Pressable>
        <Pressable style={{backgroundColor: "black", width:'85px', marginBottom:'10px' , height:'80px',}}
          onPress={() => {setImage(require("../assets/vs_black.png"));}}>
        </Pressable>
        <Pressable style={{backgroundColor: "#234896", width:'85px' , marginBottom:'20px' , height:'80px',}}
          onPress={() => {setImage(require("../assets/blue.png"));}}>
        </Pressable>
        <Pressable 
        style={{width:'326px',height:'44px', justifyContent:'center', alignItems:'center', borderRadius:'10px', backgroundColor:'#1952E2' , border:'1px solid #CA1536'}}>
          <Text style={{fontSize:'20px', color:'white' , lineHeight:'24px'}}>Chon  ;v</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
