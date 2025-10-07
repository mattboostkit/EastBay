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

  // Function to update URL with current filter values
  const updateFilters = (newPeriod?: string, newCategory?: string, newModelType?: string, newQuery?: string) => {
    const params = new URLSearchParams();

    const query = newQuery !== undefined ? newQuery : searchQuery;
    const period = newPeriod !== undefined ? newPeriod : selectedPeriod;
    const category = newCategory !== undefined ? newCategory : selectedCategory;
    const modelType = newModelType !== undefined ? newModelType : selectedModelType;

    if (query) params.set('q', query);
    if (period) params.set('period', period);
    if (category) params.set('category', category);
    if (modelType) params.set('modelType', modelType);

    router.push(`/digital-museum${params.toString() ? '?' + params.toString() : ''}`);
  };

  // Handle search submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilters();
  };

  // Handle filter changes
  const handlePeriodChange = (value: string) => {
    setSelectedPeriod(value);
    updateFilters(value, undefined, undefined, undefined);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    updateFilters(undefined, value, undefined, undefined);
  };

  const handleModelTypeChange = (value: string) => {
    setSelectedModelType(value);
    updateFilters(undefined, undefined, value, undefined);
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
            onChange={(e) => handlePeriodChange(e.target.value)}
          >
            <option value="">All Periods</option>
            <option value="Palaeolithic">Palaeolithic</option>
            <option value="Mesolithic">Mesolithic</option>
            <option value="Neolithic">Neolithic</option>
            <option value="Bronze Age">Bronze Age</option>
            <option value="Iron Age">Iron Age</option>
            <option value="Roman">Roman</option>
            <option value="Anglo-Saxon">Anglo-Saxon</option>
            <option value="Medieval">Medieval</option>
            <option value="Post-Medieval">Post-Medieval</option>
            <option value="Modern">Modern</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <Box className="h-4 w-4 text-muted-foreground" />
          <select
            className="rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            value={selectedModelType}
            onChange={(e) => handleModelTypeChange(e.target.value)}
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
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Personal adornment">Personal adornment</option>
            <option value="Toilet/surgical/pharmaceutical">Toilet/surgical/pharmaceutical</option>
            <option value="Textile working">Textile working</option>
            <option value="Household utensils/furniture">Household utensils/furniture</option>
            <option value="Recreational">Recreational</option>
            <option value="Weighing and measuring">Weighing and measuring</option>
            <option value="Written communications">Written communications</option>
            <option value="Transport">Transport</option>
            <option value="Buildings and services">Buildings and services</option>
            <option value="Tools">Tools</option>
            <option value="Fasteners and fittings">Fasteners and fittings</option>
            <option value="Agriculture">Agriculture</option>
            <option value="Military equipment">Military equipment</option>
            <option value="Religious beliefs">Religious beliefs</option>
            <option value="Metal working">Metal working</option>
            <option value="Antler/horn/bone working">Antler/horn/bone working</option>
            <option value="Pottery vessel manufacture">Pottery vessel manufacture</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>
        
        {(searchQuery || selectedPeriod || selectedCategory || selectedModelType) && (
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedPeriod('');
              setSelectedCategory('');
              setSelectedModelType('');
              router.push('/digital-museum');
            }}
            className="rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary/90"
          >
            Clear Filters
          </button>
        )}
      </div>
    </form>
  );
}
