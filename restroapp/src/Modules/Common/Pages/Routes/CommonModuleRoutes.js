export const SubmitOTPPage = "submitOtp";
export const ClosePopUpPage = "closePopUp";
export const OAuth2ConsentPage = "oAuth2Consent";
export const WorkInProgressPage = "wip";
export const InformationCapturePage = "informationForm";
export const LogoutPage = "logout";
export const Home = "/";
export const SearchPage = "search";
export const AccountPage = "account";
export const LoginPage = "login";
export const SignUpPage = "signup";
export const LandingPagePath = "home";

/**
 * Test routes - start
 */
export const ItemDetailsPath = "itemDetails";
export const CartPath = "cart";
export const AccountPath = "account";
/**
 * Test routes - end
 */

export const RouteTypes = {
  Login: "LoggedIn",
  Logout: "LoggedOut",
  Common: "Common",
};
const CommonModuleRoutes = [
  {
    type: RouteTypes.Login,
    title: "Item details page",
    path: ItemDetailsPath,
    showNavBar: true,
    showCartFooter: true,
  },
  {
    type: RouteTypes.Login,
    title: "Cart page",
    path: CartPath,
    showNavBar: true,
  },
  {
    type: RouteTypes.Login,
    title: "My Account",
    path: AccountPath,
    showNavBar: true,
  },
  {
    type: RouteTypes.Login,
    title: "LandingPage title",
    path: LandingPagePath,
    showNavBar: true,
    showCartFooter: true,
  },
  {
    type: RouteTypes.Login,
    title: "Landing",
    path: Home,
    showNavBar: true,
    showCartFooter: true,
  },
  {
    type: RouteTypes.Login,
    title: "Login",
    path: Home,
  },
  {
    type: RouteTypes.Login,
    title: "Home",
    path: Home,
  },
  {
    type: RouteTypes.Login,
    title: "Search",
    path: SearchPage,
  },
  {
    type: RouteTypes.Login,
    title: "My Account",
    path: AccountPage,
  },
  {
    type: RouteTypes.Login,
    title: "Submit OTP",
    path: SubmitOTPPage,
  },
  {
    type: RouteTypes.Logout,
    title: LoginPage,
    path: "login",
  },
  {
    type: RouteTypes.Login,
    title: "WorkInProgress",
    path: WorkInProgressPage,
  },
  {
    type: RouteTypes.Logout,
    title: "Close this",
    path: ClosePopUpPage,
  },
  {
    type: RouteTypes.Logout,
    title: "Consent",
    path: OAuth2ConsentPage,
  },
  {
    type: RouteTypes.Logout,
    title: "Submit Data",
    path: InformationCapturePage,
  },
  {
    type: RouteTypes.Login,
    title: "Logout",
    path: LogoutPage,
  },
  {
    type: RouteTypes.Login,
    title: "DefaultWIP",
    path: Home,
  },
  {
    type: RouteTypes.Logout,
    title: "SignUp",
    path: SignUpPage,
  },
];

export default CommonModuleRoutes;
