import { useState, useEffect } from "react";
import app from "../firebaseconfig.ts";
import {
  getAuth,
  GoogleAuthProvider,
  User,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar.tsx";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const OnboardingScreen = () => {
  // const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const [userDets, setUserDets] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
        // const uid = user.uid;
      } else {
        // User is signed out
      }
    });
  }, [navigate]); // Add navigate to dependency array

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;

        setUserDets(user);
        // Replace prompt with better UI feedback
        alert("Login successful");
        navigate("/dashboard");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error.message);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  console.log(userDets);
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
    <div className="w-full h-screen signInPattern bg-gray-50 px-4 py-2 justify-center flex items-center ">
      <Navbar />
      <div className="flex flex-col gap-20 items-center justify-center">
        <h1 className="text-gray-900 text-3xl font-semibold ">
          Continue into your dashboard
        </h1>
        <div className="flex flex-col gap-7 items-center">
          <button
            onClick={handleGoogleSignIn}
            className="flex justify-center bg-gray-900 text-white rounded-md items-center gap-4 hover:scale-105 transition-all duration-300 w-[270px] text-lg font-medium py-2 px-2 "
          >
            <span className="flat-color-icons--google"></span>{" "}
            <p>With Google</p>
          </button>
          <button
            disabled
            className="flex justify-center bg-[#1668e2] opacity-40 text-white rounded-md items-center gap-4 w-[270px] text-lg font-medium py-2 px-2 hover:cursor-not-allowed relative "
          >
            <span className="pajamas--github"></span>
            <p>With Github</p>
            <p className="text-red-600 text-sm absolute -bottom-6 left-0 ">
              *Currently not available
            </p>
          </button>
        </div>
        <div className="flex gap-7 w-full items-center justify-center">
          <span className="bg-gray-800 h-0.5 w-full max-w-[500px]"></span>{" "}
          <p className="text-gray-900">or</p>{" "}
          <span className="bg-gray-800 h-0.5 w-full max-w-[500px]"></span>
        </div>

        <form action=""></form>
      </div>
    </div>
  );
};

export default OnboardingScreen;
