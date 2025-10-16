import { Route } from "next";

export const PAGE_ROUTES = {
    HOME: '/',
    MISSIONS: '/missions',
} as const satisfies Record<string, Route>