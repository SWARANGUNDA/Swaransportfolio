export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectDecision {
  decision: string;
  rationale: string;
}

export interface ArchitectureNode {
  step: string;
  name: string;
  role: string;
  details: string;
  tech: string[];
  status: 'Implemented' | 'Architecture Blueprint' | 'Experimental Model';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: 'AI / Healthcare' | 'Cybersecurity / NLP' | 'Full-Stack Web' | 'Hardware & MedTech';
  badge: string;
  shortDescription: string;
  // A. Project Overview
  overview: string;
  // B. Problem Statement
  problemStatement: string;
  // C. Motivation
  motivation: string;
  // D. Proposed Solution
  proposedSolution: string;
  // E. System Architecture
  architecture: {
    overview: string;
    layers: { name: string; description: string; tech: string[] }[];
    pipelineNodes?: ArchitectureNode[];
  };
  // F. Technology Stack
  technologies: string[];
  // G. Core Features
  keyFeatures: string[];
  // H. My Implementation and Contribution
  swaranContribution: string[];
  // I. Technical Challenges & J. Solutions and Engineering Decisions
  technicalChallenges?: ProjectChallenge[];
  engineeringDecisions?: ProjectDecision[];
  // Distinction of implementation status
  implementationNotes?: {
    implemented: string[];
    proposed: string[];
  };
  // K. Demonstration & Illustrative Data Notice
  demoNotice?: string;
  previewImage?: string;
  // L. Future Improvements
  futureImprovements: string[];
  // M. GitHub and Live Demo
  githubUrl: string;
  githubStatus?: string;
  liveDemoUrl?: string;
  liveDemoStatus?: string;
  status: 'Completed' | 'Active Research' | 'Prototype Developed';
  accentColor: string;
  metricsOrHighlights?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    focus: string;
    level?: 'Foundational' | 'Advanced' | 'Core Expertise';
    highlight?: boolean;
  }[];
}

export interface TimelineItem {
  id: string;
  period: string;
  type: 'Education' | 'Research' | 'Hackathon / SIH' | 'Development' | 'Milestone';
  title: string;
  organization: string;
  location: string;
  description: string;
  tags: string[];
  highlights?: string[];
  isCurrent?: boolean;
}

export interface AchievementItem {
  id: string;
  category: 'Academic' | 'Hackathon & Competitions' | 'Technical Milestone' | 'Certification';
  title: string;
  organization: string;
  dateOrPeriod: string;
  detail: string;
  verifiedStatus: 'Verified Record' | 'Official Academic' | 'Continuous Learning';
  tag: string;
  placeholderNotice?: string;
}

export interface ResearchFocus {
  id: string;
  title: string;
  domain: string;
  summary: string;
  keyQuestions: string[];
  associatedProject?: string;
  status: 'Active Exploration' | 'Applied Architecture' | 'Literature Review & Prototyping';
  methods: string[];
}

export interface PortfolioConfig {
  personal: {
    name: string;
    initials: string;
    avatarUrl?: string;
    titles: string[];
    tagline: string;
    heroHeadline: string;
    heroSubheadline: string;
    availability: {
      status: string;
      isAvailable: boolean;
      detail: string;
    };
    bio: {
      lead: string;
      paragraphs: string[];
      values: { title: string; desc: string }[];
    };
    education: {
      degree: string;
      field: string;
      institution: string;
      institutionShort: string;
      location: string;
      cgpa: string;
      cgpaScale: string;
      period: string;
    };
    contact: {
      email: string;
      github: string;
      linkedinPlaceholder: string;
      location: string;
      timezone: string;
    };
  };
  navigation: { label: string; href: string }[];
  projects: Project[];
  skillCategories: SkillCategory[];
  timeline: TimelineItem[];
  achievements: AchievementItem[];
  researchAreas: ResearchFocus[];
  personality: {
    headline: string;
    quote: string;
    pillars: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
}

