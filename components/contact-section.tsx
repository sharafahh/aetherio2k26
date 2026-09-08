import React from 'react';
import { Flame, MapPin } from 'lucide-react';
import { SYMPOSIUM_METADATA } from '@/lib/data/events';

/**
 * Bottom-of-page campus block (keeps #contact so navbar / footer links still work).
 *
 * REMOVED:
 * - Enquiry / inquiry form (name, email, phone, topic, message table)
 * - Individual coordinator / faculty contact details
 * - Institution contact cards (email, helpdesk copy, presenter directory)
 *
 * REPLACED:
 * - Previous maps.app text link with an embedded geographic map of
 *   Aalim Muhammed Salegh College of Engineering
 */
export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="campus-map-heading"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-red-500/10"
    >
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-4">
          <Flame className="w-3.5 h-3.5 text-orange-500" />
          <span>CAMPUS LOCATION</span>
        </div>
        <h2 id="campus-map-heading" className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Find <span className="text-gradient">Aalim Muhammed Salegh College of Engineering</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base mt-3">
          The symposium is hosted on this campus. Use the map below to get directions.
        </p>
      </div>

      {/* Geographic map replacement — interactive embed, no contact directory */}
      <figure className="campus-map">
        <iframe
          className="campus-map__frame"
          title="Geographic map of Aalim Muhammed Salegh College of Engineering"
          src={SYMPOSIUM_METADATA.campusMapEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <figcaption className="campus-map__caption">
          <MapPin className="h-4 w-4 shrink-0 text-red-400" aria-hidden="true" />
          <a
            href={SYMPOSIUM_METADATA.venueMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-300 underline-offset-4 hover:text-red-400 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Open this campus in Google Maps
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
