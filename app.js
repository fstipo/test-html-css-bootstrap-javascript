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

console.log(1);
console.log(2);
getTodos()
  .then((data) => console.log('resolved:', data))
  .catch((err) => console.log('rejected:', err));
console.log(3);
console.log(4);
