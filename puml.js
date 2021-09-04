var axios = require('axios');
var qs = require('qs');
 
module.exports={
  form:function(url, uml){
    var data = qs.stringify({
      'text': uml 
    });
    var config = {
      method: 'post',
      maxRedirects:0,
      url: url,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
   return  axios(config);
    
  },
  svg:function(url){   
    var config = {
      method: 'GET',
      maxRedirects:0,
      url: url     
    };
    
   return  axios(config);
    
  }

}

