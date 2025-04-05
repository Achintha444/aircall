/**
 * Represents a call record in the system.
 */
export interface Call {
    /**
     * Unique identifier for the call.
     */
    id: string;
  
    /**
     * Direction of the call.
     * - "inbound": Incoming call to the system.
     * - "outbound": Outgoing call from the system.
     */
    direction: "inbound" | "outbound";
  
    /**
     * The caller's number (or user ID).
     */
    from: number;
  
    /**
     * The callee's number (or user ID).
     */
    to: number;
  
    /**
     * The number through which the call was made (internal line or extension).
     */
    via: number;
  
    /**
     * Duration of the call in seconds.
     * A value of 0 means the call was not connected or very brief.
     */
    duration: number;
  
    /**
     * Whether the call has been archived.
     */
    is_archived: boolean;
  
    /**
     * Type of the call:
     * - "missed": The call was not answered.
     * - "answered": The call was successfully answered.
     * - "voicemail": The caller left a voicemail.
     */
    call_type: "missed" | "answered" | "voicemail";
  
    /**
     * Timestamp when the call was created, in ISO 8601 format.
     */
    created_at: string;
  }
  