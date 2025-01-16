import InventoryIcon from "@mui/icons-material/Inventory";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ReviewsIcon from "@mui/icons-material/Reviews";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import PlaceIcon from "@mui/icons-material/Place";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import LanguageIcon from "@mui/icons-material/Language";
import GroupsIcon from "@mui/icons-material/Groups";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import ElderlyIcon from "@mui/icons-material/Elderly";
import NavigationIcon from "@mui/icons-material/Navigation";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MovingIcon from "@mui/icons-material/Moving";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
const info = [
  { icon: HolidayVillageIcon, type: "Accomodation" },
  { icon: PlaceIcon, type: "Destination" },
  { icon: FlightTakeoffIcon, type: "Departure City" },
  { icon: FlightLandIcon, type: "Arrival City" },
  { icon: TipsAndUpdatesIcon, type: "Guide" },
  { icon: LanguageIcon, type: "Language" },
  { icon: GroupsIcon, type: "Group Size" },
  { icon: ChildCareIcon, type: "Min Age" },
  { icon: ElderlyIcon, type: "Max Age" },
  { icon: NavigationIcon, type: "Address" },
  { icon: LocalDiningIcon, type: "Meals" },
  { icon: EventAvailableIcon, type: "Tour Availability" },
  { icon: MovingIcon, type: "Difficulty" },
  { icon: DirectionsBusIcon, type: "Transportation" },
];

const level = ["Easy", "Medium", "Difficult"];

const sort = ["Price low to high", "Price high to low"];

const price = ["0 - $500", "$500 - $1000", "$1000 - $1500"];

const navOptions = [
  { label: "Destination", path: "/destination" },
  { label: "Travel Deal", path: "/travel-deal" },
  { label: "Tours", path: "/tours" },
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
const paymentQuestions = [
  {
    question: "Can I pay for my US tour using PayPal?",
    answer:
      "Yes, PayPal is accepted for all tours booked through BeyondJourney. It’s a secure and hassle-free way to complete your payment.",
  },
  {
    question: "Are there any additional PayPal transaction fees?",
    answer:
      "No, we cover all PayPal transaction fees. You only pay the listed tour price.",
  },
  {
    question: "Is it possible to get a refund through PayPal?",
    answer:
      "Yes, refunds for cancellations will be processed back to your PayPal account based on our cancellation policy.",
  },
  {
    question: " How will I know if my PayPal payment is successful?",
    answer:
      "You will receive an email receipt from PayPal along with a booking confirmation from our team.",
  },
];

const tourQuestions = [
  {
    question: " Will there be a guide throughout the entire trip?",
    answer:
      "Yes, our knowledgeable guides will accompany you for the duration of your tour to ensure a smooth and enjoyable experience.",
  },
  {
    question: "What kind of tours do you offer in the United States?",
    answer:
      "We offer city tours, outdoor adventures, cultural excursions, and national park experiences tailored for every traveler.",
  },
  {
    question: "Are the tour guides experienced and certified?",
    answer:
      "Yes, all of our tour guides are certified professionals with extensive knowledge of US destinations.",
  },
  {
    question: "What is the average group size for tours?",
    answer:
      "Our tours typically have a small group size of 6–12 people to ensure a personalized experience.",
  },
];
const preparationQuestions = [
  {
    question: "What should I wear during my trip?",
    answer:
      "Comfortable clothing and walking shoes are recommended. For national parks or hiking trips, bring weather-appropriate gear.",
  },
  {
    question: "What do I need to pack for my trip?",
    answer:
      "Essentials include ID, comfortable footwear, weather-appropriate clothing, and a water bottle. Specific requirements will be mentioned in your travel guide.",
  },
];
const usefulLinks = [
  { label: "Your Account", path: "/account" },
  { label: "Our Team", path: "/ourteam" },
  { label: "FAQ", path: "/FAQ" },
];
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
    reason: "Verified Testimonials",
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
  info,
  level,
  sort,
  price,
  navOptions,
  usefulLinks,
  mostAskedQuestions,
  whyUs,
  paymentQuestions,
  tourQuestions,
  preparationQuestions,
};
