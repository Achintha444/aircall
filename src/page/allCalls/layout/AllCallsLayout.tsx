import List from '@mui/material/List';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import { Call } from "../../../state/airCallState/models/activity";
import CallItem from "../components/CallItem";

function AllCallsLayout() {
  const { allNonArchivedCalls } = useAirCall();

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <List>
        {
          allNonArchivedCalls.map((call: Call) => (
            <CallItem key={call.id} {...call} />
          ))
        }
        </List>
    </div>
  );
}

export default AllCallsLayout;
