"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CardReveal } from "../CardReveal";
import MagicButton from "../ui/MagicButton";
import { GiClick } from "react-icons/gi";

export function CardRevealProvider() {
  return (
    <>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card
          title="Planning & Strategy"
          button={<MagicButton title="Phase 1" position="right" icon={<GiClick className="h-7" />}  />}
          subTitle="We will collaborate to map out your website's goal, target audience and key functionalities. We'll discuss things like site structure, navigation and content requirement."
        >
          <CardReveal
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
      
        <Card
          title="Development & Progress Update"
          subTitle="Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way."
          button={<MagicButton title="Phase 2" position="right" icon={<GiClick className="h-7" />}  />}
        >
          <CardReveal
           animationSpeed={5.1}
            containerClassName="bg-rose-600"
            colors={[[255, 255, 123]]}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card>
        <Card
          title="Development & Launch"
          button={<MagicButton title="Phase 3" position="right" icon={<GiClick className="h-7" />}  />}
          subTitle="This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up."
        >
          <CardReveal
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  subTitle,
  button,
  children,
}: {
  title: string;
  subTitle: string;
  button: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative min-[320px]:h-[20rem] md:h-[30rem] bg-white/5 rounded-xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 h-56 justify-center flex flex-col">
        <div className="absolute top-10 text-center group-hover/canvas-card:-translate-y-4  group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {button}
        </div>
        <h2 className="text-center dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-center dark:text-white text-base opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {subTitle}
        </p>
      </div>
    </div>
  );
};

