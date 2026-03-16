const navItems = [
  { id: "overview", label: "Overview" },
  { id: "market", label: "Market" },
  { id: "apple", label: "Apple" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "facts", label: "Facts" },
  { id: "frameworks", label: "Frameworks" },
  { id: "competitors", label: "Competitors" },
  { id: "timeline", label: "Timeline" },
  { id: "takeaways", label: "Takeaways" },
];

const metrics = [
  {
    value: "$200B",
    title: "Projected AR Market by 2025",
    copy: "Projected global AR industry sales, underscoring AR as a major platform opportunity.",
  },
  {
    value: "850M",
    title: "AR-Capable Apple Devices",
    copy: "Estimated Apple installed base in 2020 able to support AR through existing hardware.",
  },
  {
    value: "$101B",
    title: "AR Components Market by 2023",
    copy: "Projected hardware and software components market surrounding the AR stack.",
  },
  {
    value: "$3.8B",
    title: "AR/VR VC Investment in 2018",
    copy: "Capital flowing into immersive computing as investors funded the ecosystem race.",
  },
];

const marketChartData = [
  { year: 2017, value: 12 },
  { year: 2018, value: 19 },
  { year: 2019, value: 32 },
  { year: 2020, value: 46 },
  { year: 2021, value: 72 },
  { year: 2022, value: 101 },
  { year: 2023, value: 134 },
  { year: 2024, value: 168 },
  { year: 2025, value: 200 },
];

const iphoneConstraintData = [
  { year: "2016", iphone: 63, other: 37 },
  { year: "2017", iphone: 62, other: 38 },
  { year: "2018", iphone: 61, other: 39 },
  { year: "2019", iphone: 55, other: 45 },
  { year: "2020", iphone: 50, other: 50 },
];

const ecosystemPillars = [
  {
    icon: "◎",
    title: "Installed base",
    copy: "Apple could make hundreds of millions of existing iPhones and iPads AR-ready through software, compressing time to market.",
  },
  {
    icon: "△",
    title: "ARKit",
    copy: "ARKit gave developers a standard toolkit, helping Apple seed apps, workflows, and design conventions before new hardware arrived.",
  },
  {
    icon: "□",
    title: "Integrated hardware + software",
    copy: "Apple’s control of chips, devices, operating systems, and retail experience created a more unified path to consumer adoption.",
  },
];

const competitors = [
  {
    company: "Apple",
    play: "ARKit, installed-base activation, future wearables",
    strength: "Full-stack ecosystem control and premium consumer trust",
    constraint: "Needed a compelling post-iPhone hardware format",
    useCase: "Mainstream consumer platform and ecosystem extension",
  },
  {
    company: "Facebook",
    play: "Social AR, camera effects, long-term hardware investment",
    strength: "Platform ambition and deep consumer engagement loops",
    constraint: "Long adoption curve and weaker device-stack control",
    useCase: "Social presence and persistent virtual interaction",
  },
  {
    company: "Google",
    play: "Lens, search utility, Android platform services",
    strength: "Information graph and broad mobile distribution",
    constraint: "Fragmented hardware layer and uneven platform cohesion",
    useCase: "Utility-first AR tied to search and context",
  },
  {
    company: "Microsoft",
    play: "HoloLens and enterprise-first mixed reality",
    strength: "Clear industrial and professional use cases",
    constraint: "Higher cost and slower consumer relevance",
    useCase: "Enterprise productivity, training, and spatial computing",
  },
  {
    company: "Snap",
    play: "Creator lenses, social camera AR",
    strength: "Strong consumer experimentation and creator culture",
    constraint: "Smaller ecosystem breadth and monetization scale",
    useCase: "Mobile-first social expression and ad innovation",
  },
];

const capabilities = [
  {
    title: "TDG Team",
    copy: "Apple’s Technology Development Group reportedly grew into a large, focused internal engine for immersive computing and long-horizon prototypes.",
  },
  {
    title: "AR/VR Acquisitions",
    copy: "A steady stream of acquisitions since 2015 suggested Apple was assembling optical, sensing, and software capabilities piece by piece.",
  },
  {
    title: "ARKit Platform",
    copy: "The software layer let Apple test consumer behavior, developer demand, and technical workflows before committing to new devices.",
  },
  {
    title: "Future Glasses / Headset Roadmap",
    copy: "The roadmap implied Apple was building toward dedicated hardware even as it learned through phones, tablets, and ecosystem tools.",
  },
];

const factsMetrics = [
  {
    value: "129M → 48M",
    title: "First-Time iPhone Buyers",
    copy: "Declined 63% from 2016 to 2019, reinforcing the need for a new growth engine.",
  },
  {
    value: ">60%",
    title: "iPhone Revenue Dependence",
    copy: "iPhone represented more than 60% of Apple revenue from 2015 through 2018.",
  },
  {
    value: "$10B",
    title: "Wearables, Home & Accessories",
    copy: "Q4 2019 revenue exceeded Mac revenue, showing Apple’s adjacent categories were gaining weight.",
  },
  {
    value: "20 Gbps",
    title: "5G Theoretical Peak Speed",
    copy: "A future enabler for AR experiences, though rollout constraints in 2020 were still substantial.",
  },
];

const firstTimeBuyerData = [
  { year: "2016", value: 129 },
  { year: "2017", value: 110 },
  { year: "2018", value: 74 },
  { year: "2019", value: 48 },
];

const arComponentData = [
  { year: "2017", hardware: 2.9, software: 2.5 },
  { year: "2018e", hardware: 4.3, software: 4.0 },
  { year: "2023p", hardware: 56.2, software: 45.2 },
];

const developerData = [
  { label: "ARCore", value: 34 },
  { label: "ARKit", value: 20 },
  { label: "HoloLens", value: 16 },
  { label: "Magic Leap", value: 6 },
];

const timelineItems = [
  {
    year: "1901",
    title: "Early conceptual vision",
    copy: "Early conceptual visions of computer-enhanced eyewear foreshadowed a long arc toward wearable augmentation.",
  },
  {
    year: "2013",
    title: "Google Glass launches at $1,500",
    copy: "Google Glass brought AR glasses into public view and exposed early adoption, design, and privacy challenges.",
  },
  {
    year: "2016",
    title: "Pokemon Go proves consumer curiosity",
    copy: "Pokemon Go made mobile AR mainstream, proving that camera-based experiences could scale consumer interest.",
  },
  {
    year: "2017",
    title: "Apple launches ARKit",
    copy: "Apple launched ARKit, turning AR from a niche experiment into a first-party developer platform.",
  },
  {
    year: "2018-2020",
    title: "Capability building accelerates",
    copy: "Acquisitions, talent concentration, and internal capability building accelerated behind the scenes.",
  },
  {
    year: "2022",
    title: "Expected headset milestone",
    copy: "The case discusses expectations for a headset milestone as Apple’s roadmap became more visible externally.",
  },
  {
    year: "2023",
    title: "Expected AR glasses target",
    copy: "Expected AR glasses targets highlighted Apple’s ambition to move toward lighter, more consumer-ready wearables.",
  },
];

