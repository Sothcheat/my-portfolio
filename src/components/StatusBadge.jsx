import { Badge } from "@/components/ui/badge";

const ACCENT = "border-indigo-200 bg-indigo-100 text-indigo-700 font-semibold";
const NEUTRAL = "border-gray-200 bg-gray-100 text-gray-700";

const STATUSES = {
    open: { label: "Open to work", className: ACCENT },
    busy: { label: "Busy learning", className: NEUTRAL },
    completed: { label: "Completed", className: ACCENT },
    inProgress: { label: "In progress", className: NEUTRAL },
};

function StatusBadge({ status }) {
    const fallback = { label: status ?? "Unknown", className: NEUTRAL };
    const { label, className } = STATUSES[status] ?? fallback;

    return <Badge className={`h-auto border-2 px-3 py-1 text-sm ${className}`}>{label}</Badge>;
}

export default StatusBadge;
