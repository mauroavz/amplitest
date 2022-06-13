import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  description?: string | null;
  name?: string | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput;
};
