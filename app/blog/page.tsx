import { PageHeader } from '@/components/page-header';
import { FeaturedPost } from '@/components/blog/featured-post';
import { BlogCard } from '@/components/blog/blog-card';
import { blogPosts } from '@/lib/data/blog-posts';

export default function BlogPage() {
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <>
      <PageHeader
        title="Blog"
        description="Insights and guides to help your business thrive in the digital age"
      />
      
      <div className="container mx-auto px-4 py-16">
        <FeaturedPost post={featuredPost} />
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}