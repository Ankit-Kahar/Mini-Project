import { Projects } from "./projects";

export interface Employee {
    empId: number;
    empName: string,
    position: string,
    joiningDate: Date,
    status: boolean,
    email: string,
    phoneNo: string,
    empCity: string,
    projects: Projects[]
}
