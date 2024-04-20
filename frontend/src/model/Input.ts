export interface Input {
    label: string;
    value: string;
    type: string;
    name: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}