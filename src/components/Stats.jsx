function Stats() {
  const stats = [
    ["2500+", "Students"],
    ["200+", "Clients"],
    ["100+", "Projects"],
    ["95%", "Placement"]
  ];

  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-center">

        {stats.map(([num, text]) => (
          <div key={text}>
            <h2 className="text-5xl font-bold text-blue-700">
              {num}
            </h2>
            <p>{text}</p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default Stats;