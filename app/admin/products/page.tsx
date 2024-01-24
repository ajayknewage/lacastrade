"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import Image from "next/image";

import { Metadata } from "next";
import Link from "next/link";
import SortButton from "@/components/SortButton";
import Pagination from "@/components/Pagination";
import Actions from "./actions";
import { Fragment, useState } from "react";
import Search from "@/components/Search";
import DateRange from "@/components/DateRange";
import ReactSelect from "react-select";

export const metadata: Metadata = {
  title: "Products | ReCastTrade",
  description: "",
  // other metadata
};

const productData = [
  {
    image: "/images/product/product-01.png",
    owner: {
      name: "Ester Howard",
      image: "/images/user/user-03.png",
    },
    name: "Classic Retro Women Jeans",
    category: "Women",
    price: 296,
    region: "North America",
    sold: "NA",
    status: "pending",
  },
  {
    image: "/images/product/product-02.png",
    owner: {
      name: "Ester Howard",
      image: "/images/user/user-03.png",
    },
    name: "Classic Retro Women Jeans",
    category: "Women",
    price: 125,
    region: "North America",
    sold: 45,
    status: "approved",
  },
  {
    image: "/images/product/product-03.png",
    owner: {
      name: "Ester Howard",
      image: "/images/user/user-03.png",
    },
    name: "Classic Retro Women Jeans",
    category: "Women",
    price: 450,
    region: "North America",
    sold: "NA",
    status: "rejected",
  },
  {
    image: "/images/product/product-04.png",
    owner: {
      name: "Ester Howard",
      image: "/images/user/user-03.png",
    },
    name: "Classic Retro Women Jeans",
    category: "Women",
    price: 50,
    region: "North America",
    sold: 12,
    status: "approved",
  },
];

const options = [
  { value: "pending", label: "Pending" },
  { value: "approved", label: "Approved" },
  { value: "rejected", label: "Rejected" },
];

const Products = () => {
  const [dates, setDates] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });

  const [selectedOption, setSelectedOption] = useState(null);

  //date range handler
  const dateRangeHandler = (start: Date | null, end: Date | null) => {
    setDates({
      start,
      end,
    });
  };

  return (
    <Fragment>
      <Breadcrumb pageName="Products" />

      <div
        className={`rounded-sm border border-stroke dark:border-strokedark shadow-default bg-white dark:bg-boxdark px-10 sm:px-7.5 mb-5 py-5 flex gap-10`}
      >
        <Search />
        <DateRange
          dateRangeHandler={dateRangeHandler}
          endDate={dates.end}
          startDate={dates.start}
        />

        <ReactSelect
          defaultValue={selectedOption}
          onChange={(val) => setSelectedOption(val as any)}
          options={options}
          isClearable
          placeholder="Status"
          classNames={{
            container: (props) =>
              "border-2 border-stroke dark:border-strokedark flex rounded-md min-w-42.5 px-2",
            menu: (props) =>
              "bg-white p-2 flex flex-column gap-2 shadow-default dark:bg-boxdark",
            option: (props) => "p-2 cursor-pointer",
            control: (props) => "w-full",
            valueContainer: (props) => "cursor-pointer w-full",
          }}
          unstyled
        />
      </div>
      <div
        className={`rounded-sm border border-stroke dark:border-strokedark shadow-default bg-white dark:bg-boxdark px-5 pt-6 pb-2.5 sm:px-7.5 xl:pb-1`}
      >
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  <span className="font-medium">Product</span>
                  <SortButton />
                </th>

                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  <span className="font-medium">Owner</span>
                  <SortButton />
                </th>

                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  <span className="font-medium">Category</span>
                  <SortButton />
                </th>

                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  <span className="font-medium">Price</span>
                  <SortButton />
                </th>

                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  <span className="font-medium">Sold</span>
                  <SortButton />
                </th>

                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Status
                  <SortButton />
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product, key) => (
                <tr key={key}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <Link href={"/admin/product-details"}>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="h-12.5 w-15 rounded-md">
                          <Image
                            src={product.image}
                            width={60}
                            height={50}
                            alt="Product"
                          />
                        </div>
                        <p className="text-sm text-black dark:text-white">
                          {product.name}
                        </p>
                      </div>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <Link href={"/admin/user"}>
                      <div className="flex gap-2 items-center">
                        <div className="h-10 w-10 rounded-full">
                          <Image
                            src={"/images/user/user-03.png"}
                            width={55}
                            height={55}
                            alt="User"
                          />
                        </div>
                        <span className="text-black dark:text-white text-sm">
                          Ester Howard
                        </span>
                      </div>
                    </Link>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p>{product.category}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="font-semibold">${product.price}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p>{product.sold}</p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p
                      className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium capitalize ${
                        product.status === "approved"
                          ? "text-success bg-success"
                          : product.status === "rejected"
                          ? "text-danger bg-danger"
                          : "text-warning bg-warning"
                      }`}
                    >
                      {product.status}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <Actions />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-5 pb-10 flex justify-end px-4 md:px-10">
            <Pagination />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Products;
