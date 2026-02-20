import { getClient } from "../xrpl-client";
import { Payment } from "xrpl";
import { TxnOptions } from "src/models";

const client = getClient();

type PaymentProps = Omit<Payment, "TransactionType" | "Account">

export const sendPayment = async (props: PaymentProps, { wallet }: TxnOptions) => {
    // Prepare payment JSON
    const payment: Payment = {
        ...props,
        TransactionType: "Payment",
        Account: wallet.address, 
    }

    const prepared = await client.autofill(payment);
    // Sign
    const signed = wallet.sign(prepared);

    // Submit to XRPL and wait for validation
    const response = await client.submitAndWait(signed.tx_blob);
    console.log(response);
    
    return response;
}