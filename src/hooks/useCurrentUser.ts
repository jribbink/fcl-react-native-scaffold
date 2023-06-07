import * as fcl from "@onflow/fcl/dist/fcl-react-native";
import { CurrentUser } from "@onflow/typedefs";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser>();

  useEffect(() => {
    const unsubscribe = fcl.currentUser().subscribe(setUser);
    return () => unsubscribe();
  }, []);

  return user;
}
