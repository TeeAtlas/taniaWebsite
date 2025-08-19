import React from "react";
import CaseStudyLayout from "../../components/CaseStudyLayout";
import Section from "../../components/case-study/Section";
import Stat from "../../components/case-study/Stat";
import Gallery from "../../components/case-study/Gallery";
import MediaBlock from "../../components/case-study/MediaBlock";
import KeyFacts from "../../components/case-study/KeyFacts";
import LinkButtons from "../../components/case-study/LinkButtons";
import AnimatedReveal from "../../components/case-study/AnimatedReveal";
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
<AnimatedReveal>
<Section id="key-facts" className="mb-10"
aside={<KeyFacts {...facts} />}
title="Quick facts"
>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{stats.map((s, i) => (
<Stat key={i} {...s} />
))}
</div>
</Section>
</AnimatedReveal>


{sections.map((s) => (
<AnimatedReveal key={s.id}>
<Section id={s.id} eyebrow={s.eyebrow} title={s.title} className="mb-12">
{s.body?.map((p, i) => (
<p key={i} className="mb-4 leading-relaxed">{p}</p>
))}
{s.media && s.media.map((m, i) => (
<MediaBlock key={i} {...m} className="mt-4" />
))}
{s.gallery && <Gallery items={s.gallery} />}
</Section>
</AnimatedReveal>
))}


<AnimatedReveal>
<Section id="links" title="Links" className="mb-20">
<LinkButtons {...links} />
</Section>
</AnimatedReveal>
</CaseStudyLayout>
);
}