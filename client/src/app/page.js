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
              <a href="/CV_EmiliaHanida.pdf" download>Download CV</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-36 h-screen">
  <p className="text-2xl text-black font-semibold">Hi, I'm</p>
  <p className="text-6xl text-info font-bold mt-2">Emilia Hanida</p>
  <div className="mt-6 px-4 lg:px-64">
    <p className="text-lg text-gray-700">
      Welcome to my Full Stack Developer portfolio! As a web enthusiast, I'm on a mission to create dynamic and user-friendly digital experiences. My portfolio showcases a collection of projects that demonstrate my ability to seamlessly integrate aesthetics with functionality. From designing intuitive user interfaces to engineering robust backend systems, I'm committed to delivering web solutions that stand out. Feel free to browse through my work.
    </p>
  </div>
  <Link href="/project" className='flex flex-row mt-32 btn-ghost p-2 rounded-xl'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>
    <p className='ml-3'>Browse My Projects</p>
  </Link>
</div>
    </main>
  );
}
