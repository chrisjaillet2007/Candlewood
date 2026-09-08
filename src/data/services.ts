export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    slug: "full-service-interior-design",
    name: "Full-Service Interior Design",
    summary:
      "Start to finish: concept, sourcing, ordering, and installation, managed as one continuous process.",
    description:
      "This is the way most of our clients work with us. We take a project from a first conversation about how you live through to the final styling details — developing the concept, drawing floor plans and elevations, selecting every finish and fixture, managing procurement and trades, and installing the finished home. You make decisions at a pace that feels comfortable; we carry the rest.",
  },
  {
    slug: "whole-home-design",
    name: "Whole-Home Design",
    summary:
      "A cohesive design language carried through every room, so the house reads as one considered home.",
    description:
      "For clients furnishing or refreshing an entire house — often after a move or a renovation — we build a single design language that carries from the entry to the primary suite, so rooms relate to one another instead of feeling assembled one at a time.",
  },
  {
    slug: "room-design",
    name: "Room Design",
    summary:
      "A focused scope for the one or two rooms that need attention most.",
    description:
      "Sometimes it's a primary bedroom, a living room, or a home office that needs to finally come together. We scope these projects tightly — full design and sourcing for the spaces that matter most right now.",
  },
  {
    slug: "furniture-selection-procurement",
    name: "Furniture Selection & Procurement",
    summary: "Sourcing, ordering, tracking, and receiving — handled for you.",
    description:
      "We select furnishings to trade and retail sources, manage lead times and freight, and handle receiving and inspection, so nothing lands on your doorstep — or in your driveway — without us having seen it first.",
  },
  {
    slug: "color-material-selection",
    name: "Color & Material Selection",
    summary:
      "Paint, tile, stone, and textile decisions made with the whole home in mind.",
    description:
      "The decisions that feel small in isolation — a paint color, a grout line, a hardware finish — are the ones that make a home feel either cohesive or chaotic. We make these selections as a set, not one at a time.",
  },
  {
    slug: "kitchen-bath-design",
    name: "Kitchen & Bath Design",
    summary:
      "Layout, cabinetry, fixtures, and finishes for the hardest-working rooms in the house.",
    description:
      "Kitchens and bathrooms carry the most decisions per square foot of any room in the home. We work alongside your contractor or architect from layout through final fixture selection.",
  },
  {
    slug: "new-construction",
    name: "New Construction",
    summary:
      "Interior design woven into the building process from the earliest drawings.",
    description:
      "For clients building new, we join the project early — reviewing architectural plans with an eye toward how the finished interior will actually function, and carrying that thinking through millwork, finishes, and furnishings.",
  },
  {
    slug: "styling-accessories",
    name: "Styling & Accessories",
    summary: "The final layer that makes a finished room feel lived-in.",
    description:
      "Books, objects, textiles, and the small collected things that make a room feel like it belongs to you rather than a showroom. Often the last step of a larger project, and sometimes a standalone visit.",
  },
  {
    slug: "art-selection",
    name: "Art Selection",
    summary: "Scaled, sourced, and placed to finish a room properly.",
    description:
      "Art is one of the most personal — and most postponed — decisions in a home. We help clients build a collection that fits their walls, their taste, and their budget, from original pieces to considered prints.",
  },
  {
    slug: "virtual-design",
    name: "Virtual Design",
    summary: "Full design support for clients outside our regular radius.",
    description:
      "For clients further from Eastern Massachusetts, we offer a remote version of our process — video walkthroughs, digital floor plans, and curated sourcing — with the same care as an in-person project.",
  },
  {
    slug: "design-consultations",
    name: "Design Consultations",
    summary:
      "A single working session to get unstuck on a specific decision.",
    description:
      "Not every project needs a full engagement. Sometimes a homeowner just needs an experienced eye for an afternoon — a layout question, a paint palette, a piece of furniture that isn't working.",
  },
];
