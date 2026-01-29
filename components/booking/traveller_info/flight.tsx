"use client";

import { CheckCircle, X } from "lucide-react";
import { useState } from "react";

// Define props
type Props = {
    open: boolean;
    setOpenChange: (open: boolean) => void;
    handleChange: (key: string, value: any) => void;
    formData: any;
};

export function FlightPreference({ open, setOpenChange, handleChange, formData }: Props) {
    // If not open, return null
    if (!open) return null;

    // Normalize data
    const normalized = normalizeMealData(formData);

    // Define state
    const [error, setError] = useState<string | null>(null);
    const [arrival, setArrival] = useState({
        flight_number: normalized?.arrival_flight_no || "",
        departure_date: normalized?.arrival_flight_departure_date || "",
        departure_time: normalized?.arrival_flight_departure_time || "",
        from_airport: normalized?.arrival_flight_from_airport || "",
        arrival_date: normalized?.arrival_flight_arrival_date || "",
        arrival_time: normalized?.arrival_flight_arrival_time || "",
        to_airport: normalized?.arrival_flight_to_airport || "",
    });
    const [departure, setDeparture] = useState({
        flight_number: normalized?.depature_flight_no || "",
        departure_date: normalized?.depature_flight_departure_date || "",
        departure_time: normalized?.depature_flight_departure_time || "",
        from_airport: normalized?.depature_flight_from_airport || "",
        arrival_date: normalized?.depature_flight_arrival_date || "",
        arrival_time: normalized?.depature_flight_arrival_time || "",
        to_airport: normalized?.depature_flight_to_airport || "",
    });

    // Handle close
    const handleClose = () => setOpenChange(false);

    // Handle submit
    const handleSubmit = () => {
        // basic required validation
        const requiredArrival = Object.values(arrival).some((v) => !v);
        const requiredDeparture = Object.values(departure).some((v) => !v);

        if (requiredArrival || requiredDeparture) {
            setError("Please fill all required flight details");
            return;
        }

        handleChange("flight_json", {
            arrival_flight_no: arrival.flight_number,
            arrival_flight_departure_date: arrival.departure_date,
            arrival_flight_departure_time: arrival.departure_time,
            arrival_flight_from_airport: arrival.from_airport,
            arrival_flight_arrival_date: arrival.arrival_date,
            arrival_flight_arrival_time: arrival.arrival_time,
            arrival_flight_to_airport: arrival.to_airport,
            depature_flight_no: departure.flight_number,
            depature_flight_departure_date: departure.departure_date,
            depature_flight_departure_time: departure.departure_time,
            depature_flight_from_airport: departure.from_airport,
            depature_flight_arrival_date: departure.arrival_date,
            depature_flight_arrival_time: departure.arrival_time,
            depature_flight_to_airport: departure.to_airport,
        });

        handleClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex p-10 items-center justify-center">
            <div className="absolute inset-0 bg-black/40" onClick={handleClose} />

            <div className="relative w-full max-w-xl bg-white rounded-md shadow-lg max-h-[60vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b sticky top-0 bg-white z-10">
                    <h3 className="text-lg font-medium">Flight Details</h3>
                    <button className="cursor-pointer" onClick={handleClose}>
                        <X />
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-6 space-y-6">
                    {/* Arrival Flight */}
                    <FlightSection
                        title="Arrival Flight Details"
                        data={arrival}
                        onChange={setArrival}
                    />

                    {/* Departure Flight */}
                    <FlightSection
                        title="Departure Flight Detail"
                        data={departure}
                        onChange={setDeparture}
                    />
                </div>

                {/* Footer */}
                <div className="flex items-center justify-end gap-3 px-6 py-4 border-t sticky bottom-0 bg-white">
                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <button
                        onClick={handleSubmit}
                        className="px-5 py-2 bg-black text-sm md:text-base text-white border border-black rounded-sm flex items-center gap-2 cursor-pointer hover:bg-black/90"
                    >
                        <CheckCircle size={16} />
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ---------- Reusable Flight Section ---------- */

function FlightSection({
    title,
    data,
    onChange,
}: {
    title: string;
    data: any;
    onChange: (value: any) => void;
}) {
    const handleField = (key: string, value: string) => {
        onChange({ ...data, [key]: value });
    };

    return (
        <div className="space-y-3">
            <h4 className="font-medium text-sm">{title}</h4>

            <Input label="Flight Number" required value={data.flight_number} onChange={(v) => handleField("flight_number", v)} />
            <Input type="date" label="Departure Date" required value={data.departure_date} onChange={(v) => handleField("departure_date", v)} />
            <Input type="time" label="Departure Time" required value={data.departure_time} onChange={(v) => handleField("departure_time", v)} />
            <Input label="From Airport" required value={data.from_airport} onChange={(v) => handleField("from_airport", v)} />
            <Input type="date" label="Arrival Date" required value={data.arrival_date} onChange={(v) => handleField("arrival_date", v)} />
            <Input type="time" label="Arrival Time" required value={data.arrival_time} onChange={(v) => handleField("arrival_time", v)} />
            <Input label="To Airport" required value={data.to_airport} onChange={(v) => handleField("to_airport", v)} />
        </div>
    );
}

/* ---------- Reusable Input ---------- */

function Input({
    label,
    value,
    onChange,
    type = "text",
    required = false,
}: {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: string;
    required?: boolean;
}) {
    return (
        <div>
            <label className="block text-sm font-medium mb-1">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full border border-black rounded-sm px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black"
            />
        </div>
    );
}

// Normalize data
const normalizeMealData = (data: any) => {
    if (!data) {
        return {
            arrival_flight_no: "",
            arrival_flight_departure_date: "",
            arrival_flight_departure_time: "",
            arrival_flight_from_airport: "",
            arrival_flight_arrival_date: "",
            arrival_flight_arrival_time: "",
            arrival_flight_to_airport: "",
            depature_flight_no: "",
            depature_flight_departure_date: "",
            depature_flight_departure_time: "",
            depature_flight_from_airport: "",
            depature_flight_arrival_date: "",
            depature_flight_arrival_time: "",
            depature_flight_to_airport: "",
        };
    }

    if (typeof data === "string") {
        try {
            data = JSON.parse(data);
        } catch {
            return {
                arrival_flight_no: "",
                arrival_flight_departure_date: "",
                arrival_flight_departure_time: "",
                arrival_flight_from_airport: "",
                arrival_flight_arrival_date: "",
                arrival_flight_arrival_time: "",
                arrival_flight_to_airport: "",
                depature_flight_no: "",
                depature_flight_departure_date: "",
                depature_flight_departure_time: "",
                depature_flight_from_airport: "",
                depature_flight_arrival_date: "",
                depature_flight_arrival_time: "",
                depature_flight_to_airport: "",
            };
        }
    }

    return {
        arrival_flight_no: data?.arrival_flight_no || "",
        arrival_flight_departure_date: data?.arrival_flight_departure_date || "",
        arrival_flight_departure_time: data?.arrival_flight_departure_time || "",
        arrival_flight_from_airport: data?.arrival_flight_from_airport || "",
        arrival_flight_arrival_date: data?.arrival_flight_arrival_date || "",
        arrival_flight_arrival_time: data?.arrival_flight_arrival_time || "",
        arrival_flight_to_airport: data?.arrival_flight_to_airport || "",
        depature_flight_no: data?.depature_flight_no || "",
        depature_flight_departure_date: data?.depature_flight_departure_date || "",
        depature_flight_departure_time: data?.depature_flight_departure_time || "",
        depature_flight_from_airport: data?.depature_flight_from_airport || "",
        depature_flight_arrival_date: data?.depature_flight_arrival_date || "",
        depature_flight_arrival_time: data?.depature_flight_arrival_time || "",
        depature_flight_to_airport: data?.depature_flight_to_airport || "",
    };
};
