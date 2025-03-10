'use client';

import { MotionDiv } from '@/components/motion/MotionDiv';
import {
  ChartBarIcon,
  UsersIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ArrowUpIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';

export default function DashboardTemplate() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+14.5%",
      trend: "up",
      icon: <CurrencyDollarIcon className="w-6 h-6" />
    },
    {
      title: "Active Users",
      value: "2,345",
      change: "+5.2%",
      trend: "up",
      icon: <UsersIcon className="w-6 h-6" />
    },
    {
      title: "Sales",
      value: "1,234",
      change: "-2.4%",
      trend: "down",
      icon: <ShoppingBagIcon className="w-6 h-6" />
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "+2.1%",
      trend: "up",
      icon: <ChartBarIcon className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-400">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <MotionDiv
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-gray-700/50">
                {stat.icon}
              </div>
              <span className={`flex items-center text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
                {stat.trend === 'up' ? (
                  <ArrowUpIcon className="w-4 h-4 ml-1" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4 ml-1" />
                )}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
            <p className="text-gray-400 text-sm">{stat.title}</p>
          </MotionDiv>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Chart Section */}
        <div className="lg:col-span-2 p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <div className="h-[300px] flex items-center justify-center">
            <p className="text-gray-400">Chart Component Here</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gray-700/50 flex items-center justify-center">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">New user registered</p>
                  <p className="text-xs text-gray-400">2 minutes ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 