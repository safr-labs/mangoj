'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { clsx } from 'clsx';
import { ArrowRight, Video, Users } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from '@/components/shared/platform-icons';
import { videosData } from '@/data/videos';
import { VideoCard } from '@/components/cards/video-card';
import { EmptyState } from '@/components/shared/empty-state';
import { SectionHeader } from '@/components/shared/section-header';
import { BaseCard } from '@/components/cards/base-card';
import { Heading } from '@/components/shared/heading';

interface VideosGridClientProps {
  initialCategory: string;
  initialPlatform: string;
}

export function VideosGridClient({ initialCategory, initialPlatform }: VideosGridClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = React.useState<string>(initialCategory);
  const [selectedPlatform, setSelectedPlatform] = React.useState<string>(initialPlatform);

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vlog', label: 'Family Vlogs' },
    { value: 'food', label: 'Food Reviews' },
    { value: 'lifestyle', label: 'Dubai Lifestyle' },
    { value: 'real-estate', label: 'Property Tours' },
  ];

  const platforms = [
    { value: 'all', label: 'All Platforms', icon: Video },
    { value: 'youtube', label: 'YouTube', icon: YoutubeIcon, color: 'text-red-500' },
    { value: 'instagram', label: 'Instagram', icon: InstagramIcon, color: 'text-pink-500' },
    { value: 'facebook', label: 'Facebook', icon: FacebookIcon, color: 'text-blue-600' },
  ];

  // Sync state if props change (e.g. from back/forward nav)
  React.useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  React.useEffect(() => {
    setSelectedPlatform(initialPlatform);
  }, [initialPlatform]);

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    const params = new URLSearchParams(searchParams?.toString());
    if (platform === 'all') {
      params.delete('platform');
    } else {
      params.set('platform', platform);
    }
    router.push(`/videos?${params.toString()}`, { scroll: false });
  };

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

  // Top 3 videos as Featured Videos when "All" is active for both platform and category
  const featuredVideos = React.useMemo(() => {
    return videosData.filter(v => v.platform === 'youtube').slice(0, 3);
  }, []);

  // Filtered list for the main grid
  const filteredVideos = React.useMemo(() => {
    let list = videosData;
    
    // Apply platform filter
    if (selectedPlatform !== 'all') {
      list = list.filter((video) => video.platform === selectedPlatform);
    }
    
    // Apply category filter
    if (selectedCategory !== 'all') {
      list = list.filter((video) => {
        const c = video.category.toLowerCase();
        if (selectedCategory === 'vlog') return c.includes('vlog');
        if (selectedCategory === 'food') return c.includes('food');
        if (selectedCategory === 'lifestyle') return c.includes('lifestyle');
        if (selectedCategory === 'real-estate') return c.includes('estate') || c.includes('property') || c.includes('tour');
        return false;
      });
    }

    // Exclude featured videos from the main list if all is selected to avoid duplication
    if (selectedPlatform === 'all' && selectedCategory === 'all') {
      const featuredIds = featuredVideos.map(f => f.id);
      return list.filter(v => !featuredIds.includes(v.id));
    }
    
    return list;
  }, [selectedPlatform, selectedCategory, featuredVideos]);

  return (
    <div className="w-full space-y-12">
      {/* Platform Tabs Filter */}
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-muted/40 p-1 rounded-2xl border border-border/40 grid grid-cols-4 gap-1">
          {platforms.map((plat) => {
            const Icon = plat.icon;
            const isActive = selectedPlatform === plat.value;
            const count = plat.value === 'all'
              ? videosData.length
              : videosData.filter(v => v.platform === plat.value).length;
            
            return (
              <button
                key={plat.value}
                onClick={() => handlePlatformSelect(plat.value)}
                className={clsx(
                  'flex flex-col sm:flex-row items-center justify-center gap-1.5 py-2.5 px-1 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none',
                  isActive
                    ? 'bg-card text-foreground shadow-xs border border-border/20 font-bold'
                    : 'text-muted-foreground hover:text-foreground hover:bg-card/25 border border-transparent'
                )}
              >
                <Icon className={clsx("h-4 w-4 shrink-0", plat.color && (isActive ? plat.color : "text-muted-foreground"))} />
                <span>{plat.label.split(' ')[0]}</span>
                <span className={clsx(
                  "text-[10px] px-1.5 py-0.5 rounded-full shrink-0",
                  isActive ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Filters (Horizontal pills, touch-scrollable on mobile) */}
      <div className="w-full">
        <div className="flex flex-nowrap md:flex-wrap items-center gap-2 overflow-x-auto pb-4 md:pb-0 scrollbar-none justify-start md:justify-center -mx-6 px-6 md:-mx-0 md:px-0 select-none">
          {categories.map((cat) => {
            const count = videosData.filter(v => 
              (selectedPlatform === 'all' || v.platform === selectedPlatform) && 
              (cat.value === 'all' || (() => {
                const c = v.category.toLowerCase();
                if (cat.value === 'vlog') return c.includes('vlog');
                if (cat.value === 'food') return c.includes('food');
                if (cat.value === 'lifestyle') return c.includes('lifestyle');
                if (cat.value === 'real-estate') return c.includes('estate') || c.includes('property') || c.includes('tour');
                return false;
              })())
            ).length;

            return (
              <button
                key={cat.value}
                onClick={() => handleCategorySelect(cat.value)}
                className={clsx(
                  'px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer shrink-0 flex items-center gap-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
                  selectedCategory === cat.value
                    ? 'bg-primary text-primary-foreground border-primary shadow-xs'
                    : 'bg-card text-foreground hover:bg-muted/40 border-border/80'
                )}
              >
                <span>{cat.label}</span>
                <span className={clsx(
                  "text-[10px] px-1.5 py-0.5 rounded-full shrink-0",
                  selectedCategory === cat.value ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Videos (Only shown when "All" is active for both platform and category) */}
      {selectedPlatform === 'all' && selectedCategory === 'all' && (
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

      {/* Video Grid (Matching Cards) */}
      <div className="pt-8 border-t border-border/30">
        <SectionHeader
          label="CURATED LIBRARY"
          heading={
            selectedPlatform === 'all' && selectedCategory === 'all'
              ? 'All Uploads'
              : `${platforms.find(p => p.value === selectedPlatform)?.label} — ${categories.find(c => c.value === selectedCategory)?.label}`
          }
          description="Explore our complete collection of family vlogs, food reviews, property tours, and cost guides."
          className="mb-8 md:mb-10 text-left md:text-left"
          align="left"
        />

        {filteredVideos.length > 0 ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 [column-fill:_balance] w-full">
            {filteredVideos.map((video) => (
              <div key={video.id} className="break-inside-avoid mb-8 animate-in fade-in duration-300">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            title="No Videos Found"
            description="We haven't uploaded any videos matching these filters yet. Check back soon for new content!"
            actionLabel="Reset All Filters"
            actionHref="/videos"
          />
        )}
      </div>

      {/* YouTube CTA (Subscribers Driver) */}
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
