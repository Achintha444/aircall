import APIClient from "../../../service/apiClient";
import { Call } from "../models/call";

/**
 * Fetch all activity calls for the Activity Feed.
 *
 * @returns - A promise that resolves to an array of call records.
 * @throws - An error if the request fails.
 */
export const getAllActivities = async (): Promise<Call[]> => {
  try {
    return await APIClient.getInstance().get<Call[]>("/activities");
  } catch (error) {
    console.error("Failed to fetch activity feed:", error);
    throw new Error("Unable to fetch activity feed.");
  }
};
