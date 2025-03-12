import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] gap-8 px-4">
      <div className="max-w-4xl text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Industrial Projects Platform
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover industrial projects, apply for public funding, and manage your industrial portfolio
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild size="lg">
          <Link href="/search">
            Industrial Search
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/apply">
            Apply for Funding
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full mt-16">
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <div className="mb-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Industrial Search</h2>
          <p className="text-muted-foreground">Find and discover industrial projects and opportunities in your sector.</p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <div className="mb-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Public Funding</h2>
          <p className="text-muted-foreground">Apply for public money to build or develop your industrial projects.</p>
        </div>
        
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <div className="mb-4 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Manager Dashboard</h2>
          <p className="text-muted-foreground">Comprehensive tools for managing accounts, subscriptions, and client access.</p>
        </div>
      </div>
    </div>
  );
}