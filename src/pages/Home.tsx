import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import ContactCard from "../components/ContactCard";
import { Contact } from "../../types";
import { RootState } from "../store";

const Home = () => {
  const contacts = useSelector((state: RootState) => state.contact.Contacts);
  return (
    <div className="border-box mt-20 flex w-full flex-1 flex-col items-center gap-20 py-4">
      <p className=" text-black-800 inline-flex items-center text-2xl font-bold capitalize">
        CONTACT MANAGEMENT APPLICATION
      </p>
      {/* Create contact button */}
      <Link to="/add-contact">
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-green-600 px-3 py-2 text-sm font-bold text-white hover:bg-green-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="mr-2 h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
          Create Contact
        </button>
      </Link>

      {/* if there are contacts loop through them to display Contact card */}
      {contacts.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-5 p-4 md:grid-cols-2 xl:grid-cols-3">
          {contacts.map((contact: Contact) => (
            <ContactCard key={contact.id} contactDetails={contact} />
          ))}
        </div>
      ) : (
        // No contact message
        <div className="py-10">
          <div className="text-center">
            <h1 className=" text-xl font-bold tracking-tight text-black ">
              Contact List is Empty!
            </h1>
            <p className="text-semibold mt-4 leading-7 text-gray-600">
              Please add contact from Create Contact Button
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
