const SubHeader = ({ title, className, style, children }) => {
  return (
    <div
      className={`p-3 pb-md-4 mx-auto text-center ${className}`}
      style={style}
    >
      <h1 className="display-5 fw-bolder">{title}</h1>
      {children}
    </div>
  );
};

export default SubHeader;
