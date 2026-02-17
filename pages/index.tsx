import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import React from "react"

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const VizComponent = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const divElement = vizRef.current;
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName("object")[0];

    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "850px";
      vizElement.style.height = "1127px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "850px";
      vizElement.style.height = "1127px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "1527px";
    }

    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode?.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      ref={vizRef}
      className="tableauPlaceholder"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Main View"
            src="https://public.tableau.com/static/images/Ma/MarylandIncarcerationRatesbyCounty/MainView/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>

      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https://public.tableau.com/" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param
          name="name"
          value="MarylandIncarcerationRatesbyCounty/MainView"
        />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Ma/MarylandIncarcerationRatesbyCounty/MainView/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
}

export default function Home() {
  let date = Date();

  return (
    <main className="relative justify-between bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:20px_20px]">
      <RevealOnScroll>
        <div className="hero bg-transparent min-h-screen transition-opacity opacity-45">
          <div className="hero-content text-center">
            <img
              src="/images/1761319124115.jpg"
              className="w-60 rounded-full"
            />
            <div className="max-w-md">
              <div className="mb-5">
                <h1 className="text-5xl font-bold text-white mb-2">Emerson Belfon Jr.</h1>
                <p className="text-sm px-2">I study economics and incentives that influence human systems</p>
              </div>
              <Link className="text-white hover:underline hover:px-3 transition-all underline-offset-2 mx-3" href={"#projects"}>Projects</Link>
              <Link className="text-white hover:underline hover:px-3 transition-all underline-offset-2 mx-3" href={"#about"}>Bio</Link>
              <Link className="text-white hover:underline hover:px-3 transition-all underline-offset-2 mx-3" href={"/documents/CV.pdf"}>CV Here</Link>
              <Link className="text-white hover:underline hover:px-3 transition-all underline-offset-2 mx-3" href={"www.linkedin.com/in/emerson-belfon-7389a9317"}>LinkedIn</Link>
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <div className="hero bg-transparent min-h-screen justify-center" id="about">
        <RevealOnScroll>
          <div className="bg-transparent p-6 align-middle m-auto">
            <div className="">
              <h2 className="font-bold text-2xl p-2">&gt;&gt; About:</h2>
              <hr className="p-2" />
              <div>
                <p className="hover:font-bold hover:underline underline-offset-2 transition-all">
                  I am an Economics undergraduate at <Link className="hover:text-blue-500 transition-all font-bold" href={"https://business.wvu.edu/academics/economics-department"}>West Virginia University</Link> interested in political economy, labor, and development. I enjoy examining how institutions and incentives shape opportunity.
                </p>
                <div className="h-0.5 bg-[#e0e0e0] my-7" />
                <p className="hover:font-bold hover:underline underline-offset-2 transition-all">
                  As a research apprentice in the <Link className="hover:text-blue-500 transition-all font-bold" href={"https://business.wvu.edu/labs-and-facilities#beast"}>BEAST Lab</Link>, I design and support empirical projects, applying data analysis to questions about markets and economic stability.
                </p>
                <div className="h-0.5 bg-[#e0e0e0] my-7" />
                <p className="hover:font-bold hover:underline underline-offset-2 transition-all">
                  I enjoy researching connections between theory, real-world policy challenges, and government.
                </p>
              </div>
              <hr className="p-4 mt-4" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <div className="hero bg-transparent justify-center w-3/5 m-auto mb-72">
        <RevealOnScroll>
          <div className="m-auto text-center justify-center">
            <h3 className="fond-bold text-xl p-2 align-middle">Bio</h3>
            <RevealOnScroll>
              <p className="hover:font-bold hover:underline underline-offset-2 transition-all mb-4 hover:my-8">I am an undergraduate Economics student at West Virginia University pursuing a BS and with a developing focus on political economy, labor economics, and development economics. My work centers on understanding how institutions, markets, and public policy shape economic outcomes.</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="hover:font-bold hover:underline underline-offset-2 transition-all my-4 hover:my-8">As an Undergraduate Research Apprentice at the BEAST Lab, I conduct independent research, collaborate with graduate researchers and faculty, and assist in the operation of experimental studies.</p>
            </RevealOnScroll>
            <RevealOnScroll>
              <p className="hover:font-bold hover:underline underline-offset-2 transition-all my-4 hover:my-8">I have experience in Python, R, Tableau, LaTeX, Linux. and am Excel certified. Through my coursework and research experience, I have developed strong capabilities in data analysis, academic writing, and economic reasoning.</p>
            </RevealOnScroll>
          </div>
        </RevealOnScroll>
      </div>
      <div className="bg-transparent min-h-screen justify-center mt-0" id="projects">
        <RevealOnScroll>
          <div className="text-center">
            <h2 className="font-bold text-2xl p-2 hover:underline underline-offset-2">Projects:</h2>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="text-center text-white mb-16">
            Visualizations: <Link className="hover:underline underline-offset-2 hover:font-bold hover:px-3 transition-all" href={"https://public.tableau.com/views/MarylandIncarcerationRatesbyCounty/MainView?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}>Incarcerations</Link>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="hero bg-transparent">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="/images/mutu.png"
                className="w-48 h-auto hover:scale-125 transition-transform"
              />
              <div>
                <h1 className="text-lg ">Mutual Fund Assets in Municipal Bonds Over Time as
                  an Early Indicator of Economic Crisis</h1>
                <p className="py-6 text-sm hover:underline underline-offset-2 hover:font-bold transition-all">
                  Analysis of mutual fund assets held in municipal bonds over time, compared to market instability over the same time-period. This research was intended to investigate any possible relationship between the two, specifically in relation to high volatility periods and funds exchanging bonds for more lucrative stocks.
                </p>
                <Link href={"/documents/Mutual_fund_assets_in_municipal_bonds_as_an_indicator_of_market_overheat_and_economic_downturn.pdf"} className="hover:underline underline-offset-2">Read here</Link>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="hero bg-transparent">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src="/images/construction.png"
                className="w-48 h-auto hover:scale-125 transition-transform"
              />
              <div>
                <h1 className="text-lg ">Next project underway</h1>
                <p className="py-6 text-sm hover:underline underline-offset-2 hover:font-bold transition-all">
                  *Under Construction*
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-black text-base-content p-4">
        <aside>
          <p>Source code found here: <Link className="hover:underline underline-offset-2" href={"https://github.com/BelHop/portfolio"}>Github</Link></p>
        </aside>
      </footer>
    </main>
  )
}
