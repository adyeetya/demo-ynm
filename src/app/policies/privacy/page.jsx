import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Privacy Policy",
  description: "Our privacy policy",
};
const Page = () => {
  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen ${poppins.className}`}
    >
      <h1 className="text-center font-bold text-xl mb-4">Privacy Policy</h1>
      <p>
        At YESNMORE, the privacy of our customers is of utmost importance. We
        understand that your personal information is one of our most valuable
        assets, and we are committed to protecting it. This Privacy Policy
        outlines how we collect, use, and safeguard the information you provide
        to us. By using our website (www.yesnmore.com), you agree to the
        practices described in this policy. If you disagree with any part of
        this policy, please do not use our website.
      </p>

      <div className="my-4">
        <h2 className="font-semibold">Information You Provide to Us</h2>
        <p>
          When you create or edit your account, ask for on-demand services, get
          in touch with customer support, or interact with us in any other way,
          we gather information that you voluntarily give to us. Name, email,
          phone number, postal address, profile photo, payment method, items
          requested (for delivery services), delivery notes, and any other
          information you wish to submit are examples of this information that
          could be included.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Information Use</h2>
        <p>The data we gather about you could be used by us to</p>
        <p>
          {" "}
          - Provide, maintain, and enhance our services, such as those that help
          with payments, sending receipts, giving you the goods and services
          you&quot;ve requested (along with the information you need), creating
          new features, helping users with customer service, creating safety
          features, authenticating users, and sending administrative and product
          updates.
        </p>
        <p>
          {" "}
          - Carry out internal tasks, such as stopping fraud and misuse of our
          services, fixing faults in software and other operational issues,
          gathering and analysing data, testing, and research, and keeping an
          eye on usage and activity patterns.
        </p>
        <p>
          {" "}
          - Send you correspondence that we believe may be of interest to you,
          such as updates about Yes N More’s news, events, products, and
          promotions; process entries for contests, sweepstakes, or other
          promotions; and award any associated prizes.
        </p>
        <p>
          {" "}
          - Enhance and personalize the Services by offering or recommending
          certain features, content, social media connections, recommendations,
          and adverts.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Sharing of Information</h2>
        <p>
          We may disclose the data we gather about you in the ways listed below
          or as stated when the data is first collected or shared:
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Using Our Services</h2>
        <p>We might reveal your data:</p>
        <p>
          {" "}
          - In collaboration with third parties to deliver a service you
          requested via a joint venture or marketing initiative from us or a
          third party;
        </p>
        <p>
          {" "}
          - With the public at large in the event that you upload content in an
          open forum, such as blog comments, social media posts, or other
          publicly accessible aspects of our services;
        </p>
        <p>
          {" "}
          - With outside parties you authorize us to share information with,
          such as other websites or apps that work with our Services; and
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Other Important Sharing</h2>
        <p>We may share your information:</p>
        <p>
          {" "}
          - Together with Yes N More affiliates and subsidiaries that work for
          us in the areas of logistics, data centralization, and/or service
          provision;
        </p>
        <p>
          {" "}
          - With suppliers, advisers, business associates, and additional
          service providers who require access to such data in order to perform
          tasks on our behalf;
        </p>
        <p>
          {" "}
          - If we feel that disclosing information is necessary to comply with
          any applicable laws, rules, or legal procedures, or in response to a
          request for information made by a competent authority;
        </p>
        <p>
          {" "}
          - If we think your actions are against our rules, terms of service, or
          user agreements, or if it&quot;s necessary to defend the rights,
          property, or safety of Yes N More or others, we may share information
          with law enforcement officers, government representatives, or other
          third parties;
        </p>
        <p>
          {" "}
          - If we notify you otherwise and you agree to the sharing, in
          connection with or during negotiations of any merger, sale of company
          assets, consolidation or restructuring, financing, or acquisition of
          all or a portion of our business by or into another company; and in an
          anonymized or aggregated form that cannot reasonably be used to
          identify you.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">
          Analytics and Advertising Services Provided by Others
        </h2>
        <p>
          We may allow others to provide audience measurement and analytics
          services for us, to serve advertisements on our behalf across the
          Internet, and to track and report on the performance of those
          advertisements. These entities may use cookies and other technologies
          to identify your device when you visit our app/website and use our
          Services, as well as when you visit other online sites and services.
        </p>
      </div>
      <h2 className="font-semibold my-4">Your Choices</h2>
      <div className="my-4">
        <h2 className="font-semibold">Account Information</h2>
        <p>
          You may correct your account information at any time by logging into
          your online or in-app account. Please note that in some cases we may
          retain certain information about you as required by law, or for
          legitimate business purposes to the extent permitted by law. For
          instance, if you have a standing credit or debt on your account, or if
          we believe you have committed fraud or violated our Terms, we may seek
          to resolve the issue before deleting your information.
          <br />
          We might give permission to third parties to show our advertisements
          online, measure and analyse our audience, and monitor and report on
          the effectiveness of our advertising. When you visit our website and
          use our services, as well as when you visit other websites and
          services, these entities may use cookies and other technologies to
          identify your device.
        </p>
      </div>

      <h2 className="font-semibold my-4">Your Decisions</h2>
      <div className="my-4">
        <h2 className="font-semibold">Account Detail</h2>
        <p>
          By signing into your online or in-app account, you can update your
          account details at any moment. Please be aware that under certain
          circumstances, we might keep certain information about you on file in
          order to comply with legal requirements or, if allowed by law, for
          appropriate business needs. For example, we might try to settle the
          matter before deleting your information if you have outstanding debt
          or credit on your account, or if we think you have committed fraud or
          broken our terms.
        </p>
      </div>
      <div className="my-4">
        <h2 className="font-semibold">Location Details</h2>
        <p>
          In accordance with the permission framework your mobile operating
          system uses, we ask for permission before collecting precise location
          data from your device for our website.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Access Permissions</h2>
        <p>
          In compliance with the applicable laws, Yes N More will honour
          requests from individuals for access to, correction of, and/or
          deletion of the personal data it maintains.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Contact Information</h2>
        <p>
          In accordance with the permission framework your mobile operating
          system uses, we might additionally ask for permission before
          collecting and syncing contact data from your device using our
          website.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Age of Agreement</h2>
        <p>
          By using this website, you confirm that you are at least the age of
          majority in your jurisdiction, or that you have provided us with
          permission to allow any of your minor dependents to use this website
          on your behalf.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Marketing Communications</h2>
        <p>
          By following the instructions in those messages, you can choose not to
          receive any more promotional messages from us. Even if you choose to
          unsubscribe, we might still send you non-promotional emails about your
          account, requested services, or our continued business dealings.{" "}
          <br /> You can later disable information collecting if you originally
          agree to it by adjusting the settings on your mobile device. This
          will, however, restrict how you may use some of our Services&quot;
          features.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">
          Marketing Communications with WhatsApp Messenger
        </h2>
        <p>
          You (the &quot;User&quot;) grant Yes & More permission to communicate
          with you on WhatsApp for all of its transactional and promotional
          messaging and communication needs by opting in or accepting the terms
          and conditions. We promise to handle your information with care,
          utilize it to improve your interactions with us, and provide you
          access to the best offers and discounts.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Links</h2>
        <p>
          The website could have links to affiliate, commercial partner, and
          third-party websites. The information on these websites that are made
          available by or via our website is not within our control, and we are
          not liable for, accurate, legitimate, reliable, or of any other
          quality. Any link on the Website does not indicate that we approve of
          the connected website. The user assumes all risk when using these
          services and the links.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Changes to the Statement</h2>
        <p>
          This Statement is subject to change at any time. We will notify you
          through the Services or by another method, including email, if we make
          any substantial changes to the Statement or how we handle your
          personal information. You agree to the modifications if you keep using
          the Services after receiving this notice. To ensure you are aware of
          our privacy practices as they change, we advise you to routinely
          review the Statement.
        </p>
      </div>

      <div className="my-4">
        <h2 className="font-semibold">Questions and Contact Numbers </h2>
        <p>
          Contact our Privacy Compliance Officer at Support@yesnmore.com if you
          would like to file a complaint, have access to, update, or delete any
          personal information we may hold about you, or if you just want
          further details.
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-lg font-bold">Grievance Redressal</h2>
        <p>
          If you have any complaints, concerns, or questions regarding our
          Privacy Policy or the handling of your personal data, please reach out
          to us at:
        </p>
        <p>
          {" "}
          Registered Office - <br /> YESNMORE <br /> D65/319-C Gopal Bhavan,
          LAHARTARA BAULIA, <br /> Varanasi, Uttar Pradesh, 221106, INDIA
        </p>
        <p>Email - </p>
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
