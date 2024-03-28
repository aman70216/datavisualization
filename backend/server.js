const express = require('express');
const db = require('./db');
const cors = require('cors');
const WebSocket = require('ws');
const dashboardRoutes = require('./Routes/dashboardRoutes');

const app = express();
const port = 3001;
const wss = new WebSocket.Server({ port: 3002 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('connected');
});

app.use(cors());
app.use('/dashboard', dashboardRoutes);
const PORT = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
