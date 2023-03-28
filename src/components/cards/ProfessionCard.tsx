interface IProfessionCard {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}
const ProfessionCard = ({ Icon, title, description }: IProfessionCard) => {
  return (
    <div className="border rounded-xl bg-white shadow-sm overflow-hidden">
      <div className="px-3 pt-3 flex items-center justify-start gap-5">
        <div className="w-max p-2 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center">
          <Icon />
        </div>

        <h3 className="text-2xl font-medium text-gray-800">{title}</h3>
      </div>

      <p className="mt-3 px-3 text-xs text-gray-600 leading-5">{description}</p>

      <button className="mt-3 py-3 w-full flex items-center justify-center bg-gray-100 text-gray-600">
        <div className="text-sm whitespace-nowrap inline-flex items-center gap-1">
          Search
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
        </div>
      </button>
    </div>
  );
};

export default ProfessionCard;
