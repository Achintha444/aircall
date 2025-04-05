import { FunctionComponent, PropsWithChildren, ReactElement } from "react";
import AirCallContext from "../contexts/airCallContext";

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

    return (
        <AirCallContext.Provider
            value={ {
                allCalls: [],
            } }
        >
            { children }
        </AirCallContext.Provider>
    );
};

export default AirCallProvider;
