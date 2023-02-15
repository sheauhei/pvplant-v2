const tasks = [
    {
      title: 'Task 1',
      description: 'Perform maintenance on Plant 1 inverter',
    },
    {
      title: 'Task 2',
      description: 'Replace faulty module in Plant 2',
    },
    {
      title: 'Task 3',
      description: 'Perform cleaning on Plant 3 modules',
    },
  ];
  
  export const getOAndMTasks = () => {
    // Simulate an API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(tasks);
      }, 1000);
    });
  };
  