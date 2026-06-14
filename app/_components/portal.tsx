"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

import { PortalIcon } from "./portal-icon";

type EmptyStatePageProps = {
  title: string;
  description: string;
  icon: string;
  value: string;
  label: string;
  actionHref: string;
  actionLabel: string;
};

export function EmptyStatePage({
  title,
  description,
  icon,
  value,
  label,
  actionHref,
  actionLabel,
}: EmptyStatePageProps) {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-background/90 backdrop-blur-md border-b border-outline-variant/10">
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
          {title}
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
            aria-label="Search"
          >
            <PortalIcon name="search" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative"
            aria-label="Notifications"
          >
            <PortalIcon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
        </div>
      </header>
      <main className="flex-1 flex flex-col items-center justify-center p-margin-desktop max-w-container-max mx-auto w-full">
        <div className="w-20 h-20 rounded-full bg-primary-fixed flex items-center justify-center text-primary mb-6">
          <PortalIcon name={icon} className="text-[36px]" />
        </div>
        <h2 className="font-headline-lg text-headline-lg font-bold text-primary text-center mb-2">
          {title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant text-center max-w-md mb-8">
          {description}
        </p>
        <div className="flex items-center gap-2 mb-8">
          <span className="font-mono-numbers text-headline-sm font-bold text-primary">
            {value}
          </span>
          <span className="font-label-lg text-label-lg text-on-surface-variant">
            {label}
          </span>
        </div>
        <Link
          href={actionHref}
          className="px-8 py-4 bg-gradient-primary-c text-on-primary rounded-full font-title-md text-title-md font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-card-soft"
        >
          <PortalIcon name="add" /> {actionLabel}
        </Link>
      </main>
    </div>
  );
}

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "Remote",
    pay: "$140k - $180k",
    applicants: 47,
    status: "Screening",
    pipeline: {
      screen: 12,
      technical: 8,
      offer: 2,
    },
    postedDate: "2026-06-01",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Designer",
    dept: "Design",
    location: "New York / Hybrid",
    pay: "$110k - $140k",
    applicants: 31,
    status: "Interview",
    pipeline: {
      screen: 8,
      portfolio: 5,
      offer: 1,
    },
    postedDate: "2026-05-28",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Data Analyst",
    dept: "Data",
    location: "London / Hybrid",
    pay: "$90k - $120k",
    applicants: 23,
    status: "Offer",
    pipeline: {
      screen: 6,
      technical: 4,
      offer: 3,
    },
    postedDate: "2026-05-25",
    type: "Contract",
  },
  {
    id: 4,
    title: "Backend Engineer",
    dept: "Engineering",
    location: "San Francisco / On-site",
    pay: "$150k - $190k",
    applicants: 52,
    status: "Screening",
    pipeline: {
      screen: 15,
      technical: 10,
      offer: 1,
    },
    postedDate: "2026-06-05",
    type: "Full-time",
  },
  {
    id: 5,
    title: "UX Researcher",
    dept: "Design",
    location: "Remote",
    pay: "$95k - $125k",
    applicants: 18,
    status: "Draft",
    pipeline: {
      screen: 0,
      technical: 0,
      offer: 0,
    },
    postedDate: "2026-06-07",
    type: "Part-time",
  },
  {
    id: 6,
    title: "DevOps Engineer",
    dept: "Engineering",
    location: "Austin / Hybrid",
    pay: "$130k - $170k",
    applicants: 38,
    status: "Interview",
    pipeline: {
      screen: 10,
      technical: 6,
      offer: 0,
    },
    postedDate: "2026-06-02",
    type: "Full-time",
  },
] as const;

const DEPARTMENTS = ["All", "Engineering", "Design", "Data"] as const;
const JOB_STATUSES = ["All", "Active", "Draft", "Closed"] as const;

const employerMenuItems = [
  { path: "/employer", label: "Dashboard", icon: "dashboard" },
  { path: "/employer/jobs", label: "Jobs", icon: "work" },
  { path: "/employer/pipeline", label: "Pipeline", icon: "account_tree" },
  { path: "/employer/interviews", label: "Interviews", icon: "event" },
  { path: "/employer/archive", label: "Archive", icon: "archive" },
];

const studentMenuItems = [
  { path: "/student", label: "Dashboard", icon: "dashboard" },
  { path: "/student/paths", label: "Career Paths", icon: "route" },
  { path: "/student/gaps", label: "Skill Gaps", icon: "psychology" },
  { path: "/student/jobs", label: "Internships", icon: "work" },
  { path: "/student/profile", label: "Profile", icon: "person" },
] as const;

const universityMenuItems = [
  { path: "/university", label: "Dashboard", icon: "dashboard" },
  {
    path: "/university/curriculum",
    label: "Curriculum Intel",
    icon: "auto_stories",
  },
  { path: "/university/talent", label: "Talent Pool", icon: "person_search" },
  { path: "/university/analytics", label: "Analytics", icon: "analytics" },
] as const;

