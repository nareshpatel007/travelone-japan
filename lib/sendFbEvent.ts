import { v4 as uuidv4 } from "uuid";
import { event } from "@/lib/metaPixel";

// Define Proms
interface Props {
    eventName: string;
    email?: string;
    amount?: number;
}

export function sendFbEvent({ eventName, email = "", amount = 0 }: Props) {
    try {
        // Send facebook pixel event
        const eventID = uuidv4();

        // Send event
        event(eventName, {
            value: amount || 0,
            currency: "USD"
        }, eventID);

        // Send server event for deduplication
        fetch("/api/facebook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                event_name: eventName,
                event_id: eventID,
                email: email || "",
            }),
        });
    } catch (error) {
        console.error("Failed to send FB event:", error);
    }
}