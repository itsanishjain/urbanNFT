import Layout from "../src/components/Layout";
import "../styles/globals.css";
import { MainProvider } from "../context/mainContext";


import { Provider, chain, defaultChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected' // metamask
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect' // wallet connect
import { WalletLinkConnector } from 'wagmi/connectors/walletLink' // coinbase wallet

// import { Example } from './components'

// API key for Ethereum node
// Two popular services are Infura (infura.io) and Alchemy (alchemy.com)

// const infuraId = process.env.INFURA_ID

const infuraId = "0cafc81691e3444583a6b2ea640227e6"


// Chains for connectors to support
const chains = defaultChains

// Set up connectors
const connectors = ({ chainId }) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0]
  return [
    new InjectedConnector({
      chains,
      options: { shimDisconnect: true, image: "./metamask.png" },
    }),
    new WalletConnectConnector({
      options: {
        infuraId,
        qrcode: true,
        image: "./wallet-connect.svg",
      },
    }),
    // new WalletLinkConnector({
    //   options: {
    //     appName: 'My wagmi app',
    //     jsonRpcUrl: `${rpcUrl}/${infuraId}`,
    //   },
    // }),
  ]
}




function MyApp({ Component, pageProps }) {
  return (
    <Provider autoConnect connectors={connectors}>
      <MainProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MainProvider>
    </Provider>
  );
}

export default MyApp;
