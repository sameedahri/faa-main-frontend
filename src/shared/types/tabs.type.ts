import { FEATURED_PROFESSIONALS_TAB, SEARCH_TAB } from "@/constants/tabs";

export type FeaturedTabType = (typeof FEATURED_PROFESSIONALS_TAB)[keyof typeof FEATURED_PROFESSIONALS_TAB]["value"];

export type SearchTabType = (typeof SEARCH_TAB)[keyof typeof SEARCH_TAB]["value"];