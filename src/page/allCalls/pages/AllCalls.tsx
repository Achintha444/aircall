import AllCallsLayout from "../layout/AllCallsLayout";
import AirCallProvider from "../../../state/airCallState/providers/airCallProvider";

function AllCalls() {
    return (
        <AirCallProvider>
            <AllCallsLayout />
        </AirCallProvider>
    );
}

export default AllCalls;
