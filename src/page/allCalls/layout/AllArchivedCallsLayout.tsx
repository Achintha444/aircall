import List from '@mui/material/List';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import { Call } from "../../../state/airCallState/models/activity";
import CallItem from "../components/CallItem";
import { Button } from '@mui/material';

function AllArchivedCallsLayout() {
  const { allArchivedCalls, updateCallStatus, unarchiveAllArchivedCalls } = useAirCall();

  return (
    <div>
      <Button variant="contained" onClick={unarchiveAllArchivedCalls}>
        Unarchive All
      </Button>
      <List>
        {
          allArchivedCalls.map((call: Call) => (
            <CallItem key={call.id} call={call} updateCallStatus={updateCallStatus} />
          ))
        }
        </List>
    </div>
  );
}

export default AllArchivedCallsLayout;
