import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import Geolocation from 'react-native-geolocation-service';

import { Container, Maps } from './styles';

interface MapProps {
  handleMapSetLocation: (latitude: number, longitude: number) => void;
}

const Map: React.FC<MapProps> = ({ handleMapSetLocation }: MapProps) => {
  const [loading, setLoading] = useState(false);

  const [coordinates, setCoordinates] = useState({
    latitude: -23.226179,
    longitude: -45.901178,
  });

  useEffect(() => {
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        setCoordinates(coords);
        setLoading(false);
        handleMapSetLocation(coordinates.latitude, coordinates.longitude);
      },
      error => {
        console.log(error.code, error.message);
      },
    );
  }, []);

  return (
    <Container>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Maps
          initialRegion={{
            latitude: coordinates.latitude,
            longitude: coordinates.longitude,
            latitudeDelta: 0.007,
            longitudeDelta: 0.007,
          }}
        />
      )}
    </Container>
  );
};

export default Map;
