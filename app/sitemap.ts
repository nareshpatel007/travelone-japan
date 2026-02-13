import { MetadataRoute } from "next";

// Get site url
const SITE_URL = process.env.SITE_URL || "https://travelone.io";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        // Fetch all dynamic data in parallel
        const [countryRes, tourRes, blogRes] = await Promise.all([
            fetch(`${process.env.API_URL}/sitemap/destination`, {
                next: { revalidate: 3600 },
            }),
            fetch(`${process.env.API_URL}/sitemap/tour`, {
                next: { revalidate: 3600 },
            }),
            fetch(`${process.env.API_URL}/sitemap/blog`, {
                next: { revalidate: 3600 },
            }),
        ]);

        // Parse data
        const countries = await countryRes.json();
        const tours = await tourRes.json();
        const blogs = await blogRes.json();

        // Static Pages
        const staticRoutes = [
            "",
            "/country",
            "/tour",
            "/about",
            "/contact",
            "/blog",
            "/faqs",
            "/careers",
            "/legal/terms-service",
            "/legal/privacy-policy",
            "/legal/refund-policy",
            "/legal/ai-transparency-disclosure",
            "/legal/impact-statement",
            "/legal/manage-my-persona",
            "/legal/accessibility-statement",
            "/legal/mors-security",
            "/legal/travel-advisory",
            "/partnership/TICO-Bhavin-Vora.pdf",
        ].map((route) => ({
            url: `${SITE_URL}${route}`,
            lastModified: new Date(),
            priority: route === "" ? 1.0 : 0.8,
        }));

        // Country Pages
        const countryRoutes =
            countries?.data?.map((country: any) => ({
                url: `${SITE_URL}/country/${country.slug}`,
                lastModified: new Date(country.updated_at || Date.now()),
                priority: 0.8,
            })) || [];

        // Tour Pages
        const tourRoutes =
            tours?.data?.map((tour: any) => ({
                url: `${SITE_URL}/tour/${tour.slug}`,
                lastModified: new Date(tour.updated_at || Date.now()),
                priority: 0.7,
            })) || [];

        // Blog Pages
        // const blogRoutes =
        //     blogs?.data?.map((blog: any) => ({
        //         url: `${SITE_URL}/blog/${blog.slug}`,
        //         lastModified: new Date(blog.updated_at || Date.now()),
        //         priority: 0.7,
        //     })) || [];

        // Return all routes
        return [
            ...staticRoutes,
            ...countryRoutes,
            ...tourRoutes,
        ];
    } catch (error) {
        // Catch errors
        console.error("Sitemap generation failed:", error);

        // Return a default sitemap
        return [
            {
                url: SITE_URL,
                lastModified: new Date(),
            },
        ];
    }
}