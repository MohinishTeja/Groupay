const {Server, Networks, TransactionBuilder,Operation,Keypair}=require("stellar-sdk");
const{spiderman,batman,wonderwoman}=require("./account");

const server=new Server("https://horizon-testnet.stellar.org");

const justiceset = async()=>{
    const extrasigner = {
        signer:{
            ed25519PublicKey: wonderwoman.publickey,
            weight:1
        }
    };



    const thresholds = {

        masterWeight:2,
        lowThreshold:2,
        medThreshold:3,
        highThreshold:3
    };

    const txOptions ={
        fee:await server.fetchBaseFee(),
        networkPassphrase:Networks.TESTNET
    };


    const justiceaccount = await server.loadAccount(spiderman.publickey);

    const multisigTx= new TransactionBuilder(justiceaccount,txOptions)
    .addOperation(Operation.setOptions(thresholds))
    .addOperation(Operation.setOptions(extrasigner))
    .setTimeout(0)
    .build();
    


    multisigTx.sign( Keypair.fromSecret(spiderman.secret));

    await server.submitTransaction(multisigTx);


};


justiceset()
.then(()=>{
    console.log("Ok");
}).catch(e=>{
    console.log(e);
});
