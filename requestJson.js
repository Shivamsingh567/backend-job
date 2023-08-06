 let deafult = { 
  "_id": { "$oid": "64c507728ba9b35c86c5e8d1" },
  "path": "/search",
  "reqBody": {
    "context": {
      "domain": "nic2004:52110",
      "country": "IND",
      "city": "std:080",
      "action": "search",
      "core_version": "1.1.0",
      "bap_id": "buyer-app.ondc.org",
      "bap_uri": "https://buyer-app.ondc.org/protocol/v1",
      "transaction_id": "fbad3354-7cd9-438e-86ba-3717c50f8214",
      "message_id": "27f68cfb-c2da-4d29-8577-50a198011bef",
      "timestamp": "2023-07-28T10:40:11.325Z",
      "ttl": "PT30S"
    },
    "message": {
      "intent": {
        "item": { "descriptor": { "name": "GoodDay by Dm" } },
        "fulfillment": {
          "type": "Delivery",
          "end": { "location": { "gps": "12.9814010000001,77.6409810000001" } }
        },
        "payment": {
          "@ondc/org/buyer_app_finder_fee_type": "percent",
          "@ondc/org/buyer_app_finder_fee_amount": "3.0"
        }
      }
    }
  },
  "headers": {
    "x-gateway-authorization": "Signature keyId=\"nsdl.co.in|47|ed25519\",algorithm=\"ed25519\", created=\"1690540811\", expires=\"1691140811\", headers=\"(created) (expires) digest\", signature=\"mSKBTW24LX7kJZlIJ46YkNinBt7xm8eQrk7hmwQkYsjqNckAZOQwtkUuqWY7j4PYezVea6rowj8KD10B14hxCQ==\"",
    "content-type": "application/json",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImIyZGZmNzhhMGJkZDVhMDIyMTIwNjM0OTlkNzdlZjRkZWVkMWY2NWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTWFkaHVrYXIgUmVkZHkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFjSFR0ZDZoWkY3OTg1MDlWT1lqQmtvYzVUa21pYktITzlRNjJSeG1lWU9jeUJWNnpuYT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9vbmRjLXVpIiwiYXVkIjoib25kYy11aSIsImF1dGhfdGltZSI6MTY5MDU0MTI0OCwidXNlcl9pZCI6Ijd6V3I0T3NCOHZQUlE0RnB1ZHlhYzlXTVY3cjIiLCJzdWIiOiI3eldyNE9zQjh2UFJRNEZwdWR5YWM5V01WN3IyIiwiaWF0IjoxNjkwNTQxMjQ4LCJleHAiOjE2OTA1NDQ4NDgsImVtYWlsIjoibWFkaHVrYXJyZWRkeWJvZGE1MzhAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDA1MjUxNTA0NDQ3MDQwMzc3MDMiXSwiZW1haWwiOlsibWFkaHVrYXJyZWRkeWJvZGE1MzhAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.GP4-E8y-d8_HHQsfIMZgMGZBHgJlyW-VOjtqL0n97XKqlXRuheU9yd9cCsD3ncVktJCFARAhDGGxY3W9fZuxnhgJxpZlhyfN9GJRMzlYmQWhAuKUxNOeWN1onbrWtLsONKq4T9xrYvVVqg__tn5M4hx9jh69hb202uI_nBpmEQMYkeqMOz8dTdUh5mj6YssBMAp4nh5MPwGMRMWdDHjWFAmGEBXwnKDH62JFGXklrDoAWXe8h41mS1TZnG9pIGhByL2-7aovA7Y-qxklJqqZk5q9C3y4NDArDtnDdLUEESxp3q1Q_EQTC_D8hxi9D9tMNgZElBj23xYkM2c2pIoKsQ",
    "user-agent": "PostmanRuntime/7.32.3",
    "accept": "*/*",
    "cache-control": "no-cache",
    "postman-token": "2e6dd30d-4d57-4056-a8ed-c94828e9534d",
    "host": "localhost:5000",
    "accept-encoding": "gzip, deflate, br",
    "connection": "keep-alive",
    "content-length": "916"
  },
  "inTime": 1690634098408,
  "__v": 0
}

module.exports =  deafult