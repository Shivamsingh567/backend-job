// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey("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")

let msg = {
  to: 'shivamsingh@yopmaail.com', // Change to your recipient
  from: 'shivamsingh81699@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'testing',
  html: 'checking',
}
sgMail.send(msg)
.then((data) => {
    console.log('Email sent',data)
})
.catch((error) => {
    console.error("11111111111111111111111111111111111", error)
})