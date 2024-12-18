// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilCalendarAlt,
  UilPodium,
  UilMoneyWithdraw

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal, } from "@iconscout/react-unicons";
import ArticleIcon from '@mui/icons-material/Article';
import HandshakeIcon from '@mui/icons-material/Handshake';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import HotelIcon from '@mui/icons-material/Hotel';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    path:"/dashboard",
    heading: "Dashboard",
  },
  {
    icon: Diversity3Icon,
    path:"/team",
    heading: "Team",
  },
  {
    icon: UilCalendarAlt,
    path:"/event",
    heading: "Event",
  },
  {
    icon: InterpreterModeIcon,
    path:"/speakers",
    heading: "Speakers",
  },
  {
    icon: UilPodium,
    path:"/interventions",
    heading: 'Inteventions'
  },
  {
    icon: UilMoneyWithdraw,
    path:"/sponsors",
    heading: 'Sponsors'
  },
  {
    icon: HandshakeIcon,
    path:"/partners",
    heading: 'Partners'
  },
  {icon: UilUsersAlt,
  path:"/participants",
  heading: 'Participants'
},
{icon: HotelIcon,
  path:"/hotels",
  heading: 'Hotels'
},
{icon: ThumbUpAltIcon,
  path:"/testimentials",
  heading: 'Testimentials'
},
{icon: ArticleIcon,
  path:"/blogs",
  heading: 'Blogs'
},
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Participants",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsersAlt,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Sponsors",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Speakers",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: InterpreterModeIcon,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];
