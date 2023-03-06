const axios = require('axios');
const puppeteer = require('puppeteer-core');
const http = require('http');
const https = require('https');
const fs = require('fs');

const agent = new https.Agent({
    rejectUnauthorized: false
  });
(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--incognito'],
    executablePath: '/usr/bin/google-chrome',
    defaultViewport: { width: 1280, height: 800 },
  });
  const page = await browser.newPage();
  await page.goto('about:blank');

  const axiosConfig = {
    headers: {
        "authority":"pro.gfd45g.one",
        "accept":"*/*",
        "accept-language":"en-IN,en;q=0.9",
        "content-type":"application/x-www-form-urlencoded; charset=UTF-8",
        "cookie":"PHPSESSID=019uk5apgiogr19fqp9c729aq7; think_var=en-in",
        "dnt":1,
        "origin":"https://pro.gfd45g.one",
        "referer":"https://pro.gfd45g.one/index/login/register.html",
        "sec-fetch-dest":"",
        "sec-fetch-mode":"cors",
        "sec-fetch-site":"same-origin",
        "user-agent":"Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "x-requested-with":"XMLHttpRequest"
    },
    httpsAgent: new https.Agent({ keepAlive: true,  rejectUnauthorized: false }),
    httpAgent: new http.Agent({ keepAlive: true,  rejectUnauthorized: false })
  };
//   const data = "nickname=Shivam+singh&username=Shivamsingh543212%40gmail.com&upwd=Shivam0000%40&upwd2=Shivam0000%40&oid=2284"
const outputFilePath = '/home/shivamsingh/Desktop/puc/backend-job/output1.json';
const stream = fs.createWriteStream(outputFilePath, { flags: 'a' });
const data = "nickname=Shivam+singh&username=Shivamsingh543212%40gmail.com&upwd=Shivam0000%40&upwd2=Shivam0000%40&oid="
  try {
    for(let i = 1000; i < 10000 ; i++) {
        try {
            console.log("No of time", i)
            let postData = `${data}` + i
            console.log(`postData for ${i} `,postData)
            const response = await axios.post('https://pro.gfd45g.one/index/login/register.html',postData, axiosConfig);
            response.data.body = postData
            console.log('response',response.data);
            stream.write(JSON.stringify(response.data) + '\n');
        } catch(error) {
            console.error(error)
        }
    } 
    stream.end();
  } catch (error) {
    console.error(error);
  }
  await browser.close();
})();