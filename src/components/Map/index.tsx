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
  // const [loading, setLoading] = useState(false);
  const [mapLatitude, setMapLatitude] = useState<number>(10);
  const [mapLongitude, setMapLongitude] = useState<number>(20);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setMapLongitude(coords.longitude);
        setMapLatitude(coords.latitude);
        console.log(longitudeValue, latitudeValue);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
    handleMapSetLocation(mapLatitude, mapLongitude);
  };

  useEffect(() => {
    if (longitudeValue && latitudeValue) {
      setMapLatitude(latitudeValue);
      setMapLongitude(longitudeValue);
    } else {
      getCurrentLocation();
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
      <Maps
        initialRegion={{
          latitude: mapLatitude,
          longitude: mapLongitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      />
    </Container>
  );
};

export default Map;
