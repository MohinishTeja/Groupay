/*const {
    Networks,
    Server,
    TransactionBuilder,
    Operation,
    Keypair,
    Asset
  } = require("stellar-sdk");
  const { justiceleague,avengers } = require("./accounts");
  
  const server = new Server("https://horizon-testnet.stellar.org");
  
  const justoave = async () => {
    const txOptions = {
      fee: await server.fetchBaseFee()+500,
      networkPassphrase: Networks.TESTNET
    };
  
    const justiceaccount = await server.loadAccount(justiceleague.publickey);
  
    const paymentTx = new TransactionBuilder(justiceaccount, txOptions)
      .addOperation(
        Operation.payment({
          amount: "1",
          asset: Asset.native(),
          destination: avengers.publickey
        })
      )
      .setTimeout(0)
      .build();
  
    paymentTx.sign(Keypair.fromSecret(justiceleague.secret));
    paymentTx.sign(Keypair.fromSecret(avengers.secret));
  
    await server.submitTransaction(paymentTx);
  };

 justoave()
    .then(() => {
      console.log("ok");
      console.log(e);
    })
    .catch(e => {
      console.log(e);
    });


*/

    const {
      Networks,
      Server,
      TransactionBuilder,
      Operation,
      Keypair,
      Asset
    } = require("stellar-sdk");
    const { spiderman,batman,wonderwoman } = require("./account");
    
    const server = new Server("https://horizon-testnet.stellar.org");
    
    const alicePaymentToBob = async () => {
      const txOptions = {
        fee: await server.fetchBaseFee()+500,
        networkPassphrase: Networks.TESTNET
      };
    
      const aliceAccount = await server.loadAccount(spiderman.publickey);
    
      const paymentTx = new TransactionBuilder(aliceAccount, txOptions)
        .addOperation(
          Operation.payment({
            amount: "1",
            asset: Asset.native(),
            destination: batman.publickey
          })
        )
        .setTimeout(0)
        .build();
    
      paymentTx.sign(Keypair.fromSecret(spiderman.secret));
      paymentTx.sign(Keypair.fromSecret(batman.secret));
      paymentTx.sign(Keypair.fromSecret(wonderwoman.secret));
    
      await server.submitTransaction(paymentTx);
    };
    
    alicePaymentToBob()
      .then(() => {
        console.log("Transaction successfull");
      })
      .catch(e => {
        console.log(e);
      });