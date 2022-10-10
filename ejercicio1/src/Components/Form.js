import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';


    export default function Form(props) {
    const {setTamaño, setTipo, setPago, setCantidad} = props;
    return (
    <View style={styles.viewForm}>

   <View style={styles.unodos}>
     <View style={styles.diseño}>
     <RNPickerSelect
    
    onValueChange={(value) => setTamaño(value)}
    placeholder={{
    label: 'Seleccióna Tamaño...',
    value: null,
    }}
    items={[
    {label: 'Short 8 onz. $1.00', value: 1.00},
    {label: 'Tall 12 onz. $1.50', value: 1.50},
    {label: 'Grande 16 onz. $2.00', value:2.00 },
    ]}
    />

     </View>

    <View  style={styles.diseño}>
     <RNPickerSelect
    
    onValueChange={(value) => setTipo(value)}
    placeholder={{
    label: 'Seleccióna Tipo de cafe...',
    value: null,
    }}
    items={[
    {label: 'Mocha $2.00', value: 2.00 },
    {label: 'Te chai $2.50', value: 2.50},
    {label: 'Americano $1.50', value: 1.50},
    {label: 'Frapper $3.00', value: 3.00},
    ]}
    />
     </View>
    </View>
   
   <View style={styles.pagocan}>


     <View style={styles.diseño2}>

    <RNPickerSelect
    
    onValueChange={(value) => setPago(value)}
    placeholder={{
    label: 'Seleccióna tipo de pago...',
    value: null,
    }}
    items={[
    {label: 'Efectivo', value: 'Efectivo'},
    {label: 'Tarjeta de credito', value: 'Tarjeta de credito'},

    ]}
    />
     </View>

     
  <View style={styles.cuadro}>
    <TextInput
    placeholder="Cantidad a pedir"
    keyboardType="numeric"
    style={styles.input}
    onChange={(e) => setCantidad(e.nativeEvent.text)}
    />
  </View>

   </View>


    </View>
    );
    }



    const styles = StyleSheet.create({
    viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 50,
    backgroundColor: "transparent",
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
    },
    unodos: {
    
    marginTop:-40,
    },
    input: {
    height: 35,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "goldenrod",
    borderRadius: 5,
    width: '100%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    },
    diseño:{
      marginTop:10, 
      backgroundColor:'white',     
      
    },
    diseño2:{
      marginTop:-10,   
      width:150,
      marginRight:15, 
      backgroundColor:'white', 
      
    },
    pagocan:{
      flexDirection:'row',
      marginTop:15,
       alignItems:'flex-start',
    },
    cuadro:{
     width:100, 
    }

    });

