import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`} className="block">
      <div className="w-full bg-gray-100 rounded-xl p-3 sm:p-4 hover:shadow-md transition">

        {/* Image */}
        <div className="w-full mb-3 sm:mb-4 overflow-hidden rounded-xl">
          {featuredImage && (
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-[180px] sm:h-[220px] md:h-[250px] object-cover rounded-xl transition-transform duration-300 hover:scale-105"
            />
          )}
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold line-clamp-2">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;