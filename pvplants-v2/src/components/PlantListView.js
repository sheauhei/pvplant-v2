import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { getPlants } from '../services/plant';

const PlantListView = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    getPlants().then((data) => {
      setPlants(data);
    });
  }, []);

  return (
    <div>
      <h1>Plants</h1>
      <List
        itemLayout="horizontal"
        dataSource={plants}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PlantListView;
