import { Component, Input, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { UserDetailDialogComponent } from '../user-detail-dialog/user-detail-dialog.component';

@Component({
    selector: 'user-card',
    templateUrl: './user-card.component.html'
})

export class UserCardComponent implements OnInit {

    @Input() data: any[];

    constructor(
        public dialog: MatDialog
    ){}

    ngOnInit(): void{
        console.log(this.data);        
    }

    viewUserDetail(userId: string){
        const data = this.data.filter(item => item.id.value === userId);
        if(data.length){
            const dialogRef = this.dialog.open(UserDetailDialogComponent, {
                data: data[0]
            });
        }
    }

}