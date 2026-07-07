import * as React from 'react';
import { MapPin, Video, ShieldCheck, HeartHandshake } from 'lucide-react';
import { Container } from '@/components/layout/container';

export function TrustBar() {
  const items = [
    {
      icon: MapPin,
      label: 'Location',
      text: 'Dubai, UAE',
    },
    {
      icon: Video,
      label: 'Channel',
      text: 'YouTube Creator',
    },
    {
      icon: ShieldCheck,
      label: 'Audience',
      text: 'Tamil Diaspora vlogs',
    },
    {
      icon: HeartHandshake,
      label: 'Services',
      text: 'Brand Integrations',
    },
  ];

  return (
    <section className="py-6 md:py-8 bg-muted/40 border-b border-border/40">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <item.icon className="h-5 w-5 shrink-0" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground uppercase tracking-widest leading-none mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-muted-foreground leading-none">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
