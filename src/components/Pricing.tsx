import { Check } from "lucide-react";
import CtaSection from "./CtaSection";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
    highlighted: false,
    buttonText: "Get Started Free",
  },
  {
    name: "Pro",
    subtitle: "Best for professionals",
    price: 29,
    period: "Month",
    features: ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
    highlighted: true,
    buttonText: "Start Pro Trial",
    accent: "Most Popular",
  },
  {
    name: "Enterprise",
    subtitle: "For teams and businesses",
    price: 99,
    period: "Month",
    features: ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
    highlighted: false,
    buttonText: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Simple, Transparent Pricing</h2>
        <p className="text-slate-500 mt-2">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-3xl p-8 flex flex-col ${
              plan.highlighted
                ? "bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white"
                : "bg-white border border-slate-200"
            }`}
          >
            {plan.accent && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-200 text-amber-800 px-3 py-1 text-xs font-bold shadow-sm">
                {plan.accent}
              </span>
            )}
            <h3 className={`text-3xl font-bold ${plan.highlighted ? "" : "text-slate-900"}`}>{plan.name}</h3>
            <p className={`text-sm ${plan.highlighted ? "text-violet-100" : "text-slate-500"}`}>{plan.subtitle}</p>
            <div className="mt-4 mb-6">
              <span className={`text-5xl font-extrabold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                ${plan.price}
              </span>
              <span className={`text-sm ${plan.highlighted ? "text-violet-100" : "text-slate-500"}`}>/{plan.period}</span>
            </div>
            <ul className="space-y-2 flex-1">
              {plan.features.map((f) => (
                <li key={f} className={`flex items-center gap-2 text-sm ${plan.highlighted ? "text-violet-100" : "text-slate-600"}`}>
                  <Check className={`w-4 h-4 ${plan.highlighted ? "text-white" : "text-green-500"}`} />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-3 rounded-full font-semibold transition-colors ${
                plan.highlighted
                  ? "bg-white text-[#4F39F6] hover:bg-white/90"
                  : "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white hover:opacity-90"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

    </section>

    <CtaSection />
  </>
  );
};

export default Pricing;
