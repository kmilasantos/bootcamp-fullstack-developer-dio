import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})

export class CourseListComponent implements OnInit {
    
    courses: Course[] = [];
    
    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Angular 8: Forms',
                imageUrl: '/assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8786',
                duration: 120,
                rating: 4.5,
                releaseDate: 'November, 2, 2019',
                options: '',
            },
            {
                id: 2,
                name: 'Angular 8: HTTP',
                imageUrl: '/assets/images/http.png',
                price: 45.99,
                code: 'LXT-2094',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 4, 2019',
                options: '',
            }
        ]
    }
}