import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { createMetadata } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  path: "/about",
  description: "The story behind Bourbon at Tiffany's — how a documentary, a rabbit hole, and a spreadsheet led to one of South Carolina's most trusted bourbon voices.",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Tiffany"
        title="I didn't plan any of this."
        description="The story behind Bourbon at Tiffany's — from a bored July to barrel picks, retail tastings, and a business built on genuine curiosity."
      />

      <section className="shell section about-story">
        <div className="about-story__body">
          <Reveal>
            <h2>How it started</h2>
            <p>
              I got into bourbon by accident. It was July, I was bored, and I pulled up a documentary on Hulu
              called <em>Neat</em>. The history and the stories just sucked me in. That took me down a rabbit hole.
            </p>
            <p>
              At the time we probably had five bottles — all very basic, mostly things people had gifted us.
              Basil Hayden, Eagle Rare, Maker's Mark, Woodford Reserve. I started going to Total Wine after
              work on Fridays, texting my brother, FaceTiming him from the aisle trying to figure out what
              to buy next. I didn't want to go crazy on price, but I didn't really know what I was doing yet.
            </p>
            <p>
              For about two weeks, everything tasted like gasoline. I'd pour a Woodford over ice and not even
              finish it. And then one day it clicked — I could finally taste the vanilla, the caramel, the sweetness.
            </p>
            <p>
              I wasn't much of a drinker before this, so it took time and patience to get there. That's what
              I try to tell people now — start with smell. If you can find something you recognize in the nose,
              it gives you a better shot at tasting it too. And mashbill matters more than people think. The
              right starting point makes all the difference.
            </p>
          </Reveal>

          <Reveal>
            <h2>How it became something</h2>
            <p>
              July 2021 is where it started.
            </p>
            <p>
              Two years later, in April of 2023, I lost my job in a restructure — seventeen years with the
              same company. I just fell in the wrong place on a spreadsheet.
            </p>
            <p>
              I was burnt out. And when it happened, I decided I didn't want to keep grinding for someone
              else when it clearly didn't make a difference. So I decided to do something fun for a year.
            </p>
            <p>
              I launched Bourbon at Tiffany's as a tasting company. My only goal at that point was to have
              a small private tasting business where I could teach my friends and family how to taste and
              enjoy bourbon.
            </p>
          </Reveal>

          <Reveal>
            <h2>Consistency gets noticed</h2>
            <div className="about-story__photo-split">
              <div>
                <p>
                  Late summer of 2023, I was still finding my footing with the tasting business. I didn't have
                  a huge social media following, but I posted consistently — what I was drinking, reviews, what
                  I was learning. That built a small presence around South Carolina. While I was on a barrel
                  pick at High Wire Distilling, I was finally able to meet Scott Blackwell and Ann Marshall, the
                  owners, and Alexander Helms, who was the head distiller at the time.
                </p>
                <p>
                  That day, Scott and Ann asked me about hosting tastings for retail events. Two or three weeks
                  later I was back at the distillery for their ten-year anniversary event, and they introduced
                  me to their national sales manager, Jay Liddell, who taught me a lot — I still call him or
                  send him a message when I need advice.
                </p>
                <p>
                  Scott, Ann, and Alexander have played a pivotal part in my growth in the industry. Ann laid
                  the foundation and helped to set the standards that I run my own tasting company by. She is a
                  guiding hand that keeps the compass positioned on the brand they have built. Scott and
                  Alexander are always willing to answer whatever I throw at them, and with my bourbon nerd
                  mindset, that can be a lot. They will dig through spreadsheets to track down a barrel type or
                  a farm location from a single barrel or batch number — no question too small to satisfy my
                  constant thirst for knowledge around our beautiful Jimmy Red corn.
                </p>
                <p>
                  High Wire was the first distillery that gave me a chance — even though I didn't have any
                  formal industry experience at that point. That meant a lot.
                </p>
              </div>
              <div className="about-story__inline-photo">
                <Image
                  src="/assets/about/jimmy-red-closeup.JPG"
                  alt="Jimmy Red — High Wire Distilling Co."
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h2>In between</h2>
            <p>
              In between, I had a stint working on-site for a distillery — full time for a while. I got to
              do things I never expected to do at that stage and learned more than I could have sitting on
              the outside looking in. It didn't end the way I hoped. But honestly, getting let go was the
              best thing that could have happened to me. It pushed me back to what was actually mine.
            </p>
          </Reveal>

          <Reveal>
            <h2>Building something real</h2>
            <div className="about-story__photo-split">
              <div className="about-story__inline-photo">
                <Image
                  src="/assets/about/broad-branch-leather.JPG"
                  alt="Broad Branch Big Winston — Bourbon at Tiffany's selection"
                  fill
                  sizes="(max-width: 900px) 100vw, 30vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p>
                  After that, I started consulting for a new NDP out of South Carolina — Alvin Langston. They
                  had been on shelves for about six months at that point, with their Contrary Cow Dark Chocolate
                  Whiskey as the main product. They wanted to do more single barrel business, and I came in to
                  help make that happen.
                </p>
                <p>
                  What started as a five-week consulting engagement has grown into an ongoing relationship. I've
                  completed several single barrel picks with them, launched the Poppie Collection — a series
                  built in collaboration with Clemson women's basketball coach Shawn Poppie — and launched my
                  own Vault Collection through them as well.
                </p>
                <p>
                  From there, I picked up a contract with Broad Branch Distillery for retail and sales support.
                  Anna Windham and Natalie Spinosa were my biggest support through that stretch — their
                  encouragement and belief in me gave me the strength to keep pushing toward building something
                  of my own. This was the moment things shifted, not just in the volume of work, but in what it
                  represented. Brands were reaching out. The reputation I had been quietly building was starting
                  to open doors I hadn&apos;t knocked on. Bourbon at Tiffany&apos;s was becoming exactly what I
                  had hoped it could be.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <p>
              In December, I took a trip to Kentucky and Indiana with Jim Nasim and screened about forty
              barrels in two days, all with projects for the first half of 2026 in mind. Everything has gone
              extremely well.
            </p>
            <p>
              Over the last year, the business has grown in ways I didn't fully see coming. What started with
              retail support for High Wire has expanded into consulting, sales support, and event representation
              across multiple brands. I don't take any of it for granted, and I feel blessed and excited about
              the growth and what is on the horizon.
            </p>
          </Reveal>
        </div>

        <Reveal className="about-story__rail" delay={0.08}>
          <div className="about-headshot">
            <Image
              src="/assets/about/Tiffany-silly-headshot.JPEG"
              alt="Tiffany"
              width={400}
              height={400}
              className="about-headshot__img"
            />
          </div>
          <div className="editorial-panel">
            <p className="eyebrow">Credentials</p>
            <h3>Built on standards, grounded in learning, driven by relationships.</h3>
            <ul className="detail-list">
              <li>Stave &amp; Thief Society Certified Bourbon Steward</li>
              <li>Brand ambassador and field partner for High Wire Distilling, Broad Branch Distillery, ASW Distillery, and Driftless Glen</li>
              <li>Barrel picks across multiple distilleries with a growing archive of single barrel selections</li>
              <li>Based in the Midlands of SC — serving bourbon lovers across South Carolina</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
