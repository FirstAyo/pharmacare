import React from "react";

export default function ContactForm({ clinicData }) {
  const items = clinicData;
  return (
    <div>
      <form className="flex flex-col gap-4 bg-[#b18b5e] p-4 lg:p-14">
        <div className="grid md:grid-cols-2 gap-4">
          <input className="card" placeholder="Full Name*" required />
          <input
            className="card"
            placeholder="Email Address*"
            type="email"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="card"
            placeholder="Phone Number"
            type="number"
            required
          />
          <input
            className="card w-full"
            placeholder="Email Address*"
            type="date"
            required
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <select name="" id="" className="card">
            {items.map((item) => (
              <option value={item.value} key={item.id}>
                {item.clinic}
              </option>
            ))}
          </select>

          <select name="" id="" className="card">
            {items.map((item) => (
              <option value={item.value} key={item.id}>
                {item.doctor}
              </option>
            ))}
          </select>
        </div>
        <input className="card md:col-span-2" placeholder="Subject" />
        <textarea
          className="card md:col-span-2 min-h-[140px]"
          placeholder="Your Message"
        ></textarea>
        <button className="btn btn-primary md:col-span-2" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
