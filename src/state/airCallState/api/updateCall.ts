import APIClient from "../../../service/apiClient";
import { Call } from "../models/call";

/**
 * Archive or unarchive a specific call by ID.
 *
 * @param callId - The ID of the call to update.
 * @param isArchived - Boolean value to set the is_archived status.
 * @returns - A promise that resolves to the updated call.
 * @throws - An error if the request fails.
 */
export const updateActivity = async (
  callId: string,
  isArchived: boolean
): Promise<Call> => {
  try {
    return await APIClient.getInstance().patch<Call>(`/activities/${callId}`, {
      is_archived: isArchived,
    });
  } catch (error) {
    console.error(`Failed to update call with ID ${callId}:`, error);
    throw new Error("Unable to update call.");
  }
};
