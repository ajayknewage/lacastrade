import Image from "next/image";
import { Product } from "@/types/product";

const productData = [
  {
    description: "Grand Total:",
    price: "$1612",
  },
  {
    description: "Shipping Charge:",
    price: "$25",
  },
  {
    description: "Estimated Tax:",
    price: "$19.22",
  },
  {
    description: "Total:",
    price: "$1685.22",
  },
];

const OrderSummary = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark h-full">
      <div className="py-3 px-4 md:px-6 xl:px-7.5 mt-6 border-b border-dashed">
        <h4 className="text-lg font-semibold text-black dark:text-white">
          ORDER SUMMARY
        </h4>
      </div>

      <div className="grid grid-cols-6  py-4.5 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-4 flex items-center">
          <p className="font-medium">Description</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Price</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6  py-4.5 px-4 sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-4 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p
                className={`text-black dark:text-white ${
                  key === productData.length - 1
                    ? "text-lg font-semibold"
                    : "text-sm"
                }`}
              >
                {product.description}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p
              className={`text-black dark:text-white ${
                key === productData.length - 1
                  ? "text-lg font-semibold"
                  : "text-sm"
              }`}
            >
              {product.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderSummary;
