"use client";

import { Button } from '../ui/Button';
import { ReportsList, Report } from '../ui/ReportsList';
import { NewsSlider, NewsItem } from '../ui/NewsSlider';
import { ArrowRight } from 'lucide-react';

export default function NewsSection() {
  const reports: Report[] = [
    {
      title: "1st quarter report 2025",
      date: "March 2025",
    },
    {
      title: "Invitation To Corporate Briefing Session", 
      date: "January 2024",
    },
    {
      title: "Announcements Q3 2025",
      date: "January 2024",
    },
    {
      title: "Gender Pay Gap Statement Under Circular",
      date: "December 2024",
    },
    {
      title: "Last quarter report 2024",
      date: "December 2024",
    },
    {
      title: "Announcements Q3 2024",
      date: "November 2024",
    }
  ];

  const pressReleases: NewsItem[] = [
    {
      title: "The Future of Digital Commodities Trading in South Asia",
      category: "Commodity/Trading",
      excerpt: "Our CEO shares how Zarea is unlocking $20B+ potential in Pakistan's trade ecosystem...",
      image: "/images/press.png",
    },
    {
      title: "Zarea Announces Strategic Partnership with Leading Tech Firm",
      category: "Partnership",
      excerpt: "New collaboration aims to revolutionize B2B commodity trading across South Asia...",
      image: "/images/press.png",
    }
  ];

  const articles: NewsItem[] = [
    {
      title: "Zarea Secures Strategic Investment from Global Partners",
      category: "Market Insights", 
      excerpt: "Our CEO shares how Zarea is unlocking $20B+ potential in Pakistan's trade ecosystem...",
      image: "/images/article.png",
    },
    {
      title: "The Rise of Digital Trade Platforms in Emerging Markets",
      category: "Industry Analysis",
      excerpt: "Comprehensive analysis of how digital platforms are transforming commodity trading...",
      image: "/images/article.png",
    }
  ];

  const handleDownload = (report: Report) => {
    console.log('Downloading report:', report);
  };

  const handleViewAllReports = () => {
    console.log('View all reports');
  };

  const handleReadMorePress = () => {
    console.log('Read more press releases');
  };

  const handleReadMoreArticles = () => {
    console.log('Read more articles');
  };

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 sm:mb-10 lg:mb-12 gap-4 lg:gap-0">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-zarea-black mb-2 sm:mb-3">
              Stay Informed with Zarea
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-zarea-gray max-w-[560px]">
              Get real-time updates, news, and stories shaping the future of trade and commerce with Zarea.
            </p>
          </div>
          <Button
            variant="primary"
            size="responsive-lg"
            radius="full"
            rightIcon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />}
            className="hidden lg:flex"
          >
            View More News
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <ReportsList
              title="Latest Report"
              reports={reports}
              onViewAll={handleViewAllReports}
              onDownload={handleDownload}
            />
          <div className="space-y-6">
            <NewsSlider
              title="Press Release"
              items={pressReleases}
              onReadMore={handleReadMorePress}
            />
            <NewsSlider
              title="Articles"
              items={articles}
              onReadMore={handleReadMoreArticles}
            />
          </div>
        </div>
        <div className="flex justify-center mt-6 sm:mt-8 lg:hidden">
          <Button
            variant="primary"
            size="responsive"
            radius="full"
          >
            View More News
          </Button>
        </div>
      </div>
    </section>
  );
}