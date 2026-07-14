const colors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const CourseBadge = ({ level }) => {
  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${colors[level]}`}
    >
      {level}
    </span>
  );
};

export default CourseBadge;