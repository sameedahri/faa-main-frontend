import { Route } from "next";

export const PAGE_ROUTES = {
    HOME: '/',
    MISSIONS: '/missions',
    SEARCH: '/search',
    AGENT_DETAILS: (agentId: string) => `/agent/${agentId}` as Route,
    PROPERTY_DETAILS: (propertyId: string) => `/property/${propertyId}` as Route,
    AGENCY_DETAILS: (agencyId: string) => `/agency/${agencyId}` as Route,
    AI_AGENT_DETAILS: (aiAgentId: string) => `/ai-agents/${aiAgentId}` as Route,
} as const