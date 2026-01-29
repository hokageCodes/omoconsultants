"use client";
import React, { useRef, useEffect, useState } from "react";
import { Search } from "lucide-react";

export default function SearchModal({ open, onClose, onSearch, results = [] }) {
  const inputRef = useRef(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) {
      window.addEventListener("keydown", handleEsc);
      return () => window.removeEventListener("keydown", handleEsc);
    }
  }, [open, onClose]);

  if (!open) return null;

  function handleSearch() {
    if (query.trim()) onSearch(query.trim());
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center min-h-screen bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div
        className="bg-white rounded-2xl shadow-2xl px-4 sm:px-8 py-8 w-full max-w-md mx-4 flex flex-col items-center relative"
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="relative w-full mb-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search the site..."
            className="w-full pl-12 pr-5 py-4 rounded-lg border border-gray-200 text-lg focus:outline-none focus:ring-2 focus:ring-teal-400 shadow-sm"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-600 hover:text-teal-800"
            onClick={handleSearch}
            tabIndex={-1}
            aria-label="Search"
            type="button"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>
        {/* Results */}
        <div className="w-full mt-2">
          {query && (
            <div className="bg-gray-50 rounded-lg p-3 min-h-[48px] max-h-64 overflow-y-auto">
              {results.length === 0 ? (
                <div className="text-gray-400 text-center py-2 text-base">No results found.</div>
              ) : (
                <ul className="space-y-2">
                  {results.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block px-3 py-2 rounded-lg hover:bg-teal-100 text-teal-700 font-semibold transition-colors text-base"
                        onClick={onClose}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
