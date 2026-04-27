import Image from "next/image";

export default function HomePage() {
  return (
    <main className="home-page">

      <section className="hero">

        <Image
          src="/images/banner.jpg"
          alt="Banner"
          fill
          priority
          className="hero-bg"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content container">

          <Image
            src="/images/logo.png"
            alt="Logo"
            width={180}
            height={180}
            className="hero-logo"
          />

          <p className="mini-title">
            OFFICIAL ESPORTS ORGANIZATION
          </p>

          <h1 className="hero-title">
            FEAR THE <span>WINGS</span>
          </h1>

          <p className="hero-text">
            MightyWings rises with power, discipline and domination.
          </p>

          <div className="hero-buttons">

            <a href="/roster" className="btn-primary">
              VIEW ROSTER
            </a>

            <a href="/contact" className="btn-secondary">
              JOIN TEAM
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}
