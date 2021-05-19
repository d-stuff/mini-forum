import {app} from 'api-server';
import {connect} from 'forum-db';
import postRouter from "./routes"

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/posts')

app.use(postRouter);

app.listen(4001, () => console.log('Posts app is running!'))
