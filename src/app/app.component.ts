import { Component } from '@angular/core';
import { GraphqlService } from '@core/services/graphql.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-graphql';
  constructor(private graphqlService: GraphqlService) {
    this.graphqlService.getUsers({limit: 10, page: 1}).subscribe(res =>{
      console.error('res: ', res);
    })
    this.graphqlService.getUser(1).subscribe(res =>{
      console.error('res: ', res);
    })
  }
}
