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
      <div className="flex-1 space-y-1">
        {employerMenuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`p-3 rounded-xl flex items-center gap-3 transition-all ${pathname === item.path ? "bg-secondary-fixed border-l-[3px] border-secondary text-primary font-bold" : "text-on-surface-variant hover:bg-surface-container-high"}`}
          >
            <PortalIcon name={item.icon} filled={pathname === item.path} />
            <span className="font-body-md text-body-md">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-auto space-y-1 pt-4 border-t border-outline-variant/20">
        <button
          type="button"
          className="text-on-surface-variant p-3 rounded-xl flex items-center gap-3 hover:bg-surface-container-high transition-colors w-full text-left"
        >
          <PortalIcon name="settings" />
          <span className="font-body-md text-body-md">Settings</span>
        </button>
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
  const [activeTab, setActiveTab] = useState<InterviewTab>("evaluation");

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
            Danial Razif
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
                    ? "bg-[#EEEDFE] text-[#26215C]"
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
          <div className="max-w-5xl mx-auto">
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

            {activeTab !== "evaluation" && (
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
  const [filter, setFilter] = useState<"all" | "action">("all");

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-[#F4F2FF]">
      <main className="px-margin-desktop pb-24 max-w-3xl mx-auto pt-10">
        {/* Header row */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-8">
          <div>
            <h1 className="text-[38px] font-bold text-[#26215C] leading-tight">
              Pipeline
            </h1>
            <p className="text-body-md text-on-surface-variant mt-1">
              Senior Full-Stack Developer
            </p>
          </div>
          <div className="flex gap-0 bg-white rounded-full p-1 border border-outline-variant/20 mt-1">
            {(["all", "action"] as const).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
                  filter === f
                    ? "bg-[#26215C] text-white"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {f === "all" ? "All" : "Requires Action"}
              </button>
            ))}
          </div>
        </div>

        {/* Stages */}
        <div className="space-y-8">
          {PIPELINE_STAGES.map((stage) => (
            <section key={stage.label}>
              {/* Stage divider */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-secondary whitespace-nowrap">
                  {stage.label} ({stage.count})
                </span>
                <div className="flex-1 h-px bg-outline-variant/30" />
              </div>

              {/* Candidate rows */}
              <div className="space-y-1">
                {stage.candidates.map((c) => {
                  const isTop = (c as any).topMatch;
                  return (
                    <Link
                      key={c.name}
                      href="/employer/candidate/1"
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group hover:bg-white/80 ${
                        isTop
                          ? "bg-white border-l-4 border-secondary rounded-l-none"
                          : "bg-transparent"
                      }`}
                    >
                      {/* Score */}
                      <span className="font-bold text-[15px] text-[#26215C] w-9 text-right shrink-0">
                        {c.score}%
                      </span>

                      {/* Avatar */}
                      {(c as any).img ? (
                        <img
                          src={(c as any).img}
                          alt={c.name}
                          className="w-10 h-10 rounded-full object-cover shrink-0"
                        />
                      ) : (
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                            (c as any).initialsColor ??
                            "bg-primary-fixed text-primary"
                          }`}
                        >
                          {(c as any).initials}
                        </div>
                      )}

                      {/* Name + sub */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-[#1a1a2e] group-hover:text-primary transition-colors">
                          {c.name}
                        </p>
                        {isTop ? (
                          <span className="text-xs font-bold text-secondary">
                            {c.sub}
                          </span>
                        ) : (
                          <p className="text-xs text-on-surface-variant mt-0.5">
                            {c.sub}
                          </p>
                        )}
                      </div>

                      {/* Badge or CTA */}
                      {isTop ? (
                        <button
                          type="button"
                          className="flex items-center gap-2 px-5 py-2.5 bg-[#26215C] hover:bg-[#534AB7] text-white text-sm font-bold rounded-full transition-colors shrink-0"
                          onClick={(e) => e.preventDefault()}
                        >
                          Prepare Offer
                          <PortalIcon
                            name="arrow_forward"
                            className="text-[15px]"
                          />
                        </button>
                      ) : (
                        <div className="flex items-center gap-3 shrink-0">
                          {(c as any).badge &&
                            (() => {
                              const b = (c as any).badge;
                              const badgeClass =
                                b.style === "amber"
                                  ? "bg-[#FDF4E7] text-[#7C4A00] border border-[#F5C842]/40"
                                  : "bg-white text-on-surface-variant border border-outline-variant/30";
                              return (
                                <span
                                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full ${badgeClass}`}
                                >
                                  {b.dot && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0" />
                                  )}
                                  {b.icon && (
                                    <PortalIcon
                                      name={b.icon}
                                      className="text-[13px]"
                                    />
                                  )}
                                  {b.text}
                                </span>
                              );
                            })()}
                          <button
                            type="button"
                            className="text-on-surface-variant/50 hover:text-on-surface transition-colors text-base tracking-widest px-1"
                            aria-label="More options"
                            onClick={(e) => e.preventDefault()}
                          >
                            •••
                          </button>
                        </div>
                      )}
                    </Link>
                  );
                })}
              </div>
            </section>
          ))}
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
