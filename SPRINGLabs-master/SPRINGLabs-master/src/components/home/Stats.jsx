import React, { useState, useEffect } from 'react';

const Stats = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const statsData = [
    {
      id: 1,
      number: 50,
      label: 'Publications',
      suffix: '+'
    },
    {
      id: 2,
      number: 15,
      label: 'Research Projects',
      suffix: '+'
    },
    {
      id: 3,
      number: 25,
      label: 'Team Members',
      suffix: '+'
    },
  ];

  useEffect(() => {
    setHasAnimated(true);
  }, []);

  const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (hasAnimated) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [hasAnimated, target]);

    return (
      <span>
        {count}{suffix}
      </span>
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-primary/5 to-accent/5 border border-gray-200  py-6 ">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-12">
          <h2 className="text-xl lg:text-2xl font-semibold text-dark mb-4">
            Lab Statistics
          </h2>
          <p className="text-base text-secondary max-w-2xl mx-auto">
            A snapshot of our research impact and team strength.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200 text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">
                <Counter target={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;