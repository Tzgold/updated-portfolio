
import React from 'react';
import { 
  PenTool, 
  Mic, 
  Users, 
  Atom, 
  Github, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone,
  Send,
  Code,
  ExternalLink,
  Sun,
  Moon,
  Download,
  Quote,
  User,
  Activity,
  MapPin,
  Globe,
  Cpu,
  Zap,
  ShoppingBag
} from 'lucide-react';

export const IconMap: Record<string, React.FC<{ className?: string, size?: number }>> = {
  PenTool,
  Mic,
  Users,
  Atom,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  Send,
  Code,
  ExternalLink,
  Sun,
  Moon,
  Download,
  Quote,
  User,
  Activity,
  MapPin,
  Globe,
  Cpu,
  Zap,
  ShoppingBag
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} size={size} />;
};
