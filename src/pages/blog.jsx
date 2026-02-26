import React, { useState } from 'react';
import './blog.css';
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpeg";

const Blog = () => {
  const [activePage, setActivePage] = useState(1);

  const allBlogs = [
    {
      id: 1,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 2,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 3,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 4,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 5,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 6,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 7,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    },
    {
      id: 8,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 9,
      img: blog3,
      title: "Idukki and Periyar Have My Love",
      subtitle: "Exploring Off-Beat Kerala: A Scenic Journey Beyond the Beaten Path",
      desc: "Kerala, with its lush landscapes and winding roads, is a paradise for those seeking tranquility and adventure. Recently, I embarked on a journey to uncover some of Kerala's lesser-known gems. Starting from Kochi, we rented a Toyota Hycross—spacious enough to comfortably accommodate four people and our luggage.[...]"
    },
    {
      id: 10,
      img: blog1,
      title: "Colours of Kyrgyzstan",
      subtitle: "Kyrgyzstan, a land of timeless beauty",
      desc: "In Spring, the valleys and meadows awaken in a burst of green that awakens a deep sense of enthusiasm, as nature's abundance unfolds in every direction. As we off-road through these stunning landscapes every turn reveals a new marvel—a sparkling stream carving its way through the valleys.[...]"
    }

  ];

  const displayedBlogs = allBlogs.slice((activePage - 1) * 2, activePage * 2);
  return (
    <div className="blog-container">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <h1>Crafting Memories By Letting The Road Overtake</h1>
        </div>
      </section>

      <section className="blog-section">
        <div className="blog-info">
          <p className="category-label">Latest Blog</p>
          <h2 className="blog-title">Adventure Drives</h2>
          <p className="blog-description">5 Ways in which Overlanding has changed me</p>
          <button className="view-blog-btn">View Full Blog</button>
        </div>

        <div className="blog-cards-container">

          <div className="blog-card card-thailand">
            <div className="image-wrapper">
              <img src={blog1} alt="Thailand" />
              <span className="inner-country-tag tag-right">Thailand</span>
            </div>
            <p className="outer-label">India - Thailand</p>
          </div>

          <div className="blog-card card-uk">
            <div className="image-wrapper">
              <img src={blog2} alt="UK" />
              <span className="inner-country-tag tag-center">United Kingdom</span>
            </div>
          </div>

          <div className="blog-card card-italy">
            <div className="image-wrapper">
              <img src={blog3} alt="Italy" />
              <span className="inner-country-tag tag-right">Italy</span>
            </div>
          </div>
        </div>
      </section>

    
      <div className="pagination-wrapper">
        <div className="pagination-pill">
          <button className="blog-prev-btn">Prev</button>
          <button className="blog-next-btn active">Next</button>
        </div>
      </div>

      
      <section className="categories-section">
  <h2 className="section-title">Pick Top Categories:</h2>
  
  <div className="category-nav-bar">
    <button className="nav-item">Adventure Drives</button>
    <button className="nav-item active">Latest Blogs</button>
    <button className="nav-item">Travel</button>
    <button className="nav-item">Worldwide Drives</button>
  </div>

  <div className="category-grid">
 
    <div className="category-card">
      <div className="card-image">
        <img src={blog1} alt="Kyrgyzstan" />
      </div>
      <div className="card-footer">
        <span className="location-name">Kyrgyzstan</span>
        <div className="stars">★★★★★</div>
      </div>
    </div>

    
    <div className="category-card">
      <div className="card-image">
        <img src={blog2} alt="Spain" />
      </div>
      <div className="card-footer">
        <span className="location-name">Spain</span>
        <div className="stars">★★★★★</div>
      </div>
    </div>

    
    <div className="category-card">
      <div className="card-image">
        <img src={blog3} alt="Balkans" />
      </div>
      <div className="card-footer">
        <span className="location-name">Balkans</span>
        <div className="stars">★★★★★</div>
      </div>
    </div>
  </div>
</section>

<section className="blog-details-section">
        <div className="details-grid">
          {displayedBlogs.map((blog) => (
            <div className="details-card" key={blog.id}>
              <div className="details-image-wrapper">
                <img src={blog.img} alt={blog.title} />
              </div>
              <div className="details-text-content">
                <h3 className="details-card-title">{blog.title}</h3>
                <h4 className="details-card-subtitle">{blog.subtitle}</h4>
                <p className="details-card-description">{blog.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="numeric-pagination">
          {[1, 2, 3, 4, 5].map((num) => (
            <span 
              key={num}
              className={`page-num ${activePage === num ? 'active' : ''}`}
              onClick={() => setActivePage(num)}
            >
              {num}
            </span>
          ))}
          <span className="pagination-dots">. . . . . .</span>
          <span 
            className="pagination-arrow" 
            onClick={() => setActivePage(prev => prev < 5 ? prev + 1 : 1)}
          >
            →
          </span>
        </div>
      </section>
    </div>
  );
};

export default Blog;