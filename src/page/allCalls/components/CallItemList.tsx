import { List } from "@mui/material";
import CallItem from "./CallItem";
import { Call } from "../../../state/airCallState/models/activity";

interface CallItemListProps {
    /**
     * List of calls to be displayed.
     */
    calls: Call[];

    /**
     * Function to update the call status.
     */
    updateCallStatus: (callId: string, isArchived: boolean) => Promise<void>;
}

/**
 * CallItemList component to display a list of calls.
 *
 * @param props - Props containing the list of calls and update function.
 * @returns JSX Element representing the call item list.
 */
function CallItemList(props: CallItemListProps) {
    const { calls, updateCallStatus } = props;

    return (
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {calls.map((call) => (
                <CallItem key={call.id} call={call} updateCallStatus={updateCallStatus} />
            ))}
        </List>
    );
}

export default CallItemList;
