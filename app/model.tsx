// 'use client'
// import React from 'react';
// // import { PieChart, Pie, Cell, Tooltip } from 'recharts';
// import { HTMLAttributes } from 'react';

// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/button';
// import { Text } from '@/components/ui/text';
// // import { Images } from '@/components/images';

// interface ModelProps extends HTMLAttributes<HTMLDivElement> {}

// const data = [
//   { label: '挖矿 650亿', value: 650, color: '#FFA500' },
//   { label: '私募 100亿', value: 100, color: '#FF0000' },
//   { label: '空投 50亿', value: 50, color: '#800080' },
//   { label: '交易池 50亿', value: 50, color: '#00FFFF' },
//   { label: '项目方保留 50亿', value: 50, color: '#008000' },
//   { label: '100亿于2025年解锁', value: 100, color: '#0000FF' },
// ];

// export default function Model({ className, ...props }: ModelProps) {
//   return (
//     <>
//       <div
//         className={cn(
//           'container mb-4 flex flex-col items-center gap-4',
//           className
//         )}
//         {...props}
//       >
//         <Text intent="heading">代币模型</Text>
//         <Button variant="lg/outline">即将开启</Button>
        
//         {/* Pie Chart Section */}
//         <div className="mt-12 flex flex-col items-center gap-6">
//           {/* <PieChart width={300} height={300}>
//             <Pie
//               data={data}
//               cx="50%"
//               cy="50%"
//               innerRadius={70}
//               outerRadius={100}
//               dataKey="value"
//               paddingAngle={2}
//               label={(entry: { value: any; }) => `${entry.value}亿`}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={`cell-${index}`} fill={entry.color} />
//               ))}
//             </Pie>
//             <Tooltip />
//           </PieChart> */}

//           {/* Centered Inner Content */}
//           <div className="absolute text-center">
//             {/* <Text intent="highlight" className="text-4xl text-yellow-400">
//               π
//             </Text> */}
//             <Text variant="sm/default/white" className="mt-2">
//               总量 1000亿
//             </Text>
//           </div>
//         </div>

//         {/* Legend Section */}
//         <div className="mt-6 grid grid-cols-2 gap-4">
//           {data.map((entry, index) => (
//             <div key={index} className="flex items-center gap-2">
//               <div
//                 className="w-4 h-4 rounded-full"
//                 style={{ backgroundColor: entry.color }}
//               ></div>
//               <Text variant="sm/default/white">{entry.label}</Text>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* <Images.hr /> */}
//     </>
//   );
// }
