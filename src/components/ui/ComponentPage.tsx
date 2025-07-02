import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface ComponentPageProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
}

const ComponentPage: React.FC<ComponentPageProps> = ({ title, description, component, code }) => {
  const [activeTab, setActiveTab] = useState('preview');

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
              <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{ background: 'transparent', padding: '1rem' }}>
                {code}
              </SyntaxHighlighter>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ComponentPage;
