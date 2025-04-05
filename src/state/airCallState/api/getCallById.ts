import APIClient from "../../../service/apiClient";
import { Call } from "../models/call";

/**
 * Fetch a specific call's details by ID.
 *
 * @param callId - The ID of the call to retrieve.
 * @returns - A promise that resolves to the call details.
 * @throws - An error if the request fails.
 */
export const getActivityById = async (callId: string): Promise<Call> => {
  try {
    return await APIClient.getInstance().get<Call>(`/activities/${callId}`);
  } catch (error) {
    console.error(`Failed to fetch call with ID ${callId}:`, error);
    throw new Error("Unable to fetch call details.");
  }
};
