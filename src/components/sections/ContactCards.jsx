export default function ContactCards({ contactData }) {
  const items = contactData;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-5 items-center px-10 py-10 shadow-lg"
        >
          <div className="bg-[#b18b5e] p-5 w-24 h-24 flex items-center justify-center rounded-full">
            <img src={item.image} alt="" className="w-10 h-10" />
          </div>
          <h1 className="text-center">{item.title}</h1>
          <div>
            <p className="text-center">{item.excerpt1}</p>
            <p className="text-center">{item.excerpt2}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
