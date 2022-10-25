let MVCryptoClubDonations = artifacts.require("MVCryptoClubDonations.sol");

console.log("testing");
let instance;

contract("MVCryptoClubDonations", accounts => {
    it ("Should deploy contract",  () => {
        return  MVCryptoClubDonations.deployed().then(inst => {
            instance = inst;
            assert(inst != undefined);
        });
          //  instance = inst;
         inst;
      //  })
    });
    it ("Should send donation",  () => {
        (async() =>  {

            let balance1_prev = await web3.eth.getBalance(accounts[1]);
            let balance2_prev = await web3.eth.getBalance(accounts[0]);
            const res = await instance.donate("Bob", {from: accounts[1], value: "1000000000000000000"});
            let balance1 = await web3.eth.getBalance(accounts[1]);
            let balance2 = await web3.eth.getBalance(accounts[0]);
            console.log(balance1 + " " + balance2);
            assert(balance1 > balance1_prev);
        })()
    })
    it ("Should record donation", () => {
        (async () => {
            const res = await instance.getDonations();
            console.log(res);
            assert(res.length && res[0].address == accounts[1]);
        })
    })
})