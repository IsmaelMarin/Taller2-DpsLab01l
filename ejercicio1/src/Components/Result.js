import React,{useState,useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Result(props) {
 const {tamaño, tipo, pago,cantidad, total, errorMessage} = props;


let taza;

if(tamaño == 1.00)
{
  taza='Short 8 onz. $1.00';
}
else if(tamaño == 1.50)
{
  taza='Tall 12 onz. $1.50';
}
else if(tamaño == 2.00)
{
  taza ='Grande 16 onz. $2.00'
}

let sabor;

if(tipo == 2.00)
{
  sabor='Mocha $2.00';
}
else if(tipo == 2.50)
{
  sabor='Te chai $2.50';
}
else if(tipo == 1.50)
{
  sabor ='Americano $1.50'
}
else if(tipo == 3.00)
{
  sabor ='Frapper $3.00'
}
//const sumar= (tamaño + tipo);

let descuento;
let porcentaje;

if(pago == 'Efectivo')
{
  porcentaje= "15%"
}
else if(pago == 'Tarjeta de credito')
{
  porcentaje= "5%"
}

  return (
 <View style={styles.content}>
 {total && (
   <View style={styles.boxResult}>
 <Text style={styles.title}>RESUMEN</Text>

 <DataResult title="Tamaño:" value= {`${taza}`}/>
 <DataResult title="Tipo :" value={`${sabor}`} />
 <DataResult title="Pago:" value={`${pago} `} />
 <DataResult title="Cantidad:" value={`${cantidad}`} />
 <DataResult title="Descuento: €" value={`${porcentaje}`} />
 <DataResult
 title="Total a pagar:"
 value={`${total.totalPayable} €`}
 />
 </View>
 )}

  <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}

function DataResult(props) {
 const {title, value} = props;

  return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}

const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
 boxResult: {
 padding: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
  justifyContent: 'space-between',
 marginBottom: 20,
 },
 error: {
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
});
