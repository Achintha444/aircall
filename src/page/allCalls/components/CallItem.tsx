import {
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import {
    PhoneMissed,
    PhoneInTalk,
    Voicemail,
    CallReceived,
    ArrowOutward,
    Archive,
    Unarchive,
} from '@mui/icons-material';
import { Call } from '../../../state/airCallState/models/activity';

/**
 * CallItem component to display individual call details.
 *
 * @param {Call} call - The call object containing call details.
 * @returns {JSX.Element} - Rendered CallItem component.
 */
function CallItem(call: Call) {
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
                <IconButton edge="end" aria-label="archive">
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
