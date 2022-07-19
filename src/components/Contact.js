import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full sm:h-screen bg-[#001a1d] flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/a9784990-b1f6-4256-92cb-5de16de60f88" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl text-[#EAEAEA] font-poppins font-bold inline border-b-4 border-green-600">
            Contact
          </p>
          <p className="pt-4  text-[#FF2E63]">
            Submit the form below or you can Email me for collaboration
          </p>
        </div>

        <input
          className="p-2 bg-[#bbe2f6]"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#bbe2f6]"
          type="email"
          placeholder="Email"
          name="emal"
        />
        <textarea
          className=" p-2 bg-[#bbe2f6]"
          name="message"
          rows="10"
          placeholder="Feedback or Message"
        ></textarea>
        <button className="text-white border-2 hover:scale-105 hover:bg-[#011216] px-4 py-3 my-8 max-w-full flex justify-center items-center">Let's collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
