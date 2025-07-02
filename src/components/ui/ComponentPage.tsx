import React, { useState } from 'react';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

interface ComponentPageProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
}

const ComponentPage: React.FC<ComponentPageProps> = ({ title, description, component, code }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <header className="p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-purple-300">{description}</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto p-6">
        <div className="bg-slate-800 bg-opacity-50 rounded-lg overflow-hidden">
          <div className="flex border-b border-slate-700">
            <button
              className={`px-4 py-2 transition-colors ${
                activeTab === 'preview' ? 'bg-purple-600' : 'hover:bg-slate-700'
              }`}
              onClick={() => setActiveTab('preview')}
            >
              Preview
            </button>
            <button
              className={`px-4 py-2 transition-colors ${
                activeTab === 'code' ? 'bg-purple-600' : 'hover:bg-slate-700'
              }`}
              onClick={() => setActiveTab('code')}
            >
              Code
            </button>
          </div>
          <div className="p-6">
            {activeTab === 'preview' ? (
              <div className="h-[60vh]">{component}</div>
            ) : (
              <div className="rounded-lg border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <div className="flex items-center justify-between border-b border-slate-700 px-4 lg:px-6 py-3">
                  <h2 className="text-lg font-semibold text-white">Code</h2>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 rounded-md bg-purple-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-purple-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <CheckIcon className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <ClipboardDocumentIcon className="h-4 w-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="p-4 lg:p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-300 whitespace-pre-wrap break-words lg:whitespace-pre">
                    <code>{code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentPage;
