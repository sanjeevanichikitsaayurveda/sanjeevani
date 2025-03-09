'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Stats data
const stats = [
  {
    id: 1,
    value: 10,
    suffix: "+",
    label: "Years of Experience in Ayurveda"
  },
  {
    id: 2,
    value: 50000,
    suffix: "+",
    label: "Happy Clients"
  },
  {
    id: 3,
    value: 1000,
    suffix: "+",
    label: "Cities Covered"
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Money Back Guarantee"
  }
];

// Counter animation component
const Counter = ({ value, suffix, duration = 2000 }: { value: number, suffix: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ''));
    
    if (!inView) return;
    
    // Calculate step based on value size
    const step = Math.max(1, Math.floor(end / (duration / 16)));
    
    // If value is very small, just set it directly
    if (end < 10) {
      setCount(end);
      return;
    }
    
    // Don't run if value is zero
    if (start === end) return;

    let timer = setInterval(() => {
      start += step;
      setCount(start);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return <span ref={ref}>{inView ? count.toLocaleString() : 0}{suffix}</span>;
};

export default function BusinessStats() {
  return (
    <section className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-700">
            Our Impact
          </h2>
          <p className="max-w-2xl mx-auto text-green-800">
            Trusted by thousands across India for authentic Ayurvedic solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className="bg-cream-100 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ backgroundColor: '#FFF8E1' }}
            >
              <h3 className="text-4xl font-bold text-amber-800 mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-green-800">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
