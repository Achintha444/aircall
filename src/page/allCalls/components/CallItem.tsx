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
} from '@mui/material';
import { Call } from '../../../state/airCallState/models/activity';

/**
 * CallItem component props.
 */
interface CallItemProps {
    /**
     * Call object containing call details.
     */
    call: Call;

    /**
     * Function to update the call status.
     */
    updateCallStatus: (callId: string, isArchived: boolean) => Promise<void>
}

/**
 * CallItem component to display individual call details.
 *
 * @param {Call} call - The call object containing call details.
 * @returns {JSX.Element} - Rendered CallItem component.
 */
function CallItem(props: CallItemProps) {
    const { call, updateCallStatus } = props;

    /**
     * Get call icon based on call type.
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
     * Get direction icon based on call direction.
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
            key={call.id}
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
            <ListItemAvatar>
                <Avatar>
                    {getCallIcon()}
                </Avatar>
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
        </ListItem>
    );
}

export default CallItem;
