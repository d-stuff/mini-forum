import {app} from 'api-server';
import {connect} from 'forum-db';
import authRouter from './routes/auth'
import usersRouter from './routes/users'

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth')

app.use(authRouter);
app.use(usersRouter);
app.listen(process.env.PORT || 4000, () => console.log('Authentication app is running!'))
