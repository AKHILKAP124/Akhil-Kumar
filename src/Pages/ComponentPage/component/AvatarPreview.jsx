const Avatar = ({ src, alt, size = "md", name }) => {
  const sizes = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-20 h-20 text-lg",
  };

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gray-200 overflow-hidden ${sizes[size]}`}
    >
      {src ? (
        <img src={src} alt={alt} className="object-cover w-full h-full" />
      ) : (
        <span className="text-gray-600 font-semibold">
          {name ? name.charAt(0).toUpperCase() : "?"}
        </span>
      )}
    </div>
  );
};


export default Avatar;