const risks = [
  {
    title: "Consumer Adoption",
    copy: "A breakthrough device would still need everyday use cases strong enough to move AR beyond novelty and demo-driven curiosity.",
  },
  {
    title: "Privacy and Trust",
    copy: "Always-on sensors, spatial mapping, and facial data raised questions about surveillance, consent, and acceptable social norms.",
  },
  {
    title: "Technical Constraints",
    copy: "Battery life, thermal limits, field of view, comfort, and connectivity remained unresolved barriers to mass-market hardware.",
  },
  {
    title: "Ecosystem Execution",
    copy: "Developers, hardware economics, and consumer demand all had to mature together for AR to become a durable platform.",
  },
];

const takeaways = [
  {
    title: "The iPhone plateau forces the AR bet",
    copy: "First-time buyers collapsed from 129M to 48M in three years. Revenue growth came from price hikes masking 0% unit growth. Apple needed a new platform.",
  },
  {
    title: "Platform control is Apple's structural edge",
    copy: "Unlike every competitor, Apple owns the full stack: hardware, OS, chipset, and developer ecosystem. ARKit turned 850M existing devices into an AR install base instantly.",
  },
  {
    title: "Capital alone doesn't create markets",
    copy: "Magic Leap raised $2.6B and reached a $6.4B valuation, yet sold only 6,000 units. Execution, timing, and product-market fit outweigh funding.",
  },
  {
    title: "Enterprise leads, consumer waits",
    copy: "Microsoft, Google, and Magic Leap all found more traction in enterprise. Consumer adoption remains blocked by device bulk, cost, privacy concerns, and thin app ecosystems.",
  },
  {
    title: "Own the platform, the apps, and the hardware",
    copy: "Owning only apps leaves competitors exposed. Apple already controls all three layers, giving it the strongest long-term position if AR becomes a platform shift.",
  },
  {
    title: "5G and miniaturization are the real unlocks",
    copy: "Lightweight AR glasses require offloading processing to a phone or the cloud. 5G and short-range wireless are key physical enablers of the next form factor.",
  },
];

const ragCorpus = [
  {
    id: "case-overview",
    title: "Case overview",
    source: "HBS case summary",
    text:
      "Apple Bets on Augmented Reality examines whether AR could become Apple’s next major platform as iPhone growth slowed. The case centers on market timing, ecosystem control, consumer demand, and Apple’s ability to translate technical progress into sustained adoption.",
  },
  {
    id: "market-scale",
    title: "AR market scale",
    source: "Case facts",
    text:
      "The case highlights projected AR industry sales of 200 billion dollars by 2025. AR components were projected to grow from 5.4 billion dollars in 2017 to 101.4 billion dollars in 2023, with both hardware and software expanding sharply.",
  },
  {
    id: "apple-installed-base",
    title: "Installed base and ARKit",
    source: "Case facts",
    text:
      "By 2020, roughly 850 million Apple devices were considered AR-capable. ARKit gave Apple a way to turn the existing installed base into a developer and distribution advantage before dedicated AR hardware launched.",
  },
  {
    id: "iphone-pressure",
    title: "iPhone growth pressure",
    source: "Case facts",
    text:
      "Apple remained highly dependent on iPhone revenue, which represented more than 60 percent of total revenue from 2015 to 2018. First-time iPhone buyers fell from 129 million in 2016 to 48 million in 2019, and Apple saw its first year-on-year revenue and earnings decline since 2002 in early 2019.",
  },
  {
    id: "wearables-services",
    title: "Wearables and services context",
    source: "Case facts",
    text:
      "Wearables, home, and accessories reached 10 billion dollars in the fourth quarter of 2019 and exceeded Mac revenue, but the case still questions whether these categories could replace the scale of the iPhone franchise.",
  },
  {
    id: "tdg-buildout",
    title: "Apple AR organization",
    source: "Case facts",
    text:
      "Apple’s Technology Development Group reportedly had around 1,000 engineers by 2020 and included talent recruited from companies and institutions such as Amazon, Magic Leap, NASA, Oculus, and Virginia Tech.",
  },
  {
    id: "acquisitions",
    title: "AR acquisitions",
    source: "Case facts",
    text:
      "Apple’s AR-related acquisitions since 2015 included Metaio, Faceshift, Emotient, Flyby Media, SensoMotoric Instruments, Vrvana, Akonia Holographics, iKinema, and NextVR. These moves suggest long-term capability building rather than isolated experimentation.",
  },
  {
    id: "roadmap",
    title: "Product roadmap expectations",
    source: "Case facts",
    text:
      "The case discusses an expected AR or mixed reality headset target in 2022 and AR glasses in 2023. It also mentions the N421 glasses concept, expected around 499 dollars, as a companion device dependent on the iPhone.",
  },
  {
    id: "competitors",
    title: "Competitive landscape",
    source: "Case facts",
    text:
      "Apple faced competition from Facebook, Google, Microsoft, Snap, and others. Facebook invested heavily in social AR and hardware, Google pushed AR utility through Android and Lens, Microsoft focused on HoloLens and enterprise use cases, and Snap built consumer camera AR experiences.",
  },
  {
    id: "developer-share",
    title: "Developer ecosystem",
    source: "Case survey",
    text:
      "A 2019 developer survey cited Google ARCore at 34 percent, Apple ARKit at 20 percent, Microsoft HoloLens at 16 percent, and Magic Leap at 6 percent. Apple had strong platform assets but not clear developer-share leadership.",
  },
  {
    id: "consumer-risk",
    title: "Consumer adoption risk",
    source: "Case analysis",
    text:
      "A major tension in the case is that every consumer AR hardware product to date had failed commercially. Enterprise applications showed stronger traction, while mainstream consumer adoption remained constrained by cost, device bulk, privacy concerns, and thin app ecosystems.",
  },
  {
    id: "fiveg",
    title: "5G as enabler and constraint",
    source: "Case facts",
    text:
      "The case notes that 5G could theoretically reach up to 20 gigabits per second with latency as low as 1 millisecond, but deployment was slow in 2020 and required dense infrastructure because short-range signals do not pass well through walls.",
  },
  {
    id: "apple-strategy",
    title: "Apple strategic advantage",
    source: "Apple context",
    text:
      "Apple’s strategic edge comes from vertical integration across silicon, hardware, operating systems, developer tools, app distribution, retail, and services. This end-to-end control has historically helped Apple enter markets late and still outperform more modular rivals.",
  },
  {
    id: "apple-brand",
    title: "Apple brand and positioning",
    source: "Apple context",
    text:
      "Apple is known for premium industrial design, brand loyalty, pricing power, and a privacy-oriented consumer positioning. In AR, those traits could matter because adoption depends on comfort, trust, and willingness to wear a device in public.",
  },
  {
    id: "vision-question",
    title: "Core case question",
    source: "Case analysis",
    text:
      "The central question is not whether AR technology can improve, but whether compelling consumer demand and ecosystem value can emerge at scale. Apple’s challenge is to turn technical promise into repeatable everyday behavior.",
  },
];

