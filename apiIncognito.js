const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--incognito', // enable incognito mode
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage'
    ],
    ignoreHTTPSErrors: true
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    request.continue();
  });
  
  // Set up the POST request data
  const postData = "nickname=Shivam+singh&username=Shivamsingh543212%40gmail.com&upwd=Shivam0000%40&upwd2=Shivam0000%40&oid=2284"

  // Send the POST request
  const response = await page.goto('https://pro.gfd45g.one/index/login/register.html', {
    method: 'POST',
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
    rejectUnauthorized: false,
    postData: JSON.stringify(postData)
  });
  
  // Get the response body
  const responseBody = await response.text();
  console.log(responseBody);
  
  // Close the browser instance
  await browser.close();
})();
