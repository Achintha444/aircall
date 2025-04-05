import { Button } from '@mui/material';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import CallItemList from '../components/CallItemList';

/**
 * AllCallsLayout component to display all non-archived calls.
 * 
 * @returns JSX Element representing the layout for all non-archived calls.
 */
function AllCallsLayout() {
  const { allNonArchivedCalls, updateCallStatus, archiveAllUnarchivedCalls } = useAirCall();

  return (
    <div>
      <Button variant="contained" onClick={archiveAllUnarchivedCalls}>
        Archive All
      </Button>

      <CallItemList
        calls={allNonArchivedCalls}
        updateCallStatus={updateCallStatus}
      />

    </div>
  );
}

export default AllCallsLayout;
