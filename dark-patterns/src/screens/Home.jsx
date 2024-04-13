import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

import forcedIcon from "../assets/Icons/forced.png";
import misdirectionIcon from "../assets/Icons/misdirection.png";
import obstructionIcon from "../assets/Icons/obstruction.png";
import sneackingIcon from "../assets/Icons/sneaking.png";
import socialIcon from "../assets/Icons/social.png";
import stockIcon from "../assets/Icons/stock.png";
import urgencyIcon from "../assets/Icons/urgency.png";

import hs1 from "../assets/Sneaking/hs-1.png";
import hs2 from "../assets/Sneaking/hs-2.png";
import hs3 from "../assets/Sneaking/hs-3.png";
import hs4 from "../assets/Sneaking/hs-4.png";
import sb1 from "../assets/Sneaking/sb-1.png";
import sb2 from "../assets/Sneaking/sb-2.png";
import sb3 from "../assets/Sneaking/sb-3.png";
import sb5 from "../assets/Sneaking/sb-5.png";

import urgency1 from "../assets/Urgency/urgency-1.png";
import urgency2 from "../assets/Urgency/urgency-2.png";
import urgency3 from "../assets/Urgency/urgency-3.png";
import urgency4 from "../assets/Urgency/urgency-4.png";

import cs1 from "../assets/Misdirection/cs-1.png";
import ps1 from "../assets/Misdirection/ps-1.png";
import tq1 from "../assets/Misdirection/tq-1.png";
import vi1 from "../assets/Misdirection/vi-1.png";

import sp1 from "../assets/SocialProof/sp-1.png";
import sp2 from "../assets/SocialProof/sp-2.png";
import testimonial from "../assets/SocialProof/testimonial.png";

import hd1 from "../assets/Scarcity/hd-1.png";
import hd2 from "../assets/Scarcity/hd-2.png";
import ls2 from "../assets/Scarcity/ls-2.png";
import s1 from "../assets/Scarcity/s-1.png";
import s3 from "../assets/Scarcity/s-3.png";

import o1 from "../assets/Obstruction/o1.png";
import o2 from "../assets/Obstruction/o2.png";
import o3 from "../assets/Obstruction/o3.png";
import o4 from "../assets/Obstruction/o4.png";

import fa1 from "../assets/ForcedAction/fa-1.png";
import fa2 from "../assets/ForcedAction/fa-2.png";
import fa3 from "../assets/ForcedAction/fa-3.png";


