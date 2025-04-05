import { FunctionComponent, PropsWithChildren, ReactElement, useMemo, useState } from "react";
import AirCallContext from "../contexts/airCallContext";
import { getAllActivities } from "../api/getAllCalls";
import { Call } from "../models/activity";
import { updateActivity } from "../api/updateCall";

/**
 * Props interface for the [AirCallProvider]
 */
export type AirCallProviderProps = PropsWithChildren;

/**
 * React context provider for the internal authentication data context.
 *
 * @param props - Props injected to the component.
 * @returns Internal authentication data context instance.
 */
const AirCallProvider: FunctionComponent<AirCallProviderProps> = (
    props: AirCallProviderProps
): ReactElement => {
    const { children } = props;

    const [allArchivedCalls, setAllArchivedCalls] = useState<Call[]>([]);
    const [allNonArchivedCalls, setAllNonArchivedCalls] = useState<Call[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetches all the calls from the API and sets them in the state.
     */
    const fetchAllCalls = async () => {
        setLoading(true);

        try {
            // Fetch all calls from the API
            const response = await getAllActivities();
            
            // Filter archived and non-archived calls
            const archivedCalls = response.filter((call) => call.is_archived);
            const nonArchivedCalls = response.filter((call) => !call.is_archived);

            // Set the calls in the state
            setAllArchivedCalls(archivedCalls);
            setAllNonArchivedCalls(nonArchivedCalls);
        } catch (error) {
            console.error("Error fetching all calls:", error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Fetch individual call details by ID.
     */
    const fetchCallDetails = async (callId: string) => {
        setLoading(true);

        try {
            // Fetch call details from the API
            const response = await getAllActivities();
            const callDetails = response.find((call) => call.id === callId);
            return callDetails;
        } catch (error) {
            console.error("Error fetching call details:", error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Update `is_archived` status of a call by ID.
     */
    const updateCallStatus = async (callId: string, isArchived: boolean) => {
        setLoading(true);

        try {
            // Update call status in the API
            await updateActivity(callId, isArchived);

            // update the archived and non-archived calls in the state
            if (isArchived) {
                const archivedCall = allNonArchivedCalls.find((call) => call.id === callId);

                if (archivedCall) {
                    setAllArchivedCalls((prev) => [...prev, archivedCall]);
                    setAllNonArchivedCalls((prev) => prev.filter((call) => call.id !== callId));
                }
            }
            else {
                const nonArchivedCall = allArchivedCalls.find((call) => call.id === callId);

                if (nonArchivedCall) {
                    setAllNonArchivedCalls((prev) => [...prev, nonArchivedCall]);
                    setAllArchivedCalls((prev) => prev.filter((call) => call.id !== callId));
                }
            }

        } catch (error) {
            console.error("Error updating call status:", error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }        
    };

    /**
     * Archive all unarchived calls.
     */
    const archiveAllUnarchivedCalls = async () => {
        setLoading(true);

        try {
            // Archive all unarchived calls in the API
            await Promise.all(allNonArchivedCalls.map((call) => updateCallStatus(call.id, true)));
        } catch (error) {
            console.error("Error archiving all unarchived calls:", error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Unarchive all archived calls.
     */
    const unarchiveAllArchivedCalls = async () => {
        setLoading(true);

        try {
            // Unarchive all archived calls in the API
            await Promise.allSettled(allArchivedCalls.map((call) => updateCallStatus(call.id, false)));
        } catch (error) {
            console.error("Error unarchiving all archived calls:", error);
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Fetches all the calls from the API and sets them in the state.
     */
    useMemo(() => {
        fetchAllCalls();
    }, []);

    return (
        <AirCallContext.Provider
            value={{
                allArchivedCalls: allArchivedCalls,
                allNonArchivedCalls: allNonArchivedCalls,
                loading: loading,
                error: error,
                fetchCallDetails: fetchCallDetails,
                updateCallStatus: updateCallStatus,
                archiveAllUnarchivedCalls: archiveAllUnarchivedCalls,
                unarchiveAllArchivedCalls: unarchiveAllArchivedCalls,
            }}
        >
            {children}
        </AirCallContext.Provider>
    );
};

export default AirCallProvider;
