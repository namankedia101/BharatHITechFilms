import React from 'react';

export const Contactform = () => {
  return (
    <main className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h1 className="text-blue-900 text-4xl font-bold sm:text-4xl">
            Send Your Message
          </h1>
          <br />
          <p className="text-red-600 text-lg">
            We’d love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form
            method="POST"
            className="space-y-5"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKKV0DFjdziMuS5pi9Y_oXz-LWlz8hgmMephMInPC1QznfFA/formResponse"
          >
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">Your Name</label>
                <input
                  type="text"
                  name="entry.1392050557"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  name="entry.2055964439"
                  placeholder="support@email.com"
                  required
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Website</label>
              <input
                type="text"
                name="entry.1201404415"
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <input
                  placeholder="+91 xxxxxxxxxx"
                  name="entry.1216658461"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                name="entry.462711036"
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contactform;
