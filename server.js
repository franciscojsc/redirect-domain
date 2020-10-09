const express = require('express');
const server = express();

const port = process.env.PORT || 3000;
const newHost = process.env.NEW_HOST || 'https://franciscochaves.com.br';

/*
  https://blog.franciscochaves.com/2018/01/instale-o-java-no-xubuntu
  ↪
  https://franciscochaves.com.br/blog/instale-o-java-no-xubuntu
*/

server.get('*', (req, res) => {
  const { originalUrl } = req;
  if (originalUrl === '/') {
    res.set('location', `${newHost}`);
  } else {
    const newUrl = originalUrl
      .slice(9, originalUrl.length)
      .replace('.html', '');
    res.set('location', `${newHost}/blog/${newUrl}`);
  }
  res.status(301).send();
});

server.listen(port, () => {
  console.log('Running server');
});
