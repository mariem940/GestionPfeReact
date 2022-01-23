import { createContext, useContext } from 'react';

export const CahierContext = createContext();

export function useCahier() {
    return useContext(CahierContext);
}