import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {lazy, Suspense} from "react";

// Pages
const HomePage = lazy(() => import('../pages/HomePage'));
const Bookmarks = lazy(() => import('../pages/Bookmarks'));
const Messages = lazy(() => import('../pages/Messages'));
const Notifications = lazy(() => import('../pages/Notifications'));
const Lists = lazy(() => import('../pages/Lists'));
const Subscriptions = lazy(() => import('../pages/Subscriptions'));
const MySubscribers = lazy(() => import('../pages/MySubscribers'));
const AddCard = lazy(() => import('../pages/AddCard'));
const Balance = lazy(() => import('../pages/Balance'));
const Profile = lazy(() => import('../pages/Profile'));
const PublisherPage = lazy(() => import('../pages/PublisherPage'));

// Auth Pages
const Login = lazy(() => import('../pages/auth/Login'));
const Register = lazy(() => import('../pages/auth/Register'));

//Sub Pages

// Fallbacks
const Loading = lazy(() => import('../pages/fallbacks/Loading'));
const NotFound = lazy(() => import('../pages/fallbacks/NotFound'));

// Lists
const Blocked = lazy(() => import("../pages/lists/Blocked"));
const BookmarksList = lazy(() => import("../pages/lists/BookmarksList"));
const CloseFriends = lazy(() => import("../pages/lists/CloseFriends"));
const Following = lazy(() => import("../pages/lists/Following"));
const Restricted = lazy(() => import("../pages/lists/Restricted"));
// Bookmarks
const Audio = lazy(() => import("../pages/bookmarks/Audio"));
const Locked = lazy(() => import("../pages/bookmarks/Locked"));
const Other = lazy(() => import("../pages/bookmarks/Other"));
const Photos = lazy(() => import("../pages/bookmarks/Photos"));
const Videos = lazy(() => import("../pages/bookmarks/Videos"));
// Settings
const EditProfile = lazy(() => import("../pages/settings/EditProfile"));
const Account = lazy(() => import("../pages/settings/Account"));
const Privacy = lazy(() => import("../pages/settings/Privacy"));
const NotificationsSettings = lazy(() => import("../pages/settings/Notifications"));
const Display = lazy(() => import("../pages/settings/Display"));
const Subscription = lazy(() => import("../pages/settings/Subscription"));
// Messages
const NewMessage = lazy(() => import("../pages/messages/NewMessage"));
// Privacies
const PrivacyPolicy = lazy(() => import("../pages/policies/Privacy"));
const Cookie = lazy(() => import("../pages/policies/Cookie"));
const Terms = lazy(() => import("../pages/policies/Terms"));


const pages = [
  // Pages
  { path: "/", element: <HomePage /> },
  { path: "/bookmarks", element: <Bookmarks /> },
  { path: "/messages", element: <Messages /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/lists", element: <Lists /> },
  { path: "/subscriptions", element: <Subscriptions /> },
  { path: "/my-subscribers", element: <MySubscribers /> },
  { path: "/addcard", element: <AddCard /> },
  { path: "/balance", element: <Balance /> },
  { path: "/myprofile", element: <Profile /> },
  { path: "/publisher-page", element: <PublisherPage /> },

  // Auth Pages
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  // Fallback
  { path: "*", element: <NotFound /> },

  // Lists
  { path: "/following", element: <Following /> },
  { path: "/blocked", element: <Blocked /> },
  { path: "/bookmarks-list", element: <BookmarksList /> },
  { path: "/close-friends", element: <CloseFriends /> },
  { path: "/restricted", element: <Restricted /> },

  // Bookmarks
  { path: "/audio", element: <Audio /> },
  { path: "/photos", element: <Photos /> },
  { path: "/videos", element: <Videos /> },
  { path: "/other", element: <Other /> },
  { path: "/locked", element: <Locked /> },

  // Settings
  { path: "/edit-profile", element: <EditProfile /> },
  { path: "/account", element: <Account /> },
  { path: "/privacy", element: <Privacy /> },
  { path: "/notifications-settings", element: <NotificationsSettings /> },
  { path: "/display", element: <Display /> },
  { path: "/subscription-settings", element: <Subscription /> },

  // Messages
  { path: "/new-message", element: <NewMessage /> },

  // Privacies
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/cookie", element: <Cookie /> },
  { path: "/terms", element: <Terms /> },
]

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {
          pages.map((page, index) => {
            return <Route
              key={index}
              path={page.path}
              element={
                <Suspense fallback={<Loading />}>
                  {page.element}
                </Suspense>
              }
            />
          })
        }
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter