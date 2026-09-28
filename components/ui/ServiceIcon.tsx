import {
  Boxes,
  Users,
  Sparkles,
  Code2,
  Globe,
  Server,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/services";

const ICONS: Record<IconName, LucideIcon> = {
  erp: Boxes,
  crm: Users,
  ai: Sparkles,
  code: Code2,
  web: Globe,
  server: Server,
  growth: TrendingUp,
  link: Workflow,
};

export default function ServiceIcon({ name }: { name: IconName }) {
  const Icon = ICONS[name];
  return <Icon aria-hidden="true" strokeWidth={1.8} />;
}
