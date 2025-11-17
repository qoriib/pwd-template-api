
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TenantProfile
 * 
 */
export type TenantProfile = $Result.DefaultSelection<Prisma.$TenantProfilePayload>
/**
 * Model UserToken
 * 
 */
export type UserToken = $Result.DefaultSelection<Prisma.$UserTokenPayload>
/**
 * Model PropertyCategory
 * 
 */
export type PropertyCategory = $Result.DefaultSelection<Prisma.$PropertyCategoryPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model RoomImage
 * 
 */
export type RoomImage = $Result.DefaultSelection<Prisma.$RoomImagePayload>
/**
 * Model RoomAvailability
 * 
 */
export type RoomAvailability = $Result.DefaultSelection<Prisma.$RoomAvailabilityPayload>
/**
 * Model RoomPriceAdjustment
 * 
 */
export type RoomPriceAdjustment = $Result.DefaultSelection<Prisma.$RoomPriceAdjustmentPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model PaymentProof
 * 
 */
export type PaymentProof = $Result.DefaultSelection<Prisma.$PaymentProofPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  USER: 'USER',
  TENANT: 'TENANT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const AuthProvider: {
  EMAIL: 'EMAIL',
  GOOGLE: 'GOOGLE',
  FACEBOOK: 'FACEBOOK'
};

export type AuthProvider = (typeof AuthProvider)[keyof typeof AuthProvider]


export const TokenType: {
  RESET_PASSWORD: 'RESET_PASSWORD'
};

export type TokenType = (typeof TokenType)[keyof typeof TokenType]


