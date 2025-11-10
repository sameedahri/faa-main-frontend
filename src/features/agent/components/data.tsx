import { agent } from "@/shared/constants/images"
import { AgentReviewCardProps } from "./agent-review-card"
import { AgentServiceCardProps } from "./agent-service-card"
import { PropertyCardProps } from "@/features/search/components/property-card"

export const AGENT_REVIEWS: AgentReviewCardProps[] = [
    {
        name: "John Doe",
        review: "Absolutely outstanding service! The agent went above and beyond to find me the perfect property in Downtown Dubai. Their knowledge of the market, attention to detail, and negotiation skills saved me both time and money. Highly professional and always responsive. I couldn't have asked for a better experience!",
        rating: 5,
        date: "2021-01-01",
    },
    {
        name: "Jane Doe",
        review: "Great experience overall. The agent was knowledgeable and helped me find a beautiful apartment in Dubai Marina. The process was smooth and they were always available to answer my questions. Only minor issue was some delays in paperwork, but everything worked out in the end. Would definitely recommend!",
        rating: 4,
        date: "2021-01-02",
    },
    {
        name: "Jim Doe",
        review: "Decent service, but there's room for improvement. The agent showed me several properties and was generally helpful, but I felt the communication could have been better. Some viewings were not well organized and I had to follow up multiple times. Eventually found a property that works for me.",
        rating: 3,
        date: "2021-01-03",
    },
    {
        name: "Jill Doe",
        review: "Disappointed with the service. The agent seemed more interested in closing deals quickly rather than understanding my needs. Several properties shown were not what I asked for, and there was a lack of transparency about additional fees. Expected better professionalism.",
        rating: 2,
        date: "2021-01-04",
    },
    {
        name: "Jack Doe",
        review: "Very poor experience. The agent was unprofessional, frequently late for viewings, and provided inaccurate information about properties. When issues arose, they were unresponsive and unhelpful. Had to find another agent to complete my property search. Would not recommend.",
        rating: 1,
        date: "2021-01-05",
    },
    {
        name: "Sarah Ahmed",
        review: "Not satisfied with the level of service. While the agent was polite, they lacked knowledge about the areas I was interested in and couldn't answer basic questions about the properties. The follow-up was inconsistent and I felt my concerns weren't taken seriously.",
        rating: 2,
        date: "2021-01-06",
    },
    {
        name: "Michael Chen",
        review: "Extremely unprofessional and unreliable. Appointments were cancelled last minute without proper explanation, and the agent showed properties that were completely out of my budget despite clear instructions. Wasted several weeks before switching to another agent. Not recommended at all.",
        rating: 1,
        date: "2021-01-07",
    },
]

export const AGENT_SERVICES: AgentServiceCardProps[] = [
    {
        title: "Property Inspection",
        description: "Comprehensive property inspection service covering structural integrity, electrical systems, plumbing, and overall condition assessment.",
        price: 1000,
        image: agent.agentImage1,
    },
    {
        title: "Property Valuation",
        description: "Professional property valuation based on current market trends, comparable sales, and location analysis for accurate pricing.",
        price: 1500,
        image: agent.agentImage1,
    },
    {
        title: "Home Staging Consultation",
        description: "Expert advice on preparing your property for sale including furniture arrangement, decor suggestions, and presentation tips.",
        price: 800,
        image: agent.agentImage1,
    },
    {
        title: "Mortgage Advisory",
        description: "Get connected with the best mortgage providers and receive guidance on financing options tailored to your budget.",
        price: 500,
        image: agent.agentImage1,
    },
    {
        title: "Legal Documentation Assistance",
        description: "Complete support with all legal paperwork including contracts, NOCs, title deeds, and transfer documentation.",
        price: 1200,
        image: agent.agentImage1,
    },
    {
        title: "Property Marketing Package",
        description: "Full marketing service including professional photography, video tours, social media promotion, and listing on premium platforms.",
        price: 2000,
        image: agent.agentImage1,
    },
    {
        title: "Virtual Property Tour",
        description: "High-quality 3D virtual tours and video walkthroughs allowing buyers to explore properties remotely.",
        price: 750,
        image: agent.agentImage1,
    },
    {
        title: "Relocation Services",
        description: "Complete relocation support including area tours, school information, utility setup, and community orientation.",
        price: 1800,
        image: agent.agentImage1,
    },
    {
        title: "Investment Consultation",
        description: "Strategic investment advice on property portfolios, ROI analysis, rental yield projections, and market opportunities.",
        price: 2500,
        image: agent.agentImage1,
    },
    {
        title: "Property Management Setup",
        description: "Assistance with setting up property management including tenant screening, lease agreements, and maintenance coordination.",
        price: 1500,
        image: agent.agentImage1,
    },
]

export const PROPERTY_CARDS: PropertyCardProps[] = [
    {
        title: "Luxury Villa in Palm Jumeirah",
        price: 100000,
        location: "Palm Jumeirah, Dubai",
        bedrooms: 3,
        bathrooms: 2,
        area: 1000,
    },
    {
        title: "Modern Apartment in Downtown Dubai",
        price: 200000,
        location: "Downtown Dubai, Dubai",
        bedrooms: 4,
        bathrooms: 3,
        area: 1500,
    },
    {
        title: "Spacious Townhouse in Arabian Ranches",
        price: 300000,
        location: "Arabian Ranches, Dubai",
        bedrooms: 5,
        bathrooms: 4,
        area: 2000,
    },
    {
        title: "Penthouse in Dubai Marina",
        price: 400000,
        location: "Dubai Marina, Dubai",
        bedrooms: 6,
        bathrooms: 5,
        area: 2500,
    },
    {
        title: "Beachfront Villa in Jumeirah Beach Residence",
        price: 500000,
        location: "Jumeirah Beach Residence, Dubai",
        bedrooms: 7,
        bathrooms: 6,
        area: 3000,
    },
    {
        title: "Contemporary Apartment in Business Bay",
        price: 600000,
        location: "Business Bay, Dubai",
        bedrooms: 8,
        bathrooms: 7,
        area: 3500,
    },
    {
        title: "Elegant Villa in Emirates Hills",
        price: 700000,
        location: "Emirates Hills, Dubai",
        bedrooms: 9,
        bathrooms: 8,
        area: 4000,
    },
]