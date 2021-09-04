const fs = require('fs')
const config=require('./config.js')


module.exports={
    draw:function(umlFilePath, services){
        let uml=fs.readFileSync(umlFilePath, 'utf8');        
        console.debug("draw services: "+JSON.stringify(services));
        let serviceStatus=services.map(e=>config.CONSUML_SERVICE_STATUS_FUN(e)).join('\n');
        return uml.replace("@enduml", serviceStatus+" \n@enduml");
    }
   
}