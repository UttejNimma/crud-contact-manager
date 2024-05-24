import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addContact } from "../features/contactSlice";

import { Contact } from "../../types";

const AddContactForm = () => {
  const uniqueId = uuidv4();
  const dispatch = useDispatch();

  const [contactData, setContactData] = useState<Contact>({
    firstname: "",
    lastname: "",
    mobilenumber: "",
    status: "active",
    id: uniqueId,
  });
  const [isContactValid, setIsContactValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // check if all the input fields have been filled or not
    const validContactData = Object.values({
      ...contactData,
      [name]: value,
    }).some((value) => value.trim() === "");

    setIsContactValid(!validContactData);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (isContactValid) {
      dispatch(addContact(contactData));

      // update the form input value
      const newUUID = uuidv4();
      setContactData({
        firstname: "",
        lastname: "",
        mobilenumber: "",
        status: "inactive",
        id: newUUID,
      });

      window.alert("Contact added successfully!");
    }
  };

  return (
    <div className="w-full">
      <form className="mx-auto w-full max-w-xl rounded-lg bg-white p-6">
        <div className="mb-4">
          <label className="mb-2 block font-bold" htmlFor="firstName">
            Enter First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full rounded-md border p-2"
            name="firstname"
            value={contactData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold" htmlFor="lastName">
            Enter Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            className="w-full rounded-md border p-2"
            value={contactData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold" htmlFor="mobilenumber">
            Enter Mobile Number
          </label>
          <input
            type="number"
            id="mobilenumber"
            name="mobilenumber"
            className="w-full rounded-md border p-2"
            value={contactData.mobilenumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block font-bold">Status</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="active"
                name="status"
                checked={contactData.status === "active"}
                onChange={handleChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                value="inactive"
                name="status"
                checked={contactData.status === "inactive"}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        <button
          type="button"
          className={`rounded-md bg-green-600 px-6 py-2 text-sm font-bold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
            !isContactValid ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handleForm}
        >
          Create Contact
        </button>
      </form>
    </div>
  );
};

export default AddContactForm;
