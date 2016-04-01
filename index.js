var spawn = require('child_process').spawn;

function hasUpstart (then) {
  if (!process.platform.match(/(linux|freebsd|sunos)/)) return process.nextTick(function () {
    then('not compatible')
  });

  var s = spawn('initctl', ['--version'], {stdio: 'pipe'})

  var output;
  s.stdout.on('data', function (data) {
     output += data.toString().replace(/\s*$/, '');
  })

  s.on('close', function (code) {
     if (code===0 && output.match(/upstart/))
       return then (undefined, 'initctl') // to improve later with a which call
     then('not found')
  })

  s.on('error', function () {})
}

module.exports = hasUpstart;
