'use client';

import * as React from 'react';
import Image from 'next/image';
import { Play, Calendar, Eye } from 'lucide-react';
import { Video } from '@/types';
import { formatDate } from '@/utils/format-date';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from '@/components/ui/dialog';
import { BaseCard } from './base-card';

interface VideoCardProps {
  video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
  const [isOpen, setIsOpen] = React.useState(false);

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
          <div className="relative aspect-16/9 w-full overflow-hidden bg-muted">
            <Image
              src={video.thumbnailUrl}
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
            <span className="absolute bottom-3 right-3 bg-black/75 text-white text-xs font-semibold px-2 py-0.5 rounded-sm">
              {video.duration}
            </span>
          </div>

          {/* Details */}
          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center gap-2 mb-3">
              <span
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                  categoryColor[video.category]
                }`}
              >
                {categoryLabels[video.category]}
              </span>
            </div>
            <h3 className="font-heading text-base md:text-lg font-semibold line-clamp-2 text-foreground group-hover:text-primary transition-colors leading-snug mb-3">
              {video.title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
              {video.description}
            </p>
            <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5 shrink-0" />
                <span>{video.viewCount}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5 shrink-0" />
                <span>{formatDate(video.publishedAt)}</span>
              </div>
            </div>
          </div>
        </BaseCard>
      </DialogTrigger>

      {/* Dynamic YouTube Video Embed Overlay (Loads iframe ONLY on trigger select) */}
      <DialogContent className="max-w-4xl w-[95vw] p-0 bg-black overflow-hidden border-none aspect-16/9">
        <DialogTitle className="sr-only">{video.title}</DialogTitle>
        {isOpen && (
          <iframe
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-none"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
