import { CourseService } from "./CourseService.js";
import { ExperienceService } from "./ExperienceService.js";

export function doLoad() {
  courseService = new CourseService();
  courseService.send();

  experienceService = new ExperienceService();
  experienceService.send();
}
