import { useNavigation } from "@react-navigation/native"
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen1 = ({ navigation }) => {

    return (
         <SafeAreaView style={{flex:'1'}}>
        <View style={{flex:'5' ,flexDirection:'row' , justifyContent:'center', }}>
            <Image 
                source={require('../assets/blue.png')}
                style={{width:'300px',height:'361px', resizeMode:'contain'}}
            />
        </View>
        <View style={{flex:'3' , flexDirection:'column' , alignItems:'center' }} >
            <Text style={{fontSize:'15px', marginBottom:'15px' , lineHeight:'18px'}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style={{ display:'flex',marginBottom:'15px', flexDirection:'row', justifyContent:'space-between', width:'290px' , fontSize:'18px'}}>
                <View style={{display:'flex' , flexDirection:'row',justifyContent:'space-between'}}>
                    <Image 
                        source={require('../assets/star.png')}
                        style={{width:'25px' , height:'20px'}}
                    />
                    <Image 
                        source={require('../assets/star.png')}
                        style={{width:'25px' , height:'20px'}}
                    />
                    <Image 
                        source={require('../assets/star.png')}
                        style={{width:'25px' , height:'20px'}}
                    />
                    <Image 
                        source={require('../assets/star.png')}
                        style={{width:'25px' , height:'20px'}}
                    />
                    <Image 
                        source={require('../assets/star.png')}
                        style={{width:'25px' , height:'20px'}}
                    />
                </View>
                <Text style={{fontSize:'15px', lineHeight:'18px'}}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={{marginBottom:'15px', display:'flex', flexDirection:'row', justifyContent:'space-between', width:'290px' , fontSize:'18px' , lineHeight:'21px'}}>
                <Text style={{fontWeight:'bold' , fontSize:'18px', width:'40%'}}>1.790.000 đ</Text>
                <Text style={{ fontSize:'18px' , textDecorationLine:'line-through', width:'50%' }}>1.790.000 đ</Text>
            </View>
            <View style={{marginBottom:'15px', display:'flex', flexDirection:'row', justifyContent:'space-between', width:'290px' , fontSize:'18px' , lineHeight:'21px'}}>
                <Text style={{ fontSize:'15px', width:'55%' , color:'red'}}>Ở đâu rẻ hơn hoàn tiền</Text>
                <View style={{width:'45%'}}>
                <Image
                    source={require('../assets/question.png')}
                    style={{width:"20px" , height:'20px',}}
                />
                </View>
            </View>
            <View style={{width:'300px' , height:'34px' , borderRadius:'10px', border:'1px solid #808080' , flexDirection:'row',justifyContent:'space-between' ,alignContent:'center' , alignItems:'center'}}>
                <Text style={{textAlign:'center',width:'350px' , color:'black' , fontWeight:'bold'}}>4 MÀU-CHỌN MÀU</Text>
                <Pressable onPress={()=>{navigation.navigate('Screen2')}}    
                >
                    <Image source={require('../assets/Vector.png')}
                        style={{width:'15px',height:'15px' , right:'20px'}}
                    />
                </Pressable>
            </View>
        </View>
        <View style={{flex:'1', alignItems:'center'}}>
                <Pressable style={{width:'300px',alignItems:'center', justifyContent:'center', backgroundColor:'#F30D0D', height:'44px', borderRadius:'10px'}}>
                    <Text style={{color:'white', textTransform:'uppercase', fontSize:'22px'}}>Chọn Mua</Text>
                </Pressable>
            </View>
    </SafeAreaView>
);
}
export default Screen1;