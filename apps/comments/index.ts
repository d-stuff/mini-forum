import {app} from 'api-server';
import commentsRouter from './routes';
import {connect} from 'forum-db';

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/comments')

app.use(commentsRouter)

app.listen(process.env.PORT || 4002, () => console.log('Comments app is running!'))
