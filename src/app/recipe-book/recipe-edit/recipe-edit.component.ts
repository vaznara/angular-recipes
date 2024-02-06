import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private editId: number;
  private editMode = false;
  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((params: Params) => {
        this.editId = +params['id'];
      })

    this.route.data
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(data => this.editMode = !!data.editMode);

  }


}
