/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const Mapspage = ({route}: {route: any}) => {
  const thecountry = route.params.country;
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  useEffect(() => {
    fetch(
      'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' +
        thecountry +
        '&key=AIzaSyCc2TC-GUrlS_qHBQa5k80TrUwYKbgXF5M',
      {
        method: 'GET',
      },
    )
      .then(response => response.json())
      .then(responsejson => {
        if (responsejson.status === 'OK') {
          setLat(responsejson.results[0].geometry.location.lat);
          setLong(responsejson.results[0].geometry.location.lng);
        }
      })
      .catch(error => console.error(error));
  }, [thecountry]);

  return (
    <SafeAreaView style={styles.mapcontainer}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 15.0,
            longitudeDelta: 15.0,
          }}
          region={{
            latitude: lat,
            longitude: long,
            latitudeDelta: 15.0,
            longitudeDelta: 15.0,
          }}
          customMapStyle={mapStyle}>
          <Marker coordinate={{latitude: lat, longitude: long}} />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  mapcontainer: {flex: 1},
});
export default Mapspage;
