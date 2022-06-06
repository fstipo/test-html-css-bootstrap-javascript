const fetchData = (callback) => {
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
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/5');
  //   request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/5');
  //   request.open('GET', './todos.json');
  request.send();
};

fetchData((err, data) => {
  console.log('🚀 is fired');
  if (data) {
    console.log(data);
  } else if (err) {
    console.log(err);
  }
});
