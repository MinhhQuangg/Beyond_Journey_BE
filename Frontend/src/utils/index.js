import InventoryIcon from "@mui/icons-material/Inventory";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const level = ["Easy", "Medium", "Difficult"];

const sort = ["Price low to high", "Price high to low"];

const price = ["0 - $500", "$500 - $1000", "$1000 - $1500"];

const navOptions = [
  { label: "Destination", path: "/destination" },
  { label: "Travel Deal", path: "/travel-deal" },
  { label: "Booking", path: "/booking" },
  { label: "Blogs", path: "/blogs" },
  { label: "About Us", path: "/AboutUs" },
];

const mostAskedQuestions = [
  {
    question: "What types of tours do you offer?",
    answer:
      "We offer a wide variety of tours, including guided city tours, adventure tours, cultural experiences, nature excursions, and luxury vacations. You can browse by destination or activity type to find your perfect tour.",
  },
  {
    question: "How can I book a tour?",
    answer:
      "Booking a tour is simple! Just visit the tour page, select the dates and number of people, and follow the steps to complete your booking online. Alternatively, you can contact our team for assistance.",
  },
  {
    question: "Are your tours suitable for all ages?",
    answer:
      "Yes, we offer tours for all age groups! Some tours may have age restrictions or require specific fitness levels, so be sure to check the details of each tour before booking.",
  },
  {
    question: " Can I leave a review for the tour?",
    answer:
      "Yes! After your tour, we encourage you to share your experience by leaving a review. Your feedback helps us improve our services and assists future travelers in making informed decisions.",
  },
];

const usefulLinks = ["Your Account", "Our Team", "FAQ"];

const whyUs = [
  {
    reason: "Curated Tour Packages",
    illustrate: "Tailored to meet your interests, budget, and schedule.",
    icon: InventoryIcon,
  },
  {
    reason: "User-Friendly Design",
    illustrate: "Easily find, compare, and book tours with just a few clicks.",
    icon: Diversity2Icon,
  },
  {
    reason: "Verified Reviews and Testimonials",
    illustrate: "Trustworthy feedback to help you make informed decisions.",
    icon: ReviewsIcon,
  },
  {
    reason: "Exclusive Deals",
    illustrate:
      "Competitive pricing and special offers you won’t find anywhere else.",
    icon: LocalOfferIcon,
  },
  {
    reason: "24/7 Support",
    illustrate:
      "Dedicated customer service to assist you every step of the way.",
    icon: SupportAgentIcon,
  },
];

export {
  level,
  sort,
  price,
  navOptions,
  usefulLinks,
  mostAskedQuestions,
  whyUs,
};
