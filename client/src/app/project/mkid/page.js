import Link from "next/link";

export default function Mkid() {
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
            {/* Video */}
            <div className="h-auto carousel carousel-vertical rounded-box hover:scale-150">
              <video controls width="640" height="360">
                <source src="/mkid.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Text */}
            <div className="flex flex-col flex-grow p-4">
              <p className="font-bold text-2xl text-center mt-4 mb-2">
                MKID-Clone
              </p>
              <div className="max-w-md mx-auto mt-8">
                <p className="text-black text-justify">
                  A website inspired by mechanicalkeyboards.co.id, featuring a
                  range of top-notch mechanical keyboards, keycaps, switches,
                  and accessories. This project includes user-side, CMS, and
                  mobile-side functionalities.
                </p>
                <p className="font-bold text-center mt-8">Tech Stack:</p>
                <div className="flex flex-row justify-center mt-3 gap-4">
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://cdn.icon-icons.com/icons2/2699/PNG/512/reactjs_logo_icon_168875.png"
                    alt="React Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://keytosmart.com/wp-content/uploads/2019/11/postgresql-logo.png"
                    alt="PostgreSQL Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="/redux.png"
                    alt="redux Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
                    alt="NodeJS Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://variwiki.com/images/a/a1/Docker.png"
                    alt="Docker Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
                    alt="GraphQL Logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 mt-36">
          <Link
            className="btn-ghost rounded-full px-4"
            href="https://github.com/emill08/mkid-clone"
            target="_blank"
          >
            <img className="h-20 ml-4" src="/github-logo.png" />
          </Link>
        </div>
      </div>
    </main>
  );
}