export const BookingStatus: {
  WAITING_PAYMENT: 'WAITING_PAYMENT',
  WAITING_CONFIRMATION: 'WAITING_CONFIRMATION',
  PROCESSING: 'PROCESSING',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PriceAdjustmentType: {
  NOMINAL: 'NOMINAL'
};

export type PriceAdjustmentType = (typeof PriceAdjustmentType)[keyof typeof PriceAdjustmentType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type AuthProvider = $Enums.AuthProvider

export const AuthProvider: typeof $Enums.AuthProvider

export type TokenType = $Enums.TokenType

export const TokenType: typeof $Enums.TokenType

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PriceAdjustmentType = $Enums.PriceAdjustmentType

export const PriceAdjustmentType: typeof $Enums.PriceAdjustmentType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tenantProfile`: Exposes CRUD operations for the **TenantProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TenantProfiles
    * const tenantProfiles = await prisma.tenantProfile.findMany()
    * ```
    */
  get tenantProfile(): Prisma.TenantProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userToken`: Exposes CRUD operations for the **UserToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTokens
    * const userTokens = await prisma.userToken.findMany()
    * ```
    */
  get userToken(): Prisma.UserTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyCategory`: Exposes CRUD operations for the **PropertyCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyCategories
    * const propertyCategories = await prisma.propertyCategory.findMany()
    * ```
    */
  get propertyCategory(): Prisma.PropertyCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomImage`: Exposes CRUD operations for the **RoomImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomImages
    * const roomImages = await prisma.roomImage.findMany()
    * ```
    */
  get roomImage(): Prisma.RoomImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomAvailability`: Exposes CRUD operations for the **RoomAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomAvailabilities
    * const roomAvailabilities = await prisma.roomAvailability.findMany()
    * ```
    */
  get roomAvailability(): Prisma.RoomAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roomPriceAdjustment`: Exposes CRUD operations for the **RoomPriceAdjustment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoomPriceAdjustments
    * const roomPriceAdjustments = await prisma.roomPriceAdjustment.findMany()
    * ```
    */
  get roomPriceAdjustment(): Prisma.RoomPriceAdjustmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentProof`: Exposes CRUD operations for the **PaymentProof** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentProofs
    * const paymentProofs = await prisma.paymentProof.findMany()
    * ```
    */
  get paymentProof(): Prisma.PaymentProofDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TenantProfile: 'TenantProfile',
    UserToken: 'UserToken',
    PropertyCategory: 'PropertyCategory',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Room: 'Room',
    RoomImage: 'RoomImage',
    RoomAvailability: 'RoomAvailability',
    RoomPriceAdjustment: 'RoomPriceAdjustment',
    Booking: 'Booking',
    PaymentProof: 'PaymentProof',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tenantProfile" | "userToken" | "propertyCategory" | "property" | "propertyImage" | "room" | "roomImage" | "roomAvailability" | "roomPriceAdjustment" | "booking" | "paymentProof" | "review"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TenantProfile: {
        payload: Prisma.$TenantProfilePayload<ExtArgs>
        fields: Prisma.TenantProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TenantProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TenantProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findFirst: {
            args: Prisma.TenantProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TenantProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          findMany: {
            args: Prisma.TenantProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>[]
          }
          create: {
            args: Prisma.TenantProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          createMany: {
            args: Prisma.TenantProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TenantProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          update: {
            args: Prisma.TenantProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          deleteMany: {
            args: Prisma.TenantProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TenantProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TenantProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TenantProfilePayload>
          }
          aggregate: {
            args: Prisma.TenantProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTenantProfile>
          }
          groupBy: {
            args: Prisma.TenantProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TenantProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TenantProfileCountAggregateOutputType> | number
          }
        }
      }
      UserToken: {
        payload: Prisma.$UserTokenPayload<ExtArgs>
        fields: Prisma.UserTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findFirst: {
            args: Prisma.UserTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          findMany: {
            args: Prisma.UserTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>[]
          }
          create: {
            args: Prisma.UserTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          createMany: {
            args: Prisma.UserTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          update: {
            args: Prisma.UserTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          deleteMany: {
            args: Prisma.UserTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTokenPayload>
          }
          aggregate: {
            args: Prisma.UserTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToken>
          }
          groupBy: {
            args: Prisma.UserTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTokenCountArgs<ExtArgs>
            result: $Utils.Optional<UserTokenCountAggregateOutputType> | number
          }
        }
      }
      PropertyCategory: {
        payload: Prisma.$PropertyCategoryPayload<ExtArgs>
        fields: Prisma.PropertyCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findFirst: {
            args: Prisma.PropertyCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          findMany: {
            args: Prisma.PropertyCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>[]
          }
          create: {
            args: Prisma.PropertyCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          createMany: {
            args: Prisma.PropertyCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          update: {
            args: Prisma.PropertyCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PropertyCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyCategoryPayload>
          }
          aggregate: {
            args: Prisma.PropertyCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyCategory>
          }
          groupBy: {
            args: Prisma.PropertyCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCategoryCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      RoomImage: {
        payload: Prisma.$RoomImagePayload<ExtArgs>
        fields: Prisma.RoomImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findFirst: {
            args: Prisma.RoomImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          findMany: {
            args: Prisma.RoomImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>[]
          }
          create: {
            args: Prisma.RoomImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          createMany: {
            args: Prisma.RoomImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          update: {
            args: Prisma.RoomImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          deleteMany: {
            args: Prisma.RoomImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomImagePayload>
          }
          aggregate: {
            args: Prisma.RoomImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomImage>
          }
          groupBy: {
            args: Prisma.RoomImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomImageCountArgs<ExtArgs>
            result: $Utils.Optional<RoomImageCountAggregateOutputType> | number
          }
        }
      }
      RoomAvailability: {
        payload: Prisma.$RoomAvailabilityPayload<ExtArgs>
        fields: Prisma.RoomAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.RoomAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          findMany: {
            args: Prisma.RoomAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>[]
          }
          create: {
            args: Prisma.RoomAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          createMany: {
            args: Prisma.RoomAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          update: {
            args: Prisma.RoomAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.RoomAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.RoomAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomAvailability>
          }
          groupBy: {
            args: Prisma.RoomAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<RoomAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      RoomPriceAdjustment: {
        payload: Prisma.$RoomPriceAdjustmentPayload<ExtArgs>
        fields: Prisma.RoomPriceAdjustmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomPriceAdjustmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomPriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          findFirst: {
            args: Prisma.RoomPriceAdjustmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomPriceAdjustmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          findMany: {
            args: Prisma.RoomPriceAdjustmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>[]
          }
          create: {
            args: Prisma.RoomPriceAdjustmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          createMany: {
            args: Prisma.RoomPriceAdjustmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomPriceAdjustmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          update: {
            args: Prisma.RoomPriceAdjustmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          deleteMany: {
            args: Prisma.RoomPriceAdjustmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomPriceAdjustmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomPriceAdjustmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPriceAdjustmentPayload>
          }
          aggregate: {
            args: Prisma.RoomPriceAdjustmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoomPriceAdjustment>
          }
          groupBy: {
            args: Prisma.RoomPriceAdjustmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomPriceAdjustmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoomPriceAdjustmentCountArgs<ExtArgs>
            result: $Utils.Optional<RoomPriceAdjustmentCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      PaymentProof: {
        payload: Prisma.$PaymentProofPayload<ExtArgs>
        fields: Prisma.PaymentProofFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentProofFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentProofFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          findFirst: {
            args: Prisma.PaymentProofFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentProofFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          findMany: {
            args: Prisma.PaymentProofFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>[]
          }
          create: {
            args: Prisma.PaymentProofCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          createMany: {
            args: Prisma.PaymentProofCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentProofDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          update: {
            args: Prisma.PaymentProofUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          deleteMany: {
            args: Prisma.PaymentProofDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentProofUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentProofUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentProofPayload>
          }
          aggregate: {
            args: Prisma.PaymentProofAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentProof>
          }
          groupBy: {
            args: Prisma.PaymentProofGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentProofGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentProofCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentProofCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tenantProfile?: TenantProfileOmit
    userToken?: UserTokenOmit
    propertyCategory?: PropertyCategoryOmit
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    room?: RoomOmit
    roomImage?: RoomImageOmit
    roomAvailability?: RoomAvailabilityOmit
    roomPriceAdjustment?: RoomPriceAdjustmentOmit
    booking?: BookingOmit
    paymentProof?: PaymentProofOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tokens: number
    bookings: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type TenantProfileCountOutputType
   */

  export type TenantProfileCountOutputType = {
    properties: number
  }

  export type TenantProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | TenantProfileCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * TenantProfileCountOutputType without action
   */
  export type TenantProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfileCountOutputType
     */
    select?: TenantProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TenantProfileCountOutputType without action
   */
  export type TenantProfileCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCategoryCountOutputType
   */

  export type PropertyCategoryCountOutputType = {
    properties: number
  }

  export type PropertyCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategoryCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategoryCountOutputType
     */
    select?: PropertyCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCategoryCountOutputType without action
   */
  export type PropertyCategoryCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    rooms: number
    images: number
    bookings: number
    reviews: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | PropertyCountOutputTypeCountRoomsArgs
    images?: boolean | PropertyCountOutputTypeCountImagesArgs
    bookings?: boolean | PropertyCountOutputTypeCountBookingsArgs
    reviews?: boolean | PropertyCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    images: number
    availabilities: number
    priceAdjustments: number
    bookings: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RoomCountOutputTypeCountImagesArgs
    availabilities?: boolean | RoomCountOutputTypeCountAvailabilitiesArgs
    priceAdjustments?: boolean | RoomCountOutputTypeCountPriceAdjustmentsArgs
    bookings?: boolean | RoomCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountAvailabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountPriceAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPriceAdjustmentWhereInput
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    isVerified: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    provider: $Enums.AuthProvider | null
    providerId: string | null
    isVerified: boolean | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phone: number
    passwordHash: number
    role: number
    provider: number
    providerId: number
    isVerified: number
    avatarUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phone?: true
    passwordHash?: true
    role?: true
    provider?: true
    providerId?: true
    isVerified?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string
    phone: string | null
    passwordHash: string | null
    role: $Enums.UserRole
    provider: $Enums.AuthProvider
    providerId: string | null
    isVerified: boolean
    avatarUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    isVerified?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenantProfile?: boolean | User$tenantProfileArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phone?: boolean
    passwordHash?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    isVerified?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phone" | "passwordHash" | "role" | "provider" | "providerId" | "isVerified" | "avatarUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenantProfile?: boolean | User$tenantProfileArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tenantProfile: Prisma.$TenantProfilePayload<ExtArgs> | null
      tokens: Prisma.$UserTokenPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      phone: string | null
      passwordHash: string | null
      role: $Enums.UserRole
      provider: $Enums.AuthProvider
      providerId: string | null
      isVerified: boolean
      avatarUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenantProfile<T extends User$tenantProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$tenantProfileArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly provider: FieldRef<"User", 'AuthProvider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.tenantProfile
   */
  export type User$tenantProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    where?: TenantProfileWhereInput
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    cursor?: UserTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TenantProfile
   */

  export type AggregateTenantProfile = {
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  export type TenantProfileAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantProfileSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TenantProfileMinAggregateOutputType = {
    id: number | null
    userId: number | null
    displayName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantProfileMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    displayName: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TenantProfileCountAggregateOutputType = {
    id: number
    userId: number
    displayName: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TenantProfileAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantProfileSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TenantProfileMinAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TenantProfileCountAggregateInputType = {
    id?: true
    userId?: true
    displayName?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TenantProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfile to aggregate.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TenantProfiles
    **/
    _count?: true | TenantProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TenantProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TenantProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TenantProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TenantProfileMaxAggregateInputType
  }

  export type GetTenantProfileAggregateType<T extends TenantProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTenantProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTenantProfile[P]>
      : GetScalarType<T[P], AggregateTenantProfile[P]>
  }




  export type TenantProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TenantProfileWhereInput
    orderBy?: TenantProfileOrderByWithAggregationInput | TenantProfileOrderByWithAggregationInput[]
    by: TenantProfileScalarFieldEnum[] | TenantProfileScalarFieldEnum
    having?: TenantProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TenantProfileCountAggregateInputType | true
    _avg?: TenantProfileAvgAggregateInputType
    _sum?: TenantProfileSumAggregateInputType
    _min?: TenantProfileMinAggregateInputType
    _max?: TenantProfileMaxAggregateInputType
  }

  export type TenantProfileGroupByOutputType = {
    id: number
    userId: number
    displayName: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TenantProfileCountAggregateOutputType | null
    _avg: TenantProfileAvgAggregateOutputType | null
    _sum: TenantProfileSumAggregateOutputType | null
    _min: TenantProfileMinAggregateOutputType | null
    _max: TenantProfileMaxAggregateOutputType | null
  }

  type GetTenantProfileGroupByPayload<T extends TenantProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TenantProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TenantProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TenantProfileGroupByOutputType[P]>
        }
      >
    >


  export type TenantProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    displayName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | TenantProfile$propertiesArgs<ExtArgs>
    _count?: boolean | TenantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tenantProfile"]>



  export type TenantProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    displayName?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TenantProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "displayName" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["tenantProfile"]>
  export type TenantProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    properties?: boolean | TenantProfile$propertiesArgs<ExtArgs>
    _count?: boolean | TenantProfileCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TenantProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TenantProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      displayName: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tenantProfile"]>
    composites: {}
  }

  type TenantProfileGetPayload<S extends boolean | null | undefined | TenantProfileDefaultArgs> = $Result.GetResult<Prisma.$TenantProfilePayload, S>

  type TenantProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TenantProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TenantProfileCountAggregateInputType | true
    }

  export interface TenantProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TenantProfile'], meta: { name: 'TenantProfile' } }
    /**
     * Find zero or one TenantProfile that matches the filter.
     * @param {TenantProfileFindUniqueArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TenantProfileFindUniqueArgs>(args: SelectSubset<T, TenantProfileFindUniqueArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TenantProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TenantProfileFindUniqueOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TenantProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TenantProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TenantProfileFindFirstArgs>(args?: SelectSubset<T, TenantProfileFindFirstArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TenantProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindFirstOrThrowArgs} args - Arguments to find a TenantProfile
     * @example
     * // Get one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TenantProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TenantProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TenantProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany()
     * 
     * // Get first 10 TenantProfiles
     * const tenantProfiles = await prisma.tenantProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tenantProfileWithIdOnly = await prisma.tenantProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TenantProfileFindManyArgs>(args?: SelectSubset<T, TenantProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TenantProfile.
     * @param {TenantProfileCreateArgs} args - Arguments to create a TenantProfile.
     * @example
     * // Create one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.create({
     *   data: {
     *     // ... data to create a TenantProfile
     *   }
     * })
     * 
     */
    create<T extends TenantProfileCreateArgs>(args: SelectSubset<T, TenantProfileCreateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TenantProfiles.
     * @param {TenantProfileCreateManyArgs} args - Arguments to create many TenantProfiles.
     * @example
     * // Create many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TenantProfileCreateManyArgs>(args?: SelectSubset<T, TenantProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TenantProfile.
     * @param {TenantProfileDeleteArgs} args - Arguments to delete one TenantProfile.
     * @example
     * // Delete one TenantProfile
     * const TenantProfile = await prisma.tenantProfile.delete({
     *   where: {
     *     // ... filter to delete one TenantProfile
     *   }
     * })
     * 
     */
    delete<T extends TenantProfileDeleteArgs>(args: SelectSubset<T, TenantProfileDeleteArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TenantProfile.
     * @param {TenantProfileUpdateArgs} args - Arguments to update one TenantProfile.
     * @example
     * // Update one TenantProfile
     * const tenantProfile = await prisma.tenantProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TenantProfileUpdateArgs>(args: SelectSubset<T, TenantProfileUpdateArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TenantProfiles.
     * @param {TenantProfileDeleteManyArgs} args - Arguments to filter TenantProfiles to delete.
     * @example
     * // Delete a few TenantProfiles
     * const { count } = await prisma.tenantProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TenantProfileDeleteManyArgs>(args?: SelectSubset<T, TenantProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TenantProfiles
     * const tenantProfile = await prisma.tenantProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TenantProfileUpdateManyArgs>(args: SelectSubset<T, TenantProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TenantProfile.
     * @param {TenantProfileUpsertArgs} args - Arguments to update or create a TenantProfile.
     * @example
     * // Update or create a TenantProfile
     * const tenantProfile = await prisma.tenantProfile.upsert({
     *   create: {
     *     // ... data to create a TenantProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TenantProfile we want to update
     *   }
     * })
     */
    upsert<T extends TenantProfileUpsertArgs>(args: SelectSubset<T, TenantProfileUpsertArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TenantProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileCountArgs} args - Arguments to filter TenantProfiles to count.
     * @example
     * // Count the number of TenantProfiles
     * const count = await prisma.tenantProfile.count({
     *   where: {
     *     // ... the filter for the TenantProfiles we want to count
     *   }
     * })
    **/
    count<T extends TenantProfileCountArgs>(
      args?: Subset<T, TenantProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TenantProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TenantProfileAggregateArgs>(args: Subset<T, TenantProfileAggregateArgs>): Prisma.PrismaPromise<GetTenantProfileAggregateType<T>>

    /**
     * Group by TenantProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TenantProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TenantProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TenantProfileGroupByArgs['orderBy'] }
        : { orderBy?: TenantProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TenantProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTenantProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TenantProfile model
   */
  readonly fields: TenantProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TenantProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TenantProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    properties<T extends TenantProfile$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, TenantProfile$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TenantProfile model
   */
  interface TenantProfileFieldRefs {
    readonly id: FieldRef<"TenantProfile", 'Int'>
    readonly userId: FieldRef<"TenantProfile", 'Int'>
    readonly displayName: FieldRef<"TenantProfile", 'String'>
    readonly description: FieldRef<"TenantProfile", 'String'>
    readonly createdAt: FieldRef<"TenantProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TenantProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TenantProfile findUnique
   */
  export type TenantProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findUniqueOrThrow
   */
  export type TenantProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile findFirst
   */
  export type TenantProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findFirstOrThrow
   */
  export type TenantProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfile to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TenantProfiles.
     */
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile findMany
   */
  export type TenantProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter, which TenantProfiles to fetch.
     */
    where?: TenantProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TenantProfiles to fetch.
     */
    orderBy?: TenantProfileOrderByWithRelationInput | TenantProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TenantProfiles.
     */
    cursor?: TenantProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TenantProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TenantProfiles.
     */
    skip?: number
    distinct?: TenantProfileScalarFieldEnum | TenantProfileScalarFieldEnum[]
  }

  /**
   * TenantProfile create
   */
  export type TenantProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TenantProfile.
     */
    data: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
  }

  /**
   * TenantProfile createMany
   */
  export type TenantProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TenantProfiles.
     */
    data: TenantProfileCreateManyInput | TenantProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TenantProfile update
   */
  export type TenantProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TenantProfile.
     */
    data: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
    /**
     * Choose, which TenantProfile to update.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile updateMany
   */
  export type TenantProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TenantProfiles.
     */
    data: XOR<TenantProfileUpdateManyMutationInput, TenantProfileUncheckedUpdateManyInput>
    /**
     * Filter which TenantProfiles to update
     */
    where?: TenantProfileWhereInput
    /**
     * Limit how many TenantProfiles to update.
     */
    limit?: number
  }

  /**
   * TenantProfile upsert
   */
  export type TenantProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TenantProfile to update in case it exists.
     */
    where: TenantProfileWhereUniqueInput
    /**
     * In case the TenantProfile found by the `where` argument doesn't exist, create a new TenantProfile with this data.
     */
    create: XOR<TenantProfileCreateInput, TenantProfileUncheckedCreateInput>
    /**
     * In case the TenantProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TenantProfileUpdateInput, TenantProfileUncheckedUpdateInput>
  }

  /**
   * TenantProfile delete
   */
  export type TenantProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
    /**
     * Filter which TenantProfile to delete.
     */
    where: TenantProfileWhereUniqueInput
  }

  /**
   * TenantProfile deleteMany
   */
  export type TenantProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TenantProfiles to delete
     */
    where?: TenantProfileWhereInput
    /**
     * Limit how many TenantProfiles to delete.
     */
    limit?: number
  }

  /**
   * TenantProfile.properties
   */
  export type TenantProfile$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * TenantProfile without action
   */
  export type TenantProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TenantProfile
     */
    select?: TenantProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TenantProfile
     */
    omit?: TenantProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TenantProfileInclude<ExtArgs> | null
  }


  /**
   * Model UserToken
   */

  export type AggregateUserToken = {
    _count: UserTokenCountAggregateOutputType | null
    _avg: UserTokenAvgAggregateOutputType | null
    _sum: UserTokenSumAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  export type UserTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserTokenMinAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.TokenType | null
    token: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type UserTokenMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    type: $Enums.TokenType | null
    token: string | null
    expiresAt: Date | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type UserTokenCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    token: number
    expiresAt: number
    consumedAt: number
    createdAt: number
    _all: number
  }


  export type UserTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserTokenMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type UserTokenMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
  }

  export type UserTokenCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    token?: true
    expiresAt?: true
    consumedAt?: true
    createdAt?: true
    _all?: true
  }

  export type UserTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToken to aggregate.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTokens
    **/
    _count?: true | UserTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTokenMaxAggregateInputType
  }

  export type GetUserTokenAggregateType<T extends UserTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToken[P]>
      : GetScalarType<T[P], AggregateUserToken[P]>
  }




  export type UserTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTokenWhereInput
    orderBy?: UserTokenOrderByWithAggregationInput | UserTokenOrderByWithAggregationInput[]
    by: UserTokenScalarFieldEnum[] | UserTokenScalarFieldEnum
    having?: UserTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTokenCountAggregateInputType | true
    _avg?: UserTokenAvgAggregateInputType
    _sum?: UserTokenSumAggregateInputType
    _min?: UserTokenMinAggregateInputType
    _max?: UserTokenMaxAggregateInputType
  }

  export type UserTokenGroupByOutputType = {
    id: number
    userId: number
    type: $Enums.TokenType
    token: string
    expiresAt: Date
    consumedAt: Date | null
    createdAt: Date
    _count: UserTokenCountAggregateOutputType | null
    _avg: UserTokenAvgAggregateOutputType | null
    _sum: UserTokenSumAggregateOutputType | null
    _min: UserTokenMinAggregateOutputType | null
    _max: UserTokenMaxAggregateOutputType | null
  }

  type GetUserTokenGroupByPayload<T extends UserTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
            : GetScalarType<T[P], UserTokenGroupByOutputType[P]>
        }
      >
    >


  export type UserTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    token?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToken"]>



  export type UserTokenSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    token?: boolean
    expiresAt?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }

  export type UserTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "token" | "expiresAt" | "consumedAt" | "createdAt", ExtArgs["result"]["userToken"]>
  export type UserTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      type: $Enums.TokenType
      token: string
      expiresAt: Date
      consumedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["userToken"]>
    composites: {}
  }

  type UserTokenGetPayload<S extends boolean | null | undefined | UserTokenDefaultArgs> = $Result.GetResult<Prisma.$UserTokenPayload, S>

  type UserTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTokenCountAggregateInputType | true
    }

  export interface UserTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToken'], meta: { name: 'UserToken' } }
    /**
     * Find zero or one UserToken that matches the filter.
     * @param {UserTokenFindUniqueArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTokenFindUniqueArgs>(args: SelectSubset<T, UserTokenFindUniqueArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTokenFindUniqueOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTokenFindFirstArgs>(args?: SelectSubset<T, UserTokenFindFirstArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindFirstOrThrowArgs} args - Arguments to find a UserToken
     * @example
     * // Get one UserToken
     * const userToken = await prisma.userToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTokens
     * const userTokens = await prisma.userToken.findMany()
     * 
     * // Get first 10 UserTokens
     * const userTokens = await prisma.userToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTokenWithIdOnly = await prisma.userToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTokenFindManyArgs>(args?: SelectSubset<T, UserTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserToken.
     * @param {UserTokenCreateArgs} args - Arguments to create a UserToken.
     * @example
     * // Create one UserToken
     * const UserToken = await prisma.userToken.create({
     *   data: {
     *     // ... data to create a UserToken
     *   }
     * })
     * 
     */
    create<T extends UserTokenCreateArgs>(args: SelectSubset<T, UserTokenCreateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTokens.
     * @param {UserTokenCreateManyArgs} args - Arguments to create many UserTokens.
     * @example
     * // Create many UserTokens
     * const userToken = await prisma.userToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTokenCreateManyArgs>(args?: SelectSubset<T, UserTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserToken.
     * @param {UserTokenDeleteArgs} args - Arguments to delete one UserToken.
     * @example
     * // Delete one UserToken
     * const UserToken = await prisma.userToken.delete({
     *   where: {
     *     // ... filter to delete one UserToken
     *   }
     * })
     * 
     */
    delete<T extends UserTokenDeleteArgs>(args: SelectSubset<T, UserTokenDeleteArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserToken.
     * @param {UserTokenUpdateArgs} args - Arguments to update one UserToken.
     * @example
     * // Update one UserToken
     * const userToken = await prisma.userToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTokenUpdateArgs>(args: SelectSubset<T, UserTokenUpdateArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTokens.
     * @param {UserTokenDeleteManyArgs} args - Arguments to filter UserTokens to delete.
     * @example
     * // Delete a few UserTokens
     * const { count } = await prisma.userToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTokenDeleteManyArgs>(args?: SelectSubset<T, UserTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTokens
     * const userToken = await prisma.userToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTokenUpdateManyArgs>(args: SelectSubset<T, UserTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserToken.
     * @param {UserTokenUpsertArgs} args - Arguments to update or create a UserToken.
     * @example
     * // Update or create a UserToken
     * const userToken = await prisma.userToken.upsert({
     *   create: {
     *     // ... data to create a UserToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToken we want to update
     *   }
     * })
     */
    upsert<T extends UserTokenUpsertArgs>(args: SelectSubset<T, UserTokenUpsertArgs<ExtArgs>>): Prisma__UserTokenClient<$Result.GetResult<Prisma.$UserTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenCountArgs} args - Arguments to filter UserTokens to count.
     * @example
     * // Count the number of UserTokens
     * const count = await prisma.userToken.count({
     *   where: {
     *     // ... the filter for the UserTokens we want to count
     *   }
     * })
    **/
    count<T extends UserTokenCountArgs>(
      args?: Subset<T, UserTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTokenAggregateArgs>(args: Subset<T, UserTokenAggregateArgs>): Prisma.PrismaPromise<GetUserTokenAggregateType<T>>

    /**
     * Group by UserToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTokenGroupByArgs['orderBy'] }
        : { orderBy?: UserTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToken model
   */
  readonly fields: UserTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserToken model
   */
  interface UserTokenFieldRefs {
    readonly id: FieldRef<"UserToken", 'Int'>
    readonly userId: FieldRef<"UserToken", 'Int'>
    readonly type: FieldRef<"UserToken", 'TokenType'>
    readonly token: FieldRef<"UserToken", 'String'>
    readonly expiresAt: FieldRef<"UserToken", 'DateTime'>
    readonly consumedAt: FieldRef<"UserToken", 'DateTime'>
    readonly createdAt: FieldRef<"UserToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserToken findUnique
   */
  export type UserTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findUniqueOrThrow
   */
  export type UserTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken findFirst
   */
  export type UserTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findFirstOrThrow
   */
  export type UserTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserToken to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTokens.
     */
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken findMany
   */
  export type UserTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter, which UserTokens to fetch.
     */
    where?: UserTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTokens to fetch.
     */
    orderBy?: UserTokenOrderByWithRelationInput | UserTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTokens.
     */
    cursor?: UserTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTokens.
     */
    skip?: number
    distinct?: UserTokenScalarFieldEnum | UserTokenScalarFieldEnum[]
  }

  /**
   * UserToken create
   */
  export type UserTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToken.
     */
    data: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
  }

  /**
   * UserToken createMany
   */
  export type UserTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTokens.
     */
    data: UserTokenCreateManyInput | UserTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserToken update
   */
  export type UserTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToken.
     */
    data: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
    /**
     * Choose, which UserToken to update.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken updateMany
   */
  export type UserTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTokens.
     */
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyInput>
    /**
     * Filter which UserTokens to update
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to update.
     */
    limit?: number
  }

  /**
   * UserToken upsert
   */
  export type UserTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToken to update in case it exists.
     */
    where: UserTokenWhereUniqueInput
    /**
     * In case the UserToken found by the `where` argument doesn't exist, create a new UserToken with this data.
     */
    create: XOR<UserTokenCreateInput, UserTokenUncheckedCreateInput>
    /**
     * In case the UserToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTokenUpdateInput, UserTokenUncheckedUpdateInput>
  }

  /**
   * UserToken delete
   */
  export type UserTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
    /**
     * Filter which UserToken to delete.
     */
    where: UserTokenWhereUniqueInput
  }

  /**
   * UserToken deleteMany
   */
  export type UserTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTokens to delete
     */
    where?: UserTokenWhereInput
    /**
     * Limit how many UserTokens to delete.
     */
    limit?: number
  }

  /**
   * UserToken without action
   */
  export type UserTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToken
     */
    select?: UserTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToken
     */
    omit?: UserTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTokenInclude<ExtArgs> | null
  }


  /**
   * Model PropertyCategory
   */

  export type AggregatePropertyCategory = {
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  export type PropertyCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type PropertyCategorySumAggregateOutputType = {
    id: number | null
  }

  export type PropertyCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PropertyCategorySumAggregateInputType = {
    id?: true
  }

  export type PropertyCategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategory to aggregate.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyCategories
    **/
    _count?: true | PropertyCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type GetPropertyCategoryAggregateType<T extends PropertyCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyCategory[P]>
      : GetScalarType<T[P], AggregatePropertyCategory[P]>
  }




  export type PropertyCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyCategoryWhereInput
    orderBy?: PropertyCategoryOrderByWithAggregationInput | PropertyCategoryOrderByWithAggregationInput[]
    by: PropertyCategoryScalarFieldEnum[] | PropertyCategoryScalarFieldEnum
    having?: PropertyCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCategoryCountAggregateInputType | true
    _avg?: PropertyCategoryAvgAggregateInputType
    _sum?: PropertyCategorySumAggregateInputType
    _min?: PropertyCategoryMinAggregateInputType
    _max?: PropertyCategoryMaxAggregateInputType
  }

  export type PropertyCategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: PropertyCategoryCountAggregateOutputType | null
    _avg: PropertyCategoryAvgAggregateOutputType | null
    _sum: PropertyCategorySumAggregateOutputType | null
    _min: PropertyCategoryMinAggregateOutputType | null
    _max: PropertyCategoryMaxAggregateOutputType | null
  }

  type GetPropertyCategoryGroupByPayload<T extends PropertyCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PropertyCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyCategory"]>



  export type PropertyCategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyCategory"]>
  export type PropertyCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | PropertyCategory$propertiesArgs<ExtArgs>
    _count?: boolean | PropertyCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropertyCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyCategory"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyCategory"]>
    composites: {}
  }

  type PropertyCategoryGetPayload<S extends boolean | null | undefined | PropertyCategoryDefaultArgs> = $Result.GetResult<Prisma.$PropertyCategoryPayload, S>

  type PropertyCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCategoryCountAggregateInputType | true
    }

  export interface PropertyCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyCategory'], meta: { name: 'PropertyCategory' } }
    /**
     * Find zero or one PropertyCategory that matches the filter.
     * @param {PropertyCategoryFindUniqueArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyCategoryFindUniqueArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyCategoryFindUniqueOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyCategoryFindFirstArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindFirstOrThrowArgs} args - Arguments to find a PropertyCategory
     * @example
     * // Get one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany()
     * 
     * // Get first 10 PropertyCategories
     * const propertyCategories = await prisma.propertyCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyCategoryWithIdOnly = await prisma.propertyCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyCategoryFindManyArgs>(args?: SelectSubset<T, PropertyCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyCategory.
     * @param {PropertyCategoryCreateArgs} args - Arguments to create a PropertyCategory.
     * @example
     * // Create one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.create({
     *   data: {
     *     // ... data to create a PropertyCategory
     *   }
     * })
     * 
     */
    create<T extends PropertyCategoryCreateArgs>(args: SelectSubset<T, PropertyCategoryCreateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyCategories.
     * @param {PropertyCategoryCreateManyArgs} args - Arguments to create many PropertyCategories.
     * @example
     * // Create many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCategoryCreateManyArgs>(args?: SelectSubset<T, PropertyCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyCategory.
     * @param {PropertyCategoryDeleteArgs} args - Arguments to delete one PropertyCategory.
     * @example
     * // Delete one PropertyCategory
     * const PropertyCategory = await prisma.propertyCategory.delete({
     *   where: {
     *     // ... filter to delete one PropertyCategory
     *   }
     * })
     * 
     */
    delete<T extends PropertyCategoryDeleteArgs>(args: SelectSubset<T, PropertyCategoryDeleteArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyCategory.
     * @param {PropertyCategoryUpdateArgs} args - Arguments to update one PropertyCategory.
     * @example
     * // Update one PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyCategoryUpdateArgs>(args: SelectSubset<T, PropertyCategoryUpdateArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyCategories.
     * @param {PropertyCategoryDeleteManyArgs} args - Arguments to filter PropertyCategories to delete.
     * @example
     * // Delete a few PropertyCategories
     * const { count } = await prisma.propertyCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyCategoryDeleteManyArgs>(args?: SelectSubset<T, PropertyCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyCategories
     * const propertyCategory = await prisma.propertyCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyCategoryUpdateManyArgs>(args: SelectSubset<T, PropertyCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyCategory.
     * @param {PropertyCategoryUpsertArgs} args - Arguments to update or create a PropertyCategory.
     * @example
     * // Update or create a PropertyCategory
     * const propertyCategory = await prisma.propertyCategory.upsert({
     *   create: {
     *     // ... data to create a PropertyCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyCategory we want to update
     *   }
     * })
     */
    upsert<T extends PropertyCategoryUpsertArgs>(args: SelectSubset<T, PropertyCategoryUpsertArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryCountArgs} args - Arguments to filter PropertyCategories to count.
     * @example
     * // Count the number of PropertyCategories
     * const count = await prisma.propertyCategory.count({
     *   where: {
     *     // ... the filter for the PropertyCategories we want to count
     *   }
     * })
    **/
    count<T extends PropertyCategoryCountArgs>(
      args?: Subset<T, PropertyCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyCategoryAggregateArgs>(args: Subset<T, PropertyCategoryAggregateArgs>): Prisma.PrismaPromise<GetPropertyCategoryAggregateType<T>>

    /**
     * Group by PropertyCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PropertyCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyCategory model
   */
  readonly fields: PropertyCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends PropertyCategory$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategory$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyCategory model
   */
  interface PropertyCategoryFieldRefs {
    readonly id: FieldRef<"PropertyCategory", 'Int'>
    readonly name: FieldRef<"PropertyCategory", 'String'>
    readonly createdAt: FieldRef<"PropertyCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyCategory findUnique
   */
  export type PropertyCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findUniqueOrThrow
   */
  export type PropertyCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory findFirst
   */
  export type PropertyCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findFirstOrThrow
   */
  export type PropertyCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategory to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyCategories.
     */
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory findMany
   */
  export type PropertyCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PropertyCategories to fetch.
     */
    where?: PropertyCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyCategories to fetch.
     */
    orderBy?: PropertyCategoryOrderByWithRelationInput | PropertyCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyCategories.
     */
    cursor?: PropertyCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyCategories.
     */
    skip?: number
    distinct?: PropertyCategoryScalarFieldEnum | PropertyCategoryScalarFieldEnum[]
  }

  /**
   * PropertyCategory create
   */
  export type PropertyCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyCategory.
     */
    data: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
  }

  /**
   * PropertyCategory createMany
   */
  export type PropertyCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyCategories.
     */
    data: PropertyCategoryCreateManyInput | PropertyCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyCategory update
   */
  export type PropertyCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyCategory.
     */
    data: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
    /**
     * Choose, which PropertyCategory to update.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory updateMany
   */
  export type PropertyCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyCategories.
     */
    data: XOR<PropertyCategoryUpdateManyMutationInput, PropertyCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PropertyCategories to update
     */
    where?: PropertyCategoryWhereInput
    /**
     * Limit how many PropertyCategories to update.
     */
    limit?: number
  }

  /**
   * PropertyCategory upsert
   */
  export type PropertyCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyCategory to update in case it exists.
     */
    where: PropertyCategoryWhereUniqueInput
    /**
     * In case the PropertyCategory found by the `where` argument doesn't exist, create a new PropertyCategory with this data.
     */
    create: XOR<PropertyCategoryCreateInput, PropertyCategoryUncheckedCreateInput>
    /**
     * In case the PropertyCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyCategoryUpdateInput, PropertyCategoryUncheckedUpdateInput>
  }

  /**
   * PropertyCategory delete
   */
  export type PropertyCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
    /**
     * Filter which PropertyCategory to delete.
     */
    where: PropertyCategoryWhereUniqueInput
  }

  /**
   * PropertyCategory deleteMany
   */
  export type PropertyCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyCategories to delete
     */
    where?: PropertyCategoryWhereInput
    /**
     * Limit how many PropertyCategories to delete.
     */
    limit?: number
  }

  /**
   * PropertyCategory.properties
   */
  export type PropertyCategory$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * PropertyCategory without action
   */
  export type PropertyCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCategory
     */
    select?: PropertyCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyCategory
     */
    omit?: PropertyCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    addressLine1: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    tenantId: number | null
    categoryId: number | null
    name: string | null
    slug: string | null
    description: string | null
    addressLine1: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: number
    slug: number
    description: number
    addressLine1: number
    city: number
    state: number
    country: number
    postalCode: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    latitude?: true
    longitude?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    addressLine1?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    addressLine1?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    tenantId?: true
    categoryId?: true
    name?: true
    slug?: true
    description?: true
    addressLine1?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description: string | null
    addressLine1: string | null
    city: string
    state: string | null
    country: string
    postalCode: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    addressLine1?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tenant?: boolean | TenantProfileDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>



  export type PropertySelectScalar = {
    id?: boolean
    tenantId?: boolean
    categoryId?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    addressLine1?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tenantId" | "categoryId" | "name" | "slug" | "description" | "addressLine1" | "city" | "state" | "country" | "postalCode" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tenant?: boolean | TenantProfileDefaultArgs<ExtArgs>
    category?: boolean | PropertyCategoryDefaultArgs<ExtArgs>
    rooms?: boolean | Property$roomsArgs<ExtArgs>
    images?: boolean | Property$imagesArgs<ExtArgs>
    bookings?: boolean | Property$bookingsArgs<ExtArgs>
    reviews?: boolean | Property$reviewsArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      tenant: Prisma.$TenantProfilePayload<ExtArgs>
      category: Prisma.$PropertyCategoryPayload<ExtArgs>
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      images: Prisma.$PropertyImagePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tenantId: number
      categoryId: number
      name: string
      slug: string
      description: string | null
      addressLine1: string | null
      city: string
      state: string | null
      country: string
      postalCode: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tenant<T extends TenantProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TenantProfileDefaultArgs<ExtArgs>>): Prisma__TenantProfileClient<$Result.GetResult<Prisma.$TenantProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends PropertyCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyCategoryDefaultArgs<ExtArgs>>): Prisma__PropertyCategoryClient<$Result.GetResult<Prisma.$PropertyCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rooms<T extends Property$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Property$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Property$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Property$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Property$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Property$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Property$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly tenantId: FieldRef<"Property", 'Int'>
    readonly categoryId: FieldRef<"Property", 'Int'>
    readonly name: FieldRef<"Property", 'String'>
    readonly slug: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly addressLine1: FieldRef<"Property", 'String'>
    readonly city: FieldRef<"Property", 'String'>
    readonly state: FieldRef<"Property", 'String'>
    readonly country: FieldRef<"Property", 'String'>
    readonly postalCode: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Decimal'>
    readonly longitude: FieldRef<"Property", 'Decimal'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.rooms
   */
  export type Property$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Property.images
   */
  export type Property$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.bookings
   */
  export type Property$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Property.reviews
   */
  export type Property$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    url: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    url: string | null
    isPrimary: boolean | null
    createdAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    url: number
    isPrimary: number
    createdAt: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    url?: true
    isPrimary?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    propertyId: number
    url: string
    isPrimary: boolean
    createdAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    url?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>



  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    url?: boolean
    isPrimary?: boolean
    createdAt?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "url" | "isPrimary" | "createdAt", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      url: string
      isPrimary: boolean
      createdAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly url: FieldRef<"PropertyImage", 'String'>
    readonly isPrimary: FieldRef<"PropertyImage", 'Boolean'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    capacity: number | null
    totalUnits: number | null
    basePrice: Decimal | null
  }

  export type RoomSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    capacity: number | null
    totalUnits: number | null
    basePrice: Decimal | null
  }

  export type RoomMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    capacity: number | null
    totalUnits: number | null
    basePrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    name: string | null
    description: string | null
    capacity: number | null
    totalUnits: number | null
    basePrice: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    propertyId: number
    name: number
    description: number
    capacity: number
    totalUnits: number
    basePrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    id?: true
    propertyId?: true
    capacity?: true
    totalUnits?: true
    basePrice?: true
  }

  export type RoomSumAggregateInputType = {
    id?: true
    propertyId?: true
    capacity?: true
    totalUnits?: true
    basePrice?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    capacity?: true
    totalUnits?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    capacity?: true
    totalUnits?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    propertyId?: true
    name?: true
    description?: true
    capacity?: true
    totalUnits?: true
    basePrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: number
    propertyId: number
    name: string
    description: string | null
    capacity: number
    totalUnits: number
    basePrice: Decimal
    createdAt: Date
    updatedAt: Date
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    totalUnits?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    priceAdjustments?: boolean | Room$priceAdjustmentsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    propertyId?: boolean
    name?: boolean
    description?: boolean
    capacity?: boolean
    totalUnits?: boolean
    basePrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "name" | "description" | "capacity" | "totalUnits" | "basePrice" | "createdAt" | "updatedAt", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    images?: boolean | Room$imagesArgs<ExtArgs>
    availabilities?: boolean | Room$availabilitiesArgs<ExtArgs>
    priceAdjustments?: boolean | Room$priceAdjustmentsArgs<ExtArgs>
    bookings?: boolean | Room$bookingsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      images: Prisma.$RoomImagePayload<ExtArgs>[]
      availabilities: Prisma.$RoomAvailabilityPayload<ExtArgs>[]
      priceAdjustments: Prisma.$RoomPriceAdjustmentPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      name: string
      description: string | null
      capacity: number
      totalUnits: number
      basePrice: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    images<T extends Room$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Room$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availabilities<T extends Room$availabilitiesArgs<ExtArgs> = {}>(args?: Subset<T, Room$availabilitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    priceAdjustments<T extends Room$priceAdjustmentsArgs<ExtArgs> = {}>(args?: Subset<T, Room$priceAdjustmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Room$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Room$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'Int'>
    readonly propertyId: FieldRef<"Room", 'Int'>
    readonly name: FieldRef<"Room", 'String'>
    readonly description: FieldRef<"Room", 'String'>
    readonly capacity: FieldRef<"Room", 'Int'>
    readonly totalUnits: FieldRef<"Room", 'Int'>
    readonly basePrice: FieldRef<"Room", 'Decimal'>
    readonly createdAt: FieldRef<"Room", 'DateTime'>
    readonly updatedAt: FieldRef<"Room", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room.images
   */
  export type Room$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    cursor?: RoomImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * Room.availabilities
   */
  export type Room$availabilitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    cursor?: RoomAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * Room.priceAdjustments
   */
  export type Room$priceAdjustmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    where?: RoomPriceAdjustmentWhereInput
    orderBy?: RoomPriceAdjustmentOrderByWithRelationInput | RoomPriceAdjustmentOrderByWithRelationInput[]
    cursor?: RoomPriceAdjustmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomPriceAdjustmentScalarFieldEnum | RoomPriceAdjustmentScalarFieldEnum[]
  }

  /**
   * Room.bookings
   */
  export type Room$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model RoomImage
   */

  export type AggregateRoomImage = {
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  export type RoomImageAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageSumAggregateOutputType = {
    id: number | null
    roomId: number | null
  }

  export type RoomImageMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    url: string | null
    isPrimary: boolean | null
  }

  export type RoomImageMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    url: string | null
    isPrimary: boolean | null
  }

  export type RoomImageCountAggregateOutputType = {
    id: number
    roomId: number
    url: number
    isPrimary: number
    _all: number
  }


  export type RoomImageAvgAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageSumAggregateInputType = {
    id?: true
    roomId?: true
  }

  export type RoomImageMinAggregateInputType = {
    id?: true
    roomId?: true
    url?: true
    isPrimary?: true
  }

  export type RoomImageMaxAggregateInputType = {
    id?: true
    roomId?: true
    url?: true
    isPrimary?: true
  }

  export type RoomImageCountAggregateInputType = {
    id?: true
    roomId?: true
    url?: true
    isPrimary?: true
    _all?: true
  }

  export type RoomImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImage to aggregate.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomImages
    **/
    _count?: true | RoomImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomImageMaxAggregateInputType
  }

  export type GetRoomImageAggregateType<T extends RoomImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomImage[P]>
      : GetScalarType<T[P], AggregateRoomImage[P]>
  }




  export type RoomImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomImageWhereInput
    orderBy?: RoomImageOrderByWithAggregationInput | RoomImageOrderByWithAggregationInput[]
    by: RoomImageScalarFieldEnum[] | RoomImageScalarFieldEnum
    having?: RoomImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomImageCountAggregateInputType | true
    _avg?: RoomImageAvgAggregateInputType
    _sum?: RoomImageSumAggregateInputType
    _min?: RoomImageMinAggregateInputType
    _max?: RoomImageMaxAggregateInputType
  }

  export type RoomImageGroupByOutputType = {
    id: number
    roomId: number
    url: string
    isPrimary: boolean
    _count: RoomImageCountAggregateOutputType | null
    _avg: RoomImageAvgAggregateOutputType | null
    _sum: RoomImageSumAggregateOutputType | null
    _min: RoomImageMinAggregateOutputType | null
    _max: RoomImageMaxAggregateOutputType | null
  }

  type GetRoomImageGroupByPayload<T extends RoomImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
            : GetScalarType<T[P], RoomImageGroupByOutputType[P]>
        }
      >
    >


  export type RoomImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    url?: boolean
    isPrimary?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomImage"]>



  export type RoomImageSelectScalar = {
    id?: boolean
    roomId?: boolean
    url?: boolean
    isPrimary?: boolean
  }

  export type RoomImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "url" | "isPrimary", ExtArgs["result"]["roomImage"]>
  export type RoomImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomImage"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      url: string
      isPrimary: boolean
    }, ExtArgs["result"]["roomImage"]>
    composites: {}
  }

  type RoomImageGetPayload<S extends boolean | null | undefined | RoomImageDefaultArgs> = $Result.GetResult<Prisma.$RoomImagePayload, S>

  type RoomImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomImageCountAggregateInputType | true
    }

  export interface RoomImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomImage'], meta: { name: 'RoomImage' } }
    /**
     * Find zero or one RoomImage that matches the filter.
     * @param {RoomImageFindUniqueArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomImageFindUniqueArgs>(args: SelectSubset<T, RoomImageFindUniqueArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomImageFindUniqueOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomImageFindFirstArgs>(args?: SelectSubset<T, RoomImageFindFirstArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindFirstOrThrowArgs} args - Arguments to find a RoomImage
     * @example
     * // Get one RoomImage
     * const roomImage = await prisma.roomImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomImages
     * const roomImages = await prisma.roomImage.findMany()
     * 
     * // Get first 10 RoomImages
     * const roomImages = await prisma.roomImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomImageWithIdOnly = await prisma.roomImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomImageFindManyArgs>(args?: SelectSubset<T, RoomImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomImage.
     * @param {RoomImageCreateArgs} args - Arguments to create a RoomImage.
     * @example
     * // Create one RoomImage
     * const RoomImage = await prisma.roomImage.create({
     *   data: {
     *     // ... data to create a RoomImage
     *   }
     * })
     * 
     */
    create<T extends RoomImageCreateArgs>(args: SelectSubset<T, RoomImageCreateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomImages.
     * @param {RoomImageCreateManyArgs} args - Arguments to create many RoomImages.
     * @example
     * // Create many RoomImages
     * const roomImage = await prisma.roomImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomImageCreateManyArgs>(args?: SelectSubset<T, RoomImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomImage.
     * @param {RoomImageDeleteArgs} args - Arguments to delete one RoomImage.
     * @example
     * // Delete one RoomImage
     * const RoomImage = await prisma.roomImage.delete({
     *   where: {
     *     // ... filter to delete one RoomImage
     *   }
     * })
     * 
     */
    delete<T extends RoomImageDeleteArgs>(args: SelectSubset<T, RoomImageDeleteArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomImage.
     * @param {RoomImageUpdateArgs} args - Arguments to update one RoomImage.
     * @example
     * // Update one RoomImage
     * const roomImage = await prisma.roomImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomImageUpdateArgs>(args: SelectSubset<T, RoomImageUpdateArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomImages.
     * @param {RoomImageDeleteManyArgs} args - Arguments to filter RoomImages to delete.
     * @example
     * // Delete a few RoomImages
     * const { count } = await prisma.roomImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomImageDeleteManyArgs>(args?: SelectSubset<T, RoomImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomImages
     * const roomImage = await prisma.roomImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomImageUpdateManyArgs>(args: SelectSubset<T, RoomImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomImage.
     * @param {RoomImageUpsertArgs} args - Arguments to update or create a RoomImage.
     * @example
     * // Update or create a RoomImage
     * const roomImage = await prisma.roomImage.upsert({
     *   create: {
     *     // ... data to create a RoomImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomImage we want to update
     *   }
     * })
     */
    upsert<T extends RoomImageUpsertArgs>(args: SelectSubset<T, RoomImageUpsertArgs<ExtArgs>>): Prisma__RoomImageClient<$Result.GetResult<Prisma.$RoomImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageCountArgs} args - Arguments to filter RoomImages to count.
     * @example
     * // Count the number of RoomImages
     * const count = await prisma.roomImage.count({
     *   where: {
     *     // ... the filter for the RoomImages we want to count
     *   }
     * })
    **/
    count<T extends RoomImageCountArgs>(
      args?: Subset<T, RoomImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomImageAggregateArgs>(args: Subset<T, RoomImageAggregateArgs>): Prisma.PrismaPromise<GetRoomImageAggregateType<T>>

    /**
     * Group by RoomImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomImageGroupByArgs['orderBy'] }
        : { orderBy?: RoomImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomImage model
   */
  readonly fields: RoomImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomImage model
   */
  interface RoomImageFieldRefs {
    readonly id: FieldRef<"RoomImage", 'Int'>
    readonly roomId: FieldRef<"RoomImage", 'Int'>
    readonly url: FieldRef<"RoomImage", 'String'>
    readonly isPrimary: FieldRef<"RoomImage", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RoomImage findUnique
   */
  export type RoomImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findUniqueOrThrow
   */
  export type RoomImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage findFirst
   */
  export type RoomImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findFirstOrThrow
   */
  export type RoomImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImage to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomImages.
     */
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage findMany
   */
  export type RoomImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter, which RoomImages to fetch.
     */
    where?: RoomImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomImages to fetch.
     */
    orderBy?: RoomImageOrderByWithRelationInput | RoomImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomImages.
     */
    cursor?: RoomImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomImages.
     */
    skip?: number
    distinct?: RoomImageScalarFieldEnum | RoomImageScalarFieldEnum[]
  }

  /**
   * RoomImage create
   */
  export type RoomImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomImage.
     */
    data: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
  }

  /**
   * RoomImage createMany
   */
  export type RoomImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomImages.
     */
    data: RoomImageCreateManyInput | RoomImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomImage update
   */
  export type RoomImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomImage.
     */
    data: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
    /**
     * Choose, which RoomImage to update.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage updateMany
   */
  export type RoomImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomImages.
     */
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyInput>
    /**
     * Filter which RoomImages to update
     */
    where?: RoomImageWhereInput
    /**
     * Limit how many RoomImages to update.
     */
    limit?: number
  }

  /**
   * RoomImage upsert
   */
  export type RoomImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomImage to update in case it exists.
     */
    where: RoomImageWhereUniqueInput
    /**
     * In case the RoomImage found by the `where` argument doesn't exist, create a new RoomImage with this data.
     */
    create: XOR<RoomImageCreateInput, RoomImageUncheckedCreateInput>
    /**
     * In case the RoomImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomImageUpdateInput, RoomImageUncheckedUpdateInput>
  }

  /**
   * RoomImage delete
   */
  export type RoomImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
    /**
     * Filter which RoomImage to delete.
     */
    where: RoomImageWhereUniqueInput
  }

  /**
   * RoomImage deleteMany
   */
  export type RoomImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomImages to delete
     */
    where?: RoomImageWhereInput
    /**
     * Limit how many RoomImages to delete.
     */
    limit?: number
  }

  /**
   * RoomImage without action
   */
  export type RoomImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomImage
     */
    select?: RoomImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomImage
     */
    omit?: RoomImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomImageInclude<ExtArgs> | null
  }


  /**
   * Model RoomAvailability
   */

  export type AggregateRoomAvailability = {
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  export type RoomAvailabilityAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    availableUnits: number | null
  }

  export type RoomAvailabilitySumAggregateOutputType = {
    id: number | null
    roomId: number | null
    availableUnits: number | null
  }

  export type RoomAvailabilityMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
    availableUnits: number | null
    note: string | null
    createdAt: Date | null
  }

  export type RoomAvailabilityMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    date: Date | null
    isAvailable: boolean | null
    availableUnits: number | null
    note: string | null
    createdAt: Date | null
  }

  export type RoomAvailabilityCountAggregateOutputType = {
    id: number
    roomId: number
    date: number
    isAvailable: number
    availableUnits: number
    note: number
    createdAt: number
    _all: number
  }


  export type RoomAvailabilityAvgAggregateInputType = {
    id?: true
    roomId?: true
    availableUnits?: true
  }

  export type RoomAvailabilitySumAggregateInputType = {
    id?: true
    roomId?: true
    availableUnits?: true
  }

  export type RoomAvailabilityMinAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    availableUnits?: true
    note?: true
    createdAt?: true
  }

  export type RoomAvailabilityMaxAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    availableUnits?: true
    note?: true
    createdAt?: true
  }

  export type RoomAvailabilityCountAggregateInputType = {
    id?: true
    roomId?: true
    date?: true
    isAvailable?: true
    availableUnits?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type RoomAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailability to aggregate.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomAvailabilities
    **/
    _count?: true | RoomAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type GetRoomAvailabilityAggregateType<T extends RoomAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomAvailability[P]>
      : GetScalarType<T[P], AggregateRoomAvailability[P]>
  }




  export type RoomAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomAvailabilityWhereInput
    orderBy?: RoomAvailabilityOrderByWithAggregationInput | RoomAvailabilityOrderByWithAggregationInput[]
    by: RoomAvailabilityScalarFieldEnum[] | RoomAvailabilityScalarFieldEnum
    having?: RoomAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomAvailabilityCountAggregateInputType | true
    _avg?: RoomAvailabilityAvgAggregateInputType
    _sum?: RoomAvailabilitySumAggregateInputType
    _min?: RoomAvailabilityMinAggregateInputType
    _max?: RoomAvailabilityMaxAggregateInputType
  }

  export type RoomAvailabilityGroupByOutputType = {
    id: number
    roomId: number
    date: Date
    isAvailable: boolean
    availableUnits: number | null
    note: string | null
    createdAt: Date
    _count: RoomAvailabilityCountAggregateOutputType | null
    _avg: RoomAvailabilityAvgAggregateOutputType | null
    _sum: RoomAvailabilitySumAggregateOutputType | null
    _min: RoomAvailabilityMinAggregateOutputType | null
    _max: RoomAvailabilityMaxAggregateOutputType | null
  }

  type GetRoomAvailabilityGroupByPayload<T extends RoomAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], RoomAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type RoomAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    availableUnits?: boolean
    note?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomAvailability"]>



  export type RoomAvailabilitySelectScalar = {
    id?: boolean
    roomId?: boolean
    date?: boolean
    isAvailable?: boolean
    availableUnits?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type RoomAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "date" | "isAvailable" | "availableUnits" | "note" | "createdAt", ExtArgs["result"]["roomAvailability"]>
  export type RoomAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomAvailability"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      date: Date
      isAvailable: boolean
      availableUnits: number | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["roomAvailability"]>
    composites: {}
  }

  type RoomAvailabilityGetPayload<S extends boolean | null | undefined | RoomAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$RoomAvailabilityPayload, S>

  type RoomAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomAvailabilityCountAggregateInputType | true
    }

  export interface RoomAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomAvailability'], meta: { name: 'RoomAvailability' } }
    /**
     * Find zero or one RoomAvailability that matches the filter.
     * @param {RoomAvailabilityFindUniqueArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomAvailabilityFindUniqueArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomAvailabilityFindFirstArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindFirstOrThrowArgs} args - Arguments to find a RoomAvailability
     * @example
     * // Get one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany()
     * 
     * // Get first 10 RoomAvailabilities
     * const roomAvailabilities = await prisma.roomAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomAvailabilityWithIdOnly = await prisma.roomAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomAvailabilityFindManyArgs>(args?: SelectSubset<T, RoomAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomAvailability.
     * @param {RoomAvailabilityCreateArgs} args - Arguments to create a RoomAvailability.
     * @example
     * // Create one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.create({
     *   data: {
     *     // ... data to create a RoomAvailability
     *   }
     * })
     * 
     */
    create<T extends RoomAvailabilityCreateArgs>(args: SelectSubset<T, RoomAvailabilityCreateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomAvailabilities.
     * @param {RoomAvailabilityCreateManyArgs} args - Arguments to create many RoomAvailabilities.
     * @example
     * // Create many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomAvailabilityCreateManyArgs>(args?: SelectSubset<T, RoomAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomAvailability.
     * @param {RoomAvailabilityDeleteArgs} args - Arguments to delete one RoomAvailability.
     * @example
     * // Delete one RoomAvailability
     * const RoomAvailability = await prisma.roomAvailability.delete({
     *   where: {
     *     // ... filter to delete one RoomAvailability
     *   }
     * })
     * 
     */
    delete<T extends RoomAvailabilityDeleteArgs>(args: SelectSubset<T, RoomAvailabilityDeleteArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomAvailability.
     * @param {RoomAvailabilityUpdateArgs} args - Arguments to update one RoomAvailability.
     * @example
     * // Update one RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomAvailabilityUpdateArgs>(args: SelectSubset<T, RoomAvailabilityUpdateArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomAvailabilities.
     * @param {RoomAvailabilityDeleteManyArgs} args - Arguments to filter RoomAvailabilities to delete.
     * @example
     * // Delete a few RoomAvailabilities
     * const { count } = await prisma.roomAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomAvailabilityDeleteManyArgs>(args?: SelectSubset<T, RoomAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomAvailabilities
     * const roomAvailability = await prisma.roomAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomAvailabilityUpdateManyArgs>(args: SelectSubset<T, RoomAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomAvailability.
     * @param {RoomAvailabilityUpsertArgs} args - Arguments to update or create a RoomAvailability.
     * @example
     * // Update or create a RoomAvailability
     * const roomAvailability = await prisma.roomAvailability.upsert({
     *   create: {
     *     // ... data to create a RoomAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomAvailability we want to update
     *   }
     * })
     */
    upsert<T extends RoomAvailabilityUpsertArgs>(args: SelectSubset<T, RoomAvailabilityUpsertArgs<ExtArgs>>): Prisma__RoomAvailabilityClient<$Result.GetResult<Prisma.$RoomAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityCountArgs} args - Arguments to filter RoomAvailabilities to count.
     * @example
     * // Count the number of RoomAvailabilities
     * const count = await prisma.roomAvailability.count({
     *   where: {
     *     // ... the filter for the RoomAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends RoomAvailabilityCountArgs>(
      args?: Subset<T, RoomAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAvailabilityAggregateArgs>(args: Subset<T, RoomAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetRoomAvailabilityAggregateType<T>>

    /**
     * Group by RoomAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: RoomAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomAvailability model
   */
  readonly fields: RoomAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomAvailability model
   */
  interface RoomAvailabilityFieldRefs {
    readonly id: FieldRef<"RoomAvailability", 'Int'>
    readonly roomId: FieldRef<"RoomAvailability", 'Int'>
    readonly date: FieldRef<"RoomAvailability", 'DateTime'>
    readonly isAvailable: FieldRef<"RoomAvailability", 'Boolean'>
    readonly availableUnits: FieldRef<"RoomAvailability", 'Int'>
    readonly note: FieldRef<"RoomAvailability", 'String'>
    readonly createdAt: FieldRef<"RoomAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomAvailability findUnique
   */
  export type RoomAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findUniqueOrThrow
   */
  export type RoomAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability findFirst
   */
  export type RoomAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findFirstOrThrow
   */
  export type RoomAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailability to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomAvailabilities.
     */
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability findMany
   */
  export type RoomAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which RoomAvailabilities to fetch.
     */
    where?: RoomAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomAvailabilities to fetch.
     */
    orderBy?: RoomAvailabilityOrderByWithRelationInput | RoomAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomAvailabilities.
     */
    cursor?: RoomAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomAvailabilities.
     */
    skip?: number
    distinct?: RoomAvailabilityScalarFieldEnum | RoomAvailabilityScalarFieldEnum[]
  }

  /**
   * RoomAvailability create
   */
  export type RoomAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomAvailability.
     */
    data: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
  }

  /**
   * RoomAvailability createMany
   */
  export type RoomAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomAvailabilities.
     */
    data: RoomAvailabilityCreateManyInput | RoomAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomAvailability update
   */
  export type RoomAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomAvailability.
     */
    data: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which RoomAvailability to update.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability updateMany
   */
  export type RoomAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomAvailabilities.
     */
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which RoomAvailabilities to update
     */
    where?: RoomAvailabilityWhereInput
    /**
     * Limit how many RoomAvailabilities to update.
     */
    limit?: number
  }

  /**
   * RoomAvailability upsert
   */
  export type RoomAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomAvailability to update in case it exists.
     */
    where: RoomAvailabilityWhereUniqueInput
    /**
     * In case the RoomAvailability found by the `where` argument doesn't exist, create a new RoomAvailability with this data.
     */
    create: XOR<RoomAvailabilityCreateInput, RoomAvailabilityUncheckedCreateInput>
    /**
     * In case the RoomAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomAvailabilityUpdateInput, RoomAvailabilityUncheckedUpdateInput>
  }

  /**
   * RoomAvailability delete
   */
  export type RoomAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which RoomAvailability to delete.
     */
    where: RoomAvailabilityWhereUniqueInput
  }

  /**
   * RoomAvailability deleteMany
   */
  export type RoomAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomAvailabilities to delete
     */
    where?: RoomAvailabilityWhereInput
    /**
     * Limit how many RoomAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * RoomAvailability without action
   */
  export type RoomAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomAvailability
     */
    select?: RoomAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomAvailability
     */
    omit?: RoomAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model RoomPriceAdjustment
   */

  export type AggregateRoomPriceAdjustment = {
    _count: RoomPriceAdjustmentCountAggregateOutputType | null
    _avg: RoomPriceAdjustmentAvgAggregateOutputType | null
    _sum: RoomPriceAdjustmentSumAggregateOutputType | null
    _min: RoomPriceAdjustmentMinAggregateOutputType | null
    _max: RoomPriceAdjustmentMaxAggregateOutputType | null
  }

  export type RoomPriceAdjustmentAvgAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: Decimal | null
  }

  export type RoomPriceAdjustmentSumAggregateOutputType = {
    id: number | null
    roomId: number | null
    value: Decimal | null
  }

  export type RoomPriceAdjustmentMinAggregateOutputType = {
    id: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.PriceAdjustmentType | null
    value: Decimal | null
    note: string | null
    createdAt: Date | null
  }

  export type RoomPriceAdjustmentMaxAggregateOutputType = {
    id: number | null
    roomId: number | null
    startDate: Date | null
    endDate: Date | null
    type: $Enums.PriceAdjustmentType | null
    value: Decimal | null
    note: string | null
    createdAt: Date | null
  }

  export type RoomPriceAdjustmentCountAggregateOutputType = {
    id: number
    roomId: number
    startDate: number
    endDate: number
    type: number
    value: number
    note: number
    createdAt: number
    _all: number
  }


  export type RoomPriceAdjustmentAvgAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
  }

  export type RoomPriceAdjustmentSumAggregateInputType = {
    id?: true
    roomId?: true
    value?: true
  }

  export type RoomPriceAdjustmentMinAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    note?: true
    createdAt?: true
  }

  export type RoomPriceAdjustmentMaxAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    note?: true
    createdAt?: true
  }

  export type RoomPriceAdjustmentCountAggregateInputType = {
    id?: true
    roomId?: true
    startDate?: true
    endDate?: true
    type?: true
    value?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type RoomPriceAdjustmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPriceAdjustment to aggregate.
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPriceAdjustments to fetch.
     */
    orderBy?: RoomPriceAdjustmentOrderByWithRelationInput | RoomPriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomPriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoomPriceAdjustments
    **/
    _count?: true | RoomPriceAdjustmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomPriceAdjustmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomPriceAdjustmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomPriceAdjustmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomPriceAdjustmentMaxAggregateInputType
  }

  export type GetRoomPriceAdjustmentAggregateType<T extends RoomPriceAdjustmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRoomPriceAdjustment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoomPriceAdjustment[P]>
      : GetScalarType<T[P], AggregateRoomPriceAdjustment[P]>
  }




  export type RoomPriceAdjustmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomPriceAdjustmentWhereInput
    orderBy?: RoomPriceAdjustmentOrderByWithAggregationInput | RoomPriceAdjustmentOrderByWithAggregationInput[]
    by: RoomPriceAdjustmentScalarFieldEnum[] | RoomPriceAdjustmentScalarFieldEnum
    having?: RoomPriceAdjustmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomPriceAdjustmentCountAggregateInputType | true
    _avg?: RoomPriceAdjustmentAvgAggregateInputType
    _sum?: RoomPriceAdjustmentSumAggregateInputType
    _min?: RoomPriceAdjustmentMinAggregateInputType
    _max?: RoomPriceAdjustmentMaxAggregateInputType
  }

  export type RoomPriceAdjustmentGroupByOutputType = {
    id: number
    roomId: number
    startDate: Date
    endDate: Date
    type: $Enums.PriceAdjustmentType
    value: Decimal
    note: string | null
    createdAt: Date
    _count: RoomPriceAdjustmentCountAggregateOutputType | null
    _avg: RoomPriceAdjustmentAvgAggregateOutputType | null
    _sum: RoomPriceAdjustmentSumAggregateOutputType | null
    _min: RoomPriceAdjustmentMinAggregateOutputType | null
    _max: RoomPriceAdjustmentMaxAggregateOutputType | null
  }

  type GetRoomPriceAdjustmentGroupByPayload<T extends RoomPriceAdjustmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomPriceAdjustmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomPriceAdjustmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomPriceAdjustmentGroupByOutputType[P]>
            : GetScalarType<T[P], RoomPriceAdjustmentGroupByOutputType[P]>
        }
      >
    >


  export type RoomPriceAdjustmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    note?: boolean
    createdAt?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roomPriceAdjustment"]>



  export type RoomPriceAdjustmentSelectScalar = {
    id?: boolean
    roomId?: boolean
    startDate?: boolean
    endDate?: boolean
    type?: boolean
    value?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type RoomPriceAdjustmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roomId" | "startDate" | "endDate" | "type" | "value" | "note" | "createdAt", ExtArgs["result"]["roomPriceAdjustment"]>
  export type RoomPriceAdjustmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
  }

  export type $RoomPriceAdjustmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoomPriceAdjustment"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roomId: number
      startDate: Date
      endDate: Date
      type: $Enums.PriceAdjustmentType
      value: Prisma.Decimal
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["roomPriceAdjustment"]>
    composites: {}
  }

  type RoomPriceAdjustmentGetPayload<S extends boolean | null | undefined | RoomPriceAdjustmentDefaultArgs> = $Result.GetResult<Prisma.$RoomPriceAdjustmentPayload, S>

  type RoomPriceAdjustmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomPriceAdjustmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomPriceAdjustmentCountAggregateInputType | true
    }

  export interface RoomPriceAdjustmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoomPriceAdjustment'], meta: { name: 'RoomPriceAdjustment' } }
    /**
     * Find zero or one RoomPriceAdjustment that matches the filter.
     * @param {RoomPriceAdjustmentFindUniqueArgs} args - Arguments to find a RoomPriceAdjustment
     * @example
     * // Get one RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomPriceAdjustmentFindUniqueArgs>(args: SelectSubset<T, RoomPriceAdjustmentFindUniqueArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RoomPriceAdjustment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomPriceAdjustmentFindUniqueOrThrowArgs} args - Arguments to find a RoomPriceAdjustment
     * @example
     * // Get one RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomPriceAdjustmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomPriceAdjustmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPriceAdjustment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentFindFirstArgs} args - Arguments to find a RoomPriceAdjustment
     * @example
     * // Get one RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomPriceAdjustmentFindFirstArgs>(args?: SelectSubset<T, RoomPriceAdjustmentFindFirstArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RoomPriceAdjustment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentFindFirstOrThrowArgs} args - Arguments to find a RoomPriceAdjustment
     * @example
     * // Get one RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomPriceAdjustmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomPriceAdjustmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RoomPriceAdjustments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoomPriceAdjustments
     * const roomPriceAdjustments = await prisma.roomPriceAdjustment.findMany()
     * 
     * // Get first 10 RoomPriceAdjustments
     * const roomPriceAdjustments = await prisma.roomPriceAdjustment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomPriceAdjustmentWithIdOnly = await prisma.roomPriceAdjustment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomPriceAdjustmentFindManyArgs>(args?: SelectSubset<T, RoomPriceAdjustmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RoomPriceAdjustment.
     * @param {RoomPriceAdjustmentCreateArgs} args - Arguments to create a RoomPriceAdjustment.
     * @example
     * // Create one RoomPriceAdjustment
     * const RoomPriceAdjustment = await prisma.roomPriceAdjustment.create({
     *   data: {
     *     // ... data to create a RoomPriceAdjustment
     *   }
     * })
     * 
     */
    create<T extends RoomPriceAdjustmentCreateArgs>(args: SelectSubset<T, RoomPriceAdjustmentCreateArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RoomPriceAdjustments.
     * @param {RoomPriceAdjustmentCreateManyArgs} args - Arguments to create many RoomPriceAdjustments.
     * @example
     * // Create many RoomPriceAdjustments
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomPriceAdjustmentCreateManyArgs>(args?: SelectSubset<T, RoomPriceAdjustmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoomPriceAdjustment.
     * @param {RoomPriceAdjustmentDeleteArgs} args - Arguments to delete one RoomPriceAdjustment.
     * @example
     * // Delete one RoomPriceAdjustment
     * const RoomPriceAdjustment = await prisma.roomPriceAdjustment.delete({
     *   where: {
     *     // ... filter to delete one RoomPriceAdjustment
     *   }
     * })
     * 
     */
    delete<T extends RoomPriceAdjustmentDeleteArgs>(args: SelectSubset<T, RoomPriceAdjustmentDeleteArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RoomPriceAdjustment.
     * @param {RoomPriceAdjustmentUpdateArgs} args - Arguments to update one RoomPriceAdjustment.
     * @example
     * // Update one RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomPriceAdjustmentUpdateArgs>(args: SelectSubset<T, RoomPriceAdjustmentUpdateArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RoomPriceAdjustments.
     * @param {RoomPriceAdjustmentDeleteManyArgs} args - Arguments to filter RoomPriceAdjustments to delete.
     * @example
     * // Delete a few RoomPriceAdjustments
     * const { count } = await prisma.roomPriceAdjustment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomPriceAdjustmentDeleteManyArgs>(args?: SelectSubset<T, RoomPriceAdjustmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoomPriceAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoomPriceAdjustments
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomPriceAdjustmentUpdateManyArgs>(args: SelectSubset<T, RoomPriceAdjustmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoomPriceAdjustment.
     * @param {RoomPriceAdjustmentUpsertArgs} args - Arguments to update or create a RoomPriceAdjustment.
     * @example
     * // Update or create a RoomPriceAdjustment
     * const roomPriceAdjustment = await prisma.roomPriceAdjustment.upsert({
     *   create: {
     *     // ... data to create a RoomPriceAdjustment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoomPriceAdjustment we want to update
     *   }
     * })
     */
    upsert<T extends RoomPriceAdjustmentUpsertArgs>(args: SelectSubset<T, RoomPriceAdjustmentUpsertArgs<ExtArgs>>): Prisma__RoomPriceAdjustmentClient<$Result.GetResult<Prisma.$RoomPriceAdjustmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RoomPriceAdjustments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentCountArgs} args - Arguments to filter RoomPriceAdjustments to count.
     * @example
     * // Count the number of RoomPriceAdjustments
     * const count = await prisma.roomPriceAdjustment.count({
     *   where: {
     *     // ... the filter for the RoomPriceAdjustments we want to count
     *   }
     * })
    **/
    count<T extends RoomPriceAdjustmentCountArgs>(
      args?: Subset<T, RoomPriceAdjustmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomPriceAdjustmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoomPriceAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomPriceAdjustmentAggregateArgs>(args: Subset<T, RoomPriceAdjustmentAggregateArgs>): Prisma.PrismaPromise<GetRoomPriceAdjustmentAggregateType<T>>

    /**
     * Group by RoomPriceAdjustment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomPriceAdjustmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomPriceAdjustmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomPriceAdjustmentGroupByArgs['orderBy'] }
        : { orderBy?: RoomPriceAdjustmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomPriceAdjustmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomPriceAdjustmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoomPriceAdjustment model
   */
  readonly fields: RoomPriceAdjustmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoomPriceAdjustment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomPriceAdjustmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RoomPriceAdjustment model
   */
  interface RoomPriceAdjustmentFieldRefs {
    readonly id: FieldRef<"RoomPriceAdjustment", 'Int'>
    readonly roomId: FieldRef<"RoomPriceAdjustment", 'Int'>
    readonly startDate: FieldRef<"RoomPriceAdjustment", 'DateTime'>
    readonly endDate: FieldRef<"RoomPriceAdjustment", 'DateTime'>
    readonly type: FieldRef<"RoomPriceAdjustment", 'PriceAdjustmentType'>
    readonly value: FieldRef<"RoomPriceAdjustment", 'Decimal'>
    readonly note: FieldRef<"RoomPriceAdjustment", 'String'>
    readonly createdAt: FieldRef<"RoomPriceAdjustment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoomPriceAdjustment findUnique
   */
  export type RoomPriceAdjustmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which RoomPriceAdjustment to fetch.
     */
    where: RoomPriceAdjustmentWhereUniqueInput
  }

  /**
   * RoomPriceAdjustment findUniqueOrThrow
   */
  export type RoomPriceAdjustmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which RoomPriceAdjustment to fetch.
     */
    where: RoomPriceAdjustmentWhereUniqueInput
  }

  /**
   * RoomPriceAdjustment findFirst
   */
  export type RoomPriceAdjustmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which RoomPriceAdjustment to fetch.
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPriceAdjustments to fetch.
     */
    orderBy?: RoomPriceAdjustmentOrderByWithRelationInput | RoomPriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPriceAdjustments.
     */
    cursor?: RoomPriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPriceAdjustments.
     */
    distinct?: RoomPriceAdjustmentScalarFieldEnum | RoomPriceAdjustmentScalarFieldEnum[]
  }

  /**
   * RoomPriceAdjustment findFirstOrThrow
   */
  export type RoomPriceAdjustmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which RoomPriceAdjustment to fetch.
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPriceAdjustments to fetch.
     */
    orderBy?: RoomPriceAdjustmentOrderByWithRelationInput | RoomPriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoomPriceAdjustments.
     */
    cursor?: RoomPriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPriceAdjustments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoomPriceAdjustments.
     */
    distinct?: RoomPriceAdjustmentScalarFieldEnum | RoomPriceAdjustmentScalarFieldEnum[]
  }

  /**
   * RoomPriceAdjustment findMany
   */
  export type RoomPriceAdjustmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter, which RoomPriceAdjustments to fetch.
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoomPriceAdjustments to fetch.
     */
    orderBy?: RoomPriceAdjustmentOrderByWithRelationInput | RoomPriceAdjustmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoomPriceAdjustments.
     */
    cursor?: RoomPriceAdjustmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoomPriceAdjustments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoomPriceAdjustments.
     */
    skip?: number
    distinct?: RoomPriceAdjustmentScalarFieldEnum | RoomPriceAdjustmentScalarFieldEnum[]
  }

  /**
   * RoomPriceAdjustment create
   */
  export type RoomPriceAdjustmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RoomPriceAdjustment.
     */
    data: XOR<RoomPriceAdjustmentCreateInput, RoomPriceAdjustmentUncheckedCreateInput>
  }

  /**
   * RoomPriceAdjustment createMany
   */
  export type RoomPriceAdjustmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoomPriceAdjustments.
     */
    data: RoomPriceAdjustmentCreateManyInput | RoomPriceAdjustmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoomPriceAdjustment update
   */
  export type RoomPriceAdjustmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RoomPriceAdjustment.
     */
    data: XOR<RoomPriceAdjustmentUpdateInput, RoomPriceAdjustmentUncheckedUpdateInput>
    /**
     * Choose, which RoomPriceAdjustment to update.
     */
    where: RoomPriceAdjustmentWhereUniqueInput
  }

  /**
   * RoomPriceAdjustment updateMany
   */
  export type RoomPriceAdjustmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoomPriceAdjustments.
     */
    data: XOR<RoomPriceAdjustmentUpdateManyMutationInput, RoomPriceAdjustmentUncheckedUpdateManyInput>
    /**
     * Filter which RoomPriceAdjustments to update
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * Limit how many RoomPriceAdjustments to update.
     */
    limit?: number
  }

  /**
   * RoomPriceAdjustment upsert
   */
  export type RoomPriceAdjustmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RoomPriceAdjustment to update in case it exists.
     */
    where: RoomPriceAdjustmentWhereUniqueInput
    /**
     * In case the RoomPriceAdjustment found by the `where` argument doesn't exist, create a new RoomPriceAdjustment with this data.
     */
    create: XOR<RoomPriceAdjustmentCreateInput, RoomPriceAdjustmentUncheckedCreateInput>
    /**
     * In case the RoomPriceAdjustment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomPriceAdjustmentUpdateInput, RoomPriceAdjustmentUncheckedUpdateInput>
  }

  /**
   * RoomPriceAdjustment delete
   */
  export type RoomPriceAdjustmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
    /**
     * Filter which RoomPriceAdjustment to delete.
     */
    where: RoomPriceAdjustmentWhereUniqueInput
  }

  /**
   * RoomPriceAdjustment deleteMany
   */
  export type RoomPriceAdjustmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoomPriceAdjustments to delete
     */
    where?: RoomPriceAdjustmentWhereInput
    /**
     * Limit how many RoomPriceAdjustments to delete.
     */
    limit?: number
  }

  /**
   * RoomPriceAdjustment without action
   */
  export type RoomPriceAdjustmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomPriceAdjustment
     */
    select?: RoomPriceAdjustmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RoomPriceAdjustment
     */
    omit?: RoomPriceAdjustmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomPriceAdjustmentInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    guests: number | null
    totalAmount: Decimal | null
  }

  export type BookingSumAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    guests: number | null
    totalAmount: Decimal | null
  }

  export type BookingMinAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    status: $Enums.BookingStatus | null
    paymentDueAt: Date | null
    totalAmount: Decimal | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    propertyId: number | null
    roomId: number | null
    checkIn: Date | null
    checkOut: Date | null
    guests: number | null
    status: $Enums.BookingStatus | null
    paymentDueAt: Date | null
    totalAmount: Decimal | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: number
    checkOut: number
    guests: number
    status: number
    paymentDueAt: number
    totalAmount: number
    currency: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    guests?: true
    totalAmount?: true
  }

  export type BookingSumAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    guests?: true
    totalAmount?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    status?: true
    paymentDueAt?: true
    totalAmount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    status?: true
    paymentDueAt?: true
    totalAmount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    propertyId?: true
    roomId?: true
    checkIn?: true
    checkOut?: true
    guests?: true
    status?: true
    paymentDueAt?: true
    totalAmount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date
    checkOut: Date
    guests: number
    status: $Enums.BookingStatus
    paymentDueAt: Date
    totalAmount: Decimal
    currency: string
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    status?: boolean
    paymentDueAt?: boolean
    totalAmount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    paymentProof?: boolean | Booking$paymentProofArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>



  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    propertyId?: boolean
    roomId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    guests?: boolean
    status?: boolean
    paymentDueAt?: boolean
    totalAmount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "propertyId" | "roomId" | "checkIn" | "checkOut" | "guests" | "status" | "paymentDueAt" | "totalAmount" | "currency" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    room?: boolean | RoomDefaultArgs<ExtArgs>
    paymentProof?: boolean | Booking$paymentProofArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      room: Prisma.$RoomPayload<ExtArgs>
      paymentProof: Prisma.$PaymentProofPayload<ExtArgs> | null
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      propertyId: number
      roomId: number
      checkIn: Date
      checkOut: Date
      guests: number
      status: $Enums.BookingStatus
      paymentDueAt: Date
      totalAmount: Prisma.Decimal
      currency: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paymentProof<T extends Booking$paymentProofArgs<ExtArgs> = {}>(args?: Subset<T, Booking$paymentProofArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'Int'>
    readonly userId: FieldRef<"Booking", 'Int'>
    readonly propertyId: FieldRef<"Booking", 'Int'>
    readonly roomId: FieldRef<"Booking", 'Int'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly guests: FieldRef<"Booking", 'Int'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly paymentDueAt: FieldRef<"Booking", 'DateTime'>
    readonly totalAmount: FieldRef<"Booking", 'Decimal'>
    readonly currency: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.paymentProof
   */
  export type Booking$paymentProofArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    where?: PaymentProofWhereInput
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model PaymentProof
   */

  export type AggregatePaymentProof = {
    _count: PaymentProofCountAggregateOutputType | null
    _avg: PaymentProofAvgAggregateOutputType | null
    _sum: PaymentProofSumAggregateOutputType | null
    _min: PaymentProofMinAggregateOutputType | null
    _max: PaymentProofMaxAggregateOutputType | null
  }

  export type PaymentProofAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type PaymentProofSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
  }

  export type PaymentProofMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    fileUrl: string | null
    fileName: string | null
    mimeType: string | null
    uploadedAt: Date | null
    verifiedAt: Date | null
  }

  export type PaymentProofMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    fileUrl: string | null
    fileName: string | null
    mimeType: string | null
    uploadedAt: Date | null
    verifiedAt: Date | null
  }

  export type PaymentProofCountAggregateOutputType = {
    id: number
    bookingId: number
    fileUrl: number
    fileName: number
    mimeType: number
    uploadedAt: number
    verifiedAt: number
    _all: number
  }


  export type PaymentProofAvgAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type PaymentProofSumAggregateInputType = {
    id?: true
    bookingId?: true
  }

  export type PaymentProofMinAggregateInputType = {
    id?: true
    bookingId?: true
    fileUrl?: true
    fileName?: true
    mimeType?: true
    uploadedAt?: true
    verifiedAt?: true
  }

  export type PaymentProofMaxAggregateInputType = {
    id?: true
    bookingId?: true
    fileUrl?: true
    fileName?: true
    mimeType?: true
    uploadedAt?: true
    verifiedAt?: true
  }

  export type PaymentProofCountAggregateInputType = {
    id?: true
    bookingId?: true
    fileUrl?: true
    fileName?: true
    mimeType?: true
    uploadedAt?: true
    verifiedAt?: true
    _all?: true
  }

  export type PaymentProofAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProof to aggregate.
     */
    where?: PaymentProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofOrderByWithRelationInput | PaymentProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentProofs
    **/
    _count?: true | PaymentProofCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentProofAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentProofSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentProofMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentProofMaxAggregateInputType
  }

  export type GetPaymentProofAggregateType<T extends PaymentProofAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentProof]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentProof[P]>
      : GetScalarType<T[P], AggregatePaymentProof[P]>
  }




  export type PaymentProofGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentProofWhereInput
    orderBy?: PaymentProofOrderByWithAggregationInput | PaymentProofOrderByWithAggregationInput[]
    by: PaymentProofScalarFieldEnum[] | PaymentProofScalarFieldEnum
    having?: PaymentProofScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentProofCountAggregateInputType | true
    _avg?: PaymentProofAvgAggregateInputType
    _sum?: PaymentProofSumAggregateInputType
    _min?: PaymentProofMinAggregateInputType
    _max?: PaymentProofMaxAggregateInputType
  }

  export type PaymentProofGroupByOutputType = {
    id: number
    bookingId: number
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt: Date
    verifiedAt: Date | null
    _count: PaymentProofCountAggregateOutputType | null
    _avg: PaymentProofAvgAggregateOutputType | null
    _sum: PaymentProofSumAggregateOutputType | null
    _min: PaymentProofMinAggregateOutputType | null
    _max: PaymentProofMaxAggregateOutputType | null
  }

  type GetPaymentProofGroupByPayload<T extends PaymentProofGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentProofGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentProofGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentProofGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentProofGroupByOutputType[P]>
        }
      >
    >


  export type PaymentProofSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    mimeType?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentProof"]>



  export type PaymentProofSelectScalar = {
    id?: boolean
    bookingId?: boolean
    fileUrl?: boolean
    fileName?: boolean
    mimeType?: boolean
    uploadedAt?: boolean
    verifiedAt?: boolean
  }

  export type PaymentProofOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "fileUrl" | "fileName" | "mimeType" | "uploadedAt" | "verifiedAt", ExtArgs["result"]["paymentProof"]>
  export type PaymentProofInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $PaymentProofPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentProof"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      fileUrl: string
      fileName: string
      mimeType: string
      uploadedAt: Date
      verifiedAt: Date | null
    }, ExtArgs["result"]["paymentProof"]>
    composites: {}
  }

  type PaymentProofGetPayload<S extends boolean | null | undefined | PaymentProofDefaultArgs> = $Result.GetResult<Prisma.$PaymentProofPayload, S>

  type PaymentProofCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentProofFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentProofCountAggregateInputType | true
    }

  export interface PaymentProofDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentProof'], meta: { name: 'PaymentProof' } }
    /**
     * Find zero or one PaymentProof that matches the filter.
     * @param {PaymentProofFindUniqueArgs} args - Arguments to find a PaymentProof
     * @example
     * // Get one PaymentProof
     * const paymentProof = await prisma.paymentProof.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentProofFindUniqueArgs>(args: SelectSubset<T, PaymentProofFindUniqueArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentProof that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentProofFindUniqueOrThrowArgs} args - Arguments to find a PaymentProof
     * @example
     * // Get one PaymentProof
     * const paymentProof = await prisma.paymentProof.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentProofFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentProofFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentProof that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofFindFirstArgs} args - Arguments to find a PaymentProof
     * @example
     * // Get one PaymentProof
     * const paymentProof = await prisma.paymentProof.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentProofFindFirstArgs>(args?: SelectSubset<T, PaymentProofFindFirstArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentProof that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofFindFirstOrThrowArgs} args - Arguments to find a PaymentProof
     * @example
     * // Get one PaymentProof
     * const paymentProof = await prisma.paymentProof.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentProofFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentProofFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentProofs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentProofs
     * const paymentProofs = await prisma.paymentProof.findMany()
     * 
     * // Get first 10 PaymentProofs
     * const paymentProofs = await prisma.paymentProof.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentProofWithIdOnly = await prisma.paymentProof.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentProofFindManyArgs>(args?: SelectSubset<T, PaymentProofFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentProof.
     * @param {PaymentProofCreateArgs} args - Arguments to create a PaymentProof.
     * @example
     * // Create one PaymentProof
     * const PaymentProof = await prisma.paymentProof.create({
     *   data: {
     *     // ... data to create a PaymentProof
     *   }
     * })
     * 
     */
    create<T extends PaymentProofCreateArgs>(args: SelectSubset<T, PaymentProofCreateArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentProofs.
     * @param {PaymentProofCreateManyArgs} args - Arguments to create many PaymentProofs.
     * @example
     * // Create many PaymentProofs
     * const paymentProof = await prisma.paymentProof.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentProofCreateManyArgs>(args?: SelectSubset<T, PaymentProofCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentProof.
     * @param {PaymentProofDeleteArgs} args - Arguments to delete one PaymentProof.
     * @example
     * // Delete one PaymentProof
     * const PaymentProof = await prisma.paymentProof.delete({
     *   where: {
     *     // ... filter to delete one PaymentProof
     *   }
     * })
     * 
     */
    delete<T extends PaymentProofDeleteArgs>(args: SelectSubset<T, PaymentProofDeleteArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentProof.
     * @param {PaymentProofUpdateArgs} args - Arguments to update one PaymentProof.
     * @example
     * // Update one PaymentProof
     * const paymentProof = await prisma.paymentProof.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentProofUpdateArgs>(args: SelectSubset<T, PaymentProofUpdateArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentProofs.
     * @param {PaymentProofDeleteManyArgs} args - Arguments to filter PaymentProofs to delete.
     * @example
     * // Delete a few PaymentProofs
     * const { count } = await prisma.paymentProof.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentProofDeleteManyArgs>(args?: SelectSubset<T, PaymentProofDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentProofs
     * const paymentProof = await prisma.paymentProof.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentProofUpdateManyArgs>(args: SelectSubset<T, PaymentProofUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentProof.
     * @param {PaymentProofUpsertArgs} args - Arguments to update or create a PaymentProof.
     * @example
     * // Update or create a PaymentProof
     * const paymentProof = await prisma.paymentProof.upsert({
     *   create: {
     *     // ... data to create a PaymentProof
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentProof we want to update
     *   }
     * })
     */
    upsert<T extends PaymentProofUpsertArgs>(args: SelectSubset<T, PaymentProofUpsertArgs<ExtArgs>>): Prisma__PaymentProofClient<$Result.GetResult<Prisma.$PaymentProofPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentProofs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofCountArgs} args - Arguments to filter PaymentProofs to count.
     * @example
     * // Count the number of PaymentProofs
     * const count = await prisma.paymentProof.count({
     *   where: {
     *     // ... the filter for the PaymentProofs we want to count
     *   }
     * })
    **/
    count<T extends PaymentProofCountArgs>(
      args?: Subset<T, PaymentProofCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentProofCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentProof.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentProofAggregateArgs>(args: Subset<T, PaymentProofAggregateArgs>): Prisma.PrismaPromise<GetPaymentProofAggregateType<T>>

    /**
     * Group by PaymentProof.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentProofGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentProofGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentProofGroupByArgs['orderBy'] }
        : { orderBy?: PaymentProofGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentProofGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentProofGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentProof model
   */
  readonly fields: PaymentProofFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentProof.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentProofClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentProof model
   */
  interface PaymentProofFieldRefs {
    readonly id: FieldRef<"PaymentProof", 'Int'>
    readonly bookingId: FieldRef<"PaymentProof", 'Int'>
    readonly fileUrl: FieldRef<"PaymentProof", 'String'>
    readonly fileName: FieldRef<"PaymentProof", 'String'>
    readonly mimeType: FieldRef<"PaymentProof", 'String'>
    readonly uploadedAt: FieldRef<"PaymentProof", 'DateTime'>
    readonly verifiedAt: FieldRef<"PaymentProof", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentProof findUnique
   */
  export type PaymentProofFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProof to fetch.
     */
    where: PaymentProofWhereUniqueInput
  }

  /**
   * PaymentProof findUniqueOrThrow
   */
  export type PaymentProofFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProof to fetch.
     */
    where: PaymentProofWhereUniqueInput
  }

  /**
   * PaymentProof findFirst
   */
  export type PaymentProofFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProof to fetch.
     */
    where?: PaymentProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofOrderByWithRelationInput | PaymentProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProofs.
     */
    cursor?: PaymentProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProofs.
     */
    distinct?: PaymentProofScalarFieldEnum | PaymentProofScalarFieldEnum[]
  }

  /**
   * PaymentProof findFirstOrThrow
   */
  export type PaymentProofFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProof to fetch.
     */
    where?: PaymentProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofOrderByWithRelationInput | PaymentProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentProofs.
     */
    cursor?: PaymentProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentProofs.
     */
    distinct?: PaymentProofScalarFieldEnum | PaymentProofScalarFieldEnum[]
  }

  /**
   * PaymentProof findMany
   */
  export type PaymentProofFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter, which PaymentProofs to fetch.
     */
    where?: PaymentProofWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentProofs to fetch.
     */
    orderBy?: PaymentProofOrderByWithRelationInput | PaymentProofOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentProofs.
     */
    cursor?: PaymentProofWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentProofs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentProofs.
     */
    skip?: number
    distinct?: PaymentProofScalarFieldEnum | PaymentProofScalarFieldEnum[]
  }

  /**
   * PaymentProof create
   */
  export type PaymentProofCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentProof.
     */
    data: XOR<PaymentProofCreateInput, PaymentProofUncheckedCreateInput>
  }

  /**
   * PaymentProof createMany
   */
  export type PaymentProofCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentProofs.
     */
    data: PaymentProofCreateManyInput | PaymentProofCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentProof update
   */
  export type PaymentProofUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentProof.
     */
    data: XOR<PaymentProofUpdateInput, PaymentProofUncheckedUpdateInput>
    /**
     * Choose, which PaymentProof to update.
     */
    where: PaymentProofWhereUniqueInput
  }

  /**
   * PaymentProof updateMany
   */
  export type PaymentProofUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentProofs.
     */
    data: XOR<PaymentProofUpdateManyMutationInput, PaymentProofUncheckedUpdateManyInput>
    /**
     * Filter which PaymentProofs to update
     */
    where?: PaymentProofWhereInput
    /**
     * Limit how many PaymentProofs to update.
     */
    limit?: number
  }

  /**
   * PaymentProof upsert
   */
  export type PaymentProofUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentProof to update in case it exists.
     */
    where: PaymentProofWhereUniqueInput
    /**
     * In case the PaymentProof found by the `where` argument doesn't exist, create a new PaymentProof with this data.
     */
    create: XOR<PaymentProofCreateInput, PaymentProofUncheckedCreateInput>
    /**
     * In case the PaymentProof was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentProofUpdateInput, PaymentProofUncheckedUpdateInput>
  }

  /**
   * PaymentProof delete
   */
  export type PaymentProofDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
    /**
     * Filter which PaymentProof to delete.
     */
    where: PaymentProofWhereUniqueInput
  }

  /**
   * PaymentProof deleteMany
   */
  export type PaymentProofDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentProofs to delete
     */
    where?: PaymentProofWhereInput
    /**
     * Limit how many PaymentProofs to delete.
     */
    limit?: number
  }

  /**
   * PaymentProof without action
   */
  export type PaymentProofDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentProof
     */
    select?: PaymentProofSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentProof
     */
    omit?: PaymentProofOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentProofInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    id: number | null
    bookingId: number | null
    propertyId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    id: number | null
    bookingId: number | null
    propertyId: number | null
    userId: number | null
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: number | null
    bookingId: number | null
    propertyId: number | null
    userId: number | null
    comment: string | null
    rating: number | null
    tenantReply: string | null
    repliedAt: Date | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: number | null
    bookingId: number | null
    propertyId: number | null
    userId: number | null
    comment: string | null
    rating: number | null
    tenantReply: string | null
    repliedAt: Date | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    bookingId: number
    propertyId: number
    userId: number
    comment: number
    rating: number
    tenantReply: number
    repliedAt: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    id?: true
    bookingId?: true
    propertyId?: true
    userId?: true
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    id?: true
    bookingId?: true
    propertyId?: true
    userId?: true
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    bookingId?: true
    propertyId?: true
    userId?: true
    comment?: true
    rating?: true
    tenantReply?: true
    repliedAt?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    bookingId?: true
    propertyId?: true
    userId?: true
    comment?: true
    rating?: true
    tenantReply?: true
    repliedAt?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    bookingId?: true
    propertyId?: true
    userId?: true
    comment?: true
    rating?: true
    tenantReply?: true
    repliedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: number
    bookingId: number
    propertyId: number
    userId: number
    comment: string
    rating: number | null
    tenantReply: string | null
    repliedAt: Date | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    propertyId?: boolean
    userId?: boolean
    comment?: boolean
    rating?: boolean
    tenantReply?: boolean
    repliedAt?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    bookingId?: boolean
    propertyId?: boolean
    userId?: boolean
    comment?: boolean
    rating?: boolean
    tenantReply?: boolean
    repliedAt?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "propertyId" | "userId" | "comment" | "rating" | "tenantReply" | "repliedAt" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      property: Prisma.$PropertyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookingId: number
      propertyId: number
      userId: number
      comment: string
      rating: number | null
      tenantReply: string | null
      repliedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'Int'>
    readonly bookingId: FieldRef<"Review", 'Int'>
    readonly propertyId: FieldRef<"Review", 'Int'>
    readonly userId: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly tenantReply: FieldRef<"Review", 'String'>
    readonly repliedAt: FieldRef<"Review", 'DateTime'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phone: 'phone',
    passwordHash: 'passwordHash',
    role: 'role',
    provider: 'provider',
    providerId: 'providerId',
    isVerified: 'isVerified',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TenantProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    displayName: 'displayName',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TenantProfileScalarFieldEnum = (typeof TenantProfileScalarFieldEnum)[keyof typeof TenantProfileScalarFieldEnum]


  export const UserTokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    token: 'token',
    expiresAt: 'expiresAt',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt'
  };

  export type UserTokenScalarFieldEnum = (typeof UserTokenScalarFieldEnum)[keyof typeof UserTokenScalarFieldEnum]


  export const PropertyCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyCategoryScalarFieldEnum = (typeof PropertyCategoryScalarFieldEnum)[keyof typeof PropertyCategoryScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    tenantId: 'tenantId',
    categoryId: 'categoryId',
    name: 'name',
    slug: 'slug',
    description: 'description',
    addressLine1: 'addressLine1',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    url: 'url',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    name: 'name',
    description: 'description',
    capacity: 'capacity',
    totalUnits: 'totalUnits',
    basePrice: 'basePrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const RoomImageScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    url: 'url',
    isPrimary: 'isPrimary'
  };

  export type RoomImageScalarFieldEnum = (typeof RoomImageScalarFieldEnum)[keyof typeof RoomImageScalarFieldEnum]


  export const RoomAvailabilityScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    date: 'date',
    isAvailable: 'isAvailable',
    availableUnits: 'availableUnits',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type RoomAvailabilityScalarFieldEnum = (typeof RoomAvailabilityScalarFieldEnum)[keyof typeof RoomAvailabilityScalarFieldEnum]


  export const RoomPriceAdjustmentScalarFieldEnum: {
    id: 'id',
    roomId: 'roomId',
    startDate: 'startDate',
    endDate: 'endDate',
    type: 'type',
    value: 'value',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type RoomPriceAdjustmentScalarFieldEnum = (typeof RoomPriceAdjustmentScalarFieldEnum)[keyof typeof RoomPriceAdjustmentScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    propertyId: 'propertyId',
    roomId: 'roomId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    guests: 'guests',
    status: 'status',
    paymentDueAt: 'paymentDueAt',
    totalAmount: 'totalAmount',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const PaymentProofScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    mimeType: 'mimeType',
    uploadedAt: 'uploadedAt',
    verifiedAt: 'verifiedAt'
  };

  export type PaymentProofScalarFieldEnum = (typeof PaymentProofScalarFieldEnum)[keyof typeof PaymentProofScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    propertyId: 'propertyId',
    userId: 'userId',
    comment: 'comment',
    rating: 'rating',
    tenantReply: 'tenantReply',
    repliedAt: 'repliedAt',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    phone: 'phone',
    passwordHash: 'passwordHash',
    providerId: 'providerId',
    avatarUrl: 'avatarUrl'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const TenantProfileOrderByRelevanceFieldEnum: {
    displayName: 'displayName',
    description: 'description'
  };

  export type TenantProfileOrderByRelevanceFieldEnum = (typeof TenantProfileOrderByRelevanceFieldEnum)[keyof typeof TenantProfileOrderByRelevanceFieldEnum]


  export const UserTokenOrderByRelevanceFieldEnum: {
    token: 'token'
  };

  export type UserTokenOrderByRelevanceFieldEnum = (typeof UserTokenOrderByRelevanceFieldEnum)[keyof typeof UserTokenOrderByRelevanceFieldEnum]


  export const PropertyCategoryOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PropertyCategoryOrderByRelevanceFieldEnum = (typeof PropertyCategoryOrderByRelevanceFieldEnum)[keyof typeof PropertyCategoryOrderByRelevanceFieldEnum]


  export const PropertyOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug',
    description: 'description',
    addressLine1: 'addressLine1',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type PropertyOrderByRelevanceFieldEnum = (typeof PropertyOrderByRelevanceFieldEnum)[keyof typeof PropertyOrderByRelevanceFieldEnum]


  export const PropertyImageOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type PropertyImageOrderByRelevanceFieldEnum = (typeof PropertyImageOrderByRelevanceFieldEnum)[keyof typeof PropertyImageOrderByRelevanceFieldEnum]


  export const RoomOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type RoomOrderByRelevanceFieldEnum = (typeof RoomOrderByRelevanceFieldEnum)[keyof typeof RoomOrderByRelevanceFieldEnum]


  export const RoomImageOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type RoomImageOrderByRelevanceFieldEnum = (typeof RoomImageOrderByRelevanceFieldEnum)[keyof typeof RoomImageOrderByRelevanceFieldEnum]


  export const RoomAvailabilityOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type RoomAvailabilityOrderByRelevanceFieldEnum = (typeof RoomAvailabilityOrderByRelevanceFieldEnum)[keyof typeof RoomAvailabilityOrderByRelevanceFieldEnum]


  export const RoomPriceAdjustmentOrderByRelevanceFieldEnum: {
    note: 'note'
  };

  export type RoomPriceAdjustmentOrderByRelevanceFieldEnum = (typeof RoomPriceAdjustmentOrderByRelevanceFieldEnum)[keyof typeof RoomPriceAdjustmentOrderByRelevanceFieldEnum]


  export const BookingOrderByRelevanceFieldEnum: {
    currency: 'currency'
  };

  export type BookingOrderByRelevanceFieldEnum = (typeof BookingOrderByRelevanceFieldEnum)[keyof typeof BookingOrderByRelevanceFieldEnum]


  export const PaymentProofOrderByRelevanceFieldEnum: {
    fileUrl: 'fileUrl',
    fileName: 'fileName',
    mimeType: 'mimeType'
  };

  export type PaymentProofOrderByRelevanceFieldEnum = (typeof PaymentProofOrderByRelevanceFieldEnum)[keyof typeof PaymentProofOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    comment: 'comment',
    tenantReply: 'tenantReply'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'AuthProvider'
   */
  export type EnumAuthProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthProvider'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TokenType'
   */
  export type EnumTokenTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TokenType'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PriceAdjustmentType'
   */
  export type EnumPriceAdjustmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PriceAdjustmentType'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenantProfile?: XOR<TenantProfileNullableScalarRelationFilter, TenantProfileWhereInput> | null
    tokens?: UserTokenListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenantProfile?: TenantProfileOrderByWithRelationInput
    tokens?: UserTokenOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    provider?: EnumAuthProviderFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    avatarUrl?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    tenantProfile?: XOR<TenantProfileNullableScalarRelationFilter, TenantProfileWhereInput> | null
    tokens?: UserTokenListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    provider?: EnumAuthProviderWithAggregatesFilter<"User"> | $Enums.AuthProvider
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TenantProfileWhereInput = {
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    id?: IntFilter<"TenantProfile"> | number
    userId?: IntFilter<"TenantProfile"> | number
    displayName?: StringFilter<"TenantProfile"> | string
    description?: StringNullableFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    properties?: PropertyListRelationFilter
  }

  export type TenantProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    properties?: PropertyOrderByRelationAggregateInput
    _relevance?: TenantProfileOrderByRelevanceInput
  }

  export type TenantProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: TenantProfileWhereInput | TenantProfileWhereInput[]
    OR?: TenantProfileWhereInput[]
    NOT?: TenantProfileWhereInput | TenantProfileWhereInput[]
    displayName?: StringFilter<"TenantProfile"> | string
    description?: StringNullableFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TenantProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    properties?: PropertyListRelationFilter
  }, "id" | "userId">

  export type TenantProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TenantProfileCountOrderByAggregateInput
    _avg?: TenantProfileAvgOrderByAggregateInput
    _max?: TenantProfileMaxOrderByAggregateInput
    _min?: TenantProfileMinOrderByAggregateInput
    _sum?: TenantProfileSumOrderByAggregateInput
  }

  export type TenantProfileScalarWhereWithAggregatesInput = {
    AND?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    OR?: TenantProfileScalarWhereWithAggregatesInput[]
    NOT?: TenantProfileScalarWhereWithAggregatesInput | TenantProfileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TenantProfile"> | number
    userId?: IntWithAggregatesFilter<"TenantProfile"> | number
    displayName?: StringWithAggregatesFilter<"TenantProfile"> | string
    description?: StringNullableWithAggregatesFilter<"TenantProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TenantProfile"> | Date | string
  }

  export type UserTokenWhereInput = {
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    id?: IntFilter<"UserToken"> | number
    userId?: IntFilter<"UserToken"> | number
    type?: EnumTokenTypeFilter<"UserToken"> | $Enums.TokenType
    token?: StringFilter<"UserToken"> | string
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    consumedAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserTokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: UserTokenOrderByRelevanceInput
  }

  export type UserTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: UserTokenWhereInput | UserTokenWhereInput[]
    OR?: UserTokenWhereInput[]
    NOT?: UserTokenWhereInput | UserTokenWhereInput[]
    userId?: IntFilter<"UserToken"> | number
    type?: EnumTokenTypeFilter<"UserToken"> | $Enums.TokenType
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    consumedAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type UserTokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserTokenCountOrderByAggregateInput
    _avg?: UserTokenAvgOrderByAggregateInput
    _max?: UserTokenMaxOrderByAggregateInput
    _min?: UserTokenMinOrderByAggregateInput
    _sum?: UserTokenSumOrderByAggregateInput
  }

  export type UserTokenScalarWhereWithAggregatesInput = {
    AND?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    OR?: UserTokenScalarWhereWithAggregatesInput[]
    NOT?: UserTokenScalarWhereWithAggregatesInput | UserTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserToken"> | number
    userId?: IntWithAggregatesFilter<"UserToken"> | number
    type?: EnumTokenTypeWithAggregatesFilter<"UserToken"> | $Enums.TokenType
    token?: StringWithAggregatesFilter<"UserToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"UserToken"> | Date | string
    consumedAt?: DateTimeNullableWithAggregatesFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserToken"> | Date | string
  }

  export type PropertyCategoryWhereInput = {
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    id?: IntFilter<"PropertyCategory"> | number
    name?: StringFilter<"PropertyCategory"> | string
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
  }

  export type PropertyCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    _relevance?: PropertyCategoryOrderByRelevanceInput
  }

  export type PropertyCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    OR?: PropertyCategoryWhereInput[]
    NOT?: PropertyCategoryWhereInput | PropertyCategoryWhereInput[]
    createdAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyCategory"> | Date | string
    properties?: PropertyListRelationFilter
  }, "id" | "name">

  export type PropertyCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCategoryCountOrderByAggregateInput
    _avg?: PropertyCategoryAvgOrderByAggregateInput
    _max?: PropertyCategoryMaxOrderByAggregateInput
    _min?: PropertyCategoryMinOrderByAggregateInput
    _sum?: PropertyCategorySumOrderByAggregateInput
  }

  export type PropertyCategoryScalarWhereWithAggregatesInput = {
    AND?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    OR?: PropertyCategoryScalarWhereWithAggregatesInput[]
    NOT?: PropertyCategoryScalarWhereWithAggregatesInput | PropertyCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyCategory"> | number
    name?: StringWithAggregatesFilter<"PropertyCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PropertyCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyCategory"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    slug?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    addressLine1?: StringNullableFilter<"Property"> | string | null
    city?: StringFilter<"Property"> | string
    state?: StringNullableFilter<"Property"> | string | null
    country?: StringFilter<"Property"> | string
    postalCode?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenant?: XOR<TenantProfileScalarRelationFilter, TenantProfileWhereInput>
    category?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
    rooms?: RoomListRelationFilter
    images?: PropertyImageListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tenant?: TenantProfileOrderByWithRelationInput
    category?: PropertyCategoryOrderByWithRelationInput
    rooms?: RoomOrderByRelationAggregateInput
    images?: PropertyImageOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    _relevance?: PropertyOrderByRelevanceInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    addressLine1?: StringNullableFilter<"Property"> | string | null
    city?: StringFilter<"Property"> | string
    state?: StringNullableFilter<"Property"> | string | null
    country?: StringFilter<"Property"> | string
    postalCode?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    tenant?: XOR<TenantProfileScalarRelationFilter, TenantProfileWhereInput>
    category?: XOR<PropertyCategoryScalarRelationFilter, PropertyCategoryWhereInput>
    rooms?: RoomListRelationFilter
    images?: PropertyImageListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "slug">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    addressLine1?: SortOrderInput | SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    tenantId?: IntWithAggregatesFilter<"Property"> | number
    categoryId?: IntWithAggregatesFilter<"Property"> | number
    name?: StringWithAggregatesFilter<"Property"> | string
    slug?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    addressLine1?: StringNullableWithAggregatesFilter<"Property"> | string | null
    city?: StringWithAggregatesFilter<"Property"> | string
    state?: StringNullableWithAggregatesFilter<"Property"> | string | null
    country?: StringWithAggregatesFilter<"Property"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Property"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: PropertyImageOrderByRelevanceInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    url?: StringWithAggregatesFilter<"PropertyImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    totalUnits?: IntFilter<"Room"> | number
    basePrice?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    images?: RoomImageListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    priceAdjustments?: RoomPriceAdjustmentListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    images?: RoomImageOrderByRelationAggregateInput
    availabilities?: RoomAvailabilityOrderByRelationAggregateInput
    priceAdjustments?: RoomPriceAdjustmentOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    _relevance?: RoomOrderByRelevanceInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    totalUnits?: IntFilter<"Room"> | number
    basePrice?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    images?: RoomImageListRelationFilter
    availabilities?: RoomAvailabilityListRelationFilter
    priceAdjustments?: RoomPriceAdjustmentListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Room"> | number
    propertyId?: IntWithAggregatesFilter<"Room"> | number
    name?: StringWithAggregatesFilter<"Room"> | string
    description?: StringNullableWithAggregatesFilter<"Room"> | string | null
    capacity?: IntWithAggregatesFilter<"Room"> | number
    totalUnits?: IntWithAggregatesFilter<"Room"> | number
    basePrice?: DecimalWithAggregatesFilter<"Room"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Room"> | Date | string
  }

  export type RoomImageWhereInput = {
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    roomId?: IntFilter<"RoomImage"> | number
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomImageOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: RoomImageOrderByRelevanceInput
  }

  export type RoomImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomImageWhereInput | RoomImageWhereInput[]
    OR?: RoomImageWhereInput[]
    NOT?: RoomImageWhereInput | RoomImageWhereInput[]
    roomId?: IntFilter<"RoomImage"> | number
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomImageOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    _count?: RoomImageCountOrderByAggregateInput
    _avg?: RoomImageAvgOrderByAggregateInput
    _max?: RoomImageMaxOrderByAggregateInput
    _min?: RoomImageMinOrderByAggregateInput
    _sum?: RoomImageSumOrderByAggregateInput
  }

  export type RoomImageScalarWhereWithAggregatesInput = {
    AND?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    OR?: RoomImageScalarWhereWithAggregatesInput[]
    NOT?: RoomImageScalarWhereWithAggregatesInput | RoomImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomImage"> | number
    roomId?: IntWithAggregatesFilter<"RoomImage"> | number
    url?: StringWithAggregatesFilter<"RoomImage"> | string
    isPrimary?: BoolWithAggregatesFilter<"RoomImage"> | boolean
  }

  export type RoomAvailabilityWhereInput = {
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    availableUnits?: IntNullableFilter<"RoomAvailability"> | number | null
    note?: StringNullableFilter<"RoomAvailability"> | string | null
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    availableUnits?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: RoomAvailabilityOrderByRelevanceInput
  }

  export type RoomAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roomId_date?: RoomAvailabilityRoomIdDateCompoundUniqueInput
    AND?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    OR?: RoomAvailabilityWhereInput[]
    NOT?: RoomAvailabilityWhereInput | RoomAvailabilityWhereInput[]
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    availableUnits?: IntNullableFilter<"RoomAvailability"> | number | null
    note?: StringNullableFilter<"RoomAvailability"> | string | null
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id" | "roomId_date">

  export type RoomAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    availableUnits?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RoomAvailabilityCountOrderByAggregateInput
    _avg?: RoomAvailabilityAvgOrderByAggregateInput
    _max?: RoomAvailabilityMaxOrderByAggregateInput
    _min?: RoomAvailabilityMinOrderByAggregateInput
    _sum?: RoomAvailabilitySumOrderByAggregateInput
  }

  export type RoomAvailabilityScalarWhereWithAggregatesInput = {
    AND?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    OR?: RoomAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: RoomAvailabilityScalarWhereWithAggregatesInput | RoomAvailabilityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomAvailability"> | number
    roomId?: IntWithAggregatesFilter<"RoomAvailability"> | number
    date?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolWithAggregatesFilter<"RoomAvailability"> | boolean
    availableUnits?: IntNullableWithAggregatesFilter<"RoomAvailability"> | number | null
    note?: StringNullableWithAggregatesFilter<"RoomAvailability"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomAvailability"> | Date | string
  }

  export type RoomPriceAdjustmentWhereInput = {
    AND?: RoomPriceAdjustmentWhereInput | RoomPriceAdjustmentWhereInput[]
    OR?: RoomPriceAdjustmentWhereInput[]
    NOT?: RoomPriceAdjustmentWhereInput | RoomPriceAdjustmentWhereInput[]
    id?: IntFilter<"RoomPriceAdjustment"> | number
    roomId?: IntFilter<"RoomPriceAdjustment"> | number
    startDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    endDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    type?: EnumPriceAdjustmentTypeFilter<"RoomPriceAdjustment"> | $Enums.PriceAdjustmentType
    value?: DecimalFilter<"RoomPriceAdjustment"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"RoomPriceAdjustment"> | string | null
    createdAt?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }

  export type RoomPriceAdjustmentOrderByWithRelationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    room?: RoomOrderByWithRelationInput
    _relevance?: RoomPriceAdjustmentOrderByRelevanceInput
  }

  export type RoomPriceAdjustmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoomPriceAdjustmentWhereInput | RoomPriceAdjustmentWhereInput[]
    OR?: RoomPriceAdjustmentWhereInput[]
    NOT?: RoomPriceAdjustmentWhereInput | RoomPriceAdjustmentWhereInput[]
    roomId?: IntFilter<"RoomPriceAdjustment"> | number
    startDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    endDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    type?: EnumPriceAdjustmentTypeFilter<"RoomPriceAdjustment"> | $Enums.PriceAdjustmentType
    value?: DecimalFilter<"RoomPriceAdjustment"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"RoomPriceAdjustment"> | string | null
    createdAt?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
  }, "id">

  export type RoomPriceAdjustmentOrderByWithAggregationInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RoomPriceAdjustmentCountOrderByAggregateInput
    _avg?: RoomPriceAdjustmentAvgOrderByAggregateInput
    _max?: RoomPriceAdjustmentMaxOrderByAggregateInput
    _min?: RoomPriceAdjustmentMinOrderByAggregateInput
    _sum?: RoomPriceAdjustmentSumOrderByAggregateInput
  }

  export type RoomPriceAdjustmentScalarWhereWithAggregatesInput = {
    AND?: RoomPriceAdjustmentScalarWhereWithAggregatesInput | RoomPriceAdjustmentScalarWhereWithAggregatesInput[]
    OR?: RoomPriceAdjustmentScalarWhereWithAggregatesInput[]
    NOT?: RoomPriceAdjustmentScalarWhereWithAggregatesInput | RoomPriceAdjustmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoomPriceAdjustment"> | number
    roomId?: IntWithAggregatesFilter<"RoomPriceAdjustment"> | number
    startDate?: DateTimeWithAggregatesFilter<"RoomPriceAdjustment"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RoomPriceAdjustment"> | Date | string
    type?: EnumPriceAdjustmentTypeWithAggregatesFilter<"RoomPriceAdjustment"> | $Enums.PriceAdjustmentType
    value?: DecimalWithAggregatesFilter<"RoomPriceAdjustment"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"RoomPriceAdjustment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RoomPriceAdjustment"> | Date | string
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDueAt?: DateTimeFilter<"Booking"> | Date | string
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    paymentProof?: XOR<PaymentProofNullableScalarRelationFilter, PaymentProofWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    status?: SortOrder
    paymentDueAt?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    room?: RoomOrderByWithRelationInput
    paymentProof?: PaymentProofOrderByWithRelationInput
    review?: ReviewOrderByWithRelationInput
    _relevance?: BookingOrderByRelevanceInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDueAt?: DateTimeFilter<"Booking"> | Date | string
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    paymentProof?: XOR<PaymentProofNullableScalarRelationFilter, PaymentProofWhereInput> | null
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    status?: SortOrder
    paymentDueAt?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Booking"> | number
    userId?: IntWithAggregatesFilter<"Booking"> | number
    propertyId?: IntWithAggregatesFilter<"Booking"> | number
    roomId?: IntWithAggregatesFilter<"Booking"> | number
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    guests?: IntWithAggregatesFilter<"Booking"> | number
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    paymentDueAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalAmount?: DecimalWithAggregatesFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Booking"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type PaymentProofWhereInput = {
    AND?: PaymentProofWhereInput | PaymentProofWhereInput[]
    OR?: PaymentProofWhereInput[]
    NOT?: PaymentProofWhereInput | PaymentProofWhereInput[]
    id?: IntFilter<"PaymentProof"> | number
    bookingId?: IntFilter<"PaymentProof"> | number
    fileUrl?: StringFilter<"PaymentProof"> | string
    fileName?: StringFilter<"PaymentProof"> | string
    mimeType?: StringFilter<"PaymentProof"> | string
    uploadedAt?: DateTimeFilter<"PaymentProof"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"PaymentProof"> | Date | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }

  export type PaymentProofOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    booking?: BookingOrderByWithRelationInput
    _relevance?: PaymentProofOrderByRelevanceInput
  }

  export type PaymentProofWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId?: number
    AND?: PaymentProofWhereInput | PaymentProofWhereInput[]
    OR?: PaymentProofWhereInput[]
    NOT?: PaymentProofWhereInput | PaymentProofWhereInput[]
    fileUrl?: StringFilter<"PaymentProof"> | string
    fileName?: StringFilter<"PaymentProof"> | string
    mimeType?: StringFilter<"PaymentProof"> | string
    uploadedAt?: DateTimeFilter<"PaymentProof"> | Date | string
    verifiedAt?: DateTimeNullableFilter<"PaymentProof"> | Date | string | null
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
  }, "id" | "bookingId">

  export type PaymentProofOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    _count?: PaymentProofCountOrderByAggregateInput
    _avg?: PaymentProofAvgOrderByAggregateInput
    _max?: PaymentProofMaxOrderByAggregateInput
    _min?: PaymentProofMinOrderByAggregateInput
    _sum?: PaymentProofSumOrderByAggregateInput
  }

  export type PaymentProofScalarWhereWithAggregatesInput = {
    AND?: PaymentProofScalarWhereWithAggregatesInput | PaymentProofScalarWhereWithAggregatesInput[]
    OR?: PaymentProofScalarWhereWithAggregatesInput[]
    NOT?: PaymentProofScalarWhereWithAggregatesInput | PaymentProofScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentProof"> | number
    bookingId?: IntWithAggregatesFilter<"PaymentProof"> | number
    fileUrl?: StringWithAggregatesFilter<"PaymentProof"> | string
    fileName?: StringWithAggregatesFilter<"PaymentProof"> | string
    mimeType?: StringWithAggregatesFilter<"PaymentProof"> | string
    uploadedAt?: DateTimeWithAggregatesFilter<"PaymentProof"> | Date | string
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"PaymentProof"> | Date | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: IntFilter<"Review"> | number
    bookingId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntNullableFilter<"Review"> | number | null
    tenantReply?: StringNullableFilter<"Review"> | string | null
    repliedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    rating?: SortOrderInput | SortOrder
    tenantReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    property?: PropertyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    bookingId?: number
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    propertyId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntNullableFilter<"Review"> | number | null
    tenantReply?: StringNullableFilter<"Review"> | string | null
    repliedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "bookingId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    rating?: SortOrderInput | SortOrder
    tenantReply?: SortOrderInput | SortOrder
    repliedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Review"> | number
    bookingId?: IntWithAggregatesFilter<"Review"> | number
    propertyId?: IntWithAggregatesFilter<"Review"> | number
    userId?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntNullableWithAggregatesFilter<"Review"> | number | null
    tenantReply?: StringNullableWithAggregatesFilter<"Review"> | string | null
    repliedAt?: DateTimeNullableWithAggregatesFilter<"Review"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileCreateInput = {
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantProfileInput
    properties?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantProfileUncheckedCreateInput = {
    id?: number
    userId: number
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantProfileUpdateInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantProfileNestedInput
    properties?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantProfileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type TenantProfileCreateManyInput = {
    id?: number
    userId: number
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileUpdateManyMutationInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TenantProfileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenCreateInput = {
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type UserTokenUncheckedCreateInput = {
    id?: number
    userId: number
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserTokenUpdateInput = {
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type UserTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenCreateManyInput = {
    id?: number
    userId: number
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserTokenUpdateManyMutationInput = {
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PropertyCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PropertyCategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    propertyId: number
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    propertyId: number
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateInput = {
    url: string
    isPrimary?: boolean
    room: RoomCreateNestedOneWithoutImagesInput
  }

  export type RoomImageUncheckedCreateInput = {
    id?: number
    roomId: number
    url: string
    isPrimary?: boolean
  }

  export type RoomImageUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    room?: RoomUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RoomImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomImageCreateManyInput = {
    id?: number
    roomId: number
    url: string
    isPrimary?: boolean
  }

  export type RoomImageUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityCreateInput = {
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutAvailabilitiesInput
  }

  export type RoomAvailabilityUncheckedCreateInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomAvailabilityUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput
  }

  export type RoomAvailabilityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityCreateManyInput = {
    id?: number
    roomId: number
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomAvailabilityUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentCreateInput = {
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
    room: RoomCreateNestedOneWithoutPriceAdjustmentsInput
  }

  export type RoomPriceAdjustmentUncheckedCreateInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomPriceAdjustmentUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    room?: RoomUpdateOneRequiredWithoutPriceAdjustmentsNestedInput
  }

  export type RoomPriceAdjustmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentCreateManyInput = {
    id?: number
    roomId: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomPriceAdjustmentUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentProof?: PaymentProofCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProof?: PaymentProofUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingUpdateInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentProof?: PaymentProofUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: PaymentProofUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentProofCreateInput = {
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
    booking: BookingCreateNestedOneWithoutPaymentProofInput
  }

  export type PaymentProofUncheckedCreateInput = {
    id?: number
    bookingId: number
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
  }

  export type PaymentProofUpdateInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    booking?: BookingUpdateOneRequiredWithoutPaymentProofNestedInput
  }

  export type PaymentProofUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentProofCreateManyInput = {
    id?: number
    bookingId: number
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
  }

  export type PaymentProofUpdateManyMutationInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentProofUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewCreateInput = {
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    property: PropertyCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: number
    bookingId: number
    propertyId: number
    userId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: number
    bookingId: number
    propertyId: number
    userId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TenantProfileNullableScalarRelationFilter = {
    is?: TenantProfileWhereInput | null
    isNot?: TenantProfileWhereInput | null
  }

  export type UserTokenListRelationFilter = {
    every?: UserTokenWhereInput
    some?: UserTokenWhereInput
    none?: UserTokenWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    isVerified?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TenantProfileOrderByRelevanceInput = {
    fields: TenantProfileOrderByRelevanceFieldEnum | TenantProfileOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TenantProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TenantProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    displayName?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TenantProfileSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[]
    notIn?: $Enums.TokenType[]
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserTokenOrderByRelevanceInput = {
    fields: UserTokenOrderByRelevanceFieldEnum | UserTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserTokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type UserTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[]
    notIn?: $Enums.TokenType[]
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PropertyCategoryOrderByRelevanceInput = {
    fields: PropertyCategoryOrderByRelevanceFieldEnum | PropertyCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type TenantProfileScalarRelationFilter = {
    is?: TenantProfileWhereInput
    isNot?: TenantProfileWhereInput
  }

  export type PropertyCategoryScalarRelationFilter = {
    is?: PropertyCategoryWhereInput
    isNot?: PropertyCategoryWhereInput
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelevanceInput = {
    fields: PropertyOrderByRelevanceFieldEnum | PropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    addressLine1?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    addressLine1?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    addressLine1?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    tenantId?: SortOrder
    categoryId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageOrderByRelevanceInput = {
    fields: PropertyImageOrderByRelevanceFieldEnum | PropertyImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RoomImageListRelationFilter = {
    every?: RoomImageWhereInput
    some?: RoomImageWhereInput
    none?: RoomImageWhereInput
  }

  export type RoomAvailabilityListRelationFilter = {
    every?: RoomAvailabilityWhereInput
    some?: RoomAvailabilityWhereInput
    none?: RoomAvailabilityWhereInput
  }

  export type RoomPriceAdjustmentListRelationFilter = {
    every?: RoomPriceAdjustmentWhereInput
    some?: RoomPriceAdjustmentWhereInput
    none?: RoomPriceAdjustmentWhereInput
  }

  export type RoomImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomPriceAdjustmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomOrderByRelevanceInput = {
    fields: RoomOrderByRelevanceFieldEnum | RoomOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    capacity?: SortOrder
    totalUnits?: SortOrder
    basePrice?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type RoomImageOrderByRelevanceInput = {
    fields: RoomImageOrderByRelevanceFieldEnum | RoomImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomImageCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
  }

  export type RoomImageAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type RoomImageMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
  }

  export type RoomImageMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    url?: SortOrder
    isPrimary?: SortOrder
  }

  export type RoomImageSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoomAvailabilityOrderByRelevanceInput = {
    fields: RoomAvailabilityOrderByRelevanceFieldEnum | RoomAvailabilityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomAvailabilityRoomIdDateCompoundUniqueInput = {
    roomId: number
    date: Date | string
  }

  export type RoomAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    availableUnits?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvailabilityAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    availableUnits?: SortOrder
  }

  export type RoomAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    availableUnits?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    date?: SortOrder
    isAvailable?: SortOrder
    availableUnits?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomAvailabilitySumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    availableUnits?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPriceAdjustmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceAdjustmentType | EnumPriceAdjustmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceAdjustmentType[]
    notIn?: $Enums.PriceAdjustmentType[]
    not?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel> | $Enums.PriceAdjustmentType
  }

  export type RoomPriceAdjustmentOrderByRelevanceInput = {
    fields: RoomPriceAdjustmentOrderByRelevanceFieldEnum | RoomPriceAdjustmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoomPriceAdjustmentCountOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPriceAdjustmentAvgOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
  }

  export type RoomPriceAdjustmentMaxOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPriceAdjustmentMinOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    type?: SortOrder
    value?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type RoomPriceAdjustmentSumOrderByAggregateInput = {
    id?: SortOrder
    roomId?: SortOrder
    value?: SortOrder
  }

  export type EnumPriceAdjustmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceAdjustmentType | EnumPriceAdjustmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceAdjustmentType[]
    notIn?: $Enums.PriceAdjustmentType[]
    not?: NestedEnumPriceAdjustmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceAdjustmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel>
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type PaymentProofNullableScalarRelationFilter = {
    is?: PaymentProofWhereInput | null
    isNot?: PaymentProofWhereInput | null
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type BookingOrderByRelevanceInput = {
    fields: BookingOrderByRelevanceFieldEnum | BookingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    status?: SortOrder
    paymentDueAt?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    status?: SortOrder
    paymentDueAt?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    guests?: SortOrder
    status?: SortOrder
    paymentDueAt?: SortOrder
    totalAmount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    propertyId?: SortOrder
    roomId?: SortOrder
    guests?: SortOrder
    totalAmount?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type PaymentProofOrderByRelevanceInput = {
    fields: PaymentProofOrderByRelevanceFieldEnum | PaymentProofOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaymentProofCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentProofAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type PaymentProofMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentProofMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    fileUrl?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    uploadedAt?: SortOrder
    verifiedAt?: SortOrder
  }

  export type PaymentProofSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tenantReply?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tenantReply?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    rating?: SortOrder
    tenantReply?: SortOrder
    repliedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    propertyId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type TenantProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type UserTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TenantProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type UserTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumAuthProviderFieldUpdateOperationsInput = {
    set?: $Enums.AuthProvider
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TenantProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TenantProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutUserInput
    upsert?: TenantProfileUpsertWithoutUserInput
    disconnect?: TenantProfileWhereInput | boolean
    delete?: TenantProfileWhereInput | boolean
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutUserInput, TenantProfileUpdateWithoutUserInput>, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput> | UserTokenCreateWithoutUserInput[] | UserTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserTokenCreateOrConnectWithoutUserInput | UserTokenCreateOrConnectWithoutUserInput[]
    upsert?: UserTokenUpsertWithWhereUniqueWithoutUserInput | UserTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserTokenCreateManyUserInputEnvelope
    set?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    disconnect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    delete?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    connect?: UserTokenWhereUniqueInput | UserTokenWhereUniqueInput[]
    update?: UserTokenUpdateWithWhereUniqueWithoutUserInput | UserTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserTokenUpdateManyWithWhereWithoutUserInput | UserTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTenantProfileInput = {
    create?: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantProfileInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutTenantInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTenantProfileNestedInput = {
    create?: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTenantProfileInput
    upsert?: UserUpsertWithoutTenantProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTenantProfileInput, UserUpdateWithoutTenantProfileInput>, UserUncheckedUpdateWithoutTenantProfileInput>
  }

  export type PropertyUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutTenantNestedInput = {
    create?: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput> | PropertyCreateWithoutTenantInput[] | PropertyUncheckedCreateWithoutTenantInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutTenantInput | PropertyCreateOrConnectWithoutTenantInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutTenantInput | PropertyUpsertWithWhereUniqueWithoutTenantInput[]
    createMany?: PropertyCreateManyTenantInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutTenantInput | PropertyUpdateWithWhereUniqueWithoutTenantInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutTenantInput | PropertyUpdateManyWithWhereWithoutTenantInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTokenTypeFieldUpdateOperationsInput = {
    set?: $Enums.TokenType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type PropertyCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput> | PropertyCreateWithoutCategoryInput[] | PropertyUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutCategoryInput | PropertyCreateOrConnectWithoutCategoryInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutCategoryInput | PropertyUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PropertyCreateManyCategoryInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutCategoryInput | PropertyUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutCategoryInput | PropertyUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type TenantProfileCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<TenantProfileCreateWithoutPropertiesInput, TenantProfileUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutPropertiesInput
    connect?: TenantProfileWhereUniqueInput
  }

  export type PropertyCategoryCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
  }

  export type RoomCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<TenantProfileCreateWithoutPropertiesInput, TenantProfileUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: TenantProfileCreateOrConnectWithoutPropertiesInput
    upsert?: TenantProfileUpsertWithoutPropertiesInput
    connect?: TenantProfileWhereUniqueInput
    update?: XOR<XOR<TenantProfileUpdateToOneWithWhereWithoutPropertiesInput, TenantProfileUpdateWithoutPropertiesInput>, TenantProfileUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: PropertyCategoryCreateOrConnectWithoutPropertiesInput
    upsert?: PropertyCategoryUpsertWithoutPropertiesInput
    connect?: PropertyCategoryWhereUniqueInput
    update?: XOR<XOR<PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput, PropertyCategoryUpdateWithoutPropertiesInput>, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type RoomUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput> | RoomCreateWithoutPropertyInput[] | RoomUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutPropertyInput | RoomCreateOrConnectWithoutPropertyInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutPropertyInput | RoomUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: RoomCreateManyPropertyInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutPropertyInput | RoomUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutPropertyInput | RoomUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput> | BookingCreateWithoutPropertyInput[] | BookingUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutPropertyInput | BookingCreateOrConnectWithoutPropertyInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutPropertyInput | BookingUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: BookingCreateManyPropertyInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutPropertyInput | BookingUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutPropertyInput | BookingUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput> | ReviewCreateWithoutPropertyInput[] | ReviewUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPropertyInput | ReviewCreateOrConnectWithoutPropertyInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPropertyInput | ReviewUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: ReviewCreateManyPropertyInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPropertyInput | ReviewUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPropertyInput | ReviewUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutImagesInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutImagesInput
    upsert?: PropertyUpsertWithoutImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutImagesInput, PropertyUpdateWithoutImagesInput>, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyCreateNestedOneWithoutRoomsInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
  }

  export type RoomImageCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomAvailabilityCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type RoomPriceAdjustmentCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput> | RoomPriceAdjustmentCreateWithoutRoomInput[] | RoomPriceAdjustmentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPriceAdjustmentCreateOrConnectWithoutRoomInput | RoomPriceAdjustmentCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPriceAdjustmentCreateManyRoomInputEnvelope
    connect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type RoomImageUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
  }

  export type RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
  }

  export type RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput> | RoomPriceAdjustmentCreateWithoutRoomInput[] | RoomPriceAdjustmentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPriceAdjustmentCreateOrConnectWithoutRoomInput | RoomPriceAdjustmentCreateOrConnectWithoutRoomInput[]
    createMany?: RoomPriceAdjustmentCreateManyRoomInputEnvelope
    connect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PropertyUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutRoomsInput
    upsert?: PropertyUpsertWithoutRoomsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutRoomsInput, PropertyUpdateWithoutRoomsInput>, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type RoomImageUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomAvailabilityUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput> | RoomPriceAdjustmentCreateWithoutRoomInput[] | RoomPriceAdjustmentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPriceAdjustmentCreateOrConnectWithoutRoomInput | RoomPriceAdjustmentCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPriceAdjustmentUpsertWithWhereUniqueWithoutRoomInput | RoomPriceAdjustmentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPriceAdjustmentCreateManyRoomInputEnvelope
    set?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    disconnect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    delete?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    connect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    update?: RoomPriceAdjustmentUpdateWithWhereUniqueWithoutRoomInput | RoomPriceAdjustmentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPriceAdjustmentUpdateManyWithWhereWithoutRoomInput | RoomPriceAdjustmentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPriceAdjustmentScalarWhereInput | RoomPriceAdjustmentScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput> | RoomImageCreateWithoutRoomInput[] | RoomImageUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomImageCreateOrConnectWithoutRoomInput | RoomImageCreateOrConnectWithoutRoomInput[]
    upsert?: RoomImageUpsertWithWhereUniqueWithoutRoomInput | RoomImageUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomImageCreateManyRoomInputEnvelope
    set?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    disconnect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    delete?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    connect?: RoomImageWhereUniqueInput | RoomImageWhereUniqueInput[]
    update?: RoomImageUpdateWithWhereUniqueWithoutRoomInput | RoomImageUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomImageUpdateManyWithWhereWithoutRoomInput | RoomImageUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput> | RoomAvailabilityCreateWithoutRoomInput[] | RoomAvailabilityUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomAvailabilityCreateOrConnectWithoutRoomInput | RoomAvailabilityCreateOrConnectWithoutRoomInput[]
    upsert?: RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomAvailabilityCreateManyRoomInputEnvelope
    set?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    disconnect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    delete?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    connect?: RoomAvailabilityWhereUniqueInput | RoomAvailabilityWhereUniqueInput[]
    update?: RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput | RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomAvailabilityUpdateManyWithWhereWithoutRoomInput | RoomAvailabilityUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
  }

  export type RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput> | RoomPriceAdjustmentCreateWithoutRoomInput[] | RoomPriceAdjustmentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: RoomPriceAdjustmentCreateOrConnectWithoutRoomInput | RoomPriceAdjustmentCreateOrConnectWithoutRoomInput[]
    upsert?: RoomPriceAdjustmentUpsertWithWhereUniqueWithoutRoomInput | RoomPriceAdjustmentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: RoomPriceAdjustmentCreateManyRoomInputEnvelope
    set?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    disconnect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    delete?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    connect?: RoomPriceAdjustmentWhereUniqueInput | RoomPriceAdjustmentWhereUniqueInput[]
    update?: RoomPriceAdjustmentUpdateWithWhereUniqueWithoutRoomInput | RoomPriceAdjustmentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: RoomPriceAdjustmentUpdateManyWithWhereWithoutRoomInput | RoomPriceAdjustmentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: RoomPriceAdjustmentScalarWhereInput | RoomPriceAdjustmentScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput> | BookingCreateWithoutRoomInput[] | BookingUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutRoomInput | BookingCreateOrConnectWithoutRoomInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutRoomInput | BookingUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: BookingCreateManyRoomInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutRoomInput | BookingUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutRoomInput | BookingUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type RoomCreateNestedOneWithoutImagesInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    connect?: RoomWhereUniqueInput
  }

  export type RoomUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutImagesInput
    upsert?: RoomUpsertWithoutImagesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutImagesInput, RoomUpdateWithoutImagesInput>, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomCreateNestedOneWithoutAvailabilitiesInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateOneRequiredWithoutAvailabilitiesNestedInput = {
    create?: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    connectOrCreate?: RoomCreateOrConnectWithoutAvailabilitiesInput
    upsert?: RoomUpsertWithoutAvailabilitiesInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutAvailabilitiesInput, RoomUpdateWithoutAvailabilitiesInput>, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RoomCreateNestedOneWithoutPriceAdjustmentsInput = {
    create?: XOR<RoomCreateWithoutPriceAdjustmentsInput, RoomUncheckedCreateWithoutPriceAdjustmentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPriceAdjustmentsInput
    connect?: RoomWhereUniqueInput
  }

  export type EnumPriceAdjustmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.PriceAdjustmentType
  }

  export type RoomUpdateOneRequiredWithoutPriceAdjustmentsNestedInput = {
    create?: XOR<RoomCreateWithoutPriceAdjustmentsInput, RoomUncheckedCreateWithoutPriceAdjustmentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutPriceAdjustmentsInput
    upsert?: RoomUpsertWithoutPriceAdjustmentsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutPriceAdjustmentsInput, RoomUpdateWithoutPriceAdjustmentsInput>, RoomUncheckedUpdateWithoutPriceAdjustmentsInput>
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutBookingsInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
  }

  export type RoomCreateNestedOneWithoutBookingsInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    connect?: RoomWhereUniqueInput
  }

  export type PaymentProofCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentProofCreateOrConnectWithoutBookingInput
    connect?: PaymentProofWhereUniqueInput
  }

  export type ReviewCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type PaymentProofUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentProofCreateOrConnectWithoutBookingInput
    connect?: PaymentProofWhereUniqueInput
  }

  export type ReviewUncheckedCreateNestedOneWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type PropertyUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutBookingsInput
    upsert?: PropertyUpsertWithoutBookingsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutBookingsInput, PropertyUpdateWithoutBookingsInput>, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutBookingsInput
    upsert?: RoomUpsertWithoutBookingsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutBookingsInput, RoomUpdateWithoutBookingsInput>, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type PaymentProofUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentProofCreateOrConnectWithoutBookingInput
    upsert?: PaymentProofUpsertWithoutBookingInput
    disconnect?: PaymentProofWhereInput | boolean
    delete?: PaymentProofWhereInput | boolean
    connect?: PaymentProofWhereUniqueInput
    update?: XOR<XOR<PaymentProofUpdateToOneWithWhereWithoutBookingInput, PaymentProofUpdateWithoutBookingInput>, PaymentProofUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentProofUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
    connectOrCreate?: PaymentProofCreateOrConnectWithoutBookingInput
    upsert?: PaymentProofUpsertWithoutBookingInput
    disconnect?: PaymentProofWhereInput | boolean
    delete?: PaymentProofWhereInput | boolean
    connect?: PaymentProofWhereUniqueInput
    update?: XOR<XOR<PaymentProofUpdateToOneWithWhereWithoutBookingInput, PaymentProofUpdateWithoutBookingInput>, PaymentProofUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUncheckedUpdateOneWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput
    upsert?: ReviewUpsertWithoutBookingInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutBookingInput, ReviewUpdateWithoutBookingInput>, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type BookingCreateNestedOneWithoutPaymentProofInput = {
    create?: XOR<BookingCreateWithoutPaymentProofInput, BookingUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentProofInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutPaymentProofNestedInput = {
    create?: XOR<BookingCreateWithoutPaymentProofInput, BookingUncheckedCreateWithoutPaymentProofInput>
    connectOrCreate?: BookingCreateOrConnectWithoutPaymentProofInput
    upsert?: BookingUpsertWithoutPaymentProofInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutPaymentProofInput, BookingUpdateWithoutPaymentProofInput>, BookingUncheckedUpdateWithoutPaymentProofInput>
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type PropertyCreateNestedOneWithoutReviewsInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type PropertyUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutReviewsInput
    upsert?: PropertyUpsertWithoutReviewsInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutReviewsInput, PropertyUpdateWithoutReviewsInput>, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumAuthProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderFilter<$PrismaModel> | $Enums.AuthProvider
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthProvider | EnumAuthProviderFieldRefInput<$PrismaModel>
    in?: $Enums.AuthProvider[]
    notIn?: $Enums.AuthProvider[]
    not?: NestedEnumAuthProviderWithAggregatesFilter<$PrismaModel> | $Enums.AuthProvider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthProviderFilter<$PrismaModel>
    _max?: NestedEnumAuthProviderFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTokenTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[]
    notIn?: $Enums.TokenType[]
    not?: NestedEnumTokenTypeFilter<$PrismaModel> | $Enums.TokenType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TokenType | EnumTokenTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TokenType[]
    notIn?: $Enums.TokenType[]
    not?: NestedEnumTokenTypeWithAggregatesFilter<$PrismaModel> | $Enums.TokenType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTokenTypeFilter<$PrismaModel>
    _max?: NestedEnumTokenTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPriceAdjustmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceAdjustmentType | EnumPriceAdjustmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceAdjustmentType[]
    notIn?: $Enums.PriceAdjustmentType[]
    not?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel> | $Enums.PriceAdjustmentType
  }

  export type NestedEnumPriceAdjustmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PriceAdjustmentType | EnumPriceAdjustmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PriceAdjustmentType[]
    notIn?: $Enums.PriceAdjustmentType[]
    not?: NestedEnumPriceAdjustmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.PriceAdjustmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel>
    _max?: NestedEnumPriceAdjustmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type TenantProfileCreateWithoutUserInput = {
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutTenantInput
  }

  export type TenantProfileUncheckedCreateWithoutUserInput = {
    id?: number
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutTenantInput
  }

  export type TenantProfileCreateOrConnectWithoutUserInput = {
    where: TenantProfileWhereUniqueInput
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateWithoutUserInput = {
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserTokenUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserTokenCreateOrConnectWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenCreateManyUserInputEnvelope = {
    data: UserTokenCreateManyUserInput | UserTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutUserInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentProof?: PaymentProofCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProof?: PaymentProofUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    property: PropertyCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: number
    bookingId: number
    propertyId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TenantProfileUpsertWithoutUserInput = {
    update: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TenantProfileCreateWithoutUserInput, TenantProfileUncheckedCreateWithoutUserInput>
    where?: TenantProfileWhereInput
  }

  export type TenantProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TenantProfileWhereInput
    data: XOR<TenantProfileUpdateWithoutUserInput, TenantProfileUncheckedUpdateWithoutUserInput>
  }

  export type TenantProfileUpdateWithoutUserInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutTenantNestedInput
  }

  export type TenantProfileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutTenantNestedInput
  }

  export type UserTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    update: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
    create: XOR<UserTokenCreateWithoutUserInput, UserTokenUncheckedCreateWithoutUserInput>
  }

  export type UserTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: UserTokenWhereUniqueInput
    data: XOR<UserTokenUpdateWithoutUserInput, UserTokenUncheckedUpdateWithoutUserInput>
  }

  export type UserTokenUpdateManyWithWhereWithoutUserInput = {
    where: UserTokenScalarWhereInput
    data: XOR<UserTokenUpdateManyMutationInput, UserTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type UserTokenScalarWhereInput = {
    AND?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    OR?: UserTokenScalarWhereInput[]
    NOT?: UserTokenScalarWhereInput | UserTokenScalarWhereInput[]
    id?: IntFilter<"UserToken"> | number
    userId?: IntFilter<"UserToken"> | number
    type?: EnumTokenTypeFilter<"UserToken"> | $Enums.TokenType
    token?: StringFilter<"UserToken"> | string
    expiresAt?: DateTimeFilter<"UserToken"> | Date | string
    consumedAt?: DateTimeNullableFilter<"UserToken"> | Date | string | null
    createdAt?: DateTimeFilter<"UserToken"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: IntFilter<"Booking"> | number
    userId?: IntFilter<"Booking"> | number
    propertyId?: IntFilter<"Booking"> | number
    roomId?: IntFilter<"Booking"> | number
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    guests?: IntFilter<"Booking"> | number
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    paymentDueAt?: DateTimeFilter<"Booking"> | Date | string
    totalAmount?: DecimalFilter<"Booking"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Booking"> | string
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: IntFilter<"Review"> | number
    bookingId?: IntFilter<"Review"> | number
    propertyId?: IntFilter<"Review"> | number
    userId?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    rating?: IntNullableFilter<"Review"> | number | null
    tenantReply?: StringNullableFilter<"Review"> | string | null
    repliedAt?: DateTimeNullableFilter<"Review"> | Date | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type UserCreateWithoutTenantProfileInput = {
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTenantProfileInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTenantProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
  }

  export type PropertyCreateWithoutTenantInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutTenantInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyCreateManyTenantInputEnvelope = {
    data: PropertyCreateManyTenantInput | PropertyCreateManyTenantInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTenantProfileInput = {
    update: XOR<UserUpdateWithoutTenantProfileInput, UserUncheckedUpdateWithoutTenantProfileInput>
    create: XOR<UserCreateWithoutTenantProfileInput, UserUncheckedCreateWithoutTenantProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTenantProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTenantProfileInput, UserUncheckedUpdateWithoutTenantProfileInput>
  }

  export type UserUpdateWithoutTenantProfileInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTenantProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
    create: XOR<PropertyCreateWithoutTenantInput, PropertyUncheckedCreateWithoutTenantInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutTenantInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutTenantInput, PropertyUncheckedUpdateWithoutTenantInput>
  }

  export type PropertyUpdateManyWithWhereWithoutTenantInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutTenantInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    tenantId?: IntFilter<"Property"> | number
    categoryId?: IntFilter<"Property"> | number
    name?: StringFilter<"Property"> | string
    slug?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    addressLine1?: StringNullableFilter<"Property"> | string | null
    city?: StringFilter<"Property"> | string
    state?: StringNullableFilter<"Property"> | string | null
    country?: StringFilter<"Property"> | string
    postalCode?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type UserCreateWithoutTokensInput = {
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyCreateWithoutCategoryInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutCategoryInput = {
    id?: number
    tenantId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyCreateManyCategoryInputEnvelope = {
    data: PropertyCreateManyCategoryInput | PropertyCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
    create: XOR<PropertyCreateWithoutCategoryInput, PropertyUncheckedCreateWithoutCategoryInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutCategoryInput, PropertyUncheckedUpdateWithoutCategoryInput>
  }

  export type PropertyUpdateManyWithWhereWithoutCategoryInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TenantProfileCreateWithoutPropertiesInput = {
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTenantProfileInput
  }

  export type TenantProfileUncheckedCreateWithoutPropertiesInput = {
    id?: number
    userId: number
    displayName: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TenantProfileCreateOrConnectWithoutPropertiesInput = {
    where: TenantProfileWhereUniqueInput
    create: XOR<TenantProfileCreateWithoutPropertiesInput, TenantProfileUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyCategoryCreateWithoutPropertiesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoryUncheckedCreateWithoutPropertiesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyCategoryCreateOrConnectWithoutPropertiesInput = {
    where: PropertyCategoryWhereUniqueInput
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
  }

  export type RoomCreateWithoutPropertyInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPropertyInput = {
    id?: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomCreateManyPropertyInputEnvelope = {
    data: RoomCreateManyPropertyInput | RoomCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutPropertyInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentProof?: PaymentProofCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPropertyInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProof?: PaymentProofUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingCreateManyPropertyInputEnvelope = {
    data: BookingCreateManyPropertyInput | BookingCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutPropertyInput = {
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutReviewInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPropertyInput = {
    id?: number
    bookingId: number
    userId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewCreateManyPropertyInputEnvelope = {
    data: ReviewCreateManyPropertyInput | ReviewCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type TenantProfileUpsertWithoutPropertiesInput = {
    update: XOR<TenantProfileUpdateWithoutPropertiesInput, TenantProfileUncheckedUpdateWithoutPropertiesInput>
    create: XOR<TenantProfileCreateWithoutPropertiesInput, TenantProfileUncheckedCreateWithoutPropertiesInput>
    where?: TenantProfileWhereInput
  }

  export type TenantProfileUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: TenantProfileWhereInput
    data: XOR<TenantProfileUpdateWithoutPropertiesInput, TenantProfileUncheckedUpdateWithoutPropertiesInput>
  }

  export type TenantProfileUpdateWithoutPropertiesInput = {
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTenantProfileNestedInput
  }

  export type TenantProfileUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    displayName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUpsertWithoutPropertiesInput = {
    update: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
    create: XOR<PropertyCategoryCreateWithoutPropertiesInput, PropertyCategoryUncheckedCreateWithoutPropertiesInput>
    where?: PropertyCategoryWhereInput
  }

  export type PropertyCategoryUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: PropertyCategoryWhereInput
    data: XOR<PropertyCategoryUpdateWithoutPropertiesInput, PropertyCategoryUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyCategoryUpdateWithoutPropertiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCategoryUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomUpsertWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
    create: XOR<RoomCreateWithoutPropertyInput, RoomUncheckedCreateWithoutPropertyInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutPropertyInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutPropertyInput, RoomUncheckedUpdateWithoutPropertyInput>
  }

  export type RoomUpdateManyWithWhereWithoutPropertyInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutPropertyInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: IntFilter<"Room"> | number
    propertyId?: IntFilter<"Room"> | number
    name?: StringFilter<"Room"> | string
    description?: StringNullableFilter<"Room"> | string | null
    capacity?: IntFilter<"Room"> | number
    totalUnits?: IntFilter<"Room"> | number
    basePrice?: DecimalFilter<"Room"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"Room"> | Date | string
    updatedAt?: DateTimeFilter<"Room"> | Date | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    url?: StringFilter<"PropertyImage"> | string
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
    create: XOR<BookingCreateWithoutPropertyInput, BookingUncheckedCreateWithoutPropertyInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutPropertyInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutPropertyInput, BookingUncheckedUpdateWithoutPropertyInput>
  }

  export type BookingUpdateManyWithWhereWithoutPropertyInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutPropertyInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
    create: XOR<ReviewCreateWithoutPropertyInput, ReviewUncheckedCreateWithoutPropertyInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPropertyInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPropertyInput, ReviewUncheckedUpdateWithoutPropertyInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPropertyInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyCreateWithoutImagesInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutImagesInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
  }

  export type PropertyUpsertWithoutImagesInput = {
    update: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
    create: XOR<PropertyCreateWithoutImagesInput, PropertyUncheckedCreateWithoutImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutImagesInput, PropertyUncheckedUpdateWithoutImagesInput>
  }

  export type PropertyUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateWithoutRoomsInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutRoomsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutRoomsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
  }

  export type RoomImageCreateWithoutRoomInput = {
    url: string
    isPrimary?: boolean
  }

  export type RoomImageUncheckedCreateWithoutRoomInput = {
    id?: number
    url: string
    isPrimary?: boolean
  }

  export type RoomImageCreateOrConnectWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageCreateManyRoomInputEnvelope = {
    data: RoomImageCreateManyRoomInput | RoomImageCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomAvailabilityCreateWithoutRoomInput = {
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomAvailabilityUncheckedCreateWithoutRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomAvailabilityCreateOrConnectWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityCreateManyRoomInputEnvelope = {
    data: RoomAvailabilityCreateManyRoomInput | RoomAvailabilityCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type RoomPriceAdjustmentCreateWithoutRoomInput = {
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomPriceAdjustmentUncheckedCreateWithoutRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomPriceAdjustmentCreateOrConnectWithoutRoomInput = {
    where: RoomPriceAdjustmentWhereUniqueInput
    create: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput>
  }

  export type RoomPriceAdjustmentCreateManyRoomInputEnvelope = {
    data: RoomPriceAdjustmentCreateManyRoomInput | RoomPriceAdjustmentCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type BookingCreateWithoutRoomInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    paymentProof?: PaymentProofCreateNestedOneWithoutBookingInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutRoomInput = {
    id?: number
    userId: number
    propertyId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProof?: PaymentProofUncheckedCreateNestedOneWithoutBookingInput
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutRoomInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingCreateManyRoomInputEnvelope = {
    data: BookingCreateManyRoomInput | BookingCreateManyRoomInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithoutRoomsInput = {
    update: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
    create: XOR<PropertyCreateWithoutRoomsInput, PropertyUncheckedCreateWithoutRoomsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutRoomsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutRoomsInput, PropertyUncheckedUpdateWithoutRoomsInput>
  }

  export type PropertyUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutRoomsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomImageUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    update: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomImageCreateWithoutRoomInput, RoomImageUncheckedCreateWithoutRoomInput>
  }

  export type RoomImageUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomImageWhereUniqueInput
    data: XOR<RoomImageUpdateWithoutRoomInput, RoomImageUncheckedUpdateWithoutRoomInput>
  }

  export type RoomImageUpdateManyWithWhereWithoutRoomInput = {
    where: RoomImageScalarWhereInput
    data: XOR<RoomImageUpdateManyMutationInput, RoomImageUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomImageScalarWhereInput = {
    AND?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    OR?: RoomImageScalarWhereInput[]
    NOT?: RoomImageScalarWhereInput | RoomImageScalarWhereInput[]
    id?: IntFilter<"RoomImage"> | number
    roomId?: IntFilter<"RoomImage"> | number
    url?: StringFilter<"RoomImage"> | string
    isPrimary?: BoolFilter<"RoomImage"> | boolean
  }

  export type RoomAvailabilityUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    update: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomAvailabilityCreateWithoutRoomInput, RoomAvailabilityUncheckedCreateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomAvailabilityWhereUniqueInput
    data: XOR<RoomAvailabilityUpdateWithoutRoomInput, RoomAvailabilityUncheckedUpdateWithoutRoomInput>
  }

  export type RoomAvailabilityUpdateManyWithWhereWithoutRoomInput = {
    where: RoomAvailabilityScalarWhereInput
    data: XOR<RoomAvailabilityUpdateManyMutationInput, RoomAvailabilityUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomAvailabilityScalarWhereInput = {
    AND?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    OR?: RoomAvailabilityScalarWhereInput[]
    NOT?: RoomAvailabilityScalarWhereInput | RoomAvailabilityScalarWhereInput[]
    id?: IntFilter<"RoomAvailability"> | number
    roomId?: IntFilter<"RoomAvailability"> | number
    date?: DateTimeFilter<"RoomAvailability"> | Date | string
    isAvailable?: BoolFilter<"RoomAvailability"> | boolean
    availableUnits?: IntNullableFilter<"RoomAvailability"> | number | null
    note?: StringNullableFilter<"RoomAvailability"> | string | null
    createdAt?: DateTimeFilter<"RoomAvailability"> | Date | string
  }

  export type RoomPriceAdjustmentUpsertWithWhereUniqueWithoutRoomInput = {
    where: RoomPriceAdjustmentWhereUniqueInput
    update: XOR<RoomPriceAdjustmentUpdateWithoutRoomInput, RoomPriceAdjustmentUncheckedUpdateWithoutRoomInput>
    create: XOR<RoomPriceAdjustmentCreateWithoutRoomInput, RoomPriceAdjustmentUncheckedCreateWithoutRoomInput>
  }

  export type RoomPriceAdjustmentUpdateWithWhereUniqueWithoutRoomInput = {
    where: RoomPriceAdjustmentWhereUniqueInput
    data: XOR<RoomPriceAdjustmentUpdateWithoutRoomInput, RoomPriceAdjustmentUncheckedUpdateWithoutRoomInput>
  }

  export type RoomPriceAdjustmentUpdateManyWithWhereWithoutRoomInput = {
    where: RoomPriceAdjustmentScalarWhereInput
    data: XOR<RoomPriceAdjustmentUpdateManyMutationInput, RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomPriceAdjustmentScalarWhereInput = {
    AND?: RoomPriceAdjustmentScalarWhereInput | RoomPriceAdjustmentScalarWhereInput[]
    OR?: RoomPriceAdjustmentScalarWhereInput[]
    NOT?: RoomPriceAdjustmentScalarWhereInput | RoomPriceAdjustmentScalarWhereInput[]
    id?: IntFilter<"RoomPriceAdjustment"> | number
    roomId?: IntFilter<"RoomPriceAdjustment"> | number
    startDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    endDate?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
    type?: EnumPriceAdjustmentTypeFilter<"RoomPriceAdjustment"> | $Enums.PriceAdjustmentType
    value?: DecimalFilter<"RoomPriceAdjustment"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"RoomPriceAdjustment"> | string | null
    createdAt?: DateTimeFilter<"RoomPriceAdjustment"> | Date | string
  }

  export type BookingUpsertWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
    create: XOR<BookingCreateWithoutRoomInput, BookingUncheckedCreateWithoutRoomInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutRoomInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutRoomInput, BookingUncheckedUpdateWithoutRoomInput>
  }

  export type BookingUpdateManyWithWhereWithoutRoomInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutRoomInput>
  }

  export type RoomCreateWithoutImagesInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutImagesInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutImagesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
  }

  export type RoomUpsertWithoutImagesInput = {
    update: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
    create: XOR<RoomCreateWithoutImagesInput, RoomUncheckedCreateWithoutImagesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutImagesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutImagesInput, RoomUncheckedUpdateWithoutImagesInput>
  }

  export type RoomUpdateWithoutImagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutAvailabilitiesInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutAvailabilitiesInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutAvailabilitiesInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
  }

  export type RoomUpsertWithoutAvailabilitiesInput = {
    update: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
    create: XOR<RoomCreateWithoutAvailabilitiesInput, RoomUncheckedCreateWithoutAvailabilitiesInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutAvailabilitiesInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutAvailabilitiesInput, RoomUncheckedUpdateWithoutAvailabilitiesInput>
  }

  export type RoomUpdateWithoutAvailabilitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutAvailabilitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateWithoutPriceAdjustmentsInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    bookings?: BookingCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutPriceAdjustmentsInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    bookings?: BookingUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutPriceAdjustmentsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutPriceAdjustmentsInput, RoomUncheckedCreateWithoutPriceAdjustmentsInput>
  }

  export type RoomUpsertWithoutPriceAdjustmentsInput = {
    update: XOR<RoomUpdateWithoutPriceAdjustmentsInput, RoomUncheckedUpdateWithoutPriceAdjustmentsInput>
    create: XOR<RoomCreateWithoutPriceAdjustmentsInput, RoomUncheckedCreateWithoutPriceAdjustmentsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutPriceAdjustmentsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutPriceAdjustmentsInput, RoomUncheckedUpdateWithoutPriceAdjustmentsInput>
  }

  export type RoomUpdateWithoutPriceAdjustmentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPriceAdjustmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type UserCreateWithoutBookingsInput = {
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type PropertyCreateWithoutBookingsInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    reviews?: ReviewCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutBookingsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutBookingsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
  }

  export type RoomCreateWithoutBookingsInput = {
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutRoomsInput
    images?: RoomImageCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutBookingsInput = {
    id?: number
    propertyId: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    images?: RoomImageUncheckedCreateNestedManyWithoutRoomInput
    availabilities?: RoomAvailabilityUncheckedCreateNestedManyWithoutRoomInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutBookingsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
  }

  export type PaymentProofCreateWithoutBookingInput = {
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
  }

  export type PaymentProofUncheckedCreateWithoutBookingInput = {
    id?: number
    fileUrl: string
    fileName: string
    mimeType: string
    uploadedAt?: Date | string
    verifiedAt?: Date | string | null
  }

  export type PaymentProofCreateOrConnectWithoutBookingInput = {
    where: PaymentProofWhereUniqueInput
    create: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: number
    propertyId: number
    userId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PropertyUpsertWithoutBookingsInput = {
    update: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
    create: XOR<PropertyCreateWithoutBookingsInput, PropertyUncheckedCreateWithoutBookingsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutBookingsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutBookingsInput, PropertyUncheckedUpdateWithoutBookingsInput>
  }

  export type PropertyUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type RoomUpsertWithoutBookingsInput = {
    update: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
    create: XOR<RoomCreateWithoutBookingsInput, RoomUncheckedCreateWithoutBookingsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutBookingsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutBookingsInput, RoomUncheckedUpdateWithoutBookingsInput>
  }

  export type RoomUpdateWithoutBookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutRoomsNestedInput
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutBookingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type PaymentProofUpsertWithoutBookingInput = {
    update: XOR<PaymentProofUpdateWithoutBookingInput, PaymentProofUncheckedUpdateWithoutBookingInput>
    create: XOR<PaymentProofCreateWithoutBookingInput, PaymentProofUncheckedCreateWithoutBookingInput>
    where?: PaymentProofWhereInput
  }

  export type PaymentProofUpdateToOneWithWhereWithoutBookingInput = {
    where?: PaymentProofWhereInput
    data: XOR<PaymentProofUpdateWithoutBookingInput, PaymentProofUncheckedUpdateWithoutBookingInput>
  }

  export type PaymentProofUpdateWithoutBookingInput = {
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PaymentProofUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileUrl?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpsertWithoutBookingInput = {
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutBookingInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateWithoutBookingInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingCreateWithoutPaymentProofInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutPaymentProofInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    review?: ReviewUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutPaymentProofInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutPaymentProofInput, BookingUncheckedCreateWithoutPaymentProofInput>
  }

  export type BookingUpsertWithoutPaymentProofInput = {
    update: XOR<BookingUpdateWithoutPaymentProofInput, BookingUncheckedUpdateWithoutPaymentProofInput>
    create: XOR<BookingCreateWithoutPaymentProofInput, BookingUncheckedCreateWithoutPaymentProofInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutPaymentProofInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutPaymentProofInput, BookingUncheckedUpdateWithoutPaymentProofInput>
  }

  export type BookingUpdateWithoutPaymentProofInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPaymentProofInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingCreateWithoutReviewInput = {
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBookingsInput
    property: PropertyCreateNestedOneWithoutBookingsInput
    room: RoomCreateNestedOneWithoutBookingsInput
    paymentProof?: PaymentProofCreateNestedOneWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: number
    userId: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    paymentProof?: PaymentProofUncheckedCreateNestedOneWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type PropertyCreateWithoutReviewsInput = {
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenant: TenantProfileCreateNestedOneWithoutPropertiesInput
    category: PropertyCategoryCreateNestedOneWithoutPropertiesInput
    rooms?: RoomCreateNestedManyWithoutPropertyInput
    images?: PropertyImageCreateNestedManyWithoutPropertyInput
    bookings?: BookingCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutReviewsInput = {
    id?: number
    tenantId: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rooms?: RoomUncheckedCreateNestedManyWithoutPropertyInput
    images?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    bookings?: BookingUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutReviewsInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileCreateNestedOneWithoutUserInput
    tokens?: UserTokenCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: number
    email: string
    name: string
    phone?: string | null
    passwordHash?: string | null
    role?: $Enums.UserRole
    provider?: $Enums.AuthProvider
    providerId?: string | null
    isVerified?: boolean
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tenantProfile?: TenantProfileUncheckedCreateNestedOneWithoutUserInput
    tokens?: UserTokenUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentProof?: PaymentProofUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: PaymentProofUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type PropertyUpsertWithoutReviewsInput = {
    update: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
    create: XOR<PropertyCreateWithoutReviewsInput, PropertyUncheckedCreateWithoutReviewsInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutReviewsInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutReviewsInput, PropertyUncheckedUpdateWithoutReviewsInput>
  }

  export type PropertyUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    provider?: EnumAuthProviderFieldUpdateOperationsInput | $Enums.AuthProvider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenantProfile?: TenantProfileUncheckedUpdateOneWithoutUserNestedInput
    tokens?: UserTokenUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTokenCreateManyUserInput = {
    id?: number
    type: $Enums.TokenType
    token: string
    expiresAt: Date | string
    consumedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type BookingCreateManyUserInput = {
    id?: number
    propertyId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: number
    bookingId: number
    propertyId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type UserTokenUpdateWithoutUserInput = {
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumTokenTypeFieldUpdateOperationsInput | $Enums.TokenType
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutUserInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentProof?: PaymentProofUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: PaymentProofUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    property?: PropertyUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyTenantInput = {
    id?: number
    categoryId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutTenantInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PropertyCategoryUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutTenantInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyCategoryInput = {
    id?: number
    tenantId: number
    name: string
    slug: string
    description?: string | null
    addressLine1?: string | null
    city: string
    state?: string | null
    country?: string
    postalCode?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tenant?: TenantProfileUpdateOneRequiredWithoutPropertiesNestedInput
    rooms?: RoomUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rooms?: RoomUncheckedUpdateManyWithoutPropertyNestedInput
    images?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutPropertyNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    tenantId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    addressLine1?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomCreateManyPropertyInput = {
    id?: number
    name: string
    description?: string | null
    capacity: number
    totalUnits?: number
    basePrice: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    url: string
    isPrimary?: boolean
    createdAt?: Date | string
  }

  export type BookingCreateManyPropertyInput = {
    id?: number
    userId: number
    roomId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyPropertyInput = {
    id?: number
    bookingId: number
    userId: number
    comment: string
    rating?: number | null
    tenantReply?: string | null
    repliedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type RoomUpdateWithoutPropertyInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUpdateManyWithoutRoomNestedInput
    bookings?: BookingUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: RoomImageUncheckedUpdateManyWithoutRoomNestedInput
    availabilities?: RoomAvailabilityUncheckedUpdateManyWithoutRoomNestedInput
    priceAdjustments?: RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    totalUnits?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutPropertyInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    room?: RoomUpdateOneRequiredWithoutBookingsNestedInput
    paymentProof?: PaymentProofUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: PaymentProofUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roomId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutPropertyInput = {
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutReviewNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookingId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    tenantReply?: NullableStringFieldUpdateOperationsInput | string | null
    repliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomImageCreateManyRoomInput = {
    id?: number
    url: string
    isPrimary?: boolean
  }

  export type RoomAvailabilityCreateManyRoomInput = {
    id?: number
    date: Date | string
    isAvailable?: boolean
    availableUnits?: number | null
    note?: string | null
    createdAt?: Date | string
  }

  export type RoomPriceAdjustmentCreateManyRoomInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    type: $Enums.PriceAdjustmentType
    value: Decimal | DecimalJsLike | number | string
    note?: string | null
    createdAt?: Date | string
  }

  export type BookingCreateManyRoomInput = {
    id?: number
    userId: number
    propertyId: number
    checkIn: Date | string
    checkOut: Date | string
    guests: number
    status?: $Enums.BookingStatus
    paymentDueAt: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoomImageUpdateWithoutRoomInput = {
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomImageUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomImageUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoomAvailabilityUpdateWithoutRoomInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomAvailabilityUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    availableUnits?: NullableIntFieldUpdateOperationsInput | number | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentUpdateWithoutRoomInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoomPriceAdjustmentUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumPriceAdjustmentTypeFieldUpdateOperationsInput | $Enums.PriceAdjustmentType
    value?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutRoomInput = {
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    property?: PropertyUpdateOneRequiredWithoutBookingsNestedInput
    paymentProof?: PaymentProofUpdateOneWithoutBookingNestedInput
    review?: ReviewUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentProof?: PaymentProofUncheckedUpdateOneWithoutBookingNestedInput
    review?: ReviewUncheckedUpdateOneWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutRoomInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    guests?: IntFieldUpdateOperationsInput | number
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentDueAt?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}