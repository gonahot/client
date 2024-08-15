import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit';
import { HELLO_SUI_PACKAGE_ID } from './constants';
import { Flex } from '@radix-ui/themes';
import { Transaction } from '@mysten/sui/transactions';

export function Mint({ 
    onCreated,
}:{
    onCreated: (id: string) => void;
 }) {

    const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction()

    const client = useSuiClient();

    // 创建一个可点击的按钮触发mint()
    return (
        <Flex direction="column" my="2">
            <div>
                <button
                    onClick={() => {
                        mint();
                    }}
                >
                    mint
                </button>
            </div>
        </Flex>

        
    );

    // 定义一个mint函数然后执行终端中的sui client call的命令
    function mint() {
        const tx = new Transaction();
        // target中的hello_world为合约的模块名，mint为要调用的函数。
        tx.moveCall({
            target: `${HELLO_SUI_PACKAGE_ID}::hello_world::mint`,
        });

        signAndExecuteTransaction({
            transaction: tx,
            chain: 'sui:testnet',
    
           
        },{onSuccess: (tx) => {
            console.log('executed transaction', tx);
            client.waitForTransaction({
                digest: tx.digest,
            }).then((tx) => {
                console.log('transaction data', tx.effects?.created?.[0]?.reference?.digest);
                    const objectId = tx.effects?.created?.[0]?.reference?.objectId;
                    if (objectId) {
                        onCreated(objectId);
                    }
                
            });
										
        }},)
        
    }
}