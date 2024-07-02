import React from "react";
import { BsStarFill } from "react-icons/bs";

export default function Reviews() {
  const reviewsData = [
    {
      rating: 5,
      name: "Elliot",
      date: "January 3, 2023",
      text: "The Boho Retreat Tent is such an awesome tent! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
      id: "1",
    },
    {
      rating: 5,
      name: "Sandy",
      date: "December 12, 2022",
      text: "This is our third time using the Explorer Backpack for our travels and we love it! No complaints, absolutely perfect!",
      id: "2",
    },
    {
      rating: 4,
      name: "Mark",
      date: "November 25, 2022",
      text: "The Professional Camera Kit was a great choice for our photography trip. It helped us capture amazing shots with its high-quality lenses and accessories. Highly recommended for any photography enthusiast!",
      id: "3",
    },
    {
      rating: 5,
      name: "Julia",
      date: "October 8, 2022",
      text: "The Portable BBQ Grill is fantastic! We used it during our camping trip and it cooked everything perfectly. Easy to transport and set up. Definitely a must-have for outdoor gatherings.",
      id: "4",
    },
    {
      rating: 4,
      name: "Chris",
      date: "September 15, 2022",
      text: "The Camping Backpack was very comfortable and spacious during our hiking trip. It held all our gear securely and the ergonomic design made it easy to carry for long distances.",
      id: "5",
    },
    {
      rating: 5,
      name: "Anna",
      date: "August 30, 2022",
      text: "The Fishing Gear Set is excellent! It had everything we needed for a successful fishing day. The rods and reels performed flawlessly, and the included baits were effective. Highly recommend for any fishing enthusiast!",
      id: "6",
    },
    {
      rating: 5,
      name: "Mike",
      date: "July 5, 2022",
      text: "The Luxury Camping Tent exceeded our expectations. It was spacious, comfortable, and kept us dry during a rainy camping trip. The premium materials and craftsmanship are evident. A luxurious experience in nature!",
      id: "7",
    },
    {
      rating: 4,
      name: "Rachel",
      date: "June 12, 2022",
      text: "The Mountain Bike was sturdy and reliable on the trails. It handled rough terrains well and provided a smooth ride. Perfect for adventurous trail rides!",
      id: "8",
    },
    {
      rating: 5,
      name: "David",
      date: "May 20, 2022",
      text: "The Diving Equipment Set was top-notch. It provided everything we needed for a safe and enjoyable diving experience. High-quality gear that I would trust for future dives.",
      id: "9",
    },
    {
      rating: 5,
      name: "Emily",
      date: "April 4, 2022",
      text: "The Backpacking Tent was lightweight and easy to carry during our backpacking trip. It set up quickly and kept us dry and comfortable throughout the night. Perfect for solo travelers!",
      id: "10",
    },
  ];

  return (
    <section className="host-reviews">
      <div className="top-text">
        <h2>Your reviews</h2>
        <p>
          Last <span>30 days</span>
        </p>
      </div>
      <img
        className="graph"
        src="/assets/images/reviews-graph.png"
        alt="Review graph"
      />
      <h3>Reviews ({reviewsData.length})</h3>
      {reviewsData.map((review) => (
        <div key={review.id}>
          <div className="review">
            {[...Array(review.rating)].map((_, i) => (
              <BsStarFill className="review-star" key={i} />
            ))}
            <div className="info">
              <p className="name">{review.name}</p>
              <p className="date">{review.date}</p>
            </div>
            <p>{review.text}</p>
          </div>
          <hr />
        </div>
      ))}
    </section>
  );
}
