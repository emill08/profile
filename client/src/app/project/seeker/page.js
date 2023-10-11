import Link from "next/link";

export default function Seeker() {
  const startNumber = 14;
  const endNumber = 1;

  const carouselItems = [];

  for (let i = startNumber; i >= endNumber; i--) {
    carouselItems.push(
      <div className="carousel-item h-full" key={i}>
        <img src={`/seeker${i}.jpg`} />
      </div>
    );
  }

  return (
    <main className="flex flex-col justify-between px-5">
      <div className="navbar bg-info mt-7 rounded-full px-5">
        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost text-base-100 normal-case text-xl"
          >
            About
          </Link>
          <Link
            href="/project"
            className="btn btn-ghost text-base-100 normal-case text-xl"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="btn btn-ghost text-base-100 normal-case text-xl"
          >
            Contact
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/p.jpg" alt="A descriptive alt text" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-slate-100 rounded-box w-52"
            >
              <li>
                <a href="/CV_EmiliaHanida.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center mt-48 gap-8">
        <div className="card w-auto bg-base-100 shadow-xl">
          <div className="flex flex-row h-auto space-x-8">
            {/* Carousel */}
            <div className="h-96 carousel carousel-vertical rounded-box hover:scale-150">
              {carouselItems}
            </div>
            {/* Text */}
            <div className="flex flex-col flex-grow p-4">
              <p className="font-bold text-2xl text-center mt-4 mb-2">SEEKER</p>
              <p className="text-black text-center">
                (Scroll down the image for a demo)
              </p>
              <div className="max-w-md mx-auto mt-8">
                <p className="text-black text-justify">
                  Seeker is a comprehensive job finder assistant that offers a
                  range of valuable features for job seekers. The app includes a
                  CV generator that allows users to create professional and
                  customized resumes tailored to their target positions.
                </p>
                <p className="font-bold text-center mt-8">Tech Stack:</p>
                <div className="flex flex-row justify-center mt-3 gap-4">
                  <img
                    className="hover:scale-150 h-10 w-9"
                    src="https://cdn.jsdelivr.net/gh/kristerkari/react-native-svg-transformer/images/react-native-logo.png"
                    alt="React Native Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://static-00.iconduck.com/assets.00/node-js-icon-1901x2048-mk1e13df.png"
                    alt="Node.JS Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://seeklogo.com/images/P/puppeteer-logo-254C5F1692-seeklogo.com.png"
                    alt="Puppeteer.JS Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://freelogopng.com/images/all_img/1681142382OpenAI-png.png"
                    alt="OpenAI Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png"
                    alt="MongoDB Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-25"
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Midtrans.png"
                    alt="Midtrans Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-24">
          <Link
            className="btn-ghost rounded-full px-4"
            href="https://github.com/emill08/seeker"
            target="_blank"
          >
            <img className="h-20 ml-4" src="/github-logo.png" />
          </Link>
          <Link
            className="btn-ghost rounded-full px-4"
            href="https://www.youtube.com/watch?v=HnxaXvxeSPI"
            target="_blank"
          >
            <img className="h-20" src="/youtube.png" />
          </Link>
        </div>
      </div>
    </main>
  );
}
