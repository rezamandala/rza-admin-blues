// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "#b134af",
    },
    barValue: 81,
    value: "69,198",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [21, 60, 45, 34, 78, 96, 81],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "#0db25b",
    },
    barValue: 67,
    value: "24,690",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [22, 40, 90, 70, 80, 70, 30],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround: "#feca71",
    },
    barValue: 55,
    value: "1,310",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [12, 23, 35, 19, 29, 40, 26],
      },
    ],
  },
];

// Recent Update Card Data
export const RecentActivitiesData = [
  {
    img: img1,
    name: "Bambang Pamungkas",
    noti: "has ordered Samsung Galaxy S22 Ultra.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "Budi Sudarsono",
    noti: "has received Apple Macbook Pro M4",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Desi Ratnasari",
    noti: "has ordered Iphone 15 Pro Max and Asus Vivobook Ryzen 5.",
    time: "2 hours ago",
  },
];
