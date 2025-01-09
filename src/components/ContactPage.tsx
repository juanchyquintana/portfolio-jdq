
export default function ContactPage() {
  return (
    <form
      action={`https://formspree.io/f/${import.meta.env.VITE_ID_FORM}`}
      method="POST"
      target="_blank"
      className=" mx-auto p-6 my-20 bg-white shadow-md rounded-md"
    >
      <label htmlFor="name" className="block mb-2">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <label htmlFor="email" className="block mb-2">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      />

      <label htmlFor="message" className="block mb-2">Message:</label>
      <textarea
        id="message"
        name="message"
        required
        className="w-full p-2 border border-gray-300 rounded-md mb-4"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
      >
        Enviar
      </button>
    </form>

  )
}
