import React from "react";
import WalletItem from "./WalletItem";
import { AiFillCloseCircle } from "react-icons/ai";
import MetaIcon from "../../data/Icons/metamask.png";
import WalletConnectIcon from "../../data/Icons/WalletConnect.png";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

function PopUp({ onClose }) {
  const [modalOpen, setModalOpen] = React.useState(false);

  //Metamask Connector
  const { connect: connectMetamask } = useConnect({
    connector: new MetaMaskConnector({}),
  });

  //Wallet Connect Connector
  const { connect: connectWalletConnect } = useConnect({
    connector: new WalletConnectConnector({
      options: {
        qrcode: true,
        rpc: {
          1: "https://eth-mainnet.g.alchemy.com/v2/WJ_CyZfZGeaufdcf2BM6ZBWg3BqHMKRA",
        },
      },
    }),
  });

  // 

  const { isConnected, isConnecting } = useAccount();

  const wallets = [
    {
      name: "Meta Mask",
      icon: MetaIcon,
      connector: connectMetamask,
    },
    {
      name: "Wallet Connect",
      icon: WalletConnectIcon,
      connector: connectWalletConnect,
    },
  ];

  const closeModal = (e) => {
    if (e.target.id === "popUp") {
      onClose();
    }
  };
  return (
    <>
      <div
        id="popUp"
        onClick={closeModal}
        className="fixed top-0 left-0 z-10 bg-gray-800 w-full h-screen bg-opacity-80 flex items-center justify-center"
      >
        <div className="p-6 text-light bg-dark rounded-lg w-fit lg:w-1/3 transition duration-150 ease-in-out">
          <div className="flex items-center justify-between mb-3">
            <h1 className="md:text-2xl text-white text-lg font-bold">
              {isConnected
                ? "Connected"
                : isConnecting
                ? "Connecting..."
                : "Connect Wallet"}
            </h1>
            <div>
              <AiFillCloseCircle
                onClick={onClose}
                color="sky-300"
                className=" text-sky-300 hover:text-sky-500 text-3xl float-end cursor-pointer"
              />
            </div>
          </div>
          {wallets.map((wallet, index) => (
            <div
              onClick={() => {
                //If metamask is not installed, it'll redirect to metamask official site
                if (!window.ethereum && index === 0) {
                  window.location.href = "https://metamask.io/download/";
                } else {
                  wallet.connector();
                }
              }}
              key={index}
            >
              <WalletItem name={wallet.name} icon={wallet.icon} />
            </div>
          ))}
        </div>{" "}
      </div>
    </>
  );
}

export default PopUp;
