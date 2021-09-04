const config = require('./config.js');

function parseLine(str) {
  let m;
  while ((m = config.CONSUL_METRIC_REGEX.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === config.CONSUL_METRIC_REGEX.lastIndex) {
      config.CONSUL_METRIC_REGEX.lastIndex++;
    }
    let service = {
      id: m.groups.id,
      status: m.groups.status
    }
    return service;
  }
}

module.exports={
  parse : function (logs) {
  let services = [];
  var arr = logs.split("\n");
  console.log(arr.length)
  for (var i = 0; i < arr.length; i++) {
    let service = parseLine(arr[i]);
    if (service)
      services.push(service);
  }
  return services;
}
}

