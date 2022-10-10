import React, { useState } from "react";
import { FlatList,ScrollView, SafeAreaView, StatusBar, StyleSheet, Text,View, TouchableOpacity, ImageBackground,Image } from "react-native";

const DATA = [
  {
    id: "1",
    title: "The big ban therory",
    estreno:"Martes 11 de octubre de 2022",
     src:require('../Imagenes/Series/comedia1.jpg'),
  },
  {
    id: "2",
    title:"Chistosos",
   src:require('../Imagenes/Series/comedia2.jpg'),
    estreno:"Miercoles 12 de octubre de 2022",
  },
  {
    id: "3",
    title: "Super Heroes",
    src:require('../Imagenes/Series/aventura1.jpg'),
    estreno:"Jueves 13 de octubre de 2022",
  },
  {
    id: "4",
    title: "Stark trek",
    src:require('../Imagenes/Series/aventura2.jpg'),
    estreno:"Viernes 14 de octubre de 2022",
  },
    {
    id: "5",
    title: "Espadachin",
    src:require('../Imagenes/Series/fantasia1.jpg'),
    estreno:"Sabado 15 de octubre de 2022",
  },
  {
    id: "6",
    title: "Niña de la nieve",
    src:require('../Imagenes/Series/fantasia2.jpg'),
    estreno:"Domingo 16 de octubre de 2022",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor,img,title,estreno }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'15'}}>Titulo: </Text>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
    <Image style={styles.img} source={img}/>
    <Text style={{textAlign:'center', fontWeight:'bold', fontSize:'15'}}>Fecha de estreno: </Text>
    <Text style={[styles.title, textColor]}>{item.estreno}</Text>
  </TouchableOpacity>
);

const Series = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#2074FF" : "#FF3131";
    const color = item.id === selectedId ? 'white' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
        title={item.title}
        estreno={item.estreno}
        img={item.src}
      />
    );
  };

  return (
  <ScrollView>
    <SafeAreaView style={styles.container}>

      <View>
  <ImageBackground  source={{uri: 'https://i.blogs.es/7ca238/netflix-pierde-cuota-como-nunca-y-disney-plus-y-hbo-max-ya-son-ocupan-el-segundo-y-tercer-lugar-del-streaming-en-mexico-segun-the-ciu_/1366_2000.jpg'}}
       style={{width: '100%', height: 200, resizeMode:'contain'}} />
    </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems:'center',
    borderRadius:10,
  },
  title: {
    fontSize: 17,
    
  },
  img:{
    width:200,
    height:125,
    borderWidth:2,
    borderColor:'#d35647',
    resizeMode:'contain',
    margin:8,
  }
});

export default Series;