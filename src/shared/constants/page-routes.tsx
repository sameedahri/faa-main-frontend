import { Route } from "next";

export const PAGE_ROUTES = {
    HOME: '/',
    MISSIONS: '/missions',
    SEARCH: '/search',
    AGENT_DETAILS: (agentId: string) => `/agent/${agentId}` as Route,
} as const