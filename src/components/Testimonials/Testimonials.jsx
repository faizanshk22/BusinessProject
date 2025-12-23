import React from 'react';
import './Testimonials.scss';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'George Clarke',
      role: 'Startup Founder',
      message:
        'Working with this developer team of ONSETS was an absolute pleasure. Clean code, great communication, and timely delivery.',
      avatar: 'https://i.pravatar.cc/150?img=12',
    },
    {
      name: 'Marina Aftab',
      role: 'Product Manager',
      message:
        'Great agency, very professional and detail-oriented. The final product exceeded our expectations.',
      avatar: 'https://i.pravatar.cc/150?img=32',
    },
    {
      name: 'Ahmed Bhatti',
      role: 'CTO',
      message:
        'The process was smooth from start to finish. They clearly understood our vision and executed it with creativity and precision. The team’s commitment and responsiveness truly stood out.',
      avatar: 'https://i.pravatar.cc/150?img=54',
    },
  ];

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <h2 className="testimonials__title">
          Client <span>Testimonials</span>
        </h2>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <FaQuoteLeft className="testimonial-card__quote" />

              <p className="testimonial-card__text">
                {item.message}
              </p>

              <div className="testimonial-card__stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <div className="testimonial-card__user">
                <img src={item.avatar} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
