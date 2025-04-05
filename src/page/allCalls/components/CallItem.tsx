import {
    Archive,
    ArrowOutward,
    CallReceived,
    PhoneInTalk,
    PhoneMissed,
    Unarchive,
    Voicemail,
} from '@mui/icons-material';
import {
    Avatar,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
    Typography,
    Box,
} from '@mui/material';
import { Call } from '../../../state/airCallState/models/activity';

/**
 * Props interface for CallItem component.
 */
interface CallItemProps {
    /**
     * Call object containing call details.
     */
    call: Call;

    /**
     * Function to update the call status (archived/unarchived).
     */
    updateCallStatus: (callId: string, isArchived: boolean) => Promise<void>;
}

/**
 * CallItem component to display individual call details.
 *
 * @param props - Props containing call details and update function.
 * @returns JSX Element representing the call item.
 */
function CallItem(props: CallItemProps) {
    const { call, updateCallStatus } = props;

    /**
     * Function to get the icon based on the call type.
     *
     * @returns JSX Element representing the call type icon.
     */
    const getCallIcon = () => {
        switch (call.call_type) {
            case 'missed':
                return <PhoneMissed />;
            case 'answered':
                return <PhoneInTalk />;
            case 'voicemail':
                return <Voicemail />;
            default:
                return null;
        }
    };

    /**
     * Function to get the icon based on the call direction.
     *
     * @returns JSX Element representing the call direction icon.
     */
    const getDirectionIcon = () => {
        switch (call.direction) {
            case 'inbound':
                return <CallReceived color="action" fontSize="small" />;
            case 'outbound':
                return <ArrowOutward color="action" fontSize="small" />;
            default:
                return null;
        }
    };

    return (
        <ListItem
            disablePadding
            sx={{ width: '100%' }}
            secondaryAction={
                <IconButton
                    edge="end"
                    aria-label="archive"
                    onClick={() => updateCallStatus(call.id, !call.is_archived)}
                >
                    {call.is_archived ? <Unarchive /> : <Archive />}
                </IconButton>
            }
        >
            <Box
                sx={{
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 2,
                    p: 2,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <ListItemAvatar>
                    <Avatar>{getCallIcon()}</Avatar>
                </ListItemAvatar>

                <ListItemText
                    primary={
                        <Stack spacing={0.5}>
                            <Typography variant="body1">{call.from}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                {call.to}
                            </Typography>
                        </Stack>
                    }
                    secondary={
                        <Stack direction="row" spacing={1} alignItems="center">
                            {getDirectionIcon()}
                        </Stack>
                    }
                />
                {/* IconButton is placed in secondaryAction */}
            </Box>
        </ListItem>
    );
}

export default CallItem;
