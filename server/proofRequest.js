const { KYCAgeCredential } = require("./vcHelpers/KYCAgeCredential");

const humanReadableAuthReason = "Must be born before today and this time and be the owner of a pet";

const currentDate = new Date();
const currentDateTime = currentDate.toISOString();

const credentialSubject = {
  birthday: {
    $lt: currentDateTime,
  },
  isOwnerOfPet: true,
};

const proofRequest = KYCAgeCredential(credentialSubject);

module.exports = {
  humanReadableAuthReason,
  proofRequest,
};
