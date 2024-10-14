import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "Terms & Conditions",
  description: "Our terms and conditions",
};
const Page = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h1 className="text-center font-bold text-xl mb-4">
        TERMS AND CONDITION
      </h1>
      <div className="my-4">
        <p className="my-2">
          APCO Wellness Private Limited (&quot; YesNMore &quot; or
          &quot;we&quot; or &quot;us&quot;) is the owner, operator, and manager
          of the website known as Yes N More.com. You understand and agree that
          you are bound by the terms listed below, or as may be revised from
          time to time (the "User Agreement"), for as long as you use or access
          the website. By doing so, you are deemed to have accepted these terms
          and conditions, which are in effect for an indefinite period of time.
          Please send us an email at Support@yesnmore.com, if you have any
          questions concerning the terms and conditions of this User Agreement
          or if you have any suggestions or grievances regarding the Website.
          The terms and conditions of this User Agreement may be modified by us
          at any time without prior notice.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">General</h2>
        <p className="my-2">
          As long as the user is eligible to use and makes any purchases through
          the website, or other means of communication within the
          above-mentioned period, the user agrees to be bound by these terms.{" "}
          <br />
          The user is authorized to use the website only for legitimate purposes
          as specified by Yes N More and Google policies; any violation of these
          policies will result in strict legal action against the user in
          accordance with the applicable laws and policies.
        </p>
        <p>
          {" "}
          - Yes N More works to offer users the best prices on goods and
          services.
        </p>
        <p>
          {" "}
          - You agree to be bound by the following terms and conditions (the
          &quot;Terms of Service,&quot; &quot;Terms&quot;), as well as any
          additional terms and conditions and policies that are linked here
          and/or accessible by hyperlink, by using our website and/or making a
          purchase from us. All users of the website, including without
          limitation browser users, vendors, customers, merchants, and/or
          content producers, are subject to these Terms of Service.
        </p>
        <p>
          {" "}
          - By using or accessing the website, you agree to the Terms of
          Service.
        </p>
        <p>
          {" "}
          - If you disagree with the terms, you are not permitted to use the
          website or services.
        </p>
        <p>
          {" "}
          - The Terms apply to any new tools or features added to the website.
        </p>
        <p>
          {" "}
          - The latest version of the Terms can be reviewed anytime on the
          website.
        </p>
        <p>
          {" "}
          - We reserve the right to update, modify, or replace the Terms at any
          time.
        </p>
        <p>
          {" "}
          - It is your responsibility to check for updates; continued use
          implies acceptance of changes.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Criteria</h2>
        <p>
          {" "}
          - You confirm that you are at least the legal age of majority in your
          state or province of residence, or that you are the legal age of
          majority in your state or province of residence and that you have
          granted us permission to permit any of your minor dependents to use
          this website, by accepting these Terms of Service.{" "}
        </p>
        <p>
          {" "}
          - You are not permitted to use our products for any unlawful or
          illegal purposes, nor are you permitted to break any local laws
          (copyright laws included) by using the Service.{" "}
        </p>
        <p>
          {" "}
          - Services shall be immediately terminated in the event of any break
          or violation of the Terms.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Accessing the Website</h2>
        <p>
          {" "}
          - We maintain the right, at any time and for any reason, to reject
          anyone service.
        </p>
        <p>
          {" "}
          - While credit/debit card information is always transferred encrypted,
          noncredit card information may be sent over networks without
          encryption.
        </p>
        <p>
          {" "}
          - Without express permission, you are not allowed to duplicate, sell,
          or use any portion of the service.
        </p>
        <p>
          {" "}
          - The agreement&quot;s limitations are unaffected by headings, which
          are merely for convenience.
        </p>
        <p>
          {" "}
          - We disclaim all responsibility for any out-of-date or inaccurate
          information on the website; while making decisions, consult
          trustworthy sources.
        </p>
        <p>
          {" "}
          - The website&quot;s historical material is provided purely for
          reference and might not be up to date. It is your duty to keep an eye
          out for modifications.
        </p>
        <p>
          {" "}
          - You use the website at your own risk; the information on it is broad
          and should not be relied upon exclusively.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Prices and Services</h2>
        <p> - Product costs are subject to change at any time.</p>
        <p>
          {" "}
          - We retain the right to modify or discontinue services or any part of
          the material without notice.
        </p>
        <p>
          {" "}
          - Without express permission, you are not allowed to duplicate, sell,
          or use any portion of the service.
        </p>
        <p>
          {" "}
          - Any modifications, pauses, or cancellations of our services, as well
          as pricing alterations, are not covered by us.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Payment Policy</h2>
        <p>
          {" "}
          - We do not accept liability for any damage resulting from failure to
          obtain authorization, going over limits, problems with transactions,
          or denied payments for any of the payment methods listed on our
          website.
        </p>
        <p>
          {" "}
          - Indian Rupees must be used for all payments. Other forms of payment
          are not accepted.
        </p>
        <p>
          {" "}
          - For a secure purchasing experience, we could ask for supporting
          documentation (such a government-issued ID) prior to delivery in order
          to verify the legitimacy of the payment.
        </p>
        <p>
          {" "}
          - Yes N More is not a financial or banking service provider; it is
          just a payment helper.
        </p>
        <p>
          {" "}
          - Cash on Delivery (COD) services and electronic transactions are
          supported by the payment facility. Regarding any credit facilities, we
          have no liability.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Transaction and Delivery Terms</h2>
        <p>
          {" "}
          - APCO Wellness Pvt Ltd and the buyer have a contractual
          responsibility regarding transactions, delivery, and all associated
          terms.
        </p>
        <p>
          {" "}
          - It is authorized for Yes N More to accept and send payments using
          COD or electronic means.
        </p>
        <p> - We don&quot;t offer credit options for any kind of purchase.</p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Ownership and Use of Content</h2>
        <p>
          {" "}
          - Yes N More is the owner of all content on the website, including
          text, images, and logos.
        </p>
        <p>
          {" "}
          - No portion of the website&quot;s material may be duplicated or
          shared without permission in writing.
        </p>
        <p>
          {" "}
          - Download content should only be used for private, non-commercial
          purposes; proprietary notices should not be removed or altered.
        </p>
        <p>
          {" "}
          - User-posted messages, emails, and other materials become the
          property of Yes N More, with permission to use them for marketing.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Privacy Policy</h2>
        <p>
          {" "}
          - One important idea is the protection of user privacy. In compliance
          with the Information Technology Act of 2000, personal data is
          processed and stored using technological security measures.
        </p>
        <p>
          {" "}
          - Yes N More may share user information with affiliates for marketing
          purposes unless the user selects out.
        </p>
        <p>
          {" "}
          - To comply with legal requirements, market to potential customers, or
          stop unlawful activity, personal information may be shared with other
          parties.
        </p>
        <p>
          {" "}
          - Disclosure may also happen when two companies combine or are
          acquired; in these situations, the newly formed company will have to
          adhere to the same privacy policies.
        </p>
        <p>
          {" "}
          - When it&quot;s required to uphold the terms and conditions of the
          website or safeguard user rights, information is shared with law
          enforcement.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Warranties and Liability Disclaimer</h2>
        <p>
          {" "}
          - The services on this website are offered "as is" and "as available"
          without any hidden or express warranties.
        </p>
        <p>
          {" "}
          - Yes N More does not warrant that the website will always be up to
          date or accurate.
        </p>
        <p>
          {" "}
          - Any viruses, dangerous elements, or disruptions impacting the
          transmission or material on the website are not our responsibility.
        </p>
        <p> - The information on this page is not intended to be advice.</p>
        <p>
          {" "}
          - State laws that are relevant apply to products that are sold.
          Refunds or credits shall be given in the event that any product cannot
          be delivered because of legal constraints.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Communication and Notifications</h2>
        <p>
          {" "}
          - When placing an order, users are required to supply a working phone
          number.
        </p>
        <p>
          {" "}
          - Users agree to receive updates about orders and shipments by phone
          calls, SMS, or website-based notifications by registering a phone
          number.
        </p>
        <p>
          {" "}
          - Without your previous consent, we will not use your personal
          information to send you commercial messages.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Obligation</h2>
        <p>
          {" "}
          Users consent to hold APCO Wellness Private Limited and its brand Yes
          N More, inoffensive from any claims or lawsuits arising from terms
          violations, privacy policies broken, or rights of third parties
          invaded upon.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Governing Law and Jurisdiction</h2>
        <p>
          Indian law governs all services and agreements, and courts have
          exclusive authority over any disputes.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Contact Information</h2>
        <p className="my-2">
          Questions about these Terms of Service should be sent to us at{" "}
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
