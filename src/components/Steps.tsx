import userIcon from "@/assets/user.png";
import packageIcon from "@/assets/package.png";
import rocketIcon from "@/assets/rocket.png";

const steps = [
  {
    icon: userIcon,
    number: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    icon: packageIcon,
    number: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    icon: rocketIcon,
    number: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section id="steps" className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Get Started In 3 Steps</h2>
          <p className="text-slate-500 mt-3">Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 w-max-[1200px] m-auto gap-[30px]">
          {steps.map((s) => (
            <article key={s.title} className="relative rounded-3xl border border-slate-200 bg-white p-8 text-center h-[380px] flex flex-col items-center justify-center">
              <div className="absolute top-6 right-6 inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm">
                {s.number}
              </div>
              <div className="flex items-center justify-center mb-4">
                <span className="w-20 h-20 flex items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain" />
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-sm text-slate-500">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
