import { ReactNode } from "react";

interface BaseProps {
  className?: string;
  children: ReactNode;
}

export type ButtonProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>;
