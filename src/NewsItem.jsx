import React from "react";

function NewsItem(props) {
  const { desc, title, imageURL, newsUrl, sourceName } = props;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-200">
      <img className="w-full" src={imageURL} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded px-3 py-2 text-sm font-semibold text-gray-700 mr-2">
          {sourceName}
        </span>
        <a
          href={newsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;