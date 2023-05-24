import React from 'react';

const Dashboard = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="item-container">
          <img src={item.image} alt="Thumbnail" className="thumbnail" />
          <div className="details">
            <h3>{item.title}</h3>
            <p>Unique Plays: {item.unique_plays}</p>
            <p>Total Plays: {item.total_plays}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${item.completion_rate}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;