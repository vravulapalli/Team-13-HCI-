import AmazonScarcity from "./assets/amazonScarcity.png";
import HiddenCostsandSneakyFees from "./assets/HiddenCostsandSneakyFees.png";
import Nudges from "./assets/Nudges.png";
import Reciprocity from "./assets/Reciprocity.png";
import Etsy1 from "./assets/Etsy1.png";
import Booking1 from "./assets/Booking1.png";
import urgency3 from "./assets/urgency-3.png";

import hs1 from "./assets/hs-1.png";
import hs2 from "./assets/hs-2.png";
import hs3 from "./assets/hs-3.png";
import hs4 from "./assets/hs-4.png";

export const knownDarkPatternsUrls = [
  "https://www.amazon.com",
  "https://www.etsy.com",
  "https://www.booking.com",
  "https://www.flipkart.com",
  'https://www.wsjwine.com',
  'https://www.ross-simons.com'
];

export const siteDarkPatterns = [
  {
    site: "amazon",
    content: [
      {
        heading: "Scarcity Manipulation",
        points: [
          "Scarcity is a powerful psychological trigger, and designers often exploit it to create a false sense of urgency. E-commerce websites frequently employ this dark pattern by displaying limited stock or time-sensitive offers.",
          'One such example is the infamous "Countdown Timer" tactic used during online sales, where the timer relentlessly ticks down, pressuring users to make impulsive purchases they might later regret.',
        ],
        imgPoints: [
          {
            images: [AmazonScarcity],
            description: "",
          },
        ],
      },
      {
        heading: "Hidden Costs and Sneaky Fees",
        points: [
          "Dark patterns are not limited to just online transactions; they can also manifest in pricing models. Some websites intentionally hide additional costs until the last steps of the checkout process, catching users off guard with unexpected fees.",
        ],
        imgPoints: [
          {
            images: [HiddenCostsandSneakyFees],
            description: "",
          },
        ],
      },
      {
        heading: "Use of “nudges”",
        points: [
          "Another typical dark pattern that Amazon employs is “nudges,” which are prompts or notifications designed to encourage users to take certain actions. Amazon achieves this through various tactics, including highlighting certain products or services or placing them in prominent locations on the website or app.",
          "Another example of the “nudge” technique is when Amazon displays messages like “Frequently bought together” to encourage users to make purchases they may not have made otherwise. While these nudges may seem innocuous, they can effectively influence user behavior."
        ],
        imgPoints: [
          {
            images: [Nudges],
            description: "",
          },
        ],
      },
      {
        heading: "Reciprocity",
        points: [
          "Amazon may also use “reciprocity” by offering users something for free or at a reduced cost, with the expectation that the user will feel obligated to reciprocate by making a purchase or taking some other action that benefits the company. For example, Amazon may offer users free shipping on their first purchase or a small discount in exchange for signing up for their email list. ",
          "While these offers may seem harmless at first glance, they are designed to create a sense of indebtedness in the user, making them more likely to make purchases or take other actions that benefit the company in the future. This tactic can be seen as manipulative and erode user trust, as users may feel they are being taken advantage of or deceived."
        ],
        imgPoints: [
          {
            images: [Reciprocity],
            description: "",
          },
        ],
      },
    ],
  },
  {
    site: "etsy",
    content: [
      {
        heading: "Scarcity Manipulation",
        points: [
          "Etsy has recently adopted these techniques by highlighting the number of people who have added an item to their basket and the limited stock for that item. These user interface elements leave you feeling that if you don’t act quickly, you will miss out.",
        ],
        imgPoints: [
          {
            images: [Etsy1],
            description: "",
          },
        ],
      }
    ],
  },
  {
    site: "booking",
    content: [
      {
        heading: "Scarcity Manipulation",
        points: [
          "In usability testing I found that users were well aware that booking.com was trying to pressure them into making a booking.",
        ],
        imgPoints: [
          {
            images: [Booking1],
            description: "",
          },
        ],
      }
    ],
  },
  {
    site: "flipkart",
    content: [
      {
        heading: "Urgency",
        points: [
          "In the example above, depicted from the popular Ecommerce app “Flipkart”, you could see that the app is urging the user to buy quickly within the said amount of hours if he/she wishes to get it delivered for free, without any charge.",
        ],
        imgPoints: [
          {
            images: [urgency3],
            description: "",
          },
        ],
      }
    ],
  },
  {
    site: "wsjwine",
    content: [
      {
        heading: "Hidden Subscription",
        points: [
          "Hidden Subscription on wsjwine.com. Selecting the WSJwine Advantage option does not reveal the recurring subscription of $89 unless \"Learn More\" is clicked on.",
        ],
        imgPoints: [
          {
            images: [hs1, hs2],
            description: "",
          },
        ],
      }
    ],
  },
  {
    site: "ross-simons",
    content: [
      {
        heading: "Hidden Subscription",
        points: [
          "Hidden Subscription on ross-simons.com. Joining the VIP Rewards Club does not reveal the recurring subscription of $95 unless \"Terms and conditions\" is clicked on.",
        ],
        imgPoints: [
          {
            images: [hs3, hs4],
            description: "",
          },
        ],
      }
    ],
  },
];
