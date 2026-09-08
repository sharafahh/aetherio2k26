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
  MapPin,
  Users,
  IndianRupee,
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
  const isTechnical = event.category === 'technical';
  const isEsports = event.category === 'e-sports';

  const accentBorder = isTechnical
    ? 'border-red-500/25 hover:border-red-400/70 hover:shadow-[0_16px_40px_-12px_rgba(230,0,26,0.45)]'
    : isEsports
      ? 'border-orange-500/25 hover:border-orange-400/70 hover:shadow-[0_16px_40px_-12px_rgba(249,115,22,0.4)]'
      : 'border-amber-500/20 hover:border-amber-400/60 hover:shadow-[0_16px_40px_-12px_rgba(245,158,11,0.35)]';

  const iconWrap = isTechnical
    ? 'border-red-500/30 bg-red-500/15 text-red-300'
    : isEsports
      ? 'border-orange-500/30 bg-orange-500/15 text-orange-300'
      : 'border-amber-500/30 bg-amber-500/15 text-amber-300';

  const badge = isTechnical
    ? 'border-red-500/30 bg-red-500/10 text-red-200'
    : isEsports
      ? 'border-orange-500/30 bg-orange-500/10 text-orange-200'
      : 'border-amber-500/30 bg-amber-500/10 text-amber-200';

  const toggleFlip = () => setFlipped((prev) => !prev);

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={flipped ? undefined : { y: -6 }}
      className="event-flip-scene h-[300px] sm:h-[320px]"
    >
      <div className={`event-flip-inner ${flipped ? 'is-flipped' : ''}`}>
        <button
          type="button"
          onClick={toggleFlip}
          aria-pressed={flipped}
          aria-label={`Flip ${event.title} to see details`}
          className={`event-flip-face event-card-shell group flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 text-center ${accentBorder}`}
        >
          <div
            className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${
              isTechnical ? 'bg-red-600/20 opacity-60' : 'bg-orange-500/20 opacity-50'
            }`}
          />
          <div
            className={`relative mb-5 flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconWrap}`}
          >
            {iconMap[event.iconName] || <Flame className="w-5 h-5" />}
          </div>
          <span className={`relative mb-3 rounded-full border px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ${badge}`}>
            {CATEGORY_LABEL[event.category]}
          </span>
          <h3 className="relative px-2 text-xl font-black tracking-wide text-white transition-colors group-hover:text-red-200 sm:text-2xl">
            {event.title}
          </h3>
          <p className="relative mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-orange-200/80">
            Click to swap for details
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
          className={`event-flip-face event-flip-back event-card-shell flex h-full w-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border p-5 sm:p-6 ${accentBorder}`}
        >
          <div className="relative min-h-0 flex-1">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="text-lg font-black tracking-wide text-white">{event.title}</h3>
              <span className="shrink-0 rounded-lg border border-white/15 bg-white/[0.05] p-1.5 text-slate-200">
                <RotateCcw className="h-3.5 w-3.5" />
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-200 line-clamp-3">
              {event.shortDesc}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-2 border-t border-white/10 pt-3 text-[12px] text-slate-200 sm:grid-cols-2">
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 shrink-0 text-red-400" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-400" />
                <span>{event.venue}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 shrink-0 text-red-300" />
                <span>{event.teamSize}</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold text-white">
                <IndianRupee className="h-3.5 w-3.5 shrink-0 text-orange-300" />
                <span>₹150 / person · ₹300 team (2–3)</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onOpen(event);
            }}
            className="relative mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/[0.05] py-2.5 px-3 text-xs font-semibold text-white transition-colors hover:border-red-400/40 hover:bg-white/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-300 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
          <span>11 ARENAS • ₹150 / PERSON · ₹300 TEAM (2–3)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Explore All <span className="text-gradient">AETHERION Events</span>
        </h2>
        <p className="text-slate-200 text-sm sm:text-base mt-3 leading-relaxed">
          Five technical arenas, four non-technical challenges, and two e-sports titles. ₹150 per person, or ₹300 for a team of 2–3. For specific games, look into the required members and decide what you want to join.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-orange-200/80">
          Choose a category, then click a card to swap and reveal details
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
