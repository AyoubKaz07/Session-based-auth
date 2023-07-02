const express = require('express');
const Router = require('./routes/routes');
const session = require('./middleware/sessions')
const corsMiddleware = require('./middleware/cors')

const app = express();
 
app.use(express.json());

app.options('*', corsMiddleware);
app.use(corsMiddleware);

app.use(session)
app.use(Router);
app.listen(8080, () => console.log('server is running on port 8080'));