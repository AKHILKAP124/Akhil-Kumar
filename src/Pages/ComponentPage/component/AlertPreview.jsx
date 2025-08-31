const Alert = ({ type = "info", message }) => {
  const baseStyle =
    "flex items-center justify-between p-4 mb-4 rounded-lg border shadow-sm";
  const typeStyles = {
    success: "bg-green-50 text-green-800 border-green-300",
    error: "bg-red-50 text-red-800 border-red-300",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-300",
    info: "bg-blue-50 text-blue-800 border-blue-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type]}`}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;