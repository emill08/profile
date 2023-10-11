import Link from "next/link";

export default function GameZone() {
  const startNumber = 1;
  const endNumber = 7;

  const carouselItems = [];

  for (let i = startNumber; i <= endNumber; i++) {
    carouselItems.push(
      <div className="carousel-item h-full" key={i}>
        <img src={`/gamezone${i}.png`} />
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
              <p className="font-bold text-2xl text-center mt-4 mb-2">
                GameZone
              </p>
              <p className="text-black text-center">
                (Scroll down the image for a demo)
              </p>
              <div className="max-w-md mx-auto mt-8">
                <p className="text-black text-justify">
                  GameZone is a user-friendly web-based e-commerce platform
                  where gamers can find everything they need, from game
                  summaries to reviews and ratings, making it the ultimate
                  destination for gaming enthusiasts and shoppers alike.
                </p>
                <p className="font-bold text-center mt-8">Tech Stack:</p>
                <div className="flex flex-row justify-center mt-3 gap-4">
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://seeklogo.com/images/V/vuejs-logo-17D586B587-seeklogo.com.png"
                    alt="VueJS Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://keytosmart.com/wp-content/uploads/2019/11/postgresql-logo.png"
                    alt="PostgreSQL Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-7"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png"
                    alt="Pinia Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-13"
                    src="https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
                    alt="NodeJS Logo"
                  />
                  <img
                    className="hover:scale-150 h-10 w-10"
                    src="https://res.cloudinary.com/postman/image/upload/t_team_logo_pubdoc/v1/team/39704a3323a205f1a9d5eed22402f553ba31406d71ed414edf9c51e625d27009"
                    alt="CheapShark Logo"
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
        <div className="flex flex-col gap-10 mt-36">
          <Link
            className="btn-ghost rounded-full px-4"
            href="https://github.com/emill08/GameZone"
            target="_blank"
          >
            <img className="h-20 ml-4" src="/github-logo.png" />
          </Link>
        </div>
      </div>
    </main>
  );
}
