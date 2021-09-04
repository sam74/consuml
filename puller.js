const fs = require('fs');
var axios = require('axios');
module.exports =
{
    readFile: function (filePath) {
        var logs = fs.readFileSync(filePath, 'utf8')
        return logs;
    },
    readUrl:function(url){
        var config = {
            method: 'GET',
            url: url,
            headers: { 
              'Content-Type': 'text/plain'
            }          
          };
          
         return  axios(config);
    }

}
