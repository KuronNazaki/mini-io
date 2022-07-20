import { useState } from "react"

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [feedback, setFeedback] = useState('')

	const onNameChange = (e) => setName(e.target.value)
	const onEmailChange = (e) => setEmail(e.target.value)
	const onFeedbackChange = (e) => setFeedback(e.target.value)
	const handleSubmit = () => alert(`Name: ${name}, email: ${email}, feedback: ${feedback}`)

  return (
    <section className="my-40">
      <div className="container mx-auto flex justify-between gap-x-10">
        <div className="contact-content">
          <h3 className="text-5xl font-black mb-5">Get in touch</h3>
          <p className="text-lg font-semibold">
            We'd love to hear from you. Fill in the form and we'll get back to
            you shortly.
          </p>
          <div className="addresses grid grid-cols-2 gap-4 mt-10">
            <div>
              <div className="city font-semibold text-lg mb-2">Los Angeles</div>
              <p>123 West Fake Street Los Angeles, CA 90001</p>
            </div>
            <div>
              <div className="city font-semibold text-lg mb-2">
                San Francisco
              </div>
              <p>321 Kanye West Street San Francisco, CA 94016</p>
            </div>
            <div>
              <div className="city font-semibold text-lg mb-2">Austin</div>
              <p>687 South Central Street Austin, CA 78720</p>
            </div>
            <div>
              <div className="city font-semibold text-lg mb-2">New York</div>
              <p>789 Yonder Street New York, NY 10038</p>
            </div>
          </div>
        </div>
        <div className="form w-full h-full bg-white rounded-3xl p-10 basis-1/2 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div class="mb-6">
              <label
                HTMLfor="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your name <span className="text-red-500">*</span>
              </label>
              <input
                type="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                placeholder="Jane Dove"
								value={name}
								onChange={onNameChange}
                required
              />
            </div>
            <div class="mb-6">
              <label
                HTMLfor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5"
                placeholder="name@flowbite.com"
								value={email}
								onChange={onEmailChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                HTMLfor="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                rows="4"
								required
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Leave your feedback..."
								value={feedback}
								onChange={onFeedbackChange}
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white bg-teal-500 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
							onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
