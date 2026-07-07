'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import { ArrowRight, Video, Users } from 'lucide-react';
import { videosData } from '@/data/videos';
import { VideoCard } from '@/components/cards/video-card';
import { EmptyState } from '@/components/shared/empty-state';
import { SectionHeader } from '@/components/shared/section-header';
import { BaseCard } from '@/components/cards/base-card';
import { Heading } from '@/components/shared/heading';

interface VideosGridClientProps {
  initialCategory: string;
}

export function VideosGridClient({ initialCategory }: VideosGridClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);

  const categories = [
    { value: 'all', label: 'All Videos' },
    { value: 'vlog', label: 'Family Vlogs' },
    { value: 'food', label: 'Food Reviews' },
    { value: 'lifestyle', label: 'Dubai Lifestyle' },
    { value: 'real-estate', label: 'Property Tours' },
  ];

  // Sync state if initialCategory prop changes
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams?.toString());
    if (category === 'all') {
      params.delete('category');
    } else {
      params.set('category', category);
    }
    router.push(`/videos?${params.toString()}`, { scroll: false });
  };

  // Top 3 videos as Featured Videos when "All" is selected
  const featuredVideos = React.useMemo(() => {
    return videosData.slice(0, 3);
  }, []);

  // Filtered list for the main grid
  const filteredVideos = React.useMemo(() => {
    if (selectedCategory === 'all') {
      // Exclude featured videos from the main list if all is selected to avoid duplication
      return videosData.slice(3);
    }
    return videosData.filter((video) => video.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="w-full space-y-12">
      {/* 2. Category Filters (Horizontal pills, touch-scrollable on mobile) */}
      <div className="w-full">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-none justify-start md:justify-center -mx-6 px-6 md:-mx-0 md:px-0 select-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => handleCategorySelect(cat.value)}
              className={clsx(
                'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                selectedCategory === cat.value
                  ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                  : 'bg-card text-foreground hover:bg-muted/40 border-border/80'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Featured Videos (Only shown when "All" is active) */}
      {selectedCategory === 'all' && (
        <div className="pt-4 border-t border-border/30">
          <SectionHeader
            label="FEATURED CONTENT"
            heading="Featured Releases"
            description="Our handpicked and most impactful vlogs highlighting Dubai living, real estate tours, and shopping guides."
            className="mb-8 md:mb-10 text-left md:text-left"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      )}

      {/* 4. Video Grid (Matching Cards) */}
      <div className="pt-8 border-t border-border/30">
        <SectionHeader
          label="CURATED LIBRARY"
          heading={selectedCategory === 'all' ? 'All Uploads' : `${categories.find(c => c.value === selectedCategory)?.label}`}
          description="Explore our complete collection of family vlogs, food reviews, property tours, and cost guides."
          className="mb-8 md:mb-10 text-left md:text-left"
          align="left"
        />

        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="animate-in fade-in duration-300">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Videos Found"
            description="We haven't uploaded any videos in this category yet. Check back soon for new content!"
            actionLabel="Reset Category Filter"
            actionHref="/videos"
          />
        )}
      </div>

      {/* 5. YouTube CTA (Subscribers Driver) */}
      <div className="pt-12 border-t border-border/30">
        <BaseCard className="bg-primary/5 border border-primary/20 p-8 md:p-12 text-center flex flex-col items-center max-w-4xl mx-auto rounded-3xl shadow-xs" hoverLift={false}>
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shrink-0">
            <Video className="h-7 w-7 shrink-0" />
          </div>
          <Heading as="h3" variant="h3" className="mb-3">
            Join the Manganikka Family on YouTube
          </Heading>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed mb-6">
            Get weekly Tamil vlogs, restaurant reviews, real estate tours, and shopping guides delivered straight to your feed. Subscribe to stay updated!
          </p>
          <div className="flex items-center gap-2 mb-8 bg-background px-4 py-2 rounded-full border border-border/60 text-xs md:text-sm font-bold text-foreground">
            <Users className="h-4 w-4 text-primary shrink-0" />
            <span>104,000+ Subscribers</span>
          </div>
          <a
            href="https://youtube.com/@manganikka"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 font-semibold text-primary-foreground shadow-md transition hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Visit YouTube Channel</span>
            <ArrowRight className="h-4 w-4 shrink-0" />
          </a>
        </BaseCard>
      </div>
    </div>
  );
}
