import { Context, createContext } from "react";

import { Call } from "../models/activity";

/**
 * Props interface for AirCallContext.
 */
export interface AirCallContextProps {
   /**
    * All calls.
    */
    allCalls: Call[];
}

/**
 * Context object for managing the AirCallContext.
 */
const AirCallContext: Context<null | AirCallContextProps> = createContext<
    null | AirCallContextProps
>(
    null
);

/**
 * Display name for the AirCallContext.
 */
AirCallContext.displayName = "AirCallContext";

export default AirCallContext;
