import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";

const Terms = () => {
  return (
    <div className="w-screen bg-gray-100">
      <div className="header w-full h-16 bg-blue-500 flex items-center px-5">
        <Link to={"/"} className="text-white font-semibold text-2xl">
          BestFans
        </Link>
      </div>
      <div className="w-7/12 mx-auto py-4">
        <h3 className="font-semibold my-2 text-xl">TERMS OF SERVICE</h3>
        <hr />
        <h4 className="text-xl my-4">Contents</h4>
        <ol className="flex pl-4 my-4 flex-col gap-2 list-decimal">
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Terms of Use for all Users</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Terms of Use for Fans</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Terms of Use for Creators</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Acceptable Use Policy</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Referral Program Terms</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Complaints Policy</Link></li>
            <li><Link className="text-blue-500 cursor-pointer" to={'/'}>Platform to Business Regulation Terms</Link></li>
        </ol>
        <h5 className="text-2xl">TERMS OF USE FOR ALL USERS</h5>
        <p className="my-2">
          Fenix International Limited and its subsidiaries (collectively,
          “OnlyFans,” “we,” “us,” “our”) respect your privacy and are committed
          to protecting the personal data we hold about you. If you have
          questions, comments, or concerns about this Privacy Notice or our
          processing of personal data, please see the bottom of this Privacy
          Notice for information about how to contact us. OnlyFans is the data
          controller of the personal data collected, and is responsible for the
          processing of your personal data.
        </p>
        <p className="my-2">
          OnlyFans is a social network which enables users to share their
          content; other users to enjoy content and for some to do both. We
          refer to those users who share content as “Creators” and those users
          who pay to view Creators’ content as “Fans”. This Privacy Notice
          explains our practices with respect to personal data we collect and
          process about you. This includes information we collect through, or in
          association with, our website located at www.OnlyFans.com, our
          services that we may offer from time to time via our website, our
          related social media sites (Twitter and Instagram), or otherwise
          through your interactions with us (the website, our social media
          pages, and services, collectively, the “Services”).
        </p>
        <p className="my-2 italic">
          Please review the following to understand how we process and safeguard
          personal data about you. By using any of our Services, whether by
          visiting our website or otherwise, and/or by voluntarily providing
          personal data to us, you acknowledge that you have read and understand
          the practices contained in this Privacy Notice. This Privacy Notice
          may be revised from time to time, so please ensure that you check this
          Privacy Notice periodically to remain fully informed.
        </p>
        <div className="px-12 py-2">
          <h3 className="underline">PERSONAL DATA WE COLLECT</h3>
          <ul className="flex flex-col gap-3 px-8 py-2">
            <li>Categories of Personal Data We Collect</li>
            <li>How We Use Your Personal Data</li>
            <li>How We Obtain Your Personal Data</li>
            <li>Legal Bases for Processing</li>
            <li>Who We Share Your Personal Data With</li>
            <li>Personal Data We Share</li>
          </ul>
        </div>
        <div className="px-12 py-2">
          <h3 className="underline">YOUR RIGHTS REGARDING PERSONAL DATA</h3>
          <ul className="flex flex-col gap-3 px-8 py-2">
            <li>
              Accessing, Modifying, Rectifying, and Correcting Collected
              Personal Data
            </li>
            <li>Your California Privacy Rights</li>
            <li>Your Nevada Rights</li>
            <li>Your European Union and UK Privacy Rights</li>
          </ul>
        </div>
        <div className="px-12 py-2">
          <h3 className="underline">YOUR CHOICES</h3>
          <ul className="flex flex-col gap-3 px-8 py-2">
            <li>Communications Opt-Out</li>
            <li>Location Information</li>
            <li>Cookies and Web Tracking</li>
          </ul>
        </div>
        <div className="px-12 py-2">
          <h3 className="underline">
            PROTECTING PERSONAL DATA RETENTION OF PERSONAL DATA OTHER IMPORTANT
            INFORMATION ABOUT PERSONAL DATA AND THE SERVICES
          </h3>
          <ul className="flex flex-col gap-3 px-8 py-2">
            <li>Identity Verification</li>
            <li>Payment Information</li>
            <li>Collection of Personal Data from Children</li>
            <li>Third-Party Websites and Services</li>
            <li>Business Transfer</li>
            <li>Do Not Track</li>
            <li>International Use</li>
          </ul>
        </div>
        <div className="px-12 py-2">
          <h3 className="underline">
            MODIFICATIONS AND UPDATES TO THIS PRIVACY NOTICE APPLICABILITY OF
            THIS PRIVACY NOTICE ADDITIONAL INFORMATION AND ASSISTANCE
          </h3>
        </div>
        <h5>2. PERSONAL DATA WE COLLECT</h5>
        <p className="my-2">
          We collect information that identifies, relates to, describes, is
          reasonably capable of being associated with, or could reasonably be
          linked, directly or indirectly, with a particular consumer or
          household (“personal data”). In addition, we may collect data that is
          not identifiable to you or otherwise associated with you, such as
          aggregated data, and is not personal data. To the extent this data is
          stored or associated with personal data, it will be treated as
          personal data; otherwise, the data is not subject to this Privacy
          Notice.
        </p>
        <div className="px-12 py-2">
          <h3 className="font-semibold">
            a. Categories of Personal Data We Collect
          </h3>
          <p>
            The types of personal data we collect about you depends on your
            interactions with us and your use of the Services. In the past
            twelve (12) months, we collected the below categories of personal
            data from our users:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-decimal">
            <li>
              Identifiers such as a real name, alias, postal address, internet
              protocol address, email address, account name, social security
              number, driver’s license number, passport number, or other similar
              identifiers.
            </li>
            <li>
              Personal information categories listed in the California Customer
              Records statute (Cal. Civ. Code 1798.80(e)).
            </li>
            <li>
              Characteristics of protected classifications under California or
              federal law.
            </li>
            <li>
              Commercial information, including records of personal property,
              products or services purchased, obtained, or considered, or other
              purchasing or consuming histories or tendencies.
            </li>
            <li>
              Biometric information. Note: While we do not collect biometric
              information, if you choose to authenticate yourself through
              certain service providers we use, they may collect biometric
              information subject to their privacy policies, but we are never
              provided with access to that information.
            </li>
            <li>
              Internet or other electronic network activity information,
              including, but not limited to, browsing history, search history,
              and information regarding a consumer’s interaction with an
              internet website, application, or advertisement.
            </li>
            <li>
              Audio, electronic, visual, thermal, olfactory, or similar
              information.
            </li>
            <li>Professional or employment-related information.</li>
          </ol>
          <p>
            We will not collect additional categories of personal data other
            than those categories listed above. If we intend to collect
            additional categories of personal data, we will provide you with a
            new notice at or before the time of collection.
          </p>
          <h3 className="font-semibold">b. How We Use Your Personal Data</h3>
          <p>
            We strive to ensure that the content can be enjoyed by everyone, and
            to keep the content appropriate, tasteful and lawful. To do that, we
            collect and process your personal data for the following business
            and commercial purposes:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-decimal">
            <li>
              Developing, improving, operating, providing, predicting, or
              performing, including maintaining or servicing accounts, enhancing
              the Services and your experience with them, providing customer
              service, processing or fulfilling transactions, verifying your
              identity, and processing payments.
            </li>
            <li>
              Communicating with you by email and text about the Services,
              verifying your identity, responding to support inquiries or,
              sharing information about the Services.
            </li>
            <li>
              Auditing related to a current interaction with the user and
              concurrent transactions.
            </li>
            <li>
              Detecting security incidents, protecting against malicious,
              deceptive, fraudulent, or illegal activity, and prosecuting those
              responsible for that activity.
            </li>
            <li>
              Debugging to identify and repair errors that impair existing
              intended functionality.
            </li>
            <li>
              Undertaking internal research for technological development and
              demonstration.
            </li>
            <li>
              Undertaking activities to verify or maintain the quality or safety
              of the Services owned, manufactured, manufactured for, or
              controlled by us, and to improve, upgrade, or enhance the Services
              owned, manufactured, manufactured for, or controlled by us.
            </li>
            <li>
              Complying with applicable laws, regulations, rules and requests of
              relevant law enforcement and/or other governmental agencies, or
              for other purposes, as permitted or required by law.
            </li>
            <li>Enforcing our Terms of Service and other usage policies.</li>
            <li>
              As necessary or appropriate to protect the rights, property, and
              safety of our users, us, and other third parties.
            </li>
          </ol>
          <p>
            We will not use the personal data we collected for materially
            different, unrelated, or incompatible purposes without providing you
            with notice and obtaining your consent.
          </p>
          <h3 className="font-semibold">c. How We Obtain Your Personal Data</h3>
          <p>
            We collect your personal data from the following categories of
            sources:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-disc">
            <li>
              Directly from you. When you provide it to us directly to open an
              account and use the Services, or when you update the information
              in your account (see the “Accessing, Modifying, Rectifying, and
              Correcting Collected Personal Data” section below for more
              information).
            </li>
            <li>
              Automatically or indirectly from you. For example, through and as
              a result of your use of and access to the Services. We also
              collect IP addresses and browser types from the devices you use.
            </li>
            <li>From our service providers.</li>
          </ol>
          <h3 className="font-semibold">d. Legal Bases for Processing</h3>
          <p>
            We process personal data for, or based on, one or more of the
            following legal bases:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-disc">
            <li>
              Performance of a Contract. By using the Services, you have
              contracted with us through the Terms of Service, and we will
              process certain personal data to perform under that contract.
            </li>
            <li>
              Legitimate Interests. We may process personal data for our
              legitimate interests, including complying with any applicable law,
              rule or regulation, investigation or remedy; enforcing our Terms
              of Service; protecting our, our users' or others' rights, property
              and safety; and detecting and resolving any fraud or security
              concerns.
            </li>
            <li>
              Compliance with Legal Obligations and Protection of Individuals.
              We may process personal data to comply with our legal obligations,
              including as required by valid legal process, governmental
              request, and to protect those individuals who use our Services and
              others.
            </li>
          </ol>
          <h3 className="font-semibold">
            e. Who We Share Your Personal Data With
          </h3>
          <p>
            We share personal data with the following categories of third
            parties:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-disc">
            <li>Our service providers.</li>
            <li>Our affiliated entities.</li>
            <li>
              Government agencies or regulators when permitted or required to do
              so by law; in response to a request from a law enforcement agency
              or authority or any regulatory authority; and/or to protect the
              integrity of the Services or our interests, rights, property, or
              safety, and/or that of our users and others.
            </li>
          </ol>
          <h3 className="font-semibold">f. Personal Data We Share</h3>
          <p>
            In the past twelve (12) months, we shared with the following
            categories of third parties the following categories of personal
            data for a business purpose:
          </p>
          <ol className="flex flex-col gap-3 px-8 py-2 list-disc">
            <li>
              Identifiers (e.g. name, address, email address, government ID, IP
              address): Service providers.
            </li>
            <li>Identifiers (e.g. account name): Other Creators and Fans.</li>
            <li>
              Personal information categories listed in the California Customer
              Records statute (e.g. government ID, bank account numbers):
              Service providers.
            </li>
            <li>
              Audio, electronic, visual, thermal, olfactory, or similar
              information (e.g. content you create): Service providers.
            </li>
          </ol>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Terms;
