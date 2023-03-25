![koios-js](https://user-images.githubusercontent.com/82296005/194378368-6d2de904-8eec-48bf-a0d9-37118f299470.png)

# koios-js SDK for JavaScript for Node.js

## Overview
**Koios js** is js library which allow interacting with all information and parameters stored on the Cardano blockchain using [Koios REST API](https://api.koios.rest/)


## What is Koios js? 
**Koios javascript** is a library based on [Koios](https://www.koios.rest/) Elastic Query Layer for [Cardano Node](https://github.com/input-output-hk/cardano-node/) by [Cardano Community Guild Operators](https://github.com/cardano-community). <br>
**Koios** is best described as a Decentralized and Elastic RESTful query layer for exploring data on Cardano blockchain to consume within applications/wallets/explorers/etc. <p>
**Koios** is really useful for developers because resource and maintenance requirements for Cardano blockchain components (e.g. cardano-node, cardano-db-sync) are ever-growing. It also simplifies how to query complex information from the blockchain.

Installation
--------------
To run the SDK you need Node.js version 14 and higher. While you may find a way to run it directly in a browser, we don't actively support or provide troubleshooting assistance with this scenario. We recommend setting up your own Node.js backend. Exposing your API keys in a frontend application is almost always a bad idea.

The SDK is hosted on npmjs.com, so you can directly import it using your favorite package manager.
    
## Upgrade to the last Version

```
npm i @ht-moh/koios-js
```

```js
yarn add @ht-moh/koios-js
```
    
## Usage
    
```js
const API = new KoiosAPI({
  projectId: 'YOUR API KEY HERE', // key should start with the network ex: mainnet_myproject, guild_project, preview_myproject, preprod_myproject
  // For a list of all options see section below
});
```

### Options

- `projectId` - `string`, Koios project ID (required)
- `network` - `string`, Cardano network for given project ID. (optional, default value is derived from the `projectId` itself if possible). Possible values: `mainnet`, `testnet`, `preview`, `preprod`.
- `rateLimiter` - `boolean` or [`RateLimiterConfig`](https://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#L18=), whether to enable rate limiter that matches [Blockfrost API limits](https://docs.blockfrost.io/#section/Limits) (optional, default `true`). If you have your IP addresses white-listed you may want to disable it. You may also customize rate limiter by passing your own [config object](ttps://github.com/blockfrost/blockfrost-js/blob/master/src/utils/limiter.ts#11).
- `requestTimeout` - `number`, How long to wait for a request to complete, in milliseconds (optional, default `20000`)
- `retrySettings` - `RequiredRetryOptions`, customizations for retrying failed request
- `debug` - `boolean`, whether to enable debug logging. It is also possible to enable it by setting environment variable `DEBUG` to `true` (optional, default `false`).
- `customBackend` - `string`, option to set URL to a non-official backend (optional)
- `version` - `number`, version of the Koios API (optional, default `0`)

## Error handling

Koios Node.js SDK throws 2 types of errors, `KoiosServerError` and `KoiosClientError`. Each of these errors is extended from the built-in `Error` class, allowing you to properly catch it and handle it in your code.

### `KoiosServerError`

`KoiosServerError` is an error returned directly by Koios API. The error object's properties are matching [the same format as defined by Blockfrost API](<(https://docs.blockfrost.io/#section/Errors)>), with additional `url` field set to the URL the request was sent to and optional `body` field set to the original body of the error response in cases where the error was not returned by Koios Backend (eg. nginx).

#### Example

Koios API returns 404 Not Found for any resource that does not exist on chain at the moment, even when in theory, it could exist. For more detailed explanation check [Koios developer portal](https://www.blockfrost.dev/docs/support/cardano#querying-address-returns-404-not-found-but-my-address-is-valid).

```ts
// Example demonstrating catching BlockfrostServerError
try {
  const address = await API.addresses('totallyValidAddress');
} catch (error) {
  if (error instanceof KoiosServerError && error.status_code === 404) {
    // address was not used before, but most likely we don't want to throw an error
    console.log("Address is totally empty! But that's ok!");
  } else {
    // rethrow other errors
    throw error;
  }
}
```
## Features  
- Supported REST Services:
    - [x] Network
        - Chain Tip
        - Genesis Info
        - Historical Tokenomic Statistics
    - [] Epoch
        - Epoch Information
        - Epoch's Protocol Parameters
        - Epoch Blocks Protocol
    - [] Block
        - Block List
        - Block Information
        - Block Transactions
    - [] Transactions
        - Transaction Information
        - Transaction UTxOs
        - Transaction Metadata
        - Transaction Metadata Labels
        - Transaction Submission
        - Transaction Status (Block Confirmations)
    - [] Address
        - Address Information
        - Address Transactions
        - Transactions from Payment Credentials
        - Address Assets
    - [x] Account
        - Account List
        - Account Information
        - Account Information Cached
        - Account Rewards
        - Account Updates (History)
        - Account Addresses
        - Account Assets
        - Account History
    - [] Asset
        - Asset List
        - Asset Address List
        - Asset Information
        - Asset History
        - Asset Policy Information
        - Asset Summary
        - Asset Transaction History
    - [] Pool
        - Pool List
        - Pool Information
        - Stake Snapshot
        - Pool Delegators List
        - Pool Blocks
        - Pool Stake, Block and Reward History
        - Pool Updates (History)
        - Pool Relays
        - Pool Metadata
    - [x] Script
        - Native Script List
        - Plutus Script List
        - Script Redeemers
        - Datum Information
