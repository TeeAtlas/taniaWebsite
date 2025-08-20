const data = {
  slug: "seedling",
  hero: {
    title: "Seedling",
    subtitle: "Sustainable grocery UI with rapid prototyping",
    image: "/images/seedlingIntro.jpg", // your existing hero path
  },
  links: {
    live: "https://seedling.example.com",
    github: "https://github.com/you/seedling",
    figma: "https://www.figma.com/file/...", // optional
  },
  facts: {
    role: "Product Designer & Frontend Dev",
    timeframe: "Mar–Jun 2025",
    team: "Solo",
    tools: ["React", "Tailwind", "Figma", "Node.js", "MongoDB"],
  },
  stats: [
    { value: "2.4s", label: "LCP on 4G" },
    { value: "34%", label: "Fewer steps to checkout" },
  ],
  sections: [
    {
      id: "overview",
      eyebrow: "Overview",
      title: "What I built",
      body: [
        "A concept grocery interface optimized for fast list building and checkout.",
        "I focused on IA, motion, and a modular component system.",
      ],
      // Single media example
      media: [
        {
          type: "image",
          src: "/images/seedling/overview.png",
          alt: "Overview",
        },
      ],
    },
    {
      id: "flows",
      eyebrow: "UX",
      title: "Core flows",
      body: [
        "Search, list, and quick add interactions with accessible shortcuts.",
      ],
      // Gallery example — each item only needs src/alt
      gallery: [
        { src: "/images/seedling-onboarding-flow-1.jpg", alt: "Search flow" },
        { src: "/images/seedling/flow-2.png", alt: "List flow" },
      ],
    },
  ],
};

export default data;
