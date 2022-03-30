import { useAccount, useConnect } from 'wagmi'

export default function WagmiWallets() {
    // const [{ data: connectData, error: connectError }, connect] = useConnect()
    const [{ data, error }, connect] = useConnect()

    const [{ data: accountData }, disconnect] = useAccount({
        fetchEns: true,
    })



    console.log(data.connectors, "DFADSFADSFADSFDASF")

    if (accountData) {
        return (
            <div className='text-white'>
                <img src={accountData.ens?.avatar} alt="ENS Avatar" />
                <div>
                    {accountData.ens?.name
                        ? `${accountData.ens?.name} (${accountData.address})`
                        : accountData.address}
                </div>
                <div>Connected to {accountData.connector.name}</div>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        )
    }

    return (
        <div className='bg-white max-w-md mx-auto rounded-md '>
            {data.connectors.map((connector, index) => (

                <div key={index} onClick={() => connect(connector)} className='p-4 flex justify-between items-center cursor-pointer border-x-2 border-black '>
                    <button
                        className='text-md'
                        disabled={!connector.ready}
                        key={connector.id}

                    >
                        {connector.name}
                        {!connector.ready && ' (unsupported)'}
                    </button>

                    <img src={connector.options.image} className='w-12 h-12' />

                </div>
            ))}

            {error && <div>{error?.message ?? 'Failed to connect'}</div>}
        </div>
    )
}



