import Link from "next/link";

export default function Contact() {
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
      {/* di bikin card nanti, carouselnya di dalem card, di flex row, kiri buat vertical carousel, kanan buat repo dll */}
      <div className="flex justify-center mt-32">
        <div className="h-96 carousel carousel-vertical rounded-box">
          <div className="carousel-item h-full">
            <img src="/p.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/p.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/p.jpg" />
          </div>
          <div className="carousel-item h-full">
            <img src="/p.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}
