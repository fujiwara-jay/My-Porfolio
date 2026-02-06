import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Certificates = () => {
  // Function to create SVG placeholder
  const createSVGPlaceholder = (title, index) => {
    const colors = ['#2563eb', '#1e40af', '#7c3aed', '#059669', '#dc2626', '#ea580c'];
    const color = colors[index % colors.length];
    
    const shortTitle = title.length > 40 ? title.substring(0, 40) + '...' : title;
    
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E
      %3Crect width='400' height='250' fill='%23f8fafc'/%3E
      %3Crect x='20' y='20' width='360' height='210' fill='white' stroke='${color.replace('#', '%23')}' stroke-width='2'/%3E
      %3Ctext x='50%25' y='45%25' font-family='Arial, sans-serif' font-size='16' fill='${color.replace('#', '%23')}' text-anchor='middle' font-weight='bold'%3ECERTIFICATE%3C/text%3E
      %3Ctext x='50%25' y='60%25' font-family='Arial, sans-serif' font-size='12' fill='%231f2937' text-anchor='middle'%3E${encodeURIComponent(shortTitle)}%3C/text%3E
      %3Ctext x='50%25' y='75%25' font-family='Arial, sans-serif' font-size='10' fill='%236b7280' text-anchor='middle'%3EClick View to see details%3C/text%3E
    %3C/svg%3E`;
  };

  const certificates = [
    // Webinars & Online Courses Certificates
    {
      id: 1,
      title: "Networking Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      image: "https://drive.google.com/uc?export=view&id=1zaH56KNLIch2vDQQGBagjCkMMQWwnWIi",
      downloadLink: "https://drive.google.com/file/d/1zaH56KNLIch2vDQQGBagjCkMMQWwnWIi/view",
      placeholder: createSVGPlaceholder("Networking Basics", 0),
      category: "online"
    },
    {
      id: 2,
      title: "Computer Hardware Basics",
      issuer: "Cisco Networking Academy",
      date: "2024",
      image: "https://drive.google.com/uc?export=view&id=1t7-g50m7AduB7rhZ4KkaVvlC0GuM4Iej",
      downloadLink: "https://drive.google.com/file/d/1t7-g50m7AduB7rhZ4KkaVvlC0GuM4Iej/view",
      placeholder: createSVGPlaceholder("Computer Hardware Basics", 1),
      category: "online"
    },
    {
      id: 3,
      title: "AI in Cybersecurity for the Philippines' Digital Future",
      issuer: "PECB Regional Webinars",
      date: "2024",
      image: "https://drive.google.com/uc?export=view&id=1bm2oERnSSJVB9Hr0YMFb-mB9BaTP7j52",
      downloadLink: "https://drive.google.com/file/d/1bm2oERnSSJVB9Hr0YMFb-mB9BaTP7j52/view",
      placeholder: createSVGPlaceholder("AI in Cybersecurity", 2),
      category: "online"
    },
    {
      id: 4,
      title: "ASEAN Digital Literacy Programme",
      issuer: "Pateros Technological College",
      date: "2024",
      image: "https://drive.google.com/uc?export=view&id=1xq1QPrGW7H-oKyfkKpYUov-CZzq6kCpB",
      downloadLink: "https://drive.google.com/file/d/1xq1QPrGW7H-oKyfkKpYUov-CZzq6kCpB/view",
      placeholder: createSVGPlaceholder("ASEAN Digital Literacy", 3),
      category: "online"
    },
    {
      id: 5,
      title: "Security Operation Center (SOC) and Network Operation Center (NOC) Career Guide",
      issuer: "JPCS",
      date: "2023",
      image: "https://drive.google.com/uc?export=view&id=1-sKzPKm97PIMp-9J9mVdr3oPy8PhLo2A",
      downloadLink: "https://drive.google.com/file/d/1-sKzPKm97PIMp-9J9mVdr3oPy8PhLo2A/view",
      placeholder: createSVGPlaceholder("SOC & NOC Career Guide", 4),
      category: "online"
    },
    {
      id: 6,
      title: "Cyber Security Armor: Shielding Your Data in Digital Age",
      issuer: "JPCS",
      date: "2023",
      image: "https://drive.google.com/uc?export=view&id=1z5iQgTUaulfcQKzPJM4IHEpTmQf7aslI",
      downloadLink: "https://drive.google.com/file/d/1z5iQgTUaulfcQKzPJM4IHEpTmQf7aslI/view",
      placeholder: createSVGPlaceholder("Cyber Security Armor", 5),
      category: "online"
    },
    
    // School Award Certificates
    {
      id: 7,
      title: "Best in PC Assembly and Disassembly Award",
      issuer: "Pateros Technological College",
      date: "August 14, 2025",
      image: "https://drive.google.com/file/d/1PxzQSxtmGkkKUEw4oi01TJYfu-Lf7YX7/view?usp=sharing",
      downloadLink: "https://drive.google.com/file/d/1PxzQSxtmGkkKUEw4oi01TJYfu-Lf7YX7/view?usp=sharing/view",
      placeholder: createSVGPlaceholder("Best in PC Assembly and Disassembly Award - August 14, 2025", 6),
      category: "school"
    },
    {
      id: 8,
      title: "PTC IT Olympics Champion",
      issuer: "Pateros Technological College",
      date: "June 1st, 2023",
      image: "https://drive.google.com/file/d/1iwPAhpmCSN0JlSijvcFnPmySNUC4LXVW/view?usp=sharing",
      downloadLink: "https://drive.google.com/file/d/1iwPAhpmCSN0JlSijvcFnPmySNUC4LXVW/view?usp=sharing/view",
      placeholder: createSVGPlaceholder("PTC IT Olympics Champion", 7),
      category: "school"
    },
    {
      id: 9,
      title: "Application Programming",
      issuer: "Signal Village National High School",
      date: "April 4, 2017",
      image: "https://drive.google.com/file/d/1gfqCPtXPnbPciymKzP2jUdk6PQbVc2LM/view?usp=sharing",
      downloadLink: "https://drive.google.com/file/d/1gfqCPtXPnbPciymKzP2jUdk6PQbVc2LM/view?usp=sharing/view",
      placeholder: createSVGPlaceholder("Application Programming", 8),
      category: "school"
    },
   ];

  // Separate certificates by category
  const onlineCertificates = certificates.filter(cert => cert.category === "online");
  const schoolCertificates = certificates.filter(cert => cert.category === "school");

  return (
    <section className="certificates-section">
      <div className="container">
        {/* Online Courses Section */}
        <motion.h2 
          className="certificate-category-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Webinars & Online Courses Certificates
        </motion.h2>
        
        <div className="certificates-grid">
          {onlineCertificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="certificate-image">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="certificate-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = cert.placeholder;
                  }}
                  onLoad={(e) => {
                    e.target.classList.add('loaded');
                  }}
                />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">Issued by: {cert.issuer}</p>
                <p className="date">Date: {cert.date}</p>
                <a 
                  href={cert.downloadLink} 
                  className="download-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <FaDownload /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* School Awards Section */}
        <motion.h2 
          className="certificate-category-title school-awards-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          School Awards & Certificates
        </motion.h2>
        
        <div className="certificates-grid">
          {schoolCertificates.map((cert, index) => (
            <motion.div 
              key={cert.id}
              className="certificate-card school-certificate"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="certificate-image">
                <img 
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="certificate-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = cert.placeholder;
                  }}
                  onLoad={(e) => {
                    e.target.classList.add('loaded');
                  }}
                />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">Issued by: {cert.issuer}</p>
                <p className="date">Date: {cert.date}</p>
                <a 
                  href={cert.downloadLink} 
                  className="download-btn school-download-btn"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <FaDownload /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;