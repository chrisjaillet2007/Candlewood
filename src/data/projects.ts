export type Project = {
  slug: string;
  name: string;
  location: string;
  type: string;
  description: string;
  longDescription: string;
  mood: "interior" | "detail" | "exterior";
  seed: string;
  size: "hero" | "wide" | "standard";
  /**
   * Path to the real cover photo, once one exists — e.g.
   * "/portfolio/andover-colonial/cover.jpg" for a file saved at
   * `public/portfolio/andover-colonial/cover.jpg`. Leave unset and the
   * project keeps its generative placeholder plate automatically; nothing
   * else needs to change.
   */
  image?: string;
  /**
   * Up to two additional photos shown on the project's detail page (a
   * detail shot and a secondary view). Same rule: paths under `/public`,
   * omit to keep the placeholder art for that slot.
   */
  gallery?: [string?, string?];
};

/**
 * Every portfolio project on the site. This is the file to edit when the
 * firm has a new project to add, or a real photo to swap in for a
 * placeholder — see CONTENT.md at the repo root for a full walkthrough.
 *
 * Today these are representative placeholder projects — standing in for
 * real Candlewood work until case studies exist. Names describe the town
 * and project type only (the way most design studios label in-progress or
 * anonymized work), not a specific real address or client.
 */
export const PROJECTS: Project[] = [
  {
    slug: "andover-colonial",
    name: "An Andover Colonial, Reconsidered",
    location: "Andover, MA",
    type: "Whole-Home Design",
    description:
      "A family's 1920s colonial, opened up room by room without losing its bones.",
    longDescription:
      "The clients loved their home's original moulding and proportions but felt the interior hadn't kept pace with a family of five. We reworked the flow between kitchen, dining, and family room, and carried one warm, layered palette through every space — so the house feels older than it is in the best way, and more livable than it's ever been.",
    mood: "interior",
    seed: "andover-colonial",
    size: "hero",
  },
  {
    slug: "dover-farmhouse-kitchen",
    name: "A Dover Farmhouse Kitchen",
    location: "Dover, MA",
    type: "Kitchen & Bath Design",
    description: "White oak, honed marble, and a table built for a full house.",
    longDescription:
      "This kitchen needed to hold a family of six on a school morning and a dinner party on a Saturday. We built the layout around a single long island in white oak and honed marble, with enough storage that the counters could stay clear.",
    mood: "interior",
    seed: "dover-kitchen",
    size: "standard",
  },
  {
    slug: "wellesley-primary-suite",
    name: "A Wellesley Primary Suite",
    location: "Wellesley, MA",
    type: "Room Design",
    description: "A serene retreat carved out of an oddly proportioned space.",
    longDescription:
      "The primary suite had good light and terrible proportions. A built-in window seat, a considered furniture layout, and a quiet, tonal palette turned an awkward room into the calmest one in the house.",
    mood: "interior",
    seed: "wellesley-primary",
    size: "standard",
  },
  {
    slug: "weston-new-construction",
    name: "A Weston New Build",
    location: "Weston, MA",
    type: "New Construction",
    description:
      "Interior design woven into the architecture from the first set of drawings.",
    longDescription:
      "We joined this project during framing, reviewing sightlines and ceiling heights with the architect before a single finish was chosen. The result is a new house that already feels settled.",
    mood: "exterior",
    seed: "weston-exterior",
    size: "wide",
  },
  {
    slug: "sudbury-family-room",
    name: "A Sudbury Family Room",
    location: "Sudbury, MA",
    type: "Room Design",
    description: "Slipcovered, durable, and still genuinely elegant.",
    longDescription:
      "Three kids, a dog, and a wish for a room that didn't look like it was built to survive them. We chose performance fabrics and forgiving finishes without making a single visible compromise.",
    mood: "interior",
    seed: "sudbury-family",
    size: "standard",
  },
  {
    slug: "concord-dining-room",
    name: "A Concord Dining Room",
    location: "Concord, MA",
    type: "Full-Service Interior Design",
    description: "A once-formal room the family finally wanted to use.",
    longDescription:
      "A grand but underused dining room, softened with a warmer palette, a mix of vintage and new furniture, and lighting that actually gets turned on for a Tuesday dinner, not just a holiday.",
    mood: "detail",
    seed: "concord-dining",
    size: "standard",
  },
  {
    slug: "winchester-entry",
    name: "A Winchester Entry & Stair",
    location: "Winchester, MA",
    type: "Whole-Home Design",
    description: "The first impression, finally matching the rest of the house.",
    longDescription:
      "An entry hall that had never quite been finished became the strongest room in the house — a runner, a considered light fixture, and a single striking piece of art at the landing.",
    mood: "interior",
    seed: "winchester-entry",
    size: "standard",
  },

  // To add a new project, copy this template into the array above and
  // fill it in — see CONTENT.md for the full walkthrough:
  //
  // {
  //   slug: "your-project-slug",              // used in the URL: /portfolio/your-project-slug
  //   name: "A Short, Descriptive Name",
  //   location: "Town, MA",
  //   type: "Whole-Home Design",               // also powers the portfolio filter chips
  //   description: "One sentence, shown on the portfolio grid.",
  //   longDescription: "A short paragraph, shown on the project's own page.",
  //   mood: "interior",                        // "interior" | "detail" | "exterior" — only matters until `image` is set
  //   seed: "your-project-slug",               // any unique string; keeps the placeholder art stable
  //   size: "standard",                        // "hero" | "wide" | "standard" — layout size on the homepage
  //   image: "/portfolio/your-project-slug/cover.jpg", // optional — omit to keep placeholder art
  //   gallery: ["/portfolio/your-project-slug/detail.jpg"], // optional, up to 2 photos
  // },
];
