import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '@core/services/graphql.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments$ = this.graphqlService.getComments({limit: 800, page: 1})
  constructor(private graphqlService: GraphqlService) { }

  ngOnInit(): void {
  }

}
