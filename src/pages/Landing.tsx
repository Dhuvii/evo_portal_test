import JobCard from "../components/cards/JobCard";
import PricingCard from "../components/cards/PricingCard";
import ProfessionCard from "../components/cards/ProfessionCard";
import WorkerCard from "../components/cards/WorkerCard";
import { PrimaryBtn } from "../components/inputs/Buttons";
import Container from "../layout/Container";

const pricingPlans = {
  free: [
    "Create 1 job post",
    "5 Applications per job",
    "Gets approved in 48 hours",
    "View job applications",
    "Hire workers",
    "Bookmark workers",
  ],
  bronze: [
    "Create 1 job post",
    "5 Applications per job",
    "Gets approved in 48 hours",
    "View job applications",
    "Contact information locked",
    "Hire workers",
    "Bookmark workers",
  ],
  silver: [
    "Create 4 job post",
    "100 Applications per job",
    "Gets approved in 24 hours",
    "View job applications",
    "Contact information unlocked",
    "Hire workers",
    "Bookmark workers",
    "Comunicate with workers",
    "Contact upto 50 workers a month",
    "Read worker review",
  ],
  gold: [
    "Create unlimited job post",
    "400 Applications per job",
    "Gets approved instantly",
    "Hire workers",
    "Everything from silver plan",
    "Contact upto 100 workers a month",
    "Read worker review",
  ],
};

