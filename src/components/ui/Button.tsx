"use client";

import React, { forwardRef } from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-accent-orange text-white hover:bg-accent-orange/90",
        primary: "bg-zarea-primary-orange text-white hover:bg-accent-orange ",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 hover:text-gray-900",
        "outline-white": "border border-white bg-transparent !text-white hover:bg-zarea-secondary hover:border-zarea-secondary hover:!text-white",
        "outline-primary": "border border-zarea-primary-orange bg-transparent text-zarea-primary-orange hover:bg-zarea-primary-orange hover:text-white",
        "outline-destructive": "border border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white",
        "outline-secondary": "border border-zarea-secondary bg-transparent text-zarea-black hover:bg-zarea-secondary hover:text-white",
        secondary: "bg-zarea-secondary text-white hover:bg-zarea-primary-orange",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900",
        link: "bg-transparent text-accent-orange underline-offset-4 hover:underline p-0 h-auto font-normal",
      },
      size: {
        xs: "h-6 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        default: "h-10 px-4 py-2",
        lg: "sm:h-12 h-[44px] px-6 sm:text-lg",
        xl: "h-14 px-8 text-lg",
        "2xl": "h-16 px-10 text-xl",
        icon: "h-10 w-10",
        responsive: "h-8 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:h-12 md:px-6 md:text-base lg:h-14 lg:px-8 lg:text-lg",
        "responsive-sm": "h-6 px-2 text-xs sm:h-8 sm:px-3 sm:text-sm md:h-10 md:px-4 md:text-base",
        "responsive-lg": "h-10 px-4 text-sm sm:h-12 sm:px-6 sm:text-base md:h-14 md:px-8 md:text-lg lg:h-16 lg:px-10 lg:text-xl",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      radius,
      asChild = false,
      href,
      leftIcon,
      rightIcon,
      loading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isIconOnly = !children && (leftIcon || rightIcon);
    const actualSize = isIconOnly ? "icon" : size;

    const content = (
      <>
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {leftIcon && !loading && (
          <span className={cn("flex items-center", children && "mr-2")}>
            {leftIcon}
          </span>
        )}
        {children}
        {rightIcon && !loading && (
          <span className={cn("flex items-center", children && "ml-2")}>
            {rightIcon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size: actualSize, radius, className }))}
          {...(props as any)}
          ref={ref as any}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size: actualSize, radius, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };