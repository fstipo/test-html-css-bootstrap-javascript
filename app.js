const getTodos = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todoss/20'
  );
  if (response.status !== 200) {
    throw new Error("⛔ Can't fetch the data");
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log('resolved:', data))
  .catch((err) => console.log('rejected:', err.message));
