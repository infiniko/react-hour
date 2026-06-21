import {
  ChartLineIcon,
  ReadCvLogoIcon,
  StackPlusIcon,
} from "@phosphor-icons/react";
type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <StackPlusIcon size={32} weight="duotone" />,
  },
  {
    href: "/jobs",
    label: "all jobs",
    icon: <ReadCvLogoIcon size={32} weight="duotone" />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <ChartLineIcon size={32} weight="duotone" />,
  },
];

export default links;
