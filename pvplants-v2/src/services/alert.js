const alerts = [
    {
      title: 'Alert 1',
      description: 'Anomaly detected in Plant 1',
    },
    {
      title: 'Alert 2',
      description: 'Anomaly detected in Plant 2',
    },
    {
      title: 'Alert 3',
      description: 'Anomaly detected in Plant 3',
    },
  ];
  
  export const getAlerts = () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(alerts);
      }, 1000);
    });
  };
  
  