export default function Home() {
  const patternsData = [
    {
      patternIcon: sneackingIcon,
      patternTitle: "Sneaking",
      patternDescription:
        "Attempting to misrepresent user actions, or delay information that if made available to users, they would likely object to.",
      points: [
        {
          pointHeading: "Sneak into Basket",
          pointDescriptions: [
            "Adding additional products to users' shopping carts without their consent.",
            "Prevalence: 7 instances across 7 websites.",
          ],
          imgPoints: [
            {
              images: [sb1],
              description:
                "Sneak into Basket on avasflowers.net. Despite requesting no greeting cards, one worth $3.99 is included.",
            },
            {
              images: [sb5],
              description:
                "Sneak into Basket on cellularoutfitter.com. The pre-checked box means the screen protector worth $4.99 ends up in cart.",
            },
          ],
        },
        {
          pointHeading: "Hidden Costs",
          pointDescriptions: [
            "Revealing previously undisclosed charges to users right before they make a purchase.",
            "Prevalence: 5 instances across 5 websites.",
          ],
          imgPoints: [
            {
              images: [sb2],
              description:
                "Hidden Costs on proflowers.com. The Care & Handling charge ($2.99) is disclosed on the last step.",
            },
          ],
        },
        {
          pointHeading: "Hidden Subscription",
          pointDescriptions: [
            "Charging users a recurring fee under the pretense of a one-time fee or a free trial.",
            "Prevalence: 14 instances across 13 websites.",
          ],
          imgPoints: [
            {
              images: [sb3],
              description:
                'This is a soft scam used by the eyewear giant Lenskart. Whenever you buy glasses on the site and check out, they’ll add a Gold membership along with it. ',
            },
            {
              images: [hs1, hs2],
              description:
                'Hidden Subscription on wsjwine.com. Selecting the WSJwine Advantage option does not reveal the recurring subscription of $89 unless "Learn More" is clicked on.',
            },
            {
              images: [hs3, hs4],
              description:
                'Hidden Subscription on ross-simons.com. Joining the VIP Rewards Club does not reveal the recurring subscription of $95 unless "Terms and conditions" is clicked on.',
            },
          ],
        },
      ],
    },
    {
      patternIcon: urgencyIcon,
      patternTitle: "Urgency",
      patternDescription: "Imposing a deadline on a sale or deal, thereby accelerating user decision-making and purchases.",
      points: [
        {
          pointHeading: "Countdown Timer",
          pointDescriptions: [
            "Indicating to users that a deal or discount will expire using a counting-down timer.",
            "Prevalence: 393 instances across 361 websites.",
          ],
          imgPoints: [
            {
              images: [
                urgency1
              ],
              description: "Countdown Timer on justfab.com. In this instance, the stated offer is valid even after the hour long timer expires.",
            },
            {
              images: [
                urgency3
              ],
              description: "In the example above, depicted from the popular Ecommerce app “Flipkart”, you could see that the app is urging the user to buy quickly within the said amount of hours if he/she wishes to get it delivered for free, without any charge.",
            },
            {
              images: [
                urgency2
              ],
              description: "Countdown Timer in a popup displayed on leesa.com. In this instance, the stated offer is valid even after the half hour long timer expires.",
            },
          ]
        },
        {
          pointHeading: "Limited-time Message",
          pointDescriptions: [
            "Indicating to users that a deal or sale will expire will expire soon without specifying a deadline, thus creating uncertainty.",
            "Prevalence: 88 instances across 84 websites.",
          ],
          imgPoints: [
            {
              images: [
                urgency4
              ],
              description: "Limited Time on samsung.com. The website states that the deal is \"Limited Time Only\" without disclosing the deal's deadline.",
            },
          ]
        },
      ]
    },
    {
      patternIcon: misdirectionIcon,
      patternTitle: "Misdirection",
      patternDescription: "Using visuals, language, or emotion to steer users toward or away from making a particular choice.",
      points: [
        {
          pointHeading: "Confirmshaming",
          pointDescriptions: [
            "Using language and emotion (shame) to steer users away from making a certain choice.",
            "Prevalence: 169 instances across 164 websites.",
          ],
          imgPoints: [
            {
              images: [
                cs1
              ],
              description: "Confirmshaming on radioshack.com. The option to dismiss the popup is framed to shame the user into avoiding it.",
            }
          ]
        },
        {
          pointHeading: "Visual Interference",
          pointDescriptions: [
            "Using style and visual presentation to steer users to or away from certain choices.",
            "Prevalence: 25 instances across 24 websites.",
          ],
          imgPoints: [
            {
              images: [
                vi1
              ],
              description: "Visual Interference on greenfingers.com. The opt-out option is grayed out to indicate it is disabled or cannot be clicked, when it can.",
            }
          ]
        },
        {
          pointHeading: "Trick Questions",
          pointDescriptions: [
            "Using confusing language to steer users into making certain choices.",
            "Prevalence: 9 instances across 9 websites.",
          ],
          imgPoints: [
            {
              images: [
                tq1
              ],
              description: "Trick Questions on newbalance.co.uk. Normally, checkboxes are designed to be ticked to opt in. In this case however, the user is required to tick to opt out.",
            }
          ]
        },
        {
          pointHeading: "Pressured Selling",
          pointDescriptions: [
            "Pre-selecting more expensive variations of a product, or pressuring the user to accept the more expensive variations of a product and related products.",
            "Prevalence: 67 instances across 62 websites.",
          ],
          imgPoints: [
            {
              images: [
                ps1
              ],
              description: "Pressured Selling on topcoat.store. On adding a product to cart, a popup appears asking the user to upgrade their purchase.",
            }
          ]
        },

      ]
    },
    {
      patternIcon: socialIcon,
      patternTitle: "Social proof",
      patternDescription: "Influencing users' behavior by describing the experiences and behavior of other users.",
      points: [
        {
          pointHeading: "Activity Messages",
          pointDescriptions: [
            "Informing the user about the activity on the website (e.g., purchases, views, visits).",
            "Prevalence: 313 instances across 264 websites.",
          ],
          imgPoints: [
            {
              images: [
                sp2
              ],
              description: "Activity Notification on thredup.com highlighting the names and locations of those who purchased the product. The message always signals sold products as \"just saved\" by customers even though the products have been sold for a long time.",
            },
            {
              images: [
                sp1
              ],
              description: "Activity Notification on jcpenney.com highlighting the number of people who viewed the product in the last day.",
            },
          ]
        },
        {
          pointHeading: "Testimonials of Uncertain Origin",
          pointDescriptions: [
            "Testimonials on a product page whose origin is unclear.",
            "Prevalence: 12 instances across 12 websites.",
          ],
          imgPoints: [
            {
              images: [
                testimonial
              ],
              description: "Testimonials on spanx.com. The website does not disclose how these were sourced, or whether they were submitted by actual customers.",
            },
          ]
        },
      ]
    },
    {
      patternIcon: stockIcon,
      patternTitle: "Scarcity",
      patternDescription: "Signaling that a product is likely to become unavailable, thereby increasing its desirability to users.",
      points: [
        {
          pointHeading: "Low-stock Message",
          pointDescriptions: [
            "Indicating to users that limited quantities of a product are available, increasing its desirability.",
            "Prevalence: 632 instances across 581 websites.",
          ],
          imgPoints: [
            {
              images: [
                s1, s3
              ],
              description: "Low-stock Message on 6pm.com. Choosing product options shows Only 3 left in stock. The out-of-stock message makes it always seem that the item just sold out.",
            },
            {
              images: [
                ls2
              ],
              description: "Low-stock Message on orthofeet.com. The message does not disclose the quantity in stock to users and appears for all products on the website.",
            },
          ]
        },
        {
          pointHeading: "High-demand Message",
          pointDescriptions: [
            "Indicating to users that a product is in high-demand and likely to sell out soon, increasing its desirability",
            "Prevalence: 47 instances across 43 websites.",
          ],
          imgPoints: [
            {
              images: [
                hd1
              ],
              description: "High Demand on fashionnova.com. The message is shown for all products on the website.",
            },
            {
              images: [
                hd2
              ],
              description: "High Demand on pacificcoast.com. The message is shown for all products on the website.",
            },
          ]
        },
      ]
    },
    {
      patternIcon: obstructionIcon,
      patternTitle: "Obstruction",
      patternDescription: "Making it easy for the user to get into one situation but hard to get out of it.",
      points: [
        {
          pointHeading: "Hard to Cancel",
          pointDescriptions: [
            "Making it easy for the user to sign up for a recurring subscription but cancellation requires emailing or calling customer care.",
            "Prevalence: 31 instances across 31 websites.",
          ],
          imgPoints: [
            {
              images: [
                o1
              ],
              description: "Hard to Cancel on savagex.com. The only way to cancel the $49.95 auto-renewing membership is to call the customer support. Signing up, on the other hand, can be completed online.",
            },
            {
              images: [
                o4
              ],
              description: "Messing with what you see on a website? That's interface interference, and it's all about tricking your eyes.",
            },
            {
              images: [
                o3, o2
              ],
              description: "Hard to Cancel on 1800flowers.com. The only way to cancel the $19.99 auto-renewing membership is to email customer care unlike signing up, which can be completed online.",
            },
          ]
        }
      ]
    },
    {
      patternIcon: forcedIcon,
      patternTitle: "Forced Action",
      patternDescription: "Forcing the user to do something tangential in order to complete their task.",
      points: [
        {
          pointHeading: "Forced Enrollment",
          pointDescriptions: [
            "Coercing users to create accounts or share their information to complete their tasks.",
            "Prevalence: 6 instances across 6 websites.",
          ],
          imgPoints: [
            {
              images: [
                fa3
              ],
              description: "An example of this is where a lot of Windows users could relate. Whenever there’s an update, the computer gives the user a very limited number of options and doesn't give the user the privilege of scheduling the update altogether.",
            },
            {
              images: [
                fa1
              ],
              description: "Forced Action on therealreal.com. Even viewing products requires signing up and creating and account.",
            },
            {
              images: [
                fa2
              ],
              description: "Forced Action on musiciansfriend.com. Agreeing to the terms of use also requires agreeing to receive emails and promotions.",
            },
          ]
        }
      ]
    },
    // {
    //   patternIcon: "",
    //   patternTitle: "",
    //   patternDescription: "",
    //   points: [
    //     {
    //       pointHeading: "",
    //       pointDescriptions: [
    //         "",
    //       ],
    //       imgPoints: [
    //         {
    //           images: [

    //           ],
    //           description: "",
    //         }
    //       ]
    //     }
    //   ]
    // },
  ];

  return (
    <div>
      <div className="text-xl font-semibold py-3 border-b">
        Dark pattern categories
      </div>

      <div className="sm:max-w-[70vw] mx-auto py-5 space-y-5">
        {patternsData?.map((p, i) => (
          <Accordion key={i}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              className="!bg-gray-100"
            >
              <div className="">
                <div className="flex items-center justify-center gap-5">
                  <div className="flex-shrink-0">
                    <img src={p?.patternIcon} alt="" className="w-7"/>
                  </div>
                  <div>
                    <div className="text-lg font-semibold">{p?.patternTitle}</div>
                    <div className="italic">{p?.patternDescription}</div>
                  </div>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails className="!border-t">
              <div className="px-5 py-3">
                <ol className="list-decimal list-outside space-y-5">
                  {p?.points?.map((point, j) => (
                    <li key={j} className="text-lg font-semibold">
                      <div className="">{point?.pointHeading}</div>
                      <div className="text-base font-normal pt-3 space-y-3">
                        {point?.pointDescriptions?.map((pointDesc, k) => (
                          <div key={k}>{pointDesc}</div>
                        ))}
                        {point?.imgPoints?.map((imgPoint, a) => (
                          <div key={a} className="py-3 space-y-2">
                            {imgPoint?.images?.map((image, b) => (
                              <img
                                key={b}
                                src={image}
                                alt=""
                                className="w-full max-w-[40rem] mx-auto border-[0.7rem] rounded-xl"
                              />
                            ))}
                            <div className="text-center text-gray-500">
                              {imgPoint?.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
