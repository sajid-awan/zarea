"use client";

import { forwardRef } from 'react';

interface CustomCheckboxProps {
  id?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  className?: string;
}

const CustomCheckbox = forwardRef<HTMLInputElement, CustomCheckboxProps>(
  ({ id, checked = false, onChange, label, className = "" }, ref) => {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="relative flex-shrink-0">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange?.(e.target.checked)}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 border-2 rounded transition-all duration-200 cursor-pointer relative ${
              checked
                ? 'bg-zarea-primary-orange border-zarea-primary-orange after:content-["✓"] after:absolute after:text-white after:text-xs after:font-bold after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2'
                : 'bg-white border-gray-300 hover:border-zarea-primary-orange'
            }`}
            onClick={() => onChange?.(!checked)}
          >
          </div>
        </div>
        {label && (
          <label
            htmlFor={id}
            className="text-zarea-black font-medium cursor-pointer leading-tight"
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

CustomCheckbox.displayName = 'CustomCheckbox';

export default CustomCheckbox;