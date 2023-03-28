import { PrimaryBtn } from "../inputs/Buttons";

interface IPricingCard
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  plan: string;
  description: string;
  amount: string;
  planDetails: string[];
}

const PricingCard = ({
  plan,
  description,
  amount,
  planDetails,
  className,
}: IPricingCard) => {
  return (
    <div className={`w-full p-8 lg:max-w-md rounded-xl bg-white ${className}`}>
      <div className="">
        <h3 className="text-2xl font-medium text-gray-800">{plan}</h3>

        <p className="mt-3 text-sm text-gray-600">{description}</p>

        <h1 className="mt-5 text-6xl font-medium text-gray-800">
          {amount} <span className="text-lg text-gray-500">/ month</span>
        </h1>

        <div className="w-full mt-5">
          <PrimaryBtn className="w-full">
            <span className="text-base text-white">Select plan</span>
          </PrimaryBtn>
        </div>

        <div className="mt-14">
          <ul className="flex flex-col gap-5">
            {planDetails.map((feature: string, idx: number) => (
              <li key={`${feature}_${idx}`}>
                <p className="text-base text-gray-600 inline-flex items-center gap-5">
                  <span>
                    <svg
                      className="w-6 h-6 flex-shrink-0 text-indigo-600"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                  {feature}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
