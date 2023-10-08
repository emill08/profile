import Link from "next/link";

export default function Project() {
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
      <div className="flex flex-row justify-center mt-48 space-x-12">
        <Link href="/project/seeker" className="card w-96 bg-base-100 shadow-xl hover:scale-110">
          <figure>
            <img src="/Seeker.png" alt="seeker" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">Seeker</h2>
            <p>
              A mobile-based platform, JobSeekerAssist, which offers job seekers
              valuable assistance, including pre-application to-do lists and
              personalized job recommendations.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">React Native</div>
              <div className="badge badge-outline">Express JS</div>
              <div className="badge badge-outline">etc</div>

            </div>
          </div>
        </Link>
        <Link href='/' className="card w-96 bg-base-100 shadow-xl hover:scale-110">
          <figure>
            <img className="h-48" src="/gamezone.png" alt="gamezone" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">GameZone</h2>
            <p>
            A web-based e-commerce platform that integrates game summaries, reviews, and ratings.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Vue.js</div>
              <div className="badge badge-outline">Express JS</div>
              <div className="badge badge-outline">etc</div>
            </div>
          </div>
        </Link>
        <Link href='/' className="card w-96 bg-base-100 shadow-xl hover:scale-110">
          <figure>
            <img className="h-48" src="/mkid.png" alt="mkid" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold">GameZone</h2>
            <p>
            a web-based platform that clones mechanicalkeyboards.co.id website.
            </p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">React JS</div>
              <div className="badge badge-outline">Express JS</div>
              <div className="badge badge-outline">etc</div>
            </div>
          </div>
        </Link>
      </div>
      {/* ini carousel buat page per project */}
      {/* <div className="flex justify-center mt-32">
<div className="carousel carousel-center max-w-md p-4 space-x-4 bg-white rounded-box">
  <div className="carousel-item">
    <img src="/p.jpg" className="h-96 rounded-box" />
  </div> 
  <div className="carousel-item">
  <img src="/p.jpg" className="h-96 rounded-box" />
  </div> 
  <div className="carousel-item">
  <img src="/p.jpg" className="h-96 rounded-box" />
  </div> 
  <div className="carousel-item">
  </div> 
  <div className="carousel-item">
  <img src="/p.jpg" className="h-96 rounded-box" />
  </div> 
  <div className="carousel-item">
  <img src="/p.jpg" className="h-96 rounded-box" />
  </div> 
  <div className="carousel-item">
  <img src="/p.jpg" className="h-96 rounded-box" />
  </div>
</div>
  </div> */}
    </main>
  );
}
