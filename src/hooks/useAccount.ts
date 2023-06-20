import { Account } from "@onflow/typedefs";
import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl/dist/fcl-react-native";

export function useAccount(address: string | null = null) {
  const [account, setAccount] = useState<Account | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setError(null);

    if (address == null) {
      setAccount(null);
      return;
    }

    fcl
      .account(address)
      .then(setAccount)
      .catch(() => {
        setAccount(null);
        setError(new Error("Failed to fetch account"));
      });
  }, [address]);

  return { account, error };
}
