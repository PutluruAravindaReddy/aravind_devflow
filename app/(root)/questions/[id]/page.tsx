import React from "react";

const QuestionDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  return (
    <div>
      <p>{id} : QuestionDetails</p>
    </div>
  );
};

export default QuestionDetails;
