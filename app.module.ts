import { OAuthModule } from 'angular-oauth2-oidc';

@NgModule({
  imports: [
    // Other imports...
    OAuthModule.forRoot()
  ]
})
export class AppModule { }
