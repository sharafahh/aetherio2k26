export interface RuleSection {
  title: string;
  items: string[];
}

export const ruleSections: RuleSection[] = [
  {
    title: "General Symposium Guidelines",
    items: [
      "All participants must produce a valid College/Institution Identity Card at the registration reception.",
      "Participants must maintain high standards of discipline and decorum across all campus venues.",
      "Registration fees once paid are strictly non-refundable and non-transferable.",
      "Any damage to institution computing hardware or event facilities will result in immediate disqualification and liability.",
      "The decisions of the Organizers, Jury, and Event Coordinators are final in all matters of dispute.",
    ],
  },
  {
    title: "Technical Event Rules",
    items: [
      "No external assistance or AI tools permitted during debugging rounds.",
      "Papers must be original work and properly cited.",
      "Teams must present within allocated time slots.",
    ],
  },
  {
    title: "Non-Technical & E-Sports Rules",
    items: [
      "Game accounts must be personal and valid.",
      "Teams must check in 15 minutes before match time.",
      "Unsportsmanlike conduct leads to immediate disqualification.",
    ],
  },
  {
    title: "Payment & UTR Verification Rules",
    items: [
      "Payment must be completed via the official registration portal.",
      "UTR number is mandatory for verification.",
      "Confirm registration status with the helpdesk after payment.",
    ],
  },
];

export const certificateNote = {
  technical: {
    label: "Technical Event Only",
    status: "Certificate Provided",
    description: "Official Certificate of Participation will be provided.",
  },
  nonTechnical: {
    label: "Non-Technical Event Only",
    status: "No Certificate",
    description: "No certificate will be provided for non-technical events only.",
  },
  both: {
    label: "Both Technical + Non-Technical",
    status: "Certificate Provided",
    description: "Official Certificate of Participation will be provided.",
  },
};
