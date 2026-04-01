const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "200+", label: "Premium Tools" },
  { value: "4.9", label: "Rating" },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((s, idx) => (
          <div key={s.label} className="relative px-4 py-6">
            <p className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</p>
            <p className="text-sm md:text-base opacity-90 mt-2">{s.label}</p>
            {idx < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 top-1/2 h-16 w-px bg-white/40 transform -translate-y-1/2" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
