import React from 'react';

const JobSection = () => {
  return (
    <div className="flex flex-col min-h-[100vh] p-5 items-center">
      <div className="mt-7 w-full lg:w-3/4">
        <p className="text-2xl lg:text-3xl font-bold mt-4 FONT_FAMILT text-center lg:text-left">
          Job Opportunities
        </p>
        <p className="text-sm lg:text-lg mt-3 font-semibold custom-fontfamily text-center lg:text-left">
          With IESCO, you will find the solutions you need to shape and redefine your future. A relentless focus on Harmony, Profession, Innovation, and Quality, which promotes a spirit of active participation within its ranks. And insightful, experienced support that helps you navigate the challenges of today, and position yourself to take full advantage of the opportunities that lie ahead.
        </p>
      </div>

      <div className="mt-6 w-full lg:w-3/4">
        <p className="text-2xl lg:text-3xl font-bold mt-4 FONT_FAMILT text-center lg:text-left">
          View Service Rules For Recruitment
        </p>
        <p className="text-sm lg:text-lg mt-3 font-semibold custom-fontfamily text-center lg:text-left">
          All applicants should view the Service Rules for Recruitment. If an applicant fulfills the requirements for the announced vacant post, then they would be eligible for the post.
        </p>
      </div>
    </div>
  );
};

export default JobSection;
