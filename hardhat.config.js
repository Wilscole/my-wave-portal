require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'placeholderurl', //make sure to add back url and accounts 
      accounts: 'placeholderaccount', //DO NOT POST URL OR ACCOUNT ANYWHERE...ESPECIALLY GIT!!!!!!
    },
  },
};
