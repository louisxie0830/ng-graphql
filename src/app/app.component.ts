import { Component } from '@angular/core';
import { GraphqlService } from '@core/services/graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-graphql';
  comments$ = this.graphqlService.getComments({limit: 10, page: 1})
  constructor(private graphqlService: GraphqlService) {
    // this.graphqlService.getUsers({limit: 10, page: 1}).subscribe(res =>{
    //   console.error('res: ', res);
    // })
    this.graphqlService.getComments({limit: 10, page: 1}).subscribe(res =>{
      console.error('res: ', res);
    })
    // this.graphqlService.getUser(1).subscribe(res =>{
    //   console.error('res: ', JSON.stringify(res, null, 4));
    // })
  }
}
