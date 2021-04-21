import {app} from 'api-server';
import {connect} from 'forum-db';
connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/auth')

app.listen(process.env.PORT || 4000, () => console.log('Authentication app is running!'))
