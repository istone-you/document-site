import { AmplifyAuthCognitoStackTemplate } from "@aws-amplify/cli-extensibility-helper";

export function override(resources: AmplifyAuthCognitoStackTemplate) {
  resources.addCfnResource(
    {
      type: "AWS::Cognito::UserPoolIdentityProvider",
      properties: {
        ProviderName: "AWSSSO",
        ProviderType: "SAML",
        UserPoolId: resources.userPool.ref,
        AttributeMapping: {
          email:
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
        },
        ProviderDetails: {
          MetadataURL:
            "https://portal.sso.ap-northeast-1.amazonaws.com/saml/metadata/**********",
        },
      },
    },
    "SAML"
  );

  resources.addCfnResource(
    {
      type: "AWS::Cognito::UserPoolDomain",
      properties: {
        Domain: "**********",
        UserPoolId: resources.userPool.ref,
      },
    },
    "UserPoolDomain"
  );

  resources.userPoolClientWeb.callbackUrLs = [
    "https://**********/",
  ];
  resources.userPoolClientWeb.logoutUrLs = [
    "https://**********/",
  ];
  resources.userPoolClientWeb.supportedIdentityProviders = ["AWSSSO"];
  resources.userPoolClientWeb.allowedOAuthFlows = ["code"];
  resources.userPoolClientWeb.allowedOAuthFlowsUserPoolClient = true;
  resources.userPoolClientWeb.allowedOAuthScopes = [
    "openid",
    "email",
    "phone",
    "aws.cognito.signin.user.admin",
    "profile",
  ];
}
