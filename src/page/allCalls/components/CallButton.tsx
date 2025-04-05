import { Button } from "@mui/material";
import { Archive, Unarchive } from "@mui/icons-material";

/**
 * Props for CallButton component.
 */
interface CallButtonProps {
    /**
     * onClick handler for the button.
     */
    onClick: () => void;

    /**
     * Is the button from archived calls page.
     */
    isArchived: boolean;
}

/**
 * CallButton component to display a button for call actions.
 *
 * @param props - Props containing the onClick handler.
 * @returns JSX Element representing the call button.
 */
function CallButton(props: CallButtonProps) {
    const { onClick, isArchived } = props;

    return (
        <Button
            variant="outlined"
            onClick={onClick}
            startIcon={isArchived ? <Unarchive /> : <Archive />}
        >
            {isArchived ? "Unarchive All" : "Archive All"}
        </Button>
    );
}

export default CallButton;
