"use client";

import { Download } from 'lucide-react';

export interface Report {
  title: string;
  date: string;
  type?: string;
}

export interface ReportsListProps {
  title: string;
  reports: Report[];
  viewAllText?: string;
  onViewAll?: () => void;
  onDownload?: (report: Report) => void;
}

const ReportsList = ({
  title,
  reports,
  viewAllText = "View All",
  onViewAll,
  onDownload
}: ReportsListProps) => {
  return (
    <div className='rounded-3xl h-full bg-white border border-[#C3C5C8] shadow-[0_1px_3px_0_rgba(13,13,18,0.05)]'>
      <div className="px-6 pt-6 mb-4">
      <div className="flex items-center justify-between pb-4 border-b border-zarea-black/[0.1]">
        <h3 className="text-2xl font-bold text-zarea-black">{title}</h3>
        {onViewAll && (
          <button 
            onClick={onViewAll}
            className="text-zarea-primary-orange text-lg font-medium hover:underline"
          >
            {viewAllText}
          </button>
        )}
      </div>
      </div>

      <div>
        {reports.map((report, index) => (
          <div key={index} className="flex items-center justify-between p-4 border-b group border-gray-100 hover:bg-[rgba(251,238,235,0.32)] transition-colors">
            <div className="flex items-center gap-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="none"
                  viewBox="0 0 50 50"
                >
                  <path
                    stroke="#F46600"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16.233 44.271h17.534a7.29 7.29 0 0 0 7.291-7.291V25.459a7.3 7.3 0 0 0-2.133-5.157L26.49 7.865a7.3 7.3 0 0 0-5.157-2.136h-5.1a7.29 7.29 0 0 0-7.291 7.292V36.98a7.29 7.29 0 0 0 7.291 7.291"
                  ></path>
                  <path
                    fill="#F46600"
                    fillRule="evenodd"
                    d="M21.744 14.878c-.498.162-.817.491-.909.856-.187.733 0 1.52.527 2.506.263.488.584.981.938 1.51l.192.286.302.448.04-.142.178-.637q.309-1.049.48-2.125c.185-1.338-.023-2.121-.644-2.625-.167-.136-.58-.248-1.104-.078m.114 8.65-.562-.755-.067-.1c-.24-.395-.506-.791-.796-1.218l-.208-.31a21 21 0 0 1-1.067-1.726c-.646-1.204-1.162-2.679-.745-4.306.354-1.383 1.454-2.252 2.556-2.613 1.077-.35 2.446-.306 3.458.515 1.65 1.342 1.767 3.277 1.54 4.91a19 19 0 0 1-.544 2.446l-.2.709q-.234.795-.433 1.602l-.14.404 2.9 3.883c1.354-.162 2.842-.26 4.23-.16 1.601.112 3.322.504 4.495 1.616a3.25 3.25 0 0 1 .823 3.002c-.244 1-.946 1.834-1.915 2.34-2.052 1.073-3.962.219-5.38-.867-1.111-.847-2.178-2.03-3.076-3.027l-.217-.237c-.77.119-1.5.252-2.091.364-.636.12-1.425.267-2.284.459l-.314.923q-.261.6-.496 1.208l-.254.631q-.386.976-.89 1.896c-.687 1.204-1.785 2.483-3.627 2.586-2.466.137-4.137-2.053-3.658-4.392l.012-.056c.417-1.648 1.863-2.73 3.26-3.444 1.245-.638 2.697-1.108 4.044-1.46zm1.813 2.427-.598 1.756.877-.167.008-.002.792-.146zm5.916 3.341c.571.604 1.14 1.167 1.732 1.619 1.146.875 1.958 1.027 2.706.635.417-.218.592-.502.644-.712a.73.73 0 0 0-.167-.644c-.535-.475-1.504-.791-2.9-.892a17 17 0 0 0-2.015-.006M19.16 31.27a14 14 0 0 0-1.854.767c-1.223.625-1.812 1.258-1.966 1.806-.163.865.4 1.402 1.075 1.365.562-.032 1.054-.384 1.595-1.332q.425-.775.746-1.597l.223-.555z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              <div className='flex-1'>
                <h4 className="font-semibold text-zarea-black text-xl">{report.title}</h4>
                <p className="text-[#242423] font-medium">{report.date}</p>
              </div>
            </div>
            <button 
              onClick={() => onDownload?.(report)}
              className="text-zarea-black text-xl hover:underline font-medium inline-flex gap-3"
            >
              Download
              <Download className="w-4 h-4 opacity-30 group-hover:text-zarea-primary-orange group-hover:opacity-100" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

ReportsList.displayName = "ReportsList";

export { ReportsList };