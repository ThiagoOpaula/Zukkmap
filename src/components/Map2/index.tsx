import React from 'react';

import { Container, Maps2 } from './styles';

interface MapProps2 {
  // handleMapSetLocation: (latitude: number, longitude: number) => void;
  longitudeValue: number;
  latitudeValue: number;
}

const Map2: React.FC<MapProps2> = ({
  longitudeValue,
  latitudeValue,
}: MapProps2) => {
  const mapConfig = {
    latitude: latitudeValue,
    longitude: longitudeValue,
    latitudeDelta: 0.008,
    longitudeDelta: 0.008,
  };

  return (
    <Container>
      <Maps2 initialRegion={mapConfig} />
    </Container>
  );
};

export default Map2;
