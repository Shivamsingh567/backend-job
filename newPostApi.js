'use strict'
const axios = require("axios");

async function xyz (){
    var dataToSend = "nickname=Shivam+singh&username=Shivamsingh543212%40gmail.com&upwd=Shivam0000%40&upwd2=Shivam0000%40&oid=3"

    var reqHeaders = {
     "accept-language":"en-IN,en;q=0.9",
     "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
     "cookie":"PHPSESSID=019uk5apgiogr19fqp9c729aq7; think_var=en-in",
     "dnt":1,
     "origin":"https://pro.gfd45g.one",
     "referer":"https://pro.gfd45g.one/index/login/register.html",
     "sec-fetch-dest":"",
     "sec-fetch-mode":"*",
     "sec-fetch-site":"same-origin",
     "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1x-requested-with:XMLHttpRequest"
    };
    try{
        const result = await axios.post(
            "https://pro.gfd45g.one/index/login/register.html",
            dataToSend,
            {
              headers: reqHeaders,
            }
          );
        console.log('paytm payment result  response' , result)
    }catch(e){
        console.log("111111111111111111111111111111111111111111",e);
    }
}
xyz()