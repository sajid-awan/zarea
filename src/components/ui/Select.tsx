"use client";

import { forwardRef } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const selectVariants = cva(
  "w-full border outline-none transition-all duration-200 appearance-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "border-[rgba(0,0,0,0.03)] text-zarea-black focus:ring-2 focus:ring-zarea-primary-orange focus:border-transparent",
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

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    VariantProps<typeof selectVariants> {
  label?: string;
  error?: string;
  required?: boolean;
  options?: SelectOption[];
  placeholder?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, variant, size, rounded, background, label, error, required, options, placeholder, children, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-base font-medium text-zarea-black mb-2">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            className={cn(
              selectVariants({ variant: error ? "error" : variant, size, rounded, background, className }),
              "pr-10" // Extra padding for the arrow
            )}
            ref={ref}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            {children}
          </select>
          {/* Custom dropdown arrow */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select, selectVariants };