import { useNavigate } from "react-router";
import Navbar from "../components/Navbar.tsx";
import { motion } from "motion/react";

const onboardingScreenVariants = {
  initial: { opacity: 0, x: "100%" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.4,
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    x: "-100%",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const OnboardingScreen = () => {
  const navigate = useNavigate();
  // const [showDropdown, setShowDropdown] = useState(false);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       navigate("/projects");
  //       // const uid = user.uid;
  //     } else {
  //       // User is signed out
  //     }
  //   });
  // }, [navigate]); // Add navigate to dependency array
  // useEffect(() => {
  //   async function getRedirectResults() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);
  //   }
  //   getRedirectResults();
  // }, []);

  // const handleGoogleSignIn = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       // const credential = GoogleAuthProvider.credentialFromResult(result);
  //       // const token = credential?.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       setUserDets(user);
  //       // Replace prompt with better UI feedback
  //       alert("Login successful");
  //       navigate("/projects");
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       // Handle Errors here.
  //       // const errorCode = error.code;
  //       // const errorMessage = error.message;
  //       // The email of the user's account used.
  //       // const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       // const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  // };

  // const handleGoogleSignIn2 = () => {
  //   signInWithRedirect(auth, provider);
  //   // Wait for the redirect result after the sign-in
  // };
  // console.log(userDets);
  // const handleSignOut = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   signOut(auth)
  //     .then(() => {
  //       navigate("/");
  //       alert("Successfully signed out");
  //     })
  //     .catch((error) => {
  //       alert(`Sign out failed: ${error.message}`);
  //     });
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 120) {
  //       setIsScrolled(true);
  //       //   setShowDropdown(false);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <motion.div
      variants={onboardingScreenVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-screen signInPattern bg-gray-50 px-4 py-2 justify-center flex items-center "
    >
      <Navbar />
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-gray-900 text-3xl font-semibold text-center ">
          Continue into your dashboard
        </h1>
        <div className="flex gap-5 flex-col items-center">
          <button
            onClick={() => navigate("/projects")}
            className="flex justify-center bg-gray-900 text-white rounded-md items-center gap-4 hover:scale-105 transition-all duration-300 w-[270px] text-lg font-medium py-2 px-2 "
          >
            <span className="flat-color-icons--google"></span>{" "}
            <p>With Google</p>
          </button>
          <button
            onClick={() => navigate("/projects")}
            className="flex justify-center bg-[#1668e2] text-white rounded-md items-center gap-4 hover:scale-105 transition-all duration-300 w-[270px] text-lg font-medium py-2 px-2 relative "
          >
            <span className="pajamas--github"></span>
            <p>With Github</p>
          </button>
        </div>
        {/* <div className="flex gap-7 w-full items-center justify-center">
          <span className="bg-gray-800 h-0.5 w-full max-w-[500px]"></span>{" "}
          <p className="text-gray-900">or</p>{" "}
          <span className="bg-gray-800 h-0.5 w-full max-w-[500px]"></span>
        </div> */}
      </div>
    </motion.div>
  );
};

export default OnboardingScreen;
