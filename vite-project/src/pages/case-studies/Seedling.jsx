import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import Section from "../../components/case-study/Section";
import Stat from "../../components/case-study/Stat";
import Gallery from "../../components/case-study/Gallery";
import MediaBlock from "../../components/case-study/MediaBlock";
import KeyFacts from "../../components/case-study/KeyFacts";
import LinkButtons from "../../components/case-study/LinkButtons";
// Keep motion off until visuals match; re-enable later
// import AnimatedReveal from "../../components/case-study/AnimatedReveal";
import data from "../../data/case-studies/seedling.data";

export default function Seedling() {
  const { hero, links, facts, stats, sections } = data;

  return (
    <CaseStudyLayout
      title={hero.title}
      subtitle={hero.subtitle}
      heroImage={hero.image}
      links={links}
    >
      {/* KEY FACTS — exact container + header grid + type scale */}
      <Section
        id="key-facts"
        className="w-full max-w-5xl mx-auto px-4 md:px-6 mb-10"
        headerClass="mb-6 md:mb-8 grid md:grid-cols-12 gap-4"
        eyebrowClass="text-xs tracking-widest uppercase opacity-70"
        titleClass="text-2xl md:text-3xl font-semibold mt-1"
        aside={<KeyFacts {...facts} />}
        title="Quick facts"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Stat
              key={i}
              className="" /* if you previously wrapped stats, put that class here */
              valueClass="text-2xl md:text-3xl font-bold"
              labelClass="text-sm opacity-70"
              {...s}
            />
          ))}
        </div>
      </Section>

      {/* CONTENT SECTIONS — mirror your old spacing/typography/grids */}
      {sections.map((s) => (
        <Section
          key={s.id}
          id={s.id}
          className="w-full max-w-5xl mx-auto px-4 md:px-6 mb-12"
          headerClass="mb-6 md:mb-8 grid md:grid-cols-12 gap-4"
          eyebrowClass="text-xs tracking-widest uppercase opacity-70"
          titleClass="text-2xl md:text-3xl font-semibold mt-1"
          eyebrow={s.eyebrow}
          title={s.title}
        >
          {/* Paragraphs – same leading + spacing */}
          {s.body?.map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed">{p}</p>
          ))}

          {/* Single media blocks – preserve your image sizing */}
          {s.media && s.media.map((m, i) => (
            <MediaBlock
              key={i}
              className="mt-4"                 /* if you had figure margins */
              mediaClass="w-full object-cover" /* your old img/video classes */
              {...m}
            />
          ))}

          {/* Galleries – use the exact grid you had */}
          {s.gallery && (
            <Gallery
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              itemClass=""                     /* per-item wrapper if you had it */
              mediaClass="w-full object-cover" /* your old img sizing */
              items={s.gallery}
            />
          )}
        </Section>
      ))}

      {/* LINKS ROW – same container width + bottom margin */}
      <Section
        id="links"
        className="w-full max-w-5xl mx-auto px-4 md:px-6 mb-20"
        titleClass="text-2xl md:text-3xl font-semibold mt-1"
        title="Links"
      >
        <LinkButtons {...links} />
      </Section>
    </CaseStudyLayout>
  );
}
