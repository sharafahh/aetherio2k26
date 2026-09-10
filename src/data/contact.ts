export interface ContactInfo {
  name: string;
  value: string;
  icon: string;
  href?: string;
}

export const contactInfo: ContactInfo[] = [
  {
    name: "Presented By",
    value: "AMSphere",
    icon: "Building2",
  },
  {
    name: "Venue",
    value: "AMS College of Engineering",
    icon: "MapPin",
    href: "https://maps.app.goo.gl/KXEwRv9tYrupnzii9?g_st=aw",
  },
  {
    name: "Email",
    value: "contact@aetherion26.org",
    icon: "Mail",
    href: "mailto:contact@aetherion26.org",
  },
  {
    name: "Response Time",
    value: "Fast responses within 4 hours",
    icon: "Clock",
  },
  {
    name: "Registration Pass",
    value: "₹150 Flat Fee (For All Events)",
    icon: "Ticket",
  },
];

export const inquiryTopics = [
  "General Inquiries",
  "Payment & UTR Verification",
  "Technical Events",
  "E-Sports Tournament",
  "Travel & Campus Navigation",
];
