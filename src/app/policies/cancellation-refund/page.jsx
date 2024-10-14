import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "Cancellation and Refund Policy",
  description: "Our cancellation and refund policy",
};
const Page = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h1 className="text-center font-bold text-xl mb-4">
        Cancellation and Refund Policy
      </h1>
      <p className=" mb-4">
        The return policy has been greatly simplified in order to guarantee a
        seamless and easy ordering experience at Yes N More.
      </p>
      <p className=" mb-4">
        If a product is damaged during shipment, we provide a complete
        replacement. Our customer care team will validate the damage via
        WhatsApp chat and calling number. Returns will be appraised
        case-by-case, with shipping fees deducted from the total refund to
        reflect the cost of both the original shipment and return pickup
      </p>
      <p className=" mb-4">
        Customer satisfaction is our top priority at Yes N More, and we work
        hard to make sure the refund procedure is quick and easy. The main
        aspects of our return policy are as follows:
      </p>

      <div className="my-4">
        <h2 className="font-semibold">Processing Time for Refunds</h2>
        <p>
          The refund amount will be executed within 5-7 working days after a
          refund request is granted. Depending on your financial institution or
          mode of payment, the timeline may differ slightly.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Refund Method</h2>
        <p>
          Our source-based refund policy is strictly followed to for safe and
          smooth transactions. This implies that the original payment method
          used for the transaction will receive credit for the refund.
        </p>
        <p>
          {" "}
          -{" "}
          <span className="font-semibold">
            Payments with Credit or Debit Cards
          </span>
          : If you used a credit or debit card to make the purchase, the refund
          will be applied to that card as well.
        </p>
        <p>
          {" "}
          - <span className="font-semibold">Payments through UPI</span>: Refunds
          for UPI transactions will be sent to the Virtual Payment Address (VPA)
          that was used at the time of payment.
        </p>
        <p>
          This policy makes sure that compensations are sent back to the
          original payment method and helps avoid chargebacks. If you need any
          help or have any queries about refunds, don&quot;t hesitate to get in
          touch with our customer service staff.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Order Refunds</h2>
        <p>
          Before it is shipped, you can quickly cancel your order from the "My
          Orders" tab. In the event that the order is cancellable, a "Cancel"
          button will appear beside it.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Prepaid Orders</h2>
        <p>
          - Refunds will be applied to the original payment method within 5-7
          days if the order is in the "Complete" step.
        </p>
        <p>
          - Refunds for orders that haven&quot;t been fulfilled yet will start
          at the original payment source.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Status of Cancellation/Refund</h2>
        <p>
          Updates through SMS or WhatsApp will be sent to you after the
          cancelation is complete. To keep you informed, we will send an SMS
          confirmation once your cancellation request has been successfully
          processed. You will also get a reference ID from our payment partner
          once the refund is started. In 5-7 days, the reimbursement will be
          credited.
        </p>
        <p>
          Cancellations are only permitted before dispatch, with refunds
          available for online payments directly to the original payment source
          (not applicable for COD orders). Exchanges are available for both COD
          and online purchases.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Returns of Orders</h2>
        <p>
          Although we don&quot;t accept returns, we do, in some circumstances,
          provide replacements upon request made within 7 days after delivery:
        </p>
        <p>- Delivered the inappropriate product</p>
        <p>- Missing stuffs</p>
        <p>- Damage Product</p>
        <p>- Expired product</p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Get in touch with us</h2>
        <p>
          1- Reject any package that appears to have been damaged with or opened
          from the outside. Kindly notify us as soon as possible by sending an
          email to Support@yesnmore.com or giving us a call at +91 9266732089
          (Mon-Sat, 9.30 am to 6.30 pm).
        </p>
        <p>
          2- If any of the products in your order are damaged or missing, please
          record a video of yourself unpacking the package as supporting
          documentation.
        </p>
        <p>
          3- If you are unsure about the product&quot;s validity, don&quot;t
          open the seal.
        </p>
        <p>
          4- We do not accept product returns or replacements once the product
          seal has been broken
        </p>
        <p>5- No return policy applies to promotional products.</p>
        <p>
          6- Items that have been damaged, cleaned, or have had their original
          tags removed are not eligible for returns or exchanges. This includes
          clothing and soft goods.
        </p>
        <p>7- Items acquired during a clearance sale are not returnable.</p>
        <p>
          8- A reverse shipping charge amount will apply for returns made
          without valid reasons.
        </p>
      </div>
      <div className="my-4">
        <p>
          <span className="font-semibold">Please Note - </span>
          If the above-mentioned instructions are not followed, we will not be
          able to accept any returns or replacements.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-lg font-bold">Contact us</h2>
        <p>
          If you have any questions regarding our Cancellation and Refund
          Policy, please contact us at
        </p>
        <a
          href="mailto:support@yesnmore.com"
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          support@yesnmore.com
        </a>
      </div>
    </div>
  );
};

export default Page;
