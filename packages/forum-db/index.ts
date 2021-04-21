import * as mongoose from 'mongoose';

export function connect(mongoUri) {
	mongoose.connect(mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	})
		.then(() => console.log('MONGODB is connected'))
		.catch(() => {
			console.log('MONGODB is not connected');
			process.exit(1);
		});
}
