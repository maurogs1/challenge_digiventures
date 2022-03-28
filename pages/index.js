import Link from "next/link";

export default function Index() {
  return (
    <>
      <ul className="nav">
        <div className="nav__logo">
          <img className="logo" alt="Digiventures logo" src="logo.webp" onClick={ () => window.open('https://www.digiventures.la/','_blank') } />
        </div>
        <div className="d-flex w-50 nav__links">
          <li>
            <Link href="/login" as="/login">
              <a className="nav__item">Login</a>
            </Link>
          </li>
          <li>
            <Link href="/register" as="/register">
              <a className="nav__item">Register</a>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
}
