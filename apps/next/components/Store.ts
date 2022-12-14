import { observer } from 'mobx-react-lite';
import { createContext, useContext } from 'react';
import { Context } from 'vm';
import { Store } from './Todo';

export const StoreContext = createContext<Store | null>(null);

export const useStore = () => useContext(StoreContext);
