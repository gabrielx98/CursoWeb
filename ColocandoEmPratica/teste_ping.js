var ping = require ("net-ping");
var session = ping.createSession ();

const target = "192.168.15.6"

session.pingHost (target, function (error, target) {
    if (error)
        console.log (target + ": off" /*+ error.toString ()*/);
    else
        console.log (target + ": Alive");
});