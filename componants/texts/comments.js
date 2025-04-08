"use client";

import React from "react";

const reviews = [
  {
    id: 1,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 3,
  },
  {
    id: 2,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 5,
  },
  {
    id: 1,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 3,
  },
  {
    id: 2,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 5,
  },
  {
    id: 1,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 3,
  },
  {
    id: 2,
    avatar: "https://placehold.co/50x50",
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2023-10-09",
    time: "14:56:30",
    rating: 5,
  },
];

const Comments = () => {
  return (
    <div className="space-y-4 p-4">
      {reviews.map((review, index) => (
        <div
          style={{
            backgroundColor: "var(--advert-list-bg)",
          }}
          key={index}
          className="p-4 rounded-lg flex items-start space-x-4"
        >
          <div className="flex-none">
            <img
              src={review.avatar}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg">{review.title}</h3>
              <div className="text-yellow-400">
                {"★".repeat(review.rating).padEnd(5, "☆")}
              </div>
            </div>
            <p className="text-sm mb-3">{review.content}</p>
            <div className="text-xs pt-2 border-t">
              {review.date} {review.time}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
