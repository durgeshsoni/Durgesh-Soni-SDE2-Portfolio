import { useEffect } from 'react';

export const SEOHead = () => {
  useEffect(() => {
    // Set document title
    document.title = "Durgesh Soni - Full Stack Developer | Java Spring Boot React Expert";
    
    // Create meta tags
    const metaTags = [
      { name: 'description', content: 'Durgesh Soni - Experienced Full Stack Developer specializing in Java, Spring Boot, React, and AWS. 4+ years of experience in backend development, microservices, and scalable web applications.' },
      { name: 'keywords', content: 'Durgesh Soni, Full Stack Developer, Java Developer, Spring Boot, React, AWS, Microservices, Backend Developer, Software Engineer, Bangalore' },
      { name: 'author', content: 'Durgesh Soni' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Durgesh Soni - Full Stack Developer' },
      { property: 'og:description', content: 'Experienced Full Stack Developer specializing in Java, Spring Boot, React, and AWS. Building scalable web applications and microservices.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://durgeshsoni.com' },
      { property: 'og:image', content: 'https://durgeshsoni.com/og-image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Durgesh Soni - Full Stack Developer' },
      { name: 'twitter:description', content: 'Experienced Full Stack Developer specializing in Java, Spring Boot, React, and AWS.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#7c3aed' }
    ];

    // Add meta tags to head
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Durgesh Soni",
      "jobTitle": "Full Stack Developer",
      "description": "Experienced Full Stack Developer specializing in Java, Spring Boot, React, and AWS with 4+ years of experience",
      "email": "hello@durgeshsoni.com",
      "telephone": "+91 7552013781",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "addressCountry": "India"
      },
      "url": "https://durgeshsoni.com",
      "sameAs": [
        "https://github.com/durgeshsoni",
        "https://linkedin.com/in/durgeshsoni"
      ],
      "knowsAbout": [
        "Java",
        "Spring Boot",
        "React",
        "AWS",
        "Microservices",
        "MySQL",
        "MongoDB",
        "Docker",
        "Kubernetes"
      ],
      "alumniOf": {
        "@type": "Organization",
        "name": "Masai School"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      // Remove meta tags
      metaTags.forEach(tag => {
        const selector = tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`;
        const meta = document.querySelector(selector);
        if (meta) meta.remove();
      });
      
      // Remove structured data
      const structuredScript = document.querySelector('script[type="application/ld+json"]');
      if (structuredScript) structuredScript.remove();
    };
  }, []);

  return null;
};