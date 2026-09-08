'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  EventItem,
  EventCategoryId,
  EventCategorySection,
  EVENT_CATEGORY_SECTIONS,
  EVENTS_DATA,
  getEventsByCategory,
} from '@/lib/data/events';
import EventModal from './event-modal';
import {
  Cpu,
  Terminal,
  Presentation,
  Palette,
  Gamepad2,
  Film,
  Mic2,
  Dumbbell,
  Sparkles,
  Clock,
  Users,
  ChevronRight,
  Flame,
  RotateCcw,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />,
  Presentation: <Presentation className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Film: <Film className="w-5 h-5" />,
  Mic2: <Mic2 className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

const CATEGORY_LABEL: Record<EventItem['category'], string> = {
  technical: 'Technical',
  'non-technical': 'Non-Technical',
  'e-sports': 'E-Sports',
};

function categoryTone(category: EventItem['category']) {
  if (category === 'technical') return 'technical';
  if (category === 'e-sports') return 'esports';
  return 'nontechnical';
}

function EventShowcaseCard({
  event,
  index,
  onOpen,
}: {
  event: EventItem;
  index: number;
  onOpen: (event: EventItem) => void;
}) {
  const [flipped, setFlipped] = useState(false);
  const tone = categoryTone(event.category);
  const toggleFlip = () => setFlipped((prev) => !prev);

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="event-flip-scene h-[300px] sm:h-[318px]"
    >
      <div className={`event-flip-inner ${flipped ? 'is-flipped' : ''}`}>
        <button
          type="button"
          onClick={toggleFlip}
          aria-pressed={flipped}
          aria-label={`Flip ${event.title} to see details`}
          data-tone={tone}
          className="event-flip-face event-card-shell group flex h-full w-full flex-col items-start overflow-hidden rounded-2xl p-5 text-left sm:p-6"
        >
          <span className={`event-cat-badge event-cat-badge--${tone}`}>
            {CATEGORY_LABEL[event.category]}
          </span>
          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-transform duration-300 group-hover:scale-110">
            {iconMap[event.iconName] || <Flame className="w-5 h-5" />}
          </div>
          <h3 className="mt-auto max-w-full pr-2 text-xl font-black tracking-wide text-white sm:text-2xl">
            {event.title}
          </h3>
          <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
            Flip for time &amp; team
          </p>
        </button>

        <div
          role="button"
          tabIndex={flipped ? 0 : -1}
          onClick={toggleFlip}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleFlip();
            }
          }}
          aria-label={`Flip ${event.title} back to name`}
          data-tone={tone}
          className="event-flip-face event-flip-back event-card-shell flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-5 sm:p-6"
        >
          <div>
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-black tracking-wide text-white">{event.title}</h3>
              <span className="shrink-0 rounded-lg border border-white/10 bg-white/[0.05] p-1.5 text-slate-200">
                <RotateCcw className="h-3.5 w-3.5" />
              </span>
            </div>
            <span className={`event-cat-badge event-cat-badge--${tone}`}>{CATEGORY_LABEL[event.category]}</span>
            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-200">
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
                <span>{event.time}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Users className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <span>{event.teamSize}</span>
              </li>
            </ul>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(event);
            }}
            className="relative mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.05] py-2.5 px-3 text-xs font-semibold text-white transition-all duration-300 hover:border-red-400/40 hover:bg-white/[0.09] hover:shadow-[0_0_18px_rgba(230,0,26,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <span>View Full Details</span>
            <ChevronRight className="h-3.5 w-3.5 text-red-400" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

