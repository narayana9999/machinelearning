var express = require('express');
var app = express();

app.get('/clear_cookie_foo', function(req, res){
    res.clearCookie('foo');
    res.send('cookie foo cleared');
});

app.listen(3000);