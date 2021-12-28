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

  getUser(userId: number) {
    return this.apollo.watchQuery({
      query: gql`
      query {
        user(userId: ${userId}) {
          id,
          name,
          username,
          email,
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
          },
          posts {
            id,
            title,
            body,
            author {
              id,
              name,
              username,
              email
            }
            comments {
              id
            }
          }
        }
      }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }

  getComments(pagination: { limit: number, page: number }) {
    return this.apollo.watchQuery({
      query: gql`
        query {
          comments(pagination: {limit: ${pagination.limit}, page: ${pagination.page}}) {
            count,
            currentPage,
            totalPages,
            data {
              id,
              body,
              post {
                id,
                title,
                body,
                author {
                  id,
                  name,
                  username,
                  email,
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
                  },
                  posts {
                    id,
                    title,
                    body,
                    author {
                      id,
                      name,
                      username,
                      email,
                      address {
                        street,
                        suite,
                        city,
                        zipcode,
                        geo {
                          lat,
                          lng
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `
    }).valueChanges.pipe(map((result: any) => result.data && result.data.comments));
  }

  getComment(commentId: number | string) {
    return this.apollo.watchQuery({
      query: gql`
        query {
          comment(commentId: ${commentId}) {
            id,
            body,
            post {
              id,
              title,
              body
            }
          }
        }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }

  getPost(postId: number) {
    return this.apollo.watchQuery({
      query: gql`
        query {
          post(postId: ${1}) {
            id,
            title,
            body
          }
        }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }

  getPosts(pagination: { limit: number, page: number }) {
    return this.apollo.watchQuery({
      query: gql`
      query
      {
        posts(pagination: {limit: ${pagination.limit}, page: ${pagination.page}}) {
          count,
          currentPage,
          totalPages,
          data {
            id,
            title,
            body
          }
        }
      }
      `
    }).valueChanges.pipe(map((result: any) => result.data));
  }
}

