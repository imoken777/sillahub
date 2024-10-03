import type { Day, LanguageOptions, Period, Semester, TypeOfConduction } from './searchOptions';

export type CreateCourseDto = {
  courseName: string;
  semester: Semester;
  groupName: string;
  instructors: string[];
  languageOptions: LanguageOptions;
  typeOfConduction: TypeOfConduction;
  yearOfStudy: {
    startYear: number;
    endYear: number;
  } | null;
  //   syllabusLink: URL | null;
  syllabusLink: string | null;
  day: Day | null;
  period: Period | null;
};

export type CourseModel = CreateCourseDto & { courseId: number };
