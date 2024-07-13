import { icons } from "lucide-react-native";
import { colors } from "../../constants/Colors";

const Icon = ({
  name,
  color = "gray",
  size = 30,
  fill = "transparent",
  stroke = 0,
}) => {
  const LucideIcon = icons[name];

  return (
    <LucideIcon color={color} size={size} fill={fill} strokeWidth={stroke} />
  );
};

export default Icon;
