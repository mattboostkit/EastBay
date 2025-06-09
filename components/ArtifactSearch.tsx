<<<<<<< HEAD
"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type ArtifactSearchProps = {
  periods: string[];
  categories: string[];
}

export default function ArtifactSearch({ periods, categories }: ArtifactSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedPeriod, setSelectedPeriod] = useState(searchParams.get('period') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedPeriod) params.set('period', selectedPeriod);
    if (selectedCategory) params.set('category', selectedCategory);
    
    router.push(`/digital-museum${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  return (
    <form onSubmit={handleSearch} className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search artifacts..." 
          className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="">All Periods</option>
            {periods.map((period) => (
              <option key={period} value={period}>{period}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-muted-foreground" />
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}
=======
"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Layers } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type ArtifactSearchProps = {
  periods: string[];
  categories: string[];
}

export default function ArtifactSearch({ periods, categories }: ArtifactSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedPeriod, setSelectedPeriod] = useState(searchParams.get('period') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  
  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedPeriod) params.set('period', selectedPeriod);
    if (selectedCategory) params.set('category', selectedCategory);
    
    router.push(`/digital-museum${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  return (
    <form onSubmit={handleSearch} className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search artifacts..." 
          className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="">All Periods</option>
            {periods.map((period) => (
              <option key={period} value={period}>{period}</option>
            ))}
          </select>
        </div>
        
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-muted-foreground" />
          <select 
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        <button 
          type="submit"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
        >
          Apply Filters
        </button>
      </div>
    </form>
  );
}
>>>>>>> e5d647af0de7eeb4bee63671ae86a204aaeec73a
