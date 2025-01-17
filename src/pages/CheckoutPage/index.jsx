import React from "react";
import Layout from "../../components/Layout";

export default function CheckoutPage() {
  return (
    <Layout>
      <div className="w-full  pt-0 pb-0">
        <div className="checkout-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full mb-5">
            <div className="page-title-wrapper bg-[#FFFAEF] w-full h-[173px] py-10">
              <div className="max-w-6xl mx-auto">
                <div className="mb-5">
                  <div>
                    <div className="breadcrumb-wrapper font-400 text-[13px] text-black mb-[23px]">
                      <span>
                        <a href="/">
                          <span className="mx-1 capitalize">home</span>
                        </a>
                        <span className="sperator">/</span>
                      </span>
                      <span>
                        <a href="/checkout">
                          <span className="mx-1 capitalize">checkout</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <h1 className="text-3xl font-semibold text-black">
                    Checkout
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="checkout-main-content w-full">
            <div className="max-w-6xl mx-auto">
              <div className="w-full sm:mb-10 mb-5">
                <div className="sm:flex sm:space-x-[18px] s">
                  <div className="sm:w-1/2 w-full mb-5 h-[70px]">
                    <a href="#">
                      <div className="w-full h-full bg-[#F6F6F6] text-black flex justify-center items-center">
                        <span className="text-[15px] font-medium">
                          Log into your Account
                        </span>
                      </div>
                    </a>
                  </div>
                  <div className="flex-1 h-[70px]">
                    <a href="#">
                      <div className="w-full h-full bg-[#F6F6F6] text-black flex justify-center items-center">
                        <span className="text-[15px] font-medium">
                          Enter Coupon Code
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:flex lg:space-x-[30px]">
                <div className="lg:w-1/2 w-full">
                  <h1 className="sm:text-2xl text-xl text-black font-medium mb-5">
                    Billing Details
                  </h1>
                  <div className="form-area">
                    <form>
                      <div className="sm:flex sm:space-x-5 items-center mb-6">
                        <div className="sm:w-1/2 mb-5 sm:mb-0">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              First Name*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder="Demo Name"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Last Name*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder="Demo Name"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center mb-6">
                        <div className="w-1/2">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Email Address*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder="demoemial@gmail.com"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Phone Number*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder="012 3 *******"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray w-full font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                          Country*
                        </h1>
                        <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center mb-2">
                          <span className="text-[13px] text-qgraytwo">
                            Select Country
                          </span>
                          <span>
                            <svg
                              width={11}
                              height={7}
                              viewBox="0 0 11 7"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                                fill="#222222"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div className=" mb-6">
                        <div className="w-full">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Address*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder="your address here"
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-5 items-center mb-6">
                        <div className="w-1/2">
                          <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
                            Town / City*
                          </h1>
                          <div className="w-full h-[50px] border border-[#EDEDED] px-5 flex justify-between items-center">
                            <span className="text-[13px] text-qgraytwo">
                              Miyami Town
                            </span>
                            <span>
                              <svg
                                width={11}
                                height={7}
                                viewBox="0 0 11 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                                  fill="#222222"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="input-com w-full h-full">
                            <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
                              Postcode / ZIP*
                            </label>
                            <div className="input-wrapper border border-qgray-border w-full h-full overflow-hidden relative ">
                              <input
                                placeholder
                                className="input-field placeholder:text-sm text-sm px-6 text-dark-gray font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 items-center mb-10">
                        <div>
                          <input type="checkbox" name id="create" />
                        </div>
                        <label
                          htmlFor="create"
                          className="text-black text-[15px] select-none"
                        >
                          Create an account?
                        </label>
                      </div>
                      <div>
                        <h1 className="text-2xl text-black font-medium mb-3">
                          Billing Details
                        </h1>
                        <div className="flex space-x-2 items-center mb-10">
                          <div>
                            <input type="checkbox" name id="address" />
                          </div>
                          <label
                            htmlFor="address"
                            className="text-black text-[15px] select-none"
                          >
                            Ship to a different address
                          </label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="sm:text-2xl text-xl text-black font-medium mb-5">
                    Order Summary
                  </h1>
                  <div className="w-full px-10 py-[30px] border border-[#EDEDED]">
                    <div className="sub-total mb-6">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] font-medium text-black uppercase">
                          PROduct
                        </p>
                        <p className="text-[13px] font-medium text-black uppercase">
                          total
                        </p>
                      </div>
                      <div className="w-full h-[1px] bg-[#EDEDED]" />
                    </div>
                    <div className="product-list w-full mb-[30px]">
                      <ul className="flex flex-col space-y-5">
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-[15px] text-black mb-2.5">
                                Apple Watch
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray">
                                64GB, Black, 44mm, Chain Belt
                              </p>
                            </div>
                            <div>
                              <span className="text-[15px] text-black font-medium">
                                $38
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-[15px] text-black mb-2.5">
                                Apple Watch
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray">
                                64GB, Black, 44mm, Chain Belt
                              </p>
                            </div>
                            <div>
                              <span className="text-[15px] text-black font-medium">
                                $38
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="text-[15px] text-black mb-2.5">
                                Apple Watch
                                <sup className="text-[13px] text-qgray ml-2 mt-2">
                                  x1
                                </sup>
                              </h4>
                              <p className="text-[13px] text-qgray">
                                64GB, Black, 44mm, Chain Belt
                              </p>
                            </div>
                            <div>
                              <span className="text-[15px] text-black font-medium">
                                $38
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="w-full h-[1px] bg-[#EDEDED]" />
                    <div className="mt-[30px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-[13px] font-medium text-black uppercase">
                          SUBTOTAL
                        </p>
                        <p className="text-[15px] font-medium text-black uppercase">
                          $365
                        </p>
                      </div>
                    </div>
                    <div className="w-full mt-[30px]">
                      <div className="sub-total mb-6">
                        <div className=" flex justify-between mb-5">
                          <div>
                            <span className="text-xs text-qgraytwo mb-3 block">
                              SHIPPING
                            </span>
                            <p className="text-base font-medium text-black">
                              Free Shipping
                            </p>
                          </div>
                          <p className="text-[15px] font-medium text-black">
                            +$0
                          </p>
                        </div>
                        <div className="w-full h-[1px] bg-[#EDEDED]" />
                      </div>
                    </div>
                    <div className="mt-[30px]">
                      <div className=" flex justify-between mb-5">
                        <p className="text-2xl font-medium text-black">Total</p>
                        <p className="text-2xl font-medium text-qred">$365</p>
                      </div>
                    </div>
                    <div className="shipping mt-[30px]">
                      <ul className="flex flex-col space-y-1">
                        <li className=" mb-5">
                          <div className="flex space-x-2.5 items-center mb-4">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                                id="transfer"
                              />
                            </div>
                            <label
                              htmlFor="transfer"
                              className="text-[18px] text-normal text-black"
                            >
                              Direct Bank Transfer
                            </label>
                          </div>
                          <p className="text-qgraytwo text-[15px] ml-6">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                          </p>
                        </li>
                        <li>
                          <div className="flex space-x-2.5 items-center mb-5">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                                id="delivery"
                              />
                            </div>
                            <label
                              htmlFor="delivery"
                              className="text-[18px] text-normal text-black"
                            >
                              Cash on Delivery
                            </label>
                          </div>
                        </li>
                        <li>
                          <div className="flex space-x-2.5 items-center mb-5">
                            <div className="input-radio">
                              <input
                                type="radio"
                                name="price"
                                className="accent-pink-500"
                                id="bank"
                              />
                            </div>
                            <label
                              htmlFor="bank"
                              className="text-[18px] text-normal text-black"
                            >
                              Credit/Debit Cards or Paypal
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <a href="#">
                      <div className="w-full h-[50px] bg-black text-white flex justify-center items-center">
                        <span className="text-sm font-semibold">
                          Place Order Now
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
