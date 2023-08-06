const { createAuthorizationHeader, isSignatureValid } = require("ondc-crypto-sdk-nodejs")

let  data =  require("./requestJson")



  async function check () {
// const isValid =   await isSignatureValid({
//     header: 'Signature keyId="nsdl.co.in|47|ed25519",algorithm="ed25519", created="1691239128", expires="1691839128", headers="(created) (expires) digest", signature="Nv7mgO9CNEQ006F8rOquwBMl7R+ftYhjCjGWuSwBAHnCl063S+dxXFXr1VlyWr6qqslBCRfDsPpiyh4PkmGPBA=="',
//     body: {
//         "context": {
//           "domain": "nic2004:52110",
//           "country": "IND",
//           "city": "std:080",
//           "action": "search",
//           "core_version": "1.1.0",
//           "bap_id": "buyer-app.ondc.org",
//           "bap_uri": "https://buyer-app.ondc.org/protocol/v1",
//           "transaction_id": "53916980-7575-4939-8abf-7bf0321cc5ae",
//           "message_id": "14614da8-a050-4465-a9f8-7d4fa894c079",
//           "timestamp": "2023-08-05T12:38:47.971Z",
//           "ttl": "PT30S"
//         },
//         "message": {
//           "intent": {
//             "item": {
//               "descriptor": {
//                 "name": "agarbatti"
//               }
//             },
//             "fulfillment": {
//               "type": "Delivery",
//               "end": {
//                 "location": {
//                   "gps": "30.729911,76.707877"
//                 }
//               }
//             },
//             "payment": {
//               "@ondc/org/buyer_app_finder_fee_type": "percent",
//               "@ondc/org/buyer_app_finder_fee_amount": "3.0"
//             }
//           }
//         }
//       },
//     publicKey: 'Fhjwaka1Za+ld+7Nms7S0C675r24mZoyWVn8JbYTjSs=',
// });

const isValid = await isSignatureValid({
    header : 'Signature keyId="olamoney-website-3000a.stg.corp.olacabs.com|643|ed25519",algorithm="ed25519",created="1691052624",expires="1691056224",headers="(created) (expires) digest",signature="rqHbCaGKtAbdkGNEW63TJvyVT2wvyoCQGJJmcTLnB+n5OEQ4KGSNdiMW5jCy4L4AEERckxjK9R8K+dEs8ZqxAQ=="',
    body :  {"context": {
        "transaction_id": "134e02e2-4600-47d0-bf15-3cbf8cce5adb",
        "country": "IND",
        "city": "*",
        "domain": "nic2004:52110",
        "action": "search",
        "message_id": "b9a21a7b-7386-45c2-8df7-5d7c26d9165f:c94929cd-8ed0-4576-85e1-65762ddd4713",
        "ttl": "P1M",
        "core_version": "1.1.0",
        "bap_uri": "https://dev.buyer.tenupstore.com/api/v1/search",
        "timestamp": "2023-07-27 06:54:21.750854896",
        "bap_id": "dev.buyer.tenupstore.com"
      },
      "message": {
        "intent": {
          "provider": {
            "descriptor": {
              "name": "h"
            }
          },
          "payment": {
            "@ondc/org/buyer_app_finder_fee_type": "percent",
            "@ondc/org/buyer_app_finder_fee_amount": "2"
          },
          "fulfillment": {
            "type": "Delivery",
            "end": {
              "location": {
                "gps": "22.9652,73.0469",
                "address": {
                  "area_code": "391421"
                }
              }
            }
          }
        }
      }},
    publicKey: 'sIulTp0ISk5Dc8tGqfuug6lDJ+k1nEFQw23SO72thC0=',
})
console.log("11111111111111111111111111111111111111",isValid)

}
  check()