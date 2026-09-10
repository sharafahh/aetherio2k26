export interface ScheduleItem {
  time: string;
  type: "general" | "technical" | "non-technical" | "keynote" | "special";
  venue: string;
  title: string;
}

export const scheduleItems: ScheduleItem[] = [
  {
    time: "08:30 AM - 09:30 AM",
    type: "general",
    venue: "AI and DS Block",
    title: "Grand Check-in, Delegate Kit Distribution & Breakfast",
  },
  {
    time: "09:30 AM - 10:15 AM",
    type: "keynote",
    venue: "AI and DS Block",
    title: "AMSphere Presents AETHERION'26 Inaugural Ceremony",
  },
  {
    time: "10:15 AM - 12:30 PM",
    type: "technical",
    venue: "AI and DS Block",
    title: "PPT (Paper Presentation)",
  },
  {
    time: "10:30 AM - 12:30 PM",
    type: "technical",
    venue: "AI and DS Block",
    title: "Neural Quest",
  },
  {
    time: "10:30 AM - 01:30 PM",
    type: "non-technical",
    venue: "AI and DS Block",
    title: "E-Sports: Free Fire & E-Football Tournaments",
  },
  {
    time: "10:30 AM - 12:30 PM",
    type: "technical",
    venue: "AI and DS Block",
    title: "Reverse Engineering (Code Debugging)",
  },
  {
    time: "11:00 AM - 01:30 PM",
    type: "technical",
    venue: "AI and DS Block",
    title: "AI Web Sprint",
  },
  {
    time: "11:30 AM - 01:00 PM",
    type: "non-technical",
    venue: "AI and DS Block",
    title: "Film Hunt: Mystery Clue Trail",
  },
  {
    time: "11:30 AM - 01:00 PM",
    type: "non-technical",
    venue: "AI and DS Block",
    title: "Creative Quest",
  },
  {
    time: "01:00 PM - 02:00 PM",
    type: "general",
    venue: "AI and DS Block",
    title: "Networking & Buffet Lunch Break",
  },
  {
    time: "02:00 PM - 03:30 PM",
    type: "non-technical",
    venue: "AI and DS Block",
    title: "Voice & Noise Auditory & Foley Showdown",
  },
  {
    time: "02:00 PM - 03:30 PM",
    type: "non-technical",
    venue: "AI and DS Block",
    title: "Wrong Answers Only",
  },
  {
    time: "02:00 PM - 04:00 PM",
    type: "technical",
    venue: "AI and DS Block",
    title: "AI Escape Room: Reverse Engineering Contest",
  },
  {
    time: "05:00 PM - 06:00 PM",
    type: "general",
    venue: "AI and DS Block",
    title: "Valedictory, Grand Award Ceremony & Cash Prize Distribution",
  },
];

export const scheduleFilters = [
  { label: "All", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
  { label: "Special", value: "special" },
];
