import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const CardProject = ({ title, image, description, repoLink, liveLink }) => {
  return (
    <div className="bg-purple-900 text-white rounded-lg shadow-lg p-6 w-80">
      <h3 className="text-lg font-bold text-center mb-3 p-2 rounded-lg">
        {title}
      </h3>
      
      <div className="flex items-center justify-center mb-4">
        <img
          src={image}
       
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>

      <div className="flex items-center justify-between mb-2">
   
        <div className="flex gap-2">
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-xl hover:text-gray-300 transition-all" />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <FiExternalLink className="text-xl hover:text-gray-300 transition-all" />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default CardProject;
