"use strict";
const App_1 = require("./App");
function normalizePort(val) {
    let port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port))
        return val;
    else if (port >= 0)
        return port;
    else
        return false;
}
const port = normalizePort(process.env.PORT || 3000);
App_1.default.listen(port, function () {
    console.log('Example app listening on port 5000!');
});
