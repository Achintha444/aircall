import { Context, createContext } from "react";

import { Call } from "../models/activity";

/**
 * Props interface for AirCallContext.
 */
export interface AirCallContextProps {
   /**
    * All archived calls.
    */
    allArchivedCalls: Call[];

    /**
     * All non-archived calls.
     */
    allNonArchivedCalls: Call[];

    /**
     * Loading state.
     */
    loading: boolean;

    /**
     * Error message.
     */
    error: string | null;

    /**
     * Fetch call details by ID.
     */
    fetchCallDetails: (callId: string) => Promise<Call | undefined>;

    /**
     * Update call status.
     */
    updateCallStatus: (callId: string, isArchived: boolean) => Promise<void>;

    /**
     * Archive all unarchived calls.
     */
    archiveAllUnarchivedCalls: () => Promise<void>;

    /**
     * Unarchive all archived calls.
     */
    unarchiveAllArchivedCalls: () => Promise<void>;
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
