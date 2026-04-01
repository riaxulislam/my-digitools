import bannerImg from "@/assets/banner.png";
import playIcon from "@/assets/play.png";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-violet-100 text-violet-700 px-4 py-2 text-sm font-semibold">
            <span className="w-2 h-2 rounded-full bg-violet-500" />
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
            Supercharge Your <span className="bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent">Digital Workflow</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 text-base font-bold text-white hover:opacity-90 transition-opacity"
            >
              Explore Products
            </a>

            <a
              href="#watch"
              className="inline-flex items-center justify-center rounded-full border border-[#4F39F6] text-[#4F39F6] px-6 py-3 text-base font-bold hover:bg-[#4F39F6]/5 transition-colors gap-2"
            >
              <img src={playIcon} alt="Play" className="w-4 h-4" />
              <span>Watch Demo</span>
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="rounded-3xl p-1 bg-white">
            <img src={bannerImg} alt="Digital Tools Banner" className="w-full max-w-2xl rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
