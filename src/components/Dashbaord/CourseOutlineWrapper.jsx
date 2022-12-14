import CourseOutline from "./CourseOutline";

const CourseOutlineWrapper = () => {
  return (
    <div className="bg-gray-100 rounded-r-[3.5rem] rounded-bl-[3.5rem] p-5 mt-4 md:h-[70vh]  md:max-h-[40rem] overflow-x-scroll coursesOutline">
      <CourseOutline />
      <CourseOutline />
      <CourseOutline />
      <CourseOutline />
      <CourseOutline />
      <CourseOutline />
      <CourseOutline />
    </div>
  );
};

export default CourseOutlineWrapper;
