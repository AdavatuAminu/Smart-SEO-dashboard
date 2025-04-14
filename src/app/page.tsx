"use client";
import { FC } from "react";
import { PhoneCall, Search, Menu, X, ShoppingCart, Images, AppWindow } from "lucide-react";
import { useState } from "react";

// Define the Home component as a functional component (FC)
const Home: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      img: "https://seo.axiomthemes.com/wp-content/uploads/2021/09/image-1-120x120.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "John Doe",
      title: "Founder",
    },
    // Add more testimonials here for carousel functionality
  ];

  const handlePrev = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="min-h-screen font-sans bg-gradient-to-b from-blue-100/10 to-blue-100/10"
    >
      {/* Combined Header and Hero Section with Background */}
      <div className="relative">
        <div
          className="relative h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.ctfassets.net/pdf29us7flmy/2TkW6GD0U1ozZZZT3F7c5u/244501c7e6695a63d2f1656aa92067aa/building-sales-team_shutterstock_381098812_optimized_.jpg')",
          }}
        >
          {/* Header */}
          <header className="w-full z-20 bg-transparent">
            <nav className="container mx-auto flex justify-between items-center py-4 px-6">
              {/* Logo & Navigation */}
              <div className="flex items-center space-x-12">
                <div className="text-2xl font-bold text-white">Smart SEO</div>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-6">
                  {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-white hover:underline hover:decoration-white underline-offset-4"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button className="text-white hover:text-gray-300" aria-label="Search">
                      <Search size={25} />
                    </button>
                  </li>
                </ul>
              </div>

              {/* Right Side */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="bg-indigo-950 p-2 rounded-full text-white">
                  <PhoneCall size={25} />
                </div>
                <span className="text-white">+2348109624075</span>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-800">
                  Let's talk
                </button>
              </div>

              {/* Hamburger Icon (Mobile) */}
              <button
                className="md:hidden text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <div className="md:hidden bg-indigo-950 text-white px-6 pb-6">
                <ul className="space-y-4 mt-4">
                  {["Home", "About", "Portfolio", "Blog", "Contact"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block text-lg"
                        onClick={() => setIsOpen(false)}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                  <li>
                    <button className="text-white flex items-center gap-2" aria-label="Search">
                      <Search size={20} /> Search
                    </button>
                  </li>
                  <li className="flex items-center gap-3 mt-4">
                    <div className="bg-white p-2 rounded-full text-indigo-950">
                      <PhoneCall size={20} />
                    </div>
                    <span>+2348109624075</span>
                  </li>
                  <li>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-800 mt-4">
                      Let's talk
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </header>

          {/* Hero Section */}
          <section className="relative h-full flex items-center justify-center text-center z-10">
            <div className="container mx-auto px-8 py-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Turning Creative Ideas<br />into Success
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <button className="bg-cyan-600 text-white text-lg px-8 py-4 rounded-full hover:bg-blue-700">
                Discover Now
              </button>
            </div>

            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              <a href="#" className="bg-indigo-900 text-white p-4" aria-label="View shopping cart">
                <ShoppingCart className="w-6 h-6" />
              </a>
              <a href="#" className="bg-indigo-900 text-white p-4" aria-label="Browse images">
                <Images className="w-6 h-6" />
              </a>
              <a href="#" className="bg-indigo-900 text-white p-4" aria-label="Open application">
                <AppWindow className="w-6 h-6" />
              </a>
            </div>
          </section>
        </div>

        {/* Curved bottom for hero section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "70px" }}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 relative">
            <div className="rounded-lg overflow-hidden z-0">
              <img
                src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3l.png"
                alt="Person working on laptop"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -bottom-20 right-28 hidden md:block z-10">
              <img
                src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3r.png"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="md:w-1/2 md:pl-16">
            <h4 className="text-md text-indigo-950 uppercase tracking-wider mb-2">
              Creative Agency
            </h4>
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-4">
              We help your<br />business grow
            </h2>
            <p className="text-gray-600 mb-6">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <div className="bg-transparent p-2 mr-3">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/1875/1875043.png"
                    alt="Creative design icon"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Creative design</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <div className="bg-transparent p-2 mr-3">
                  <img
                    src="https://cdn3d.iconscout.com/3d/premium/thumb/cloud-upload-3d-icon-download-in-png-blend-fbx-gltf-file-formats--uploading-data-storage-network-technology-pack-communication-icons-4668601.png"
                    alt="Endless possibilities icon"
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Endless possibilities</h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-center gap-y-12 text-center">
            <div className="relative w-full sm:w-1/2 lg:w-1/4">
              <div className="relative text-[80px] md:text-[100px] lg:text-[150px] font-bold text-gray-300 inline-block px-4 py-2">
                98
                <span className="absolute inset-0 flex items-center justify-center text-[16px] md:text-[20px] text-indigo-950">
                  Projects
                </span>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 lg:w-1/4 border-t sm:border-t-0 lg:border-l border-blue-300">
              <div className="relative text-[80px] md:text-[100px] lg:text-[150px] font-bold text-gray-300 inline-block px-4 py-2">
                65
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[16px] md:text-[20px] font-bold text-indigo-950">
                  People
                </span>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 lg:w-1/4 border-t sm:border-t-0 lg:border-l border-blue-300">
              <div className="relative text-[80px] md:text-[100px] lg:text-[150px] font-bold text-gray-300 inline-block px-4 py-2">
                10
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[16px] md:text-[20px] font-bold text-indigo-950">
                  Years
                </span>
              </div>
            </div>
            <div className="relative w-full sm:w-1/2 lg:w-1/4 border-t sm:border-t-0 lg:border-l border-blue-300">
              <div className="relative text-[80px] md:text-[100px] lg:text-[150px] font-bold text-gray-300 inline-block px-4 py-2">
                15
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[16px] md:text-[20px] font-bold text-indigo-950">
                  Offices
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Solutions Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
            <div className="md:w-1/2">
              <h4 className="text-sm text-indigo-950 uppercase tracking-wider mb-2">
                CREATIVE SOLUTIONS
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-indigo-950">
                We make unique & memorable brands
              </h2>
            </div>
            <div className="md:w-1/2 flex flex-col items-start gap-4">
              <p className="text-gray-400 mb-0 max-w-[75%]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio
                dignissimos duci esse. Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <button className="text-indigo-950 hover:underline whitespace-nowrap mt-1">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Slide Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-purple-600 text-2xl">✦</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Web Design</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-blue-600 text-2xl">✦</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl">✦</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Marketing</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg">
              <div className="bg-white p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-2xl">✦</span>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 text-center relative">
        <div className="container mx-auto px-6 max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-start gap-2">
            <h2 className="text-3xl md:text-5xl font-bold text-indigo-950 mb-4 md:mb-0">
              Subscribe for the exclusive updates!
            </h2>
            <div className="flex flex-col items-start gap-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="border border-gray-300 rounded-l-full px-4 py-2 w-64 focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-r-full hover:bg-purple-700">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                <input type="checkbox" className="mr-2" />
                I agree to the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 text-center relative">
        <div className="container mx-auto px-6 relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="max-w-2xl mx-auto text-center">
            <img
              src={testimonials[currentTestimonial].img}
              alt={`Portrait of ${testimonials[currentTestimonial].name}`}
              className="rounded-full mx-auto mb-6"
            />
            <p className="text-xl md:text-2xl italic text-gray-600 mb-4">
              "{testimonials[currentTestimonial].text}"
            </p>
            <p className="font-bold text-blue-900">{testimonials[currentTestimonial].name}</p>
            <p className="text-gray-600">{testimonials[currentTestimonial].title}</p>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentTestimonial ? "bg-blue-900" : "bg-gray-300"}`}
                ></div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h4 className="text-sm text-indigo-950 uppercase tracking-wider mb-2">
              WHO WE ARE
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-4">
              We provide best digital services
            </h2>
            <p className="text-gray-400 mb-6">
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </p>
            <button className="bg-cyan-400 text-white px-6 py-3 rounded-full hover:bg-blue-700">
              Discover Now
            </button>
          </div>
          <div className="md:w-1/2 md:pl-10 relative">
            <div className="mb-8 md:mb-0 relative">
              <div className="rounded-lg overflow-hidden z-0">
                <img
                  src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3l.png"
                  alt="Person working on laptop"
                  className="rounded-lg"
                />
              </div>
              <div className="absolute -bottom-20 right-20 hidden md:block z-10">
                <img
                  src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3r.png"
                  alt="Team meeting"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-400 rounded-full"></div>
            <div className="absolute top-1/4 -right-4 w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-1/4 -left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-10">
        <div className="flex flex-wrap justify-center items-center gap-6 px-6 py-4">
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-1-copyright.png"
            alt="Client logo 1"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-2-copyright.png"
            alt="Client logo 2"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-3-copyright.png"
            alt="Client logo 3"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-4-copyright.png"
            alt="Client logo 4"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-5-copyright.png"
            alt="Client logo 5"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
          <img
            src="https://seo.axiomthemes.com/wp-content/uploads/2023/04/partner-6-copyright.png"
            alt="Client logo 6"
            className="w-1/4 max-w-[150px] min-w-[70px] opacity-50 hover:opacity-100 transition-opacity"
          />
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 text-center relative">
        <div className="container mx-auto px-6">
          <h4 className="text-sm text-indigo-950 uppercase tracking-wider mb-2">
            OUR BLOG
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-950 mb-8">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden text-left">
              <img
                src="https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-10-890x664.jpg"
                alt="Illustration of project management strategy"
                className="w-full"
              />
              <div className="p-4 bg-transparent">
                <span className="text-sm text-gray-500">MEDIA SEO</span>
                <h3 className="text-lg font-bold text-indigo-950 mt-2">
                  Why do project managers need to focus on strategy?
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden text-left">
              <img
                src="https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-11-890x664.jpg"
                alt="Trending design charts illustration"
                className="w-full"
              />
              <div className="p-4 bg-transparent">
                <span className="text-sm text-gray-500">MEDIA SEO</span>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  What's trending on designers' charts this spring?
                </h3>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden text-left">
              <img
                src="https://seo.axiomthemes.com/wp-content/uploads/2020/04/image-9-890x664.jpg"
                alt="Startup digital business ideas"
                className="w-full"
              />
              <div className="p-4 bg-transparent">
                <span className="text-sm text-gray-500">MEDIA SEO</span>
                <h3 className="text-lg font-bold text-gray-800 mt-2">
                  Fresh startup ideas for your digital business
                </h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-blue-900"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Curved bottom for blog section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: "70px", zIndex: 1 }}>
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-full"
            style={{ transform: "rotate(180deg)" }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="#111827"
            ></path>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Office</h3>
            <p className="text-gray-400">Office Street, Office 410</p>
            <p className="text-gray-400">New York, NY 10012</p>
            <p className="text-gray-400 mt-4">+1 800 555 66 77</p>
            <p className="text-gray-400">mail@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Socials</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-600 bg-gray-800 text-white rounded-full px-4 py-2 w-full focus:outline-none mb-4"
            />
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 w-full">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            © Axion Themes 2025. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;