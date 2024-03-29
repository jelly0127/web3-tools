import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector } from '@web3-react/core'

import { Connection, ConnectionType, onConnectionError } from '../connections'
import { DEFAULT_NETWORK, NETWORK_CONFIG } from '../chainId'

export function buildCoinbaseWalletConnector() {
  const [web3CoinbaseWallet, web3CoinbaseWalletHooks] = initializeConnector<CoinbaseWallet>(
    actions =>
      new CoinbaseWallet({
        actions,
        options: {
          url: NETWORK_CONFIG[DEFAULT_NETWORK].rpcUrls[0],
          appName: 'Dogsbody',
          reloadOnDisconnect: false,
        },
        onError: onConnectionError,
      })
  )
  const coinbaseWalletConnection: Connection = {
    connector: web3CoinbaseWallet,
    hooks: web3CoinbaseWalletHooks,
    type: ConnectionType.COINBASE_WALLET,
  }

  return coinbaseWalletConnection
}
