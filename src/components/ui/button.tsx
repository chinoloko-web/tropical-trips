import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-tropical-green-600 text-white hover:bg-tropical-green-700 shadow-lg shadow-tropical-green-600/25",
        secondary: "bg-tropical-green-500 text-white hover:bg-tropical-green-600 shadow-lg shadow-tropical-green-500/25",
        accent: "bg-tropical-yellow-400 text-tropical-green-900 hover:bg-tropical-yellow-300 shadow-lg shadow-tropical-yellow-400/25",
        outline: "border-2 border-tropical-green-600 text-tropical-green-600 hover:bg-tropical-green-600 hover:text-white",
        ghost: "text-tropical-green-600 hover:bg-tropical-green-50",
        white: "bg-white text-tropical-green-900 hover:bg-gray-100 shadow-lg",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
