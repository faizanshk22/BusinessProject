import {
  FaReact,
  FaVuejs,
  FaLaravel,
  FaNodeJs,
  FaDocker,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiFigma,
  SiAndroid,
  SiTestinglibrary,
} from "react-icons/si";

const icons = {
  "UX/UI Design": <SiFigma size={32} />,
  "React JS": <FaReact size={32} />,
  "React Native": <SiAndroid size={32} />,
  "Vue JS": <FaVuejs size={32} />,
  Laravel: <FaLaravel size={32} />,
  "MERN Stack": <SiMongodb size={32} />,
  "MEAN Stack": <FaNodeJs size={32} />,
  DevOps: <FaDocker size={32} />,
  "Quality Assurance": <SiTestinglibrary size={32} />,
  Others: "💡",
};

export default function TechnologyCard({
  title,
  selected,
  onClick,
}) {
  return (
    <div
      className={`tech ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <div className="icon">
        {icons[title]}
      </div>

      <span>{title}</span>
    </div>
  );
}