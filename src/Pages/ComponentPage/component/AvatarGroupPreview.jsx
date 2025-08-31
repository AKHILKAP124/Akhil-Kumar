import Avatar from "./AvatarPreview";

const AvatarGroup = ({ users, size = "md", max = 3 }) => {
  const displayUsers = users.slice(0, max);
  const remaining = users.length - max;

  return (
    <div className="flex -space-x-4">
      {displayUsers.map((user, idx) => (
        <div key={idx} className="border-2 border-white rounded-full">
          <Avatar src={user.src} name={user.name} size={size} />
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`flex items-center justify-center rounded-full bg-gray-300 text-gray-700 font-semibold border-2 border-white ${
            size === "sm"
              ? "w-10 h-10 text-sm"
              : size === "lg"
              ? "w-20 h-20 text-lg"
              : "w-14 h-14 text-base"
          }`}
        >
          +{remaining}
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
