import t = require("io-ts");

export namespace SmartcarVehicleRelation {
  export const dto = t.type({
    id: t.string,
    vehicleId: t.string,
    vin: t.string,
    refreshToken: t.string,
    refreshExpiration: t.string
  });

  export type Type = t.TypeOf<typeof dto>;
}

export namespace SmartcarDataSyncRequest {
  export const dto = t.type({
    meta: t.type({
      dataSyncRequestId: t.string
    }),
    data: t.type({
      vehicleId: t.string,
      accessToken: t.string,
      shopId: t.number
    })
  });

  export type Type = t.TypeOf<typeof dto>;
}

export namespace SmartcarDataSyncResult {
  export const dto = t.type({
    meta: t.type({
      timestamp: t.string, // ISO 8601 timestamp
      request: SmartcarDataSyncRequest.dto
    }),
    data: t.intersection([
      t.type({
        status: t.union([t.literal("ok"), t.literal("error")])
      }),
      t.partial({
        errors: t.array(
          t.type({
            name: t.string,
            message: t.string
          })
        ),
        values: t.unknown
      })
    ])
  });

  export type Type = t.TypeOf<typeof dto>;
}
