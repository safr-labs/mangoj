'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play, Calendar, Eye, Heart } from 'lucide-react';
import { YoutubeIcon, InstagramIcon, FacebookIcon } from '@/components/shared/platform-icons';
import { Video } from '@/types';
import { formatDate } from '@/utils/format-date';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { BaseCard } from './base-card';

function formatNumber(num: string | number | undefined): string {
  if (num === undefined || num === null) return '';
  if (typeof num === 'string') {
    const cleaned = num.replace(/views|likes/gi, '').trim();
    return cleaned;
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const normalizeCategory = (cat: string) => {
    const c = cat.toLowerCase();
    if (c.includes('vlog')) return 'vlog';
    if (c.includes('food')) return 'food';
    if (c.includes('lifestyle')) return 'lifestyle';
    if (c.includes('estate') || c.includes('property') || c.includes('tour')) return 'real-estate';
    return 'vlog';
  };

  const getThumbnailUrl = (v: Video) => {
    if (v.thumbnailUrl) return v.thumbnailUrl;
    const cat = v.category.toLowerCase();
    if (cat.includes('food')) {
      return 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('estate') || cat.includes('property') || cat.includes('tour')) {
      return 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80';
    }
    if (cat.includes('vlog')) {
      return 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=800&q=80';
    }
    return 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80';
  };

  const normalizedCat = normalizeCategory(video.category);
  const dateStr = video.publishedDate || video.publishedAt || '';
  const currentThumbnail = getThumbnailUrl(video);

  const categoryLabels = {
    vlog: 'Family Vlog',
    food: 'Food Review',
    lifestyle: 'Dubai Lifestyle',
    'real-estate': 'Real Estate',
  };

  const categoryColor = {
    vlog: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/25',
    food: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25',
    lifestyle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25',
    'real-estate': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/25',
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        render={
          <button
            className="group text-left w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary rounded-2xl overflow-hidden"
            aria-label={`Play video: ${video.title}`}
          />
        }
      >
        <BaseCard padding="none" className="overflow-hidden flex flex-col h-full w-full">
          {/* Thumbnail Container (Facade Pattern) */}
          <div className={`relative w-full overflow-hidden bg-muted transition-all duration-300 ${
            video.platform === 'youtube' ? "aspect-16/9" : "aspect-[3/4]"
          }`}>
            <Image
              src={currentThumbnail}
              alt={`Thumbnail of ${video.title}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/35 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-14 h-14 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                <Play className="h-6 w-6 fill-current shrink-0 ml-0.5" />
              </div>
            </div>
            {/* Video Duration Badge */}
            {video.duration && (
              <span className="absolute bottom-3 right-3 bg-black/75 text-white text-xs font-semibold px-2 py-0.5 rounded-sm">
                {video.duration}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center justify-between gap-2 mb-3 w-full">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  categoryColor[normalizedCat]
                }`}
              >
                {categoryLabels[normalizedCat]}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground text-[11px] font-semibold tracking-wider uppercase">
                {video.platform === 'youtube' && <YoutubeIcon className="h-3.5 w-3.5 text-red-500 shrink-0" />}
                {video.platform === 'instagram' && <InstagramIcon className="h-3.5 w-3.5 text-pink-500 shrink-0" />}
                {video.platform === 'facebook' && <FacebookIcon className="h-3.5 w-3.5 text-blue-600 shrink-0" />}
                <span>{video.platform}</span>
              </span>
            </div>
            <h3 className="font-heading text-base md:text-lg font-semibold line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
              {video.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {video.description}
            </p>
            <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between text-[11px] md:text-xs text-muted-foreground">
              <div className="flex items-center gap-3">
                {video.viewCount !== undefined && (
                  <div className="flex items-center gap-1" title={`${video.viewCount} views`}>
                    <Eye className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                    <span className="font-medium">{formatNumber(video.viewCount)} views</span>
                  </div>
                )}
                {video.likeCount !== undefined && (
                  <div className="flex items-center gap-1" title={`${video.likeCount} likes`}>
                    <Heart className="h-3.5 w-3.5 shrink-0 text-rose-500 fill-rose-500/10" />
                    <span className="font-medium">{formatNumber(video.likeCount)} likes</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
                <span className="font-medium">{formatDate(dateStr)}</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </DialogTrigger>

      {/* Dynamic Video Embed Overlay (Loads iframe dynamically by platform) */}
      <DialogContent 
        className={
          video.platform === 'youtube'
            ? 'max-w-4xl w-[95vw] p-0 bg-black overflow-hidden border-none aspect-16/9'
            : 'max-w-[400px] w-[95vw] h-[80vh] p-0 bg-background overflow-hidden border-none rounded-2xl flex flex-col items-center justify-center shadow-2xl'
        }
      >
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        {isOpen && (
          <>
            {video.platform === 'youtube' && (
              <iframe
                src={video.embedUrl ? `${video.embedUrl}?autoplay=1&rel=0` : `https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none"
              />
            )}
            {video.platform === 'instagram' && (
              <iframe
                src={video.embedUrl ? video.embedUrl : `https://www.instagram.com/p/${video.id}/embed`}
                title={video.title}
                allowFullScreen
                className="w-full h-full border-none bg-background"
              />
            )}
            {video.platform === 'facebook' && (
              <iframe
                src={video.embedUrl ? video.embedUrl : `https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D${video.id}&show_text=0&width=560`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-none bg-background"
              />
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