const Landing = () => {
  return (
    <>
      {/* hero section */}
      <section className="relative">
        <Hero_1 />

        {/* search */}
        <div className="absolute z-10 inset-x-0 -bottom-[4.5rem] px-3 flex items-center justify-center">
          <Container className="p-3 md:p-10 bg-white border rounded-2xl shadow-lg flex flex-col gap-2 items-center justify-center">
            <div className="w-full border border-indigo-600 rounded-full">
              <div className="p-1 md:p-2 flex items-center justify-start gap-1 md:gap-2">
                <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-1 md:gap-2">
                  <button className="w-full md:w-auto p-3 md:px-10 whitespace-nowrap bg-indigo-100 rounded-l-full inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 text-xs md:text-sm font-medium">
                    Select Type
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

                  <button className="w-full md:w-auto p-3 md:px-10 whitespace-nowrap bg-indigo-100 rounded-r-full inline-flex items-center gap-1 text-gray-600 hover:text-gray-800 text-xs md:text-sm font-medium">
                    Select Profession
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
                </div>

                <div className="flex-1 hidden md:block">
                  <input
                    className="w-full px-2 py-2 text-base focus:outline-none"
                    type="search"
                    placeholder="Find a job..."
                  />
                </div>

                <PrimaryBtn className="hidden md:block">Search</PrimaryBtn>
              </div>
            </div>
            <PrimaryBtn className="w-full md:hidden">Search</PrimaryBtn>
          </Container>
        </div>
        {/* end of search */}
      </section>
      {/* end of hero section */}

      {/* feature section */}
      <section className="mt-48">
        <Container>
          <div className="w-full flex items-end justify-between gap-5">
            <div className="">
              <h3 className="text-2xl font-medium text-gray-800">
                Featured Jobs
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <button className="text-sm whitespace-nowrap text-gray-600 inline-flex items-center gap-1">
              View more jobs
              <span>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10L7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <JobCard
              className="bg-yellow-50 border-2 border-yellow-500"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />

            <JobCard
              className="bg-yellow-50 border-2 border-yellow-500"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />

            <JobCard
              className="bg-yellow-50 border-2 border-yellow-500"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
            <JobCard
              className="bg-yellow-50 border-2 border-yellow-500"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
          </div>

          <div className="mt-24 w-full">
            <div className="w-full flex items-end justify-between gap-10">
              <div className="">
                <h3 className="text-2xl font-medium text-gray-800">
                  Latest Jobs
                </h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <button className="text-sm whitespace-nowrap text-gray-600 inline-flex items-center gap-1">
                View more jobs
                <span>
                  <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10L7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            <JobCard
              className="border"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
            <JobCard
              className="border"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
            <JobCard
              className="border"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
            <JobCard
              className="border"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
            <JobCard
              className="border"
              Icon={() => (
                <svg className="w-10 h-10 flex-shrink-0 " viewBox="0 0 48 48">
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>
              )}
              title="Software Engineer"
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, aperiam quod. Aspernatur."
              location="Remote"
              level="Senior"
              type="Full Time"
            />
          </div>
        </Container>
      </section>
      {/* end of feature section */}

      {/* popular profession */}
      <section className="relative mt-36">
        <div className="absolute inset-x-0 top-[3rem] -bottom-12">
          <div className="w-full h-full bg-indigo-100 -skew-y-6 md:-skew-y-2"></div>
        </div>

        <Container className="relative">
          <div className="w-full flex items-end justify-between gap-5">
            <div className="">
              <h3 className="text-2xl font-medium text-gray-800">
                Popular Professions
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <button className="text-sm whitespace-nowrap text-gray-600 inline-flex items-center gap-1">
              View more jobs
              <span>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10L7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* profession card */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProfessionCard
                key={i}
                Icon={() => (
                  <svg className="w-10 h-10" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M21 10.975V8a2 2 0 0 0-2-2h-6V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5a2 2 0 0 0-2 2v2.998l-.072.005A.999.999 0 0 0 2 12v2a1 1 0 0 0 1 1v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a1 1 0 0 0 1-1v-1.938a1.004 1.004 0 0 0-.072-.455c-.202-.488-.635-.605-.928-.632zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2s1.5.896 1.5 2s-.672 2-1.5 2z"
                    />
                  </svg>
                )}
                title="Virtual Assistants"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                labore, ullam cum, excepturi libero blanditiis, accusantium
                iusto quos ab rerum molestias dolores. Recusandae, nemo
                veritatis!"
              />
            ))}

            {/* end of profession card */}
          </div>
        </Container>
      </section>
      {/* end of popular profession */}

      {/* featured workers */}
      <section className="mt-48">
        <Container>
          <div className="w-full flex items-end justify-between gap-5">
            <div className="">
              <h3 className="text-2xl font-medium text-gray-800">
                Featured Workers
              </h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>

            <button className="text-sm whitespace-nowrap text-gray-600 inline-flex items-center gap-1">
              View more jobs
              <span>
                <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10L7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>

          <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* Worker Card */}
            <WorkerCard
              badge="full time"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />

            <WorkerCard
              badge="freelancer"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />

            <WorkerCard
              badge="remote"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />

            <WorkerCard
              badge="freelancer"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />

            <WorkerCard
              badge="remote"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />

            <WorkerCard
              badge="full time"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=96&q=80"
              name="Gabriel Soares"
              jobTitle="Software Engineer"
              description=" Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam molestias, cum inventore laboriosam vitae optio,
                    est minus illum ad ea deserunt iste tempora reprehenderit
                    debitis."
              availability="120"
              language="English"
              education="High School"
              salary="300"
            />
          </div>
        </Container>
      </section>
      {/* featured workers */}

      {/* pricing */}
      <section className="relative mt-48 pb-20">
        <div className="absolute inset-x-0 top-[10%] bottom-0 bg-gradient-to-t from-indigo-100 to-transparent"></div>
        <Container className="relative">
          <div className="w-full mb-5 flex justify-center">
            <span className="text-xl font-medium text-indigo-600">Pricing</span>
          </div>
          <h3 className="text-5xl font-bold text-gray-800 text-center">
            Choose the right plan for you
          </h3>

          <p className="mt-3 w-full max-w-lg mx-auto text-lg text-gray-500 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis labore adipisci recusandae sunt amet.
          </p>

          <div className="mt-20 flex items-center flex-col lg:flex-row gap-3 lg:gap-0">
            <PricingCard
              className="border border-gray-300"
              plan="Bronze"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis labore adipisci recusandae sunt amet."
              amount="$28"
              planDetails={pricingPlans.bronze}
            />

            <PricingCard
              className="lg:-ml-3 lg:-mr-3 md:shadow-2xl z-10 border-2 border-indigo-600"
              plan="Silver"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis labore adipisci recusandae sunt amet."
              amount="$28"
              planDetails={pricingPlans.silver}
            />

            <PricingCard
              className="border border-gray-300"
              plan="Gold"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            veritatis labore adipisci recusandae sunt amet."
              amount="$28"
              planDetails={pricingPlans.gold}
            />
          </div>

          <div className="mt-20 w-full flex flex-col items-center justify-center">
            <h4 className="text-2xl font-medium text-gray-800 text-center">
              Want to try out our job board first? <br /> Post a free job today
            </h4>

            <p className="w-full mt-5 max-w-lg text-sm text-gray-500 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              reprehenderit provident repellendus consectetur? In, veritatis.
            </p>

            <div className="mt-10 w-full flex items-center justify-center flex-wrap gap-x-5 gap-y-5">
              {pricingPlans.free.map((feature: string, idx: number) => (
                <p
                  key={`${feature}_${idx}`}
                  className="text-base text-gray-500 inline-flex items-center gap-5"
                >
                  <span>
                    <svg
                      className="w-6 h-6 flex-shrink-0 text-indigo-600"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 12.75L11.25 15L15 9.75M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                  {feature}
                </p>
              ))}
            </div>

            <div className="w-full mt-10 flex items-center justify-center">
              <PrimaryBtn className="px-16 md:px-24">Post a job</PrimaryBtn>
            </div>
          </div>
        </Container>
      </section>
      {/* end of pricing */}

      {/* job board */}
      <section className="mt-32">
        <Container>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="">
              <h3 className="text-2xl font-medium text-gray-800">
                About our job board
              </h3>

              <p className="mt-10 text-sm text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
                cumque optio expedita, laudantium quam itaque deserunt, aliquam
                autem voluptates, sint perspiciatis pariatur modi quas rem
                reiciendis? Ullam, autem blanditiis!
              </p>

              <p className="mt-5 text-sm text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
                cumque optio expedita, laudantium quam itaque deserunt, aliquam
                autem voluptates, sint perspiciatis pariatur modi quas rem
                reiciendis? Ullam, autem blanditiis!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A nobis cumque optio expedita,
                laudantium quam itaque deserunt, aliquam autem voluptates, sint
                perspiciatis pariatur modi quas rem reiciendis? Ullam, autem
                blanditiis!
              </p>

              <p className="mt-5 text-sm text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A nobis
                cumque optio expedita, laudantium quam itaque deserunt, aliquam
                autem voluptates, sint perspiciatis pariatur modi quas rem
                reiciendis? Ullam, autem blanditiis!Lorem ipsum dolor sit amet
                consectetur adipisicing elit. A nobis cumque optio expedita,
                laudantium quam itaque deserunt, aliquam autem voluptates, sint
                perspiciatis pariatur modi quas rem reiciendis? Ullam, autem
                blanditiis!
              </p>
            </div>

            <div className="w-full">
              <div className="w-full aspect-video rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt=""
                />
              </div>

              <div className="w-full mt-5 flex items-center justify-center gap-5">
                <div className="">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
                <div className="">
                  <img
                    className="w-full rounded-xl"
                    src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* job board */}

      {/* numbers */}
      <section className="mt-48 bg-gray-100 py-20">
        <Container>
          <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="">
              <h2 className="text-4xl text-center md:text-left text-gray-800">
                Our Numbers
              </h2>

              <p className="mt-5 w-full text-center md:text-left max-w-md text-sm text-gray-600 leading-6">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit maiores aut doloremque eaque dolor similique?Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Suscipit
                maiores aut doloremque eaque dolor similique?
              </p>

              <div className="mt-10 flex items-center justify-center md:justify-start">
                <PrimaryBtn className="px-16 md:px-24">Post a job</PrimaryBtn>
              </div>
            </div>

            <div className="w-full md:w-auto mt-10 md:mt-0">
              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="w-full -mt-10 flex flex-col gap-5">
                  <div className="w-full p-20 flex items-center justify-start flex-col border rounded-2xl bg-white">
                    <div className="">
                      <p className="text-sm uppercase text-gray-500 ">
                        Job posted
                      </p>
                      <h3 className="text-3xl font-medium text-gray-800">
                        100,000 <span className="text-indigo-600">+</span>
                      </h3>
                    </div>
                  </div>

                  <div className="w-full p-20 flex items-center justify-start flex-col border rounded-2xl bg-white">
                    <div className="">
                      <p className="text-sm uppercase text-gray-500 ">
                        Monthly visits
                      </p>
                      <h3 className="text-3xl font-medium text-gray-800">
                        100,000 <span className="text-indigo-600">+</span>
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="w-full -mb-10 flex flex-col gap-5">
                  <div className="w-full p-20 flex items-center justify-start flex-col border rounded-2xl bg-white">
                    <div className="">
                      <p className="text-sm uppercase text-gray-500 ">
                        Job posted
                      </p>
                      <h3 className="text-3xl font-medium text-gray-800">
                        100,000 <span className="text-indigo-600">+</span>
                      </h3>
                    </div>
                  </div>

                  <div className="w-full p-20 flex items-center justify-start flex-col border rounded-2xl bg-white">
                    <div className="">
                      <p className="text-sm uppercase text-gray-500 ">
                        Monthly visits
                      </p>
                      <h3 className="text-3xl font-medium text-gray-800">
                        100,000 <span className="text-indigo-600">+</span>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* end of numbers */}
    </>
  );
};

