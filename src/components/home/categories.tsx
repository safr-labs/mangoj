import * as React from 'react';
import Link from 'next/link';
import { Heart, Utensils, Sparkles, Building, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { SectionHeader } from '@/components/shared/section-header';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export function Categories() {
  const categoriesList = [
    {
      title: 'Family Vlogs',
      description: 'Candid and heartwarming weekly logs sharing family life, relocations, kids outings, and travel adventures in Dubai.',
      icon: Heart,
      color: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
      category: 'vlog',
    },
    {
      title: 'Food Reviews',
      description: 'Authentic taste-tests, restaurant highlights, street food exploration, and elite fine dining reviews tailored for families.',
      icon: Utensils,
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
      category: 'food',
    },
    {
      title: 'Dubai Lifestyle',
      description: 'Gold souk bargains, shopping guidelines, traditional jewelry secrets, and Dubai cost-of-living breakdowns.',
      icon: Sparkles,
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
      category: 'lifestyle',
    },
    {
      title: 'Real Estate Tours',
      description: 'High-production residential walkthroughs, luxury marina apartment reviews, and rental guidance for Indian expats.',
      icon: Building,
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
      category: 'real-estate',
    },
  ];

  return (
    <Section background="accent">
      <Container>
        <SectionHeader
          label="CONTENT BREADTH"
          heading="What We Create"
          description="Diverse, engaging and high-retention video categories catering to the modern Tamil family."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card
                key={idx}
                className="hover-lift flex flex-col h-full bg-card border border-border/60"
              >
                <CardHeader className="p-6 pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-4 shrink-0 ${
                      item.color
                    }`}
                  >
                    <Icon className="h-6 w-6 shrink-0" />
                  </div>
                  <CardTitle className="font-heading text-lg font-bold tracking-tight mb-2">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0 flex flex-col flex-1">
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <Link
                    href={`/videos?category=${item.category}`}
                    className="inline-flex items-center text-xs font-bold text-primary group/link hover:underline mt-auto focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md"
                  >
                    <span>Browse Videos</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1 transition-transform group-hover/link:translate-x-1 shrink-0" />
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
