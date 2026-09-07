import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, MapPin, Users, IndianRupee, User, Phone } from 'lucide-react';
import Navbar from '@/components/navbar';
import BackButton from '@/components/ui/back-button';
import { EVENTS_DATA } from '@/lib/data/events';

export function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({ slug: event.slug }));
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = EVENTS_DATA.find((item) => item.slug === params.slug);
  if (!event) return notFound();

  const coordinator = event.coordinators[0];
  const prizeSummary = event.prizes.overall || [event.prizes.first, event.prizes.second, event.prizes.third].filter(Boolean).join(' / ');

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />

      <div className="py-12 max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <BackButton href="/#events" label="Back to Events" />
        </div>
        <div className="bg-[#111118] border border-[#1e1e2e] rounded-xl overflow-hidden">
          <div className="h-48 bg-gradient-to-r from-[#312e81] to-[#4f46e5] flex items-center justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{event.title}</h1>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="bg-[#4f46e5]/10 text-[#818cf8] px-3 py-1 rounded-lg text-sm font-semibold">
                {event.category}
              </span>
              {event.fee === 0 && (
                <span className="bg-[#10b981]/10 text-[#34d399] px-3 py-1 rounded-lg text-sm font-semibold">
                  Free Entry
                </span>
              )}
            </div>

            <p className="text-[#d1d5db] text-lg mb-8 leading-relaxed">{event.fullDesc}</p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <div className="flex items-center text-[#d1d5db]">
                  <Calendar className="w-5 h-5 mr-3 text-[#4f46e5]" />
                  {event.date}
                </div>
                <div className="flex items-center text-[#d1d5db]">
                  <MapPin className="w-5 h-5 mr-3 text-[#4f46e5]" />
                  {event.venue}
                </div>
                <div className="flex items-center text-[#d1d5db]">
                  <Users className="w-5 h-5 mr-3 text-[#4f46e5]" />
                  {event.teamSize}
                </div>
              </div>

              <div className="space-y-4">
                {coordinator && (
                  <div className="flex items-center text-[#d1d5db]">
                    <User className="w-5 h-5 mr-3 text-[#4f46e5]" />
                    Coordinator: {coordinator.name}
                  </div>
                )}
                {coordinator?.phone && (
                  <div className="flex items-center text-[#d1d5db]">
                    <Phone className="w-5 h-5 mr-3 text-[#4f46e5]" />
                    {coordinator.phone}
                  </div>
                )}
                {prizeSummary && (
                  <div className="text-[#d1d5db]">
                    <span className="font-semibold text-white">Prizes:</span> {prizeSummary}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#1e1e2e]">
              <div className="text-3xl font-bold text-white flex items-center">
                <IndianRupee className="w-7 h-7" />
                {event.fee === 0 ? 'Free' : event.fee}
              </div>

              <Link
                href="/register"
                className="px-8 py-3 rounded-lg font-semibold transition bg-[#4f46e5] text-white hover:bg-[#4338ca]"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
