import React from "react";
import { Copy, Check } from "lucide-react";

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  title?: string;
}

export function CodeSnippet({
  code,
  language = "javascript",
  showLineNumbers = true,
  title,
}: CodeSnippetProps) {
  const [copied, setCopied] = React.useState(false);
  const lines = code.trim().split("\n");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl rounded-lg overflow-hidden bg-gray-900 border border-gray-200">
      {/* Code Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-400">
            {title || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          {copied ? (
            <Check size={16} className="text-green-500" />
          ) : (
            <Copy size={16} />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      {/* Code Content */}
      <div className="relative">
        <pre className="p-4 overflow-x-auto bg-gray-900">
          <code className="font-mono text-sm">
            {lines.map((line, index) => (
              <div key={index} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 text-gray-100 select-none text-right">
                    {index + 1}
                  </span>
                )}
                <span className="table-cell text-gray-100">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}