const swotItems = [
  {
    label: "Strengths",
    copy:
      "Vertically integrated hardware and software, roughly 850M AR-capable devices in market, premium brand loyalty, strong pricing power, deep cash reserves, ARKit, a privacy-forward brand, and a 1,000-engineer TDG bench.",
  },
  {
    label: "Weaknesses",
    copy:
      "Only 20% developer share versus Google’s 34%, no shipped AR product, internal design disagreements, dependence on iPhone economics, limited enterprise AR credibility, and a later start than Microsoft or Google.",
  },
  {
    label: "Opportunities",
    copy:
      "A projected $200B AR market, fast-growing components economics, instant distribution through the installed base, new services revenue layers, and potential applications across health, education, productivity, and gaming.",
  },
  {
    label: "Threats",
    copy:
      "Facebook, Microsoft, and Google are all investing aggressively; consumer AR hardware has repeatedly failed; 5G rollout and privacy backlash could slow adoption; supply chain competition could tighten critical components.",
  },
];

const porterForces = [
  {
    label: "Threat of New Entrants",
    rating: "Moderate",
    copy:
      "Capital intensity and technical complexity are high, but $3.8B of VC funding in 2018 and hundreds of startups show that fresh attempts keep entering the category.",
  },
  {
    label: "Supplier Power",
    rating: "Moderate-High",
    copy:
      "Optics, sensors, processors, and displays are specialized and strategic. Component suppliers can become competitive bottlenecks or acquisition targets.",
  },
  {
    label: "Buyer Power",
    rating: "High",
    copy:
      "Consumers have rejected every major AR hardware product so far, and there are no meaningful switching costs until a breakout use case appears.",
  },
  {
    label: "Threat of Substitutes",
    rating: "High",
    copy:
      "Smartphones are already deeply embedded, AR-capable, and good enough for many use cases, raising the bar for any headset or glasses product.",
  },
  {
    label: "Competitive Rivalry",
    rating: "High",
    copy:
      "Apple, Facebook, Google, Microsoft, and Snap are racing for platform control while patent filings and ecosystem investment continue to accelerate.",
  },
];

const app = document.getElementById("app");

app.innerHTML = `
  <div class="page-shell">
    ${StickyNav(navItems)}
    <main>
      ${HeroSection()}
      ${MetricsSection()}
      ${MarketSection()}
      ${ConstraintSection()}
      ${EcosystemSection()}
      ${FactsSection()}
      ${FrameworksSection()}
      ${CompetitorSection()}
      ${AppleBuildoutSection()}
      ${TimelineSection()}
      ${RisksSection()}
      ${TakeawaysSection()}
    </main>
    ${Footer()}
    ${ChatbotWidget()}
  </div>
`;

setupNavigation();
setupRevealAnimations();
setupChatbot();

function StickyNav(items) {
  return `
    <header class="sticky-nav">
      <div class="sticky-nav__inner">
        <div class="sticky-nav__top">
          <div class="sticky-nav__brand">Case Study Dashboard</div>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu" aria-label="Toggle section navigation">
            <span>Menu</span>
          </button>
        </div>
        <nav class="sticky-nav__menu" id="nav-menu" aria-label="Section navigation">
          ${items
            .map(
              (item, index) => `
                <a class="sticky-nav__link" href="#${item.id}" data-section="${item.id}" aria-current="${index === 0 ? "true" : "false"}">
                  ${item.label}
                </a>
              `
            )
            .join("")}
        </nav>
      </div>
    </header>
  `;
}

