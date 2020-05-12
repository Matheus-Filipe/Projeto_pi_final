import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } 


from 'react-native';

import MapView from 'react-native-maps';

export default class App extends Component {
  state = {
    places: [
      {
        id: 1,
        title: 'Una Aimores',
        description: 'Centro Universitario',
        dados:'Dados Atuais',
        latitude: -19.9285969,
        longitude: -43.93786,
      },

      {
        id: 3,
        title: 'Parque Municipal',
        description: 'Parque Municipal Américo Renné Giannetti',
        latitude: -19.9239872,
        longitude: -43.936193,
      }
    ]
  };

  _mapReady = () => {
    this.state.places[0].mark.showCallout();
  };

  render() {
    const { latitude, longitude } = this.state.places[0];

    return (
      
     
      
      <View style={styles.container}>
        <View style={styles.container2}>
        <Text style={styles.texto}>Atividade Saudavel</Text>
      </View>

        <MapView
        
          ref={map => this.mapView = map}
          initialRegion={{
            latitude,
            longitude,
            latitudeDelta: 0.0142,
            longitudeDelta: 0.0231,
          }}
          style={styles.mapView}
          rotateEnabled={false}
          scrollEnabled={false}
          zoomEnabled={false}
          showsPointsOfInterest={false}
          showBuildings={false}
          showsUserLocation={true}
          onMapReady={this._mapReady}   
            
          
        >
          { this.state.places.map(place => (
            <MapView.Marker
              ref={mark => place.mark = mark}
              title={place.title} 
              description={place.description}
              
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
            />
            

          ))}
        </MapView>
        <ScrollView
          style={styles.placesContainer}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => {
            const place = (e.nativeEvent.contentOffset.x > 

0)
              ? e.nativeEvent.contentOffset.x / 

Dimensions.get('window').width
              : 0;

            
          }}
        >
          { this.state.places.map(place => (
            <View key={place.id} style={styles.place}>
              <Text style={styles.title}>{ place.title }</Text>
              <Text style={styles.description}>Dados Atuais</Text>
              <Text style={styles.dados}>Umidade:</Text>
              <Text style={styles.dados}>Temperatura:</Text>
            </View>
          )) }
        </ScrollView>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  container2: {
      
    backgroundColor:`#2c3e50`,
    position: "absolute",
    top: 0,
    left: 0,
    right:0,
    bottom: 732
  },

  mapView: {
    position: 'absolute',
    top: 40,
    left: 1.5,
    bottom: 0,
    right: 0,
    
  },     

  placesContainer: {
    width: '100%',
    maxHeight: 200,
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    fontWeight: 'bold',
    color: '#999',
    fontSize: 18,
    marginTop: 5,
  },
  dados: {
    color: '#999',
    fontSize: 16,
    marginTop: 5,
  },
  Topo: {
    color: `#FFF`,
    position: 'absolute',
    top: 0,
  

  },
  texto:{
    color:`#FFF`,
    justifyContent: `center`,
    alignContent:`center`,
    position: 'absolute',
    top: 10,
    left: 30,
    
  },
  container2: {
      
    backgroundColor:`#2c3e51`,
    position: "absolute",
    top: 0,
    left: 0,
    right:0,
    bottom: 732
  },
});


