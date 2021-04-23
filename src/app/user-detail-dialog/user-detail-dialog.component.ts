import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
    selector: 'user-detail-dialog',
    templateUrl: './user-detail-dialog.component.html'
})

export class UserDetailDialogComponent implements OnInit{

    constructor(
        public dialogRef: MatDialogRef<UserDetailDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ){}

    ngOnInit(): void{
        console.log(this.data);
    }

}