import { Project } from '../Project/projects/Project';
import { Resource } from '../Resource/Resource';
import { MainTechnologyService } from '../Services/Maintechnology-Service/main-technology.service';
import { MainTechnology } from '../Maintechnology/MainTechnology';

export class Assignment{
    public assignmentId: number;
    public mainRole: string;
    public startDate: string;
    public endDate: string;
    public allotment: number;
    public mainTechnology: MainTechnology;
    public project: Project;
    public resource: Resource;
}
