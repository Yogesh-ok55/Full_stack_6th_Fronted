import React from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const user = { name: "John Doe", activities: ["Orders", "Reviews", "Wishlist"] };
  const data = [
    { name: "Orders", value: 40 },
    { name: "Reviews", value: 15 },
    { name: "Wishlist", value: 25 },
  ];
  const products = [
    { id: 1, name: "Smartphone", price: "$699" },
    { id: 2, name: "Laptop", price: "$999" },
    { id: 3, name: "Headphones", price: "$199" },
  ];

  return (
    <div className="p-6 flex flex-col items-center space-y-6">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome, {user.name}
      </motion.h1>

      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Activity Statistics</h2>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="w-full max-w-md">
        <h2 className="text-lg font-semibold mb-4">Product List</h2>
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="p-4 mb-2 bg-gray-100 rounded-lg shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: product.id * 0.2 }}
          >
            <div className="flex justify-between">
              <span>{product.name}</span>
              <span className="font-bold">{product.price}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">View More</button>
    </div>
  );
};

export default Dashboard;