import type { ReactNode } from "react";

type SourceId =
  | "informatik"
  | "medizininformatik"
  | "technischesManagement"
  | "animation";

const sources: Array<{
  id: SourceId;
  title: string;
  url: string;
  summary: string;
}> = [
  {
    id: "informatik",
    title: "HTL Spengergasse – Informatik",
    url: "https://www.spengergasse.at/?page_id=2114",
    summary:
      "Describes the five-year Informatik program with breadth across software development, networks, business management, and multiple specialisations."
  },
  {
    id: "medizininformatik",
    title: "HTL Spengergasse – Medizininformatik",
    url: "https://www.spengergasse.at/?page_id=2112",
    summary:
      "Outlines the Medizininformatik focus under Biomedizin- und Gesundheitstechnik with medical technology and healthcare-oriented IT."
  },
  {
    id: "technischesManagement",
    title: "HTL Spengergasse – Technisches Management & Umwelt",
    url: "https://www.spengergasse.at/?page_id=2153",
    summary:
      "Highlights the Wirtschaftsingenieure department with competencies in product and process management blending technology and business."
  },
  {
    id: "animation",
    title: "HTL Spengergasse – Animation",
    url: "https://www.spengergasse.at/?page_id=2117",
    summary:
      "Explains the design department's animation track emphasising storytelling, visual production and creative technology."
  }
];

const sourceIndex = new Map(sources.map((source, index) => [source.id, index + 1] as const));

function Citation({ id }: { id: SourceId }) {
  const index = sourceIndex.get(id);

  if (!index) {
    return null;
  }

  return (
    <sup>
      <a className="citation" href={`#source-${id}`} aria-label={`See source ${index}`}>
        [{index}]
      </a>
    </sup>
  );
}

type Department = {
  id: SourceId;
  name: string;
  focus: string;
  bestFor: string;
  highlights: string[];
  considerations: string;
  recommended?: boolean;
};

const departments: Department[] = [
  {
    id: "informatik",
    name: "Informatik",
    focus:
      "Full-spectrum computer science covering programming, databases, networks, business and project management with elective specialisations.",
    bestFor: "Students who like solving problems with technology and want many paths open across IT, business and creative tech.",
    highlights: [
      "Solid base in software engineering, databases and distributed systems",
      "Elective strands such as Entrepreneurship, Ethical Hacking, Game Development and Internet of Things",
      "English-speaking cohort option for global readiness"
    ],
    considerations: "Requires comfort with continuous technical practice and projects across all five years.",
    recommended: true
  },
  {
    id: "technischesManagement",
    name: "Technisches Management & Umwelt",
    focus:
      "Blend of engineering, product development, quality management and business processes within the Wirtschaftsingenieure department.",
    bestFor: "Organisers who enjoy coordinating people, sustainability topics and translating between technical and business teams.",
    highlights: [
      "Training in product and process management from development to quality and safety",
      "Exposure to environmental technology and facility management",
      "Prepares for roles such as project leader, innovations manager or quality specialist"
    ],
    considerations:
      "Less depth in pure programming; suits students who prefer management-tech crossover rather than deep coding."
  },
  {
    id: "medizininformatik",
    name: "Medizininformatik",
    focus:
      "Health technology programme combining biology, medical device engineering and specialised medical software development.",
    bestFor: "Students fascinated by healthcare, biology and applying IT to medical challenges.",
    highlights: [
      "Covers medical electronics, health data security and project management",
      "Offers preparation for medical school entrance exams",
      "Connects with healthcare industry projects"
    ],
    considerations:
      "Curriculum is strongly healthcare-oriented; may feel narrow if you prefer non-medical fields later on."
  },
  {
    id: "animation",
    name: "Animation",
    focus:
      "Design track centred on storytelling, 2D/3D animation, motion design and media production with industry tools.",
    bestFor: "Creative all-rounders who thrive on visual storytelling, sound and concept art alongside technical media skills.",
    highlights: [
      "Hands-on work with Adobe Creative Suite, Autodesk Maya and studio production",
      "Develops storytelling, dramaturgy and visual communication",
      "Builds a creative portfolio ready for media and entertainment careers"
    ],
    considerations:
      "Requires passing an artistic aptitude test and sustained creative output under deadlines."
  }
];

