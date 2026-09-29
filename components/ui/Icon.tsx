import {
  Boxes, Users, LayoutGrid, Sparkles, Code2, Globe, Workflow, Server, Mail, TrendingUp,
  Bot, Package, FileText, UserRound, MessageCircle, Smartphone,
  Factory, Truck, Briefcase, GraduationCap, HeartPulse, Store, Rocket, Building2, Sun, Terminal,
  type LucideIcon,
} from "lucide-react";

// One icon vocabulary for the whole site — pick names here, not raw lucide
// imports in components, so icons stay consistent.
const ICONS = {
  // services
  erp: Boxes, crm: Users, zoho: LayoutGrid, ai: Sparkles, code: Code2, web: Globe,
  link: Workflow, server: Server, mail: Mail, growth: TrendingUp,
  // projects
  bot: Bot, box: Package, file: FileText, users: UserRound, chat: MessageCircle, phone: Smartphone,
  // industries
  factory: Factory, truck: Truck, briefcase: Briefcase, school: GraduationCap, health: HeartPulse,
  store: Store, rocket: Rocket, building: Building2, sun: Sun, terminal: Terminal,
} satisfies Record<string, LucideIcon>;

export type IconKey = keyof typeof ICONS;

export default function Icon({ name, size }: { name: IconKey; size?: number }) {
  const Cmp = ICONS[name];
  return <Cmp aria-hidden="true" strokeWidth={1.8} size={size} />;
}
