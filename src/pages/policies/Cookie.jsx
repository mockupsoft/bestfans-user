import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../layout/Footer";

const Cookie = () => {
  return (
    <div className="w-screen bg-gray-100">
      <div className="header w-full h-16 bg-blue-500 flex items-center px-5">
        <Link to={"/"} className="text-white font-semibold text-2xl">
          BestFans
        </Link>
      </div>
      <div className="w-7/12 mx-auto py-4">
        <h3 className="font-semibold my-2">COOKIE NOTICE</h3>
        <hr />
        <p className="my-2">
          Fenix International Limited and Fenix Internet LLC (collectively,
          “OnlyFans,” “we,” “us,” “our”) respect your privacy and are committed
          to protecting the personal data we hold about you. By using our
          website located at www.OnlyFans.com (the “Services”) with your browser
          set to accept cookies, you consent to our use of cookies and other
          technologies to provide the Services to you as described in this
          notice and in our Privacy Notice. For more information about what
          cookies and pixel tags are, what they do, and how you can opt out of,
          manage, or delete them, please review this Cookie Notice.
        </p>
        <div className="py-2">
          <h3 className="underline font-semibold">WHAT ARE COOKIES?</h3>
          <p>
            “Cookies” are small strings of text or computer code stored locally
            on your device that allow us, ad networks, and our third-party
            service providers, to identify your browser and/or device as you
            browse the Internet. Cookies can be placed, read, and/or written to
            by our Services, or other websites or services that recognize a
            particular cookie, which allows the website to “remember” or
            “recognize” a particular browser or device and, in some cases, store
            information about that browser or device. Certain types of cookies
            or cookie-like functionality may be placed or activated through
            browser add-ons, including, but not limited to, Adobe Flash. While
            these cookies are stored differently, their functionality and
            purpose is generally similar to other cookies. For more information
            about cookies, please see www.allaboutcookies.org.
          </p>
        </div>
        <div className="py-2">
          <h3 className="underline font-semibold">
            HOW LONG ARE COOKIES STORED ON MY SYSTEM?
          </h3>
          <p>
            Session Cookies. “Session cookies” are stored for the duration of a
            browser session; when you close the browser, the cookie is deleted.
            Persistent Cookies. “Persistent cookies” are stored for a preset
            amount of time (often between 90 days and two years, depending on
            the application) and are typically not deleted when a browser
            session is closed. Your choices may affect whether we use session or
            persistent cookies for a particular application. For example, if you
            select “Remember Me,” your two-step verification status is stored on
            a persistent cookie for 30 days to remember the device that you
            signed in from.*
          </p>
        </div>
        <div className="py-2">
          <h3 className="underline font-semibold">
            WHAT COOKIES DO WE USE, AND WHY?
          </h3>
          <p>
            Necessary Cookies. Some cookies are necessary to allow you to browse
            the Services and access certain pages. Necessary cookies are
            required for the Services (or certain functionality on the Services)
            to work properly, and we do not use these cookies to collect
            personal data about you.
          </p>
          <div className="w-2/3 mx-auto justify-center flex gap-12">
            <div className="flex flex-col gap-2 font-semibold">
              <p>Cookie Name</p>
              <p>auth_id</p>
              <p>auth_uid_43</p>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p>More Information</p>
              <p>authenticate user ID</p>
              <p>hash to remember two-factor authentication</p>
            </div>
          </div>
          <p className="my-3">
            Disabling or removing these cookies may prevent the Services, or
            certain functionality on the Services, from working correctly or at
            all. Performance Cookies. We use performance cookies to collect
            information about how our users use and interact with the Services,
            such as what pages are visited most often, how the Services are used
            and function, or how users navigate the Services. We use this
            information to improve the Services and their content. These cookies
            only collect aggregate information about the use of the Services,
            and thus do not collect information that can be used to identify you
            personally. Examples include:
          </p>
          <div className="w-2/3 mx-auto justify-center flex gap-12">
            <div className="flex flex-col gap-2 font-semibold">
              <p>Cookie Name</p>
              <p>sess</p>
              <p>csrf</p>
              <p>fp</p>
            </div>
            <div className="flex flex-col gap-2 font-semibold">
              <p> More Information</p>
              <p>
                session cookie; contains a unique identifier for your device
              </p>
              <p>csrf token</p>
              <p>browser fingerprint</p>
            </div>
          </div>
          <p className="my-3">
            Disabling or removing these cookies generally does not interfere
            with the functionality or performance of the Services. Functionality
            Cookies. We use functionality cookies to remember information that
            you have provided or choices you have made on the Services, such as
            saving your logged-in status or site preferences. This allows us to
            provide a more personalized and convenient browsing experience.
            Disabling or removing these cookies may make browsing the Services
            less convenient or may prevent certain functionality from working
            correctly. Third-Party Functionality. We do not have access to or
            control over cookies or other features that third party sites may
            use, and the information practices of those third party websites are
            not covered by our Privacy Notice or this Cookie Notice. For more
            information about how Stripe and Securion collect and use
            information about your activities, please review their applicable
            terms of service and privacy policies.
          </p>
        </div>
        <h3 className="underline font-semibold">
          WHAT COOKIES DO WE USE, AND WHY?
        </h3>
        <p>
          Managing Cookies. Most browsers automatically accept cookies by
          default, but you can adjust your device and/or browser settings to
          delete and/or block some or all cookies, or provide notifications when
          you receive a new cookie. Consult the “Help,” “Tools,” or
          “Preferences” menus on your browser, or the documentation for your
          device, for more information about how to do this. Please note,
          however, that blocking or deleting certain cookies may negatively
          affect your user experience. Additionally, you can generally disable
          or delete cookies placed and used by browser add-ons, such as Adobe
          Flash cookies, by changing the add-on settings or visiting the website
          of its provider. Information and controls that allow you to manage
          Adobe Flash cookies may be found on this page:
          https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html
          Note that if you disable Adobe Flash cookies or similar technologies,
          you may not have access to certain features and services (such as
          consistent volume settings for videos) that make your online
          experience more efficient and/or enjoyable.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Cookie;
