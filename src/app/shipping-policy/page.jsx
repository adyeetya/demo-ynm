import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "Shipping Policy",
  description: "Our shipping policy",
};
const Page = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h1 className="text-center font-bold text-xl mb-4">
        Shipping Guidelines
      </h1>
      <div className="my-4">
        <h2 className="font-semibold">Processing time for shipments</h2>
        <p className="my-2">
          All orders are shipped out in 2-5 business days. On weekends and
          holidays, orders are not sent or delivered.
          <br />
          Shipments can be a few days behind schedule if we are dealing with a
          large volume of orders. Please give the delivery a few extra days for
          transportation. Should there be an important delay in the delivery of
          your order, we will get in touch with you through phone or email or
          whatsapp.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Damages</h2>
        <p className="my-2">
          To register a claim if your order arrived damaged or defective, please
          get in touch with our team at Support@yesnmore.com or at our Whatsapp
          number +91 9266732089.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Delivery estimates and shipping costs</h2>
        <p className="my-2">
          All Cash on Delivery orders are subject to ₹ 50 in cash collection
          charges. There are no refunds for fees.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">
          Order tracking and confirmation of shipment
        </h2>
        <p className="my-2">
          Once your order has arrived, you will receive an email and a whatsapp
          message with a shipment confirmation and you’re tracking number (s).
          Within a day after order confirmation, the tracking number will be
          active.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Unexpected Delivery Problems</h2>
        <p className="my-2">
          Please email us at Support@yesnmore.com, if you do not receive your
          delivery and the order has not yet left our warehouse. Once a delivery
          is dispatched, we are unable to hold it.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Additional Fees</h2>
        <p className="my-2">
          There aren&quot;t any extra fees. The total cost at checkout includes
          all taxes. During the order processing procedure, you will be informed
          of any applicable shipping costs.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Delivery Times</h2>
        <p className="my-2">
          - <span className="font-semibold">Metro Cities</span>: Allow 2-5
          business days for delivery.
        </p>
        <p className="my-2">
          - <span className="font-semibold">Other Cities</span>: : Orders will
          be delivered in 2-7 business days.
        </p>
        <p className="my-2">
          - <span className="font-semibold">Remote Locations</span>:Remote
          Locations.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Contact Information</h2>
        <p className="my-2">
          For any questions or further assistance, please contact us at{" "}
          <a
            href="mailto:support@yesnmore.com"
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            support@yesnmore.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
