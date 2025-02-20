import React from "react";
import { Terminal } from "lucide-react";

interface TerminalDisplayProps {
  title?: string;
  commands: string[];
}

export function TerminalDisplay({
  title = "Terminal",
  commands,
}: TerminalDisplayProps) {
  return (
    <div className="w-full max-w-2xl rounded-lg overflow-hidden bg-gray-900 font-mono text-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <Terminal size={14} />
          <span className="text-xs">{title}</span>
        </div>
        <div className="w-16"></div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-2">
        {commands.map((command, index) => (
          <div key={index} className="flex">
            <span className="text-green-400 mr-2">$</span>
            <span className="text-gray-100">{command}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
