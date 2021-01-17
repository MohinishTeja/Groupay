# Groupay

## Inspiration
Bill payments among groups is always a tedious task. There are always some people in a group who tries to escape during payment of bill. Even if everyone are ready to pay the bill there might be problems of no change, forgetting wallet, different currency issues and so on. With GrouPay(Group-Pay) we are trying to address all these problems in both fun and real problem solving way.

This project is simliar to **Build a stablecoin based tipping service** 
Instead of just tipping, I have implemented Bill splitting using XLM and other assets as well.

## What it does
GrouPay is a Stellar based web application that can perform Bill splitting in three different ways.<br>
    **1) Equal Bill Splitting**<br>
    **2) Percentage Bill Splitting**<br>
    **3) Zero or hero**<br>

Each of these ways has their own purpose in a fun way. 
**Equal Bill splitting** simply splits the bill into equal amounts among all people in group
**Percentage Bill Splitting** splits the bill into random amounts to everyone such that everyone pays atleast some amount and unlucky ones get to pay High amounts.


For example, Percentage Bill splitting can generate A to pay 70% and B to pay 30%<br>
**Zero or Hero** is for the dared ones.<br>
Only one person in the group gets picked by the application to pay the entire Bill

All the bills once generated are reflected in the users dashboard and they need to pay these bills for sure.
This also solves the problem of Currency difference using Stellar Blockchain. User can pay in any Currency using his default XLM or any other currency using Stellar Assets offered by fellow issuers and distributors in the Stellar network.


GrouPay also functions like a traditional Joint accunt to transact a single account i.e., all people of the account must agree to make a transaction. Here in particular, everyone must approve the transaction by entering their Private key.


## How I built it
I have built this mainly using Stellar-SDK for Javascript and node JS for running all these scripts.
The entire frontend is built using HTML,CSS,JS and Firebase is used as database. Backend is implemented using JS.

 I have used tools like<br>
**1) Stellar Laboratory**<br>
**2)Albedo**<br>
Also for checking the Stellar network and verifying transactions I have used Stellar Expert block explorer.

## Challenges I ran into
Main challenge is to integrate the payments of Stellar network with my Web-App. I have tried to use direct SDK for this as well but couldn't figure it out in time. So, I have used Albedo for payment gateway with Stellar network.

Other problem is with the Joint account. I have decided to demonstrate this using **CMD** interface and started working on it. The transactions were initially successfull but gradually became slower to failure. I have searched for the reasons and couldn't figure out.Later, I have changed the transaction fee to be higher than the base amount and then transactions were getting approved.  If done using Stellar laboratory, base fee would automatically be adjusted to required amount to get transaction into ledger but with our basic fetchbaseprice() it couldn't bid more fee to enter into ledger. This might be beacuse of sudden surge in transactions among Stellar netowrk and its price increase in recent days.


## Accomplishments that I'm proud of
I am proud of enabling Cross border/currency payments for users. Initially, I have implemented only till bill payments using default XLM. But, looking at the power of cross border/currency payments I have included that feature for users. This way it solves the problem of inaccessibility to specific currency to users when they immediately need to transact with other currency.

## What I learned
I have learned a lot about Stellar Network. The fluidity and powerfulness in making global payments with Stellar tech is really amazing and exciting to look out for. I have learned how Blockchain can be used efficiently for payments by looking at Stellar. 
This is my first time playing with Stellar yet I have managed to finish the project because of the good documentation. It taught me a lot about Stellars functions and SDK instructions.

Thus, I have explored more about Stellar and finally made a cool and funny bill splitting web-app.

## What's next for GrouPay
Currently, GrouPay serves for limited currency like XLM,USD. Though the current UI is better than many other interfaces it still needs improvement. We can immediately make much more user friendly UI with more contrasting colours and smooth transitions across pages. 
We need to make it accessible for more currency and also revamp the database for users into much secure,decentralised and flexible network like IPFS which makes this app completely decentralized application(DApp)

