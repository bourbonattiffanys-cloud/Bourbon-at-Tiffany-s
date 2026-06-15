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
        title="Taste matters. Find yours."
        description="The story behind Bourbon at Tiffany's — from a bored July to barrel picks, retail tastings, and a business built on genuine curiosity."
      />

      <section className="shell section about-story">
        <Reveal className="about-story__body">

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

          <h2>The first distillery that said yes</h2>
          <p>
            In the fall of 2023, I was on a barrel pick at High Wire Distilling. I was still finding my
            footing with the tasting business — I didn't have a huge social media following, but I posted
            consistently. What I was drinking, reviews, what I was learning. That built a small presence
            around South Carolina.
          </p>
          <p>
            That day, Scott and Ann asked me about bourbon tastings for retail events. Two or three weeks
            later I was back at the distillery for their ten year anniversary, and they introduced me to
            their national sales manager, Jay Liddell.
          </p>
          <p>
            Jay had a massive impact on me. He was real and honest — taught me a lot, and to this day I
            can still call him or send him a message when I need advice. High Wire was the first distillery
            that gave me a chance — even though I didn't have any formal industry experience at that point.
            That meant a lot.
          </p>

          <h2>In between</h2>
          <p>
            In between, I had a stint working on-site for a distillery — full time for a while. I got to
            do things I never expected to do at that stage and learned more than I could have sitting on
            the outside looking in. It didn't end the way I hoped. But honestly, getting let go was the
            best thing that could have happened to me. It pushed me back to what was actually mine.
          </p>

          <h2>Building something real</h2>
          <p>
            After that, I started consulting for a new NDP out of South Carolina — Alvin Langston. They
            had been on shelves for about six months at that point, with their Contrary Cow dark chocolate
            whiskey as the main product. They wanted to do more single barrel business, and I came in to
            help make that happen.
          </p>
          <p>
            What started as a five week consulting engagement has grown into an ongoing relationship. I've
            done several single barrel picks with them, launched the Poppie Collection — a series built in
            collaboration with Clemson women's basketball coach Shawn Poppie — and launched my own Vault
            Collection through them as well.
          </p>

          <div className="about-bottles">
            <Reveal delay={0.05}>
              <div className="about-bottle">
                <Image
                  src="/assets/about/vault-collection.jpeg"
                  alt="The Vault Collection"
                  width={400}
                  height={533}
                  className="about-bottle__img"
                />
                <p>The Vault Collection</p>
              </div>
            </Reveal>
          </div>

          <p>
            In December we took a trip to Kentucky and Indiana and screened about forty barrels in two
            days, all with projects for the first half of 2026 in mind. Everything has gone extremely well.
          </p>
          <p>
            Over the last year the business has grown in ways I didn't fully see coming. What started with
            retail support for High Wire has expanded into consulting, sales support, and event representation
            across multiple brands. I don't take any of it for granted, and I feel blessed and excited about
            the growth and what is on the horizon.
          </p>

        </Reveal>

        <Reveal className="about-story__rail" delay={0.08}>
          <div className="editorial-panel">
            <p className="eyebrow">Credentials</p>
            <h3>Grounded in learning, not gatekeeping</h3>
            <ul className="detail-list">
              <li>Stave &amp; Thief Society Certified Bourbon Steward</li>
              <li>Brand ambassador and field partner for High Wire Distilling, Broad Branch Distillery, ASW Distillery, and Driftless Glen</li>
              <li>Barrel picks across multiple distilleries with a growing archive of single barrel selections</li>
              <li>Based in Chapin, SC — serving bourbon lovers across South Carolina</li>
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
