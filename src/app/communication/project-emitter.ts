import { Injectable, Output, EventEmitter } from '@angular/core';
import { Project } from '../Project/projects/Project';

@Injectable({
    providedIn: 'root'
})
export class RpsCommunicationService {

    /* Refresh language */
    @Output() projectEmitter = new EventEmitter<Project>();

    constructor() { }
}
