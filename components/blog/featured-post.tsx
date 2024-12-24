import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/lib/types/blog';

export function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden md:grid md:grid-cols-2">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-full object-cover"
      />
      <div className="p-8">
        <div className="flex gap-2 mb-3">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-muted-foreground mb-6">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4 mr-2" />
            {formatDate(post.date)}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}