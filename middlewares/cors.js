const allowedCors = [
  'http://mesto.nikz.nomoredomains.rocks',
  'http://mesto.nikz.nomoredomains.rocks',
  'localhost:3000',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-contol-request-headers'];

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }

  if (method === 'OPTIONS') {
    res.header('Acces-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Acces-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  next();
};
