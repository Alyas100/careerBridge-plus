import {
  AlertTriangle,
  Archive,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  Car,
  Check,
  ChevronRight,
  ClipboardCheck,
  Clock,
  Cloud,
  Code2,
  Database,
  DollarSign,
  GitBranch,
  Globe,
  GraduationCap,
  Handshake,
  Landmark,
  LayoutDashboard,
  LogOut,
  Mail,
  MapPin,
  Network,
  PlayCircle,
  Plus,
  Puzzle,
  Radio,
  Route,
  Search,
  Send,
  Settings,
  Shield,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Terminal,
  TrendingDown,
  TrendingUp,
  User,
  UserSearch,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  add: Plus,
  dashboard: LayoutDashboard,
  work: Briefcase,
  account_tree: GitBranch,
  event: Calendar,
  warning: AlertTriangle,
  error: AlertTriangle,
  extension: Puzzle,
  route: Route,
  psychology: Brain,
  person: User,
  auto_stories: BookOpen,
  person_search: UserSearch,
  analytics: BarChart3,
  settings: Settings,
  logout: LogOut,
  auto_awesome: Sparkles,
  school: GraduationCap,
  search: Search,
  notifications: Bell,
  group: Users,
  fact_check: ClipboardCheck,
  schedule: Clock,
  handshake: Handshake,
  trending_down: TrendingDown,
  trending_up: TrendingUp,
  location_on: MapPin,
  payments: DollarSign,
  send: Send,
  check: Check,
  arrow_back: ArrowLeft,
  arrow_forward: ArrowRight,
  mail: Mail,
  target: Target,
  model_training: Bot,
  code: Code2,
  cloud: Cloud,
  hub: Network,
  terminal: Terminal,
  database: Database,
  smartphone: Smartphone,
  security: Shield,
  close: X,
  chevron_right: ChevronRight,
  calendar_today: Calendar,
  verified: BadgeCheck,
  public: Globe,
  business: Building2,
  directions_car: Car,
  account_balance: Landmark,
  shopping_bag: ShoppingBag,
  cell_tower: Radio,
  play_circle: PlayCircle,
  archive: Archive,
};

function getIconSize(className: string): number {
  const pxMatch = className.match(/text-\[(\d+)px\]/);
  if (pxMatch) return Number(pxMatch[1]);
  if (className.includes("text-3xl")) return 30;
  return 24;
}

export function PortalIcon({
  name,
  filled = false,
  className = "",
}: {
  name: string;
  filled?: boolean;
  className?: string;
}) {
  const Icon = ICON_MAP[name];
  if (!Icon) return null;

  const size = getIconSize(className);

  return (
    <Icon
      aria-hidden
      size={size}
      className={`shrink-0 ${className}`.trim()}
      strokeWidth={filled ? 2.5 : 2}
    />
  );
}
