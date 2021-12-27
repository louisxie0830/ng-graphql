import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  constructor(private apollo: Apollo) { }

  getUsers(pagination: { limit: number, page: number }) {
    return this.apollo.watchQuery({
      query: gql`
      query
      {
        users(pagination: {limit: ${pagination.limit}, page: ${pagination.page}}) {
          count,
          currentPage,
          totalPages,
          data {
            id,
            name,
            username,
            email
            address {
              street,
              suite,
              city,
              zipcode,
              geo {
                lat,
                lng
              }
            },
            phone,
            website,
            company {
              name,
              catchPhrase,
              bs
            }
          }
        }
      }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }

  getUser(userId: 1) {
    return this.apollo.watchQuery({
      query: gql`
      query {
        user(userId: ${userId}) {
          id,
          name,
          username,
          email
        }
      }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }
}

