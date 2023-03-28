interface IWorkerCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  badge: "freelancer" | "full time" | "remote";
  name: string;
  jobTitle: string;
  description: string;
  avatar: string;
  availability: string;
  language: string;
  salary: string;
  education: string;
}

const WorkerCard = ({
  badge,
  avatar,
  name,
  jobTitle,
  description,
  availability,
  language,
  salary,
  education,
}: IWorkerCard) => {
  return (
    <div className="relative p-5 border border-gray-300 shadow-sm rounded-xl bg-white overflow-hidden">
      {/* badge */}
      <div className="absolute top-0 right-0">
        <div
          className={`px-3 py-2 rounded-bl-lg text-white text-xs uppercase font-medium
            ${badge === "full time" && "bg-blue-700"}
            ${badge === "remote" && "bg-orange-700"}
            ${badge === "freelancer" && "bg-green-700"}
        `}
        >
          {badge}
        </div>
      </div>
      {/* end of badge */}

      <div className="">
        <div className="flex items-center justify-start gap-5">
          <img
            className="w-16 h-16 rounded-lg object-cover shadow-inner border"
            src={avatar}
            alt={name}
          />

          <h2 className="text-2xl font-medium text-gray-800">{name}</h2>
        </div>

        <div className="mt-5">
          <h3 className="text-xl font-medium text-gray-800">{jobTitle}</h3>

          <p className="mt-2 text-sm text-gray-600 leading-6">{description}</p>
        </div>

        <div className="w-full max-w-[18rem] mx-auto mt-5 grid grid-cols-2 gap-10">
          <Badge
            Icon={() => (
              <svg className="w-5 h-5 text-gray-400 " viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
            tag="Availability"
            value={availability}
            subscript="hrs / month"
          />

          <Badge
            className="flex flex-col items-end"
            Icon={() => (
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20">
                <g fill="currentColor">
                  <path d="M7.75 2.75a.75.75 0 0 0-1.5 0v1.258a32.987 32.987 0 0 0-3.599.278a.75.75 0 1 0 .198 1.487A31.545 31.545 0 0 1 8.7 5.545A19.381 19.381 0 0 1 7 9.56a19.418 19.418 0 0 1-1.002-2.05a.75.75 0 0 0-1.384.577a20.935 20.935 0 0 0 1.492 2.91a19.613 19.613 0 0 1-3.828 4.154a.75.75 0 1 0 .945 1.164A21.116 21.116 0 0 0 7 12.331c.095.132.192.262.29.391a.75.75 0 0 0 1.194-.91a18.97 18.97 0 0 1-.59-.815a20.888 20.888 0 0 0 2.333-5.332c.31.031.618.068.924.108a.75.75 0 0 0 .198-1.487a32.832 32.832 0 0 0-3.599-.278V2.75Z" />
                  <path
                    fillRule="evenodd"
                    d="M13 8a.75.75 0 0 1 .671.415l4.25 8.5a.75.75 0 1 1-1.342.67L15.787 16h-5.573l-.793 1.585a.75.75 0 1 1-1.342-.67l4.25-8.5A.75.75 0 0 1 13 8Zm2.037 6.5L13 10.427L10.964 14.5h4.073Z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            )}
            tag="Language"
            value={language}
          />

          <Badge
            Icon={() => (
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20">
                <g fill="currentColor">
                  <path d="M10.75 10.818v2.614A3.13 3.13 0 0 0 11.888 13c.482-.315.612-.648.612-.875c0-.227-.13-.56-.612-.875a3.13 3.13 0 0 0-1.138-.432ZM8.33 8.62c.053.055.115.11.184.164c.208.16.46.284.736.363V6.603a2.45 2.45 0 0 0-.35.13a2.01 2.01 0 0 0-.386.233c-.377.292-.514.627-.514.909c0 .184.058.39.202.592c.037.051.08.102.128.152Z" />
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 1 1-16 0a8 8 0 0 1 16 0Zm-8-6a.75.75 0 0 1 .75.75v.316a3.78 3.78 0 0 1 1.653.713c.426.33.744.74.925 1.2a.75.75 0 0 1-1.395.55a1.35 1.35 0 0 0-.447-.563a2.187 2.187 0 0 0-.736-.363V9.3c.698.093 1.383.32 1.959.696c.787.514 1.29 1.27 1.29 2.13c0 .86-.504 1.616-1.29 2.13c-.576.377-1.261.603-1.96.696v.299a.75.75 0 1 1-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695c-.482-.315-.857-.717-1.078-1.188a.75.75 0 1 1 1.359-.636c.08.173.245.376.54.569c.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 0 1-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 0 1 1.653-.713V4.75A.75.75 0 0 1 10 4Z"
                    clipRule="evenodd"
                  />
                </g>
              </svg>
            )}
            tag="Salary"
            value={salary}
            subscript="USD"
          />

          <Badge
            className="flex flex-col items-end"
            Icon={() => (
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24">
                <g fill="currentColor">
                  <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337a49.949 49.949 0 0 0-9.902 3.912l-.003.002l-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224a.36.36 0 0 1 .172-.311a54.614 54.614 0 0 1 4.653-2.52a.75.75 0 0 0-.65-1.352a56.129 56.129 0 0 0-4.78 2.589a1.858 1.858 0 0 0-.859 1.228a49.803 49.803 0 0 0-4.634-1.527a.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                  <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282a61.14 61.14 0 0 1 .255 4.285a.75.75 0 0 1-.46.71a47.878 47.878 0 0 0-8.105 4.342a.75.75 0 0 1-.832 0a47.877 47.877 0 0 0-8.104-4.342a.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11c.452.213.901.434 1.346.661a6.729 6.729 0 0 0 .551-1.608a1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668a2.25 2.25 0 0 0 2.12 0Z" />
                  <path d="M4.462 19.462c.42-.419.753-.89 1-1.394c.453.213.902.434 1.347.661a6.743 6.743 0 0 1-1.286 1.794a.75.75 0 1 1-1.06-1.06Z" />
                </g>
              </svg>
            )}
            tag="Education"
            value={education}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkerCard;

interface IBadge
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  value: string;
  tag: string;
  subscript?: string;
}
const Badge = ({ Icon, value, tag, subscript, className }: IBadge) => {
  return (
    <div className={className}>
      <p className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide text-gray-500">
        <Icon />
        {tag}
      </p>

      <h4 className="text-lg text-gray-800">
        {value}{" "}
        {subscript && (
          <span className="text-xs bg-gray-100 px-1 py-0.5 rounded-md text-gray-600">
            {subscript}
          </span>
        )}
      </h4>
    </div>
  );
};
