import type { Route } from "./+types/home";
import {runMain} from "node:module";
import Navbar from "~/components/Navbar";
import {resumes} from "~/routes/constants";
import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Sight Ai" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">

    <Navbar />

    <section className="main-section">
        <div className="page-heading"></div>
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review Your Submission and check Ai-powered feedback.</h2>
      </section>

      {resumes.length > 0 && (
          <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
              ))}
          </div>
      )}



  </main>;
}
