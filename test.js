
// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
const msg = {
  to: 'shivamsingh543212@gmail.com', // Change to your recipient
  from: 'ngeduwizer@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then((data) => {
    console.log("1111111111111111111111111111111111111",data)
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })