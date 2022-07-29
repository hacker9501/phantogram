import React from 'react';
import { useNavigation } from '@react-navigation/native';

//Rutas protegidas
const ProtectedRoute = ({ children, token }) => {
  const navigation  = useNavigation();

  if (!token) {
    return <Navigate to="/home" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
