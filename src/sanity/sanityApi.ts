import { sanityClient } from "./client";
import {
  fetchTimelinesQuery,
  fetchPostsQuery,
  fetchLeadershipQuery,
  fetchImagesQuery,
  fetchBibleVersesQuery,
} from "./queries";
export const fetchTimelines = () => sanityClient.fetch(fetchTimelinesQuery);

export const fetchPosts = () => sanityClient.fetch(fetchPostsQuery);

export const fetchLeadership = () => sanityClient.fetch(fetchLeadershipQuery);

export const fetchImages = () => sanityClient.fetch(fetchImagesQuery);

export const fetchBibleVerses = () => sanityClient.fetch(fetchBibleVersesQuery);
