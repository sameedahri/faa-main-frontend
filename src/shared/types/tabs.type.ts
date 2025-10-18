import { FEATURED_PROFESSIONALS_TAB } from "@/constants/tabs";

export type FeaturedTabType = (typeof FEATURED_PROFESSIONALS_TAB)[keyof typeof FEATURED_PROFESSIONALS_TAB]["value"];