const performanceData = {
    energyOutput: 12345,
    capacityFactor: 85.3,
    financialResult: 1000000,
  };
  
  export const getPerformanceData = () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(performanceData);
      }, 1000);
    });
  };
  