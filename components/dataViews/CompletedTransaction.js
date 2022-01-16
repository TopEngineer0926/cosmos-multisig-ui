import React from "react";

import StackableContainer from "../layout/StackableContainer";
import HashView from "./HashView";
import Button from "../inputs/Button";

const CompletedTransaction = ({ transactionHash }) => (
  <StackableContainer lessPadding lessMargin>
    <StackableContainer lessPadding lessMargin lessRadius>
      <div className="confirmation">
        <svg viewBox="0 0 77 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 30L26 51L72 5" stroke="white" strokeWidth="12" />
        </svg>
        <p>This transaction has been broadcast.</p>
      </div>
    </StackableContainer>
    <StackableContainer lessPadding lessMargin lessRadius>
      <label>Transaction Hash</label>
      <HashView hash={transactionHash} />
    </StackableContainer>
    {process.env.NEXT_PUBLIC_CHAIN_ID === "cosmoshub-4" && (
      <Button
        href={`https://www.mintscan.io/cosmos/txs/${transactionHash}`}
        label=" View on Mintscan"
      ></Button>
    )}
    <style jsx>{`
      .confirmation {
        display: flex;
        justify-content: center;
      }
      label {
        font-size: 12px;
        font-style: italic;
        margin-bottom: 0.5em;
      }
      .confirmation svg {
        height: 0.8em;
        margin-right: 0.5em;
      }
    `}</style>
  </StackableContainer>
);

export default CompletedTransaction;