export default Landing;

const Hero_1 = () => {
  return (
    <div className="relative inset-0 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-indigo-900 to-indigo-300 mix-blend-multiply"></div>
      <img
        className="w-full h-full absolute object-cover inset-x-0 grayscale opacity-50"
        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />

      <Container className="relative z-10 w-full pt-28 pb-36">
        <div className="w-full">
          {/* title */}
          <h1 className="w-full text-center max-w-3xl mx-auto text-5xl md:text-6xl font-normal text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>

          <h3 className="w-full mt-16 text-center mx-auto max-w-md md:max-w-xl text-sm md:text-lg text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            numquam asperiores dolore consectetur corrupti inventore
            necessitatibus dolores tempora sequi mollitia!
          </h3>
          {/* title */}
        </div>
      </Container>
    </div>
  );
};

const Hero_2 = () => {
  return (
    <div className="relative inset-0 overflow-hidden">
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-primaryColor to-indigo-300 mix-blend-multiply"></div>
      <img
        className="w-full h-full absolute inset-0 object-cover grayscale opacity-50"
        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />

      <Container className="w-full relative z-10 pt-20 pb-40">
        <div className="w-full flex items-start justify-between gap-20">
          {/* title */}
          <div className="w-full flex flex-col items-start justify-center">
            <h1 className="w-full max-w-4xl text-5xl md:text-6xl font-normal text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>

            <h3 className="w-full max-w-md md:max-w-xl mt-10 text-sm md:text-lg text-gray-100">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              numquam asperiores dolore consectetur corrupti inventore
              necessitatibus dolores tempora sequi mollitia!
            </h3>
          </div>
          {/* title */}

          {/* card */}
          <div className="hidden md:block p-1 border border-gray-400 rounded-2xl">
            <div className="p-5 px-8 rounded-xl border border-gray-300 bg-white shadow-xl">
              <div className="w-full p-1 flex items-center justify-between rounded-full border shadow-sm">
                <div className="px-2 py-1 tracking-wide whitespace-nowrap rounded-full bg-indigo-100 text-sm font-medium text-indigo-600 border">
                  Im an Employee
                </div>
                <div className="px-2 py-1 tracking-wide  whitespace-nowrap rounded-full text-sm font-medium text-gray-600">
                  Im an Employer
                </div>
              </div>

              <div className="mt-8">
                <div className="w-max p-2 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                  <svg className="w-8 h-8" viewBox="0 0 20 20">
                    <g fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M6 3.75A2.75 2.75 0 0 1 8.75 1h2.5A2.75 2.75 0 0 1 14 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54c-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 0 1 6 4.193V3.75Zm6.5 0v.325a41.622 41.622 0 0 0-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25ZM10 10a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h.01a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1H10Z"
                        clipRule="evenodd"
                      />
                      <path d="M3 15.055v-.684c.126.053.255.1.39.142c2.092.642 4.313.987 6.61.987c2.297 0 4.518-.345 6.61-.987c.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 0 1-9.274 0C3.985 17.585 3 16.402 3 15.055Z" />
                    </g>
                  </svg>
                </div>
                <h3 className="mt-2 text-2xl font-medium text-gray-800">
                  Post a job today
                </h3>

                <p className="mt-2 w-full max-w-xs leading-6 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero corrupti sequi quasi assumenda velit nulla nobis?
                </p>
              </div>

              <div className="mt-5 w-full">
                <PrimaryBtn className="w-full">Post a featured Job</PrimaryBtn>

                <button className="mt-2 w-full text-sm text-center text-gray-600 hover:text-gray-800">
                  or post a free job
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
