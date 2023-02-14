import React from 'react';
import { Routes } from 'react-router-dom';

const MyRoute = ({ path, component }) => {
  return (
    <Routes path={path} component={component} />
  );
};

export default MyRoute;