"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
}

interface TabGroupProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (tabId: string) => void;
  variant?: "underline" | "pill";
  children: React.ReactNode;
}

export default function TabGroup({
  tabs,
  defaultTab,
  onChange,
  variant = "pill",
  children,
}: TabGroupProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id || "");

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onChange?.(tabId);
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div
        className={cn(
          "flex gap-2 mb-8",
          variant === "underline"
            ? "border-b border-border-custom pb-2 flex-wrap"
            : "flex-wrap justify-center"
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={cn(
              "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
              variant === "underline"
                ? cn(
                    "border-b-2 rounded-none -mb-[10px] pb-2",
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-text-muted hover:text-text-white hover:border-border-custom"
                  )
                : cn(
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-dark-card text-text-muted hover:text-text-white hover:bg-dark-alt"
                  )
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="animate-fade-in">
        {children}
      </div>
    </div>
  );
}
