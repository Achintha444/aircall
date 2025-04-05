import { useContext } from "react";
import AirCallContext, { AirCallContextProps } from "../contexts/airCallContext";

/**
 * Interface for the return type of the `useAirCall` hook.
 */
export type UseAirCallInterface = AirCallContextProps;

/**
 * Hook that provides access to the information about the routes in the application.
 * @returns An object containing the billboard related data.
 */
const useAirCall = (): UseAirCallInterface => {
    const context: AirCallContextProps | null = useContext(AirCallContext);

    if (!context) {
        throw new Error("useAirCall must be used within a AirCallProvider");
    }

    return context;
};

export default useAirCall;
