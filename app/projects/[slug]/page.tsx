
import { projects } from "@/data/projects";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const p = projects.find((x) => x.slug === slug);

  if (!p) {
    notFound();
  }

  return (
    <main>
      <header className="nav">
        <Link href="/" className="brand">
          A<span>.</span> ALVARADO
        </Link>

        <nav className="navlinks">
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <Link className="nav-cta" href="/#contact">
          Let’s connect <ArrowUpRight size={15} />
        </Link>
      </header>

      <div className="wrap project-detail">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={15} />
          Back to all projects
        </Link>

        <div className="detail-hero">
          <p className="eyebrow">
            PROJECT {p.number} / {p.status.toUpperCase()}
          </p>

          <h1>{p.title}</h1>

          <p>{p.subtitle}</p>

          <div className="detail-meta">
            {p.category.map((c) => (
              <span key={c}>{c}</span>
            ))}

            <span>{p.year}</span>
          </div>
        </div>

        <div className="detail-grid">
          <div className="detail-content">
            <section>
              <h2>Context & problem</h2>
              <p>{p.problem}</p>
            </section>

            <section>
              <h2>Objective</h2>
              <p>{p.goal}</p>
            </section>

            <section>
              <h2>Approach</h2>

              <ul>
                {p.approach.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Results & outcome</h2>
              <p>{p.outcome}</p>
            </section>

            <section>
              <h2>What I learned</h2>
              <p>{p.learning}</p>
            </section>

            <section>
              <h2>Evidence & documentation</h2>

              <div className="evidence-box">
                <div className="project-evidence">
                  {p.evidence.map((e) => (
                    <article key={e.url} className="evidence-item">
                      <h3>{e.title}</h3>
                      <p>{e.description}</p>

                      {e.type === "image" && (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={e.url}
                            alt={e.title}
                            className="evidence-image"
                          />
                        </a>
                      )}

                      {e.type !== "image" && (
                        <a href={e.url} target="_blank" rel="noopener noreferrer">
                          View evidence <ArrowUpRight size={14} />
                        </a>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <aside className="detail-side">
            <h3>TOOLS & TECHNOLOGIES</h3>

            <div className="tag-row">
              {p.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <h3>PROJECT LINKS</h3>

            {p.links.map((l) => (
              <a
                href={l.url}
                key={l.label}
                target={l.url === "#" ? undefined : "_blank"}
                rel="noreferrer"
              >
                {l.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </aside>
        </div>
      </div>

      <footer className="footer wrap">
        <Link href="/" className="brand">
          A<span>.</span> ALVARADO
        </Link>

        <p>Always learning. Always questioning. Always building.</p>

        <Link href="/#projects">PROJECTS ↑</Link>

        <span>© 2026</span>
      </footer>
    </main>
  );
}
