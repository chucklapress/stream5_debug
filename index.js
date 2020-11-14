const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'sohini@dabblelab.com',
  from: 'chuck_l@att.net', // Use the email address or domain you verified above
  subject: 'Debug the code for episode 5 stream to mail this',
  text: 'Utilizing code from npm link I had forwarded to test \nfunctionality and send this email',
  html: '<strong>Utilizing code from npm link I had forwarded to test functionality and send this email</strong>',
};
//ES6
/*sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });*/
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();
