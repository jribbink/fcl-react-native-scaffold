import { Account } from "@onflow/typedefs";
import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";

export function useAccount(address: string | null | undefined = null) {
  const [account, setAccount] = useState<Account>();

  useEffect(() => {
    if (address == null) {
      setAccount(undefined);
      return;
    }

    fcl
      .account(address)
      .then(setAccount)
      .catch(() => setAccount(undefined));
  }, [address]);

  return account;
}
