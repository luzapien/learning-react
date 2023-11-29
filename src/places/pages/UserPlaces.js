import React from 'react';
import { useParams } from 'react-router-dom'
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: '7 colors Mountain',
    description: 'One of the 10 wonders on the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rainbow_Mountain_Peru.jpg/800px-Rainbow_Mountain_Peru.jpg',
    address: 'Cerro Siete Colores, 23650, Perú',
    location: {
      lat: -18.0722012,
      lng:-70.650022
    },
    creator:'u1'
  },
  {
    id: 'p2',
    title: '7 colors Mountain',
    description: 'One of the 10 wonders on the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rainbow_Mountain_Peru.jpg/800px-Rainbow_Mountain_Peru.jpg',
    address: 'Cerro Siete Colores, 23650, Perú',
    location: {
      lat: -18.0722012,
      lng:-70.650022
    },
    creator:'u2'
  },
  {
    id: 'p3',
    title: '7 colors Mountain',
    description: 'One of the 10 wonders on the world',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rainbow_Mountain_Peru.jpg/800px-Rainbow_Mountain_Peru.jpg',
    address: 'Cerro Siete Colores, 23650, Perú',
    location: {
      lat: -18.0722012,
      lng:-70.650022
    },
    creator:'u3'
  }

];

const UserPlaces = props => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />
};

export default UserPlaces
