import { rps, rpsls } from "../a03-kimcha-0/lib/rpsls.js";

let express = require('express');

let app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening on port ${port}'));

