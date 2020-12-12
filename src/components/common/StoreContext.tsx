import RootStore from "@stores/root.store";
import { createContext, useContext } from "react";
import { enableStaticRendering } from "mobx-react";
import { configure } from "mobx";
import config from "@config";

//#region Mobx Setting
configure({ useProxies: "ifavailable" });
enableStaticRendering(typeof window === "undefined");
//#endregion

let rootStore: RootStore | undefined;

const StoreContext = createContext<RootStore | undefined>(undefined);

export const useRootStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    console.error("ERROR");
  }
  return context;
};

function initializeStore(member = null) {
  const store = rootStore ?? new RootStore();

  if (member) {
    store.hydrate(member);
  }

  if (config.isServer) return store;
  // Create the store once in the client
  if (!rootStore) rootStore = store;

  return store;
}

export const RootStoreProvider = ({ children, member }) => {
  const store = initializeStore(member);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

type RootStoreProvider = React.FC<{
  member: { name: string; level: number; mobile: string };
}>;
