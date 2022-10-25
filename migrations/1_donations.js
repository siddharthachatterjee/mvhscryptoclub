const MVCryptoClubDonations = artifacts.require("MVCryptoClubDonations.sol");

module.exports = function (deployer) {
  deployer.deploy(MVCryptoClubDonations);
};
