import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo = res.data;

  const id = todo.ID;
  const title = todo.Title;
  const finished = todo.finished;

  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished? ${finished}
  `);
});
