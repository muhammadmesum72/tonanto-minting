import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WagmiConfig, createClient, configureChains, allChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'





//Configure chains 
const { provider, webSocketProvider } = configureChains(
  allChains,
  [publicProvider()],
)

//Configure client
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

    <WagmiConfig client={client}>

      <App />
    </WagmiConfig>

  </React.StrictMode>
);
