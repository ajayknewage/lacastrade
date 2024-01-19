"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { Metadata } from "next";
import Link from "next/link";
import PersonalDetails from "./personal-details";
import TableThree from "@/components/Tables/TableThree";
export const metadata: Metadata = {
  title: "Profile | ReCastTrade",
  description: "",
  // other metadata
};

const Statistics = () => (
  <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F] bg-white">
    <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
      <span className="font-semibold text-black dark:text-white">259</span>
      <span className="text-sm">Products</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
      <span className="font-semibold text-black dark:text-white">129K</span>
      <span className="text-sm">Followers</span>
    </div>
    <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
      <span className="font-semibold text-black dark:text-white">2K</span>
      <span className="text-sm">Following</span>
    </div>
  </div>
);

const User = () => {
  return (
    <>
      <Breadcrumb pageName="User" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width={970}
            height={260}
          />

          <div className="absolute top-6 left-10 md:left-auto md:top-10 md:right-4 h-min z-10 xsm:bottom-4 xsm:right-4 flex gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center bg-danger  py-1.5 px-6 md:py-2  md:px-10 text-center text-xs md:text-sm font-medium text-white hover:bg-opacity-90 md:rounded-md"
            >
              BLOCK
            </Link>

            <Link
              href="#"
              className="inline-flex items-center justify-center bg-black-2  py-1.5 px-6 md:py-2  md:px-10 text-center text-xs md:text-sm font-medium text-white hover:bg-opacity-90 md:rounded-md"
            >
              DELETE
            </Link>
          </div>
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4 gap-4 hidden md:flex">
            <Statistics />
          </div>
        </div>
        <div className="px-4 md:px-10 pb-6 lg:pb-8 xl:pb-11.5 flex md:flex-row flex-col w-full justify-between">
          <div className="flex gap-4 md:flex-row flex-col items-center md:items-start">
            <div className="relative z-30 md:mx-auto -mt-10 md:-mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
              <div className="relative drop-shadow-2">
                <Image
                  src={"/images/user/user-06.png"}
                  width={160}
                  height={160}
                  alt="profile"
                />
              </div>
            </div>
            <div className="md:mt-4 text-center md:text-start">
              <h3 className="text-2xl font-semibold text-black dark:text-white">
                John Doe
              </h3>
              <p className="font-medium text-center md:text-start">
                Business Owner
              </p>
            </div>
          </div>

          <div className="mt-2 md:mt-0 flex items-center justify-center gap-3.5">
            <a href="#" className="hover:text-primary" aria-label="social-icon">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_30_966)">
                  <path
                    d="M12.8333 12.375H15.125L16.0416 8.70838H12.8333V6.87504C12.8333 5.93088 12.8333 5.04171 14.6666 5.04171H16.0416V1.96171C15.7428 1.92229 14.6144 1.83337 13.4227 1.83337C10.934 1.83337 9.16663 3.35229 9.16663 6.14171V8.70838H6.41663V12.375H9.16663V20.1667H12.8333V12.375Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_966">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" className="hover:text-primary" aria-label="social-icon">
              <svg
                className="fill-current"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_30_970)">
                  <path
                    d="M20.9813 5.18472C20.2815 5.49427 19.5393 5.69757 18.7795 5.78789C19.5804 5.30887 20.1798 4.55498 20.4661 3.66672C19.7145 4.11405 18.8904 4.42755 18.0315 4.59714C17.4545 3.97984 16.6898 3.57044 15.8562 3.43259C15.0225 3.29474 14.1667 3.43617 13.4218 3.83489C12.6768 4.2336 12.0845 4.86726 11.7368 5.63736C11.3891 6.40746 11.3056 7.27085 11.4993 8.0933C9.97497 8.0169 8.48376 7.62078 7.12247 6.93066C5.76118 6.24054 4.56024 5.27185 3.59762 4.08747C3.25689 4.67272 3.07783 5.33801 3.07879 6.01522C3.07879 7.34439 3.75529 8.51864 4.78379 9.20614C4.17513 9.18697 3.57987 9.0226 3.04762 8.72672V8.77439C3.04781 9.65961 3.35413 10.5175 3.91465 11.2027C4.47517 11.8878 5.2554 12.3581 6.12304 12.5336C5.55802 12.6868 4.96557 12.7093 4.39054 12.5996C4.63517 13.3616 5.11196 14.028 5.75417 14.5055C6.39637 14.983 7.17182 15.2477 7.97196 15.2626C7.17673 15.8871 6.2662 16.3488 5.29243 16.6212C4.31866 16.8936 3.30074 16.9714 2.29688 16.8502C4.04926 17.9772 6.08921 18.5755 8.17271 18.5735C15.2246 18.5735 19.081 12.7316 19.081 7.66522C19.081 7.50022 19.0765 7.33339 19.0691 7.17022C19.8197 6.62771 20.4676 5.95566 20.9822 5.18564L20.9813 5.18472Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_970">
                    <rect
                      width="22"
                      height="22"
                      fill="white"
                      transform="translate(0.666138)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" className="hover:text-primary" aria-label="social-icon">
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_30_978)">
                  <path
                    d="M18.3233 10.6077C18.2481 9.1648 17.7463 7.77668 16.8814 6.61929C16.6178 6.90312 16.3361 7.16951 16.038 7.41679C15.1222 8.17748 14.0988 8.79838 13.0011 9.25929C13.1542 9.58013 13.2945 9.89088 13.4182 10.1842V10.187C13.4531 10.2689 13.4867 10.3514 13.519 10.4345C14.9069 10.2786 16.3699 10.3355 17.788 10.527C17.9768 10.5527 18.1546 10.5802 18.3233 10.6077ZM9.72038 3.77854C10.6137 5.03728 11.4375 6.34396 12.188 7.69271C13.3091 7.25088 14.2359 6.69354 14.982 6.07296C15.2411 5.8595 15.4849 5.62824 15.7117 5.38088C14.3926 4.27145 12.7237 3.66426 11 3.66671C10.5711 3.66641 10.1429 3.70353 9.72038 3.77762V3.77854ZM3.89862 9.16396C4.52308 9.1482 5.1468 9.11059 5.76863 9.05121C7.27163 8.91677 8.7618 8.66484 10.2255 8.29771C9.46051 6.96874 8.63463 5.67578 7.75046 4.42296C6.80603 4.89082 5.97328 5.55633 5.30868 6.37435C4.64409 7.19236 4.16319 8.14374 3.89862 9.16396ZM5.30113 15.6155C5.65679 15.0957 6.12429 14.5109 6.74488 13.8747C8.07771 12.5089 9.65071 11.4455 11.4712 10.8589L11.528 10.8424C11.3768 10.5087 11.2347 10.2108 11.0917 9.93029C9.40871 10.4207 7.63588 10.7269 5.86946 10.8855C5.00779 10.9634 4.23504 10.9973 3.66671 11.0028C3.66509 12.6827 4.24264 14.3117 5.30204 15.6155H5.30113ZM13.7546 17.7971C13.4011 16.0144 12.9008 14.2641 12.2586 12.5639C10.4235 13.2303 8.96138 14.2047 7.83113 15.367C7.375 15.8276 6.97021 16.3362 6.62388 16.8841C7.88778 17.8272 9.42308 18.3356 11 18.3334C11.9441 18.3347 12.8795 18.1533 13.7546 17.799V17.7971ZM15.4715 16.8117C16.9027 15.7115 17.8777 14.1219 18.2096 12.3475C17.898 12.2696 17.5029 12.1917 17.0684 12.1312C16.1023 11.9921 15.1221 11.9819 14.1534 12.101C14.6988 13.6399 15.1392 15.2141 15.4715 16.8126V16.8117ZM11 20.1667C5.93729 20.1667 1.83337 16.0628 1.83337 11C1.83337 5.93729 5.93729 1.83337 11 1.83337C16.0628 1.83337 20.1667 5.93729 20.1667 11C20.1667 16.0628 16.0628 20.1667 11 20.1667Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_30_978">
                    <rect width="22" height="22" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <div className="md:hidden">
              {" "}
              <Statistics />
            </div>
          </div>
        </div>

        <Tabs>
          <TabList
            className={
              "border-b border-stroke dark:border-strokedark px-4 md:px-10"
            }
          >
            <Tab selectedClassName="border-stroke dark:border-strokedark text-black font-semibold">
              Personal Details
            </Tab>
            <Tab selectedClassName="border-stroke dark:border-strokedark text-black font-semibold">
              Products
            </Tab>
          </TabList>

          <TabPanel>
            <PersonalDetails />
          </TabPanel>
          <TabPanel className={"mb-4 md:mb-10"}>
            <TableThree noBorder />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default User;
