import React from 'react';
import Dashboard from './Dashboard';

const Content = () => {
  const items = [
    {
      image: 'path/to/image1.jpg',
      title: 'Item 1',
      unique_plays: 10,
      total_plays: 20,
      completion_rate: 50,
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Item 2',
      unique_plays: 5,
      total_plays: 15,
      completion_rate: 75,
    },
  ];
//More data could be added here
  return (
    <div>
      <h1>Dashboard</h1>
      <Dashboard items={items} />
    </div>
  );
};

export default Content;