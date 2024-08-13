import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import { Box, Container, Flex, Heading } from "@radix-ui/themes";
import { WalletStatus } from "./WalletStatus";
import { Mint } from "./mint";
import { useState } from "react";
import { isValidSuiObjectId } from "@mysten/sui.js/utils";
import { QueryObject } from "./QueryObject";

function App() {
  const currentAccount = useCurrentAccount();
  const [counterId, setCounter] = useState(() => {
    const hash = window.location.hash.slice(1);
    return isValidSuiObjectId(hash) ? hash : null;
  });
  return (
    <>
      <Flex
        position="sticky"
        px="4"
        py="2"
        justify="between"
        style={{
          borderBottom: "1px solid var(--gray-a2)",
        }}
      >
        <Box>
          <Heading>dApp Hello_sui</Heading>
        </Box>

        <Box>
          <ConnectButton />
        </Box>
      </Flex>
      <Container>
        <Container
          mt="5"
          pt="2"
          px="4"
          style={{ background: "var(--gray-a2)", minHeight: 500 }}
        >
          <WalletStatus />
          {/* 这段代码首先检查用户是否已经连接了他们的钱包。如果已连接（currentAccount存在），它继续检查是否有一个counterId。
          如果counterId已经设置，意味着已有计数器，那么渲染带有这个ID的Counter组件。如果没有counterId，则呈现CreateCounter组件，
          允许用户创建一个新的计数器。当新计数器被创建时，会通过回调更新URL的哈希部分，并设置计数器状态。如果用户的钱包尚未连接，
          它将显示一个提醒用户连接钱包的消息。 */}
          {currentAccount ? (
            counterId ? (
              <QueryObject id={counterId} />
            ) : (
              <Mint
                onCreated={(id) => {
                  window.location.hash = id;
                  setCounter(id);
                }}
              />
            )
          ) : (
            <Heading>Please connect your wallet</Heading>
          )}
        </Container>
      </Container>
    </>
  );
}

export default App;