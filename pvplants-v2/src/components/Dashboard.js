import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'antd';
import { getPerformanceData } from '../services/performance';

const Dashboard = () => {
  const [performanceData, setPerformanceData] = useState({});

  useEffect(() => {
    getPerformanceData().then((data) => {
      setPerformanceData(data);
    });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <Card>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Energy Output (kWh)">
              <div>{performanceData.energyOutput}</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Capacity Factor">
              <div>{performanceData.capacityFactor}%</div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Financial Result (USD)">
              <div>{performanceData.financialResult}</div>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Dashboard;

