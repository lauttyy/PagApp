import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import Btn from '../botones/boton';

export default function Cuenta({ navigation }) {
  return (
    <>
      <ImageBackground source={require('../assets/fondoOp.jpg')} style={styles.bg}>
        <View style={styles.caja}>
          <Text style={styles.titulo}>CONFIGURACION USUARIO</Text>
          
          <View style={styles.btnContainer}>
            <Btn texto="USUARIO" presionado={() => navigation.navigate("Cuenta")} />
            <Btn texto="CONTRASEÑA" presionado={() => navigation.navigate("graficos")} />
          </View>
          <View style={styles.btnContainer1}>
          <Btn texto="Volver a Inicio" presionado={() => navigation.navigate("Home")} />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    height: '100%', 
    justifyContent: 'center',
  },
  caja: {
    paddingTop: 30,
    marginHorizontal: 40,
    paddingBottom: 20, 
    borderRadius: 20,
  },
  titulo: {
    fontSize: 42,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,  
  },
  btnContainer: {
    marginTop: 0, 
  },
  btnContainer1:{

  }
});
