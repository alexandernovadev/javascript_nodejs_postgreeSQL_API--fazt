import express, { json } from 'express'
import morgan from 'morgan'
import Projectroute from './routes/projects.routes';
import Taskroute from './routes/task.routes';


const app = express();
// Configura el modulo de express


// Middlewares 

app.use(morgan('dev'));
app.use(json());

// Routes

app.use('/api/projects', Projectroute);
app.use('/api/tasks', Taskroute);

export default app;

