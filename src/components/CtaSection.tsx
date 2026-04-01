const CtaSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-8 py-10 text-center text-white">
          <h3 className="text-4xl font-bold leading-tight">Ready To Transform Your Workflow?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">
            Join thousands of professionals who are already using Digtools to work smarter. Start your free trial today.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#4F39F6] hover:bg-white/90 transition">
              Explore Products
            </button>
            <button className="rounded-full border border-white bg-transparent px-8 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              View Pricing
            </button>
          </div>
          <p className="mt-4 text-sm text-white/80">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
