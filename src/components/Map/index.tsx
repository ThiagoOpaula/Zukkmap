import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { Container, Maps } from './styles';

interface MapProps {
  handleMapSetLocation: (latitude: number, longitude: number) => void;
  longitudeValue: number;
  latitudeValue: number;
}

const Map: React.FC<MapProps> = ({
  longitudeValue,
  latitudeValue,
  handleMapSetLocation,
}: MapProps) => {
  const [loading, setLoading] = useState(true);
  const [mapLatitude, setMapLatitude] = useState(longitudeValue);
  const [mapLongitude, setMapLongitude] = useState(latitudeValue);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setMapLongitude(coords.longitude);
        setMapLatitude(coords.latitude);
        console.log(coords);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  };

  useEffect(() => {
    // local do bug
    if (longitudeValue !== 0) {
      setMapLatitude(latitudeValue);
      setMapLongitude(longitudeValue);
      setLoading(false);
    } else {
      getCurrentLocation();
      handleMapSetLocation(mapLatitude, mapLongitude);
      setLoading(false);
    }
  }, []);

  // const mapConfig = {
  //   latitude: mapLatitude,
  //   longitude: mapLongitude,
  //   latitudeDelta: 0.008,
  //   longitudeDelta: 0.008,
  // };

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#e8e" />
      ) : (
        <Maps
          initialRegion={{
            latitude: mapLatitude,
            longitude: mapLongitude,
            latitudeDelta: 0.008,
            longitudeDelta: 0.008,
          }}
        />
      )}
    </Container>
  );
};

export default Map;
