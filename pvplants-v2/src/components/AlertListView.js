import React, { useState, useEffect } from 'react';
import { List } from 'antd';
import { getAlerts } from '../services/alert';

const AlertListView = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getAlerts().then((data) => {
      setAlerts(data);
    });
  }, []);

  return (
    <div>
      <h1>Alerts</h1>
      <List
        itemLayout="horizontal"
        dataSource={alerts}
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

export default AlertListView;
