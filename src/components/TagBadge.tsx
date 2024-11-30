import { X } from "lucide-react";

interface TagBadgeProps {
    label: string;
    value?: string;
    onDelete?: (e: string) => void;
}

// Restrições para obrigar `value` e `onDelete` juntos
function TagBadge({ label, value, onDelete }: TagBadgeProps) {
    if (onDelete && value === undefined) {
        throw new Error("`value` is required when `onDelete` is provided.");
    }

    return (
        <div className="flex items-center flex-row gap-x-1 rounded-lg px-2 py-0.5 bg-[#e7e7e8] w-fit">
            <p className="text-sm text-[#1C1C1C]">{label}</p>
            {onDelete && value && (
                <X onClick={() => onDelete(value)} size={16} color="#1C1C1C" />
            )}
        </div>
    );
}

export default TagBadge;
