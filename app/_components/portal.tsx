"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

type EmptyStatePageProps = {
  title: string;
  description: string;
  icon: string;
  value: string;
  label: string;
  actionHref: string;
  actionLabel: string;
};

const MOCK_JOBS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    dept: "Engineering",
    location: "Remote",
    pay: "$140k - $180k",
    applicants: 47,
    status: "Screening",
  },
  {
    id: 2,
    title: "Product Designer",
    dept: "Design",
    location: "New York / Hybrid",
    pay: "$110k - $140k",
    applicants: 31,
    status: "Interview",
  },
  {
    id: 3,
    title: "Data Analyst",
    dept: "Data",
    location: "London / Hybrid",
    pay: "$90k - $120k",
    applicants: 23,
    status: "Offer",
  },
] as const;

const employerMenuItems = [
  { path: "/employer", label: "Dashboard", icon: "dashboard" },
  { path: "/employer/jobs", label: "Jobs", icon: "work" },
  { path: "/employer/pipeline", label: "Pipeline", icon: "account_tree" },
  { path: "/employer/interviews", label: "Interviews", icon: "event" },
  { path: "/employer/archive", label: "Archive", icon: "archive" },
] as const;

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

function PortalIcon({
  name,
  filled = false,
  className = "",
}: {
  name: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? "fill" : ""} ${className}`.trim()}
    >
      {name}
    </span>
  );
}

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

export function StudentSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex flex-col h-full py-6 px-4 z-50 fixed left-0 top-0 w-sidebar-width bg-surface-container-low border-r border-outline-variant/30">
      <div
        className="mb-8 px-4 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold">
            C
          </div>
          <h1 className="font-title-lg text-title-lg font-bold text-primary">
            CareerBridge+
          </h1>
        </div>
        <p className="text-on-surface-variant font-label-sm uppercase tracking-wider">
          Intelligence Platform
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {studentMenuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${pathname === item.path ? "text-primary font-bold bg-secondary-container/20 border-l-4 border-secondary" : "text-on-surface-variant hover:bg-surface-container-highest"}`}
          >
            <PortalIcon name={item.icon} filled={pathname === item.path} />
            <span className="font-label-lg text-label-lg">{item.label}</span>
          </Link>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-4">
        <button
          type="button"
          className="w-full py-3 rounded-full bg-gradient-primary-c text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-90 transition-opacity"
        >
          Upgrade to Pro
        </button>
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant rounded-xl hover:bg-surface-container-highest transition-all duration-200"
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
          className="flex items-center gap-3 text-on-surface-variant px-4 py-2 hover:bg-surface-container-highest rounded-full"
        >
          <PortalIcon name="logout" />
          <span className="font-label-lg text-label-lg">Logout</span>
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
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PortalIcon
                name="school"
                className="text-[40px] text-secondary"
              />
            </div>
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
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PortalIcon name="work" className="text-[40px] text-secondary" />
            </div>
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
            <div className="w-16 h-16 rounded-full bg-secondary-container/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <PortalIcon
                name="account_balance"
                className="text-[40px] text-secondary"
              />
            </div>
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
          {MOCK_JOBS.map((job) => (
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
  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen p-8 max-w-container-max mx-auto w-full">
      <div className="mb-8">
        <h2 className="font-headline-sm text-headline-sm font-bold text-on-background">
          Create Job Posting
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Setup the requirements for the new open role.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-3 sticky top-28">
          <ul className="space-y-8 relative pl-4 border-l border-outline-variant/50">
            <li className="flex items-start gap-4">
              <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center relative left-[-1.3rem] z-10">
                <PortalIcon name="check" className="text-[14px]" />
              </div>
              <div>
                <p className="font-label-lg text-label-lg font-bold text-primary">
                  Job Details
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 opacity-50">
              <div className="w-6 h-6 rounded-full bg-surface border border-outline-variant text-outline flex items-center justify-center relative left-[-1.3rem] z-10">
                2
              </div>
              <div>
                <p className="font-label-lg text-label-lg">Compensation</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-9 bg-surface-container-lowest rounded-[24px] shadow-sm p-8 border border-outline-variant/20 relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-primary-c"></div>
          <form className="space-y-8">
            <div className="space-y-4">
              <label className="block font-label-lg text-label-lg text-on-surface">
                Job Title
              </label>
              <input
                className="w-full bg-surface rounded-lg border border-outline px-4 py-2.5"
                placeholder="e.g. Senior Frontend Engineer"
              />
              <label className="block font-label-lg text-label-lg text-on-surface">
                Description
              </label>
              <textarea
                className="w-full bg-surface rounded-lg border border-outline px-4 py-3 min-h-37.5"
                placeholder="Describe the role..."
              ></textarea>
            </div>
            <div className="pt-6">
              <Link
                href="/employer"
                className="w-full py-4 rounded-full font-title-md text-on-primary bg-gradient-primary-c flex items-center justify-center gap-2"
              >
                Post Opening <PortalIcon name="send" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function PipelinePage() {
  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-surface">
      <header className="sticky top-0 w-full z-40 bg-surface/90 backdrop-blur-md flex justify-between items-center px-margin-desktop py-4">
        <h2 className="font-headline-sm text-headline-sm font-bold text-primary">
          Candidate Pipeline
        </h2>
      </header>
      <main className="px-4 md:px-margin-desktop pb-24 max-w-200 mx-auto mt-8">
        <div className="mb-12">
          <h1 className="font-display-lg text-display-lg text-primary tracking-tight">
            Pipeline
          </h1>
          <p className="font-title-md text-title-md text-on-surface-variant mt-2">
            Senior Full-Stack Developer
          </p>
        </div>
        <div className="space-y-12">
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h2 className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest font-bold">
                Initial Review (3)
              </h2>
              <div className="flex-1 h-px bg-surface-container-high"></div>
            </div>
            {[
              {
                name: "Marcus Chen",
                score: "98%",
                desc: "Prev. Staff Engineer @ Acme Corp",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYUQbkbSVR0T0v2sJvgIVc6ddfQsKAfIex1pNXeAKxCthqeyHYlMF-qsF6K2iIAnPGrCa3fpUIiDaDdtp4DWY4qkzStoCTC_vGF9ECsWURDIWPR196tAIcF5KUHY4zmdrU3NcT5s9gL5CUzEI2qPjveWwUwyb1LGtGcqMni1si0l71tkKFHNRoWngeEkjzxI-Q_5in-WetKdx_OdIgvA5ZLYJzD_bXcWBb1shL7OthOepjzjlKSZnucitsMt_OSG33XL6uQxfvFMQ",
              },
              {
                name: "Sarah Jenkins",
                score: "94%",
                desc: "Senior Developer @ FinTech startup",
                initial: "SJ",
              },
            ].map((candidate, index) => (
              <Link
                key={index}
                href="/employer/candidate/1"
                className="group flex items-center justify-between py-5 px-6 rounded-2xl hover:bg-surface-container-lowest transition-all border border-transparent hover:border-surface-container-high hover:shadow-sm"
              >
                <div className="flex items-center gap-6">
                  <div className="font-mono-data text-mono-data text-[22px] font-bold text-primary w-14 text-right">
                    {candidate.score}
                  </div>
                  {candidate.img ? (
                    <img
                      src={candidate.img}
                      className="w-12 h-12 rounded-full object-cover"
                      alt={candidate.name}
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-secondary-fixed text-primary flex items-center justify-center font-bold">
                      {candidate.initial}
                    </div>
                  )}
                  <div>
                    <h3 className="font-title-md text-on-surface group-hover:text-primary">
                      {candidate.name}
                    </h3>
                    <p className="font-body-md text-on-surface-variant">
                      {candidate.desc}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                  Applied 2h ago
                </span>
              </Link>
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export function CandidateDetail() {
  const router = useRouter();

  return (
    <div className="flex-1 md:ml-sidebar-width min-h-screen bg-background">
      <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 h-16 flex items-center px-margin-desktop justify-between">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-primary font-label-lg"
          type="button"
        >
          <PortalIcon name="arrow_back" /> Back
        </button>
      </header>
      <main className="p-margin-desktop max-w-container-max mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <section className="md:col-span-4 space-y-6">
            <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-card-soft border-t-4 border-secondary">
              <h2 className="font-title-lg text-on-surface mb-1">
                Eleanor Vance
              </h2>
              <p className="font-body-md text-on-surface-variant mb-6">
                4 Years Experience
              </p>
              <div className="border-t pt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <PortalIcon name="mail" className="text-primary" />{" "}
                  <span className="font-mono-data">e.vance@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <PortalIcon name="location_on" className="text-primary" /> San
                  Francisco, CA
                </div>
              </div>
            </div>
          </section>
          <section className="md:col-span-8 space-y-6">
            <div className="bg-surface-container-lowest rounded-[24px] p-card-padding shadow-card-soft flex flex-col items-center">
              <h2 className="font-title-lg text-on-surface mb-8">
                AI Match Score
              </h2>
              <div className="relative w-48 h-48 flex items-center justify-center rounded-full border-8 border-surface-container">
                <div className="absolute inset-0 rounded-full border-8 border-primary border-t-transparent border-r-transparent transform -rotate-45"></div>
                <span className="font-display-lg text-primary">88%</span>
              </div>
              <p className="mt-6 text-on-surface-variant text-center max-w-xs">
                High probability of success based on skill alignment.
              </p>
            </div>
          </section>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 md:left-[256px] right-0 bg-surface border-t py-4 px-6 flex justify-center gap-4">
        <button
          className="flex-1 max-w-xs py-3 rounded-full bg-surface-container text-on-surface font-bold border"
          type="button"
        >
          Reject
        </button>
        <button
          className="flex-1 max-w-xs py-3 rounded-full bg-gradient-primary-c text-on-primary font-bold"
          type="button"
        >
          Advance to Offer
        </button>
      </div>
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

export function StudentDashboard() {
  return (
    <div className="flex-1 md:ml-sidebar-width pt-20 px-8 pb-12">
      <main className="max-w-container-max mx-auto w-full">
        <div className="w-full h-25 rounded-[24px] bg-gradient-primary-c flex flex-col justify-center px-card-padding mb-6 text-on-primary">
          <h2 className="font-headline-sm font-bold">
            Good morning, Sarah Jenkins
          </h2>
          <p className="font-body-md">
            Your career readiness score improved by +4 points this week
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-[24px] p-8 shadow-card-soft border border-outline-variant/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-title-lg mb-2">Career Readiness Score</h3>
                  <p className="text-on-surface-variant">
                    You're on the right track!
                  </p>
                </div>
                <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-10 border-surface-container">
                  <div className="absolute inset-0 rounded-full border-10 border-secondary border-t-transparent transform -rotate-45"></div>
                  <span className="text-4xl font-mono-data font-bold text-primary">
                    72
                  </span>
                </div>
                <div className="flex-1 grid grid-cols-3 md:grid-cols-1 gap-4 text-right">
                  <div>
                    <p className="font-bold text-primary">3</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">
                      Paths
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-secondary">5</p>
                    <p className="text-label-sm text-on-surface-variant uppercase">
                      Skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#fef3c7] rounded-2xl p-6 border border-[#fde68a] flex items-center gap-4">
              <PortalIcon name="warning" className="text-4xl text-amber-600" />
              <div>
                <h4 className="font-bold text-amber-900">
                  Cloud skills missing
                </h4>
                <p className="text-amber-800">
                  Adding AWS or GCP could boost your score by +12 points.
                </p>
              </div>
              <Link
                href="/student/gaps"
                className="ml-auto bg-white px-4 py-2 rounded-full text-amber-900 border font-bold"
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white rounded-[24px] p-6 shadow-card-soft border">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW22ZzLzBxfPNQsDn2L32lwKW-p2LICQqS3G00Cl7cxsTER_n8oUlWgNYEOC0NrvQCQxkZosrDbRJZ2HS1yDYMUn3rq6cb1BObHfGPt0hXEHtYdQA5F6mQa7x44QlGSpOBIQf1MuhQ2MmkO5CQ5eBC7WtYGc3e-JsW8XEOpguaOEF2b71VS0lr8EM6-pZbyTvyBj7Uv3vHxDDGv0Y0-r4bIZ_k5H2a3pDHt92TkD6T_GQF6H5Cm-YTiRgXWccmmqVmPy-uVvoYS8o"
                  className="w-16 h-16 rounded-full"
                  alt="Sarah Jenkins"
                />
                <div>
                  <h3 className="font-bold">Sarah Jenkins</h3>
                  <p className="text-on-surface-variant">CS, B.S.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <PortalIcon name="school" /> Univ of Technology
                </div>
                <div className="space-y-2">
                  <p className="text-label-lg font-bold">Skills</p>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node", "Python"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-surface-container px-2 py-1 rounded text-label-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export function SkillGapPage() {
  return (
    <div className="md:ml-sidebar-width pt-20 px-8 flex-1">
      <div className="max-w-container-max mx-auto pb-24">
        <div className="bg-surface-container-low rounded-[24px] p-card-padding flex items-center justify-between shadow-card-soft mb-8 border">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
              <PortalIcon name="terminal" className="text-3xl" />
            </div>
            <div>
              <h1 className="text-headline-lg">Backend Engineer</h1>
              <p className="text-on-surface-variant">
                Target role for your career path
              </p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="w-20 h-20 rounded-full border-4 border-secondary flex items-center justify-center">
              <span className="text-2xl font-bold">87%</span>
            </div>
            <div className="flex flex-col gap-1 border-l pl-8">
              <p className="flex justify-between gap-4">
                <span>Ready</span>{" "}
                <span className="font-bold text-secondary">3</span>
              </p>
              <p className="flex justify-between gap-4">
                <span>Missing</span>{" "}
                <span className="font-bold text-error">4</span>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-title-lg text-primary">Skills to Close</h3>
            <div className="bg-white p-6 rounded-3xl border-t-4 border-error shadow-sm">
              <h4 className="font-bold">Docker</h4>
              <div className="w-full bg-surface-variant h-2 rounded mt-2"></div>
              <p className="mt-4 text-on-surface-variant text-body-md">
                Containerization fundamentals. (0%)
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-title-lg text-primary">Path Progress</h3>
            <div className="bg-white p-6 rounded-3xl border shadow-sm">
              <div className="flex justify-between font-bold mb-2">
                <span>Completion</span> <span>42%</span>
              </div>
              <div className="w-full h-3 bg-surface-variant rounded overflow-hidden">
                <div className="bg-primary h-full w-[42%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TalentPoolPage() {
  return (
    <div className="ml-sidebar-width pt-20 px-8 flex-1">
      <div className="flex flex-col gap-6 max-w-container-max mx-auto">
        <div className="bg-linear-to-r from-surface-container-low to-surface-container p-6 rounded-2xl border flex justify-between items-end">
          <div>
            <h2 className="text-headline-lg">Talent Pool Directory</h2>
            <p>Explore and match students based on readiness.</p>
          </div>
          <div className="text-right">
            <p className="text-label-sm uppercase opacity-50">
              Active Profiles
            </p>
            <h3 className="text-headline-sm font-bold text-primary">3,847</h3>
          </div>
        </div>
        <div className="bg-white rounded-xl border overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-surface-container-low border-b text-label-sm uppercase">
              <tr>
                <th className="p-4">Student</th>
                <th className="p-4">Tech Readiness</th>
                <th className="p-4">Soft Skills</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Sarah Tan", tech: "92%", soft: "88%", id: "104829" },
                {
                  name: "Danial Razif",
                  tech: "85%",
                  soft: "90%",
                  id: "104910",
                },
                {
                  name: "Priya Sharma",
                  tech: "76%",
                  soft: "82%",
                  id: "105002",
                },
              ].map((student) => (
                <tr
                  key={student.id}
                  className="border-b hover:bg-surface-container-low transition-colors group cursor-pointer"
                >
                  <td className="p-4 flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      {student.name[0]}
                    </div>
                    <div>
                      <p className="font-bold">{student.name}</p>
                      <p className="text-xs opacity-50">ID: {student.id}</p>
                    </div>
                  </td>
                  <td className="p-4">{student.tech}</td>
                  <td className="p-4">{student.soft}</td>
                  <td className="p-4 text-right">
                    <button
                      className="text-primary font-bold hover:underline"
                      type="button"
                    >
                      View Profile
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

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
    <div className="md:ml-sidebar-width pt-20 px-8 flex-1">
      <div className="max-w-container-max mx-auto pb-24">
        <div className="bg-surface-container-low rounded-[24px] p-card-padding shadow-card-soft border flex items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
              <PortalIcon name={icon} className="text-3xl" />
            </div>
            <div>
              <h1 className="text-headline-lg">{title}</h1>
              <p className="text-on-surface-variant">{description}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-label-sm uppercase opacity-50">{label}</p>
            <h3 className="text-headline-sm font-bold text-primary">{value}</h3>
          </div>
        </div>
        <div className="mt-8 bg-white rounded-3xl border p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-title-lg font-bold text-on-surface mb-2">
              This section is ready for expansion.
            </h2>
            <p className="text-on-surface-variant max-w-2xl">
              The route exists so the sidebar navigation stays functional and
              the app router mirrors the original portal structure.
            </p>
          </div>
          <Link
            href={actionHref}
            className="px-6 py-3 rounded-full bg-gradient-primary-c text-on-primary font-bold whitespace-nowrap"
          >
            {actionLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
