
import Link
 from 'next/link';
import Navbar from './components/navbar';

 export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center justify-center pt-24 bg-gray-100">
        <section className="w-full max-w-5xl mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to TD-ID</h1>
          <p className="text-lg mb-8">Your secure and reliable ID verification solution.</p>
          <div className="relative pb-56 pt-10 w-full max-w-4xl mx-auto mb-8">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID" // Replace with your video ID
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="bg-white p-8 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">About TD-ID</h2>
            <p className="text-lg">
              TD-ID is a revolutionary ID verification system designed to ensure security and reliability for businesses and individuals alike. Our cutting-edge technology provides a seamless and secure verification process, making identity management easier than ever.
            </p>
            <p className="text-lg mt-4">
              Whether you're a business looking to streamline your onboarding process or an individual seeking a secure way to manage your identity, TD-ID has you covered. Join us and experience the future of ID verification.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 TD-ID. All rights reserved.</p>
      </footer>
    </div>
  );
};


