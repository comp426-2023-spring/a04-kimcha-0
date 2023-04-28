#!/usr/bin/env node
import { rps, rpsls } from "../a03-kimcha-0/lib/rpsls.js";
import minimist from 'minimist';
import express from 'express';


const args = minimist(process.argv.slice(2));
const port = args.port || 5000;
const app = express();

app.use(express.urelencoded({extended: true}));
app.use(express.json());
app.listen(port, () => console.log('Listening on port ${port}'));


//endpoints
app.get('/app/', (req, res) => {
  res.status(200);
  res.send("200 OK");
});

app.get('/app/rps/', (req, res) => {
  res.status(200);
  res.send(rps());
});

app.get('/app/rpsls/', (req, res) => {
  res.status(200);
  res.send(rpsls());
});

app.get('/app/rps/play/', (req, res) => {
  res.status(200);
  res.send(rps(req.query.shot));
});

app.get('/app/rps/play/', (req, res) => {
  res.status(200);
  res.send(rps(req.body.shot));
});

app.get('/app/rpsls/play/', (req, res) => {
  res.status(200);
  res.send(rpsls(req.query.shot));
});