function EventListingSection({
  category,
  events,
  isActive,
  onOpen,
}: {
  category: EventCategorySection;
  events: EventItem[];
  isActive: boolean;
  onOpen: (event: EventItem) => void;
}) {
  if (events.length === 0) return null;

  const headingId = `${category.slug}-heading`;

  return (
    <section
      id={category.slug}
      tabIndex={-1}
      aria-labelledby={headingId}
      className={`event-listing-section space-y-6 ${isActive ? 'is-active' : ''}`}
    >
      <header className="flex flex-col items-start justify-between gap-2 border-b border-red-500/20 pb-3 sm:flex-row sm:items-end">
        <div>
          <h3 id={headingId} className="text-2xl font-black tracking-tight text-white sm:text-3xl">
            {category.title}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200">
            {events.length} events
          </p>
        </div>
      </header>
      <div className={category.gridClass}>
        {events.map((event, index) => (
          <EventShowcaseCard key={event.id} event={event} index={index} onOpen={onOpen} />
        ))}
      </div>
    </section>
  );
}

/**
 * Event handling flow:
 * 1. User activates a category card (click / Enter).
 * 2. handleCategoryNavigate records the active id, updates the hash, and smooth-scrolls to the listing <section>.
 * 3. Listings stay on the page (not replaced) so all three tracks remain reachable; the matching section is highlighted.
 * 4. Deep links (#events-technical, #events-non-technical, #events-esports) hydrate the same active state on load / hashchange.
 */
function CategoryNavigator({
  activeCategory,
  onNavigate,
}: {
  activeCategory: EventCategoryId | null;
  onNavigate: (category: EventCategorySection) => void;
}) {
  return (
    <nav aria-label="Event categories" className="event-category-nav mb-16">
      {EVENT_CATEGORY_SECTIONS.map((category) => {
        const count = getEventsByCategory(category.id).length;
        const isActive = activeCategory === category.id;

        return (
          <a
            key={category.id}
            href={`#${category.slug}`}
            data-accent={category.accent}
            aria-current={isActive ? 'true' : undefined}
            className={`event-category-card ${isActive ? 'is-active' : ''}`}
            onClick={(event) => {
              event.preventDefault();
              onNavigate(category);
            }}
          >
            <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.05] text-red-300">
              {iconMap[category.iconName] || <Flame className="w-5 h-5" />}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-orange-200/90">
              {count} events
            </span>
            <span className="mt-2 text-xl font-black tracking-tight text-white">{category.title}</span>
            <span className="mt-2 text-sm leading-relaxed text-slate-200">{category.description}</span>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
              View listings
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          </a>
        );
      })}
    </nav>
  );
}

export default function EventExplorer() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<EventCategoryId | null>(null);

  const syncCategoryFromHash = useCallback(() => {
    const hash = window.location.hash.replace('#', '');
    const matched = EVENT_CATEGORY_SECTIONS.find((category) => category.slug === hash);
    setActiveCategory(matched ? matched.id : null);
  }, []);

  useEffect(() => {
    syncCategoryFromHash();
    window.addEventListener('hashchange', syncCategoryFromHash);
    return () => window.removeEventListener('hashchange', syncCategoryFromHash);
  }, [syncCategoryFromHash]);

  const handleCategoryNavigate = useCallback((category: EventCategorySection) => {
    setActiveCategory(category.id);

    const listing = document.getElementById(category.slug);
    if (listing) {
      listing.scrollIntoView({ behavior: 'smooth', block: 'start' });
      listing.focus({ preventScroll: true });
    }

    if (window.history.replaceState) {
      window.history.replaceState(null, '', `#${category.slug}`);
    } else {
      window.location.hash = category.slug;
    }
  }, []);

  return (
    <div id="events" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-orange-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono text-slate-200 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>11 ARENAS · 3 TRACKS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Explore All <span className="text-gradient">AETHERION Events</span>
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
          Five technical arenas, four non-technical challenges, and two esports titles. Check each game’s squad size before you lock in.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
          Pick a track, then flip a card for time and team size
        </p>
      </div>

      <CategoryNavigator activeCategory={activeCategory} onNavigate={handleCategoryNavigate} />

      <div className="space-y-16">
        {EVENT_CATEGORY_SECTIONS.map((category) => (
          <EventListingSection
            key={category.id}
            category={category}
            events={getEventsByCategory(category.id, EVENTS_DATA)}
            isActive={activeCategory === category.id}
            onOpen={setSelectedEvent}
          />
        ))}
      </div>

      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
}
