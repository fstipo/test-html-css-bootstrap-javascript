const fetchData = (resource, callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
      console.log(data);
    } else if (request.readyState === 4) {
      callback(`⛔ Can't fetch the data`, undefined);
    }
  });
  request.open('GET', resource);
  // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/5');
  //   request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/5');
  //   request.open('GET', './todos.json');
  request.send();
};

fetchData('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
  console.log('🚀');
  console.log(data);
  fetchData('https://jsonplaceholder.typicode.com/todos/2', (err, data) => {
    console.log('🚀🚀');
    console.log(data);
    fetchData('https://jsonplaceholder.typicode.com/todos/3', (err, data) => {
      console.log('🚀🚀🚀');
      console.log(data);
    });
  });
});
