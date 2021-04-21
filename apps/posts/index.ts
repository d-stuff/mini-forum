import {app} from 'api-server';
import {connect} from 'forum-db';
connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/posts')

app.listen(process.env.PORT || 4001, () => console.log('Posts app is running!'))
