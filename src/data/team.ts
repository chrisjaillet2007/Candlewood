/**
 * Founder photos, defined once and reused everywhere a portrait appears
 * (the homepage teaser and the About page). To add a real photo: save it
 * under `public/team/`, e.g. `public/team/annmarie.jpg`, then set the path
 * below. Leave a value unset to keep that portrait's generative placeholder
 * plate — nothing else needs to change.
 */
export const TEAM_PHOTOS: { annmarie?: string; lauren?: string } = {
  annmarie: undefined,
  lauren: undefined,
};

/**
 * The wide "in the studio" shot used at the top of the About page. Same
 * rule: save a file under `public/team/`, set the path, or leave unset.
 */
export const ABOUT_HERO_PHOTO: string | undefined = undefined;
