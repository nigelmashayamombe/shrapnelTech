import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/lib/types/blog';

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden">
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex gap-2 mb-3">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4 mr-2" />
          {formatDate(post.date)}
        </div>
      </div>
    </Card>
  );
}