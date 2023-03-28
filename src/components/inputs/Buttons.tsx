interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  fillType?: "outline" | "solid";
  children: React.ReactNode;
}

export const PrimaryBtn = ({
  fillType = "solid",
  children,
  className,
  ...rest
}: IButtonProps) => {
  return (
    <button
      {...rest}
      className={`${className} px-5 py-2.5 text-sm font-medium rounded-full 
      ${
        fillType === "solid"
          ? "text-white bg-primaryColor hover:bg-indigo-800 border-transparent"
          : "text-primaryColor hover:text-white border-primaryColor hover:bg-primaryColor hover:border-primaryColor"
      }
      border focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300`}
    >
      {children}
    </button>
  );
};
