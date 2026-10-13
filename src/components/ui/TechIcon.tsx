import React from 'react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiLinux,
  SiFramer,
  SiTypescript,
} from 'react-icons/si';
import { FaAws, FaCss3Alt } from 'react-icons/fa6';
import { VscVscode } from 'react-icons/vsc';
import { BarChart3, Database, Network, MessageSquare, Wrench } from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'w-5 h-5' }: TechIconProps) {
  const norm = name.toLowerCase();

  if (norm.includes('react')) return <SiReact className={className} />;
  if (norm.includes('next')) return <SiNextdotjs className={className} />;
  if (norm.includes('tailwind')) return <SiTailwindcss className={className} />;
  if (norm.includes('javascript') || norm === 'js') return <SiJavascript className={className} />;
  if (norm.includes('typescript') || norm === 'ts') return <SiTypescript className={className} />;
  if (norm.includes('python')) return <SiPython className={className} />;
  if (norm.includes('html')) return <SiHtml5 className={className} />;
  if (norm.includes('css')) return <FaCss3Alt className={className} />;
  if (norm.includes('aws')) return <FaAws className={className} />;
  if (norm.includes('linux')) return <SiLinux className={className} />;
  if (norm === 'git') return <SiGit className={className} />;
  if (norm.includes('github')) return <SiGithub className={className} />;
  if (norm.includes('sql') || norm.includes('postgres')) return <SiPostgresql className={className} />;
  if (norm.includes('vs code') || norm.includes('vscode')) return <VscVscode className={className} />;
  if (norm.includes('framer')) return <SiFramer className={className} />;
  if (norm.includes('power bi') || norm.includes('powerbi')) return <BarChart3 className={className} />;
  if (norm.includes('subnet') || norm.includes('network')) return <Network className={className} />;
  if (norm.includes('communication') || norm.includes('collaboration')) return <MessageSquare className={className} />;
  
  return <Wrench className={className} />;
}
