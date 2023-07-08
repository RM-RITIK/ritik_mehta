'use client'
import { useState } from "react";
import Navbar from "../components/navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "19370748-ace4-41e5-a4dc-98e7955a5c6c"
  });

  async function handleSubmit(event: any) {
    event.preventDefault();
    const json = JSON.stringify(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (
    <>
    <Navbar />
    <div className="p-8 rounded border border-gray-200">
    <h1 className="font-medium text-3xl">Contact Form</h1>
    <p className="text-gray-600 mt-6">Feel free to reach out to me. I will get back to you as soon as possible.</p>

  <form onSubmit={handleSubmit}>
      <div className="mt-8 grid lg:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
          <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>
          <input type="text" name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="message" className="text-sm text-gray-700 block mb-1 font-medium">Message</label>
          <textarea name="message" id="message" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="your message..." value={formData.message} onChange={handleChange} />
        </div>
      </div>

      <div className="space-x-4 mt-8">
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Submit</button>
      </div>
    </form>
  </div>
    </>
  );
}