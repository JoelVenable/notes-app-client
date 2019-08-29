const vars = {
  s3: {
    REGION: process.env.S3_BUCKET_REGION,
    BUCKET: process.env.S3_BUCKET_NAME
  },
  apiGateway: {
    REGION: process.env.API_GATEWAY_REGION,
    URL: process.env.API_GATEWAY_URL
  },
  cognito: {
    REGION: process.env.COGNITO_REGION,
    USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
    APP_CLIENT_ID: process.env.COGNITO_APP_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.IDENTITY_POOL_ID
  }
};



export const awsConfigure = {
  Auth: {
    mandatorySignIn: true,
    region: vars.cognito.REGION,
    userPoolId: vars.cognito.USER_POOL_ID,
    identityPoolId: vars.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: vars.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: vars.s3.REGION,
    bucket: vars.s3.BUCKET,
    identityPoolId: vars.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "notes",
        endpoint: vars.apiGateway.API_GATEWAY_URL,
        region: vars.apiGateway.REGION
      }
    ]
  }
}
