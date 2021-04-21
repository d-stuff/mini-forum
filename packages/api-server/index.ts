import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';

const application = express();

application.use(morgan('combined'));
application.use(cors());
application.use(bodyParser.json());

export const app = application;
