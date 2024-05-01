import 'dotenv/config'
import express from 'express';

const app = express();

const port  = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//get a list of 5 jokes
//NOTE: Follow Versioning with API always
app.get('/api/jokes', (req, res) => { 
  const jokes = [
    {
      id: 1,
      title: 'A Joke',
      content: 'This is a Joke'
    },
    {
      id: 2,
      title: 'A Joke',
      content: 'This is a Joke'
    },
    {
      id: 3,
      title: 'A Joke',
      content: 'This is a Joke'
    },
    {
      id: 4,
      title: 'A Joke',
      content: 'This is a Joke'
    }
  ]

  res.send(jokes);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

