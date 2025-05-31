'use client';

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartComponentProps {
  options: any;
  series: any;
  type?: 'line' | 'area' | 'bar' | 'pie' | 'donut' | 'scatter' | 'bubble';
  height?: number;
}

export default function ChartComponent({ options, series, type = 'bar', height = 250 }: ChartComponentProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Rendimiento de Ventas</h2>
      <Chart 
        options={options} 
        series={series} 
        type={type} 
        height={height} 
      />
    </div>
  );
}
