import React from 'react'

const Contact = () => {

  const [email, setEmail] = React.useState("")

  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className="max-w-2xl mx-auto min-h-72 dark:text-gray-200 border rounded p-6 border-blue-500/40 dark:border-blue-500/20 bg-blue-400/10 dark:bg-[#161c31]">
      <div>
        <h5 className="font-bold text-lg">
          Want to hire me as a freelancer? Let's discuss.
        </h5>
        <p className="text-gray-800/80 dark:text-gray-200/90">
          Drop your message and let's discuss about your project.
        </p>
        <button
          onClick={() => window.open("https://wa.link/65at7o", "_blank")}
          className="mt-2 bg-green-600/50 hover:bg-green-600/90 text-white font-medium py-1 px-4 rounded cursor-pointer"
        >
          Chat on WhatsApp
        </button>
      </div>
      <div className="w-full blur-[1px] border-b border-gray-400 my-8"></div>
      <div>
        <p className="text-gray-800/80 dark:text-gray-200/90">
          Drop in your email ID and I will get back to you.
        </p>
        <div className="mt-2 w-full h-fit rounded-md shadow bg-white dark:bg-slate-700/50 flex items-center justify-between p-1">
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
            className="w-full h-full px-2 text-sm focus:outline-none placeholder:text-gray-400 "
            placeholder="akhil@gmail.com"
          />
          <button
            onClick={() => {
              window.open(`https://wa.me/917018085058?text=Hi%20Akhil,%20${email}`)
            }}
            className="bg-gray-600/10 dark:bg-gray-100/10  text-sm text-black dark:text-white font-medium py-1 px-8 rounded cursor-pointer">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact