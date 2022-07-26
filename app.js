import express from 'express';
import config from './config/config.js';
import router from './router/index.js';
import db from './mongodb/mongo.js';

const app = express();

app.all('*', (req, res, next) => {
  const { origin, Origin, referer, Referer } = req.headers;
  const allowOrigin = origin || Origin || referer || Referer || '*';
  res.header("Access-Control-Allow-Origin", allowOrigin);
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", true); //可以带cookies
  res.header("X-Powered-By", 'Express');
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.static('./upload'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


router(app);

app.listen(config.server.PORT, () => {
  console.log(`服务器启动成功，端口${config.server.PORT}`);
})