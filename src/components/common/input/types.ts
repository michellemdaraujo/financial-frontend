interface BaseProps {
  className?: string;
  label: string;
  id: string;
  helperText?: string;
  error?: string;
}

export type InputProps = BaseProps &
  Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof BaseProps>;
