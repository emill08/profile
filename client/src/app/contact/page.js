import Link from 'next/link'
// import Text from 'next'

export default function Contact() {
  return (
    <main className='flex flex-col justify-between px-5'>
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
<div className="bg-base-100">
  <p className='text-center'>buat contact</p>
  </div>
    </main>
  )
}
