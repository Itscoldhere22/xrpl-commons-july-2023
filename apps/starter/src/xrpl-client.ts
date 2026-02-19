// todo: write the client
import { Client } from 'xrpl'

const networks = {
    RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233/",
}

let client : Client;

// Function to get client
export const getClient = () => {
    // Instantiate client during first run of app
    if (!client)
        client = new Client(networks.RIPPLE_TESTNET);

    return client;
}