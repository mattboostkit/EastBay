"use client";

import { useState, useEffect } from 'react';
import { Search, Filter, Layers, Box } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type ArtefactSearchProps = {
  periods: string[];
  categories: string[];
}

export default function ArtefactSearch({ periods, categories }: ArtefactSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedPeriod, setSelectedPeriod] = useState(searchParams.get('period') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedModelType, setSelectedModelType] = useState(searchParams.get('modelType') || '');

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedPeriod) params.set('period', selectedPeriod);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedModelType) params.set('modelType', selectedModelType);

    router.push(`/digital-museum${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  return (
    <form onSubmit={handleSearch} className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative w-full md:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search artefacts..." 
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
            <option value="Prehistoric">Prehistoric</option>
            <option value="Bronze Age">Bronze Age</option>
            <option value="Iron Age">Iron Age</option>
            <option value="Roman">Roman</option>
            <option value="1st Century CE">1st Century CE</option>
            <option value="2nd Century CE">2nd Century CE</option>
            <option value="3rd Century CE">3rd Century CE</option>
            <option value="Multi-period">Multi-period</option>
            <option value="Archaeological Specimen">Archaeological Specimen</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Box className="h-4 w-4 text-muted-foreground" />
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedModelType}
            onChange={(e) => setSelectedModelType(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="3d">3D Models</option>
            <option value="photo">Photographs</option>
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
