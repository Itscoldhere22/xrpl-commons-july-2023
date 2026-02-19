import { getClient } from "./xrpl-client"

const client = getClient();

const main = async () => {
  await client.connect();

  console.log("It works!");

  await client.disconnect();
}

main()
