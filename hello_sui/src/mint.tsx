import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit';
import { TransactionBlock } from '@mysten/sui.js/transactions';

import { HELLO_SUI_PACKAGE_ID } from './constants';
import { Flex } from '@radix-ui/themes';

export function Mint({ 
    onCreated,
}:{
    onCreated: (id: string) => void;
 }) {
    // const { mutate: signAndExecute } = useSignAndExecuteTransaction({
    //      	execute: async ({ bytes, signature }) =>
    //      		await suiClient.executeTransactionBlock({
    //     			transactionBlock: bytes,
    //     			signature,
    //      			options: {
    //      				// Raw effects are required so the effects can be reported back to the wallet
    //     				showRawEffects: true,
    //      				// Select additional data to return
    //      				showObjectChanges: true,
    //      			},
    //      		}),
    //      });
    //
    //      const { digest, objectChanges } = await signAndExecuteTransaction({
    //     	transaction,
    //     });
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
        const txb = new TransactionBlock();
        // target中的hello_world为合约的模块名，mint为要调用的函数。
        txb.moveCall({
            target: `${HELLO_SUI_PACKAGE_ID}::hello_world::mint`,
        });

        signAndExecute(
            {
                transactionBlock: txb,
                options: {
                  showEffects: true,
                  showObjectChanges: true,
                },
            },
            {
                // 定义如果成功则获取本次交易的objetid
                onSuccess: (tx) => {
                    client
                        .waitForTransactionBlock({
                        digest: tx.digest,
                        })
                        .then(() => {
                            const objectId = tx.effects?.created?.[0]?.reference?.objectId;

                            if (objectId) {
                                onCreated(objectId);
                            }
                        });
                },
            },
        );
    }
}