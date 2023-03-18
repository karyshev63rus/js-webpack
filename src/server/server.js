import express from 'express';
import ReactDom from 'react-dom/server';
import { App } from '../shared/App';

const app = express();

app.get('/', (req, res) => {
    res.send(ReactDom.renderToString(App()));
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
