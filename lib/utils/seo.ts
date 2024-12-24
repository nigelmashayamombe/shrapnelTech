import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
}: GenerateMetadataProps): Metadata {
  const defaultKeywords = [
    'software development',
    'local business',
    'CRM',
    'inventory management',
    'custom software',
  ];

  return {
    title: `${title} | ShrapnelTech`,
    description,
    keywords: [...defaultKeywords, ...keywords].join(', '),
    openGraph: {
      title,
      description,
      images: image ? [image] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}