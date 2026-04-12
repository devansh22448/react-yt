import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-slate-900 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Product Page</h1>
      <div className="flex justify-center gap-5 py-5">
        <Link className="text-xl font-semibold" to="/product/men">
          Men
        </Link>
        <Link className="text-xl font-semibold" to="/product/women">
          Women
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
