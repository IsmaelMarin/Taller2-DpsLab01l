import React from "react";
import {View, Text, StyleSheet,Image,ImageBackground, TouchableOpacity,Dimensions,FlatList,SafeAreaView,ScrollView} from "react-native";
import Pinturas from '../Imagenes/Accion/Acciones';
import Relacion from '../Imagenes/Romanticas/amores'
import Chistoso from '../Imagenes/Comedia/chistoso';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Peliculas = () => {

  return(
  <ScrollView>
    <View>
   <ImageBackground  source={{uri: 'https://www.flipa.net/wp-content/uploads/Palomitas-cine.jpg'}}
       style={{width: '100%', height: 200, resizeMode:'contain'}} />


         <View style={{margin:'10'}}>
       <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'25'}}>Comedias</Text>
      </View>
     <View style={{display:'flex', flexDirection:'row',
     flexWrap:'wrap', marginTop:'100'}}>
         {
           Chistoso.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
                <Image source={image.url} style={{ 
                  height: deviceHeight/3,
                  width: deviceWidth/7,
                  borderRadius:10, margin:2 }} />
              </TouchableOpacity>

           ))
         }
     </View>

      <View style={{margin:'10'}}>
       <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'25'}}>Romanticas</Text>
      </View>
     <View style={{display:'flex', flexDirection:'row',
     flexWrap:'wrap', marginTop:'100'}}>
         {
           Relacion.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
                <Image source={image.url} style={{ 
                  height: deviceHeight/3,
                  width: deviceWidth/7,
                  borderRadius:10, margin:2 }} />
              </TouchableOpacity>

           ))
         }
     </View>

      <View style={{margin:'10'}}>
       <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'25'}}>Acción</Text>
      </View>
     <View style={{display:'flex', flexDirection:'row',
     flexWrap:'wrap', marginTop:'100'}}>
         {
           Pinturas.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => {}}>
                <Image source={image.url} style={{ 
                  height: deviceHeight/3,
                  width: deviceWidth/7,
                  borderRadius:10, margin:2 }} />
              </TouchableOpacity>

           ))
         }
     </View>
    
    </View>
  </ScrollView>
  
   
  );
}
export default Peliculas;