const express = require('express');
const serveIndex = require('serve-index')


const app = express();

app.use(express.static('static'))
app.use(serveIndex('static', {'icons': true}))


app.get('/headers', (req, res) => {
  res.set('Content-Type','application/json')
  res.send(JSON.stringify(req.headers, null, 2))
});

app.get('/in-iframe', (req, res) => {
  res.set('Content-Type', 'text/html')
  let content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iframe</title>
    <style>
      iframe {
        width: 100%;
        height: 100%;
      }
    </style>
</head>
<body>
    <iframe src="${req.query.url}"></iframe>
</body>
</html>
  `
  res.send(content)
})

app.listen(3000, () => {
  console.log('server started');
});