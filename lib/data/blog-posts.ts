import { BlogPost } from '@/lib/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Essential Software Tools Every Small Business Needs',
    slug: 'essential-software-tools-small-business',
    excerpt: 'Discover the must-have software tools that can transform your small business operations and boost productivity.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    date: '2024-01-15',
    tags: ['Business', 'Software', 'Productivity'],
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    },
  },
  {
    id: '2',
    title: 'How Cloud Computing is Revolutionizing Small Business',
    slug: 'cloud-computing-small-business',
    excerpt: 'Learn how cloud technology is making enterprise-level tools accessible and affordable for small businesses.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    date: '2024-01-10',
    tags: ['Cloud', 'Technology', 'Innovation'],
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    },
  },
  {
    id: '3',
    title: 'The Ultimate Guide to CRM for Local Businesses',
    slug: 'crm-guide-local-business',
    excerpt: 'Everything you need to know about choosing and implementing the right CRM system for your local business.',
    content: '...',
    coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    date: '2024-01-05',
    tags: ['CRM', 'Business Growth', 'Customer Service'],
    author: {
      name: 'Emily Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200',
    },
  },
];