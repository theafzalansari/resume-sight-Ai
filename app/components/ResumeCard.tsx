import { Link } from 'react-router'
import ScoreCircle from "~/components/ScoreCircle";

const ResumeCard = ({ resume: { id, companyName, jobTitle, feedback, imagePath } }: { resume: Resume }) => {
    return (
        <Link
            to={`/resume/${id}`}
            className="animate-in fade-in duration-1000 group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white border border-gray-100"
        >
            {/* Image Section */}
            <div className="w-full overflow-hidden">
                <img
                    src={imagePath}
                    alt="resume"
                    className="w-full h-[220px] max-sm:h-[160px] object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Info Section */}
            <div className="flex items-center justify-between gap-3 p-4">
                <div className="flex flex-col gap-1 min-w-0">
                    <h2 className="text-lg font-bold text-black truncate">{companyName}</h2>
                    <h3 className="text-sm text-gray-500 truncate">{jobTitle}</h3>
                </div>

                <div className="flex-shrink-0">
                    <ScoreCircle score={feedback.overallScore} />
                </div>
            </div>
        </Link>
    )
}

export default ResumeCard