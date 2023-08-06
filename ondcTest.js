const get_rating_categoriesPOST = function(body) {
    console.log("111111111111111111111111111",body)
    return new Promise(function(resolve, reject) {
      var examples = {};
      examples['application/json'] = {
    "message" : {
      "ack" : {
        "status" : "ACK"
      }
    },
    "error" : {
      "path" : "path",
      "code" : "code",
      "type" : "CONTEXT-ERROR",
      "message" : "message"
    }
  };
  examples['data'] = {
    "data":['testing']
  }
      if (Object.keys(examples).length > 0) {
        console.log("tttttttttttttttttttttttttttttttttttttttt" ,examples[Object.keys(examples)[1]])
        console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW" ,examples[Object.keys(examples)[0]])
        resolve(examples[Object.keys(examples)[0]]);
      } else {
        resolve();
      }
    });
}

let testing  = {
    "abc":0
}

get_rating_categoriesPOST(testing)
