import { NavLink, To, Link } from "react-router-dom";
import { PrimaryBtn } from "../components/inputs/Buttons";
import Container from "./Container";

interface ILinkProps {
  to: To;
  children: React.ReactNode;
}
const CustomLink = ({ to, children }: ILinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        `-mb-3 text-sm font-medium flex flex-col items-center group
        ${isActive && "text-gray-800"}
        `
      }
    >
      {({ isActive, isPending }) => (
        <>
          <span>{children}</span>
          <div
            className={`mt-1 w-1.5 h-1.5 rounded-full transition-colors duration-200
            group-hover:bg-indigo-600
            ${isActive && "bg-indigo-600"}
            `}
          ></div>
        </>
      )}
    </NavLink>
  );
};

const Navbar = () => {
  return (
    <div className="w-full fixed z-30 top-0 py-3 bg-white shadow-sm">
      <Container className="w-full flex items-center justify-between">
        <div className="flex items-center justify-start gap-20">
          <Link to="/">
            <span className="text-2xl">EVO</span>
          </Link>

          {/* links */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-10 text-gray-600">
              <li className="">
                <button className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm font-medium">
                  How it works
                  <span>
                    <svg className="w-5 h-5" viewBox="0 0 20 20">
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.938a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </li>
              <li>
                <CustomLink to="pricing">Pricing</CustomLink>
              </li>
              <li>
                <CustomLink to="about">About</CustomLink>
              </li>
              <li>
                <CustomLink to="contact">Contact</CustomLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-3">
            <PrimaryBtn type="button" fillType="outline">
              Post a job
            </PrimaryBtn>

            <PrimaryBtn type="button" fillType="solid">
              Find jobs
            </PrimaryBtn>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
