import { Link, useLocation } from "react-router-dom";

interface LanguageToggleProps {
  isZh: boolean;
}

export default function LanguageToggle({ isZh }: LanguageToggleProps) {
  const location = useLocation();
  
  const currentPath = location.pathname;
  
  const cnLink = currentPath.startsWith("/en") ? currentPath.replace("/en", "") || "/" : currentPath;
  const enLink = currentPath.startsWith("/en") ? currentPath : `/en${currentPath === "/" ? "" : currentPath}`;

  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-gray-100 rounded-lg p-0.5">
      <Link
        to={cnLink}
        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          isZh
            ? "bg-[#4D21D0] text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        中
      </Link>
      <Link
        to={enLink}
        className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          !isZh
            ? "bg-[#4D21D0] text-white"
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        EN
      </Link>
    </div>
  );
}