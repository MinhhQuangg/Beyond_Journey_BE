import React from "react";
import NavBar from "../components/NavBar";
import { Footer } from "../components/Footer";

export const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to <strong>BeyondJourney</strong>, your trusted guide to
            exploring the beauty and wonders of the United States!
          </p>
        </div>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-base leading-relaxed">
            At <strong>BeyondJourney</strong>, our story is deeply rooted in a
            passion for adventure across the diverse landscapes of the United
            States. From the vibrant cities to the serene national parks, our
            team has spent years curating unforgettable travel experiences for
            explorers just like you. Whether it’s discovering hidden gems in New
            York City or navigating the rugged trails of the Grand Canyon, we’ve
            been there and done that, all to bring you the most authentic and
            enriching journeys.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong>Personalized Travel Guides:</strong> Tailored
              recommendations based on years of firsthand experience, helping
              you uncover the best spots in the US.
            </li>
            <li>
              <strong>Local Expertise:</strong> Insights into local culture,
              food, and traditions to make your travels more immersive.
            </li>
            <li>
              <strong>Itinerary Planning:</strong> Carefully curated plans to
              ensure you make the most of your time, whether it’s a weekend
              getaway or an extended road trip.
            </li>
            <li>
              <strong>Insider Tips:</strong> Practical advice on everything from
              packing and budgeting to navigating public transport and finding
              off-the-beaten-path adventures.
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Philosophy</h2>
          <p className="text-base leading-relaxed">
            At <strong>BeyondJourney</strong>, we believe in traveling
            responsibly and sustainably. Our mission is to inspire meaningful
            connections and unforgettable experiences while respecting the
            communities, cultures, and natural environments we explore. Through
            our guides and expertise, we aim to make every trip within the
            United States extraordinary.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-base leading-relaxed">
            Our team of seasoned travelers and experienced guides has spent
            years uncovering the hidden treasures of the United States. From
            bustling urban centers to peaceful rural escapes, our collective
            experiences allow us to provide you with unique insights and
            unmatched expertise. We’re not just here to guide your travels;
            we’re here to share our love for this incredible country with you.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-base leading-relaxed">
            You can get ahold of us by Phone or{" "}
            <span
              className="text-primary_3 underline cursor-pointer hover:text-primary_5"
              onClick={() =>
                (window.location.href = "mailto:tourwebsite2310@gmail.com")
              }
            >
              Email
            </span>{" "}
            7 days a week between the hours of 9:00 AM and 4:30 PM EST. Our
            Adventure Consultants are ready to answer all your questions; and if
            they don’t know the answer they’ll find it out! Interested in
            finding out about the availability on a trip or ready to book a
            trip, you can also look in the Dates section of each trip page to
            book online!
          </p>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Join Us on the Journey
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Whether you’re a seasoned explorer or planning your first adventure,{" "}
            <strong>BeyondJourney</strong> is here to inspire, support, and
            celebrate every step of your travel experience.
          </p>
          <p className="italic text-base">Your Adventure, Our Guide</p>
          <p className="mt-6 font-bold">Happy travels,</p>
          <p className="font-semibold">The BeyondJourney Team</p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