const recommendationReasons: Array<{ title: string; body: ReactNode }> = [
  {
    title: "Breadth that rewards an all-rounder",
    body: (
      <>
        Informatik keeps every major IT discipline—programming, databases, networks and business management—in the core timetable, so
        you are constantly switching perspectives and skill sets rather than specialising too early.
        <Citation id="informatik" />
      </>
    )
  },
  {
    title: "Room to explore passions later",
    body: (
      <>
        Starting in the fourth year you can pick electives ranging from Entrepreneurship to Ethical Hacking or Game Development, letting you
        lean into what excites you once you have sampled many directions.
        <Citation id="informatik" />
      </>
    )
  },
  {
    title: "Future-proof language skills",
    body: (
      <>
        An entire class runs with English as the working language, which is rare at HTLs and makes you ready for international teamwork or
        study abroad without closing off German-language options.
        <Citation id="informatik" />
      </>
    )
  }
];

const explorationTips = [
  "Attend the school's InfoTag or open house to sit in sample lessons and talk to teachers from each department.",
  "Ask current students how much independent project time versus guided instruction they receive to match your learning style.",
  "Review sample projects or diploma theses from the departments you like—do you get excited by the outcomes?",
  "Consider your plan after the HTL: Informatik keeps university, FH or immediate job options open across the tech sector." 
];

export default function HomePage() {
  const recommended = departments.find((dept) => dept.recommended);

  return (
    <main className="page">
      <section className="hero">
        <span className="tag">Spengergasse guidance</span>
        <h1>Best department for a versatile “good at everything” student</h1>
        <p className="lead">
          After reviewing the main HTL Spengergasse departments, the Informatik track stands out as the best launchpad for a casual all-rounder who wants
          to stay open to many careers, while other departments offer strong niche alternatives.
        </p>
      </section>

      {recommended && (
        <section className="section recommendation">
          <div className="recommendation-card">
            <div className="badge">Top match</div>
            <h2>{recommended.name}</h2>
            <p className="recommendation-focus">
              {recommended.focus}
              <Citation id={recommended.id} />
            </p>
            <div className="recommendation-highlights">
              <h3>Why it fits an all-rounder</h3>
              <ul>
                {recommendationReasons.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}.</strong> {item.body}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="section-heading">
          <h2>How other departments compare</h2>
          <p>
            Each pathway has a distinct flavour. Use this overview to see which strengths energise you most and where the workloads differ.
          </p>
        </div>
        <div className="comparison-grid">
          {departments.map((department) => (
            <article
              key={department.id}
              className={`department-card${department.recommended ? " department-card--highlight" : ""}`}
            >
              {department.recommended && <span className="department-flag">Recommended</span>}
              <h3>{department.name}</h3>
              <p className="department-focus">
                {department.focus}
                <Citation id={department.id} />
              </p>
              <div className="department-details">
                <p className="department-best">Best for: {department.bestFor}</p>
                <ul>
                  {department.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <p className="department-consider">Keep in mind: {department.considerations}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>Make the decision with confidence</h2>
          <p>
            Pair the academic facts with personal experiments so you can feel which environment matches your motivation and rhythm.
          </p>
        </div>
        <ol className="tips-list">
          {explorationTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ol>
      </section>

      <section className="section sources" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Sources</h2>
        <ol>
          {sources.map((source) => (
            <li key={source.id} id={`source-${source.id}`}>
              <a href={source.url} target="_blank" rel="noreferrer">
                {source.title}
              </a>
              <span> – {source.summary}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