export function EmployerSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const activeIndex = employerMenuItems.findIndex((item) => item.path === pathname);

  return (
    <nav className="hidden md:flex flex-col h-screen p-4 border-r border-outline-variant/20 bg-surface-container-low fixed left-0 top-0 w-sidebar-width z-40">
      <div
        className="mb-8 px-3 pt-2 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h1 className="font-title-lg text-title-lg font-bold text-primary">
          CareerBridge+
        </h1>
        <p className="font-label-sm text-label-sm text-on-surface-variant mt-1">
          Recruitment Suite
        </p>
      </div>
      <Link
        href="/employer/post-job"
        className="mb-6 w-full py-3 px-4 bg-gradient-primary-c text-on-primary rounded-full font-label-lg text-label-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
      >
        <PortalIcon name="add" /> New Opening
      </Link>
      <div className="flex-1 relative space-y-1">
        {/* Smooth sliding active tab indicator */}
        {activeIndex !== -1 && (
          <div
            className="absolute left-0 right-0 bg-secondary-fixed border-l-[3px] border-secondary rounded-xl transition-all duration-500 ease-in-out pointer-events-none"
            style={{
              height: "48px",
              top: `${activeIndex * 52}px`,
            }}
          />
        )}
        {employerMenuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`relative z-10 p-3 h-12 rounded-xl flex items-center gap-3 transition-colors duration-500 ${
                isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-high/40"
              }`}
            >
              <PortalIcon name={item.icon} filled={isActive} />
              <span className="font-body-md text-body-md">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/20">
        <Link
          href="/employer/settings"
          className={`p-3 rounded-xl flex items-center gap-3 transition-colors w-full text-left ${
            pathname === "/employer/settings"
              ? "bg-secondary-fixed border-l-[3px] border-secondary text-primary font-bold"
              : "text-on-surface-variant hover:bg-surface-container-high"
          }`}
        >
          <PortalIcon name="settings" filled={pathname === "/employer/settings"} />
          <span className="font-body-md text-body-md">Settings</span>
        </Link>
        <div className="mt-4 p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-lg overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8A5X2V29ZnAjMx6jY1cLmzENQwqDQl_hd4pF05SXqEMrgaVxBKkzWQFs6BBxvxlfWT7A3vkTk-devkbQN1yrMw0MGpaW4C9A1yK0JL2qnk64hAqWeoPIWOV_2zLmwz5DHXdhxpxl150_UMdOny4m-ce2Fkq-_3E2PLnQMc6Rkz46IbFewmuI1Jo50wrJkoEll_c3roaNUAvCNbG2syeai8sSXrUdwPgNzUYZNKZgutz34zQab0taRwtSF-Je9tS-30Xrrbp_pwr0"
              className="w-full h-full object-cover"
              alt="Sarah Connor"
            />
          </div>
          <div>
            <p className="font-label-lg text-label-lg text-on-surface">
              Sarah Connor
            </p>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Lead Recruiter
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

const INTERVIEW_NAV = [
  { key: "overview", label: "Overview", icon: "person" },
  { key: "evaluation", label: "Evaluation", icon: "fact_check" },
  { key: "experience", label: "Experience", icon: "work" },
  { key: "insights", label: "Insights", icon: "psychology" },
  { key: "history", label: "History", icon: "schedule" },
] as const;

type InterviewTab = (typeof INTERVIEW_NAV)[number]["key"];

export function InterviewsPage() {
  const [activeTab, setActiveTab] = useState<InterviewTab>("overview");

  const SCORE_CARDS = [
    { label: "Technical Setup", value: 92 },
    { label: "System Design", value: 88 },
    { label: "Communication", value: 84 },
  ];

  const SKILL_MATRIX = [
    {
      skill: "React & Hooks",
      level: "Advanced",
      levelColor: "text-secondary",
      desc: "Demonstrated deep understanding of useMemo, useCallback, and custom hook architecture during the live coding segment.",
      tags: ["Performance", "State Mgmt"],
    },
    {
      skill: "TypeScript Integration",
      level: "Proficient",
      levelColor: "text-[#7C4A00]",
      desc: "Effectively used generic types and interfaces. Slight hesitation on complex utility types but ultimately arrived at correct solutions.",
      tags: ["Generics", "Strict Mode"],
    },
  ];

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-[#F4F2FF] flex flex-col">
      {/* Purple candidate header */}
      <div className="bg-[#26215C] px-8 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-bold text-white leading-tight">
            Sarah Connor
          </h1>
          <p className="text-sm text-white/70 mt-0.5">
            Senior Frontend Engineer Role
          </p>
        </div>
        <span className="flex items-center gap-2 bg-white/10 border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full">
          <PortalIcon
            name="check_circle"
            className="text-[15px] text-[#A8F0C6]"
          />
          Screening Complete
        </span>
      </div>

      <div className="flex flex-1 min-h-0">
        {/* Interview portal left nav */}
        <aside className="w-[180px] bg-white border-r border-outline-variant/20 flex flex-col py-6 px-3 shrink-0">
          <p className="text-[10px] font-bold uppercase tracking-widest text-outline px-3 mb-4">
            Candidate Review
          </p>
          <nav className="flex flex-col gap-1 flex-1">
            {INTERVIEW_NAV.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-bold transition-all text-left ${
                  activeTab === item.key
                    ? "bg-[#EEEDFE] text-[#26215C] animate-tab-indicator"
                    : "text-on-surface-variant hover:bg-surface-container-low"
                }`}
              >
                <PortalIcon
                  name={item.icon}
                  filled={activeTab === item.key}
                  className="text-[18px] shrink-0"
                />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Schedule Next button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 bg-[#26215C] hover:bg-[#534AB7] text-white text-sm font-bold py-3 rounded-full transition-colors mt-4"
          >
            Schedule Next
            <PortalIcon name="calendar_today" className="text-[14px]" />
          </button>

          <div className="mt-6 pt-4 border-t border-outline-variant/20 space-y-1">
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 text-xs text-on-surface-variant hover:text-primary transition-colors w-full"
            >
              <PortalIcon name="help" className="text-[16px]" />
              Help Center
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-3 py-2 text-xs text-on-surface-variant hover:text-primary transition-colors w-full"
            >
              <PortalIcon name="logout" className="text-[16px]" />
              Log Out
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto pb-24">
          <div key={activeTab} className="max-w-5xl mx-auto animate-tab-enter animate-tab-children">
            {activeTab === "overview" && (
              <div className="flex flex-col gap-6">
                {/* Hero Banner */}
                <section className="bg-gradient-hero-a rounded-xl p-card-padding flex flex-col justify-end min-h-[180px] relative overflow-hidden text-on-primary animate-fade-in">
                  <div className="absolute -top-24 -right-24 w-64 h-64 bg-surface-bright rounded-full mix-blend-overlay opacity-30 blur-3xl"></div>
                  <div className="relative z-10 flex flex-col gap-2">
                    <h2 className="font-headline-lg text-headline-lg">Sarah Connor</h2>
                    <p className="font-title-md text-title-md flex items-center gap-2 opacity-90">
                      <PortalIcon name="work" className="text-[20px]" />
                      Senior Frontend Engineer Application
                    </p>
                  </div>
                </section>

                {/* 3-Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Left Column: Match Score & Summary */}
                  <div className="lg:col-span-3 flex flex-col gap-6">
                    {/* Match Score Card */}
                    <div className="bg-white rounded-xl p-6 shadow-card-soft border border-surface-container-highest flex flex-col items-center text-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a"></div>
                      <span className="font-label-lg text-label-lg text-on-surface-variant mb-2">AI Match Score</span>
                      <div className="font-mono-numbers text-[57px] font-bold text-primary tracking-tight">
                        94<span className="text-headline-sm font-normal text-on-surface-variant">%</span>
                      </div>
                      <div className="mt-4 bg-surface-container px-3 py-1.5 rounded-full flex items-center gap-2">
                        <PortalIcon name="check_circle" className="text-[16px] text-secondary" filled />
                        <span className="font-label-sm text-label-sm text-secondary">Highly Recommended</span>
                      </div>
                    </div>

                    {/* AI Summary Card */}
                    <div className="bg-white rounded-xl p-6 shadow-card-soft border border-surface-container-highest flex flex-col gap-3">
                      <div className="flex items-center gap-2 text-primary">
                        <PortalIcon name="auto_awesome" />
                        <h3 className="font-title-md text-title-md">AI Summary</h3>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        Elena presents a strong profile aligning exceptionally well with the Senior Frontend requirements. Her deep expertise in React and modern state management, combined with architectural experience, makes her a prime candidate. Minor gap in specific CI/CD tooling requested, but core competencies are excellent.
                      </p>
                    </div>
                  </div>

                  {/* Center Column: Skill Assessment */}
                  <div className="lg:col-span-5 bg-white rounded-xl p-card-padding shadow-card-soft border border-surface-container-highest flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-title-lg text-title-lg text-on-surface">Skill Assessment</h3>
                    </div>
                    <div className="flex flex-col gap-5">
                      {/* React */}
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                          <span className="font-label-lg text-label-lg text-on-surface font-bold">React Ecosystem</span>
                          <span className="font-label-sm text-label-sm text-secondary">Expert (98%)</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-hero-a rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                      {/* TypeScript */}
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                          <span className="font-label-lg text-label-lg text-on-surface font-bold">TypeScript</span>
                          <span className="font-label-sm text-label-sm text-secondary">Advanced (90%)</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-hero-a rounded-full" style={{ width: "90%" }}></div>
                        </div>
                      </div>
                      {/* System Design */}
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                          <span className="font-label-lg text-label-lg text-on-surface font-bold">Frontend System Design</span>
                          <span className="font-label-sm text-label-sm text-secondary">Advanced (85%)</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-hero-a rounded-full" style={{ width: "85%" }}></div>
                        </div>
                      </div>
                      {/* Testing */}
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-end">
                          <span className="font-label-lg text-label-lg text-on-surface font-bold">Testing (Jest/Cypress)</span>
                          <span className="font-label-sm text-label-sm text-outline font-bold">Intermediate (75%)</span>
                        </div>
                        <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                          <div className="h-full bg-surface-tint rounded-full opacity-70" style={{ width: "75%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Profile Details */}
                  <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="bg-white rounded-xl p-card-padding shadow-card-soft border border-surface-container-highest h-full flex flex-col gap-6">
                      <h3 className="font-title-lg text-title-lg text-on-surface">Profile Details</h3>
                      <ul className="flex flex-col gap-5">
                        <li className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                            <PortalIcon name="history" className="text-primary" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Total Experience</span>
                            <span className="font-body-lg text-body-lg text-on-surface font-medium">8+ Years</span>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                            <PortalIcon name="location_on" className="text-primary" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Location</span>
                            <span className="font-body-lg text-body-lg text-on-surface font-medium">Austin, TX (Remote)</span>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                            <PortalIcon name="payments" className="text-primary" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Salary Expectation</span>
                            <span className="font-body-lg text-body-lg text-on-surface font-medium">$160k - $175k / yr</span>
                            <span className="font-body-md text-body-md text-outline">Within budget range</span>
                          </div>
                        </li>
                        <li className="flex gap-4 items-start">
                          <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center shrink-0">
                            <PortalIcon name="school" className="text-primary" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Education</span>
                            <span className="font-body-lg text-body-lg text-on-surface font-medium">BS Computer Science</span>
                            <span className="font-body-md text-body-md text-outline">University of Texas</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="flex-grow overflow-y-auto timeline-scroll animate-fade-in">
                <div className="max-w-[1000px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Sidebar Summary */}
                  <div className="lg:col-span-4 flex flex-col gap-6 sticky top-0">
                    {/* Total Experience Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden group hover:shadow-card-soft transition-all duration-300">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a"></div>
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-title-md text-title-md text-on-surface">Total Experience</h3>
                        <PortalIcon name="timer" className="text-secondary" />
                      </div>
                      <div className="flex items-end gap-2 mb-2">
                        <span className="font-display-lg text-[57px] leading-none font-bold text-primary tracking-tight">8.5</span>
                        <span className="font-body-md text-body-md text-on-surface-variant pb-2">Years</span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Consistent progression in high-growth tech environments.</p>
                    </div>

                    {/* Top Industries Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a"></div>
                      <h3 className="font-title-md text-title-md text-on-surface mb-6">Top Industries</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between font-label-lg text-label-lg mb-2">
                            <span className="text-on-surface">FinTech</span>
                            <span className="text-on-surface-variant">4 yrs</span>
                          </div>
                          <div className="w-full bg-surface-container-high rounded-full h-2">
                            <div className="bg-secondary h-2 rounded-full" style={{ width: "47%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-lg text-label-lg mb-2">
                            <span className="text-on-surface">SaaS Enterprise</span>
                            <span className="text-on-surface-variant">3 yrs</span>
                          </div>
                          <div className="w-full bg-surface-container-high rounded-full h-2">
                            <div className="bg-[#ccbeff] h-2 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between font-label-lg text-label-lg mb-2">
                            <span className="text-on-surface">E-Commerce</span>
                            <span className="text-on-surface-variant">1.5 yrs</span>
                          </div>
                          <div className="w-full bg-surface-container-high rounded-full h-2">
                            <div className="bg-outline-variant h-2 rounded-full" style={{ width: "18%" }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skill Overlap */}
                    <div className="bg-surface-container-low rounded-2xl p-6 border border-outline-variant/30 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center flex-shrink-0">
                        <PortalIcon name="auto_awesome" />
                      </div>
                      <div>
                        <h4 className="font-label-lg text-label-lg text-on-surface mb-1">AI Match Insight</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed font-normal">Experience aligns 94% with the Senior Frontend Engineer requisition criteria.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Timeline Content */}
                  <div className="lg:col-span-8 relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-8 bottom-8 w-px bg-outline-variant/50"></div>

                    {/* Experience Entry 1 */}
                    <div className="relative pl-16 mb-8 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-primary border-4 border-[#F4F2FF] shadow-sm z-10 group-hover:scale-125 transition-transform"></div>
                      {/* Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-soft">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                          <div>
                            <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Lead Frontend Architect</h3>
                            <div className="font-title-md text-title-md text-primary">Nova Financial Systems</div>
                          </div>
                          <div className="font-mono-numbers text-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg flex-shrink-0 border border-outline-variant/30">
                            Mar 2021 — Present
                          </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                          Directed end-to-end frontend strategy for a suite of enterprise FinTech applications, focusing on scalable design systems and improving complex data visualization tools.
                        </p>
                        <h4 className="font-label-lg text-label-lg text-on-surface mb-3 flex items-center gap-2">
                          <PortalIcon name="star" className="text-sm text-secondary" filled />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-primary mt-0.5 text-[18px]" filled />
                            <span>Spearheaded the migration to a unified React-based design system, reducing design-to-development handoff time by 40% across 5 product teams.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-primary mt-0.5 text-[18px]" filled />
                            <span>Redesigned the core analytics dashboard, resulting in a 22% increase in daily active user engagement and a significant drop in support tickets.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-primary mt-0.5 text-[18px]" filled />
                            <span>Mentored a team of 3 mid-level developers, fostering a culture of continuous feedback and user-centric problem solving.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Experience Entry 2 */}
                    <div className="relative pl-16 mb-8 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-outline-variant border-4 border-[#F4F2FF] shadow-sm z-10 group-hover:bg-secondary transition-colors"></div>
                      {/* Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-soft">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                          <div>
                            <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Senior Frontend Engineer</h3>
                            <div className="font-title-md text-title-md text-primary">CloudScale Enterprise SaaS</div>
                          </div>
                          <div className="font-mono-numbers text-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg flex-shrink-0 border border-outline-variant/30">
                            Jan 2018 — Feb 2021
                          </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                          Led the user experience frontend redesign for cloud infrastructure management tools, translating complex backend operations into intuitive, accessible user interfaces in React and TypeScript.
                        </p>
                        <h4 className="font-label-lg text-label-lg text-on-surface mb-3 flex items-center gap-2">
                          <PortalIcon name="star" className="text-sm text-secondary" filled />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-outline mt-0.5 text-[18px]" filled />
                            <span>Conducted extensive user research with system administrators to simplify the server provisioning workflow, cutting completion time by half.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-outline mt-0.5 text-[18px]" filled />
                            <span>Introduced micro-interactions and progressive disclosure patterns that significantly lowered the cognitive load for new users.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Experience Entry 3 */}
                    <div className="relative pl-16 group">
                      {/* Timeline Dot */}
                      <div className="absolute left-[21px] top-6 w-3 h-3 rounded-full bg-outline-variant border-4 border-[#F4F2FF] shadow-sm z-10 group-hover:bg-secondary transition-colors"></div>
                      {/* Card */}
                      <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-soft">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-4 gap-2">
                          <div>
                            <h3 className="font-title-lg text-title-lg text-on-surface mb-1">Frontend Developer</h3>
                            <div className="font-title-md text-title-md text-primary">ShopCart E-Commerce</div>
                          </div>
                          <div className="font-mono-numbers text-sm text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-lg flex-shrink-0 border border-outline-variant/30">
                            Jun 2016 — Dec 2017
                          </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                          Collaborated with cross-functional teams to design responsive e-commerce storefronts and optimize the checkout funnel for higher conversion rates.
                        </p>
                        <h4 className="font-label-lg text-label-lg text-on-surface mb-3 flex items-center gap-2">
                          <PortalIcon name="star" className="text-sm text-secondary" filled />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                          <li className="flex items-start gap-3">
                            <PortalIcon name="check_circle" className="text-outline mt-0.5 text-[18px]" filled />
                            <span>Redesigned the mobile checkout process, contributing to a 15% increase in successful mobile transactions.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "evaluation" && (
              <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
                {/* Left: Overall match + score cards */}
                <div className="space-y-4">
                  {/* Overall Match card */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20">
                    <div className="flex items-start justify-between mb-3">
                      <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                        Overall Match
                      </p>
                      <PortalIcon
                        name="open_in_new"
                        className="text-[16px] text-outline"
                      />
                    </div>
                    <div className="flex items-end gap-3 mb-3">
                      <span className="font-mono-numbers text-[48px] font-bold text-[#26215C] leading-none">
                        88%
                      </span>
                      <span className="mb-2 px-2.5 py-0.5 rounded-full bg-[#EEEDFE] text-[#3C3489] text-[11px] font-bold uppercase tracking-wide">
                        High Fit
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Candidate demonstrates strong technical alignment with
                      core requirements, particularly in React and state
                      management.
                    </p>
                  </div>

                  {/* Score breakdown cards */}
                  {SCORE_CARDS.map((card) => (
                    <div
                      key={card.label}
                      className="bg-white rounded-2xl p-5 border border-outline-variant/20"
                    >
                      <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                        {card.label}
                      </p>
                      <p className="font-mono-numbers text-[32px] font-bold text-[#26215C] leading-none mb-3">
                        {card.value}%
                      </p>
                      <div className="w-full h-1.5 bg-[#EEEDFE] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#534AB7] rounded-full"
                          style={{ width: `${card.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right: Profile Summary + Skill Assessment */}
                <div className="space-y-4">
                  {/* Profile Summary */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20">
                    <h3 className="flex items-center gap-2 text-sm font-bold text-[#26215C] mb-5">
                      <PortalIcon
                        name="person"
                        className="text-[17px] text-secondary"
                      />
                      Profile Summary
                    </h3>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {[
                        { label: "Experience", value: "6.5 Yrs" },
                        { label: "Location", value: "Remote (EST)" },
                        { label: "Availability", value: "2 Weeks" },
                        { label: "Salary Exp.", value: "$135k – 145k" },
                      ].map((row) => (
                        <div key={row.label}>
                          <p className="text-xs text-outline mb-0.5">
                            {row.label}
                          </p>
                          <p className="text-sm font-bold text-[#26215C]">
                            {row.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Assessment Matrix */}
                  <div className="bg-white rounded-2xl p-6 border border-outline-variant/20">
                    <div className="flex items-center justify-between mb-5">
                      <h3 className="flex items-center gap-2 text-sm font-bold text-[#26215C]">
                        <PortalIcon
                          name="psychology"
                          className="text-[17px] text-secondary"
                        />
                        Skill Assessment Matrix
                      </h3>
                      <span className="text-xs text-on-surface-variant font-bold">
                        AI Confidence: High
                      </span>
                    </div>

                    <div className="space-y-5">
                      {SKILL_MATRIX.map((item) => (
                        <div key={item.skill}>
                          <div className="flex items-center justify-between mb-1">
                            <p className="text-sm font-bold text-[#26215C]">
                              {item.skill}
                            </p>
                            <span
                              className={`text-xs font-bold italic ${item.levelColor}`}
                            >
                              {item.level}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant leading-relaxed mb-2">
                            {item.desc}
                          </p>
                          <div className="flex gap-2 flex-wrap">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 rounded-full bg-[#F4F2FF] text-[#534AB7] text-[11px] font-bold"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <hr className="mt-4 border-outline-variant/20" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "insights" && (
              <div className="flex-grow overflow-y-auto timeline-scroll animate-fade-in">
                <div className="max-w-[1000px] mx-auto space-y-6">
                  {/* Header Banner */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#26215C] to-[#534AB7] p-6 text-white">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 70% 50%, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                    <div className="relative flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <PortalIcon name="auto_awesome" className="text-[20px] text-[#ccbeff]" filled />
                          <span className="text-xs font-bold uppercase tracking-widest text-[#ccbeff]">AI Candidate Insights</span>
                        </div>
                        <h2 className="font-title-lg text-title-lg font-bold mb-1">Sarah Connor</h2>
                        <p className="text-sm text-white/70">Senior Frontend Engineer · 8.5 yrs experience</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-[42px] font-bold leading-none font-mono">94%</div>
                        <div className="text-xs text-[#ccbeff] font-bold uppercase tracking-wide">Insight Score</div>
                      </div>
                    </div>
                  </div>

                  {/* Two-column grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-8 h-8 rounded-full bg-[#EEEDFE] flex items-center justify-center">
                          <PortalIcon name="trending_up" className="text-[18px] text-secondary" />
                        </div>
                        <h3 className="font-title-md text-title-md text-on-surface font-bold">Candidate Strengths</h3>
                      </div>
                      <div className="space-y-3">
                        {[
                          { title: "System Design Mastery", desc: "Demonstrated deep understanding of scalable architecture and design patterns in previous roles.", badge: "Expert" },
                          { title: "Cross-functional Leadership", desc: "Proven ability to lead teams across engineering, design, and product boundaries.", badge: "Strong" },
                          { title: "React Ecosystem Depth", desc: "Advanced proficiency in React, TypeScript, and state management paradigms.", badge: "Expert" },
                          { title: "Data-Driven UX", desc: "Track record of using analytics and user research to improve engagement metrics.", badge: "Strong" },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/20">
                            <PortalIcon name="check_circle" className="text-primary text-[20px] mt-0.5 flex-shrink-0" filled />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="font-label-lg text-label-lg text-on-surface font-bold text-sm">{item.title}</p>
                                <span className="px-2 py-0.5 rounded-full bg-[#EEEDFE] text-[#534AB7] text-[10px] font-bold uppercase">{item.badge}</span>
                              </div>
                              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Growth Areas */}
                    <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20">
                      <div className="flex items-center gap-2 mb-5">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                          <PortalIcon name="insights" className="text-[18px] text-amber-600" />
                        </div>
                        <h3 className="font-title-md text-title-md text-on-surface font-bold">Growth Opportunities</h3>
                      </div>
                      <div className="space-y-3">
                        {[
                          { title: "Backend Exposure", desc: "Limited server-side experience — may require onboarding support for full-stack tasks.", level: "Moderate" },
                          { title: "Mobile-Native Development", desc: "Primary expertise is web-based; React Native exposure is self-reported.", level: "Minor" },
                          { title: "DevOps Familiarity", desc: "CI/CD and deployment pipeline knowledge is entry-level based on interview responses.", level: "Minor" },
                        ].map((item) => (
                          <div key={item.title} className="flex items-start gap-3 p-3 rounded-xl bg-amber-50/50 border border-amber-100">
                            <PortalIcon name="arrow_circle_up" className="text-amber-500 text-[20px] mt-0.5 flex-shrink-0" filled />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-0.5">
                                <p className="font-label-lg text-label-lg text-on-surface font-bold text-sm">{item.title}</p>
                                <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-bold uppercase">{item.level}</span>
                              </div>
                              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Personality & Communication Style */}
                  <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-8 h-8 rounded-full bg-[#EEEDFE] flex items-center justify-center">
                        <PortalIcon name="psychology" className="text-[18px] text-secondary" />
                      </div>
                      <h3 className="font-title-md text-title-md text-on-surface font-bold">Behavioral & Communication Profile</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { trait: "Communication", value: 92, color: "#534AB7" },
                        { trait: "Collaboration", value: 88, color: "#534AB7" },
                        { trait: "Problem Solving", value: 95, color: "#534AB7" },
                        { trait: "Adaptability", value: 84, color: "#534AB7" },
                      ].map((item) => (
                        <div key={item.trait} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-surface-container-low border border-outline-variant/10">
                          <div className="relative w-16 h-16">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
                              <circle cx="32" cy="32" r="26" fill="none" stroke="#EEEDFE" strokeWidth="8" />
                              <circle cx="32" cy="32" r="26" fill="none" stroke={item.color} strokeWidth="8" strokeLinecap="round"
                                strokeDasharray={`${2 * Math.PI * 26}`}
                                strokeDashoffset={`${2 * Math.PI * 26 * (1 - item.value / 100)}`} />
                            </svg>
                            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-[#26215C]">{item.value}</span>
                          </div>
                          <p className="text-xs font-bold text-on-surface text-center">{item.trait}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hiring Recommendation */}
                  <div className="bg-gradient-to-r from-[#EEEDFE] to-[#F4F2FF] rounded-2xl p-6 border border-[#534AB7]/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#534AB7] flex items-center justify-center flex-shrink-0">
                      <PortalIcon name="recommend" className="text-white text-[20px]" filled />
                    </div>
                    <div>
                      <h4 className="font-label-lg text-label-lg text-[#26215C] font-bold mb-1">AI Hiring Recommendation</h4>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Sarah Connor is a strong candidate for the Senior Frontend Engineer position. Her deep expertise in React, TypeScript, and scalable design systems directly aligns with core role requirements. The 94% insight score reflects high confidence in her technical fit and collaborative profile. <span className="font-bold text-[#26215C]">Recommend proceeding to final round.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div className="flex-grow overflow-y-auto timeline-scroll animate-fade-in">
                <div className="max-w-[800px] mx-auto space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-title-lg text-title-lg text-on-surface font-bold">Interview History</h2>
                      <p className="text-sm text-on-surface-variant mt-0.5">Complete timeline of interactions with Sarah Connor</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-[#EEEDFE] text-[#534AB7] text-xs font-bold">4 Sessions</span>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-outline-variant/40" />
                    <div className="space-y-6">
                      {[
                        {
                          stage: "Final Round Interview",
                          date: "Jun 10, 2025",
                          time: "2:00 PM – 3:30 PM",
                          interviewer: "Sarah Chen · Engineering Director",
                          status: "Completed",
                          statusColor: "bg-emerald-100 text-emerald-700",
                          dotColor: "bg-primary",
                          notes: "Excellent system design discussion. Candidate demonstrated deep understanding of microservices and frontend architecture patterns. Strong cultural alignment observed.",
                          tags: ["System Design", "Architecture", "Leadership"],
                        },
                        {
                          stage: "Technical Assessment",
                          date: "Jun 4, 2025",
                          time: "10:00 AM – 11:30 AM",
                          interviewer: "Marcus Lee · Senior Engineer",
                          status: "Completed",
                          statusColor: "bg-emerald-100 text-emerald-700",
                          dotColor: "bg-secondary",
                          notes: "Completed live coding challenge with React. Solved all 3 problems within time. Code quality and communication were both above average.",
                          tags: ["React", "TypeScript", "Live Coding"],
                        },
                        {
                          stage: "Recruiter Screen",
                          date: "May 28, 2025",
                          time: "3:30 PM – 4:00 PM",
                          interviewer: "Aisha Patel · Recruiter",
                          status: "Completed",
                          statusColor: "bg-emerald-100 text-emerald-700",
                          dotColor: "bg-outline-variant",
                          notes: "Initial screening completed. Candidate confirmed availability, salary expectations ($135k–$145k), and remote-first preference. Strong motivation for the role.",
                          tags: ["Screening", "Compensation", "Availability"],
                        },
                        {
                          stage: "Application Received",
                          date: "May 20, 2025",
                          time: "Via LinkedIn",
                          interviewer: "Automated Pipeline",
                          status: "Archived",
                          statusColor: "bg-surface-container text-on-surface-variant",
                          dotColor: "bg-outline-variant",
                          notes: "Application submitted through LinkedIn. Resume and portfolio reviewed by AI screening system. Score: 91/100 — advanced to recruiter queue.",
                          tags: ["Application", "AI Screen", "LinkedIn"],
                        },
                      ].map((item, idx) => (
                        <div key={idx} className="relative pl-14 group">
                          <div className={`absolute left-[17px] top-5 w-3.5 h-3.5 rounded-full ${item.dotColor} border-4 border-[#F4F2FF] z-10 group-hover:scale-125 transition-transform`} />
                          <div className="bg-white rounded-2xl p-6 shadow-card-soft border border-outline-variant/20 relative overflow-hidden hover:-translate-y-0.5 transition-all duration-300">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-hero-a opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                              <div>
                                <h3 className="font-title-md text-title-md text-on-surface font-bold">{item.stage}</h3>
                                <p className="text-xs text-on-surface-variant mt-0.5">{item.interviewer}</p>
                              </div>
                              <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${item.statusColor}`}>{item.status}</span>
                                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                                  <PortalIcon name="calendar_today" className="text-[14px]" />
                                  <span>{item.date}</span>
                                  <span className="text-outline-variant">·</span>
                                  <PortalIcon name="schedule" className="text-[14px]" />
                                  <span>{item.time}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed mb-4">{item.notes}</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span key={tag} className="px-2.5 py-1 rounded-full bg-[#F4F2FF] text-[#534AB7] text-[11px] font-bold">{tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "evaluation" && activeTab !== "overview" && activeTab !== "experience" && activeTab !== "insights" && activeTab !== "history" && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="w-16 h-16 rounded-full bg-[#EEEDFE] flex items-center justify-center mb-4">
                  <PortalIcon
                    name={
                      INTERVIEW_NAV.find((n) => n.key === activeTab)?.icon ??
                      "info"
                    }
                    className="text-[28px] text-secondary"
                  />
                </div>
                <p className="text-sm font-bold text-[#26215C] mb-1">
                  {INTERVIEW_NAV.find((n) => n.key === activeTab)?.label}
                </p>
                <p className="text-xs text-on-surface-variant">
                  This section is coming soon.
                </p>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 md:left-[var(--sidebar-width,256px)] right-0 bg-white/90 backdrop-blur-md border-t border-outline-variant/20 py-3 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PortalIcon
            name="mail"
            className="text-[18px] text-on-surface-variant"
          />
          <div>
            <p className="text-xs font-bold text-on-surface">
              Awaiting Decision
            </p>
            <p className="text-xs text-on-surface-variant">
              Reviewers: 2/3 completed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-outline-variant/40 text-on-surface-variant text-sm font-bold hover:border-error hover:text-error transition-colors"
          >
            <PortalIcon name="close" className="text-[15px]" />
            Reject
          </button>
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#26215C] hover:bg-[#534AB7] text-white text-sm font-bold transition-colors"
          >
            <PortalIcon name="check" className="text-[15px]" />
            Advance Candidate
          </button>
        </div>
      </div>
    </div>
  );
}

export function StudentSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col h-screen py-6 px-4 z-50 fixed left-0 top-0 w-sidebar-width bg-surface-container-low border-r border-outline-variant/20">
      <div
        className="mb-8 px-3 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <h1 className="font-title-lg text-title-lg font-bold text-primary">
          CareerBridge+
        </h1>
        <p className="text-on-surface-variant text-[10px] leading-tight uppercase tracking-wider mt-1">
          Intelligence Platform
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        {studentMenuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 ${
              pathname === item.path
                ? "text-primary font-bold bg-primary-fixed border-l-4 border-secondary"
                : "text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            <PortalIcon name={item.icon} filled={pathname === item.path} />
            <span className="font-label-lg text-label-lg">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-4 pt-4">
        <Link
          href="/"
          aria-label="Log out"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant rounded-2xl hover:bg-surface-container-high transition-all duration-200"
        >
          <PortalIcon name="logout" />
          <span className="font-label-lg text-label-lg">Log Out</span>
        </Link>
      </div>
    </nav>
  );
}

export function UniversitySidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-sidebar-width bg-surface-container flex flex-col py-6 px-4 z-50 shadow-[rgba(99,62,211,0.06)_4px_0px_24px]">
      <div
        className="flex items-center gap-4 px-2 mb-8 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0 text-on-primary">
          <PortalIcon name="school" filled />
        </div>
        <div>
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary leading-tight">
            Univ Intelligence
          </h1>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            CareerBridge+
          </p>
        </div>
      </div>
      <button
        type="button"
        className="mb-8 w-full bg-linear-to-r from-primary to-secondary text-on-primary font-label-lg text-label-lg py-3 px-4 rounded-full shadow-md hover:shadow-lg transition-all active:scale-95 flex justify-center items-center gap-2"
      >
        <PortalIcon name="add" className="text-[18px]" /> Post New Vacancy
      </button>
      <nav className="flex-1 flex flex-col gap-2">
        {universityMenuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 rounded-full px-4 py-2 transition-all group ${pathname === item.path ? "bg-secondary-container text-on-secondary-container border-l-2 border-primary font-bold" : "text-on-surface-variant hover:bg-surface-container-highest"}`}
          >
            <PortalIcon name={item.icon} filled={pathname === item.path} />
            <span className="font-label-lg text-label-lg">{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-outline-variant/30 flex flex-col gap-2">
        <Link
          href="/"
          aria-label="Log out"
          className="flex items-center gap-3 px-4 py-2 text-on-surface-variant rounded-full hover:bg-surface-container-highest transition-all"
        >
          <PortalIcon name="logout" />
          <span className="font-label-lg text-label-lg">Log Out</span>
        </Link>
      </div>
    </aside>
  );
}

export function WelcomePortal() {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/90 shadow-sm shadow-secondary/5">
        <div className="flex justify-between items-center px-6 py-4 max-w-container-max mx-auto">
          <div className="font-headline-lg text-headline-lg font-bold text-primary">
            CareerBridge+
          </div>
        </div>
      </header>
      <main className="grow flex flex-col items-center justify-center pt-24 pb-12 px-6">
        <div className="max-w-container-max w-full text-center mb-12">
          <h1 className="font-display-lg text-display-lg text-primary mb-2 tracking-tight">
            Welcome to CareerBridge+
          </h1>
          <p className="font-title-lg text-title-lg text-on-surface-variant font-normal">
            Select your role to continue
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-container-max w-full">
          <Link
            href="/student"
            className="bg-surface-container-lowest rounded-[24px] p-card-padding flex flex-col items-center text-center shadow-card-soft transition-all duration-300 hover:-translate-y-2 group"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Students
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Build your professional profile and receive deep skill gap
              analysis to stand out.
            </p>
            <div className="mt-auto bg-gradient-primary-c text-on-primary font-title-md text-title-md py-4 px-8 rounded-full">
              Enter Talent Hub
            </div>
          </Link>
          <Link
            href="/employer"
            className="bg-surface-container-lowest rounded-[24px] p-card-padding flex flex-col items-center text-center shadow-card-soft transition-all duration-300 hover:-translate-y-2 group"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Employers
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Streamline high-volume hiring with AI screening and automated
              recruitment management.
            </p>
            <div className="mt-auto bg-gradient-primary-c text-on-primary font-title-md text-title-md py-4 px-8 rounded-full">
              Enter Recruitment Suite
            </div>
          </Link>
          <Link
            href="/university"
            className="bg-surface-container-lowest rounded-[24px] p-card-padding flex flex-col items-center text-center shadow-card-soft transition-all duration-300 hover:-translate-y-2 group"
          >
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Universities
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
              Access institutional insights and curriculum alignment data to
              boost employability.
            </p>
            <div className="mt-auto bg-gradient-primary-c text-on-primary font-title-md text-title-md py-4 px-8 rounded-full">
              Enter Intel Portal
            </div>
          </Link>
        </div>
      </main>
      <footer className="w-full py-8 mt-auto bg-surface-container-low text-center">
        <div className="max-w-container-max mx-auto text-on-surface-variant text-body-md">
          © 2024 CareerBridge+. AI-Powered Recruitment Intelligence.
        </div>
      </footer>
    </div>
  );
}

export function EmployerDashboard() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-surface/90 backdrop-blur-md shadow-sm">
        <h2 className="font-title-lg text-title-lg font-bold text-primary">
          Dashboard
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant"
          >
            <PortalIcon name="search" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant relative"
          >
            <PortalIcon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>
      </header>
      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full">
        <div className="w-full h-22 bg-gradient-hero-a rounded-[20px] mb-8 flex items-center px-8 shadow-card-soft text-on-primary">
          <h2 className="font-headline-sm text-headline-sm font-bold">
            Good morning, Sarah Connor 👋
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "Total Applicants",
              val: "2,847",
              inc: "+12%",
              icon: "group",
            },
            {
              label: "Passed ATS",
              val: "1,203",
              inc: "+8%",
              icon: "fact_check",
            },
            {
              label: "Awaiting Interview",
              val: "94",
              inc: "-3%",
              icon: "schedule",
              dec: true,
            },
            { label: "Hired", val: "318", inc: "+5%", icon: "handshake" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 pt-6.75 relative"
            >
              <div className="absolute top-0 left-0 w-full h-0.75 bg-gradient-accent-b"></div>
              <div className="flex justify-between items-start mb-4">
                <p className="font-title-md text-title-md text-on-surface-variant">
                  {stat.label}
                </p>
                <div className="w-12 h-12 rounded-full bg-gradient-circle-d flex items-center justify-center text-primary">
                  <PortalIcon name={stat.icon} />
                </div>
              </div>
              <h3 className="font-mono-numbers text-display-lg text-primary-container">
                {stat.val}
              </h3>
              <div className="mt-4 flex items-center gap-1">
                <span
                  className={`px-2 py-1 rounded-full text-label-sm font-bold flex items-center ${stat.dec ? "bg-error-container text-on-error-container" : "bg-[#e6f4ea] text-[#137333]"}`}
                >
                  <PortalIcon
                    name={stat.dec ? "trending_down" : "trending_up"}
                    className="text-[14px]"
                  />{" "}
                  {stat.inc}
                </span>
                <span className="font-body-md text-body-md text-outline ml-2">
                  vs last month
                </span>
              </div>
            </div>
          ))}
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6">
          Active Job Postings
        </h3>
        <div className="space-y-4">
          {MOCK_JOBS.filter((j) => j.status !== "Draft").map((job) => (
            <div
              key={job.id}
              className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-6 justify-between hover:bg-surface-container-low transition-colors"
            >
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-title-lg text-title-lg text-on-surface">
                    {job.title}
                  </h4>
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">
                    {job.dept}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                  <span className="flex items-center gap-1">
                    <PortalIcon name="location_on" className="text-[18px]" />{" "}
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono-numbers">
                    <PortalIcon name="payments" className="text-[18px]" />{" "}
                    {job.pay}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {job.pipeline.screen}
                    </div>
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {(job.pipeline as any).technical ??
                        (job.pipeline as any).portfolio ??
                        0}
                    </div>
                    <div className="w-8 h-0.5 bg-outline-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {job.pipeline.offer}
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-on-surface-variant"></div>
                </div>
                <div className="text-center">
                  <p className="font-mono-numbers text-[22px] font-bold text-primary">
                    {job.applicants}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Applicants
                  </p>
                </div>
                <Link
                  href="/employer/pipeline"
                  className="px-6 py-2 bg-gradient-primary-c text-on-primary rounded-full font-label-lg text-label-lg hover:shadow-md transition-all whitespace-nowrap"
                >
                  View Pipeline
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Link
        href="/employer/post-job"
        className="fixed bottom-8 right-8 bg-gradient-primary-c text-on-primary px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 z-50"
      >
        <PortalIcon name="add" />
        <span className="font-label-lg text-label-lg font-bold">
          Post New Job
        </span>
      </Link>
    </div>
  );
}

export function PostJobPage() {
  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Tailwind CSS",
    "GraphQL",
  ]);
  const [skillInput, setSkillInput] = useState("");
  const [experience, setExperience] = useState<"junior" | "mid" | "senior">(
    "mid",
  );
  const [files, setFiles] = useState([
    { name: "frontend_technical_rubric.pdf", size: "2.4 MB" },
  ]);

  function addSkill(e: React.KeyboardEvent) {
    if (e.key !== "Enter") return;
    const val = skillInput.trim();
    if (!val || skills.includes(val)) return;
    setSkills((prev) => [...prev, val]);
    setSkillInput("");
  }

  function removeSkill(skill: string) {
    setSkills((prev) => prev.filter((s) => s !== skill));
  }

  function removeFile(name: string) {
    setFiles((prev) => prev.filter((f) => f.name !== name));
  }

  const EXP_OPTIONS = [
    { key: "junior", label: "Junior", sub: "1–3 years" },
    { key: "mid", label: "Mid-level", sub: "3–5 years" },
    { key: "senior", label: "Senior", sub: "5+ years" },
  ] as const;

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-background">
      <div className="grid grid-cols-[200px_1fr] gap-8 p-8 max-w-4xl mx-auto">
        {/* Stepper */}
        <div className="relative flex flex-col gap-0">
          <div className="absolute left-[11px] top-3 bottom-3 w-px bg-outline-variant/30" />
          {[
            {
              label: "Basic info",
              sub: "Department & role type",
              done: true,
              active: false,
            },
            {
              label: "Job details",
              sub: "Description & skills",
              done: false,
              active: true,
            },
            {
              label: "Compensation",
              sub: "Salary & benefits",
              done: false,
              active: false,
            },
            {
              label: "Publishing",
              sub: "Boards & visibility",
              done: false,
              active: false,
            },
          ].map((step, i) => (
            <div
              key={step.label}
              className="flex items-start gap-3 pb-8 last:pb-0 relative z-10"
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                ${step.done || step.active ? "bg-primary text-on-primary" : "bg-background border border-outline-variant text-outline"}`}
              >
                {step.done ? (
                  <PortalIcon name="check" className="text-[12px]" />
                ) : (
                  i + 1
                )}
              </div>
              <div>
                <p
                  className={`font-label-md text-sm font-medium ${step.active ? "text-primary" : "text-on-surface-variant"}`}
                >
                  {step.label}
                </p>
                <p className="text-xs text-outline mt-0.5">{step.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form card */}
        <div>
          <div className="mb-4">
            <h1 className="font-headline-sm text-headline-sm font-bold text-on-background">
              Create job posting
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Setup the requirements and details for the new open role.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-[20px] border border-outline-variant/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-primary-c" />
            <div className="p-6 space-y-6">
              {/* Core Details */}
              <section>
                <h2 className="flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface mb-4">
                  <PortalIcon
                    name="description"
                    className="text-[18px] text-secondary"
                  />{" "}
                  Core details
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-1">
                      Job title
                    </label>
                    <input
                      type="text"
                      defaultValue="Senior Frontend Engineer"
                      className="w-full px-4 py-2.5 rounded-lg border border-outline bg-surface text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-on-surface-variant mb-1">
                      Job description
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe the responsibilities and daily tasks…"
                      className="w-full px-4 py-3 rounded-lg border border-outline bg-surface text-body-md resize-none focus:outline-none focus:ring-2 focus:ring-secondary/30"
                    />
                  </div>
                </div>
              </section>

              <hr className="border-outline-variant/20" />

              {/* Required Skills */}
              <section>
                <h2 className="flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface mb-1">
                  <PortalIcon
                    name="auto_awesome"
                    className="text-[18px] text-secondary"
                  />{" "}
                  Required skills
                </h2>
                <p className="text-xs text-on-surface-variant mb-3">
                  Add specific technical or soft skills required for the role.
                </p>
                <div className="flex flex-wrap gap-2 p-3 rounded-lg border border-outline bg-surface min-h-[44px]">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 bg-primary-fixed text-primary text-xs font-bold px-3 py-1 rounded-full"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-primary/60 hover:text-primary leading-none"
                        aria-label={`Remove ${skill}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-2 px-3 py-2 rounded-lg border border-outline-variant/40 bg-surface-container text-xs text-on-surface-variant">
                  <PortalIcon name="search" className="text-[16px]" />
                  <input
                    type="text"
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={addSkill}
                    placeholder="Search and add skills…"
                    className="bg-transparent outline-none flex-1 text-on-surface placeholder:text-outline"
                  />
                </div>
              </section>

              <hr className="border-outline-variant/20" />

              {/* Experience Level */}
              <section>
                <h2 className="flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface mb-4">
                  <PortalIcon
                    name="trending_up"
                    className="text-[18px] text-secondary"
                  />{" "}
                  Experience level
                </h2>
                <div className="grid grid-cols-3 gap-3">
                  {EXP_OPTIONS.map(({ key, label, sub }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setExperience(key)}
                      className={`flex flex-col items-start p-3 rounded-xl border text-left transition-all ${
                        experience === key
                          ? "border-2 border-secondary bg-primary-fixed"
                          : "border border-outline-variant/30 hover:border-secondary/50"
                      }`}
                    >
                      <div className="flex justify-between w-full mb-1">
                        <span
                          className={`font-label-lg text-sm font-bold ${experience === key ? "text-primary" : "text-on-surface"}`}
                        >
                          {label}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
                            experience === key
                              ? "bg-secondary border-secondary"
                              : "border-outline-variant"
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs ${experience === key ? "text-secondary" : "text-outline"}`}
                      >
                        {sub}
                      </span>
                    </button>
                  ))}
                </div>
              </section>

              <hr className="border-outline-variant/20" />

              {/* Supporting Documents */}
              <section>
                <h2 className="flex items-center gap-2 font-label-lg text-label-lg font-bold text-on-surface mb-1">
                  <PortalIcon
                    name="attach_file"
                    className="text-[18px] text-secondary"
                  />{" "}
                  Supporting documents
                </h2>
                <p className="text-xs text-on-surface-variant mb-3">
                  Upload rubrics, assignment briefs, or internal notes.
                </p>
                <div className="border border-dashed border-outline-variant/60 rounded-xl p-8 flex flex-col items-center text-center hover:border-secondary/60 transition-colors cursor-pointer">
                  <PortalIcon
                    name="cloud_upload"
                    className="text-[32px] text-secondary mb-2"
                  />
                  <p className="font-label-lg text-sm font-bold text-on-surface">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-outline mt-1">
                    PDF, DOCX, or TXT (max. 10MB)
                  </p>
                </div>
                {files.map((file) => (
                  <div
                    key={file.name}
                    className="flex items-center gap-3 mt-2 px-4 py-3 rounded-lg bg-surface-container border border-outline-variant/20"
                  >
                    <PortalIcon
                      name="picture_as_pdf"
                      className="text-[18px] text-secondary"
                    />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-on-surface">
                        {file.name}
                      </p>
                      <p className="text-xs text-outline">{file.size}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(file.name)}
                      className="text-outline hover:text-error transition-colors"
                      aria-label="Remove file"
                    >
                      <PortalIcon name="delete" className="text-[18px]" />
                    </button>
                  </div>
                ))}
              </section>

              {/* CTA */}
              <Link
                href="/employer"
                className="w-full py-4 rounded-full bg-gradient-primary-c text-on-primary font-title-md text-title-md font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Continue to compensation <PortalIcon name="arrow_forward" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const PIPELINE_STAGES = [
  {
    label: "Initial Review",
    count: 3,
    candidates: [
      {
        name: "Marcus Chen",
        sub: "Prev. Staff Engineer @ Acme Corp",
        score: 98,
        badge: { text: "Applied 2h ago", style: "gray" },
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYUQbkbSVR0T0v2sJvgIVc6ddfQsKAfIex1pNXeAKxCthqeyHYlMF-qsF6K2iIAnPGrCa3fpUIiDaDdtp4DWY4qkzStoCTC_vGF9ECsWURDIWPR196tAIcF5KUHY4zmdrU3NcT5s9gL5CUzEI2qPjveWwUwyb1LGtGcqMni1si0l71tkKFHNRoWngeEkjzxI-Q_5in-WetKdx_OdIgvA5ZLYJzD_bXcWBb1shL7OthOepjzjlKSZnucitsMt_OSG33XL6uQxfvFMQ",
      },
      {
        name: "Sarah Jenkins",
        sub: "Senior Developer @ FinTech startup",
        score: 94,
        badge: { text: "Referred", style: "plain" },
        initials: "SJ",
        initialsColor: "bg-[#C7C2F5] text-[#26215C]",
      },
      {
        name: "Aisha Patel",
        sub: "Full-Stack Dev",
        score: 82,
        badge: { text: "Applied 1d ago", style: "gray" },
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8A5X2V29ZnAjMx6jY1cLmzENQwqDQl_hd4pF05SXqEMrgaVxBKkzWQFs6BBxvxlfWT7A3vkTk-devkbQN1yrMw0MGpaW4C9A1yK0JL2qnk64hAqWeoPIWOV_2zLmwz5DHXdhxpxl150_UMdOny4m-ce2Fkq-_3E2PLnQMc6Rkz46IbFewmuI1Jo50wrJkoEll_c3roaNUAvCNbG2syeai8sSXrUdwPgNzUYZNKZgutz34zQab0taRwtSF-Je9tS-30Xrrbp_pwr0",
      },
    ],
  },
  {
    label: "Technical Screen",
    count: 2,
    candidates: [
      {
        name: "David O'Connor",
        sub: "Systems Architect",
        score: 91,
        badge: { text: "Awaiting Score", style: "amber", dot: true },
        initials: "DO",
        initialsColor: "bg-[#C7C2F5] text-[#26215C]",
      },
      {
        name: "Linda Wang",
        sub: "Backend Engineer",
        score: 88,
        badge: { text: "Scheduled Tomorrow", style: "gray", icon: "event" },
        initials: "LW",
        initialsColor: "bg-[#C7C2F5] text-[#26215C]",
      },
    ],
  },
  {
    label: "Final Interview",
    count: 1,
    candidates: [
      {
        name: "Emily Thorne",
        sub: "Top Match",
        score: 99,
        topMatch: true,
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBW22ZzLzBxfPNQsDn2L32lwKW-p2LICQqS3G00Cl7cxsTER_n8oUlWgNYEOC0NrvQCQxkZosrDbRJZ2HS1yDYMUn3rq6cb1BObHfGPt0hXEHtYdQA5F6mQa7x44QlGSpOBIQf1MuhQ2MmkO5CQ5eBC7WtYGc3e-JsW8XEOpguaOEF2b71VS0lr8EM6-pZbyTvyBj7Uv3vHxDDGv0Y0-r4bIZ_k5H2a3pDHt92TkD6T_GQF6H5Cm-YTiRgXWccmmqVmPy-uVvoYS8o",
      },
    ],
  },
];

export function PipelinePage() {
  const [filter, setFilter] = useState<"all" | "review" | "interviews">("all");

  const showInitialReview = filter === "all" || filter === "review";
  const showTechnicalScreen = filter === "all" || filter === "review" || filter === "interviews";
  const showFinalInterview = filter === "all" || filter === "interviews";

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-surface flex flex-col overflow-hidden relative">
      {/* TopNavBar */}
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-md flex justify-between items-center px-margin-desktop py-4 transition-all duration-200">
        {/* Left: Mobile Nav Toggle (Hidden on Desktop) & Context Title */}
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-all duration-200">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="md:hidden">
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">CareerBridge+</h2>
          </div>
        </div>
        {/* Right: Actions & Profile */}
        <div className="flex items-center gap-2">
          {/* Trailing Icon Actions */}
          <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-all duration-200 text-primary">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:bg-surface-variant/50 rounded-full transition-all duration-200 text-primary">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-px h-8 bg-outline-variant/50 mx-2"></div>
          {/* Profile */}
          <button className="flex items-center gap-3 p-1 pr-3 hover:bg-surface-variant/50 rounded-full transition-all duration-200">
            <img
              alt="Recruiter Profile"
              className="w-8 h-8 rounded-full object-cover border border-outline-variant/30"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_jh6OrUWfaQhv3bpeqWwQodDkZxP5jgV9XIk4_VJOVjEUJs7m54JjysN6TWt3Ob57oTEm2fOJaeqtG55afVZIBCHtHvmxKRAQ8a-AAXw7uEYNkf-BU6zTKjHbnyHanyo-ne1q17LyHTq-HrQtF-5OW1J0cxnvzCEZDDJU0wJt8ySAe0DZ1FFbnjwRPdaYezVo1FFeqr41Shc8FqMnEe5tqAiSxEHWO5vSSzmn0iH5jRegs1kZu4bN83hePTAJUa10lBAA3v5uRA"
            />
          </button>
        </div>
      </header>

      {/* Page Canvas */}
      <main className="flex-1 overflow-y-auto scroller px-4 md:px-margin-desktop pb-24">
        <div className="max-w-container-max mx-auto mt-8 md:mt-12">
          {/* Page Header */}
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h1 className="font-display-lg text-display-lg text-primary tracking-tight">Pipeline</h1>
              <p className="font-title-md text-title-md text-on-surface-variant mt-2 font-normal">Senior Full-Stack Developer</p>
            </div>
            {/* Quick Filters */}
            <div className="hidden sm:flex items-center gap-2 bg-surface-container-low p-1 rounded-full border border-surface-container-high shadow-sm">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-1.5 rounded-full font-label-lg text-label-lg font-bold transition-all ${
                  filter === "all"
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                All Stages
              </button>
              <button
                onClick={() => setFilter("review")}
                className={`px-4 py-1.5 rounded-full font-label-lg text-label-lg font-bold transition-all ${
                  filter === "review"
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Needs Review
              </button>
              <button
                onClick={() => setFilter("interviews")}
                className={`px-4 py-1.5 rounded-full font-label-lg text-label-lg font-bold transition-all ${
                  filter === "interviews"
                    ? "bg-surface-container-lowest text-primary shadow-sm"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                Interviews
              </button>
            </div>
          </div>

          {/* High-Precision List View */}
          <div className="flex flex-col gap-8">
            {/* STAGE 1: Initial Review */}
            {showInitialReview && (
              <section className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="flex items-center justify-between mb-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <h2 className="font-title-md text-title-md text-on-surface uppercase tracking-[0.1em] font-bold">Initial Review</h2>
                  </div>
                  <span className="font-mono-data text-outline font-normal">{filter === "review" ? "2 Candidates" : "3 Candidates"}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Marcus Chen */}
                  <Link
                    href="/employer/candidate/1"
                    className="group bg-surface-container-lowest border border-surface-container-high hover:border-secondary/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-6">
                      <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-primary w-12 text-right">98%</div>
                      <img
                        alt="Marcus Chen"
                        className="w-10 h-10 rounded-full object-cover border border-surface-container-high group-hover:border-outline-variant transition-colors"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYUQbkbSVR0T0v2sJvgIVc6ddfQsKAfIex1pNXeAKxCthqeyHYlMF-qsF6K2iIAnPGrCa3fpUIiDaDdtp4DWY4qkzStoCTC_vGF9ECsWURDIWPR196tAIcF5KUHY4zmdrU3NcT5s9gL5CUzEI2qPjveWwUwyb1LGtGcqMni1si0l71tkKFHNRoWngeEkjzxI-Q_5in-WetKdx_OdIgvA5ZLYJzD_bXcWBb1shL7OthOepjzjlKSZnucitsMt_OSG33XL6uQxfvFMQ"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">Marcus Chen</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Prev. Staff Engineer @ Acme Corp</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono-data text-[12px] text-on-surface-variant">Applied 2h ago</span>
                        <span className="px-2.5 py-1 rounded-md bg-surface-container text-on-surface-variant font-label-sm text-label-sm">High Match</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bg-surface-container-lowest pl-4 py-2 shadow-[-10px_0_10px_rgba(255,255,255,1)] sm:relative sm:right-auto sm:shadow-none sm:pl-0 sm:py-0">
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                          title="Reject"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors"
                          title="Review"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
                          title="Advance"
                        >
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </Link>

                  {/* Sarah Jenkins */}
                  <Link
                    href="/employer/candidate/1"
                    className="group bg-surface-container-lowest border border-surface-container-high hover:border-secondary/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-6">
                      <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-primary w-12 text-right">94%</div>
                      <div className="w-10 h-10 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-title-md border border-surface-container-high group-hover:border-outline-variant transition-colors">SJ</div>
                      <div className="flex flex-col">
                        <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">Sarah Jenkins</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Senior Developer @ FinTech</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                      <div className="flex items-center gap-3">
                        <span className="font-mono-data text-[12px] text-on-surface-variant">Applied 5h ago</span>
                        <span className="px-2.5 py-1 rounded-md bg-secondary-container/20 text-secondary-container border border-secondary-container/30 font-label-sm text-label-sm">Referred</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bg-surface-container-lowest pl-4 py-2 shadow-[-10px_0_10px_rgba(255,255,255,1)] sm:relative sm:right-auto sm:shadow-none sm:pl-0 sm:py-0">
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                          title="Reject"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors"
                          title="Review"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
                          title="Advance"
                        >
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </Link>

                  {/* Aisha Patel */}
                  {filter !== "review" && (
                    <Link
                      href="/employer/candidate/1"
                      className="group bg-surface-container-lowest border border-surface-container-high hover:border-secondary/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-6">
                        <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-outline w-12 text-right">82%</div>
                        <img
                          alt="Aisha Patel"
                          className="w-10 h-10 rounded-full object-cover border border-surface-container-high group-hover:border-outline-variant transition-colors opacity-90 group-hover:opacity-100"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLdecG9WQpFALQHItZMZz65mOkqw7vnx-MiuQbE8GTkMrtjbJmsfoAFSSu7PPn6uMOH4j9ZvSbNhlBTDTZkiMEE2TeMRwIkVLGkAGJRpJuSRWULFVab0nOSgyarE6g3QazAfrT1jxc5n6DJ-3Jx_JyzbM5LFcGshJDNdCWOduDMKUZPBCaixgXReZ5MvAiR5CslPxEWilEpU5pAP8MEsbqKv1OJSWgpK2KzLHWzCjvlyfj8CvjfWlnsQdp-3lVInkTM9F6rAKEO5Y"
                        />
                        <div className="flex flex-col">
                          <h3 className="font-title-md text-title-md text-on-surface opacity-90 group-hover:text-primary transition-colors">Aisha Patel</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant">Full-Stack Dev</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                        <div className="flex items-center gap-3">
                          <span className="font-mono-data text-[12px] text-on-surface-variant">Applied 1d ago</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bg-surface-container-lowest pl-4 py-2 shadow-[-10px_0_10px_rgba(255,255,255,1)] sm:relative sm:right-auto sm:shadow-none sm:pl-0 sm:py-0">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                            title="Reject"
                          >
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors"
                            title="Review"
                          >
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                          </button>
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
                            title="Advance"
                          >
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </section>
            )}

            {/* STAGE 2: Technical Screen */}
            {showTechnicalScreen && (
              <section className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center justify-between mb-4 mt-6 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <h2 className="font-title-md text-title-md text-on-surface uppercase tracking-[0.1em] font-bold">Technical Screen</h2>
                  </div>
                  <span className="font-mono-data text-outline font-normal">{filter === "review" ? "1 Candidate" : filter === "interviews" ? "2 Candidates" : "2 Candidates"}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {/* David O'Connor */}
                  <Link
                    href="/employer/candidate/1"
                    className="group bg-surface-bright/50 border border-surface-container-high hover:border-secondary/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="flex items-center gap-6">
                      <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-primary w-12 text-right">91%</div>
                      <img
                        alt="David O'Connor"
                        className="w-10 h-10 rounded-full object-cover border border-surface-container-high group-hover:border-outline-variant transition-colors"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXP6e3S3DoIE9V8jc5a8vdSqwgYSBTCunPyplXHPZYPY3Im5pEeiOYeGKlDQFR0qlDn4z0iVgQSCRZtgr46MuUzgB1_pogKl8P9DHdEx_Gzcjmvy_xNMVit_ZYAGXNWrOmrNdxkB0fMGD6T0V5cA4hkYhkHbpAVy90H2WqKO3MKcsYZR3ZneEtqVYPmwvU7G14k_T_Aajp7XmKijMZmyFSqsCw9lbfOyC2qfmWYW2ZJTCMR4Zt6LNrSqj9C8JcP6I1tjR_WD9thPA"
                      />
                      <div className="flex flex-col">
                        <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">David O'Connor</h3>
                        <p className="font-body-md text-body-md text-on-surface-variant">Systems Architect</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-container font-mono-data text-[12px] font-bold border border-secondary-container/30">
                          <div className="w-1.5 h-1.5 rounded-full bg-secondary-container animate-pulse"></div>
                          Awaiting Score
                        </div>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bg-surface-bright/90 pl-4 py-2 shadow-[-10px_0_10px_rgba(253,247,255,1)] sm:relative sm:right-auto sm:shadow-none sm:pl-0 sm:py-0">
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                          title="Reject"
                        >
                          <span className="material-symbols-outlined text-[18px]">close</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors"
                          title="Review"
                        >
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button
                          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
                          title="Advance"
                        >
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                      </div>
                    </div>
                  </Link>

                  {/* Linda Wang */}
                  {filter !== "review" && (
                    <Link
                      href="/employer/candidate/1"
                      className="group bg-surface-bright/50 border border-surface-container-high hover:border-secondary/30 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
                    >
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="flex items-center gap-6">
                        <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-primary w-12 text-right">88%</div>
                        <div className="w-10 h-10 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-title-md border border-surface-container-high group-hover:border-outline-variant transition-colors">LW</div>
                        <div className="flex flex-col">
                          <h3 className="font-title-md text-title-md text-on-surface group-hover:text-primary transition-colors">Linda Wang</h3>
                          <p className="font-body-md text-body-md text-on-surface-variant">Backend Engineer</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                        <div className="flex items-center gap-3">
                          <span className="font-mono-data text-[12px] px-3 py-1 rounded-full bg-surface-container text-on-surface-variant flex items-center gap-1.5 border border-surface-container-high">
                            <span className="material-symbols-outlined text-[14px]">event</span>
                            Scheduled Tomorrow
                          </span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 bg-surface-bright/90 pl-4 py-2 shadow-[-10px_0_10px_rgba(253,247,255,1)] sm:relative sm:right-auto sm:shadow-none sm:pl-0 sm:py-0">
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-error-container text-on-error-container hover:bg-error hover:text-on-error transition-colors"
                            title="Reject"
                          >
                            <span className="material-symbols-outlined text-[18px]">close</span>
                          </button>
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant hover:bg-surface-variant transition-colors"
                            title="Review"
                          >
                            <span className="material-symbols-outlined text-[18px]">visibility</span>
                          </button>
                          <button
                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-on-primary transition-colors"
                            title="Advance"
                          >
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                          </button>
                        </div>
                      </div>
                    </Link>
                  )}
                </div>
              </section>
            )}

            {/* STAGE 3: Final Interview */}
            {showFinalInterview && (
              <section className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center justify-between mb-4 mt-6 px-2">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-primary"></div>
                    <h2 className="font-title-md text-title-md text-on-surface uppercase tracking-[0.1em] font-bold">Final Interview</h2>
                  </div>
                  <span className="font-mono-data text-outline font-normal">1 Candidate</span>
                </div>
                <div className="flex flex-col gap-2">
                  {/* Emily Thorne */}
                  <Link
                    href="/employer/candidate/1"
                    className="group bg-surface-container-lowest border border-primary/20 hover:border-primary/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(99,62,211,0.05)] hover:shadow-[0_8px_30px_rgba(99,62,211,0.1)] relative overflow-hidden"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-secondary to-primary"></div>
                    <div className="flex items-center gap-6">
                      <div className="font-mono-data text-mono-data text-[20px] leading-none font-bold text-primary w-12 text-right">99%</div>
                      <div className="relative">
                        <img
                          alt="Emily Thorne"
                          className="w-10 h-10 rounded-full object-cover border-2 border-surface-container-lowest shadow-sm"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOSd7VUwiMZlChOLwMZCXqYwlwM1CiLnoMEqDDjXKn6yzq41zjNsPyFZgwZ3aI-6p8jvreAQd5tbZeKKwMArKLGvBMzCGygvNaeP8o-oHdhYzGWqZkONYL1gNkrYNIlpm_qr0FB8Ohq5sURjSKbKedAI2zs0k0L6gr0aWWojOQly33zLMl5klxBWuYf7bwIU2WZo2Muz_rnPc8FY4mu8NDYhOHIxuQQ15LuA4Eppa1MT1Dznw3S8PFw0GWIZnsC1jHqr0GJPRNfZU"
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-surface-container-lowest flex items-center justify-center">
                          <span className="material-symbols-outlined text-[10px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <h3 className="font-title-md text-title-md text-on-surface">Emily Thorne</h3>
                        <p className="font-label-sm text-label-sm text-primary font-medium uppercase tracking-wider mt-0.5">Top Match</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-6 mt-4 sm:mt-0 ml-[72px] sm:ml-0">
                      <button
                        onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-secondary to-primary text-on-primary font-label-lg text-label-lg font-bold hover:shadow-md transition-all duration-200 active:scale-95 flex items-center gap-2"
                      >
                        Prepare Offer
                        <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                      </button>
                    </div>
                  </Link>
                </div>
              </section>
            )}
          </div>
          {/* End of list padding */}
          <div className="h-12 w-full flex items-center justify-center mt-10">
            <div className="w-1.5 h-1.5 rounded-full bg-outline-variant/50"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function CandidateDetail() {
  const router = useRouter();
  const [toastVisible, setToastVisible] = useState(false);

  function handlePass() {
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  }

  const score = 88;
  const stroke = 10;
  const size = 160;
  const normalizedRadius = size / 2 - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const COMPETENCY = [
    { label: "Technical Assessment", value: 92, max: 100 },
    { label: "System Design", value: 85, max: 100 },
    { label: "Communication", value: 95, max: 100 },
  ];

  const INSIGHTS = [
    {
      icon: "check_circle",
      color: "text-secondary",
      title: "Strong React Mastery",
      desc: "Demonstrated deep understanding of hooks lifecycle and performance optimization during the live coding test.",
    },
    {
      icon: "check_circle",
      color: "text-secondary",
      title: "Cross-functional Communication",
      desc: "Articulated complex technical debt issues in a way that non-technical stakeholders would understand.",
    },
    {
      icon: "radio_button_unchecked",
      color: "text-outline",
      title: "Growth Area: GraphQL",
      desc: "Familiar with REST, but requires ramp-up time for the team's transition to GraphQL microservices.",
    },
  ];

  const MATCHED_SKILLS = [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Jest",
    "Node.js",
    "Figma",
  ];

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-[#F4F2FF]">
      {/* Toast */}
      {toastVisible && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-[#26215C] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
          <PortalIcon name="mail" className="text-[16px]" />
          Email sent to candidate automatically.
        </div>
      )}

      {/* Top bar */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-outline-variant/20 h-14 flex items-center px-margin-desktop justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-sm font-bold text-on-surface-variant hover:text-primary transition-colors"
          type="button"
        >
          <PortalIcon name="arrow_back" className="text-[18px]" />
          Back to Candidates
        </button>
        <div className="flex items-center gap-4">
          <span className="font-bold text-sm text-on-surface">
            Senior Frontend Engineer
          </span>
          <span className="text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
            REQ-2023-08
          </span>
        </div>
      </header>

      <main className="p-margin-desktop max-w-5xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr_260px] gap-6">
          {/* Left: Candidate info */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-outline-variant/20">
              <h2 className="font-headline-sm text-[20px] font-bold text-[#26215C] mb-1">
                Eleanor Vance
              </h2>
              <p className="text-xs text-on-surface-variant mb-5">
                4 Years Experience
              </p>
              <div className="space-y-3 text-sm text-on-surface-variant border-t border-outline-variant/20 pt-4">
                <div className="flex items-center gap-2">
                  <PortalIcon
                    name="mail"
                    className="text-[16px] text-secondary shrink-0"
                  />
                  <span className="text-xs">e.vance@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <PortalIcon
                    name="phone"
                    className="text-[16px] text-secondary shrink-0"
                  />
                  <span className="text-xs">+1 555-0192</span>
                </div>
                <div className="flex items-center gap-2">
                  <PortalIcon
                    name="location_on"
                    className="text-[16px] text-secondary shrink-0"
                  />
                  <span className="text-xs">San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-outline-variant/20">
              <p className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-3">
                Education
              </p>
              <div className="flex items-start gap-3">
                <PortalIcon
                  name="school"
                  className="text-[18px] text-secondary shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-bold text-[#26215C]">
                    B.S. Computer Science
                  </p>
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    University of California · 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Score + Competency */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-outline-variant/20 flex flex-col items-center">
              <h3 className="font-bold text-[16px] text-[#26215C] mb-5">
                Overall AI Match Score
              </h3>

              {/* Circular gauge */}
              <div
                className="relative mb-4"
                style={{ width: size, height: size }}
              >
                <svg
                  width={size}
                  height={size}
                  className="-rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={normalizedRadius}
                    fill="none"
                    stroke="#EEEDFE"
                    strokeWidth={stroke}
                  />
                  <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={normalizedRadius}
                    fill="none"
                    stroke="#534AB7"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono-numbers text-[36px] font-bold text-[#26215C] leading-none">
                    {score}
                  </span>
                  <span className="text-xs text-on-surface-variant">%</span>
                </div>
              </div>

              <p className="text-xs text-on-surface-variant text-center max-w-[200px]">
                High probability of success based on historical placement data
                for similar roles.
              </p>
            </div>

            {/* Competency Breakdown */}
            <div className="bg-white rounded-2xl p-6 border border-outline-variant/20">
              <h3 className="font-bold text-[15px] text-[#26215C] mb-5">
                Competency Breakdown
              </h3>
              <div className="space-y-4">
                {COMPETENCY.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-on-surface">
                        {item.label}
                      </span>
                      <span className="text-xs font-bold text-on-surface-variant">
                        {item.value}/{item.max}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-[#EEEDFE] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#534AB7] rounded-full"
                        style={{ width: `${(item.value / item.max) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Insights + Matched Requirements */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-outline-variant/20">
              <h3 className="font-bold text-[15px] text-[#26215C] mb-4 flex items-center gap-2">
                <PortalIcon
                  name="auto_awesome"
                  className="text-[16px] text-secondary"
                />
                Interview Insights
              </h3>
              <div className="space-y-4">
                {INSIGHTS.map((insight) => (
                  <div key={insight.title} className="flex items-start gap-3">
                    <PortalIcon
                      name={insight.icon}
                      className={`text-[18px] shrink-0 mt-0.5 ${insight.color}`}
                    />
                    <div>
                      <p className="text-sm font-bold text-[#26215C]">
                        {insight.title}
                      </p>
                      <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                        {insight.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-outline-variant/20">
              <h3 className="font-bold text-[15px] text-[#26215C] mb-4">
                Matched Requirements
              </h3>
              <div className="flex flex-wrap gap-2">
                {MATCHED_SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1 bg-[#EEEDFE] text-[#3C3489] text-xs font-bold px-3 py-1.5 rounded-full"
                  >
                    <PortalIcon name="check" className="text-[12px]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom action bar */}
      <div className="fixed bottom-0 left-0 md:left-[var(--sidebar-width,256px)] right-0 bg-white/90 backdrop-blur-md border-t border-outline-variant/20 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <PortalIcon
            name="mail"
            className="text-[18px] text-on-surface-variant"
          />
          <div>
            <p className="text-xs font-bold text-on-surface">
              Awaiting Decision
            </p>
            <p className="text-xs text-on-surface-variant">
              Reviewers: 2/3 completed
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border-2 border-outline-variant/40 text-on-surface-variant text-sm font-bold hover:border-error hover:text-error transition-colors"
          >
            <PortalIcon name="close" className="text-[16px]" />
            Reject Candidate
          </button>
          <button
            type="button"
            onClick={handlePass}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#26215C] hover:bg-[#534AB7] text-white text-sm font-bold transition-colors"
          >
            <PortalIcon name="check" className="text-[16px]" />
            Move to Offer
          </button>
        </div>
      </div>
    </div>
  );
}

const ARCHIVE_CANDIDATES = [
  {
    name: "James Whitfield",
    role: "Senior Frontend Engineer",
    screening: "Passed",
    interview: "Passed",
    date: "2026-05-12",
    status: "Hired",
  },
  {
    name: "Priya Nair",
    role: "Product Designer",
    screening: "Passed",
    interview: "Failed",
    date: "2026-05-18",
    status: "Rejected",
  },
  {
    name: "Omar Siddiqui",
    role: "Backend Engineer",
    screening: "Passed",
    interview: "Passed",
    date: "2026-05-20",
    status: "Hired",
  },
  {
    name: "Lena Müller",
    role: "Data Analyst",
    screening: "Failed",
    interview: "—",
    date: "2026-05-22",
    status: "Rejected",
  },
  {
    name: "Carlos Rivera",
    role: "DevOps Engineer",
    screening: "Passed",
    interview: "Passed",
    date: "2026-06-01",
    status: "Pending",
  },
  {
    name: "Yuki Tanaka",
    role: "Senior Frontend Engineer",
    screening: "Passed",
    interview: "Passed",
    date: "2026-06-03",
    status: "Pending",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Product Designer",
    screening: "Failed",
    interview: "—",
    date: "2026-06-04",
    status: "Rejected",
  },
  {
    name: "Ben Okafor",
    role: "Backend Engineer",
    screening: "Passed",
    interview: "Failed",
    date: "2026-06-05",
    status: "Rejected",
  },
] as const;

type ArchiveStatus = "Hired" | "Rejected" | "Pending";

const STATUS_STYLES: Record<ArchiveStatus, string> = {
  Hired: "bg-[#EAF3DE] text-[#27500A]",
  Rejected: "bg-[#FCEBEB] text-[#791F1F]",
  Pending: "bg-[#FAEEDA] text-[#633806]",
};

const JOB_ROLES = [
  "All Roles",
  "Senior Frontend Engineer",
  "Product Designer",
  "Backend Engineer",
  "Data Analyst",
  "DevOps Engineer",
] as const;
const STATUSES = ["All Status", "Hired", "Rejected", "Pending"] as const;

export function ArchivePage() {
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const filtered = ARCHIVE_CANDIDATES.filter((c) => {
    if (roleFilter !== "All Roles" && c.role !== roleFilter) return false;
    if (statusFilter !== "All Status" && c.status !== statusFilter)
      return false;
    if (dateFrom && c.date < dateFrom) return false;
    if (dateTo && c.date > dateTo) return false;
    return true;
  });

  const selectClass =
    "px-4 py-2 rounded-full bg-white border border-outline-variant/30 text-sm text-on-surface font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/30";

  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-surface/90 backdrop-blur-md border-b border-outline-variant/10">
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
          Archive
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
            aria-label="Search"
          >
            <PortalIcon name="search" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative"
            aria-label="Notifications"
          >
            <PortalIcon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
          </button>
        </div>
      </header>

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-12">
        {/* Banner */}
        <div className="w-full rounded-card bg-gradient-hero-a flex items-center px-card-padding py-6 mb-6 text-on-primary shadow-card-soft">
          <div>
            <h2 className="font-headline-sm text-headline-sm font-bold">
              Candidates Archive
            </h2>
            <p className="text-sm text-on-primary/80 mt-1">
              Full history of screened and interviewed candidates.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6 bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/20">
          <PortalIcon
            name="filter_list"
            className="text-[18px] text-secondary shrink-0"
          />
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className={selectClass}
          >
            {JOB_ROLES.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className={selectClass}
          >
            {STATUSES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
              className={selectClass}
            />
            <span className="text-on-surface-variant text-sm">–</span>
            <input
              type="date"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
              className={selectClass}
            />
          </div>
          {(roleFilter !== "All Roles" ||
            statusFilter !== "All Status" ||
            dateFrom ||
            dateTo) && (
            <button
              type="button"
              onClick={() => {
                setRoleFilter("All Roles");
                setStatusFilter("All Status");
                setDateFrom("");
                setDateTo("");
              }}
              className="text-xs font-bold text-secondary hover:underline ml-auto"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Table */}
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 overflow-hidden">
          <table className="w-full text-left table-fixed">
            <thead>
              <tr className="border-b border-outline-variant/20 bg-surface-container">
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[22%]">
                  Candidate
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[22%]">
                  Applied Role
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[13%]">
                  Screening
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[13%]">
                  Interview
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[12%]">
                  Date
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[10%]">
                  Status
                </th>
                <th className="py-4 px-5 text-xs font-bold text-on-surface-variant uppercase tracking-wide w-[8%]">
                  Resume
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c, i) => (
                <tr
                  key={c.name}
                  className={`border-b border-outline-variant/10 hover:bg-surface-container-low transition-colors ${
                    i % 2 === 0 ? "bg-white" : "bg-surface-container-lowest"
                  }`}
                >
                  <td className="py-4 px-5">
                    <p className="text-sm font-bold text-[#26215C]">{c.name}</p>
                  </td>
                  <td className="py-4 px-5">
                    <p className="text-sm text-on-surface-variant">{c.role}</p>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        c.screening === "Passed"
                          ? "bg-[#EAF3DE] text-[#27500A]"
                          : "bg-[#FCEBEB] text-[#791F1F]"
                      }`}
                    >
                      {c.screening}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    {c.interview === "—" ? (
                      <span className="text-sm text-outline">—</span>
                    ) : (
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                          c.interview === "Passed"
                            ? "bg-[#EAF3DE] text-[#27500A]"
                            : "bg-[#FCEBEB] text-[#791F1F]"
                        }`}
                      >
                        {c.interview}
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-5">
                    <p className="text-sm text-on-surface-variant">
                      {new Date(c.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </td>
                  <td className="py-4 px-5">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                        STATUS_STYLES[c.status as ArchiveStatus]
                      }`}
                    >
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-5">
                    <Link
                      href="/employer/candidate/1"
                      className="text-xs font-bold text-secondary hover:underline"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="py-16 text-center text-sm text-on-surface-variant"
                  >
                    No candidates match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-on-surface-variant mt-3 text-right">
          Showing {filtered.length} of {ARCHIVE_CANDIDATES.length} candidates
        </p>
      </main>
    </div>
  );
}

export function UniversityDashboard() {
  return (
    <div className="flex-1 ml-sidebar-width min-h-screen flex flex-col pt-20 px-8">
      <main className="max-w-container-max mx-auto w-full">
        <div className="mb-8 rounded-xl bg-gradient-primary-c p-8 text-on-primary relative overflow-hidden">
          <h1 className="font-display-lg text-display-lg mb-2">
            Welcome back, Dean Roberts.
          </h1>
          <p className="text-body-lg opacity-90 max-w-2xl">
            Your institutional health overview is ready. We've identified 3 new
            curriculum gaps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            { label: "Placements", val: "3,492", icon: "school" },
            { label: "Employer Engage", val: "94/100", icon: "handshake" },
            { label: "Curriculum Align", val: "88%", icon: "target" },
            { label: "Active Vacancies", val: "1,204", icon: "work" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface-container-lowest rounded-xl p-6 shadow-card-soft border hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center mb-4">
                <PortalIcon name={stat.icon} />
              </div>
              <p className="text-label-lg text-on-surface-variant">
                {stat.label}
              </p>
              <h3 className="text-headline-lg font-bold">{stat.val}</h3>
            </div>
          ))}
        </div>
        <div className="bg-surface-container-lowest rounded-xl border p-6">
          <h3 className="text-title-lg mb-6">Faculty Leaderboard</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-label-lg text-on-surface-variant">
                  <th className="py-4">Department</th>
                  <th className="py-4">Placement Rate</th>
                  <th className="py-4">Starting Salary</th>
                </tr>
              </thead>
              <tbody className="text-body-md">
                <tr className="border-b hover:bg-surface-container-low transition-colors">
                  <td className="py-4 font-bold">Computer Science</td>
                  <td className="py-4">96%</td>
                  <td className="py-4 font-mono-data">$92,000</td>
                </tr>
                <tr className="border-b hover:bg-surface-container-low transition-colors">
                  <td className="py-4 font-bold">Engineering</td>
                  <td className="py-4">91%</td>
                  <td className="py-4 font-mono-data">$85,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export function CurriculumIntel() {
  return (
    <div className="ml-sidebar-width pt-20 px-8 flex-1">
      <div className="max-w-container-max mx-auto">
        <div className="w-full rounded-2xl bg-gradient-hero-a p-8 mb-8 text-on-primary">
          <h2 className="text-headline-lg font-bold">
            Curriculum Intelligence & Gap Analysis
          </h2>
          <p className="text-body-lg mt-1">
            Real-time mapping of institutional curricula against industry
            demands.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl border shadow-sm p-6">
            <h3 className="text-title-md mb-4">Skill Gap Heatmap</h3>
            <div className="grid grid-cols-4 gap-2 text-center text-label-sm">
              <div className="bg-primary text-white p-4 rounded">
                CS: AI Ethics (32)
              </div>
              <div className="bg-secondary text-white p-4 rounded">
                ENG: Cloud (55)
              </div>
              <div className="bg-surface-container p-4 rounded">
                BUS: Agile (92)
              </div>
              <div className="bg-primary text-white p-4 rounded">
                ART: Web3 (10)
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-3xl border p-6">
            <h3 className="text-title-md mb-4 flex items-center gap-2">
              <PortalIcon name="model_training" className="text-secondary" /> AI
              Course Recommendations
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-xl border-l-4 border-error">
                <p className="text-label-sm font-bold text-error uppercase">
                  Critical Priority
                </p>
                <h4 className="font-bold">Cloud Architecture Fundamentals</h4>
                <p className="text-body-md text-on-surface-variant">
                  Recommended: AWS Core, Serverless
                </p>
              </div>
              <div className="p-4 bg-white rounded-xl border-l-4 border-secondary">
                <p className="text-label-sm font-bold text-secondary uppercase">
                  High Priority
                </p>
                <h4 className="font-bold">Modern Backend Development</h4>
                <p className="text-body-md text-on-surface-variant">
                  Recommended: Node.js, Go
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STUDENT_PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBW22ZzLzBxfPNQsDn2L32lwKW-p2LICQqS3G00Cl7cxsTER_n8oUlWgNYEOC0NrvQCQxkZosrDbRJZ2HS1yDYMUn3rq6cb1BObHfGPt0hXEHtYdQA5F6mQa7x44QlGSpOBIQf1MuhQ2MmkO5CQ5eBC7WtYGc3e-JsW8XEOpguaOEF2b71VS0lr8EM6-pZbyTvyBj7Uv3vHxDDGv0Y0-r4bIZ_k5H2a3pDHt92TkD6T_GQF6H5Cm-YTiRgXWccmmqVmPy-uVvoYS8o";

const RECOMMENDED_PATHS = [
  {
    title: "Backend Engineer",
    match: 87,
    salary: "$110k - $140k",
    icon: "code",
    has: ["Node.js", "SQL"],
    missing: ["Docker", "AWS"],
    weeks: 2,
  },
  {
    title: "Cloud Architect",
    match: 74,
    salary: "$130k - $170k",
    icon: "cloud",
    has: ["Linux", "CI/CD"],
    missing: ["Terraform", "Kubernetes"],
    weeks: 4,
  },
  {
    title: "DevOps Engineer",
    match: 69,
    salary: "$115k - $150k",
    icon: "hub",
    has: ["CI/CD"],
    missing: ["Bash", "AWS", "Docker"],
    weeks: 3,
  },
] as const;

const QUICK_ACTIONS = [
  {
    label: "View All Career Paths",
    href: "/student/paths",
    icon: "route",
    color: "text-secondary",
  },
  {
    label: "See Matched Internships",
    href: "/student/jobs",
    icon: "work",
    color: "text-secondary",
  },
  {
    label: "Close Skill Gaps",
    href: "/student/gaps",
    icon: "psychology",
    color: "text-error",
  },
] as const;

const WEEKLY_PROGRESS = [
  { label: "Profile Completeness", value: 85 },
  { label: "Skill Gap Progress", value: 43 },
  { label: "Career Readiness", value: 72 },
] as const;

function ReadinessGauge({
  score,
  size = 120,
  showMax = true,
}: {
  score: number;
  size?: number;
  showMax?: boolean;
}) {
  const stroke = 10;
  const radius = size / 2;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;
  const center = size / 2;
  const fontSize = size >= 100 ? 28 : 22;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={center}
          cy={center}
          r={normalizedRadius}
          fill="none"
          stroke="#f2ecf7"
          strokeWidth={stroke}
        />
        <circle
          cx={center}
          cy={center}
          r={normalizedRadius}
          fill="none"
          stroke="#613ed3"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span
          className="font-mono-numbers font-bold text-primary leading-none"
          style={{ fontSize }}
        >
          {score}
        </span>
        {showMax && (
          <span className="text-label-sm text-on-surface-variant">/ 100</span>
        )}
      </div>
    </div>
  );
}

export function SkillGapsPage() {
  const score = 87;
  const stroke = 8;
  const size = 80;
  const normalizedRadius = size / 2 - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  const SKILLS_TO_CLOSE = [
    {
      name: "Docker",
      progress: 8,
      priority: "High Priority",
      desc: "Containerization and orchestration fundamentals.",
      resourceType: "Course",
      resourceIcon: "menu_book",
    },
    {
      name: "Node.js",
      progress: 28,
      priority: "High Priority",
      desc: "Server-side JavaScript execution environment.",
      resourceType: "Video",
      resourceIcon: "play_circle",
    },
  ];

  const PATH_STEPS = [
    { label: "Foundation", sub: "Completed", done: true, active: false },
    { label: "Core Backend", sub: "In Progress", done: false, active: true },
    { label: "Databases", sub: "", done: false, active: false },
    { label: "APIs", sub: "", done: false, active: false },
  ];

  const CERTIFICATIONS = [
    { name: "AWS Cloud Practitioner", provider: "Amazon", hours: 20 },
  ];

  const STUDY_PLAN = [
    { week: "Wk 1", topic: "Node.js Basics", status: "Next" },
    { week: "Wk 2–3", topic: "REST API Design", status: "Queued" },
    { week: "Wk 4", topic: "Docker Intro", status: "Queued" },
  ];

  const SKILLS_HAVE = ["Python", "SQL Basics", "Git"];

  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      {/* Top header with back */}
      <header className="sticky top-0 z-30 flex items-center justify-between h-16 px-6 bg-background/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-3">
          <Link
            href="/student/paths"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Go back"
          >
            <PortalIcon name="arrow_back" className="text-[20px]" />
          </Link>
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
            Backend Engineer
          </h2>
        </div>
        <StudentHeaderActions />
      </header>

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-24">
        {/* Hero card */}
        <div className="bg-white rounded-2xl border border-outline-variant/20 p-6 mb-8 flex items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#EEEDFE] flex items-center justify-center shrink-0">
            <PortalIcon
              name="terminal"
              className="text-[28px] text-secondary"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-[22px] text-[#26215C] leading-tight">
              Backend Engineer
            </h1>
            <p className="text-sm text-on-surface-variant mt-0.5">
              $120k – $160k &nbsp;·&nbsp; Your readiness for this path
            </p>
          </div>

          {/* Readiness gauge */}
          <div className="flex items-center gap-6 shrink-0">
            <div className="relative" style={{ width: size, height: size }}>
              <svg
                width={size}
                height={size}
                className="-rotate-90"
                aria-hidden="true"
              >
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={normalizedRadius}
                  fill="none"
                  stroke="#EEEDFE"
                  strokeWidth={stroke}
                />
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={normalizedRadius}
                  fill="none"
                  stroke="#534AB7"
                  strokeWidth={stroke}
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-mono-numbers text-[20px] font-bold text-[#26215C]">
                  {score}
                </span>
              </div>
            </div>
            <div className="space-y-1.5 text-sm">
              <div className="flex items-center justify-between gap-6">
                <span className="text-on-surface-variant">Total Skills</span>
                <span className="font-bold text-[#26215C]">7</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-on-surface-variant">Ready</span>
                <span className="font-bold text-[#27500A]">3</span>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-on-surface-variant">Missing</span>
                <span className="font-bold text-error">4</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Col 1: Skills to Close */}
          <div>
            <h2 className="font-bold text-[16px] text-[#26215C] mb-4">
              Skills to Close
            </h2>
            <div className="space-y-4">
              {SKILLS_TO_CLOSE.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-2xl border border-outline-variant/20 p-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold text-sm text-[#26215C]">
                      {skill.name}
                    </p>
                    <span className="font-mono-numbers text-xs font-bold text-on-surface-variant">
                      {skill.progress}%
                    </span>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-error bg-[#FCEBEB] px-2.5 py-0.5 rounded-full mb-3">
                    {skill.priority}
                  </span>
                  <div className="w-full h-1.5 bg-[#EEEDFE] rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-[#534AB7] rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
                    {skill.desc}
                  </p>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 text-xs font-bold text-secondary border border-secondary/30 bg-[#EEEDFE]/50 px-3 py-1.5 rounded-full hover:bg-[#EEEDFE] transition-colors"
                  >
                    <PortalIcon
                      name={skill.resourceIcon}
                      className="text-[14px]"
                    />
                    {skill.resourceType}
                  </button>
                </div>
              ))}

              {/* Skills You Have */}
              <div>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wide mb-2">
                  Skills You Have
                </p>
                <div className="flex flex-wrap gap-2">
                  {SKILLS_HAVE.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1 text-xs font-bold text-secondary bg-[#EEEDFE] px-3 py-1.5 rounded-full"
                    >
                      <PortalIcon name="check_circle" className="text-[13px]" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Path Progress + Certifications */}
          <div className="space-y-6">
            <div>
              <h2 className="font-bold text-[16px] text-[#26215C] mb-4">
                Path Progress
              </h2>
              <div className="bg-white rounded-2xl border border-outline-variant/20 p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-on-surface-variant">
                    Overall Completion
                  </span>
                  <span className="font-mono-numbers text-[20px] font-bold text-[#26215C]">
                    42%
                  </span>
                </div>
                <div className="w-full h-2 bg-[#EEEDFE] rounded-full overflow-hidden mb-6">
                  <div
                    className="h-full bg-[#534AB7] rounded-full"
                    style={{ width: "42%" }}
                  />
                </div>

                {/* Step tracker */}
                <div className="relative space-y-0">
                  <div className="absolute left-[15px] top-4 bottom-4 w-px bg-outline-variant/30" />
                  {PATH_STEPS.map((step, i) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-4 pb-5 last:pb-0 relative z-10"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                          step.done
                            ? "bg-secondary text-on-primary"
                            : step.active
                              ? "bg-white border-2 border-secondary"
                              : "bg-surface-container border border-outline-variant/30"
                        }`}
                      >
                        {step.done ? (
                          <PortalIcon
                            name="check"
                            className="text-[14px] text-white"
                          />
                        ) : step.active ? (
                          <div className="w-3 h-3 rounded-full bg-secondary" />
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-outline-variant/40" />
                        )}
                      </div>
                      <div className="pt-1">
                        <p
                          className={`text-sm font-bold ${step.active ? "text-secondary" : step.done ? "text-[#26215C]" : "text-on-surface-variant"}`}
                        >
                          {step.label}
                        </p>
                        {step.sub && (
                          <p className="text-xs text-on-surface-variant mt-0.5">
                            {step.sub}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-[16px] text-[#26215C] mb-4">
                Certifications
              </h2>
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.name}
                  className="bg-white rounded-2xl border border-outline-variant/20 p-5 flex items-center justify-between gap-4"
                >
                  <div>
                    <p className="font-bold text-sm text-[#26215C]">
                      {cert.name}
                    </p>
                    <p className="text-xs text-on-surface-variant mt-1">
                      {cert.provider} &nbsp;·&nbsp; {cert.hours} hrs
                    </p>
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-full border border-secondary text-secondary text-xs font-bold hover:bg-[#EEEDFE] transition-colors shrink-0"
                  >
                    Start
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Insights & Plan */}
          <div className="space-y-5">
            <h2 className="font-bold text-[16px] text-[#26215C]">
              Insights &amp; Plan
            </h2>

            {/* Why this path */}
            <div className="bg-white rounded-2xl border border-outline-variant/20 p-5">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-sm text-[#26215C]">
                  Why Backend Engineer?
                </h3>
                <PortalIcon
                  name="auto_awesome"
                  className="text-[16px] text-secondary shrink-0"
                />
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Based on your strong foundations in Python and SQL, migrating to
                a Backend role leverages 60% of your current skills. The market
                demand in your area shows a 24% year-over-year growth for this
                specific tech stack.
              </p>
            </div>

            {/* Suggested Study Plan */}
            <div className="bg-white rounded-2xl border border-outline-variant/20 p-5">
              <h3 className="font-bold text-sm text-[#26215C] mb-4">
                Suggested Study Plan
              </h3>
              <div className="space-y-3">
                {STUDY_PLAN.map((item) => (
                  <div key={item.topic} className="flex items-center gap-3">
                    <span className="text-[11px] font-bold text-on-surface-variant w-10 shrink-0">
                      {item.week}
                    </span>
                    <span className="text-sm text-[#26215C] flex-1 font-medium">
                      {item.topic}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0 ${
                        item.status === "Next"
                          ? "bg-[#26215C] text-white"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 md:left-[var(--sidebar-width,256px)] right-0 bg-white/90 backdrop-blur-md border-t border-outline-variant/10 py-4 px-6 flex justify-end">
        <Link
          href="/student/paths"
          className="flex items-center gap-2 px-8 py-3 bg-[#26215C] hover:bg-[#534AB7] text-white text-sm font-bold rounded-full transition-colors"
        >
          Start Learning Path
          <PortalIcon name="arrow_forward" className="text-[16px]" />
        </Link>
      </div>
    </div>
  );
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="font-body-md text-body-md text-on-surface">
          {label}
        </span>
        <span className="font-mono-numbers text-body-md font-bold text-primary">
          {value}%
        </span>
      </div>
      <div className="w-full h-2.5 bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-accent-b rounded-full transition-all"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function StudentHeaderActions({
  showSearch = false,
}: {
  showSearch?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      {showSearch && (
        <button
          type="button"
          className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
          aria-label="Search"
        >
          <PortalIcon name="search" />
        </button>
      )}
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative"
        aria-label="Notifications"
      >
        <PortalIcon name="notifications" />
        <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full" />
      </button>
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors"
        aria-label="Settings"
      >
        <PortalIcon name="settings" />
      </button>
      <Link
        href="#"
        className="px-3 py-2 text-body-md text-on-surface-variant hover:text-primary transition-colors"
      >
        Help
      </Link>
      <img
        src={STUDENT_PROFILE_IMAGE}
        className="w-10 h-10 rounded-full object-cover border-2 border-outline-variant/20"
        alt="Sarah Jenkins"
      />
    </div>
  );
}

function StudentPageHeader({
  title,
  showSearch = false,
}: {
  title: string;
  showSearch?: boolean;
}) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-background/90 backdrop-blur-md border-b border-outline-variant/10">
      <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
        {title}
      </h2>
      <StudentHeaderActions showSearch={showSearch} />
    </header>
  );
}

function StudentDetailHeader({
  title,
  backHref = "/student/paths",
}: {
  title: string;
  backHref?: string;
}) {
  return (
    <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-background/90 backdrop-blur-md border-b border-outline-variant/10">
      <div className="flex items-center gap-2">
        <Link
          href={backHref}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Go back"
        >
          <PortalIcon name="arrow_back" />
        </Link>
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
          {title}
        </h2>
      </div>
      <StudentHeaderActions />
    </header>
  );
}

const PATH_CATEGORIES = [
  "All",
  "Software",
  "Cloud",
  "Data",
  "DevOps",
  "Security",
  "Mobile",
] as const;

type PathCategory =
  | "software"
  | "cloud"
  | "data"
  | "devops"
  | "security"
  | "mobile";

type CareerPathItem = {
  title: string;
  match: number;
  salary: string;
  timeline: string;
  icon: string;
  has: string[];
  missing: string[];
  categories: PathCategory[];
};

const CAREER_PATHS: CareerPathItem[] = [
  {
    title: "Backend Engineer",
    match: 87,
    salary: "$120k - $160k",
    timeline: "Ready",
    icon: "terminal",
    has: ["Python", "SQL", "REST APIs"],
    missing: ["Go", "Kafka"],
    categories: ["software"],
  },
  {
    title: "Cloud Architect",
    match: 74,
    salary: "$150k - $200k",
    timeline: "6–9 mos",
    icon: "cloud",
    has: ["AWS", "Linux", "Docker"],
    missing: ["Kubernetes", "Terraform"],
    categories: ["cloud"],
  },
  {
    title: "DevOps Engineer",
    match: 69,
    salary: "$130k - $170k",
    timeline: "9–12 mos",
    icon: "hub",
    has: ["CI/CD", "Git"],
    missing: ["Ansible", "Prometheus", "Jenkins"],
    categories: ["devops"],
  },
  {
    title: "Data Engineer",
    match: 65,
    salary: "$125k - $165k",
    timeline: "12+ mos",
    icon: "database",
    has: ["SQL", "Python"],
    missing: ["Spark", "Airflow", "Snowflake"],
    categories: ["data"],
  },
  {
    title: "Mobile Developer",
    match: 58,
    salary: "$110k - $150k",
    timeline: "18+ mos",
    icon: "smartphone",
    has: ["JavaScript"],
    missing: ["Swift", "Kotlin", "React Native"],
    categories: ["software", "mobile"],
  },
  {
    title: "Cybersecurity Analyst",
    match: 51,
    salary: "$100k - $140k",
    timeline: "18+ mos",
    icon: "security",
    has: ["Networking"],
    missing: ["SIEM", "Pen Testing", "Cryptography"],
    categories: ["security"],
  },
];

export function StudentDashboard() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <StudentPageHeader title="Dashboard" />

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-12">
        <div className="w-full rounded-card bg-gradient-hero-a flex flex-col justify-center px-card-padding py-8 mb-6 text-on-primary shadow-card-soft">
          <h2 className="font-headline-sm text-headline-sm font-bold">
            Good morning, Sarah
          </h2>
          <p className="font-body-md text-on-primary/80 mt-1">
            Your career readiness score has improved by +4 points this week
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-surface-container-lowest rounded-card p-6 md:p-8 shadow-card-soft border border-outline-variant/20">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-1 w-full md:w-auto">
                  <h3 className="font-title-lg text-title-lg text-primary mb-1">
                    Career Readiness Score
                  </h3>
                  <p className="text-body-md text-on-surface-variant mb-3">
                    You're on the right track!
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="text-label-sm text-on-surface-variant">
                      Updated today
                    </span>
                  </div>
                </div>
                <ReadinessGauge score={72} />
                <div className="flex-1 w-full md:w-auto flex flex-row md:flex-col justify-around md:justify-center gap-4 md:gap-5 md:text-right">
                  <div>
                    <p className="font-mono-numbers text-headline-sm font-bold text-primary">
                      3
                    </p>
                    <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                      Paths Matched
                    </p>
                  </div>
                  <div>
                    <p className="font-mono-numbers text-headline-sm font-bold text-secondary">
                      5
                    </p>
                    <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                      Skills Gained
                    </p>
                  </div>
                  <div>
                    <p className="font-mono-numbers text-headline-sm font-bold text-error">
                      4
                    </p>
                    <p className="text-label-sm text-on-surface-variant uppercase tracking-wide">
                      Gaps Found
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fef9e7] rounded-card p-5 border border-[#fde68a]/60 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-10 h-10 rounded-full bg-[#fde68a]/50 flex items-center justify-center shrink-0">
                  <PortalIcon
                    name="warning"
                    className="text-[20px] text-amber-700"
                  />
                </div>
                <div>
                  <p className="font-label-sm text-label-sm font-bold text-amber-900 uppercase tracking-wide mb-1">
                    Top Skill Gap: Cloud skills missing
                  </p>
                  <p className="text-body-md text-amber-800">
                    Adding AWS or GCP could boost your readiness score by +12
                    points.
                  </p>
                </div>
              </div>
              <Link
                href="/student/gaps"
                className="shrink-0 px-5 py-2.5 rounded-full text-body-md font-bold text-amber-900 border border-amber-300 bg-white hover:bg-amber-50 transition-colors"
              >
                Explore Courses
              </Link>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-title-lg text-title-lg text-primary">
                  Recommended Paths
                </h3>
                <Link
                  href="/student/paths"
                  className="text-body-md text-secondary font-bold hover:underline"
                >
                  View all →
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {RECOMMENDED_PATHS.map((path) => (
                  <div
                    key={path.title}
                    className="bg-surface-container-lowest rounded-card p-5 shadow-card-soft border border-outline-variant/20 flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
                        <PortalIcon name={path.icon} className="text-[20px]" />
                      </div>
                      <span className="font-mono-numbers text-label-lg font-bold text-secondary">
                        {path.match}% Match
                      </span>
                    </div>
                    <h4 className="font-title-md text-title-md text-primary mb-0.5">
                      {path.title}
                    </h4>
                    <p className="text-body-md text-on-surface-variant mb-4">
                      {path.salary}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                      {path.has.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#e6f4ea] text-[#137333] text-label-sm"
                        >
                          <PortalIcon name="check" className="text-[14px]" />
                          {skill}
                        </span>
                      ))}
                      {path.missing.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-error-container/40 text-error text-label-sm"
                        >
                          <PortalIcon name="close" className="text-[14px]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-label-sm text-on-surface-variant border-t border-outline-variant/20 pt-3">
                      Est. {path.weeks} week{path.weeks > 1 ? "s" : ""} to align
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={STUDENT_PROFILE_IMAGE}
                  className="w-16 h-16 rounded-full object-cover"
                  alt="Sarah Jenkins"
                />
                <div>
                  <h3 className="font-title-md text-title-md text-primary">
                    Sarah Jenkins
                  </h3>
                  <p className="text-body-md text-on-surface-variant">
                    Computer Science, B.S.
                  </p>
                </div>
              </div>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                  <PortalIcon
                    name="school"
                    className="text-[18px] text-secondary"
                  />
                  University of Technology
                </div>
                <div className="flex items-center gap-2 text-body-md text-on-surface-variant">
                  <PortalIcon
                    name="calendar_today"
                    className="text-[18px] text-secondary"
                  />
                  Class of 2025 · Junior
                </div>
              </div>
              <div>
                <p className="font-label-lg text-label-lg font-bold text-primary mb-2">
                  Verified Skills
                </p>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "React", "Node.js", "Python"].map((skill) => (
                    <span
                      key={skill}
                      className="bg-surface-container px-3 py-1 rounded-full text-label-sm text-on-surface-variant"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="bg-surface-container px-3 py-1 rounded-full text-label-sm text-secondary font-bold">
                    +4 more
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20">
              <h3 className="font-title-md text-title-md text-primary mb-4">
                Quick Actions
              </h3>
              <div className="space-y-1">
                {QUICK_ACTIONS.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container-low transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <PortalIcon
                        name={action.icon}
                        className={`text-[20px] ${action.color}`}
                      />
                      <span className="font-body-md text-body-md text-on-surface">
                        {action.label}
                      </span>
                    </div>
                    <PortalIcon
                      name="chevron_right"
                      className="text-[20px] text-on-surface-variant group-hover:text-primary transition-colors"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20">
              <h3 className="font-title-md text-title-md text-primary mb-5">
                Weekly Progress
              </h3>
              <div className="space-y-5">
                {WEEKLY_PROGRESS.map((item) => (
                  <ProgressBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function CareerPathsPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof PATH_CATEGORIES)[number]>("All");
  const [sortBy, setSortBy] = useState("best-match");

  const filteredPaths = useMemo(() => {
    const paths =
      activeCategory === "All"
        ? [...CAREER_PATHS]
        : CAREER_PATHS.filter((path) =>
            path.categories.includes(
              activeCategory.toLowerCase() as PathCategory,
            ),
          );

    if (sortBy === "salary") {
      return [...paths].sort(
        (a, b) =>
          parseInt(b.salary.replace(/\D/g, "").slice(0, 3), 10) -
          parseInt(a.salary.replace(/\D/g, "").slice(0, 3), 10),
      );
    }

    return [...paths].sort((a, b) => b.match - a.match);
  }, [activeCategory, sortBy]);

  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <StudentPageHeader title="Career Paths" showSearch />

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-12">
        <div className="w-full rounded-card bg-primary-fixed px-card-padding py-6 mb-6 border border-outline-variant/10">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
            Career Paths
          </h2>
          <p className="text-body-md text-on-surface-variant mt-1">
            Showing {filteredPaths.length} paths matched to your profile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {PATH_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-label-lg font-bold transition-colors ${
                  activeCategory === category
                    ? "bg-primary text-on-primary shadow-card-soft"
                    : "bg-surface-container-lowest text-on-surface-variant border border-outline-variant/20 hover:bg-surface-container-low"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-body-md text-on-surface-variant">
              Sorted by:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-full bg-surface-container-lowest border border-outline-variant/20 text-body-md text-on-surface font-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary/30"
            >
              <option value="best-match">Best Match</option>
              <option value="salary">Salary</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPaths.map((path, index) => {
            const isTopMatch = index === 0 && sortBy === "best-match";

            return (
              <div
                key={path.title}
                className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 flex flex-col"
              >
                <div className="flex justify-between items-start gap-4 mb-5">
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                      <PortalIcon name={path.icon} className="text-[22px]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-title-md text-title-md text-primary">
                        {path.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-body-md text-on-surface-variant">
                        <span className="inline-flex items-center gap-1">
                          <PortalIcon name="payments" className="text-[16px]" />
                          {path.salary}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <PortalIcon name="schedule" className="text-[16px]" />
                          {path.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-primary text-on-primary text-label-sm font-bold whitespace-nowrap">
                    {path.match}% match
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wide mb-2">
                    You Have
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {path.has.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-primary-fixed text-primary text-label-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wide mb-2">
                    You're Missing
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {path.missing.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-full bg-[#fff0f0] text-[#c2410c] text-label-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wide">
                      Readiness
                    </span>
                    <span className="font-mono-numbers text-label-sm font-bold text-primary">
                      {path.match}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-accent-b rounded-full"
                      style={{ width: `${path.match}%` }}
                    />
                  </div>
                </div>

                <Link
                  href="/student/gaps"
                  className={`w-full py-3 rounded-full text-label-lg font-bold flex items-center justify-center gap-2 mt-auto transition-opacity hover:opacity-90 ${
                    isTopMatch
                      ? "bg-gradient-primary-c text-on-primary"
                      : "bg-surface-container text-on-surface-variant"
                  }`}
                >
                  Explore This Path
                  <PortalIcon name="arrow_forward" className="text-[18px]" />
                </Link>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

const MATCHED_INTERNSHIPS = [
  {
    company: "Petronas Digital",
    role: "Software Engineering Intern",
    match: 92,
    icon: "business",
    skills: [
      { name: "Python", has: true },
      { name: "SQL", has: true },
      { name: "REST APIs", has: true },
      { name: "Docker", has: false },
    ],
  },
  {
    company: "Grab",
    role: "Backend Engineering Intern",
    match: 85,
    icon: "directions_car",
    skills: [
      { name: "Node.js", has: true },
      { name: "Git", has: true },
      { name: "PostgreSQL", has: true },
      { name: "Kafka", has: false },
    ],
  },
  {
    company: "Maybank",
    role: "Data Engineering Intern",
    match: 78,
    icon: "account_balance",
    skills: [
      { name: "Python", has: true },
      { name: "SQL", has: true },
      { name: "Spark", has: false },
      { name: "Airflow", has: false },
    ],
  },
  {
    company: "Shopee",
    role: "Cloud Infrastructure Intern",
    match: 71,
    icon: "shopping_bag",
    skills: [
      { name: "Linux", has: true },
      { name: "AWS", has: false },
      { name: "Docker", has: false },
      { name: "CI/CD", has: true },
    ],
  },
  {
    company: "CelcomDigi",
    role: "DevOps Intern",
    match: 68,
    icon: "cell_tower",
    skills: [
      { name: "Git", has: true },
      { name: "CI/CD", has: true },
      { name: "Ansible", has: false },
      { name: "Kubernetes", has: false },
    ],
  },
] as const;

export function MatchedInternshipsPage() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <StudentPageHeader title="Internships" showSearch />

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-12">
        <div className="w-full rounded-card bg-primary-fixed px-card-padding py-6 mb-6 border border-outline-variant/10">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
            Matched Internships
          </h2>
          <p className="text-body-md text-on-surface-variant mt-1">
            {MATCHED_INTERNSHIPS.length} internships aligned to your career
            trajectory
          </p>
        </div>

        <div className="space-y-4">
          {MATCHED_INTERNSHIPS.map((internship) => {
            const matchedSkills = internship.skills.filter((s) => s.has);
            const gapSkills = internship.skills.filter((s) => !s.has);

            return (
              <div
                key={`${internship.company}-${internship.role}`}
                className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-fixed flex items-center justify-center text-primary shrink-0">
                      <PortalIcon
                        name={internship.icon}
                        className="text-[24px]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-title-lg text-title-lg text-primary">
                        {internship.company}
                      </h3>
                      <p className="text-body-md text-on-surface-variant mt-0.5">
                        {internship.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-on-primary text-label-sm font-bold">
                      {internship.match}% Match
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-fixed text-secondary text-label-sm font-bold">
                      <PortalIcon name="auto_awesome" className="text-[14px]" />
                      AI
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <PortalIcon
                      name="psychology"
                      className="text-[18px] text-secondary"
                    />
                    <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wide">
                      Skills Required vs. Your Skills
                    </p>
                    <span className="text-label-sm text-secondary font-bold">
                      (AI)
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-label-sm font-bold text-on-surface-variant mb-2">
                        Required
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {internship.skills.map((skill) => (
                          <span
                            key={skill.name}
                            className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant text-label-sm"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-label-sm font-bold text-on-surface-variant mb-2">
                        Your Match
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {matchedSkills.map((skill) => (
                          <span
                            key={skill.name}
                            className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-[#e6f4ea] text-[#137333] text-label-sm font-medium"
                          >
                            <PortalIcon name="check" className="text-[14px]" />
                            {skill.name}
                          </span>
                        ))}
                        {gapSkills.map((skill) => (
                          <span
                            key={skill.name}
                            className="inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full bg-[#fff0f0] text-[#c2410c] text-label-sm font-medium"
                          >
                            <PortalIcon name="close" className="text-[14px]" />
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    className={`px-8 py-3 rounded-full font-label-lg text-label-lg font-bold transition-opacity hover:opacity-90 ${
                      internship.match >= 85
                        ? "bg-gradient-primary-c text-on-primary"
                        : "border-2 border-secondary text-secondary hover:bg-primary-fixed"
                    }`}
                  >
                    Apply
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

type ProfileSkill = {
  name: string;
  verified: boolean;
};

const INITIAL_PROFILE_SKILLS: ProfileSkill[] = [
  { name: "JavaScript", verified: true },
  { name: "React", verified: true },
  { name: "Node.js", verified: true },
  { name: "Python", verified: true },
  { name: "SQL", verified: false },
  { name: "Git", verified: false },
  { name: "REST APIs", verified: false },
  { name: "Linux", verified: false },
];

function ProfileFormField({
  label,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  as = "input",
}: {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  as?: "input" | "textarea";
}) {
  const fieldClass =
    "w-full px-4 py-3 rounded-2xl bg-surface-container-low border border-outline-variant/20 text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary/30 transition-shadow";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-label-lg font-bold text-on-surface-variant mb-2"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={4}
          className={`${fieldClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={fieldClass}
        />
      )}
    </div>
  );
}

export function StudentProfilePage() {
  const [fullName, setFullName] = useState("Sarah Jenkins");
  const [email, setEmail] = useState("sarah.jenkins@unitech.edu");
  const [university, setUniversity] = useState("University of Technology");
  const [major, setMajor] = useState("Computer Science");
  const [degree, setDegree] = useState("B.S.");
  const [graduationYear, setGraduationYear] = useState("2025");
  const [gpa, setGpa] = useState("3.72");
  const [coursework, setCoursework] = useState(
    "Data Structures, Algorithms, Database Systems, Web Development",
  );
  const [headline, setHeadline] = useState(
    "CS Junior · Aspiring Backend Engineer",
  );
  const [bio, setBio] = useState(
    "Computer science student passionate about building scalable backend systems. Experienced with Python, JavaScript, and REST API development through coursework and personal projects.",
  );
  const [linkedin, setLinkedin] = useState("linkedin.com/in/sarahjenkins");
  const [github, setGithub] = useState("github.com/sarahjenkins");
  const [portfolio, setPortfolio] = useState("sarahjenkins.dev");
  const [isPublic, setIsPublic] = useState(true);
  const [skills, setSkills] = useState<ProfileSkill[]>(INITIAL_PROFILE_SKILLS);
  const [newSkill, setNewSkill] = useState("");
  const [saved, setSaved] = useState(false);

  const profileCompleteness = Math.round(
    ([
      fullName,
      email,
      university,
      major,
      graduationYear,
      headline,
      bio,
      linkedin,
      skills.length >= 4,
    ].filter(Boolean).length /
      8) *
      100,
  );

  function addSkill() {
    const trimmed = newSkill.trim();
    if (
      !trimmed ||
      skills.some((s) => s.name.toLowerCase() === trimmed.toLowerCase())
    ) {
      return;
    }
    setSkills((prev) => [...prev, { name: trimmed, verified: false }]);
    setNewSkill("");
  }

  function removeSkill(name: string) {
    setSkills((prev) => prev.filter((s) => s.name !== name));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background">
      <StudentPageHeader title="Profile" />

      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full pb-12">
        <div className="w-full rounded-card bg-primary-fixed px-card-padding py-6 mb-6 border border-outline-variant/10">
          <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
            Your Profile
          </h2>
          <p className="text-body-md text-on-surface-variant mt-1">
            Manage your academic background, skills, and public profile.
          </p>
        </div>

        <div className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 mb-6 flex flex-col sm:flex-row items-center gap-6">
          <img
            src={STUDENT_PROFILE_IMAGE}
            className="w-20 h-20 rounded-full object-cover border-2 border-outline-variant/20"
            alt={fullName}
          />
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-title-lg text-title-lg text-primary">
              {fullName}
            </h3>
            <p className="text-body-md text-on-surface-variant">{email}</p>
            <p className="text-body-md text-on-surface-variant mt-1">
              {major}, {degree} · {university}
            </p>
          </div>
          <div className="text-center sm:text-right shrink-0">
            <p className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wide mb-1">
              Profile Completeness
            </p>
            <p className="font-mono-numbers text-headline-sm font-bold text-primary">
              {profileCompleteness}%
            </p>
            <div className="w-32 h-2 bg-surface-container-high rounded-full overflow-hidden mt-2">
              <div
                className="h-full bg-gradient-accent-b rounded-full"
                style={{ width: `${profileCompleteness}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20">
              <div className="flex items-center gap-2 mb-5">
                <PortalIcon
                  name="school"
                  className="text-[22px] text-secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const MOCK_ARCHIVED_JOBS = [
  {
    id: 1,
    title: "Junior QA Engineer",
    dept: "Engineering",
    location: "Kuala Lumpur",
    pay: "$50k - $65k",
    applicants: 12,
    status: "Closed",
    closedDate: "2026-05-30",
    hired: "Amir Hashim",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Graphic Designer",
    dept: "Design",
    location: "Remote",
    pay: "$60k - $80k",
    applicants: 28,
    status: "Closed",
    closedDate: "2026-05-15",
    hired: "Lisa Wong",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Marketing Intern",
    dept: "Data",
    location: "Singapore",
    pay: "$20k - $30k",
    applicants: 45,
    status: "Closed",
    closedDate: "2026-04-20",
    hired: "Not filled",
    type: "Internship",
  },
] as const;

export function EmployerArchivePage() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-surface/90 backdrop-blur-md shadow-sm">
        <h2 className="font-title-lg text-title-lg font-bold text-primary">
          Archive
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant"
          >
            <PortalIcon name="search" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant relative"
          >
            <PortalIcon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>
      </header>
      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full">
        <div className="w-full h-22 bg-gradient-hero-a rounded-[20px] mb-8 flex items-center px-8 shadow-card-soft text-on-primary">
          <h2 className="font-headline-sm text-headline-sm font-bold">
            Good morning, Sarah Connor 👋
          </h2>
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6">
          Archived Roles
        </h3>
        <div className="space-y-4">
          {MOCK_ARCHIVED_JOBS.map((job) => (
            <div
              key={job.id}
              className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-6 justify-between hover:bg-surface-container-low transition-colors"
            >
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-title-lg text-title-lg text-on-surface">
                    {job.title}
                  </h4>
                  <span className="bg-surface-container text-on-surface-variant px-3 py-1 rounded-full font-label-sm text-label-sm">
                    {job.dept}
                  </span>
                  <span className="bg-[#fef9e7] text-[#92400e] px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold">
                    {job.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                  <span className="flex items-center gap-1">
                    <PortalIcon name="location_on" className="text-[18px]" />{" "}
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono-numbers">
                    <PortalIcon name="payments" className="text-[18px]" />{" "}
                    {job.pay}
                  </span>
                  <span className="flex items-center gap-1">
                    <PortalIcon name="calendar_today" className="text-[16px]" />{" "}
                    Closed{" "}
                    {new Date(job.closedDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                <div className="text-center">
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Hired
                  </p>
                  <p className="font-mono-numbers text-[16px] font-bold text-primary">
                    {job.hired}
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-mono-numbers text-[22px] font-bold text-on-surface-variant">
                    {job.applicants}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Applicants
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Link
        href="/employer"
        className="fixed bottom-8 right-8 bg-surface-container text-on-surface-variant px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 z-50 border border-outline-variant/30"
      >
        <PortalIcon name="arrow_back" />
        <span className="font-label-lg text-label-lg font-bold">
          Return to Dashboard
        </span>
      </Link>
    </div>
  );
}

export function EmployerJobsPage() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen">
      <header className="sticky top-0 z-30 flex justify-between items-center h-16 px-6 bg-surface/90 backdrop-blur-md shadow-sm">
        <h2 className="font-title-lg text-title-lg font-bold text-primary">
          Job Library
        </h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:bg-surface-variant"
          >
            <PortalIcon name="search" />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant relative"
          >
            <PortalIcon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
          </button>
        </div>
      </header>
      <main className="flex-1 p-margin-desktop max-w-container-max mx-auto w-full">
        <div className="w-full h-22 bg-gradient-hero-a rounded-[20px] mb-8 flex items-center px-8 shadow-card-soft text-on-primary">
          <h2 className="font-headline-sm text-headline-sm font-bold">
            Good morning, Sarah Connor 👋
          </h2>
        </div>
        <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mb-6">
          Active Job Postings
        </h3>
        <div className="space-y-4">
          {MOCK_JOBS.filter((j) => j.status !== "Draft").map((job) => (
            <div
              key={job.id}
              className="bg-surface-container-lowest rounded-card p-6 shadow-card-soft border border-outline-variant/20 flex flex-col lg:flex-row items-center gap-6 justify-between hover:bg-surface-container-low transition-colors"
            >
              <div className="flex-1 w-full">
                <div className="flex items-center gap-3 mb-2">
                  <h4 className="font-title-lg text-title-lg text-on-surface">
                    {job.title}
                  </h4>
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full font-label-sm text-label-sm">
                    {job.dept}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant font-body-md text-body-md">
                  <span className="flex items-center gap-1">
                    <PortalIcon name="location_on" className="text-[18px]" />{" "}
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono-numbers">
                    <PortalIcon name="payments" className="text-[18px]" />{" "}
                    {job.pay}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-end">
                <div className="flex items-center gap-3">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {job.pipeline.screen}
                    </div>
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {(job.pipeline as any).technical ??
                        (job.pipeline as any).portfolio ??
                        0}
                    </div>
                    <div className="w-8 h-0.5 bg-outline-variant"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-primary text-primary flex items-center justify-center font-mono-numbers text-sm font-bold">
                      {job.pipeline.offer}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <p className="font-mono-numbers text-[22px] font-bold text-primary">
                    {job.applicants}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    Applicants
                  </p>
                </div>
                <Link
                  href="/employer/pipeline"
                  className="px-6 py-2 bg-gradient-primary-c text-on-primary rounded-full font-label-lg text-label-lg hover:shadow-md transition-all whitespace-nowrap"
                >
                  View Pipeline
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Link
        href="/employer/post-job"
        className="fixed bottom-8 right-8 bg-gradient-primary-c text-on-primary px-6 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center gap-2 z-50"
      >
        <PortalIcon name="add" />
        <span className="font-label-lg text-label-lg font-bold">
          Post New Job
        </span>
      </Link>
    </div>
  );
}

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <div key={pathname} className="flex-1 min-w-0 animate-tab-enter">
      {children}
    </div>
  );
}

export function EmployerSettingsPage() {
  return (
    <div className="flex-1 md:ml-sidebar-width flex flex-col min-h-screen bg-background pb-24">
      {/* Top Navigation Area (Mobile Only) */}
      <header className="md:hidden flex justify-between items-center w-full px-4 h-16 bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant">
        <h1 className="font-headline-sm text-headline-sm font-bold text-primary">Settings</h1>
        <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
          <img
            alt="User Avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU5XX34hWYBvCxR5-WAGfKzDRugQLgCaPL7nR4GD8ISrlTZNLFw2rYEt7A2gnQaKb_GeHetOD70BTJGMQlXJqLkrKO-VJeEY78LohqXoMw-K6vX5lvkhwxIYZv7N1HbA_CTWO4eWjzbSuWBp30wf7gvTG1M2UH6IMeh_V6yQiAN_0I46CFwOsxdImlaOSwQtdX0MvKsJQSvVQSuedIZRUuBQwfsYIQQ3v9XRzgFIuhYfJ8ZHAPWJ2sbmGN5FDjJ2D_mgVq0C3gAHk"
          />
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-margin-desktop pt-8 pb-12 w-full">
        <div className="mb-10">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Settings &amp; Configuration</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Manage your workspace preferences, security configurations, and external service integrations to optimize your recruitment workflow.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Account Security Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-surface-container-lowest rounded-[24px] p-[32px] shadow-ambient-soft border border-surface-variant flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary-container"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed">
                <PortalIcon name="security" className="text-[28px]" />
              </div>
              <span className="bg-error-container text-on-error-container font-label-sm text-label-sm px-3 py-1 rounded-full flex items-center gap-1">
                <PortalIcon name="error" className="text-[14px]" /> Needs Attention
              </span>
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface mb-2">Account Security</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-1">
              Two-factor authentication is currently disabled for your workspace administrators.
            </p>
            <button className="w-full py-3 rounded-full border border-outline hover:bg-surface-container-low transition-colors font-label-lg text-label-lg text-on-surface font-medium flex items-center justify-center gap-2 group-hover:border-primary group-hover:text-primary">
              Configure 2FA
              <PortalIcon name="arrow_forward" className="text-[18px]" />
            </button>
          </div>

          {/* Integrations Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-lowest rounded-[24px] p-[32px] shadow-ambient-soft border border-surface-variant flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-fixed">
                  <PortalIcon name="extension" className="text-[28px]" />
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-on-surface">Active Integrations</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">Connected ATS and HRIS platforms</p>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-on-surface transition-colors">
                <PortalIcon name="add" />
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Workday */}
              <div className="p-4 rounded-xl border border-outline-variant bg-surface-bright flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#005CB9]/10 flex items-center justify-center text-[#005CB9] font-bold">W</div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface text-[15px]">Workday</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[13px] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Synced 2m ago
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono-data text-mono-data text-on-surface">98.4%</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Uptime</p>
                </div>
              </div>
              {/* Greenhouse */}
              <div className="p-4 rounded-xl border border-outline-variant bg-surface-bright flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-[#00B289]/10 flex items-center justify-center text-[#00B289] font-bold">G</div>
                  <div>
                    <h4 className="font-title-md text-title-md text-on-surface text-[15px]">Greenhouse</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-[13px] flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#10B981]"></span> Synced 15m ago
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono-data text-mono-data text-on-surface">99.9%</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Uptime</p>
                </div>
              </div>
            </div>
          </div>

          {/* Email Templates Card */}
          <div className="col-span-1 bg-surface-container-lowest rounded-[24px] p-[32px] shadow-ambient-soft border border-surface-variant flex flex-col">
            <div className="w-12 h-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface mb-6">
              <PortalIcon name="mail" className="text-[28px]" />
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface mb-2">Email Templates</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6 flex-1">
              Standardize your outreach with customizable templates for candidate communication.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm">
                <span className="font-body-md text-on-surface">Active Templates</span>
                <span className="font-mono-data text-on-surface font-bold">12</span>
              </div>
              <div className="w-full bg-surface-variant rounded-full h-1.5">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: "45%" }}></div>
              </div>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-right">45% Usage Rate</p>
            </div>
            <button className="w-full py-2.5 rounded-full bg-surface-container-high hover:bg-surface-variant transition-colors font-label-lg text-label-lg text-on-surface font-medium">
              Manage Templates
            </button>
          </div>

          {/* Subscription Plan Card */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-surface-container-lowest to-surface-bright rounded-[24px] p-[32px] shadow-ambient-soft border border-primary/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary-fixed-dim/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex-1">
              <span className="bg-primary-container text-on-primary-container font-label-sm text-label-sm px-3 py-1 rounded-full mb-4 inline-block">Current Plan</span>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Enterprise Plus</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Billed annually on Nov 14, 2024</p>
              <div className="flex items-center gap-6 mt-6">
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Seats Used</p>
                  <p className="font-mono-data text-mono-data text-title-md text-on-surface">
                    42 <span className="text-outline text-body-md font-sans">/ 50</span>
                  </p>
                </div>
                <div className="h-8 w-px bg-outline-variant"></div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">AI Screening Volume</p>
                  <p className="font-mono-data text-mono-data text-title-md text-on-surface">
                    8.4k <span className="text-outline text-body-md font-sans">/ 10k</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 w-full md:w-auto flex flex-col gap-3">
              <button className="w-full md:w-auto px-6 py-3 rounded-full bg-primary text-on-primary font-label-lg text-label-lg font-bold hover:bg-primary/90 transition-colors shadow-md">
                Upgrade Plan
              </button>
              <button className="w-full md:w-auto px-6 py-3 rounded-full border border-outline hover:bg-surface-container-low transition-colors font-label-lg text-label-lg text-on-surface font-medium">
                Billing History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
