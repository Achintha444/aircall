import List from '@mui/material/List';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import { Call } from "../../../state/airCallState/models/activity";
import CallItem from "../components/CallItem";
import { Button } from '@mui/material';

function AllCallsLayout() {
  const { allNonArchivedCalls, updateCallStatus, archiveAllUnarchivedCalls } = useAirCall();

  return (
    <div>
      <Button variant="contained" onClick={archiveAllUnarchivedCalls}>
        Archive All
      </Button>
      <List>
        {
          allNonArchivedCalls.map((call: Call) => (
            <CallItem key={call.id} call={call} updateCallStatus={updateCallStatus} />
          ))
        }
      </List>
    </div>
  );
}

export default AllCallsLayout;
