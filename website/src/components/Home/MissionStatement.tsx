import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto flex flex-col w-full lg:flex-row items-center justify-center py-8 mt-4 lg:px-8">
        <div className="w-full lg:w-1/2 mr-8 pt-10 mt-5">
          <h2 className="text-3xl font-bold mb-4 pl-4">Our Mission</h2>
          <p className="text-lg pl-4">
            Pane Relievers is committed to providing high quality window
            cleaning services at an affordable price. We believe in honesty and
            integrity and take immense pride in our trade. We don't just worry
            about the bottom line- because we know that a good business is built
            around the timeless principles of honesty, transparency, trust and
            reliability. We know the value of an honest days work, and the
            importance of contributing to the community in a positive way. When
            you choose Pane Relievers- you aren't treated like just a number on
            an invoice- but like a valued friend. We treat your windows as if
            they were our own- with respect, care, and exceptional attention to
            detail. We only finish the job after achieving 100% customer
            satisfaction. Call us today and experience the difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
