import React from 'react';
import styles from './AboutUs.module.css';

const services = [
  {
    icon: '🌍',
    title: 'Import & Export of Goods',
    description:
      'From natural Himalayan salt to consumer electronics, auto parts, agricultural products, and textiles, we connect global markets with trusted quality.',
  },
  {
    icon: '🧂',
    title: 'Salt Products Division',
    description:
      'We produce and export edible salt, decorative salt lamps, animal lick salt, bath salts, and more—sourced from the finest Himalayan reserves.',
  },
  {
    icon: '🤝',
    title: 'Global Representation & Brokerage',
    description:
      'Acting as a sales agent or distributor for international brands and manufacturers, we help businesses establish a foothold in new markets on a commission or profit-sharing basis.',
  },
  {
    icon: '🔎',
    title: 'Custom Sourcing',
    description:
      'With deep market knowledge and an extensive supplier network, we help clients source niche products efficiently and cost-effectively.',
  },
];

const Services = () => {
  return (
    <div className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.cardGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconTitle}>
              <span className={styles.icon}>{service.icon}</span>
              <span className={styles.title}>{service.title}</span>
            </div>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
