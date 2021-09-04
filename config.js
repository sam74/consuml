const status={"1":"#RED","0":"#Green"};

let config={};
// lambda expression to draw a component status with a color 
config.CONSUML_SERVICE_STATUS_FUN=e=>`[${e.id}] ${status[e.status]}`;
// regular expression to parse consul metrics 
config.CONSUL_METRIC_REGEX=/consul_health_service_status.*,service_id="(?<id>.*)",service_name.*,status="critical"} (?<status>\d)/gm;
// consul health check url
config.CONSUL_METRICS_URL = process.env.CONSUL_METRICS_URL;
// plantuml service url
config.PUML_SERVICE_URL = process.env.PUML_SERVICE_URL ;
// plantuml url path to create uml diagram (image)
config.PUML_FORM_SERVICE_URL = config.PUML_SERVICE_URL + "/form";
// webserver listen port
config.CONSUML_SERVICE_PORT=3000;
// webserver home path
config.CONSUML_SERVICE_HOME_PATH="/";
// webserver uml dir path
config.CONSUML_SERVICE_PUMLDIR_PATH="/UML";
// webserver uml 
config.CONSUML_SERVICE_SVG_PATH='/:umlfile/svg';
// uml where to store uml files
config.PUML_DIR = "uml/";
console.log("CONSUL_METRICS_URL: "+config.CONSUL_METRICS_URL);
console.log("PUML_SERVICE_URL: "+config.PUML_SERVICE_URL);

module.exports=config;
