import React from 'react';

export default function ApplyPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Apply for Public Funding</h1>
        <p className="text-muted-foreground mt-2">Complete the application to request public funding for your industrial project</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-card rounded-lg border p-6">
          <form className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">1. Project Information</h2>
              
              <div>
                <label className="text-sm font-medium mb-1 block" htmlFor="project-name">
                  Project Name
                </label>
                <input
                  id="project-name"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Enter project name"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block" htmlFor="project-description">
                  Project Description
                </label>
                <textarea
                  id="project-description"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="Describe your project in detail"
                ></textarea>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="project-industry">
                    Industry
                  </label>
                  <select
                    id="project-industry"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select industry</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="energy">Energy</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="technology">Technology</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="project-location">
                    Project Location
                  </label>
                  <input
                    id="project-location"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="City, Country"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">2. Financial Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="total-budget">
                    Total Project Budget ($)
                  </label>
                  <input
                    id="total-budget"
                    type="number"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="funding-requested">
                    Funding Requested ($)
                  </label>
                  <input
                    id="funding-requested"
                    type="number"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block" htmlFor="funding-usage">
                  How will the funding be used?
                </label>
                <textarea
                  id="funding-usage"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 min-h-[100px]"
                  placeholder="Explain how you plan to use the requested funds"
                ></textarea>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">3. Organization Information</h2>
              
              <div>
                <label className="text-sm font-medium mb-1 block" htmlFor="org-name">
                  Organization Name
                </label>
                <input
                  id="org-name"
                  type="text"
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  placeholder="Enter organization name"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="org-type">
                    Organization Type
                  </label>
                  <select
                    id="org-type"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select type</option>
                    <option value="private">Private Company</option>
                    <option value="public">Public Company</option>
                    <option value="ngo">Non-profit</option>
                    <option value="government">Government Agency</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="org-size">
                    Organization Size
                  </label>
                  <select
                    id="org-size"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Select size</option>
                    <option value="small">Small (1-50 employees)</option>
                    <option value="medium">Medium (51-250 employees)</option>
                    <option value="large">Large (250+ employees)</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">4. Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="contact-name">
                    Contact Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="Full name"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="contact-title">
                    Job Title
                  </label>
                  <input
                    id="contact-title"
                    type="text"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="e.g. Project Manager"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="contact-email">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="email@example.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-1 block" htmlFor="contact-phone">
                    Phone
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    className="w-full rounded-md border border-input bg-background px-3 py-2"
                    placeholder="+1 (123) 456-7890"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300"
              />
              <label htmlFor="terms" className="ml-2 text-sm">
                I certify that all information provided is accurate and complete
              </label>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:bg-primary/90"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}