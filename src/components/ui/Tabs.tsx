"use client";

import { ReactNode } from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tabsVariants = cva(
  "flex flex-wrap gap-2",
  {
    variants: {
      variant: {
        default: "",
        pills: "p-1 rounded-full",
        underline: "",
      },
      size: {
        sm: "[&>button]:px-3 [&>button]:py-1 [&>button]:text-sm",
        default: "[&>button]:px-4 [&>button]:py-2 [&>button]:text-sm",
        lg: "[&>button]:px-6 [&>button]:py-3 [&>button]:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const tabVariants = cva(
  "font-medium transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "rounded-full",
        pills: "rounded-full",
        underline: "rounded-none border-b-2 border-transparent",
      },
      state: {
        active: "",
        inactive: "",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        state: "active",
        class: "bg-zarea-primary-orange font-semibold text-white",
      },
      {
        variant: "default", 
        state: "inactive",
        class: "text-zarea-black font-semibold hover:text-zarea-primary-orange",
      },
      {
        variant: "pills",
        state: "active",
        class: "bg-white  text-zarea-primary-orange shadow-sm",
      },
      {
        variant: "pills",
        state: "inactive", 
        class: "text-gray-600 hover:text-gray-900",
      },
      {
        variant: "underline",
        state: "active",
        class: "border-zarea-primary-orange text-zarea-primary-orange",
      },
      {
        variant: "underline",
        state: "inactive",
        class: "text-zarea-tab border-zarea-tab-inactive-border hover:text-zarea-black hover:border-zarea-tab",
      },
    ],
    defaultVariants: {
      variant: "default",
      state: "inactive",
    },
  }
);

export interface Tab {
  id: string;
  label: string;
  content?: ReactNode;
}

export interface TabsProps extends VariantProps<typeof tabsVariants> {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

const Tabs = ({ tabs, activeTab, onTabChange, variant, size, className }: TabsProps) => {
  return (
    <div className={cn(tabsVariants({ variant, size }), className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            tabVariants({ 
              variant, 
              state: activeTab === tab.id ? "active" : "inactive" 
            })
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

Tabs.displayName = "Tabs";

export { Tabs, tabsVariants, tabVariants };