import React, { useState } from 'react';
import './AutomotiveNews.css'; 
const AutomotiveNews = () => {

  const [newsItems] = useState([
    {
      id: 1,
      title: 'Electrical vehicle registrations',
      summary: 'EV registrations rise 15% in January, as growth continues to slow in U.S.',
      date: 'March 15, 2024',
      url: 'https://www.autonews.com/sales/ev-growth-continues-slow-us-registration-data-shows'
    },
    {
      id: 2,
      title: 'BMW 5 Series Criticized',
      summary: 'BMW 5 Series Criticized On Chinese TV Show For ‘Disturbing’ Gearbox Noises',
      date: 'March 17, 2024',
      url: 'https://www.bmwblog.com/2024/03/17/bmw-5-series-criticized-disturbing-gearbox-noises/'
    },
    {
      id: 3,
      title: 'Honda CRV theft',
      summary: 'Ottawa police warn of spike in vehicle thefts, newer Honda CRVs targeted',
      date: 'May 31, 2022',
      url: 'https://ottawacitizen.com/news/local-news/ottawa-police-warn-of-spike-in-vehicle-thefts-newer-honda-crvs-targeted'
    },
    {
      id: 4,
      title: 'Hyundai Law suit',
      summary: 'Hyundai Reaches Proposed Settlement in Engine Defect Class Action Lawsuits',
      date: 'March 10, 2021',
      url: 'https://ca.topclassactions.com/lawsuit-settlements/consumer-products/auto-news/hyundai-reaches-proposed-settlement-in-engine-defect-class-action-lawsuits/'
    },
    {
      id: 5,
      title: 'Safety Innovations in Vehicle Design',
      summary: 'Audi tweaks Q4 E-tron model name, horsepower for 2024. The updated EV is set to arrive at Audi dealerships in April.',
      date: 'March 8, 2024',
      url: 'https://www.autonews.com/cars-concepts/audi-q4-e-tron-lineup-gets-updated-2024-model-year'
    },
  ]);

  return (
    <div className="container">
      <h1>Automotive News</h1>
      {newsItems.length > 0 ? (
        <div>
          {newsItems.map((item) => (
            <div key={item.id} className="newsItem">
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <p className="dateStyle">{item.date}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">Read Full Article</a>
            </div>
          ))}
        </div>
      ) : (
        <p>No news available at the moment.</p>
      )}
    </div>
  );
};

export default AutomotiveNews;