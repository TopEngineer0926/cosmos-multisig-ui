# Cosmoshub Legacy Multisig

### 🚧🚧🚧🚧🚧 UNDER CONSTRUCTION 🚧🚧🚧🚧🚧🚧

## Reason for Being

This app allows for legacy multisig users to create, sign and broadcast transactions on the stargate enabled cosmos hub chain. It's built with Cosmjs, Next.js, FaunaDB and Netlify.

[The app can be tested out here](https://cosmos-legacy-multisig.netlify.app/). (_*Note:*_ Only the UI and datastore are functional, waiting on some Cosmjs updates to handle multisig creation and signing)

## Dev Setup

You'll need a [FaunaDB](https://dashboard.fauna.com/) account and a Graphql database setup using the `db-schema.graphql` in this repo. Once you have that, create a secret key using the FaunaDB dashboard for your database, and set it as the environment variable `FAUNADB_SECRET`, in a `.env` file in the root of this repo.

Clone the repo, then run:

```
// with node v12.5.0 or later
npm install
npm run dev
```

Since this app uses Netlify based Lambda functions to interact with FaunaDB, when run locally it uses a proxy server locally (housed in `server.js`) to emulate Netlify's function endpoints.
