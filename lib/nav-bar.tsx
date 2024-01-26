import { API_URL } from "@/constants";
import Link from "next/link";
import React from "react";

const NavBar = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex flex-row gap-x-4">
      {categories.map((category) => (
        <button>
          <Link href={`/home/${category}`}>{category}</Link>
        </button>
      ))}
    </div>
  );
};

export default NavBar;
