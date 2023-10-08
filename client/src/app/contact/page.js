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
              <a href="/CV_EmiliaHanida.pdf" download>Download CV</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-base-100 flex flex-row justify-center mt-48 space-x-32">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-96" src="/p.png" alt="profile" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Collaborate with Me? Contact Here</h2>
            <div className="card-actions flex flex-col items-center justify-end">
              <Link className="btn-ghost rounded-full px-4" href="https://www.linkedin.com/in/emilia-hanida-prilianti-746225192/" target="_blank">
              <img
                className="h-24"
                src="https://1000logos.net/wp-content/uploads/2023/01/LinkedIn-logo.png"
                />
                </Link>
                <Link className="btn-ghost rounded-full px-4" href="https://github.com/emill08" target="_blank">
              <img className="h-24" src="/github-logo.png" />
                </Link>
                <Link className="btn-ghost rounded-full px-4 mt-3" href="mailto:emiliahanida@gmail.com" target="_blank">
              <img className="h-24" src="/gmail.png" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
