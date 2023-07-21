# Website for pet owners - with universal petID

This will spins up a dapp that is 

-   ✅ Built with the popular [React JS](https://react.dev/) library
-   ✅ VC Gated with a [Polygon ID KYCAgeCredential](https://oceans404.notion.site/How-to-get-a-KYCAgeCredential-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)
-   ✅ Fully connected with to all EVM chains including Polygon zkEVM Testnet and Polygon Mumbai Testnet [RainbowKit Wallet](https://www.rainbowkit.com/)
-   ✅ Beautifully styled with configurable components and icons from the [Chakra UI](https://chakra-ui.com/docs/components) library
-   ✅ Ready to interact with any smart contract thanks to working read and write examples from a Polygon zkEVM Testnet demo smart contract with [wagmi hooks](https://wagmi.sh/)


Love or hate something about this template? Let me know by [tweeting your feedback](twitter.com/akshayynft)

## Getting started with the template

Node requirement: **node v20.2.0**

Here's how to check your node version. 

```bash
node -v
```

If you're not running this version, you can switch your version with [nvm](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)

#### Setup

0. Visit the template repo https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main and click "Use this template" to create a new repo

1. Get a KYCAgeCredential Verifiable Credential - [follow instructions here](https://oceans404.notion.site/How-to-get-a-KYCAgeCredential-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)

2. Follow server setup instructions

https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main/server

3. Follow frontend setup instructions

https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/tree/main/frontend

## Default localhosts

- Frontend: localhost:3000
- Server: localhost:8080

## Here's the fullstack vc gated dapp this template spins up

Welcome page: In order to see the dapp, you need to prove your access rights. Click the "Prove access rights" button

<img width="1135" alt="Screenshot 2023-06-23 at 10 51 19 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/65c486ea-16f5-4ad7-9da5-97492bc83b7e">

A modal with a QR code appears. Scan this QR code with your Polygon ID mobile app. Note: you must hold a KYCAgeCredential with a birthday before this year. [Here's how to get the KYCAgeCredential VC](https://oceans404.notion.site/How-to-get-a-Verifiable-Credential-f3d34e7c98ec4147b6b2fae79066c4f6?pvs=4)

<img width="1134" alt="Screenshot 2023-06-23 at 10 51 30 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/c570c4c6-c549-4dea-9f4b-611bb54bbe78">

If you successfully complete age verification, you'll see a success message, then be redirected to the dapp.

<img width="1133" alt="Screenshot 2023-06-23 at 10 51 57 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/f3d12060-d17e-4c55-b4da-43c6fe13c7eb">

This is the Dapp page that you see once you've proved access rights. It's set up with a RainbowKit wallet connector and has read and write to smart contract examples.

<img width="1134" alt="Screenshot 2023-06-23 at 10 52 19 AM" src="https://github.com/oceans404/fullstack-polygon-id-vc-gated-dapp/assets/91382964/7e89b2b8-fb78-42df-9bc1-5938198af3a8">
