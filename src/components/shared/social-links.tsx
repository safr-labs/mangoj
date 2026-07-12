import * as React from 'react';
import { Mail } from 'lucide-react';
import { clsx } from 'clsx';
import { socialLinks } from '@/data/social-links';

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize?: number;
}

export function SocialLinks({ iconSize = 20, className, ...props }: SocialLinksProps) {
  return (
    <div className={clsx('flex items-center gap-4', className)} {...props}>
      {socialLinks.map((link) => {
        return (
          <a
            key={link.platform}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-md p-1"
            aria-label={`Visit Mango J on ${link.label}`}
          >
            {link.platform === 'youtube' && (
              <svg
                viewBox="0 0 24 24"
                width={iconSize}
                height={iconSize}
                fill="currentColor"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            )}
            {link.platform === 'instagram' && (
              <svg
                viewBox="0 0 24 24"
                width={iconSize}
                height={iconSize}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            )}
            {link.platform === 'facebook' && (
              <svg
                viewBox="0 0 24 24"
                width={iconSize}
                height={iconSize}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
                aria-hidden="true"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            )}
            {link.platform === 'email' && (
              <Mail size={iconSize} className="shrink-0" aria-hidden="true" />
            )}
          </a>
        );
      })}
    </div>
  );
}

