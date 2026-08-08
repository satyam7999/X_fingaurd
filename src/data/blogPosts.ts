export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'autonomous-treasury-management-2026',
    title: 'The Rise of Autonomous Corporate Treasury Management',
    category: 'PRODUCT',
    excerpt: 'How AI sweep triggers and real-time yield algorithms are replacing traditional manual cash ladders.',
    date: 'Aug 04, 2026',
    readTime: '5 min read',
    author: 'Kelly Williams',
  },
  {
    slug: 'zero-fx-markup-global-banking',
    title: 'Why legacy Banks Charge 3% FX Spreads (And How We Eliminated It)',
    category: 'INSIGHTS',
    excerpt: 'A deep dive into interbank clearing protocols and zero-spread foreign exchange liquidity corridors.',
    date: 'Jul 28, 2026',
    readTime: '7 min read',
    author: 'John Terry',
  },
  {
    slug: 'multi-party-computation-security',
    title: 'Multi-Party Computation: The Mathematical Fortress of Digital Banking',
    category: 'SECURITY',
    excerpt: 'Why MPC key fragmentation provides superior protection against digital asset zero-day exploits.',
    date: 'Jul 19, 2026',
    readTime: '6 min read',
    author: 'David Miller',
  },
  {
    slug: 'high-yield-savings-rate-environment',
    title: 'Navigating High-Yield Savings in a Shifting Interest Rate Environment',
    category: 'MARKETS',
    excerpt: 'Strategies for lock-in yield optimization across short-term Treasuries and compound cash vaults.',
    date: 'Jul 11, 2026',
    readTime: '4 min read',
    author: 'Elena Rostova',
  },
];
