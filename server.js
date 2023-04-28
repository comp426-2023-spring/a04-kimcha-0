import { rps, rpsls } from "../a03-kimcha-0/lib/rpsls.js";
import minimist from 'minimist';
import express from 'express';


const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.listen(port, () => console.log('Listening on port ${port}'));

