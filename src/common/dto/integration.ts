import t = require("io-ts");

export namespace Integration {
  export namespace SmartcarIntegrationRecord {
    export const dto = t.type({
      integrationId: t.string,
      refreshToken: t.string,
      shopId: t.number
    });
    export type Type = t.TypeOf<typeof dto>;
  }
}
