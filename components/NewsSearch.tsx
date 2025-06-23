"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';

type NewsSearchProps = {
  categories: string[];
  years: number[];
};

export default function NewsSearch({ categories, years }: NewsSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || '');
  const [selectedYear, setSelectedYear] = useState(searchParams.get('year') || '');
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    if (selectedYear) params.set('year', selectedYear);
    
    router.push(`/news${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (category) params.set('category', category);
    if (selectedYear) params.set('year', selectedYear);
    
    router.push(`/news${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory) params.set('category', selectedCategory);
    if (year) params.set('year', year);
    
    router.push(`/news${params.toString() ? '?' + params.toString() : ''}`);
  };
  
  return (
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <form onSubmit={handleSearch} className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input 
          type="search" 
          placeholder="Search news..." 
          className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      
      <div className="flex flex-col gap-4 sm:flex-row">
        <select 
          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          aria-label="Filter by category"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        
        <select 
          className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          value={selectedYear}
          onChange={(e) => handleYearChange(e.target.value)}
          aria-label="Filter by year"
        >
          <option value="">All Years</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}