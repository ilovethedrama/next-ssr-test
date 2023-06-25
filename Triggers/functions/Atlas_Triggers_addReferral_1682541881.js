exports = function (changeEvent) {
  const fullDocument = changeEvent.fullDocument;
  const message = `Hi team, a referral was created by ${fullDocument.title} ${fullDocument.firstName} ${fullDocument.lastName}, please follow up via email with ${fullDocument.title} ${fullDocument.lastName} to progress the referral request`;
  const twillio = context.services.get('SMS');
  return twilio.send({
    to: process.env.TO_PHONE_NUMBER,
    from: process.env.FROM_PHONE_NUMBER,
    body: message,
  });
};
