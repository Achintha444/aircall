import { Box } from '@mui/material';
import useAirCall from "../../../state/airCallState/hooks/useAirCall";
import CallButton from '../components/CallButton';
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
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <CallButton
          onClick={archiveAllUnarchivedCalls}
          isArchived={false}
        />
      </Box>

      <CallItemList
        calls={allNonArchivedCalls}
        updateCallStatus={updateCallStatus}
      />
    </div>
  );
}

export default AllCallsLayout;
