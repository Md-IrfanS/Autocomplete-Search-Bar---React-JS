export interface InputProps {
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    placeholder?: string;
};

