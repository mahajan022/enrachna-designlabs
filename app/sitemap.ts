import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://enrachnadesignlabs.com", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://enrachnadesignlabs.com/our-work", lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: "https://enrachnadesignlabs.com/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://enrachnadesignlabs.com/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://enrachnadesignlabs.com/services/industrial-product-design", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/cad-modelling", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/product-engineering", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/prototyping", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/tool-design-development", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/product-development", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/packaging-design", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://enrachnadesignlabs.com/services/consulting", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}