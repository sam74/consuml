const config=require('./config.js');
const parser = require('./parser.js');
const puller = require('./puller.js');
const drawer = require('./drawer.js');
const puml = require('./puml.js');

module.exports={
    form:function(umlfile, callback){
       
        puller.readUrl(config.CONSUL_METRICS_URL).then(data => {
            console.log(JSON.stringify(data.data))
            let logs = data.data;
            let services = parser.parse(logs);
            console.log(JSON.stringify(services));
        
            let uml = drawer.draw(config.PUML_DIR + umlfile, services);
            puml.form(config.PUML_FORM_SERVICE_URL, uml).catch(function (error) {
                 let svgURL=(config.PUML_SERVICE_URL + error.response.headers.location.replace("/uml/", "/svg/"));
                 console.log(svgURL);   
                 puml.svg(svgURL).then(svg=>{
                    console.log(svg.data) 
                    callback(svg.data)}).catch(e=>{ console.error(e);callback(e)});
              
                });
        }).catch(e=>{
            console.error(e);
            callback(e);
          });;
    }
}