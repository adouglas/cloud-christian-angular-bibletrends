import App from './App'

function normalizePort(val: number|string): number|string|boolean {
  let port: number = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}

const port = normalizePort(process.env.PORT || 3000);

App.listen(port, function () {
    console.log('Example app listening on port 5000!');
});
