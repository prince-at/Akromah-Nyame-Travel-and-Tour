import WorkAbroadPicture from "../../assets/3edf25c7.jpg";
import { BlogList } from "../BlogData";
import MarqueeText2 from "../MarqueeText2";
import "./Css/WorkAbroad.css";
import luxuryHotel from "../../assets/luxury_disabled_holiday_accessible_accommodation_all_inclusive_luxurious-4.jpg";

import { motion } from "framer-motion";

const HotelBlog = () => {
 
  return (
    <motion.div
    key={location.pathname}
     initial={{ opacity: 0, x: 100 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -100 }}
    transition={{ duration: 0.3 }}
    >
      <div className="blog-page">
        <img
          src={WorkAbroadPicture}
          alt="blog-background-picture"
          className="Blog-picture"
        />
        <div>
          <h1 className="blog-title-for-topic">
            {" "}
            ✈️
            <br /> Things You Should Know Before
            <br />
            Booking a Hotel
          </h1>
          {BlogList.map((blog) => {
            return (
              <div>
                <p className="date-for-blogs">{blog.blogDate1} </p>
              </div>
            );
          })}
        </div>
        <MarqueeText2 />
      </div>

      <div className="work-abroad-container">
        <div className="work-abroad-content">
          {/* <img src={WorkAbroadPicture} alt="work-abroad-pic" className="work-abroad-picture"/> */}
          <h1 className="work-abroad-title">
            Whether you're planning a luxury vacation, a business trip, or a
            quick weekend getaway, choosing the right hotel can make or break
            your experience. With thousands of options at your fingertips, hotel
            reservations can feel overwhelming — but it doesn’t have to be. Here
            are 7 key tips to help you book the perfect hotel — and get the most
            out of your stay.
          </h1>
          <img
            src={luxuryHotel}
            alt="luxuryHotel"
            className="luxury-singapore"
          />

          <hr />
          <h1 className="global-text">📍 Location Is Everything</h1>
          <h1 className="work-abroad-title">
            Before you hit "Book Now", double-check the hotel’s location. Is it
            close to the city center, airport, public transport, or key
            attractions? A cheaper hotel far from everything might cost you more
            in taxi fares and lost time.
          </h1>
          <hr />
          <h1 className="global-text">
            💸 Compare Prices (and Look for Deals)
          </h1>
          <h1 className="work-abroad-title">
            Use hotel comparison websites or booking platforms to get a sense of
            the going rate. Don’t forget to check the hotel’s own website — they
            sometimes offer exclusive discounts, free upgrades, or loyalty
            points.
          </h1>
          <hr />
          <h1 className="global-text">🛏️ Read Reviews — Not Just the Stars</h1>
          <h1 className="work-abroad-title">
            Star ratings can be useful, but real guest reviews tell the full
            story. Look for reviews that mention cleanliness, staff
            friendliness, Wi-Fi strength, and breakfast quality. Avoid reviews
            that are outdated or overly emotional — balance is key.
          </h1>
          <hr />
          <h1 className="global-text">🧾 Check What’s Included</h1>
          <h1 className="work-abroad-title">
            Some hotels charge extra for things you’d expect to be free — like
            parking, Wi-Fi, or even using the gym. Always read the fine print
            and make sure you know what’s included in your rate.
          </h1>
          <hr />
          <h1 className="global-text">
            🕒 Pay Attention to Check-In and Check-Out Times
          </h1>
          <h1 className="work-abroad-title">
            Make sure the hotel’s check-in/check-out policy fits your travel
            plans. Arriving too early or leaving too late? See if they offer
            luggage storage or early check-in/late check-out options.
          </h1>
          <hr />
          <h1 className="global-text">🔐 Book Through Secure Channels</h1>
          <h1 className="work-abroad-title">
            Always use reputable booking platforms or the hotel’s official
            website. Avoid third-party sites with sketchy reviews or no customer
            support. And double-check the cancellation policy before you pay.
            You won’t just come home with credits. You’ll come home with
            unforgettable stories, global insight, and a whole new version of
            yourself.
          </h1>

          <hr />
          <h1 className="global-text">📞 Don’t Be Afraid to Call the Hotel</h1>
          <h1 className="work-abroad-title">
            Want a better room? Need an early check-in? Hotels often offer more
            flexibility when you call directly. It's also a good way to confirm
            your reservation and make special requests.
          </h1>
          <hr />
          <h1 className="global-text">✅ Final Thoughts</h1>
          <h1 className="work-abroad-title">
            Booking a hotel doesn’t need to be a hassle — it just requires a
            little planning. With the right research and a few smart decisions,
            you can find the perfect stay for your trip, whether it's a 5-star
            resort or a cozy budget-friendly room. Happy booking — and safe
            travels!
          </h1>
          <h1 className="work-abroad-title">
            Need help booking your next stay? Our team can help you find the
            best hotels at the best prices. Contact us for custom travel
            packages or group reservations.
          </h1>

          <button
            className="wbtn-get"
            onClick={() => window.location.href="/contact"}
          >
            Get in Touch with Us{" "}
          </button>
          <hr />
          <h1 className="global-text">Conclusion</h1>
        </div>
      </div>
    </motion.div>
  );
};

export default HotelBlog;
 