import * as ReactIcons from "react-icons/fa";

interface IIconComponent {
  icon: string;
  size?: number;
  children?: any;
}
type IReactIcon = keyof typeof ReactIcons;
const IconComponent = ({ icon, size, children }: IIconComponent) => {
  const DynamicIconComponent = ReactIcons[icon as IReactIcon];

  if (undefined === DynamicIconComponent) return <></>;

  return <DynamicIconComponent size={size} {...children} />;
};

export default IconComponent;
