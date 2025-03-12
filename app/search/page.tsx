import React from 'react';

export default function SearchPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Industrial Search</h1>
        <p className="text-muted-foreground mt-2">Find and discover industrial projects and opportunities</p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[250px_1fr]">
        <div className="bg-card rounded-lg border p-4">
          <h2 className="font-semibold mb-4">Filters</h2>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-1 block">Industry</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">All Industries</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="energy">Energy</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="technology">Technology</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Country</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">All Countries</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="eu">European Union</option>
                <option value="ca">Canada</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Project Size</label>
              <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                <option value="">Any Size</option>
                <option value="small">Small ($0-1M)</option>
                <option value="medium">Medium ($1M-10M)</option>
                <option value="large">Large ($10M+)</option>
              </select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Status</label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="status-planning" className="mr-2" />
                  <label htmlFor="status-planning">Planning</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="status-active" className="mr-2" />
                  <label htmlFor="status-active">Active</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="status-completed" className="mr-2" />
                  <label htmlFor="status-completed">Completed</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="mb-6 flex items-center">
            <div className="relative flex-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                placeholder="Search projects..."
                className="w-full rounded-md border border-input pl-8 py-2 text-sm"
              />
            </div>
            <button className="ml-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Search
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Project Cards - Placeholder data */}
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="rounded-lg border bg-card p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">Manufacturing Facility Expansion</h3>
                    <p className="text-sm text-muted-foreground mt-1">Eastern Industrial Zone, Germany</p>
                  </div>
                  <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                    Active
                  </span>
                </div>
                <p className="mt-3 text-sm">
                  Large-scale expansion of manufacturing capabilities for automotive components with focus on electric vehicle parts.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm">
                    <span className="font-medium">Budget: </span>
                    <span>$12.5M</span>
                  </div>
                  <button className="text-sm text-primary font-medium">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}