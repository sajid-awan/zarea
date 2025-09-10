"use client";

import { forwardRef } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "w-full border outline-none transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-[rgba(0,0,0,0.03)] focus:ring-2 focus:ring-zarea-primary-orange focus:border-transparent",
        error: "border-red-500 focus:ring-2 focus:ring-red-500 focus:border-transparent",
        success: "border-zarea-success focus:ring-2 focus:ring-zarea-success focus:border-transparent",
      },
      size: {
        sm: "px-3 py-2 text-sm",
        default: "px-4 py-3",
        lg: "px-5 py-4 text-lg",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        full: "rounded-full",
      },
      background: {
        white: "bg-white",
        gray: "bg-gray-50",
        "light-gray": "bg-zarea-light-gray",
        transparent: "bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "lg",
      background: "white",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, rounded, background, label, error, required, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-base font-medium text-zarea-black mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          className={cn(
            inputVariants({ variant: error ? "error" : variant, size, rounded, background, className })
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };