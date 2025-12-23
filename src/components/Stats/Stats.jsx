import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Stats.scss';

const stats = [
  { num: 7, text: 'Years of experience' },
  { num: 450, text: 'Projects Completed' },
  { num: 59, text: 'Technologies mastered' },
  { num: 89103, text: 'Code Commits' },
];

function Stats() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    setStartAnimation(true);
  }, []);

  return (
    <section className="stats">
      <div className="stats__wrapper">
        {stats.map((item, index) => (
          <div className="stats__card" key={index}>
            {startAnimation && (
              <CountUp
                end={item.num}
                duration={5}
                delay={2}
                className="stats__number"
              />
            )}

            <p
              className={`stats__text ${
                item.text.length < 15 ? 'short' : 'long'
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
