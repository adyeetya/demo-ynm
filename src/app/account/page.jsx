"use client";

import { useState, useEffect } from "react";
import { useUser } from "../../context/userContext";
import { useRouter } from "next/navigation";
import { AccountInfo, EditModal } from "./AccountInfo";
import { OrdersInfo } from "./OrdersInfo"; // Add OrdersInfo component
import Cookies from "js-cookie";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { FaRegUser } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FiMessageSquare } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { HiChevronDown } from "react-icons/hi";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

const AccountPage = () => {
  const { user, loading, updateUser, logout } = useUser();
  const [isEditing, setIsEditing] = useState(null);
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("account"); // Show account info by default
  const [dropdownOpen, setDropdownOpen] = useState(false); // Toggle dropdown state
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
      router.push("/login");
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
    toast("Click on Save All Changes to save your changes.", {
      icon: "🖱️",
    });
  };

  const handleSave = async () => {
    try {
      const token = Cookies.get("ynmtoken");
      console.log("formData: ", formData);

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
      router.push("/");
    } catch (error) {
      console.error("Error logging out", error);
      toast.error("Logout failed");
    }
  };

  const handleStateChange = (selectedState) => {
    setFormData({
      ...formData,
      state: selectedState,
    });
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
                handleStateChange={handleStateChange}
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
    );
  }

  return (
    <div
      className={`p-4 md:py-8 max-w-screen-xl mx-auto min-h-screen bg-[#e6eddf] ${poppins.className}`}
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

      {/* Display Account Information by default */}
      <div className="md:hidden mb-4">
        {renderContent()} {/* Render default account information */}
      </div>

      <div className="md:hidden mb-4">
        {/* Mobile dropdown menu */}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center justify-between w-full p-4 bg-white rounded"
        >
          <span>More Options</span>
          <HiChevronDown
            className={`transform transition-transform ${
              dropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {dropdownOpen && (
          <div className=" flex flex-col bg-white rounded shadow-md">
            <button
              className={`flex flex-row justify-start gap-4 items-center rounded w-full text-left py-2 px-4 mb-2 ${
                activeSection === "account" ? " text-[#1c1c0c] bg-white" : ""
              }`}
              onClick={() => setActiveSection("account")}
            >
              <FaRegUser />
              Account Information
            </button>
            <button
              className={`flex items-center py-2 px-4 w-full text-left ${
                activeSection === "orders" ? "text-[#1c1c0c]" : ""
              }`}
              onClick={() => {
                setActiveSection("orders");
                setDropdownOpen(false);
              }}
            >
              <GoPackage className="mr-2" />
              Order Information
            </button>
            <Link href="/contactus" passHref>
              <button className="flex items-center py-2 px-4 w-full text-left">
                <FiMessageSquare className="mr-2" />
                Contact Us
              </button>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center py-2 px-4 w-full text-left text-red-500"
            >
              <MdLogout className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="hidden md:flex md:flex-row gap-4">
        {/* Desktop sidebar */}
        <div className="bg-[#e6eddf] md:w-80 w-full md:min-h-screen p-4">
          <button
            className={`flex flex-row justify-start gap-4 items-center rounded w-full text-left py-2 px-4 mb-2 ${
              activeSection === "account"
                ? "border border-[#1c1c0c] text-[#1c1c0c] bg-white"
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
                ? "border border-[#1c1c0c] text-[#1c1c0c] bg-white"
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
            className="flex flex-row justify-start gap-4 items-center rounded w-full border border-[#e6eddf] text-left py-2 px-4 hover:text-red-500 hover:border hover:border-red-500  focus:outline-none"
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
