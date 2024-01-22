import Image from "next/image";
import { Product } from "@/types/product";
import Link from "next/link";

const productData = [
  {
    image: "/images/product/product-01.png",
    name: "Apple Watch Series 7",
    price: 100,
    quantity: 3,
    total: 300,
  },
  {
    image: "/images/product/product-02.png",
    name: "Macbook Pro M1",
    price: 50,
    quantity: 2,
    total: 100,
  },
  {
    image: "/images/product/product-03.png",
    name: "Dell Inspiron 15",
    price: 120,
    quantity: 4,
    total: 480,
  },
  {
    image: "/images/product/product-04.png",
    name: "HP Probook 450",
    price: 25,
    quantity: 5,
    total: 125,
  },
];

const OrderedItems = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-3 px-4 md:px-6 xl:px-7.5 bg-bodydark1 dark:bg-boxdark">
        <h4 className="text-lg font-semibold text-black dark:text-white">
          ITEMS FROM ORDER
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-3 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Item</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Quantity</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Price</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Total</p>
        </div>
      </div>

      {productData.map((product, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-3 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
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
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {product.quantity}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              ${product.price}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {product.total}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderedItems;
