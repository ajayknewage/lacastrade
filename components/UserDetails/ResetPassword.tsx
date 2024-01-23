import { Dispatch, FC, SetStateAction } from "react";

const ResetPassword: FC<{
  setIndex: Dispatch<SetStateAction<number>>;
}> = ({ setIndex }) => {
  return (
    <div className="px-4 md:px-10 grid grid-cols-5 gap-5 mb-4 md:mb-10 pt-4 md:pt-10 ">
      <div className="col-span-5 xl:col-span-2">
        <div className="rounded-sm border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Reset Password
            </h3>
          </div>
          <div className="p-7">
            <form action="#">
              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="Username"
                >
                  New Password
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="password"
                  name="Username"
                  id="Username"
                  placeholder="devidjhon24"
                  defaultValue="devidjhon24"
                />
              </div>

              <div className="mb-5.5">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                  htmlFor="Username"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                  type="password"
                  name="Username"
                  id="Username"
                  placeholder="devidjhon24"
                  defaultValue="devidjhon24"
                />
              </div>

              <div className="flex justify-end gap-4.5">
                <button
                  className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                  type="button"
                  onClick={() => setIndex(0)}
                >
                  Cancel
                </button>
                <button
                  className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-95"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
