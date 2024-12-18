"use client";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Poppins } from "next/font/google";
import { toast } from "react-hot-toast";
// import CustomDropdown from "./StateDropdown";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser } from "../../context/userContext";
import isValidCityState from "../../data/cityState";
import Location from "./Location";
import axios from "axios";
import Image from "next/image";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
const isProduction = process.env.NEXT_PUBLIC_NODE_ENV !== "development";
// console.log('isProduction', isProduction)
const Page = () => {
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [referrer, setReferrer] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const { login } = useUser();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReferrer(params.get("referrer"));
  }, []);

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const step1ValidationSchema = Yup.object({
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
  });

  const step2ValidationSchema = Yup.object({
    otp: Yup.string()
      .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits")
      .required("OTP is required"),
  });

  const step3ValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string().required("Address is required"),
    landmark: Yup.string(),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Pincode must be exactly 6 digits")
      .required("Pincode is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
  });
  const handleStep1Submit = async (values) => {
    // console.log('Form submitted step1:', values)

    await handleSendOtp(values.phoneNumber);
    setPhoneNumber(values.phoneNumber);
  };

  // const handleStep2Submit = async (values) => {
  //   // console.log('Form submitted step2:', values)
  //   await handleVerifyOtp(values.otp);
  // };

  const handleStep3Submit = async (values) => {
    const { city, state } = values;

    if (!isValidCityState(city, state)) {
      toast.error("The city does not match the selected state.");
      return; // Prevent form submission
    }

    await handleRegister(values);
  };

  const formikStep1 = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    validationSchema: step1ValidationSchema,
    onSubmit: handleStep1Submit,
  });

  const formikStep3 = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      landmark: "",
      pincode: "",
      city: "",
      state: "",
    },
    validationSchema: step3ValidationSchema,
    onSubmit: handleStep3Submit,
  });

  const handleSendOtp = async (phoneNumber) => {
    console.log("Sending OTP to:", phoneNumber);
    const res = await fetch(`${serverUrl}/api/users/sendOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage(`OTP sent successfully on ${phoneNumber}`);
      toast.success("OTP sent successfully");
      setStep(2);
    } else {
      setMessage(data.message);
      toast.error(data.message);
    }
  };

  const handleResendOtp = async (phoneNumber) => {
    setMessage(""); // Clear the previous message
    const res = await fetch(`${serverUrl}/api/users/sendOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phoneNumber }),
    });

    const data = await res.json();

    if (res.status === 200) {
      setMessage(`OTP resent successfully on ${phoneNumber}`);
      toast.success("OTP resent successfully");
    } else {
      setMessage(data.message);
      toast.error(data.message);
    }
  };

  const fetchUserData = async () => {
    const token = Cookies.get("ynmtoken"); // Get the token from local storage
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await axios.get(`${serverUrl}/api/users/getUser`, {
        headers: { Authorization: `Bearer ${token}` }, // Send token in Authorization header
      });
      if (response.status !== 200) {
        throw new Error("Failed to fetch user data");
      }

      login(response.data.user, token);
      toast.success(`Welcome, ${response.data.user.name}`);
      setMessage(`Welcome, ${response.data.user.name}`);
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  const handleVerifyOtp = async (otp) => {
    try {
      const res = await fetch(`${serverUrl}/api/users/verifyOTP`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, otp }),
      });

      const data = await res.json();

      if (res.status === 200) {
        toast.success("OTP verified successfully");
        setMessage(data.message);
        if (data.userExists) {
          const token = data.token ?? null;
          // localStorage.setItem('ynmtoken', token)
          // Set token in cookies
          Cookies.set("ynmtoken", token, {
            expires: 30, // Token will expire in 30 days
            secure: isProduction, // Use secure cookies in production
            sameSite: isProduction ? "None" : "Lax", // Cross-site cookie settings
            domain: isProduction ? ".yesnmore.com" : undefined, // Set domain for production
          });

          await fetchUserData();

          if (referrer === "cart") {
            router.push("/checkout");
          } else if (referrer === "self-assessment") {
            router.push("/self-assessment/result");
          } else {
            router.push("/");
          }
        } else {
          setStep(3);
        }
      } else {
        toast.error(data.message);
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  const handleRegister = async (userData) => {
    try {
      const res = await fetch(`${serverUrl}/api/users/registerUser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber, ...userData }),
      });

      const data = await res.json();

      if (res.status === 200) {
        const token = data.token ?? null;
        // localStorage.setItem('ynmtoken', token)

        // Set token in cookies
        Cookies.set("ynmtoken", token, {
          expires: 30, // Token will expire in 30 days
          secure: isProduction, // Use secure cookies in production
          sameSite: isProduction ? "None" : "Lax", // Cross-site cookie settings
          domain: isProduction ? ".yesnmore.com" : undefined, // Set domain for production
        });

        await fetchUserData();

        if (referrer === "cart") {
          router.push("/checkout");
        } else if (referrer === "self-assessment") {
          router.push("/self-assessment/result");
        } else {
          router.push("/");
        }
      } else {
        toast.error(data.message);
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error registering user", error);
    }
  };

  return (
    <div
      className={`max-w-screen-lg mx-auto min-h-[calc(100vh-64px)] flex items-center justify-center ${poppins.className}`}
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="w-full md:w-1/2 mt-24 md:mt-0 h-64 md:h-96 flex items-center justify-center rounded-lg">
          <Image
            src="/images/hero/maxt6.png"
            alt="Banner"
            width={1000}
            height={1000}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full p-4 text-left">
          {step === 1 && <Step1Form formik={formikStep1} />}

          {step === 2 && (
            <Step2Form
              setStep={setStep}
              onResendOtp={() => handleResendOtp(phoneNumber)}
              otp={otp}
              setOtp={setOtp}
              handleVerifyOtp={handleVerifyOtp}
              phoneNumber={phoneNumber}
            />
          )}

          {step === 3 && <Step3Form formik={formikStep3} states={states} />}
        </div>
      </div>
    </div>
  );
};

const Step1Form = ({ formik }) => (
  <form onSubmit={formik.handleSubmit}>
    <h2 className="text-xl font-semibold">Enter your phone number</h2>
    <p className="mt-2 text-gray-600">You will receive your OTP via SMS</p>

    <div className="my-4">
      <label htmlFor="phone-number" className="block text-left text-gray-700">
        Phone number
      </label>
      <div className="border border-gray-300 rounded-lg p-2 w-full flex flex-row gap-2">
        <p className="whitespace-nowrap">+91</p>
        <input
          type="tel"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border-none focus:outline-none w-full text-base"
        />
      </div>

      {formik.touched.phoneNumber && formik.errors.phoneNumber && (
        <div className="text-red-500">{formik.errors.phoneNumber}</div>
      )}
    </div>

    <button
      type="submit"
      className="rounded-full px-3 py-2 border border-[#3a472e] text-[#3a472e] hover:text-white hover:bg-[#3a472e] hover:border-[#3a472e]"
    >
      Send OTP
    </button>
  </form>
);

const Step2Form = ({
  onResendOtp,
  phoneNumber,
  setStep,
  otp,
  setOtp,
  handleVerifyOtp,
}) => {
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Allow only numeric values
    setOtp(value); // Update the OTP state
    setError(""); // Clear any existing error
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length < 6) {
      setError("Please enter the full 6-digit OTP.");
    } else {
      console.log("OTP Submitted:", typeof otp, otp);
      handleVerifyOtp(otp);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold">Verify OTP</h2>
      <div className="flex items-center mt-2">
        <p className="text-gray-600">{phoneNumber}</p>
        <p
          onClick={() => setStep(1)}
          className="ml-2 text-blue-500 hover:underline cursor-pointer"
        >
          Edit
        </p>
      </div>
      <div className="my-4">
        <label htmlFor="otp" className="block text-left text-gray-700">
          Enter OTP
        </label>
        <input
          id="otp"
          type="text"
          name="otp"
          value={otp}
          onChange={handleChange}
          maxLength={6} // Limit input to 6 digits
          className="border border-gray-300 rounded-lg p-2 w-full text-center"
        />
        {error && <div className="text-red-500">{error}</div>}
      </div>

      <button
        type="submit"
        className="rounded-full px-3 py-2 border border-[#3a472e] text-[#3a472e] hover:text-white hover:bg-[#3a472e] hover:border-[#3a472e]"
      >
        Verify OTP
      </button>

      <button
        type="button"
        onClick={onResendOtp}
        className="text-blue-500 mt-2 block"
      >
        Resend OTP
      </button>
    </form>
  );
};

const Step3Form = ({ formik, states }) => {
  const [filteredStates, setFilteredStates] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleStateInputChange = (e) => {
    const userInput = e.target.value;
    formik.setFieldValue("state", userInput);

    if (userInput.trim() === "") {
      setFilteredStates([]);
      setShowSuggestions(false);
      return;
    }

    const suggestions = states.filter((state) =>
      state.toLowerCase().startsWith(userInput.toLowerCase())
    );
    setFilteredStates(suggestions);
    setShowSuggestions(true);
  };

  const handleStateSelect = (state) => {
    formik.setFieldValue("state", state);
    setFilteredStates([]);
    setShowSuggestions(false);
  };

  const handleAddressFetch = (locationDetails) => {
    // Autofill the form fields with the fetched location details
    console.log(locationDetails);
    formik.setFieldValue("address", locationDetails.address);
    formik.setFieldValue("city", locationDetails.city);
    formik.setFieldValue("state", locationDetails.state);
    formik.setFieldValue("pincode", locationDetails.postalCode);
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <h2 className="text-xl font-semibold">Complete your registration</h2>

      <div className="my-2">
        <label htmlFor="name" className="block text-left text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500">{formik.errors.name}</div>
        )}
      </div>

      <div className="my-2">
        <label htmlFor="email" className="block text-left text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
      </div>

      <div className="my-2">
        <label htmlFor="address" className="block text-left text-gray-700">
          Address Line 1
        </label>
        <textarea
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full h-24"
        />
        {formik.touched.address && formik.errors.address && (
          <div className="text-red-500">{formik.errors.address}</div>
        )}
      </div>

      <div className="my-2">
        <label htmlFor="landmark" className="block text-left text-gray-700">
          Landmark
        </label>
        <input
          type="text"
          name="landmark"
          value={formik.values.landmark}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.landmark && formik.errors.landmark && (
          <div className="text-red-500">{formik.errors.landmark}</div>
        )}
      </div>

      <div className="my-2">
        <label htmlFor="pincode" className="block text-left text-gray-700">
          Pincode
        </label>
        <input
          type="text"
          name="pincode"
          value={formik.values.pincode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.pincode && formik.errors.pincode && (
          <div className="text-red-500">{formik.errors.pincode}</div>
        )}
      </div>

      <div className="my-2">
        <label htmlFor="city" className="block text-left text-gray-700">
          City
        </label>
        <input
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.city && formik.errors.city && (
          <div className="text-red-500">{formik.errors.city}</div>
        )}
      </div>

      <div className="my-2 relative">
        <label htmlFor="state" className="block text-left text-gray-700">
          State
        </label>
        <input
          type="text"
          name="state"
          value={formik.values.state}
          onChange={handleStateInputChange}
          onBlur={formik.handleBlur}
          autoComplete="off"
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        {formik.touched.state && formik.errors.state && (
          <div className="text-red-500">{formik.errors.state}</div>
        )}
        {showSuggestions && filteredStates.length > 0 && (
          <ul className="absolute z-10 bg-white border border-gray-300 rounded-lg w-full max-h-40 overflow-y-auto">
            {filteredStates.map((state) => (
              <li
                key={state}
                onClick={() => handleStateSelect(state)}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                {state}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="my-4">
        <Location onAddressFetch={handleAddressFetch} />
      </div>

      <button
        type="submit"
        className="rounded-full px-3 py-2 border border-[#3a472e] text-[#3a472e] hover:text-white hover:bg-[#3a472e] hover:border-[#3a472e]"
      >
        Login
      </button>
    </form>
  );
};

export default Page;
