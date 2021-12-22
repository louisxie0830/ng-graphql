import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getPostById(id: number): Observable<any> {
    return this.apollo.watchQuery({
      query: gql`
      {
        getPostById(id:${id}) {
             postId
             title
             text
             category
             user {
               userName
               realName
               email
             }
           }
     }
      `
    }).valueChanges.pipe(map((result: any) => result));
  }
}

