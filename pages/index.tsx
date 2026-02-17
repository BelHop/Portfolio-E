import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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

const BioComponent = ({ date }) => {
  return (
    <div className="terminal-window mx-2 w-full xl:w-4/5 p-6 text-base sm:text-sm md:text-base rounded-md shadow-2xl bg-gray-800 max-h-80">
      <div className="flex items-center h-10 px-4 bg-gray-900">
        <div className="h-3 w-3 mr-2 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 mr-2 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
      <pre className="text-gray-300 whitespace-pre" id="terminal-output"></pre>
    </div>
  );
};

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
          <div className="text-center mb-16">
            <h2 className="font-bold text-2xl p-2">Projects:</h2>
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
