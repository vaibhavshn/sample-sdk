import React, { useEffect } from 'react';

interface Props {}

const Client: React.FC<Props> = () => {
  useEffect(() => {
    console.log('hello from client app');
  }, []);

  return <div>Client locked and loaded!</div>;
};

export default Client;
