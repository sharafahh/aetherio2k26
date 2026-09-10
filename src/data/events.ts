export interface Event {
  id: string;
  title: string;
  description: string;
  category: "technical" | "non-technical" | "e-sports";
  time: string;
  venue: string;
  teamSize: string;
  passFee: string;
  prize?: string;
}

export const events: Event[] = [
  {
    id: "neural-quest",
    title: "NEURAL QUEST",
    description:
      "A 4-round event testing your AI knowledge, observation, and creativity. Think smart, spot the AI, and prompt like a pro!",
    category: "technical",
    time: "10:30 AM - 12:30 PM",
    venue: "AI and DS Block",
    teamSize: "2 Members",
    passFee: "₹150 for All",
  },
  {
    id: "ai-escape-room",
    title: "AI ESCAPE ROOM",
    description:
      "Solve AI-based puzzles, clues, and challenges to escape before the allotted time expires.",
    category: "technical",
    time: "02:00 PM - 04:00 PM",
    venue: "AI and DS Block",
    teamSize: "2-3 Members",
    passFee: "₹150 for All",
  },
  {
    id: "ppt",
    title: "PPT (Paper Presentation)",
    description:
      "Present your visionary technical papers, research publications, or novel engineering ideas before an esteemed panel of experts.",
    category: "technical",
    time: "10:15 AM - 12:30 PM",
    venue: "AI and DS Block",
    teamSize: "1-3 Members",
    passFee: "₹150 for All",
  },
  {
    id: "ai-web-sprint",
    title: "AI WEB SPRINT",
    description:
      "Participants receive a problem statement and must create the best frontend website using AI tools within the given time limit.",
    category: "technical",
    time: "11:00 AM - 01:30 PM",
    venue: "AI and DS Block",
    teamSize: "2-4 Members",
    passFee: "₹150 for All",
  },
  {
    id: "code-debugging",
    title: "CODE DEBUGGING",
    description:
      "One Code. Many Bugs. One Winner! Participants receive a program with intentional errors and must fix as many bugs as possible within the time limit without internet or AI tools.",
    category: "technical",
    time: "10:30 AM - 12:30 PM",
    venue: "AI and DS Block",
    teamSize: "Solo (1 Player)",
    passFee: "₹150 for All",
  },
  {
    id: "free-fire",
    title: "FREE FIRE TOURNAMENT",
    description:
      "Battle Royale Qualifier → Clash Squad Final. The top two teams from the Battle Royale points table qualify for the Clash Squad Final.",
    category: "e-sports",
    time: "10:30 AM - 01:30 PM",
    venue: "AI and DS Block",
    teamSize: "Squad (4 Players)",
    passFee: "₹150 for All",
  },
  {
    id: "film-hunt",
    title: "FILM HUNT",
    description:
      "Film Hunt is a movie and music-based challenge testing participants' knowledge.",
    category: "non-technical",
    time: "11:30 AM - 01:00 PM",
    venue: "AI and DS Block",
    teamSize: "2 Members",
    passFee: "₹150 for All",
    prize: "₹1000",
  },
  {
    id: "voice-noise",
    title: "VOICE & NOISE GAME",
    description:
      "The Guesser must identify words by watching the Speaker's lips while wearing headphones with loud music.",
    category: "non-technical",
    time: "02:00 PM - 03:30 PM",
    venue: "AI and DS Block",
    teamSize: "Teams/Pairs",
    passFee: "₹150 for All",
    prize: "₹1000",
  },
  {
    id: "creative-quest",
    title: "CREATIVE QUEST",
    description:
      "Team Format: 2–4 members. Features 2 creative challenges (Switch-a-Sketch & Touch and Feel) where participants switch roles and perspectives.",
    category: "non-technical",
    time: "11:30 AM - 01:00 PM",
    venue: "AI and DS Block",
    teamSize: "2-4 Members",
    passFee: "₹150 for All",
    prize: "₹1000",
  },
  {
    id: "wrong-answers",
    title: "WRONG ANSWERS ONLY",
    description:
      "Think Wrong. Answer Fast. Don't Be Correct! Team Format: 2 participants. Features 3 fun-filled rounds where participants must give only wrong or funny answers. Giving the correct answer leads to elimination.",
    category: "non-technical",
    time: "02:00 PM - 03:30 PM",
    venue: "AI and DS Block",
    teamSize: "2 Members",
    passFee: "₹150 for All",
    prize: "₹1000",
  },
  {
    id: "e-football",
    title: "E-FOOTBALL",
    description:
      "E-Football esports tournament featuring a knockout format with Dream Teams.",
    category: "e-sports",
    time: "10:30 AM - 01:30 PM",
    venue: "AI and DS Block",
    teamSize: "Solo (1 Player)",
    passFee: "₹150 for All",
  },
];

export const eventFilters = [
  { label: "All Tracks", value: "all" },
  { label: "Technical", value: "technical" },
  { label: "Non-Technical", value: "non-technical" },
  { label: "E-Sports", value: "e-sports" },
];
