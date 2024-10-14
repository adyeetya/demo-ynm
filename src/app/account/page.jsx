"use client";

import { useState, useEffect } from "react";
import { useUser } from "../../context/userContext";
import { useRouter } from "next/navigation";
import { AccountInfo, EditModal } from "./AccountInfo";
import { OrdersInfo } from "./OrdersInfo"; // Add OrderInfo component
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const AccountPage = () => {
  const { user, loading, updateUser, logout } = useUser();
  const [isEditing, setIsEditing] = useState(null);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("account"); // Add state to manage active section
  const router = useRouter();
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    address: "",
    landmark: "",
    pincode: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login"); // Only redirect if the user is not present AND not loading
    }
  }, [user, loading, router]);

  useEffect(() => {
    setFormData({
      _id: user?._id || "",
      name: user?.name || "",
      email: user?.email || "",
      address: user?.address || "",
      landmark: user?.landmark || "",
      pincode: user?.pincode || "",
      city: user?.city || "",
      state: user?.state || "",
    });
  }, [user, loading]);

  const handleEdit = (field) => {
    setIsEditing(field);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFieldSave = () => {
    updateUser({ ...user, ...formData });
    setIsEditing(null);
    setMessage("Click on Save All Changes to save your changes");
  };

  const handleSave = async () => {
    try {
      // Retrieve the token from local storage
      const token = Cookies.get("ynmtoken");
      console.log("formData: ", formData);
      // Make a PUT request to update user information
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/update/${user._id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );

      if (response.status !== 200) {
        toast.error("Failed to update user information");
        throw new Error("Failed to update user information");
      }

      const { data } = response;
      updateUser(data.user); // Update the user data in context
      toast.success("User information updated successfully");
    } catch (error) {
      console.error("Error updating user information:", error.message);
      toast.error("Error updating user information");
    }
  };

  const handleLogout = async () => {
    try {
      logout();
      toast.success("Goodbye :(");

      // Redirect to the homepage
      router.push("/");
    } catch (error) {
      console.error("Error logging out", error);
      toast.error("Logout failed");
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case "account":
        return (
          <>
            <AccountInfo
              user={user}
              handleEdit={handleEdit}
              handleSave={handleSave}
              message={message}
            />
            {isEditing && (
              <EditModal
                isEditing={isEditing}
                formData={formData}
                handleChange={handleChange}
                handleFieldSave={handleFieldSave}
                setIsEditing={setIsEditing}
              />
            )}
          </>
        );
      case "orders":
        return <OrdersInfo userId={user?._id} />;
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4 min-h-screen flex justify-center items-center text-2xl">
        Loading...
      </div>
    ); // Add a loading screen while fetching user data
  }

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen bg-gray-100 ${poppins.className}`}
    >
      <nav className="mb-4 md:mb-8">
        <ul className="flex space-x-2 text-sm md:text-base">
          <li>
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-400">/</span>
          </li>

          <li>
            <span className="text-gray-600">Account</span>
          </li>
        </ul>
      </nav>
      <div className="flex flex-row gap-4">
        {/* Sidebar with buttons */}
        <div className="bg-gray-100 w-80 min-h-screen p-4">
          <button
            className={`flex flex-row justify-start gap-4 items-center rounded w-full text-left py-2 px-4 mb-2 ${
              activeSection === "account"
                ? "border border-blue-500 text-blue-500 bg-white"
                : ""
            }`}
            onClick={() => setActiveSection("account")}
          >
            <FaRegUser />
            Account Information
          </button>
          <button
            className={`flex flex-row justify-start gap-4 items-center rounded w-full text-left py-2 px-4 mb-2 ${
              activeSection === "orders"
                ? "border border-blue-500 text-blue-500 bg-white"
                : ""
            }`}
            onClick={() => setActiveSection("orders")}
          >
            <GoPackage />
            Order Information
          </button>
          <Link href="/contactus" passHref>
            <button className="flex flex-row justify-start gap-4 items-center rounded w-full text-left py-2 px-4 mb-2">
              <FiMessageSquare /> Contact Us
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="flex flex-row justify-start gap-4 items-center rounded w-full border border-gray-100 text-left py-2 px-4 hover:text-red-500 hover:border hover:border-red-500  focus:outline-none"
          >
            <MdLogout />
            Logout
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1">{renderContent()}</div>
      </div>
    </div>
  );
};

export default AccountPage;
