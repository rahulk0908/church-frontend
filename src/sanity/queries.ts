export const fetchTimelinesQuery = `
*[_type == "timeline"]{
  year,
  headline,
  description
} | order(year asc)
`;

export const fetchPostsQuery = `
*[_type == "post"]{
  tag,
  headline,
  date,
  description
} | order(date desc)
`;

export const fetchLeadershipQuery = `
*[_type == "leadership"] | order(order asc){
  name,
  designation,
  description,
  phone
}
`;

export const fetchImagesQuery = `
*[_type == "galleryImage"]{
  "url": image.asset->url
}
`;

export const fetchBibleVersesQuery = `
*[_type == "bibleVerse"]{
  book,
  verse
}
`;

export const fetchHeroImageQuery = `
*[_type == "churchHeroImage"][0]{
  image,
  alt
}
`;
