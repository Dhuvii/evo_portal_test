interface IContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
}
const Container = ({ children, className }: IContainerProps) => {
  return (
    <div className={`${className} w-full px-3 max-w-7xl mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
