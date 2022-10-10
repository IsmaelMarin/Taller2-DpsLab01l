import React, {useState, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,StatusBar,} from 'react-native';
import Form from './src/Components/Form';
import Footer from './src/Components/Footer';
import Result from './src/Components/Result';


export default function App(){
  const[tamaño, setTamaño]= useState(null);
  const[tipo, setTipo]= useState(null);
  const[pago, setPago]= useState(null);
  const[cantidad, setCantidad]= useState(null);
  const [descuento, setDescuento] = useState(null);
  const [total, setTotal] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');
 

useEffect(() => {
 if (tamaño && tipo && pago && cantidad) calculate();
 else reset();
 }, [tamaño, tipo, pago,cantidad]);

 const calculate = () => {
 reset();

 if (!tamaño) {
 setErrorMessage('Selecciona el tamaño de la taza');
 } else if (!tipo) {
 setErrorMessage('Selecciona el tipo de cafe');
 } else if (!pago) {
 setErrorMessage('Seleccióna el tipo de pago');
 } else if (!cantidad) {
 setErrorMessage('Ingrese la cantidad de tazas de cafe');
 } else {

let resultado;

resultado=parseFloat(tamaño)+parseFloat(tipo);

let descuento;

if(pago == 'Efectivo')
{
  descuento= resultado*0.15;
}
else if(pago == 'Tarjeta de credito')
{
  descuento = resultado*0.05;
}

let definitivo;
definitivo= (resultado)-(descuento);

 setTotal({
 totalPayable: ( definitivo* cantidad).toFixed(2).replace('.', ','),
 });
 }
 };

  const reset = () => {
 setErrorMessage('');
 setTotal(null);
 };

return(
 <>

 <StatusBar barStyle="light-content" backgroundColor="yellow"/>
 <SafeAreaView style={styles.Header}>
 <Text style={styles.HeadApp}>StarBosco APP</Text>
 <Form
       setTamaño={setTamaño}
       setTipo={setTipo}
       setPago={setPago}
       setCantidad={setCantidad}
  />

 </SafeAreaView>
 
    <Result
    tamaño={tamaño}
    tipo={tipo}
    pago={pago}
    cantidad={cantidad}
    total={total}
    errorMessage={errorMessage}
    />

 <Footer calculate={calculate}/>
 </>
);
}

const styles = StyleSheet.create({
 Header:{
 backgroundColor:'blue',
 height:260,
 borderBottomLeftRadius:30,
 borderBottomRightRadius:30,
 alignItems:'center'
 },
 HeadApp:{
  fontSize:25,
  fontWeight:'bold',
  color:'#fff',
  marginTop:20,
 },


})