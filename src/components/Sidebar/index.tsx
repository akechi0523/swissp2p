"use client";

import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-primary lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link href="/" className="flex gap-3">
          <Image
            width={24}
            height={24}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          />
          <span className="text-2xl font-medium text-primary dark:text-white">SwissP2P</span>
        </Link>

        <button
          ref={trigger&&sidebar}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* <!-- SIDEBAR Content --> */}
      <div className="no-scrollbar flex overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/* <!-- Menu Group --> */}
          <ul className="mb-6 flex flex-col gap-1.5">
            {/* <!-- Dashboard --> */}
            <li>
              <Link
                href="/dashboard/buy"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base  duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("dashboard") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("dashboard") ? "text-white" : "text-secondary"}`}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="stroke-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.53711 5.36426C2.53711 4.83382 2.74782 4.32512 3.1229 3.95004C3.49797 3.57497 4.00668 3.36426 4.53711 3.36426H10.5371V21.3643H4.53711C4.00668 21.3643 3.49797 21.1535 3.1229 20.7785C2.74782 20.4034 2.53711 19.8947 2.53711 19.3643V5.36426ZM14.5371 3.36426H20.5371C21.0675 3.36426 21.5762 3.57497 21.9513 3.95004C22.3264 4.32512 22.5371 4.83382 22.5371 5.36426V10.3643H14.5371V3.36426ZM14.5371 14.3643H22.5371V19.3643C22.5371 19.8947 22.3264 20.4034 21.9513 20.7785C21.5762 21.1535 21.0675 21.3643 20.5371 21.3643H14.5371V14.3643Z" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Dashboard
              </Link>
            </li>

            {/* <!-- Payment --> */}
            <li>
              <Link
                href="/payment"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("payment") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("payment") ? "text-white" : "text-secondary"}`}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" className="fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.03711 7.48926C2.03711 6.59415 2.39269 5.73571 3.02562 5.10277C3.65856 4.46984 4.517 4.11426 5.41211 4.11426H19.6621C20.5572 4.11426 21.4157 4.46984 22.0486 5.10277C22.6815 5.73571 23.0371 6.59415 23.0371 7.48926V17.2393C23.0371 18.1344 22.6815 18.9928 22.0486 19.6257C21.4157 20.2587 20.5572 20.6143 19.6621 20.6143H5.41211C4.517 20.6143 3.65856 20.2587 3.02562 19.6257C2.39269 18.9928 2.03711 18.1344 2.03711 17.2393V7.48926ZM5.41211 5.61426C4.91483 5.61426 4.43791 5.8118 4.08628 6.16343C3.73465 6.51506 3.53711 6.99198 3.53711 7.48926V8.61426H21.5371V7.48926C21.5371 6.99198 21.3396 6.51506 20.9879 6.16343C20.6363 5.8118 20.1594 5.61426 19.6621 5.61426H5.41211ZM3.53711 17.2393C3.53711 17.7365 3.73465 18.2135 4.08628 18.5651C4.43791 18.9167 4.91483 19.1143 5.41211 19.1143H19.6621C20.1594 19.1143 20.6363 18.9167 20.9879 18.5651C21.3396 18.2135 21.5371 17.7365 21.5371 17.2393V10.1143H3.53711V17.2393ZM16.2871 14.6143H18.5371C18.736 14.6143 18.9268 14.6933 19.0674 14.8339C19.2081 14.9746 19.2871 15.1653 19.2871 15.3643C19.2871 15.5632 19.2081 15.7539 19.0674 15.8946C18.9268 16.0352 18.736 16.1143 18.5371 16.1143H16.2871C16.0882 16.1143 15.8974 16.0352 15.7568 15.8946C15.6161 15.7539 15.5371 15.5632 15.5371 15.3643C15.5371 15.1653 15.6161 14.9746 15.7568 14.8339C15.8974 14.6933 16.0882 14.6143 16.2871 14.6143Z" fill=""/>
                </svg>
                Payment
              </Link>
            </li>

            {/* <!-- Transaction --> */}
            <li>
              <Link
                href="/transaction"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("transaction") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("transaction") ? "text-white" : "text-secondary"}`}
              >
                <svg className="stroke-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.03711 12.3643C3.03711 7.88626 3.03711 5.64626 4.42811 4.25526C5.81911 2.86426 8.05811 2.86426 12.5371 2.86426C17.0151 2.86426 19.2551 2.86426 20.6461 4.25526C22.0371 5.64626 22.0371 7.88526 22.0371 12.3643C22.0371 16.8423 22.0371 19.0823 20.6461 20.4733C19.2551 21.8643 17.0161 21.8643 12.5371 21.8643C8.05911 21.8643 5.81911 21.8643 4.42811 20.4733C3.03711 19.0823 3.03711 16.8433 3.03711 12.3643Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.4533 8.36426L8.59431 9.68126C8.18431 9.97126 7.97931 10.1173 8.05131 10.2413C8.12331 10.3643 8.41331 10.3643 8.99331 10.3643H17.0373M14.6213 16.3643L16.4803 15.0473C16.8903 14.7573 17.0953 14.6113 17.0233 14.4873C16.9513 14.3643 16.6613 14.3643 16.0813 14.3643H8.03731" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Transaction
              </Link>
            </li>

            {/* <!-- Profile --> */}
            <li>
              <Link
                href="/profile"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("profile") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("profile") ? "text-white" : "text-secondary"}`}
              >
                <svg className="stroke-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.53711 18.3643C4.53711 17.3034 4.95854 16.286 5.70868 15.5358C6.45883 14.7857 7.47624 14.3643 8.53711 14.3643H16.5371C17.598 14.3643 18.6154 14.7857 19.3655 15.5358C20.1157 16.286 20.5371 17.3034 20.5371 18.3643C20.5371 18.8947 20.3264 19.4034 19.9513 19.7785C19.5762 20.1535 19.0675 20.3643 18.5371 20.3643H6.53711C6.00668 20.3643 5.49797 20.1535 5.1229 19.7785C4.74782 19.4034 4.53711 18.8947 4.53711 18.3643Z" stroke="" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M12.5371 10.3643C14.194 10.3643 15.5371 9.02111 15.5371 7.36426C15.5371 5.7074 14.194 4.36426 12.5371 4.36426C10.8803 4.36426 9.53711 5.7074 9.53711 7.36426C9.53711 9.02111 10.8803 10.3643 12.5371 10.3643Z" stroke="" strokeWidth="1.5"/>
                </svg>
                Profile
              </Link>
            </li>

            {/* <!-- KYC --> */}
            <li>
              <Link
                href="/kyc"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("kyc") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("kyc") ? "text-white" : "text-secondary"}`}
              >
                <svg className="stroke-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.53711 12.3643C2.53711 8.12126 2.53711 6.00026 4.00111 4.68226C5.46711 3.36426 7.82311 3.36426 12.5371 3.36426C17.2511 3.36426 19.6081 3.36426 21.0721 4.68226C22.5361 6.00026 22.5371 8.12226 22.5371 12.3643C22.5371 16.6063 22.5371 18.7283 21.0721 20.0463C19.6091 21.3643 17.2511 21.3643 12.5371 21.3643C7.82311 21.3643 5.46611 21.3643 4.00111 20.0463C2.53611 18.7283 2.53711 16.6063 2.53711 12.3643Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.53711 16.3643H10.5371M14.5371 8.36426H18.5371M14.5371 12.3643H18.5371M14.5371 16.3643H18.5371M8.93711 8.36426H8.13711C7.38311 8.36426 7.00611 8.36426 6.77111 8.59826C6.53711 8.83426 6.53711 9.21026 6.53711 9.96426V10.7643C6.53711 11.5183 6.53711 11.8953 6.77111 12.1303C7.00711 12.3643 7.38311 12.3643 8.13711 12.3643H8.93711C9.69111 12.3643 10.0681 12.3643 10.3031 12.1303C10.5371 11.8943 10.5371 11.5183 10.5371 10.7643V9.96426C10.5371 9.21026 10.5371 8.83326 10.3031 8.59826C10.0671 8.36426 9.69111 8.36426 8.93711 8.36426Z" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                KYC
              </Link>
            </li>

            {/* <!-- Order --> */}
            <li>
              <Link
                href="/order"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("order") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("order") ? "text-white" : "text-secondary"}`}
              >
                <svg className="fill-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.8121 18.4893L17.3871 18.0643C17.2371 17.9143 17.0581 17.8393 16.8501 17.8393C16.6421 17.8393 16.4628 17.9143 16.3121 18.0643C16.1614 18.2143 16.0864 18.3893 16.0871 18.5893C16.0878 18.7893 16.1628 18.9643 16.3121 19.1143L17.2871 20.0893C17.4371 20.2393 17.6121 20.3143 17.8121 20.3143C18.0121 20.3143 18.1871 20.2393 18.3371 20.0893L20.7621 17.7143C20.9121 17.5643 20.9871 17.3849 20.9871 17.1763C20.9871 16.9676 20.9121 16.7886 20.7621 16.6393C20.6121 16.4899 20.4328 16.4149 20.2241 16.4143C20.0154 16.4136 19.8364 16.4886 19.6871 16.6393L17.8121 18.4893ZM7.53711 9.36426H17.5371C17.8204 9.36426 18.0581 9.26826 18.2501 9.07626C18.4421 8.88426 18.5378 8.64692 18.5371 8.36426C18.5364 8.08159 18.4404 7.84426 18.2491 7.65226C18.0578 7.46026 17.8204 7.36426 17.5371 7.36426H7.53711C7.25378 7.36426 7.01644 7.46026 6.82511 7.65226C6.63378 7.84426 6.53778 8.08159 6.53711 8.36426C6.53644 8.64692 6.63244 8.88459 6.82511 9.07726C7.01778 9.26992 7.25511 9.36559 7.53711 9.36426ZM18.5371 23.3643C17.1538 23.3643 15.9748 22.8766 15.0001 21.9013C14.0254 20.9259 13.5378 19.7469 13.5371 18.3643C13.5364 16.9816 14.0241 15.8026 15.0001 14.8273C15.9761 13.8519 17.1551 13.3643 18.5371 13.3643C19.9191 13.3643 21.0984 13.8519 22.0751 14.8273C23.0518 15.8026 23.5391 16.9816 23.5371 18.3643C23.5351 19.7469 23.0474 20.9263 22.0741 21.9023C21.1008 22.8783 19.9218 23.3656 18.5371 23.3643ZM3.53711 5.36426C3.53711 4.81426 3.73311 4.34359 4.12511 3.95226C4.51711 3.56092 4.98778 3.36492 5.53711 3.36426H19.5371C20.0871 3.36426 20.5581 3.56026 20.9501 3.95226C21.3421 4.34426 21.5378 4.81492 21.5371 5.36426V10.7393C21.5371 11.0226 21.4411 11.2603 21.2491 11.4523C21.0571 11.6443 20.8198 11.7399 20.5371 11.7393C20.2544 11.7386 20.0171 11.6426 19.8251 11.4513C19.6331 11.2599 19.5371 11.0226 19.5371 10.7393V5.36426H5.53711V19.4143H11.6121C11.6454 19.6643 11.6954 19.9143 11.7621 20.1643C11.8288 20.4143 11.9038 20.6559 11.9871 20.8893C12.0704 21.0726 12.0371 21.2186 11.8871 21.3273C11.7371 21.4359 11.5954 21.4233 11.4621 21.2893L11.3871 21.2143C11.2871 21.1143 11.1704 21.0643 11.0371 21.0643C10.9038 21.0643 10.7871 21.1143 10.6871 21.2143L9.88711 22.0143C9.78711 22.1143 9.67044 22.1643 9.53711 22.1643C9.40378 22.1643 9.28711 22.1143 9.18711 22.0143L8.38711 21.2143C8.28711 21.1143 8.17044 21.0643 8.03711 21.0643C7.90378 21.0643 7.78711 21.1143 7.68711 21.2143L6.88711 22.0143C6.78711 22.1143 6.67044 22.1643 6.53711 22.1643C6.40378 22.1643 6.28711 22.1143 6.18711 22.0143L5.38711 21.2143C5.28711 21.1143 5.17044 21.0643 5.03711 21.0643C4.90378 21.0643 4.78711 21.1143 4.68711 21.2143L3.53711 22.3643V5.36426ZM7.53711 17.3643H10.9121C11.1954 17.3643 11.4331 17.2683 11.6251 17.0763C11.8171 16.8843 11.9128 16.6469 11.9121 16.3643C11.9114 16.0816 11.8154 15.8443 11.6241 15.6523C11.4328 15.4603 11.1954 15.3643 10.9121 15.3643H7.53711C7.25378 15.3643 7.01644 15.4603 6.82511 15.6523C6.63378 15.8443 6.53778 16.0816 6.53711 16.3643C6.53644 16.6469 6.63244 16.8846 6.82511 17.0773C7.01778 17.2699 7.25511 17.3656 7.53711 17.3643ZM7.53711 13.3643H14.0871C14.3704 13.3643 14.6081 13.2683 14.8001 13.0763C14.9921 12.8843 15.0878 12.6469 15.0871 12.3643C15.0864 12.0816 14.9904 11.8443 14.7991 11.6523C14.6078 11.4603 14.3704 11.3643 14.0871 11.3643H7.53711C7.25378 11.3643 7.01644 11.4603 6.82511 11.6523C6.63378 11.8443 6.53778 12.0816 6.53711 12.3643C6.53644 12.6469 6.63244 12.8846 6.82511 13.0773C7.01778 13.2699 7.25511 13.3656 7.53711 13.3643Z" fill=""/>
                </svg>
                Order
              </Link>
            </li>

             {/* <!-- Settings --> */}
             <li>
              <Link
                href="/settings"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("settings") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("settings") ? "text-white" : "text-secondary"}`}
              >
                <svg className="fill-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.437 13.0246C20.2767 12.8422 20.1883 12.6075 20.1883 12.3646C20.1883 12.1217 20.2767 11.8871 20.437 11.7046L21.717 10.2646C21.8581 10.1073 21.9456 9.90934 21.9672 9.69915C21.9888 9.48895 21.9432 9.27733 21.837 9.09464L19.837 5.63464C19.7319 5.45216 19.5719 5.30752 19.3798 5.22133C19.1876 5.13514 18.9732 5.1118 18.767 5.15464L16.887 5.53464C16.6478 5.58407 16.3988 5.54423 16.1869 5.42264C15.975 5.30105 15.815 5.10612 15.737 4.87464L15.127 3.04464C15.0599 2.84602 14.9321 2.67351 14.7616 2.55148C14.5912 2.42946 14.3866 2.3641 14.177 2.36464H10.177C9.95894 2.35326 9.74314 2.41357 9.56257 2.53636C9.382 2.65914 9.24658 2.83766 9.17701 3.04464L8.61701 4.87464C8.53901 5.10612 8.37898 5.30105 8.16712 5.42264C7.95526 5.54423 7.70622 5.58407 7.46701 5.53464L5.53701 5.15464C5.34156 5.12702 5.14231 5.15786 4.96435 5.24328C4.7864 5.3287 4.63771 5.46487 4.53701 5.63464L2.53701 9.09464C2.42817 9.27529 2.37923 9.48573 2.39719 9.69586C2.41515 9.906 2.49909 10.1051 2.63701 10.2646L3.90701 11.7046C4.06732 11.8871 4.15574 12.1217 4.15574 12.3646C4.15574 12.6075 4.06732 12.8422 3.90701 13.0246L2.63701 14.4646C2.49909 14.6242 2.41515 14.8233 2.39719 15.0334C2.37923 15.2436 2.42817 15.454 2.53701 15.6346L4.53701 19.0946C4.6421 19.2771 4.80212 19.4218 4.99426 19.508C5.18639 19.5941 5.40083 19.6175 5.60701 19.5746L7.48701 19.1946C7.72622 19.1452 7.97526 19.1851 8.18712 19.3066C8.39898 19.4282 8.55901 19.6232 8.63701 19.8546L9.24701 21.6846C9.31658 21.8916 9.452 22.0701 9.63257 22.1929C9.81314 22.3157 10.0289 22.376 10.247 22.3646H14.247C14.4566 22.3652 14.6612 22.2998 14.8316 22.1778C15.0021 22.0558 15.1299 21.8833 15.197 21.6846L15.807 19.8546C15.885 19.6232 16.045 19.4282 16.2569 19.3066C16.4688 19.1851 16.7178 19.1452 16.957 19.1946L18.837 19.5746C19.0432 19.6175 19.2576 19.5941 19.4498 19.508C19.6419 19.4218 19.8019 19.2771 19.907 19.0946L21.907 15.6346C22.0132 15.452 22.0588 15.2403 22.0372 15.0301C22.0156 14.8199 21.9281 14.622 21.787 14.4646L20.437 13.0246ZM18.947 14.3646L19.747 15.2646L18.467 17.4846L17.287 17.2446C16.5668 17.0974 15.8176 17.2198 15.1816 17.5884C14.5456 17.9571 14.0672 18.5465 13.837 19.2446L13.457 20.3646H10.897L10.537 19.2246C10.3069 18.5265 9.82839 17.9371 9.19241 17.5684C8.55643 17.1998 7.80723 17.0774 7.08701 17.2246L5.90701 17.4646L4.60701 15.2546L5.40701 14.3546C5.89896 13.8046 6.17094 13.0926 6.17094 12.3546C6.17094 11.6167 5.89896 10.9047 5.40701 10.3546L4.60701 9.45464L5.88701 7.25464L7.06701 7.49464C7.78723 7.64186 8.53643 7.51952 9.17241 7.15084C9.80839 6.78216 10.2869 6.1928 10.517 5.49464L10.897 4.36464H13.457L13.837 5.50464C14.0672 6.2028 14.5456 6.79216 15.1816 7.16084C15.8176 7.52952 16.5668 7.65186 17.287 7.50464L18.467 7.26464L19.747 9.48464L18.947 10.3846C18.4606 10.9334 18.192 11.6413 18.192 12.3746C18.192 13.108 18.4606 13.8159 18.947 14.3646ZM12.177 8.36464C11.3859 8.36464 10.6125 8.59924 9.95472 9.03876C9.29693 9.47829 8.78424 10.103 8.48149 10.8339C8.17874 11.5648 8.09952 12.3691 8.25386 13.145C8.40821 13.9209 8.78917 14.6337 9.34858 15.1931C9.90799 15.7525 10.6207 16.1334 11.3966 16.2878C12.1726 16.4421 12.9768 16.3629 13.7077 16.0602C14.4386 15.7574 15.0634 15.2447 15.5029 14.5869C15.9424 13.9291 16.177 13.1558 16.177 12.3646C16.177 11.3038 15.7556 10.2864 15.0054 9.53621C14.2553 8.78607 13.2379 8.36464 12.177 8.36464ZM12.177 14.3646C11.7814 14.3646 11.3948 14.2473 11.0659 14.0276C10.737 13.8078 10.4806 13.4955 10.3292 13.13C10.1779 12.7646 10.1383 12.3624 10.2154 11.9745C10.2926 11.5865 10.4831 11.2301 10.7628 10.9504C11.0425 10.6707 11.3989 10.4802 11.7868 10.4031C12.1748 10.3259 12.5769 10.3655 12.9424 10.5169C13.3078 10.6683 13.6202 10.9246 13.8399 11.2535C14.0597 11.5824 14.177 11.9691 14.177 12.3646C14.177 12.8951 13.9663 13.4038 13.5912 13.7789C13.2161 14.1539 12.7074 14.3646 12.177 14.3646Z" fill=""/>
                </svg>
                Settings
              </Link>
            </li>

            {/* <!-- Logout --> */}
            <li>
              <Link
                href="/logout"
                className={`group relative flex items-center gap-2.5 px-4 py-2 font-normal text-base duration-300 ease-in-out hover:text-primary dark:hover:text-white ${
                  pathname.includes("logout") ? "text-primary" : "text-secondary"
                } dark:${pathname.includes("logout") ? "text-white" : "text-secondary"}`}
              >
                <svg className="stroke-current" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5371 17.9894C15.4631 19.8414 13.9201 21.4134 11.8531 21.3634C11.3721 21.3514 10.7771 21.1834 9.58811 20.8484C6.72711 20.0414 4.24311 18.6844 3.64711 15.6454C3.53711 15.0884 3.53711 14.4594 3.53711 13.2014V11.5274C3.53711 10.2704 3.53711 9.64142 3.64711 9.08242C4.24311 6.04442 6.72711 4.68742 9.58811 3.88042C10.7781 3.54542 11.3721 3.37742 11.8531 3.36542C13.9201 3.31542 15.4631 4.88742 15.5371 6.73942M21.5371 12.3644H10.5371M21.5371 12.3644C21.5371 11.6644 19.5431 10.3564 19.0371 9.86442M21.5371 12.3644C21.5371 13.0644 19.5431 14.3724 19.0371 14.8644" stroke="" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="absolute bottom-6 right-6 flex gap-4">
        <Link href={"/chat"}>
          <Image src='/images/icon/icon-chat.svg' width={44} height={44} alt="icon" />
        </Link> 
        <Link href={"/support"}>
          <Image src='/images/icon/icon-support.svg' width={44} height={44} alt="icon" />
        </Link> 
      </div>
    </aside>
  );
};

export default Sidebar;