function HeroSection() {
  return `
    <section class="section hero shell-container reveal" id="overview">
      <div class="hero__grid">
        <div>
          <p class="eyebrow">Harvard Business School Case Study · 2020</p>
          <h1>Apple Bets on Augmented Reality</h1>
          <p class="hero__subtitle">
            A strategic dashboard on Apple’s next platform bet, ecosystem advantage, and the future of AR.
          </p>
          <div class="hero__meta" aria-label="Case study metadata">
            <span><strong>Authors:</strong> McDonald, Lane &amp; Martin</span>
            <span><strong>Case No:</strong> 9-621-007</span>
            <span><strong>Published:</strong> September 23, 2020</span>
          </div>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="hero-visual__panel hero-visual__panel--large">
            <div class="hero-visual__line"></div>
            <div class="hero-visual__line"></div>
            <div class="hero-visual__line"></div>
          </div>
          <div class="hero-visual__panel hero-visual__panel--small">
            <div class="hero-visual__line"></div>
            <div class="hero-visual__line" style="width: 62%;"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function MetricsSection() {
  return `
    <section class="section shell-container reveal" aria-labelledby="metrics-title">
      ${SectionHeader({
        id: "metrics-title",
        eyebrow: "Overview",
        title: "Key Numbers at a Glance",
        copy: "A concise snapshot of the scale, installed base, and capital intensity shaping the AR opportunity Apple was evaluating.",
      })}
      <div class="content-grid metrics-grid">
        ${metrics.map((metric) => MetricCard(metric)).join("")}
      </div>
    </section>
  `;
}

function MarketSection() {
  return `
    <section class="section shell-container reveal" id="market" aria-labelledby="market-title">
      ${SectionHeader({
        id: "market-title",
        eyebrow: "Market",
        title: "Why AR Matters",
        copy: "AR was more than a trend line. It represented a potential category reset just as smartphone growth began to mature.",
      })}
      <div class="split-layout">
        <div class="narrative-card">
          ${EditorialTextBlock(`
            AR offered Apple a plausible blockbuster alternative as smartphone innovation slowed and iPhone growth matured.
            The case frames augmented reality as a large emerging market, with expanding component demand, ecosystem investment,
            and a path from mobile utility toward a broader computing platform. For Apple, the opportunity was strategic:
            <strong>own the next interface before someone else does.</strong>
          `)}
        </div>
        ${ChartCard({
          title: "AR market growth outlook",
          caption: "Illustrative market trajectory based on case-study figures and projections through 2025.",
          summary:
            "Line chart showing AR market estimates rising from roughly $12B in 2017 to $200B in 2025, with acceleration after 2020.",
          chart: renderLineChart(marketChartData),
          figureCaption:
            "The market narrative strengthens after 2020, reinforcing why AR looked like a credible next-platform bet rather than a side bet.",
        })}
      </div>
      <div class="insight-row">
        ${InsightCard({
          title: "From niche to platform",
          copy: "AR moved from isolated demos to an emerging computing layer spanning tools, entertainment, commerce, and wearables.",
        })}
        ${InsightCard({
          title: "Capital follows ecosystems",
          copy: "Developer tools, sensors, chips, mapping, and venture funding all pointed to a broader platform race taking shape.",
        })}
      </div>
    </section>
  `;
}

function ConstraintSection() {
  return `
    <section class="section shell-container reveal" id="apple" aria-labelledby="constraint-title">
      ${SectionHeader({
        id: "constraint-title",
        eyebrow: "Apple",
        title: "The iPhone Constraint",
        copy: "AR mattered partly because Apple still needed a credible next growth engine beyond its core franchise.",
      })}
      <div class="narrative-layout">
        <div class="narrative-card">
          ${EditorialTextBlock(`
            The case highlights slowing smartphone innovation, Apple’s heavy dependence on iPhone revenue,
            and softer growth in first-time buyer momentum. Services and wearables were growing, but it was unclear whether
            they could ever fully replace the scale of the iPhone franchise. That tension made AR strategically important:
            it could extend the ecosystem now while preparing a path toward the next hardware platform later.
          `)}
        </div>
        ${ChartCard({
          title: "Revenue mix slowly broadens",
          caption: "Illustrative revenue mix trend showing Apple’s effort to reduce dependence on the iPhone.",
          summary:
            "Stacked bar chart showing iPhone revenue share declining from around 63% in 2016 to 50% by 2020, while non-iPhone segments grow.",
          chart: renderStackedBars(iphoneConstraintData),
          figureCaption:
            "Annotations emphasize the inflection point: the first overall sales decline since 2002 and the continued importance of iPhone-driven earnings.",
        })}
      </div>
    </section>
  `;
}

function EcosystemSection() {
  return `
    <section class="section shell-container reveal" id="ecosystem" aria-labelledby="ecosystem-title">
      ${SectionHeader({
        id: "ecosystem-title",
        eyebrow: "Ecosystem",
        title: "Apple’s Ecosystem Advantage",
        copy: "Apple entered AR with structural strengths that many rivals could not easily replicate.",
      })}
      <div class="features-grid">
        ${ecosystemPillars.map((pillar) => FeatureCard(pillar)).join("")}
      </div>
    </section>
  `;
}

function CompetitorSection() {
  return `
    <section class="section shell-container reveal" id="competitors" aria-labelledby="competitors-title">
      ${SectionHeader({
        id: "competitors-title",
        eyebrow: "Landscape",
        title: "Competitive Landscape",
        copy: "Each major player approached AR through a different strategic lens, revealing both the breadth of the opportunity and the fragmentation of the race.",
      })}
      ${ComparisonMatrix(competitors)}
    </section>
  `;
}

function FactsSection() {
  return `
    <section class="section shell-container reveal" id="facts" aria-labelledby="facts-title">
      ${SectionHeader({
        id: "facts-title",
        eyebrow: "Facts",
        title: "Important Data and Facts",
        copy: "The case becomes sharper when the supporting numbers are viewed together: slowing iPhone momentum, fast-rising AR economics, and a market still searching for a winning consumer device.",
      })}
      <div class="content-grid metrics-grid" style="margin-bottom: 24px;">
        ${factsMetrics.map((metric) => MetricCard(metric)).join("")}
      </div>
      <div class="content-grid chart-grid">
        ${ChartCard({
          title: "First-time iPhone buyers fell sharply",
          caption: "A structural warning sign for the durability of Apple’s traditional growth motion.",
          summary:
            "Bar chart showing first-time iPhone buyers declining from 129 million in 2016 to 48 million in 2019.",
          chart: renderSimpleBars(firstTimeBuyerData, "M"),
          figureCaption:
            "The drop in new-to-iPhone customers highlights why Apple needed to think beyond incremental smartphone upgrades.",
        })}
        ${ChartCard({
          title: "AR components expand from niche to system market",
          caption: "Hardware and software value pools both scaled quickly in the projections cited in the case.",
          summary:
            "Stacked bar chart showing AR component market growing from $5.4 billion in 2017 to $101.4 billion projected in 2023, split between hardware and software.",
          chart: renderArComponentsChart(arComponentData),
          figureCaption:
            "Projected component growth suggested AR would not just create apps, but an entire hardware-software supply chain.",
        })}
        ${ChartCard({
          title: "Developer attention remained fragmented",
          caption: "Apple had momentum with ARKit, but not yet category leadership among surveyed developers in 2019.",
          summary:
            "Horizontal bar chart showing 2019 developer platform usage led by Google ARCore at 34%, followed by ARKit at 20%, HoloLens at 16%, and Magic Leap at 6%.",
          chart: renderHorizontalBars(developerData, "%"),
          figureCaption:
            "The ecosystem race was still open, which made Apple’s developer tooling and installed base especially important.",
        })}
        <div class="narrative-card">
          <h3>Additional signals from the case</h3>
          <p class="editorial-text">
            Apple hit a <strong>$1T market cap in August 2018</strong>, even as early 2019 brought its first year-on-year revenue and
            earnings decline since 2002. At the same time, the broader AR system kept accelerating: <strong>629 startups</strong> were
            active in 2019, AR/VR VC investment reached <strong>$3.8B in 2018</strong>, and patent filings passed <strong>32,000 in 2018</strong>.
            The tension is central to the case: the opportunity looked enormous, but <strong>every major consumer AR hardware attempt had struggled commercially</strong>,
            while enterprise applications showed stronger traction.
          </p>
        </div>
      </div>
    </section>
  `;
}

function FrameworksSection() {
  return `
    <section class="section shell-container reveal" id="frameworks" aria-labelledby="frameworks-title">
      ${SectionHeader({
        id: "frameworks-title",
        eyebrow: "Frameworks",
        title: "Analytical Frameworks",
        copy: "A strategy lens on Apple’s AR position through SWOT, Porter’s Five Forces, and value-chain control.",
      })}
      <div class="framework-grid">
        <article class="framework-card">
          <div class="framework-card__header">
            <p class="eyebrow">SWOT</p>
            <h3>Apple in AR</h3>
          </div>
          <div class="framework-list">
            ${swotItems
              .map(
                (item) => `
                  <div class="framework-item">
                    <h4>${item.label}</h4>
                    <p>${item.copy}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
        <article class="framework-card">
          <div class="framework-card__header">
            <p class="eyebrow">Porter</p>
            <h3>Five Forces in AR</h3>
          </div>
          <div class="framework-list">
            ${porterForces
              .map(
                (item) => `
                  <div class="framework-item">
                    <div class="framework-item__title">
                      <h4>${item.label}</h4>
                      <span class="force-rating">${item.rating}</span>
                    </div>
                    <p>${item.copy}</p>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
        <article class="framework-card framework-card--wide">
          <div class="framework-card__header">
            <p class="eyebrow">Value Chain</p>
            <h3>Why Apple’s stack matters</h3>
          </div>
          <p class="editorial-text">
            Apple’s advantage in AR comes from controlling the full value chain: <strong>chip design, hardware manufacturing,
            operating system, developer tools, app distribution, and services</strong>. No major competitor matches that level
            of end-to-end coordination in consumer AR. Facebook still has to build integrated hardware muscle, Google has
            software scale without consistent device control, and Microsoft’s strength is deeper in enterprise than mainstream
            consumer distribution. Apple’s integrated stack makes it easier to optimize performance, privacy, industrial design,
            and developer experience at the same time, which is the same pattern that helped the iPhone outperform more modular rivals.
          </p>
        </article>
      </div>
    </section>
  `;
}

function AppleBuildoutSection() {
  return `
    <section class="section shell-container reveal" aria-labelledby="buildout-title">
      ${SectionHeader({
        id: "buildout-title",
        eyebrow: "Capabilities",
        title: "Inside Apple’s AR Buildout",
        copy: "The story was not only about market timing. It was also about whether Apple was assembling the internal capabilities to make AR real.",
      })}
      <div class="capability-layout">
        <div class="narrative-card">
          ${EditorialTextBlock(`
            Apple’s secretive Technology Development Group, a steady pace of AR-related acquisitions,
            and years of platform groundwork suggest the company was building capabilities rather than merely experimenting.
            The pattern fits Apple’s typical posture: move quietly, compound technology and design advantages,
            and enter when hardware, software, and consumer behavior can align around a coherent product story.
          `)}
        </div>
        <div class="chart-card">
          <div class="chart-card__header">
            <div>
              <h3 class="chart-card__title">Capability buildout</h3>
              <p class="chart-card__caption">A focused view of the elements Apple appeared to be assembling behind the scenes.</p>
            </div>
            <p class="chart-summary">Capability cards summarize team scale, acquisitions, platform assets, and roadmap direction.</p>
          </div>
          <div class="capability-grid">
            ${capabilities.map((item) => CapabilityCard(item)).join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

function TimelineSection() {
  return `
    <section class="section shell-container reveal" id="timeline" aria-labelledby="timeline-title">
      ${SectionHeader({
        id: "timeline-title",
        eyebrow: "Chronology",
        title: "AR Timeline",
        copy: "A condensed view of how the technology evolved and how Apple’s moves fit into the broader story of the category.",
      })}
      ${Timeline(timelineItems)}
    </section>
  `;
}

function RisksSection() {
  return `
    <section class="section shell-container reveal" aria-labelledby="risks-title">
      ${SectionHeader({
        id: "risks-title",
        eyebrow: "Risks",
        title: "Open Questions and Risks",
        copy: "The case balances the promise of AR with the harder question of whether the market, technology, and social norms can mature together.",
      })}
      <div class="risk-grid">
        ${risks.map((risk) => RiskCard(risk)).join("")}
      </div>
    </section>
  `;
}

function TakeawaysSection() {
  return `
    <section class="section shell-container reveal" id="takeaways" aria-labelledby="takeaways-title">
      ${SectionHeader({
        id: "takeaways-title",
        eyebrow: "Conclusion",
        title: "What the case reveals",
        copy: "A closing synthesis of the structural lessons behind Apple’s AR decision.",
      })}
      <div class="takeaway-grid takeaway-grid--editorial">
        ${takeaways.map((takeaway) => TakeawayCard(takeaway)).join("")}
      </div>
    </section>
  `;
}

function Footer() {
  return `
    <footer class="footer">
      <div class="shell-container footer__inner">
        <span>Source: Harvard Business School case study, “Apple Bets on Augmented Reality”</span>
        <span>Dashboard designed as a strategy visualization, not a replica of Apple branding.</span>
      </div>
    </footer>
  `;
}

function ChatbotWidget() {
  return `
    <div class="chatbot" aria-live="polite">
      <button class="chatbot__launcher" type="button" aria-expanded="false" aria-controls="case-chatbot-panel">
        <span class="chatbot__launcher-dot" aria-hidden="true"></span>
        <span>Ask me any questions about the case!</span>
      </button>
      <section class="chatbot__panel" id="case-chatbot-panel" aria-label="Case assistant" hidden>
        <header class="chatbot__header">
          <div>
            <p class="eyebrow">Case Assistant</p>
            <h3>Ask about Apple and AR</h3>
          </div>
          <button class="chatbot__close" type="button" aria-label="Close case assistant">Close</button>
        </header>
        <div class="chatbot__messages" id="chatbot-messages">
          <article class="chatbot__message chatbot__message--assistant">
            <p>I can answer questions about the case, Apple’s AR strategy, market data, competitors, and the analytical frameworks on this page.</p>
          </article>
        </div>
        <form class="chatbot__composer" id="chatbot-form">
          <label class="chatbot__label" for="chatbot-input">Ask a question</label>
          <textarea id="chatbot-input" rows="1" placeholder="Example: Why did Apple see AR as strategic?" required></textarea>
          <div class="chatbot__actions">
            <p class="chatbot__hint">Retrieval-based answers grounded in the case dashboard.</p>
            <button class="chatbot__send" type="submit">Send</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function MetricCard({ value, title, copy }) {
  return `
    <article class="metric-card" aria-label="${title}: ${value}">
      <div class="metric-card__value">${value}</div>
      <h3 class="metric-card__title">${title}</h3>
      <p class="metric-card__copy">${copy}</p>
    </article>
  `;
}

function SectionHeader({ id, eyebrow, title, copy }) {
  return `
    <div class="section-header">
      <p class="eyebrow">${eyebrow}</p>
      <h2 id="${id}">${title}</h2>
      <p>${copy}</p>
    </div>
  `;
}

function EditorialTextBlock(copy) {
  return `<p class="editorial-text">${copy}</p>`;
}

function ChartCard({ title, caption, summary, chart, figureCaption }) {
  return `
    <figure class="chart-card" role="group" aria-label="${summary}">
      <div class="chart-card__header">
        <div>
          <h3 class="chart-card__title">${title}</h3>
          <p class="chart-card__caption">${caption}</p>
        </div>
        <p class="chart-summary">${summary}</p>
      </div>
      ${chart}
      <figcaption>${figureCaption}</figcaption>
    </figure>
  `;
}

function InsightCard({ title, copy }) {
  return `
    <article class="insight-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function FeatureCard({ icon, title, copy }) {
  return `
    <article class="feature-card">
      <div class="feature-card__icon" aria-hidden="true">${icon}</div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function ComparisonMatrix(rows) {
  return `
    <div class="comparison-card comparison-shell">
      <table class="comparison-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Core AR play</th>
            <th>Primary strength</th>
            <th>Primary constraint</th>
            <th>Target use case</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td><span class="company-pill">${row.company}</span></td>
                  <td>${row.play}</td>
                  <td>${row.strength}</td>
                  <td>${row.constraint}</td>
                  <td>${row.useCase}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <div class="comparison-mobile">
        ${rows
          .map(
            (row) => `
              <article class="comparison-card" style="padding: 22px;">
                <h3 style="margin: 0 0 14px;"><span class="company-pill">${row.company}</span></h3>
                <p><strong>Core AR play:</strong> ${row.play}</p>
                <p><strong>Primary strength:</strong> ${row.strength}</p>
                <p><strong>Primary constraint:</strong> ${row.constraint}</p>
                <p><strong>Target use case:</strong> ${row.useCase}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function Timeline(items) {
  return `
    <div class="comparison-card timeline-shell">
      <div class="timeline-track">
        ${items
          .map(
            (item) => `
              <article class="timeline-item">
                <p class="timeline-item__year">${item.year}</p>
                <h3 class="timeline-item__title">${item.title || ""}</h3>
                <p class="timeline-item__copy">${item.copy}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function RiskCard({ title, copy }) {
  return `
    <article class="risk-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function CapabilityCard({ title, copy }) {
  return `
    <article class="capability-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function TakeawayCard({ title, copy }) {
  return `
    <article class="takeaway-card">
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `;
}

function renderLineChart(data) {
  const width = 680;
  const height = 340;
  const margin = { top: 18, right: 18, bottom: 42, left: 42 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.value));
  const stepX = innerWidth / (data.length - 1);

  const points = data.map((item, index) => {
    const x = margin.left + stepX * index;
    const y = margin.top + innerHeight - (item.value / maxValue) * innerHeight;
    return { ...item, x, y };
  });

  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${margin.top + innerHeight} L ${points[0].x} ${margin.top + innerHeight} Z`;
  const gridValues = [0, 50, 100, 150, 200];

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
      ${gridValues
        .map((value) => {
          const y = margin.top + innerHeight - (value / maxValue) * innerHeight;
          return `
            <line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
            <text class="axis-tick" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">$${value}B</text>
          `;
        })
        .join("")}
      <line class="axis-line" x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${width - margin.right}" y2="${margin.top + innerHeight}"></line>
      <path class="line-area" d="${areaPath}"></path>
      <path class="line-series" d="${linePath}"></path>
      ${points
        .map(
          (point) => `
            <circle class="data-point" cx="${point.x}" cy="${point.y}" r="5"></circle>
            <text class="axis-tick" x="${point.x}" y="${height - 12}" text-anchor="middle">${point.year}</text>
          `
        )
        .join("")}
      <text class="annotation" x="${points[points.length - 1].x - 68}" y="${points[points.length - 1].y - 18}">$200B by 2025</text>
      <line class="annotation-line" x1="${points[points.length - 1].x - 10}" y1="${points[points.length - 1].y - 8}" x2="${points[points.length - 1].x}" y2="${points[points.length - 1].y}"></line>
    </svg>
  `;
}

function renderStackedBars(data) {
  const width = 680;
  const height = 340;
  const margin = { top: 18, right: 28, bottom: 42, left: 42 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const barWidth = 72;
  const gap = (innerWidth - barWidth * data.length) / (data.length - 1);
  const gridValues = [0, 25, 50, 75, 100];

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
      ${gridValues
        .map((value) => {
          const y = margin.top + innerHeight - (value / 100) * innerHeight;
          return `
            <line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
            <text class="axis-tick" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${value}%</text>
          `;
        })
        .join("")}
      <line class="axis-line" x1="${margin.left}" y1="${margin.top + innerHeight}" x2="${width - margin.right}" y2="${margin.top + innerHeight}"></line>
      ${data
        .map((item, index) => {
          const x = margin.left + index * (barWidth + gap);
          const iphoneHeight = (item.iphone / 100) * innerHeight;
          const otherHeight = (item.other / 100) * innerHeight;
          const iphoneY = margin.top + innerHeight - iphoneHeight;
          const otherY = iphoneY - otherHeight;
          return `
            <rect class="bar-soft" x="${x}" y="${otherY}" width="${barWidth}" height="${otherHeight}" rx="18"></rect>
            <rect class="bar" x="${x}" y="${iphoneY}" width="${barWidth}" height="${iphoneHeight}" rx="18"></rect>
            <text class="axis-tick" x="${x + barWidth / 2}" y="${height - 12}" text-anchor="middle">${item.year}</text>
          `;
        })
        .join("")}
      <text class="annotation" x="${margin.left + 8}" y="${margin.top + 28}">iPhone still drives the mix</text>
      <line class="annotation-line" x1="${margin.left + 178}" y1="${margin.top + 30}" x2="${margin.left + 178}" y2="${margin.top + 108}"></line>
      <text class="annotation" x="${margin.left + 316}" y="${margin.top + 184}">2019 sales decline</text>
      <line class="annotation-line" x1="${margin.left + 394}" y1="${margin.top + 170}" x2="${margin.left + 394}" y2="${margin.top + 232}"></line>
    </svg>
  `;
}

function renderSimpleBars(data, unit) {
  const width = 680;
  const height = 320;
  const margin = { top: 18, right: 20, bottom: 42, left: 42 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.value));
  const barWidth = 88;
  const gap = (innerWidth - barWidth * data.length) / (data.length - 1);
  const gridValues = [0, 40, 80, 120, 140];

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
      ${gridValues
        .map((value) => {
          const y = margin.top + innerHeight - (value / maxValue) * innerHeight;
          return `
            <line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
            <text class="axis-tick" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">${value}${unit}</text>
          `;
        })
        .join("")}
      ${data
        .map((item, index) => {
          const x = margin.left + index * (barWidth + gap);
          const barHeight = (item.value / maxValue) * innerHeight;
          const y = margin.top + innerHeight - barHeight;
          return `
            <rect class="${index === data.length - 1 ? "bar-soft" : "bar"}" x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="20"></rect>
            <text class="axis-tick" x="${x + barWidth / 2}" y="${height - 12}" text-anchor="middle">${item.year}</text>
            <text class="annotation" x="${x + barWidth / 2}" y="${y - 10}" text-anchor="middle">${item.value}${unit}</text>
          `;
        })
        .join("")}
    </svg>
  `;
}

function renderArComponentsChart(data) {
  const width = 680;
  const height = 320;
  const margin = { top: 18, right: 20, bottom: 42, left: 42 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.hardware + item.software));
  const barWidth = 110;
  const gap = (innerWidth - barWidth * data.length) / (data.length - 1);
  const gridValues = [0, 25, 50, 75, 100];

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
      ${gridValues
        .map((value) => {
          const y = margin.top + innerHeight - (value / maxValue) * innerHeight;
          return `
            <line class="grid-line" x1="${margin.left}" y1="${y}" x2="${width - margin.right}" y2="${y}"></line>
            <text class="axis-tick" x="${margin.left - 10}" y="${y + 4}" text-anchor="end">$${value}B</text>
          `;
        })
        .join("")}
      ${data
        .map((item, index) => {
          const x = margin.left + index * (barWidth + gap);
          const softwareHeight = (item.software / maxValue) * innerHeight;
          const hardwareHeight = (item.hardware / maxValue) * innerHeight;
          const softwareY = margin.top + innerHeight - softwareHeight;
          const hardwareY = softwareY - hardwareHeight;
          return `
            <rect class="bar-soft" x="${x}" y="${softwareY}" width="${barWidth}" height="${softwareHeight}" rx="20"></rect>
            <rect class="bar" x="${x}" y="${hardwareY}" width="${barWidth}" height="${hardwareHeight}" rx="20"></rect>
            <text class="axis-tick" x="${x + barWidth / 2}" y="${height - 12}" text-anchor="middle">${item.year}</text>
            <text class="annotation" x="${x + barWidth / 2}" y="${hardwareY - 10}" text-anchor="middle">$${(item.hardware + item.software).toFixed(1)}B</text>
          `;
        })
        .join("")}
      <text class="axis-label" x="${width - 166}" y="${margin.top + 18}">Hardware</text>
      <rect class="bar" x="${width - 196}" y="${margin.top + 9}" width="16" height="8" rx="4"></rect>
      <text class="axis-label" x="${width - 166}" y="${margin.top + 38}">Software</text>
      <rect class="bar-soft" x="${width - 196}" y="${margin.top + 29}" width="16" height="8" rx="4"></rect>
    </svg>
  `;
}

function renderHorizontalBars(data, unit) {
  const width = 680;
  const height = 320;
  const margin = { top: 18, right: 26, bottom: 22, left: 110 };
  const innerWidth = width - margin.left - margin.right;
  const rowHeight = 46;
  const maxValue = Math.max(...data.map((item) => item.value));

  return `
    <svg class="chart-svg" viewBox="0 0 ${width} ${height}" role="img" aria-hidden="true">
      ${data
        .map((item, index) => {
          const y = margin.top + index * (rowHeight + 18);
          const barWidth = (item.value / maxValue) * innerWidth;
          return `
            <text class="axis-tick" x="${margin.left - 12}" y="${y + rowHeight / 2 + 4}" text-anchor="end">${item.label}</text>
            <rect class="bar-soft" x="${margin.left}" y="${y}" width="${innerWidth}" height="${rowHeight}" rx="22"></rect>
            <rect class="${index === 1 ? "bar" : "bar-soft"}" x="${margin.left}" y="${y}" width="${barWidth}" height="${rowHeight}" rx="22"></rect>
            <text class="annotation" x="${margin.left + barWidth + 10}" y="${y + rowHeight / 2 + 4}">${item.value}${unit}</text>
          `;
        })
        .join("")}
    </svg>
  `;
}

function setupNavigation() {
  const links = [...document.querySelectorAll(".sticky-nav__link")];
  const sections = links
    .map((link) => document.getElementById(link.dataset.section))
    .filter(Boolean);
  const menu = document.getElementById("nav-menu");
  const toggle = document.querySelector(".nav-toggle");

  if (toggle) {
    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("nav-open", isOpen);
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.setAttribute("aria-current", String(item === link)));
      if (menu.classList.contains("is-open")) {
        menu.classList.remove("is-open");
        toggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      }
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      links.forEach((link) => {
        const isActive = link.dataset.section === visible.target.id;
        link.setAttribute("aria-current", String(isActive));
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: [0.15, 0.4, 0.7],
    }
  );

  sections.forEach((section) => observer.observe(section));
}

function setupRevealAnimations() {
  const items = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupChatbot() {
  const launcher = document.querySelector(".chatbot__launcher");
  const panel = document.getElementById("case-chatbot-panel");
  const closeButton = document.querySelector(".chatbot__close");
  const form = document.getElementById("chatbot-form");
  const input = document.getElementById("chatbot-input");
  const messages = document.getElementById("chatbot-messages");

  if (!launcher || !panel || !closeButton || !form || !input || !messages) {
    return;
  }

  const setOpen = (open) => {
    launcher.setAttribute("aria-expanded", String(open));
    panel.hidden = !open;
    document.querySelector(".chatbot")?.classList.toggle("is-open", open);
    document.body.classList.toggle("chatbot-open", open);
    if (open) {
      input.focus();
    }
  };

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  closeButton.addEventListener("click", () => setOpen(false));

  input.addEventListener("input", () => {
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 132)}px`;
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const question = input.value.trim();

    if (!question) {
      return;
    }

    appendChatMessage(messages, "user", question);
    const response = answerQuestion(question);
    appendAssistantResponse(messages, response);
    input.value = "";
    input.style.height = "auto";
  });
}

function appendChatMessage(container, role, text) {
  const article = document.createElement("article");
  article.className = `chatbot__message chatbot__message--${role}`;
  article.innerHTML = `<p>${escapeHtml(text)}</p>`;
  container.appendChild(article);
  article.scrollIntoView({ block: "start", behavior: "smooth" });
}

function appendAssistantResponse(container, response) {
  const article = document.createElement("article");
  article.className = "chatbot__message chatbot__message--assistant";
  article.innerHTML = `
    <p>${response.answer}</p>
    ${response.visual ? `<div class="chatbot__visual">${response.visual}</div>` : ""}
    <div class="chatbot__sources">
      ${response.sources
        .map(
          (source) => `
            <div class="chatbot__source">
              <strong>${escapeHtml(source.title)}</strong>
              <span>${escapeHtml(source.source)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
  container.appendChild(article);
  article.scrollIntoView({ block: "start", behavior: "smooth" });
}

function answerQuestion(question) {
  const normalized = normalizeText(question);
  const ranked = retrieveSources(normalized);
  const topMatches = ranked.slice(0, 3);

  if (!hasSufficientMatch(normalized, ranked)) {
    return {
      answer:
        "I don’t know based on the case materials I have here. Try asking something closer to the document, such as: “Why did Apple see AR as strategic?”, “What was Apple’s ecosystem advantage?”, or “How did the competitors differ in AR?”",
      sources: [],
      visual: "",
    };
  }

  const answer = buildAnswer(question, ranked);
  return {
    answer,
    sources: topMatches.map(({ title, source }) => ({ title, source })),
    visual: buildVisual(question),
  };
}

function retrieveSources(normalizedQuestion) {
  const tokens = tokenize(normalizedQuestion);
  const phraseBoosts = [
    "swot",
    "porter",
    "five forces",
    "value chain",
    "arkit",
    "iphone",
    "tdg",
    "developer",
    "5g",
    "competitor",
    "facebook",
    "google",
    "microsoft",
    "snap",
    "market",
    "adoption",
    "privacy",
  ];

  return ragCorpus
    .map((item) => {
      const haystack = normalizeText(`${item.title} ${item.text} ${item.source}`);
      let score = 0;

      tokens.forEach((token) => {
        if (token.length < 3) {
          return;
        }
        if (haystack.includes(token)) {
          score += 2;
        }
      });

      phraseBoosts.forEach((phrase) => {
        if (normalizedQuestion.includes(phrase) && haystack.includes(phrase)) {
          score += 4;
        }
      });

      if (normalizedQuestion.includes("why") && /question|advantage|pressure|risk/.test(haystack)) {
        score += 1.5;
      }

      if (normalizedQuestion.includes("how") && /strategy|advantage|integration|distribution/.test(haystack)) {
        score += 1.5;
      }

      return { ...item, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

function hasSufficientMatch(normalizedQuestion, ranked) {
  if (!ranked.length) {
    return false;
  }

  const top = ranked[0];
  const second = ranked[1];
  const significantTokens = tokenize(normalizedQuestion).filter((token) => token.length >= 4);
  const topText = normalizeText(`${top.title} ${top.text} ${top.source}`);
  const tokenHits = significantTokens.filter((token) => topText.includes(token)).length;
  const hitRatio = significantTokens.length ? tokenHits / significantTokens.length : 0;

  if (top.score >= 7 && tokenHits >= 2) {
    return true;
  }

  if (top.score >= 5 && hitRatio >= 0.34) {
    return true;
  }

  if (second && top.score >= 4 && second.score >= 3 && hitRatio >= 0.25) {
    return true;
  }

  if (significantTokens.length <= 3 && top.score >= 4 && tokenHits >= 1) {
    return true;
  }

  return false;
}

function buildAnswer(question, ranked) {
  const normalized = normalizeText(question);

  if (normalized.includes("swot")) {
    return "From a SWOT perspective, Apple’s biggest strengths are its integrated ecosystem, installed base, ARKit platform, brand trust, and deep internal capability building. The core weaknesses are the lack of a shipped AR product, lower developer share than Google, and pressure from iPhone dependence. The major opportunity is a large emerging AR market with potential new services and hardware layers, while the main threats are aggressive Big Tech rivals, consumer adoption risk, privacy backlash, and the possibility that AR stays niche.";
  }

  if (normalized.includes("porter") || normalized.includes("five forces")) {
    return "The AR industry looks structurally difficult: rivalry is high because Apple, Facebook, Google, Microsoft, and Snap are all investing heavily; buyer power is high because consumers have rejected AR hardware so far; substitutes are strong because smartphones already handle many AR tasks; supplier power is meaningful because specialized optics and sensors are strategic; and new entrants face high technical barriers even though VC funding keeps the field active.";
  }

  if (normalized.includes("value chain")) {
    return "Apple’s value-chain advantage in AR is that it controls silicon, hardware, operating systems, developer tools, app distribution, and services together. That lets it optimize performance, privacy, industrial design, and developer experience end to end in a way that more fragmented competitors struggle to match.";
  }

  const lead = ranked[0];
  const support = ranked[1];
  const supportTwo = ranked[2];

  let answer = lead.text;
  if (support) {
    answer += ` ${support.text}`;
  }
  if (supportTwo && normalized.includes("compare")) {
    answer += ` ${supportTwo.text}`;
  }

  return answer;
}

function buildVisual(question) {
  const normalized = normalizeText(question);

  if (/(market|growth|sales|2025|industry)/.test(normalized)) {
    return renderChatMiniLineChart(
      "AR market outlook",
      marketChartData.map((item) => ({ label: String(item.year), value: item.value })),
      "$200B by 2025"
    );
  }

  if (/(first time|buyers|buyer|iphone growth|new iphone)/.test(normalized)) {
    return renderChatMiniBars(
      "First-time iPhone buyers",
      firstTimeBuyerData.map((item) => ({ label: item.year, value: item.value })),
      "129M to 48M"
    );
  }

  if (/(developer|arkit|arcore|hololens|magic leap survey)/.test(normalized)) {
    return renderChatMiniHorizontalBars("Developer share", developerData, "%");
  }

  if (/(components|hardware|software market|component market)/.test(normalized)) {
    return renderChatMiniStacked(
      "AR components market",
      arComponentData.map((item) => ({
        label: item.year,
        primary: item.hardware,
        secondary: item.software,
      })),
      "$101.4B by 2023p"
    );
  }

  return "";
}

function renderChatMiniLineChart(title, data, callout) {
  const width = 280;
  const height = 150;
  const margin = { top: 18, right: 12, bottom: 24, left: 24 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.value));
  const stepX = innerWidth / (data.length - 1);
  const points = data.map((item, index) => {
    const x = margin.left + stepX * index;
    const y = margin.top + innerHeight - (item.value / maxValue) * innerHeight;
    return { ...item, x, y };
  });
  const linePath = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ");
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${margin.top + innerHeight} L ${points[0].x} ${margin.top + innerHeight} Z`;

  return `
    <figure class="chatbot-chart" role="img" aria-label="${title}">
      <figcaption class="chatbot-chart__title">${title}</figcaption>
      <svg class="chatbot-chart__svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
        <path d="${areaPath}" fill="rgba(0,113,227,0.12)"></path>
        <path d="${linePath}" fill="none" stroke="#0071E3" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        ${points
          .map((point, index) => {
            const showLabel = index === 0 || index === points.length - 1;
            return `
              <circle cx="${point.x}" cy="${point.y}" r="3.5" fill="#fff" stroke="#0071E3" stroke-width="2"></circle>
              ${showLabel ? `<text x="${point.x}" y="${height - 6}" text-anchor="middle" fill="#6E6E73" font-size="10">${point.label}</text>` : ""}
            `;
          })
          .join("")}
        <text x="${points[points.length - 1].x - 8}" y="${points[points.length - 1].y - 10}" text-anchor="end" fill="#1D1D1F" font-size="10" font-weight="600">${callout}</text>
      </svg>
    </figure>
  `;
}

function renderChatMiniBars(title, data, callout) {
  const width = 280;
  const height = 160;
  const margin = { top: 18, right: 12, bottom: 28, left: 18 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.value));
  const barWidth = 42;
  const gap = (innerWidth - barWidth * data.length) / (data.length - 1);

  return `
    <figure class="chatbot-chart" role="img" aria-label="${title}">
      <figcaption class="chatbot-chart__title">${title}</figcaption>
      <svg class="chatbot-chart__svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${data
          .map((item, index) => {
            const x = margin.left + index * (barWidth + gap);
            const barHeight = (item.value / maxValue) * innerHeight;
            const y = margin.top + innerHeight - barHeight;
            return `
              <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="12" fill="${index === data.length - 1 ? "rgba(0,113,227,0.45)" : "rgba(0,113,227,0.9)"}"></rect>
              <text x="${x + barWidth / 2}" y="${height - 8}" text-anchor="middle" fill="#6E6E73" font-size="10">${item.label}</text>
            `;
          })
          .join("")}
        <text x="${width - 12}" y="${margin.top + 12}" text-anchor="end" fill="#1D1D1F" font-size="10" font-weight="600">${callout}</text>
      </svg>
    </figure>
  `;
}

function renderChatMiniHorizontalBars(title, data, unit) {
  const width = 280;
  const height = 170;
  const margin = { top: 14, right: 12, bottom: 8, left: 74 };
  const innerWidth = width - margin.left - margin.right;
  const rowHeight = 18;
  const gap = 12;
  const maxValue = Math.max(...data.map((item) => item.value));

  return `
    <figure class="chatbot-chart" role="img" aria-label="${title}">
      <figcaption class="chatbot-chart__title">${title}</figcaption>
      <svg class="chatbot-chart__svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${data
          .map((item, index) => {
            const y = margin.top + index * (rowHeight + gap);
            const barWidth = (item.value / maxValue) * innerWidth;
            return `
              <text x="${margin.left - 8}" y="${y + 12}" text-anchor="end" fill="#6E6E73" font-size="10">${item.label}</text>
              <rect x="${margin.left}" y="${y}" width="${innerWidth}" height="${rowHeight}" rx="9" fill="rgba(0,113,227,0.12)"></rect>
              <rect x="${margin.left}" y="${y}" width="${barWidth}" height="${rowHeight}" rx="9" fill="${index === 1 ? "#0071E3" : "rgba(0,113,227,0.45)"}"></rect>
              <text x="${margin.left + barWidth + 6}" y="${y + 12}" fill="#1D1D1F" font-size="10">${item.value}${unit}</text>
            `;
          })
          .join("")}
      </svg>
    </figure>
  `;
}

function renderChatMiniStacked(title, data, callout) {
  const width = 280;
  const height = 165;
  const margin = { top: 18, right: 12, bottom: 28, left: 18 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const maxValue = Math.max(...data.map((item) => item.primary + item.secondary));
  const barWidth = 52;
  const gap = (innerWidth - barWidth * data.length) / (data.length - 1);

  return `
    <figure class="chatbot-chart" role="img" aria-label="${title}">
      <figcaption class="chatbot-chart__title">${title}</figcaption>
      <svg class="chatbot-chart__svg" viewBox="0 0 ${width} ${height}" aria-hidden="true">
        ${data
          .map((item, index) => {
            const x = margin.left + index * (barWidth + gap);
            const secondaryHeight = (item.secondary / maxValue) * innerHeight;
            const primaryHeight = (item.primary / maxValue) * innerHeight;
            const secondaryY = margin.top + innerHeight - secondaryHeight;
            const primaryY = secondaryY - primaryHeight;
            return `
              <rect x="${x}" y="${secondaryY}" width="${barWidth}" height="${secondaryHeight}" rx="12" fill="rgba(0,113,227,0.3)"></rect>
              <rect x="${x}" y="${primaryY}" width="${barWidth}" height="${primaryHeight}" rx="12" fill="#0071E3"></rect>
              <text x="${x + barWidth / 2}" y="${height - 8}" text-anchor="middle" fill="#6E6E73" font-size="10">${item.label}</text>
            `;
          })
          .join("")}
        <text x="${width - 12}" y="${margin.top + 12}" text-anchor="end" fill="#1D1D1F" font-size="10" font-weight="600">${callout}</text>
      </svg>
    </figure>
  `;
}

function normalizeText(text) {
  return text.toLowerCase().replace(/[^a-z0-9\s]/g, " ");
}

function tokenize(text) {
  return normalizeText(text)
    .split(/\s+/)
    .filter(Boolean);
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
