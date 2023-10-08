import Link from 'next/link'

export default function Project() {
  return (
    <main className="flex flex-col justify-between px-5">
      <div className="navbar bg-info mt-7 rounded-full px-5">
        <div className="flex-1">
          <Link href='/' className="btn btn-ghost text-base-100 normal-case text-xl">About</Link>
          <Link href='/project' className="btn btn-ghost text-base-100 normal-case text-xl">Project</Link>
          <Link href='/contact' className="btn btn-ghost text-base-100 normal-case text-xl">Contact</Link>
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
                <a className="text-black"
                  href="https://www.linkedin.com/in/emilia-hanida-prilianti-746225192/"
                  target="_blank"
                >
                  Linkedin
                </a>
              </li>
              <li>
                <a 
                className="text-black"
                href="https://github.com/emill08" target="_blank">
                  GitHub
                </a>
              </li>
              <li>
                <a 
                className="text-black"
                href="mailto:emiliahanida@gmail.com" target="_blank">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-36 h-screen">
  <p className="text-2xl text-slate-200 font-semibold">Hi, I'm</p>
  <p className="text-6xl text-info font-bold mt-2">Emilia Hanida</p>
  <div className="mt-6 px-4 lg:px-64">
    <p className="text-lg text-slate-100">
      Welcome to my Full Stack Developer portfolio! As a web enthusiast, I'm on a mission to create dynamic and user-friendly digital experiences. My portfolio showcases a collection of projects that demonstrate my ability to seamlessly integrate aesthetics with functionality. From designing intuitive user interfaces to engineering robust backend systems, I'm committed to delivering web solutions that stand out. Feel free to browse through my work.
    </p>
  </div>
</div>
    </main>
  );
}
