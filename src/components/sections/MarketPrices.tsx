"use client";

import { useState } from 'react';
import { Tabs, Tab } from '../ui/Tabs';
import { Select } from '../ui/Select';
import { LineGraph, GraphDataPoint } from '../ui/LineGraph';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface MarketData {
  price: string;
  valueHigh: string;
  valueLow: string;
  yearChange: string;
  ytdChange: string;
  weekRange: string;
  week52Range: string;
  currentPrice: number;
  graphData: GraphDataPoint[];
  trend: 'up' | 'down';
}

export default function MarketPrices() {
  const [activeTab, setActiveTab] = useState('cement');
  const [timePeriod, setTimePeriod] = useState('1 Year');

  const tabs: Tab[] = [
    { id: 'cement', label: 'Cement' },
    { id: 'chemicals', label: 'Chemicals' },
    { id: 'steel', label: 'Steel' },
    { id: 'grains', label: 'Grains and Pulses' },
    { id: 'sugar', label: 'Sugar' },
    { id: 'biomass', label: 'Agriculture biomass' },
    { id: 'bricks', label: 'Bricks' },
    { id: 'sand', label: 'Sand' },
    { id: 'crush', label: 'Crush' }
  ];

  const marketData: Record<string, MarketData> = {
    cement: {
      price: 'PKR 1,400 Per Bag',
      valueHigh: 'PKR 1,450 Per Bag',
      valueLow: 'PKR 1,330 Per Bag',
      yearChange: '-3%',
      ytdChange: '-3%',
      weekRange: 'PKR 1,330 - 1,450 Per Bag',
      week52Range: 'PKR 545 - 2,640 Per Bag',
      currentPrice: 1400,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 800 },
        { month: 'Feb', value: 900 },
        { month: 'Mar', value: 1000 },
        { month: 'Apr', value: 950 },
        { month: 'May', value: 850 },
        { month: 'Jun', value: 900 },
        { month: 'Jul', value: 1100 },
        { month: 'Aug', value: 1150 },
        { month: 'Sep', value: 1200 },
        { month: 'Oct', value: 1180 },
        { month: 'Nov', value: 1250 },
        { month: 'Dec', value: 1400 }
      ]
    },
    chemicals: {
      price: 'PKR 2,800 Per Ton',
      valueHigh: 'PKR 2,950 Per Ton',
      valueLow: 'PKR 2,650 Per Ton',
      yearChange: '+5%',
      ytdChange: '+2%',
      weekRange: 'PKR 2,750 - 2,850 Per Ton',
      week52Range: 'PKR 2,100 - 3,200 Per Ton',
      currentPrice: 2800,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 2100 },
        { month: 'Feb', value: 2200 },
        { month: 'Mar', value: 2400 },
        { month: 'Apr', value: 2350 },
        { month: 'May', value: 2500 },
        { month: 'Jun', value: 2600 },
        { month: 'Jul', value: 2550 },
        { month: 'Aug', value: 2650 },
        { month: 'Sep', value: 2700 },
        { month: 'Oct', value: 2750 },
        { month: 'Nov', value: 2780 },
        { month: 'Dec', value: 2800 }
      ]
    },
    steel: {
      price: 'PKR 285,000 Per Ton',
      valueHigh: 'PKR 290,000 Per Ton',
      valueLow: 'PKR 275,000 Per Ton',
      yearChange: '+12%',
      ytdChange: '+8%',
      weekRange: 'PKR 280,000 - 288,000 Per Ton',
      week52Range: 'PKR 220,000 - 295,000 Per Ton',
      currentPrice: 285000,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 220000 },
        { month: 'Feb', value: 235000 },
        { month: 'Mar', value: 250000 },
        { month: 'Apr', value: 245000 },
        { month: 'May', value: 260000 },
        { month: 'Jun', value: 265000 },
        { month: 'Jul', value: 270000 },
        { month: 'Aug', value: 275000 },
        { month: 'Sep', value: 278000 },
        { month: 'Oct', value: 280000 },
        { month: 'Nov', value: 282000 },
        { month: 'Dec', value: 285000 }
      ]
    },
    grains: {
      price: 'PKR 8,500 Per 40kg',
      valueHigh: 'PKR 8,800 Per 40kg',
      valueLow: 'PKR 8,200 Per 40kg',
      yearChange: '-1%',
      ytdChange: '+3%',
      weekRange: 'PKR 8,400 - 8,600 Per 40kg',
      week52Range: 'PKR 7,500 - 9,200 Per 40kg',
      currentPrice: 8500,
      trend: 'down',
      graphData: [
        { month: 'Jan', value: 7800 },
        { month: 'Feb', value: 8000 },
        { month: 'Mar', value: 8200 },
        { month: 'Apr', value: 8400 },
        { month: 'May', value: 8600 },
        { month: 'Jun', value: 8700 },
        { month: 'Jul', value: 8650 },
        { month: 'Aug', value: 8550 },
        { month: 'Sep', value: 8500 },
        { month: 'Oct', value: 8450 },
        { month: 'Nov', value: 8480 },
        { month: 'Dec', value: 8500 }
      ]
    },
    sugar: {
      price: 'PKR 140 Per Kg',
      valueHigh: 'PKR 145 Per Kg',
      valueLow: 'PKR 135 Per Kg',
      yearChange: '+8%',
      ytdChange: '+4%',
      weekRange: 'PKR 138 - 142 Per Kg',
      week52Range: 'PKR 120 - 150 Per Kg',
      currentPrice: 140,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 125 },
        { month: 'Feb', value: 128 },
        { month: 'Mar', value: 130 },
        { month: 'Apr', value: 132 },
        { month: 'May', value: 135 },
        { month: 'Jun', value: 137 },
        { month: 'Jul', value: 138 },
        { month: 'Aug', value: 139 },
        { month: 'Sep', value: 140 },
        { month: 'Oct', value: 141 },
        { month: 'Nov', value: 140 },
        { month: 'Dec', value: 140 }
      ]
    },
    biomass: {
      price: 'PKR 45 Per Kg',
      valueHigh: 'PKR 48 Per Kg',
      valueLow: 'PKR 42 Per Kg',
      yearChange: '+15%',
      ytdChange: '+10%',
      weekRange: 'PKR 44 - 46 Per Kg',
      week52Range: 'PKR 35 - 50 Per Kg',
      currentPrice: 45,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 35 },
        { month: 'Feb', value: 37 },
        { month: 'Mar', value: 39 },
        { month: 'Apr', value: 40 },
        { month: 'May', value: 41 },
        { month: 'Jun', value: 42 },
        { month: 'Jul', value: 43 },
        { month: 'Aug', value: 44 },
        { month: 'Sep', value: 44 },
        { month: 'Oct', value: 45 },
        { month: 'Nov', value: 45 },
        { month: 'Dec', value: 45 }
      ]
    },
    bricks: {
      price: 'PKR 18 Per Piece',
      valueHigh: 'PKR 19 Per Piece',
      valueLow: 'PKR 17 Per Piece',
      yearChange: '+6%',
      ytdChange: '+3%',
      weekRange: 'PKR 17.5 - 18.5 Per Piece',
      week52Range: 'PKR 15 - 20 Per Piece',
      currentPrice: 18,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 16 },
        { month: 'Feb', value: 16.5 },
        { month: 'Mar', value: 17 },
        { month: 'Apr', value: 17.2 },
        { month: 'May', value: 17.5 },
        { month: 'Jun', value: 17.8 },
        { month: 'Jul', value: 18 },
        { month: 'Aug', value: 18.2 },
        { month: 'Sep', value: 18.1 },
        { month: 'Oct', value: 18 },
        { month: 'Nov', value: 18 },
        { month: 'Dec', value: 18 }
      ]
    },
    sand: {
      price: 'PKR 3,200 Per Trolley',
      valueHigh: 'PKR 3,400 Per Trolley',
      valueLow: 'PKR 3,000 Per Trolley',
      yearChange: '+2%',
      ytdChange: '+1%',
      weekRange: 'PKR 3,100 - 3,300 Per Trolley',
      week52Range: 'PKR 2,800 - 3,500 Per Trolley',
      currentPrice: 3200,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 3000 },
        { month: 'Feb', value: 3050 },
        { month: 'Mar', value: 3100 },
        { month: 'Apr', value: 3120 },
        { month: 'May', value: 3140 },
        { month: 'Jun', value: 3160 },
        { month: 'Jul', value: 3180 },
        { month: 'Aug', value: 3190 },
        { month: 'Sep', value: 3200 },
        { month: 'Oct', value: 3200 },
        { month: 'Nov', value: 3200 },
        { month: 'Dec', value: 3200 }
      ]
    },
    crush: {
      price: 'PKR 2,800 Per Trolley',
      valueHigh: 'PKR 2,950 Per Trolley',
      valueLow: 'PKR 2,650 Per Trolley',
      yearChange: '+4%',
      ytdChange: '+2%',
      weekRange: 'PKR 2,750 - 2,850 Per Trolley',
      week52Range: 'PKR 2,400 - 3,000 Per Trolley',
      currentPrice: 2800,
      trend: 'up',
      graphData: [
        { month: 'Jan', value: 2500 },
        { month: 'Feb', value: 2550 },
        { month: 'Mar', value: 2600 },
        { month: 'Apr', value: 2650 },
        { month: 'May', value: 2700 },
        { month: 'Jun', value: 2720 },
        { month: 'Jul', value: 2750 },
        { month: 'Aug', value: 2770 },
        { month: 'Sep', value: 2780 },
        { month: 'Oct', value: 2790 },
        { month: 'Nov', value: 2795 },
        { month: 'Dec', value: 2800 }
      ]
    }
  };

  const currentData = marketData[activeTab] || marketData['cement'];

  return (
    <section className="py-6 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h4 className="text-sm sm:text-base lg:text-xl text-zarea-gray uppercase mb-3 sm:mb-4 font-medium">STAY INFORMED. TRADE SMART.</h4>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-zarea-black mb-4 sm:mb-6 lg:mb-8">
            Today's Market Prices at a Glance
          </h2>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            className="mb-6 sm:mb-8 lg:mb-12"
          />

          <div className="bg-white rounded-2xl sm:rounded-3xl border border-zarea-border-light">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
              <div className='p-4 sm:p-6 lg:p-8 border-r-0 lg:border-r border-zarea-border-light h-full border-b lg:border-b-0 border-zarea-border-light'>
                <div className="mb-4 sm:mb-6 lg:mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
                  <h3 className="text-lg sm:text-2xl lg:text-[32px] font-bold text-zarea-black mb-2">{currentData.price}</h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
                    <div className="relative inline-flex">
                    <Select
                      value={timePeriod}
                      onChange={(e) => setTimePeriod(e.target.value)}
                      className="w-auto min-w-[100px] sm:min-w-[120px] text-xs sm:text-sm"
                      size="sm"
                      options={[
                        { value: '1 Year', label: '1 Year' },
                        { value: '6 Months', label: '6 Months' },
                        { value: '3 Months', label: '3 Months' },
                        { value: '1 Month', label: '1 Month' }
                      ]}
                    />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  <div>
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">Value High</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black">{currentData.valueHigh}</p>
                    </div>
                    <div className="mb-4 sm:mb-6">
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">1 Year Change</h4>
                      <div className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                    
                        {currentData.trend === 'up' ? <TrendingUp className='text-green-500 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'/> : <TrendingDown className='text-red-500 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'/>}
                       
                        <span className={`font-medium ${currentData.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {currentData.yearChange}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">Week Range</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black">{currentData.weekRange}</p>
                    </div>
                  </div>

                  <div>
                    <div className="mb-6">
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">Value Low</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black">{currentData.valueLow}</p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">YTD Change</h4>
                      <div className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold">
                      {currentData.trend === 'up' ? <TrendingUp className='text-green-500 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'/> : <TrendingDown className='text-red-500 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6'/>}
                    
                        <span className={`font-medium ${currentData.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                          {currentData.ytdChange}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base lg:text-xl font-medium text-zarea mb-1">52-week Range</h4>
                      <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-zarea-black">{currentData.week52Range}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='p-4 sm:p-6 lg:p-8 w-full'>
              <LineGraph
                data={currentData.graphData}
                currentPrice={currentData.currentPrice}
                currentPriceLabel={currentData.price.split(' Per ')[0]}
                lineColor="#10B981"
                height={400}
                domain={[0, Math.max(...currentData.graphData.map(d => d.value)) * 1.2]}
                showCurrentPrice={true}
                showGrid={true}
                className="w-full"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}