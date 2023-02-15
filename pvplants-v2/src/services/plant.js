const plants = [
    {
      title: 'Plant 1',
      description: '50 MW plant in California',
    },
    {
      title: 'Plant 2',
      description: '100 MW plant in Texas',
    },
    {
      title: 'Plant 3',
      description: '75 MW plant in Arizona',
    },
  ];
  
  export const getPlants = () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(plants);
      }, 1000);
    });
  };
  