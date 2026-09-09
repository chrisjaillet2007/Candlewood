export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body: string[];
  seed: string;
  /**
   * Path to a real cover photo, once one exists — e.g. "/journal/mudroom.jpg"
   * for a file saved at `public/journal/mudroom.jpg`. Leave unset to keep
   * the generative placeholder plate.
   */
  image?: string;
};

export const JOURNAL_POSTS: JournalPost[] = [
  {
    slug: "how-to-start-a-design-project-without-getting-overwhelmed",
    title: "How to Start a Design Project Without Getting Overwhelmed",
    category: "Design Advice",
    excerpt:
      "The first decision is never the paint color. It's deciding what you actually need the room to do.",
    body: [
      "Most design projects don't stall because a client can't choose a sofa. They stall because too many decisions arrived at once, with no order to them.",
      "Before any sourcing begins, we ask a homeowner to describe how a room is actually used on a Tuesday — not how they imagine using it, but how it really goes. That answer decides almost everything that follows: layout, storage, durability, even lighting.",
      "If you're standing at the beginning of a project on your own, start there too. The room will tell you what it needs once you're honest about how you live in it.",
    ],
    seed: "journal-1",
  },
  {
    slug: "the-new-england-palette-we-keep-returning-to",
    title: "The New England Palette We Keep Returning To",
    category: "New England Design",
    excerpt:
      "Warm white, aged wood, and just enough contrast to keep a room from going flat.",
    body: [
      "Our part of the country gives us a particular kind of light — softer and cooler than a Southern home, warmer than a Scandinavian one. The palettes that work here tend to share a few things: a warm white rather than a stark one, wood tones left honest rather than stained heavy, and a single deeper tone used sparingly for contrast.",
      "It's a quieter palette than what shows up in most shelter-magazine spreads, and that's exactly the point. It's built to be lived in for a decade, not photographed once.",
    ],
    seed: "journal-2",
  },
  {
    slug: "setting-a-table-for-real-life-not-just-holidays",
    title: "Setting a Table for Real Life, Not Just Holidays",
    category: "Entertaining",
    excerpt:
      "The dining rooms that get used most are the ones designed for a Tuesday, not just Thanksgiving.",
    body: [
      "We hear a version of the same story often: a beautiful dining room that only gets used a handful of times a year. The fix usually isn't more formality — it's less. Durable, washable linens instead of precious ones. A lighting plan with a dimmer. Seating comfortable enough for a two-hour dinner, not just a photograph.",
    ],
    seed: "journal-3",
  },
  {
    slug: "what-a-mudroom-is-actually-for",
    title: "What a Mudroom Is Actually For",
    category: "Home Inspiration",
    excerpt:
      "The hardest-working ten square feet in a New England home deserves more thought than it usually gets.",
    body: [
      "In a climate with real winters, the mudroom is doing more work than almost any other room in the house. We design them the way we'd design a kitchen — around a specific family's actual gear, not a generic idea of storage.",
    ],
    seed: "journal-4",
  },

  // To add a new post, copy this template into the array above:
  //
  // {
  //   slug: "your-post-slug",          // used in the URL: /journal/your-post-slug
  //   title: "Your Post Title",
  //   category: "Design Advice",       // New England Design | Home Inspiration | Design Advice | Materials | Entertaining | Seasonal Interiors | Behind the Scenes
  //   excerpt: "One sentence shown on the journal grid.",
  //   body: ["First paragraph.", "Second paragraph."],
  //   seed: "your-post-slug",          // any unique string; keeps the placeholder art stable
  //   image: "/journal/your-post-slug.jpg", // optional — omit to keep placeholder art
  // },
];
