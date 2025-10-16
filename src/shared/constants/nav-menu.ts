import { Route } from "next";
import { PAGE_ROUTES } from "./page-routes";

type NavMenu = {
    label: string;
    href: Route;
    subMenu?: NavMenu[];
}

export const NAV_MENU: NavMenu[] = [
    {
        label: 'Home',
        href: PAGE_ROUTES.HOME,
    },
    {
        label: 'Mission',
        href: PAGE_ROUTES.MISSIONS,
    },
    {
        label: 'Real Estate',
        href: '#',
        subMenu: [
            {
                label: 'Agent',
                href: '#',
            },
            {
                label: 'Agencies',
                href: '#',
            },
            {
                label: 'Developers',
                href: '#',
            },
            {
                label: 'Properties',
                href: '#',
            },
            {
                label: 'Projects',
                href: '#',
            },
            {
                label: 'Events',
                href: '#',
            },
            {
                label: 'Services',
                href: '#',
            },
        ],
    },
    {
        label: 'Agent Portal',
        href: '#',
    },
    {
        label: 'About',
        href: '#',
    },
    {
        label: 'Contact',
        href: '#',
    },
] as const