const Phase1 = () => {
  return (
    <svg
      width="159"
      height="72"
      viewBox="0 0 159 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="158"
        height="71"
        rx="10.5"
        fill="url(#paint0_linear_3_124)"
        fill-opacity="0.3"
      />
      <rect
        x="0.5"
        y="0.5"
        width="158"
        height="71"
        rx="10.5"
        stroke="url(#paint1_linear_3_124)"
      />
      <path
        d="M27.152 47V25.1818H35.3338C37.0099 25.1818 38.4162 25.4943 39.5526 26.1193C40.696 26.7443 41.5589 27.6037 42.1413 28.6974C42.7308 29.7841 43.0256 31.0199 43.0256 32.4048C43.0256 33.804 42.7308 35.0469 42.1413 36.1335C41.5518 37.2202 40.6818 38.076 39.5312 38.701C38.3807 39.3189 36.9638 39.6278 35.2805 39.6278H29.858V36.3786H34.7479C35.728 36.3786 36.5305 36.2081 37.1555 35.8672C37.7805 35.5263 38.2422 35.0575 38.5405 34.4609C38.8459 33.8643 38.9986 33.179 38.9986 32.4048C38.9986 31.6307 38.8459 30.9489 38.5405 30.3594C38.2422 29.7699 37.777 29.3118 37.1449 28.9851C36.5199 28.6513 35.7138 28.4844 34.7266 28.4844H31.1044V47H27.152ZM50.1761 37.5398V47H45.6377V25.1818H50.0482V33.5234H50.24C50.6093 32.5575 51.2059 31.8011 52.0298 31.2543C52.8536 30.7003 53.887 30.4233 55.1299 30.4233C56.2663 30.4233 57.257 30.6719 58.1022 31.169C58.9545 31.6591 59.615 32.3658 60.0837 33.2891C60.5596 34.2053 60.794 35.3026 60.7869 36.581V47H56.2485V37.3906C56.2556 36.3821 55.9999 35.5973 55.4815 35.0362C54.9701 34.4751 54.2528 34.1946 53.3295 34.1946C52.7116 34.1946 52.1647 34.326 51.6889 34.5888C51.2201 34.8516 50.8508 35.2351 50.5809 35.7393C50.3181 36.2365 50.1832 36.8366 50.1761 37.5398ZM68.5446 47.3089C67.5006 47.3089 66.5702 47.1278 65.7534 46.7656C64.9367 46.3963 64.2904 45.853 63.8145 45.1357C63.3458 44.4112 63.1114 43.5092 63.1114 42.4297C63.1114 41.5206 63.2783 40.7571 63.6121 40.1392C63.9459 39.5213 64.4004 39.0241 64.9757 38.6477C65.551 38.2713 66.2044 37.9872 66.936 37.7955C67.6746 37.6037 68.4487 37.4688 69.2584 37.3906C70.2101 37.2912 70.9771 37.1989 71.5595 37.1136C72.1419 37.0213 72.5645 36.8864 72.8273 36.7088C73.0901 36.5312 73.2215 36.2685 73.2215 35.9205V35.8565C73.2215 35.1818 73.0084 34.6598 72.5823 34.2905C72.1632 33.9212 71.5666 33.7365 70.7925 33.7365C69.9757 33.7365 69.3259 33.9176 68.8429 34.2798C68.36 34.6349 68.0404 35.0824 67.8841 35.6222L63.6867 35.2812C63.8997 34.2869 64.3188 33.4276 64.9438 32.7031C65.5688 31.9716 66.3749 31.4105 67.3621 31.0199C68.3564 30.6222 69.507 30.4233 70.8138 30.4233C71.7229 30.4233 72.5929 30.5298 73.4239 30.7429C74.2619 30.956 75.0041 31.2862 75.6504 31.7337C76.3039 32.1811 76.8188 32.7564 77.1952 33.4595C77.5716 34.1555 77.7598 34.9901 77.7598 35.9631V47H73.4558V44.7308H73.328C73.0652 45.2422 72.7137 45.6932 72.2733 46.0838C71.833 46.4673 71.3039 46.7692 70.686 46.9893C70.0681 47.2024 69.3543 47.3089 68.5446 47.3089ZM69.8443 44.1768C70.5119 44.1768 71.1014 44.0455 71.6128 43.7827C72.1242 43.5128 72.5254 43.1506 72.8166 42.696C73.1078 42.2415 73.2534 41.7266 73.2534 41.1513V39.4148C73.1114 39.5071 72.9161 39.5923 72.6675 39.6705C72.426 39.7415 72.1526 39.8089 71.8472 39.8729C71.5418 39.9297 71.2364 39.983 70.931 40.0327C70.6256 40.0753 70.3486 40.1143 70.1 40.1499C69.5673 40.228 69.1021 40.3523 68.7044 40.5227C68.3067 40.6932 67.9977 40.924 67.7776 41.2152C67.5574 41.4993 67.4473 41.8544 67.4473 42.2805C67.4473 42.8984 67.671 43.3707 68.1185 43.6974C68.573 44.017 69.1483 44.1768 69.8443 44.1768ZM94.4158 35.3026L90.261 35.5582C90.19 35.2031 90.0373 34.8835 89.8029 34.5994C89.5685 34.3082 89.2596 34.0774 88.8761 33.907C88.4996 33.7294 88.0486 33.6406 87.5231 33.6406C86.8199 33.6406 86.2269 33.7898 85.744 34.0881C85.261 34.3793 85.0195 34.7699 85.0195 35.2599C85.0195 35.6506 85.1758 35.9808 85.4883 36.2507C85.8008 36.5206 86.337 36.7372 87.0969 36.9006L90.0586 37.4972C91.6495 37.8239 92.8356 38.3494 93.6168 39.0739C94.3981 39.7983 94.7887 40.75 94.7887 41.929C94.7887 43.0014 94.4726 43.9425 93.8405 44.7521C93.2155 45.5618 92.3562 46.1939 91.2624 46.6484C90.1758 47.0959 88.9222 47.3196 87.5018 47.3196C85.3356 47.3196 83.6097 46.8686 82.3242 45.9666C81.0458 45.0575 80.2965 43.8217 80.0763 42.2592L84.5401 42.0249C84.6751 42.6854 85.0018 43.1896 85.5202 43.5376C86.0387 43.8786 86.7028 44.049 87.5124 44.049C88.3079 44.049 88.9471 43.8963 89.43 43.5909C89.9201 43.2784 90.1687 42.8771 90.1758 42.3871C90.1687 41.9751 89.9947 41.6378 89.6538 41.375C89.3128 41.1051 88.7873 40.8991 88.077 40.7571L85.2432 40.1925C83.6452 39.8729 82.4556 39.3189 81.6743 38.5305C80.9002 37.7422 80.5131 36.7372 80.5131 35.5156C80.5131 34.4645 80.7972 33.5589 81.3654 32.799C81.9407 32.0391 82.7468 31.4531 83.7837 31.0412C84.8278 30.6293 86.0493 30.4233 87.4485 30.4233C89.5153 30.4233 91.1417 30.8601 92.3278 31.7337C93.5209 32.6072 94.217 33.7969 94.4158 35.3026ZM104.624 47.3196C102.941 47.3196 101.492 46.9787 100.277 46.2969C99.0699 45.608 98.1395 44.6349 97.4861 43.3778C96.8327 42.1136 96.506 40.6186 96.506 38.8928C96.506 37.2095 96.8327 35.7322 97.4861 34.4609C98.1395 33.1896 99.0592 32.1989 100.245 31.4886C101.438 30.7784 102.838 30.4233 104.443 30.4233C105.522 30.4233 106.527 30.5973 107.458 30.9453C108.395 31.2862 109.212 31.8011 109.908 32.4901C110.611 33.179 111.158 34.0455 111.549 35.0895C111.939 36.1264 112.135 37.3409 112.135 38.733V39.9794H98.317V37.1669H107.862C107.862 36.5135 107.72 35.9347 107.436 35.4304C107.152 34.9261 106.758 34.532 106.254 34.2479C105.757 33.9567 105.178 33.8111 104.517 33.8111C103.828 33.8111 103.218 33.9709 102.685 34.2905C102.159 34.603 101.747 35.0256 101.449 35.5582C101.151 36.0838 100.998 36.6697 100.991 37.3161V39.9901C100.991 40.7997 101.14 41.4993 101.438 42.0888C101.744 42.6783 102.174 43.1328 102.728 43.4524C103.282 43.772 103.938 43.9318 104.698 43.9318C105.203 43.9318 105.664 43.8608 106.083 43.7188C106.502 43.5767 106.861 43.3636 107.159 43.0795C107.458 42.7955 107.685 42.4474 107.841 42.0355L112.039 42.3125C111.826 43.321 111.389 44.2017 110.728 44.9545C110.075 45.7003 109.23 46.2827 108.193 46.7017C107.163 47.1136 105.973 47.3196 104.624 47.3196ZM130.529 25.1818V47H125.916V29.5604H125.788L120.792 32.6925V28.6016L126.193 25.1818H130.529Z"
        fill="#CBACF9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_124"
          x1="5.39815"
          y1="31.0588"
          x2="159"
          y2="31.0588"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#161A31" />
          <stop offset="1" stop-color="#06091F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_124"
          x1="79.5"
          y1="0"
          x2="79.5"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6971A2" stop-opacity="0.4" />
          <stop offset="1" stop-color="#272A3C" stop-opacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const Phase2 = () => {
  return (
    <svg
      width="164"
      height="72"
      viewBox="0 0 164 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="163"
        height="71"
        rx="10.5"
        fill="url(#paint0_linear_3_124)"
        fill-opacity="0.3"
      />
      <rect
        x="0.5"
        y="0.5"
        width="163"
        height="71"
        rx="10.5"
        stroke="url(#paint1_linear_3_124)"
      />
      <path
        d="M27.152 47V25.1818H35.3338C37.0099 25.1818 38.4162 25.4943 39.5526 26.1193C40.696 26.7443 41.5589 27.6037 42.1413 28.6974C42.7308 29.7841 43.0256 31.0199 43.0256 32.4048C43.0256 33.804 42.7308 35.0469 42.1413 36.1335C41.5518 37.2202 40.6818 38.076 39.5312 38.701C38.3807 39.3189 36.9638 39.6278 35.2805 39.6278H29.858V36.3786H34.7479C35.728 36.3786 36.5305 36.2081 37.1555 35.8672C37.7805 35.5263 38.2422 35.0575 38.5405 34.4609C38.8459 33.8643 38.9986 33.179 38.9986 32.4048C38.9986 31.6307 38.8459 30.9489 38.5405 30.3594C38.2422 29.7699 37.777 29.3118 37.1449 28.9851C36.5199 28.6513 35.7138 28.4844 34.7266 28.4844H31.1044V47H27.152ZM50.1761 37.5398V47H45.6377V25.1818H50.0482V33.5234H50.24C50.6093 32.5575 51.2059 31.8011 52.0298 31.2543C52.8536 30.7003 53.887 30.4233 55.1299 30.4233C56.2663 30.4233 57.257 30.6719 58.1022 31.169C58.9545 31.6591 59.615 32.3658 60.0837 33.2891C60.5596 34.2053 60.794 35.3026 60.7869 36.581V47H56.2485V37.3906C56.2556 36.3821 55.9999 35.5973 55.4815 35.0362C54.9701 34.4751 54.2528 34.1946 53.3295 34.1946C52.7116 34.1946 52.1647 34.326 51.6889 34.5888C51.2201 34.8516 50.8508 35.2351 50.5809 35.7393C50.3181 36.2365 50.1832 36.8366 50.1761 37.5398ZM68.5446 47.3089C67.5006 47.3089 66.5702 47.1278 65.7534 46.7656C64.9367 46.3963 64.2904 45.853 63.8145 45.1357C63.3458 44.4112 63.1114 43.5092 63.1114 42.4297C63.1114 41.5206 63.2783 40.7571 63.6121 40.1392C63.9459 39.5213 64.4004 39.0241 64.9757 38.6477C65.551 38.2713 66.2044 37.9872 66.936 37.7955C67.6746 37.6037 68.4487 37.4688 69.2584 37.3906C70.2101 37.2912 70.9771 37.1989 71.5595 37.1136C72.1419 37.0213 72.5645 36.8864 72.8273 36.7088C73.0901 36.5312 73.2215 36.2685 73.2215 35.9205V35.8565C73.2215 35.1818 73.0084 34.6598 72.5823 34.2905C72.1632 33.9212 71.5666 33.7365 70.7925 33.7365C69.9757 33.7365 69.3259 33.9176 68.8429 34.2798C68.36 34.6349 68.0404 35.0824 67.8841 35.6222L63.6867 35.2812C63.8997 34.2869 64.3188 33.4276 64.9438 32.7031C65.5688 31.9716 66.3749 31.4105 67.3621 31.0199C68.3564 30.6222 69.507 30.4233 70.8138 30.4233C71.7229 30.4233 72.5929 30.5298 73.4239 30.7429C74.2619 30.956 75.0041 31.2862 75.6504 31.7337C76.3039 32.1811 76.8188 32.7564 77.1952 33.4595C77.5716 34.1555 77.7598 34.9901 77.7598 35.9631V47H73.4558V44.7308H73.328C73.0652 45.2422 72.7137 45.6932 72.2733 46.0838C71.833 46.4673 71.3039 46.7692 70.686 46.9893C70.0681 47.2024 69.3543 47.3089 68.5446 47.3089ZM69.8443 44.1768C70.5119 44.1768 71.1014 44.0455 71.6128 43.7827C72.1242 43.5128 72.5254 43.1506 72.8166 42.696C73.1078 42.2415 73.2534 41.7266 73.2534 41.1513V39.4148C73.1114 39.5071 72.9161 39.5923 72.6675 39.6705C72.426 39.7415 72.1526 39.8089 71.8472 39.8729C71.5418 39.9297 71.2364 39.983 70.931 40.0327C70.6256 40.0753 70.3486 40.1143 70.1 40.1499C69.5673 40.228 69.1021 40.3523 68.7044 40.5227C68.3067 40.6932 67.9977 40.924 67.7776 41.2152C67.5574 41.4993 67.4473 41.8544 67.4473 42.2805C67.4473 42.8984 67.671 43.3707 68.1185 43.6974C68.573 44.017 69.1483 44.1768 69.8443 44.1768ZM94.4158 35.3026L90.261 35.5582C90.19 35.2031 90.0373 34.8835 89.8029 34.5994C89.5685 34.3082 89.2596 34.0774 88.8761 33.907C88.4996 33.7294 88.0486 33.6406 87.5231 33.6406C86.8199 33.6406 86.2269 33.7898 85.744 34.0881C85.261 34.3793 85.0195 34.7699 85.0195 35.2599C85.0195 35.6506 85.1758 35.9808 85.4883 36.2507C85.8008 36.5206 86.337 36.7372 87.0969 36.9006L90.0586 37.4972C91.6495 37.8239 92.8356 38.3494 93.6168 39.0739C94.3981 39.7983 94.7887 40.75 94.7887 41.929C94.7887 43.0014 94.4726 43.9425 93.8405 44.7521C93.2155 45.5618 92.3562 46.1939 91.2624 46.6484C90.1758 47.0959 88.9222 47.3196 87.5018 47.3196C85.3356 47.3196 83.6097 46.8686 82.3242 45.9666C81.0458 45.0575 80.2965 43.8217 80.0763 42.2592L84.5401 42.0249C84.6751 42.6854 85.0018 43.1896 85.5202 43.5376C86.0387 43.8786 86.7028 44.049 87.5124 44.049C88.3079 44.049 88.9471 43.8963 89.43 43.5909C89.9201 43.2784 90.1687 42.8771 90.1758 42.3871C90.1687 41.9751 89.9947 41.6378 89.6538 41.375C89.3128 41.1051 88.7873 40.8991 88.077 40.7571L85.2432 40.1925C83.6452 39.8729 82.4556 39.3189 81.6743 38.5305C80.9002 37.7422 80.5131 36.7372 80.5131 35.5156C80.5131 34.4645 80.7972 33.5589 81.3654 32.799C81.9407 32.0391 82.7468 31.4531 83.7837 31.0412C84.8278 30.6293 86.0493 30.4233 87.4485 30.4233C89.5153 30.4233 91.1417 30.8601 92.3278 31.7337C93.5209 32.6072 94.217 33.7969 94.4158 35.3026ZM104.624 47.3196C102.941 47.3196 101.492 46.9787 100.277 46.2969C99.0699 45.608 98.1395 44.6349 97.4861 43.3778C96.8327 42.1136 96.506 40.6186 96.506 38.8928C96.506 37.2095 96.8327 35.7322 97.4861 34.4609C98.1395 33.1896 99.0592 32.1989 100.245 31.4886C101.438 30.7784 102.838 30.4233 104.443 30.4233C105.522 30.4233 106.527 30.5973 107.458 30.9453C108.395 31.2862 109.212 31.8011 109.908 32.4901C110.611 33.179 111.158 34.0455 111.549 35.0895C111.939 36.1264 112.135 37.3409 112.135 38.733V39.9794H98.317V37.1669H107.862C107.862 36.5135 107.72 35.9347 107.436 35.4304C107.152 34.9261 106.758 34.532 106.254 34.2479C105.757 33.9567 105.178 33.8111 104.517 33.8111C103.828 33.8111 103.218 33.9709 102.685 34.2905C102.159 34.603 101.747 35.0256 101.449 35.5582C101.151 36.0838 100.998 36.6697 100.991 37.3161V39.9901C100.991 40.7997 101.14 41.4993 101.438 42.0888C101.744 42.6783 102.174 43.1328 102.728 43.4524C103.282 43.772 103.938 43.9318 104.698 43.9318C105.203 43.9318 105.664 43.8608 106.083 43.7188C106.502 43.5767 106.861 43.3636 107.159 43.0795C107.458 42.7955 107.685 42.4474 107.841 42.0355L112.039 42.3125C111.826 43.321 111.389 44.2017 110.728 44.9545C110.075 45.7003 109.23 46.2827 108.193 46.7017C107.163 47.1136 105.973 47.3196 104.624 47.3196ZM121.037 47V43.6761L128.803 36.4851C129.464 35.8459 130.018 35.2706 130.465 34.7592C130.92 34.2479 131.264 33.7472 131.499 33.2571C131.733 32.7599 131.85 32.2237 131.85 31.6484C131.85 31.0092 131.705 30.4588 131.413 29.9972C131.122 29.5284 130.724 29.1697 130.22 28.9212C129.716 28.6655 129.144 28.5376 128.505 28.5376C127.837 28.5376 127.255 28.6726 126.758 28.9425C126.261 29.2124 125.877 29.5994 125.607 30.1037C125.337 30.608 125.202 31.2081 125.202 31.9041H120.824C120.824 30.4766 121.147 29.2372 121.793 28.1861C122.44 27.1349 123.345 26.3217 124.51 25.7464C125.675 25.1712 127.017 24.8835 128.537 24.8835C130.099 24.8835 131.459 25.1605 132.617 25.7145C133.782 26.2614 134.687 27.0213 135.334 27.9943C135.98 28.9673 136.303 30.0824 136.303 31.3395C136.303 32.1634 136.14 32.9766 135.813 33.7791C135.494 34.5817 134.922 35.473 134.098 36.4531C133.274 37.4261 132.113 38.5945 130.614 39.9581L127.429 43.0795V43.2287H136.591V47H121.037Z"
        fill="#CBACF9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_124"
          x1="5.5679"
          y1="31.0588"
          x2="164"
          y2="31.0588"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#161A31" />
          <stop offset="1" stop-color="#06091F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_124"
          x1="82"
          y1="0"
          x2="82"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6971A2" stop-opacity="0.4" />
          <stop offset="1" stop-color="#272A3C" stop-opacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};
const Phase3 = () => {
  return (
    <svg
      width="165"
      height="72"
      viewBox="0 0 165 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="164"
        height="71"
        rx="10.5"
        fill="url(#paint0_linear_3_124)"
        fill-opacity="0.3"
      />
      <rect
        x="0.5"
        y="0.5"
        width="164"
        height="71"
        rx="10.5"
        stroke="url(#paint1_linear_3_124)"
      />
      <path
        d="M27.152 47V25.1818H35.3338C37.0099 25.1818 38.4162 25.4943 39.5526 26.1193C40.696 26.7443 41.5589 27.6037 42.1413 28.6974C42.7308 29.7841 43.0256 31.0199 43.0256 32.4048C43.0256 33.804 42.7308 35.0469 42.1413 36.1335C41.5518 37.2202 40.6818 38.076 39.5312 38.701C38.3807 39.3189 36.9638 39.6278 35.2805 39.6278H29.858V36.3786H34.7479C35.728 36.3786 36.5305 36.2081 37.1555 35.8672C37.7805 35.5263 38.2422 35.0575 38.5405 34.4609C38.8459 33.8643 38.9986 33.179 38.9986 32.4048C38.9986 31.6307 38.8459 30.9489 38.5405 30.3594C38.2422 29.7699 37.777 29.3118 37.1449 28.9851C36.5199 28.6513 35.7138 28.4844 34.7266 28.4844H31.1044V47H27.152ZM50.1761 37.5398V47H45.6377V25.1818H50.0482V33.5234H50.24C50.6093 32.5575 51.2059 31.8011 52.0298 31.2543C52.8536 30.7003 53.887 30.4233 55.1299 30.4233C56.2663 30.4233 57.257 30.6719 58.1022 31.169C58.9545 31.6591 59.615 32.3658 60.0837 33.2891C60.5596 34.2053 60.794 35.3026 60.7869 36.581V47H56.2485V37.3906C56.2556 36.3821 55.9999 35.5973 55.4815 35.0362C54.9701 34.4751 54.2528 34.1946 53.3295 34.1946C52.7116 34.1946 52.1647 34.326 51.6889 34.5888C51.2201 34.8516 50.8508 35.2351 50.5809 35.7393C50.3181 36.2365 50.1832 36.8366 50.1761 37.5398ZM68.5446 47.3089C67.5006 47.3089 66.5702 47.1278 65.7534 46.7656C64.9367 46.3963 64.2904 45.853 63.8145 45.1357C63.3458 44.4112 63.1114 43.5092 63.1114 42.4297C63.1114 41.5206 63.2783 40.7571 63.6121 40.1392C63.9459 39.5213 64.4004 39.0241 64.9757 38.6477C65.551 38.2713 66.2044 37.9872 66.936 37.7955C67.6746 37.6037 68.4487 37.4688 69.2584 37.3906C70.2101 37.2912 70.9771 37.1989 71.5595 37.1136C72.1419 37.0213 72.5645 36.8864 72.8273 36.7088C73.0901 36.5312 73.2215 36.2685 73.2215 35.9205V35.8565C73.2215 35.1818 73.0084 34.6598 72.5823 34.2905C72.1632 33.9212 71.5666 33.7365 70.7925 33.7365C69.9757 33.7365 69.3259 33.9176 68.8429 34.2798C68.36 34.6349 68.0404 35.0824 67.8841 35.6222L63.6867 35.2812C63.8997 34.2869 64.3188 33.4276 64.9438 32.7031C65.5688 31.9716 66.3749 31.4105 67.3621 31.0199C68.3564 30.6222 69.507 30.4233 70.8138 30.4233C71.7229 30.4233 72.5929 30.5298 73.4239 30.7429C74.2619 30.956 75.0041 31.2862 75.6504 31.7337C76.3039 32.1811 76.8188 32.7564 77.1952 33.4595C77.5716 34.1555 77.7598 34.9901 77.7598 35.9631V47H73.4558V44.7308H73.328C73.0652 45.2422 72.7137 45.6932 72.2733 46.0838C71.833 46.4673 71.3039 46.7692 70.686 46.9893C70.0681 47.2024 69.3543 47.3089 68.5446 47.3089ZM69.8443 44.1768C70.5119 44.1768 71.1014 44.0455 71.6128 43.7827C72.1242 43.5128 72.5254 43.1506 72.8166 42.696C73.1078 42.2415 73.2534 41.7266 73.2534 41.1513V39.4148C73.1114 39.5071 72.9161 39.5923 72.6675 39.6705C72.426 39.7415 72.1526 39.8089 71.8472 39.8729C71.5418 39.9297 71.2364 39.983 70.931 40.0327C70.6256 40.0753 70.3486 40.1143 70.1 40.1499C69.5673 40.228 69.1021 40.3523 68.7044 40.5227C68.3067 40.6932 67.9977 40.924 67.7776 41.2152C67.5574 41.4993 67.4473 41.8544 67.4473 42.2805C67.4473 42.8984 67.671 43.3707 68.1185 43.6974C68.573 44.017 69.1483 44.1768 69.8443 44.1768ZM94.4158 35.3026L90.261 35.5582C90.19 35.2031 90.0373 34.8835 89.8029 34.5994C89.5685 34.3082 89.2596 34.0774 88.8761 33.907C88.4996 33.7294 88.0486 33.6406 87.5231 33.6406C86.8199 33.6406 86.2269 33.7898 85.744 34.0881C85.261 34.3793 85.0195 34.7699 85.0195 35.2599C85.0195 35.6506 85.1758 35.9808 85.4883 36.2507C85.8008 36.5206 86.337 36.7372 87.0969 36.9006L90.0586 37.4972C91.6495 37.8239 92.8356 38.3494 93.6168 39.0739C94.3981 39.7983 94.7887 40.75 94.7887 41.929C94.7887 43.0014 94.4726 43.9425 93.8405 44.7521C93.2155 45.5618 92.3562 46.1939 91.2624 46.6484C90.1758 47.0959 88.9222 47.3196 87.5018 47.3196C85.3356 47.3196 83.6097 46.8686 82.3242 45.9666C81.0458 45.0575 80.2965 43.8217 80.0763 42.2592L84.5401 42.0249C84.6751 42.6854 85.0018 43.1896 85.5202 43.5376C86.0387 43.8786 86.7028 44.049 87.5124 44.049C88.3079 44.049 88.9471 43.8963 89.43 43.5909C89.9201 43.2784 90.1687 42.8771 90.1758 42.3871C90.1687 41.9751 89.9947 41.6378 89.6538 41.375C89.3128 41.1051 88.7873 40.8991 88.077 40.7571L85.2432 40.1925C83.6452 39.8729 82.4556 39.3189 81.6743 38.5305C80.9002 37.7422 80.5131 36.7372 80.5131 35.5156C80.5131 34.4645 80.7972 33.5589 81.3654 32.799C81.9407 32.0391 82.7468 31.4531 83.7837 31.0412C84.8278 30.6293 86.0493 30.4233 87.4485 30.4233C89.5153 30.4233 91.1417 30.8601 92.3278 31.7337C93.5209 32.6072 94.217 33.7969 94.4158 35.3026ZM104.624 47.3196C102.941 47.3196 101.492 46.9787 100.277 46.2969C99.0699 45.608 98.1395 44.6349 97.4861 43.3778C96.8327 42.1136 96.506 40.6186 96.506 38.8928C96.506 37.2095 96.8327 35.7322 97.4861 34.4609C98.1395 33.1896 99.0592 32.1989 100.245 31.4886C101.438 30.7784 102.838 30.4233 104.443 30.4233C105.522 30.4233 106.527 30.5973 107.458 30.9453C108.395 31.2862 109.212 31.8011 109.908 32.4901C110.611 33.179 111.158 34.0455 111.549 35.0895C111.939 36.1264 112.135 37.3409 112.135 38.733V39.9794H98.317V37.1669H107.862C107.862 36.5135 107.72 35.9347 107.436 35.4304C107.152 34.9261 106.758 34.532 106.254 34.2479C105.757 33.9567 105.178 33.8111 104.517 33.8111C103.828 33.8111 103.218 33.9709 102.685 34.2905C102.159 34.603 101.747 35.0256 101.449 35.5582C101.151 36.0838 100.998 36.6697 100.991 37.3161V39.9901C100.991 40.7997 101.14 41.4993 101.438 42.0888C101.744 42.6783 102.174 43.1328 102.728 43.4524C103.282 43.772 103.938 43.9318 104.698 43.9318C105.203 43.9318 105.664 43.8608 106.083 43.7188C106.502 43.5767 106.861 43.3636 107.159 43.0795C107.458 42.7955 107.685 42.4474 107.841 42.0355L112.039 42.3125C111.826 43.321 111.389 44.2017 110.728 44.9545C110.075 45.7003 109.23 46.2827 108.193 46.7017C107.163 47.1136 105.973 47.3196 104.624 47.3196ZM129.102 47.2983C127.511 47.2983 126.094 47.0249 124.851 46.478C123.615 45.924 122.638 45.1641 121.921 44.1982C121.211 43.2251 120.845 42.103 120.824 40.8317H125.469C125.497 41.3643 125.671 41.8331 125.991 42.2379C126.317 42.6357 126.751 42.9446 127.29 43.1648C127.83 43.3849 128.437 43.495 129.112 43.495C129.815 43.495 130.437 43.3707 130.977 43.1222C131.516 42.8736 131.939 42.5291 132.244 42.0888C132.55 41.6484 132.702 41.1406 132.702 40.5653C132.702 39.983 132.539 39.468 132.212 39.0206C131.893 38.5661 131.431 38.2109 130.827 37.9553C130.231 37.6996 129.521 37.5717 128.697 37.5717H126.662V34.1839H128.697C129.393 34.1839 130.007 34.0632 130.54 33.8217C131.08 33.5803 131.499 33.2464 131.797 32.8203C132.095 32.3871 132.244 31.8828 132.244 31.3075C132.244 30.7607 132.113 30.2812 131.85 29.8693C131.594 29.4503 131.232 29.1236 130.763 28.8892C130.302 28.6548 129.762 28.5376 129.144 28.5376C128.519 28.5376 127.947 28.6513 127.429 28.8786C126.91 29.0987 126.495 29.4148 126.183 29.8267C125.87 30.2386 125.703 30.7216 125.682 31.2756H121.261C121.282 30.0185 121.641 28.9105 122.337 27.9517C123.033 26.9929 123.97 26.2436 125.149 25.7038C126.335 25.157 127.674 24.8835 129.165 24.8835C130.671 24.8835 131.989 25.157 133.118 25.7038C134.247 26.2507 135.124 26.9893 135.749 27.9197C136.381 28.843 136.694 29.88 136.687 31.0305C136.694 32.2521 136.314 33.2713 135.547 34.0881C134.787 34.9048 133.796 35.4233 132.575 35.6435V35.8139C134.18 36.0199 135.401 36.5774 136.239 37.4865C137.084 38.3885 137.504 39.5178 137.496 40.8743C137.504 42.1172 137.145 43.2216 136.42 44.1875C135.703 45.1534 134.712 45.9134 133.448 46.4673C132.184 47.0213 130.735 47.2983 129.102 47.2983Z"
        fill="#CBACF9"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_124"
          x1="5.60185"
          y1="31.0588"
          x2="165"
          y2="31.0588"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#161A31" />
          <stop offset="1" stop-color="#06091F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_124"
          x1="82.5"
          y1="0"
          x2="82.5"
          y2="72"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6971A2" stop-opacity="0.4" />
          <stop offset="1" stop-color="#272A3C" stop-opacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
