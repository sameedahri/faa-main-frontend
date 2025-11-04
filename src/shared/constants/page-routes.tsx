import { Route } from "next";

export const PAGE_ROUTES = {
    HOME: '/',
    MISSIONS: '/missions',
    SEARCH: '/search',
} as const satisfies Record<string, Route>