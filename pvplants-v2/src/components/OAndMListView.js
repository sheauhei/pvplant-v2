import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { getOAndMTasks } from '../services/oAndM';

const OAndMListView = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getOAndMTasks().then((data) => {
      setTasks(data);
    });
  }, []);

  return (
    <div>
      <h1>Operations & Maintenance Tasks</h1>
      <List
        itemLayout="horizontal"
        dataSource={tasks}
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

export default OAndMListView;
