interface IJobCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  location: string;
  level: string;
  type: string;
}
const JobCard = ({
  Icon,
  title,
  description,
  location,
  level,
  type,
  className,
  ...rest
}: IJobCard) => {
  return (
    <div
      {...rest}
      className={`${className} w-full p-3 flex flex-col lg:flex-row items-center justify-between gap-5 rounded-md`}
    >
      <div className="w-full flex items-center gap-3">
        {/* icon */}
        <div className="h-20 aspect-square flex-shrink-0 bg-white border rounded-md flex items-center justify-center">
          <Icon />
        </div>
        {/* end of icon */}

        <div className="w-full max-w-xs">
          <h4 className="text-xl font-medium text-gray-800">{title}</h4>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>

      <div className="w-full md:w-auto flex justify-center md:justify-start items-center gap-8 md:pr-3">
        <Badge
          Icon={() => (
            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24">
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M15 10.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </g>
            </svg>
          )}
          value={location}
          tag="location"
        />

        <Badge
          Icon={() => (
            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 20 20">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.577 4.878a.75.75 0 0 1 .919-.53l4.78 1.281a.75.75 0 0 1 .531.919l-1.281 4.78a.75.75 0 0 1-1.449-.387l.81-3.022a19.407 19.407 0 0 0-5.594 5.203a.75.75 0 0 1-1.139.093L7 10.06l-4.72 4.72a.75.75 0 0 1-1.06-1.061l5.25-5.25a.75.75 0 0 1 1.06 0l3.074 3.073a20.923 20.923 0 0 1 5.545-4.931l-3.042-.815a.75.75 0 0 1-.53-.919Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          value={level}
          tag="level"
        />

        <Badge
          Icon={() => (
            <svg className="w-6 h-6 text-gray-800" viewBox="0 0 24 24">
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
              />
            </svg>
          )}
          value={type}
          tag="type"
        />
      </div>
    </div>
  );
};

export default JobCard;

interface IBadge {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  value: string;
  tag: string;
}
const Badge = ({ Icon, tag, value }: IBadge) => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Icon />
      </div>
      <h6 className="text-sm font-medium whitespace-nowrap text-gray-800">
        {value}
      </h6>
      <p className="text-[0.6rem] uppercase font-medium tracking-wide text-gray-600 inline-flex items-center gap-1">
        {tag}
      </p>
    </div>
  );
};
