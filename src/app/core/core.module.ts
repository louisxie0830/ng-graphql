import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { environment } from '@environments/environment';

// apollo
// import { APOLLO_OPTIONS } from 'apollo-angular';
// import { HttpLink } from 'apollo-angular/http';
// import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';



// export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
//   return {
//     cache: new InMemoryCache(),
//     link: httpLink.create({
//       uri: environment.uri,
//     })
//   }
// }

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // HttpClientModule,
    FormsModule
  ],
  // providers: [{
  //   provide: APOLLO_OPTIONS,
  //   useFactory: createApollo,
  //   deps: [HttpLink]
  // }],
  exports: [
    FormsModule
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
