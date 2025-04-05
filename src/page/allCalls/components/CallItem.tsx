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
import { Call } from '../../../state/airCallState/models/call';

/**
 * Props interface for CallItem component.
 */
interface CallItemProps {
    call: Call;
    updateCallStatus: (callId: string, isArchived: boolean) => Promise<void>;
}

/** Format seconds into mm:ss */
const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

/** Format ISO date into something like "Apr 5, 3:30 PM" */
const formatDateTime = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleString(undefined, {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
    });
};

function CallItem({ call, updateCallStatus }: CallItemProps) {
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

    const getDirectionIcon = () => {
        const commonProps = {
            fontSize: 'small',
            sx: { color: 'text.secondary' },
        };

        switch (call.direction) {
            case 'inbound':
                return <CallReceived
                    style={{
                        ...commonProps,
                    }}
                />;
            case 'outbound':
                return <ArrowOutward
                    style={{
                        ...commonProps,
                    }}
                />;
            default:
                return null;
        }
    };

    const getAvatarColor = () => {
        switch (call.call_type) {
            case 'missed':
                return 'error.main';
            case 'answered':
                return 'success.main';
            case 'voicemail':
                return 'info.main';
            default:
                return 'grey.500';
        }
    };

    return (
        <ListItem
            disablePadding
            sx={{ width: '100%' }}
            secondaryAction={
                <Stack direction="row" spacing={1} alignItems="center">
                    {/* Direction icon moved here to the right */}

                    <IconButton
                        edge="end"
                        aria-label={call.is_archived ? 'unarchive' : 'archive'}
                        onClick={() => updateCallStatus(call.id, !call.is_archived)}
                    >
                        {call.is_archived ? <Unarchive /> : <Archive />}
                    </IconButton>
                </Stack>
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
                {/* Left Avatar */}
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: getAvatarColor() }}>{getCallIcon()}</Avatar>
                </ListItemAvatar>

                {/* Text content */}
                <ListItemText
                    primary={
                        <Stack spacing={0.5}>
                            <Typography variant="body1">{call.from}</Typography>
                            <Typography variant="body2" color="text.secondary">
                                to {call.to} via {call.via}
                            </Typography>
                        </Stack>
                    }
                    secondary={
                        <Stack direction="row" spacing={2} alignItems="center">
                            <Typography variant="caption" color="text.secondary">
                                {formatDateTime(call.created_at)}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                Duration: {formatDuration(call.duration)}
                            </Typography>
                            {getDirectionIcon()}
                        </Stack>
                    }
                />
            </Box>
        </ListItem>
    );
}

export default CallItem;
