import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.components.html',
    styleUrls: ['./star.components.html']
})

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;

    starWidth: number | undefined;

    ngOnChanges(): void {
        this.starWidth = this.rating * 94 / 5;
    }
}