import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const carouselItems = [
    {
      title: "Ven y Conocenos",
      text: "Somos un equipo de profesionales en software y expertos en tecnologia",
      image: require('./assets/imagen1.jpg'),
    },
    {
      title: "Hacemos tus ideas realidad",
      text: "Hacemos uso de herramientas tecnologicas de primer nivel",
      image: require('./assets/imagen2.jpg'),
    },
    {
      title: "No pierdas mas el tiempo",
      text: "Entre mas pronto vengas y nos conozcas podras empezar",
      image: require('./assets/imagen3.png'),
    },
    {
      title: "Contactanos",
      text: "Recibiras respuesta muy pronto e informacion detallada de nuestros servicios",
      image: require('./assets/imagen4.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <Carousel showThumbs={false}>
        {carouselItems.map((item, index) => (
          <View key={index} style={styles.slide}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Image source={item.image} style={styles.image} />
          </View>
        ))}
      </Carousel>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: '#ffffff',


  },
  image: {
    width: '200%',
    height: 300,
    resizeMode: 'contain',
  },
  slide: {
    backgroundColor: '#808080',
    alignItems: 'center',
    borderRadius: 5,
    height: 550,
    padding: 60,
    marginLeft: 25,
    marginRight: 25,
  },
  title: {
    fontSize: 30,
    color: '#ffffff',
    marginBottom: 16,
  },
});

 