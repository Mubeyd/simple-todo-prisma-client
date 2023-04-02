
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    sessions: SessionPayload<ExtArgs>[]
    createdByUser: UserPayload<ExtArgs> | null
    createdUsers: UserPayload<ExtArgs>[]
    updatedByUser: UserPayload<ExtArgs> | null
    updatedUsers: UserPayload<ExtArgs>[]
    createdCategories: CategoryPayload<ExtArgs>[]
    updatedCategories: CategoryPayload<ExtArgs>[]
    createdProducts: ProductPayload<ExtArgs>[]
    updatedProducts: ProductPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode: string
    passwordResetCode: string | null
    verified: boolean
    role: UserRole
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
  }, ExtArgs['result']['user']>
}

/**
 * Model User
 * 
 */
export type User = UserPayload['scalars']

export type SessionPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    user: UserPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    userId: string
    valid: boolean
    createdAt: Date
    updatedAt: Date
  }, ExtArgs['result']['session']>
}

/**
 * Model Session
 * 
 */
export type Session = SessionPayload['scalars']

export type CategoryPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    parent: CategoryPayload<ExtArgs> | null
    children: CategoryPayload<ExtArgs>[]
    products: ProductPayload<ExtArgs>[]
    createdByUser: UserPayload<ExtArgs> | null
    updatedByUser: UserPayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    name: string
    description: string
    imagePath: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
  }, ExtArgs['result']['category']>
}

/**
 * Model Category
 * 
 */
export type Category = CategoryPayload['scalars']

export type ProductPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    category: CategoryPayload<ExtArgs>
    createdByUser: UserPayload<ExtArgs> | null
    updatedByUser: UserPayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    name: string
    description: string
    imagePath: string
    price: Prisma.Decimal
    isActive: boolean
    categoryId: string
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
  }, ExtArgs['result']['product']>
}

/**
 * Model Product
 * 
 */
export type Product = ProductPayload['scalars']


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const UserRole: {
  SUPERUSER: 'SUPERUSER',
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  /**
   * Gives access to the client metrics in json or prometheus format.
   * 
   * @example
   * ```
   * const metrics = await prisma.$metrics.json()
   * // or
   * const metrics = await prisma.$metrics.prometheus()
   * ```
   */
  readonly $metrics: runtime.MetricsClient
  $extends: { extArgs: ExtArgs } & (<
    R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
    R_Session_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.SessionSelectScalar, ExtArgs['result']['session']>>,
    R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
    R_Product_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProductSelectScalar, ExtArgs['result']['product']>>,
    R extends runtime.Types.Extensions.UserArgs['result'] = {},
    M extends runtime.Types.Extensions.UserArgs['model'] = {},
    Q extends runtime.Types.Extensions.UserArgs['query'] = {},
    C extends runtime.Types.Extensions.UserArgs['client'] = {},
    Args extends runtime.Types.Extensions.Args = runtime.Types.Extensions.InternalArgs<R, M, Q, C>, 
  >(extension: ((client: this) => { $extends: { extArgs: Args } }) | Prisma.ExtensionArgs<
    ExtArgs,
    R_User_Needs,
    R_Session_Needs,
    R_Category_Needs,
    R_Product_Needs,
    R,
    M,
    Q,
    C
  >) => runtime.Types.Extensions.GetClient<PrismaClient<T, U, GlobalReject, {
    result: ExtArgs['result'] & Record<string, Args['result']['$allModels'] & {}> & Args['result']
    model: ExtArgs['model'] & Record<string, Args['model']['$allModels'] & {}> & Args['model']
    client: ExtArgs['client'] & Args['client'],
    query: {}
  }>, ExtArgs['client'] & Args['client']>);

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): runtime.Types.Extensions.GetModel<Prisma.UserDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['user']>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): runtime.Types.Extensions.GetModel<Prisma.SessionDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['session']>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): runtime.Types.Extensions.GetModel<Prisma.CategoryDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['category']>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): runtime.Types.Extensions.GetModel<Prisma.ProductDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['product']>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
  export type Extension = runtime.Types.Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Args<T, F>
  export type Payload<T, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Payload<T, F>
  export type Result<T, A, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Result<T, A, F>
  export type Exact<T, W> = runtime.Types.Public.Exact<T, W>


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Category: 'Category',
    Product: 'Product'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export function defineExtension<
      R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
      R_Session_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.SessionSelectScalar, ExtArgs['result']['session']>>,
      R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
      R_Product_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProductSelectScalar, ExtArgs['result']['product']>>,
      R extends runtime.Types.Extensions.UserArgs['result'] = {},
      M extends runtime.Types.Extensions.UserArgs['model'] = {},
      Q extends runtime.Types.Extensions.UserArgs['query'] = {},
      C extends runtime.Types.Extensions.UserArgs['client'] = {},
      Args extends runtime.Types.Extensions.Args = runtime.Types.Extensions.InternalArgs<R, M, Q, C>, 
      ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs,
    >(extension: ((client: Prisma.DefaultPrismaClient) => { $extends: { extArgs: Args } }) | Prisma.ExtensionArgs<
      ExtArgs,
      R_User_Needs,
      R_Session_Needs,
      R_Category_Needs,
      R_Product_Needs,
      R,
      M,
      Q,
      C
    >) : (client: any) => PrismaClient<any, any, any, Args>;
  export type TypeMap<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
      meta: {
        modelProps: 'user' | 'session' | 'category' | 'product'
      },
      model: {
      User: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        count: {
          args: Prisma.UserCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
      }
      Session: {
        findUnique: {
          args: Prisma.SessionFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.SessionFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.SessionFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        create: {
          args: Prisma.SessionCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.SessionCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        delete: {
          args: Prisma.SessionDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        update: {
          args: Prisma.SessionUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.SessionDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.SessionUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.SessionUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.SessionAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.SessionGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
        count: {
          args: Prisma.SessionCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Session>
          payload: SessionPayload<ExtArgs>
        }
      }
      Category: {
        findUnique: {
          args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.CategoryFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.CategoryFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        create: {
          args: Prisma.CategoryCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.CategoryCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        delete: {
          args: Prisma.CategoryDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        update: {
          args: Prisma.CategoryUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.CategoryUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.CategoryAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.CategoryGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        count: {
          args: Prisma.CategoryCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
      }
      Product: {
        findUnique: {
          args: Prisma.ProductFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.ProductFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.ProductFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        create: {
          args: Prisma.ProductCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.ProductCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        delete: {
          args: Prisma.ProductDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        update: {
          args: Prisma.ProductUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.ProductDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.ProductUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.ProductUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ProductAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ProductGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
        count: {
          args: Prisma.ProductCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Product>
          payload: ProductPayload<ExtArgs>
        }
      }
    }
  } & {
    other: {
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $executeRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
    }
  }
  export type ExtensionArgs<
      ExtArgs extends runtime.Types.Extensions.Args,
      R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
      R_Session_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.SessionSelectScalar, ExtArgs['result']['session']>>,
      R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
      R_Product_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProductSelectScalar, ExtArgs['result']['product']>>,
      R extends runtime.Types.Extensions.UserArgs['result'] = {},
      M extends runtime.Types.Extensions.UserArgs['model'] = {},
      Q extends runtime.Types.Extensions.UserArgs['query'] = {},
      C extends runtime.Types.Extensions.UserArgs['client'] = {}
  > = {
    name?: string,
    result?: R & {
        $allModels?: Record<string, {
          compute: (data: unknown) => unknown
        }>
        user?: {
          [K in keyof R_User_Needs]: {
            needs: R_User_Needs[K]
            compute: (data: runtime.Types.GetResult<UserPayload<ExtArgs>, { select: R_User_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        session?: {
          [K in keyof R_Session_Needs]: {
            needs: R_Session_Needs[K]
            compute: (data: runtime.Types.GetResult<SessionPayload<ExtArgs>, { select: R_Session_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        category?: {
          [K in keyof R_Category_Needs]: {
            needs: R_Category_Needs[K]
            compute: (data: runtime.Types.GetResult<CategoryPayload<ExtArgs>, { select: R_Category_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        product?: {
          [K in keyof R_Product_Needs]: {
            needs: R_Product_Needs[K]
            compute: (data: runtime.Types.GetResult<ProductPayload<ExtArgs>, { select: R_Product_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
      }
    model?: M & {
        $allModels?: {}
        user?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.UserDelegate<false, ExtArgs>, ExtArgs['model']['user']> } }
        session?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.SessionDelegate<false, ExtArgs>, ExtArgs['model']['session']> } }
        category?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.CategoryDelegate<false, ExtArgs>, ExtArgs['model']['category']> } }
        product?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.ProductDelegate<false, ExtArgs>, ExtArgs['model']['product']> } }
      }
    query?: {
        $allModels?: {
          [K in keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product']]?: (args: { model: 'User' | 'Session' | 'Category' | 'Product', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'User' | 'Session' | 'Category' | 'Product', operation: keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User' | 'Session' | 'Category' | 'Product'][keyof Prisma.TypeMap['model']['User' | 'Session' | 'Category' | 'Product']]['result']>
        }
      } & {
        user?: {
          [K in keyof Prisma.TypeMap['model']['User']]?: (args: { model: 'User', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'User', operation: keyof Prisma.TypeMap['model']['User'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['result']>
        }
        session?: {
          [K in keyof Prisma.TypeMap['model']['Session']]?: (args: { model: 'Session', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Session'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Session'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Session'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Session'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Session', operation: keyof Prisma.TypeMap['model']['Session'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Session'][keyof Prisma.TypeMap['model']['Session']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Session'][keyof Prisma.TypeMap['model']['Session']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Session'][keyof Prisma.TypeMap['model']['Session']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Session'][keyof Prisma.TypeMap['model']['Session']]['result']>
        }
        category?: {
          [K in keyof Prisma.TypeMap['model']['Category']]?: (args: { model: 'Category', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Category', operation: keyof Prisma.TypeMap['model']['Category'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['result']>
        }
        product?: {
          [K in keyof Prisma.TypeMap['model']['Product']]?: (args: { model: 'Product', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Product'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Product'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Product'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Product'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Product', operation: keyof Prisma.TypeMap['model']['Product'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Product'][keyof Prisma.TypeMap['model']['Product']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Product'][keyof Prisma.TypeMap['model']['Product']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Product'][keyof Prisma.TypeMap['model']['Product']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Product'][keyof Prisma.TypeMap['model']['Product']]['result']>
        }
      } & {
        [K in keyof Prisma.TypeMap['other']]?: (args: { operation: K, args: Prisma.TypeMap<ExtArgs>['other'][K]['args'], query: (args: Prisma.TypeMap<ExtArgs>['other'][K]['args']) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['other'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['other'][K]['result']>
      }
    client?: C & { [K: symbol]: { ctx: runtime.Types.Extensions.GetClient<PrismaClient<never, never, false, ExtArgs>, ExtArgs['client']> } }
  }
  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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
    sessions: number
    createdUsers: number
    updatedUsers: number
    createdCategories: number
    updatedCategories: number
    createdProducts: number
    updatedProducts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean
    createdUsers?: boolean
    updatedUsers?: boolean
    createdCategories?: boolean
    updatedCategories?: boolean
    createdProducts?: boolean
    updatedProducts?: boolean
  }





  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Count Type CategoryCountOutputType
   */


  export type CategoryCountOutputType = {
    children: number
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean
    products?: boolean
  }





  // Custom InputTypes

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    verificationCode: string | null
    passwordResetCode: string | null
    verified: boolean | null
    role: UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    password: string | null
    verificationCode: string | null
    passwordResetCode: string | null
    verified: boolean | null
    role: UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    firstName: number
    lastName: number
    password: number
    verificationCode: number
    passwordResetCode: number
    verified: number
    role: number
    createdAt: number
    updatedAt: number
    createdByUserId: number
    updatedByUserId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    verificationCode?: true
    passwordResetCode?: true
    verified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    verificationCode?: true
    passwordResetCode?: true
    verified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    firstName?: true
    lastName?: true
    password?: true
    verificationCode?: true
    passwordResetCode?: true
    verified?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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




  export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode: string
    passwordResetCode: string | null
    verified: boolean
    role: UserRole
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    verificationCode?: boolean
    passwordResetCode?: boolean
    verified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    createdCategories?: boolean | User$createdCategoriesArgs<ExtArgs>
    updatedCategories?: boolean | User$updatedCategoriesArgs<ExtArgs>
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    password?: boolean
    verificationCode?: boolean
    passwordResetCode?: boolean
    verified?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
  }

  export type UserInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    createdCategories?: boolean | User$createdCategoriesArgs<ExtArgs>
    updatedCategories?: boolean | User$updatedCategoriesArgs<ExtArgs>
    createdProducts?: boolean | User$createdProductsArgs<ExtArgs>
    updatedProducts?: boolean | User$updatedProductsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }

  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = runtime.Types.GetFindResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends _Record<'select', any>
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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findMany'>| Null>;

    createdByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>| Null>;

    updatedByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    updatedUsers<T extends User$updatedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>| Null>;

    createdCategories<T extends User$createdCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    updatedCategories<T extends User$updatedCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    createdProducts<T extends User$createdProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany'>| Null>;

    updatedProducts<T extends User$updatedProductsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedProductsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany'>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User.updatedUsers
   */
  export type User$updatedUsersArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User.createdCategories
   */
  export type User$createdCategoriesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * User.updatedCategories
   */
  export type User$updatedCategoriesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * User.createdProducts
   */
  export type User$createdProductsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * User.updatedProducts
   */
  export type User$updatedProductsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    valid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    valid: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    valid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    valid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    valid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    valid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    userId: string
    valid: boolean
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    valid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    valid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | UserArgs<ExtArgs>
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> = runtime.Types.GetFindResult<SessionPayload, S>

  type SessionCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<runtime.Types.GetResult<SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends SessionFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends SessionFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imagePath: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imagePath: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imagePath: number
    parentId: number
    createdAt: number
    updatedAt: number
    createdByUserId: number
    updatedByUserId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string
    imagePath: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    parent?: boolean | CategoryArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
  }

  export type CategoryInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    parent?: boolean | CategoryArgs<ExtArgs>
    children?: boolean | Category$childrenArgs<ExtArgs>
    products?: boolean | Category$productsArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeArgs<ExtArgs>
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = runtime.Types.GetFindResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    parent<T extends CategoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryArgs<ExtArgs>>): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>| Null>;

    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany'>| Null>;

    createdByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    updatedByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CategoryInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */


  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductSumAggregateOutputType = {
    price: Decimal | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imagePath: string | null
    price: Decimal | null
    isActive: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    imagePath: string | null
    price: Decimal | null
    isActive: boolean | null
    categoryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdByUserId: string | null
    updatedByUserId: string | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    imagePath: number
    price: number
    isActive: number
    categoryId: number
    createdAt: number
    updatedAt: number
    createdByUserId: number
    updatedByUserId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    price?: true
    isActive?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    price?: true
    isActive?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    imagePath?: true
    price?: true
    isActive?: true
    categoryId?: true
    createdAt?: true
    updatedAt?: true
    createdByUserId?: true
    updatedByUserId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: Enumerable<ProductOrderByWithAggregationInput>
    by: ProductScalarFieldEnum[]
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }


  export type ProductGroupByOutputType = {
    id: string
    name: string
    description: string
    imagePath: string
    price: Decimal
    isActive: boolean
    categoryId: string
    createdAt: Date
    updatedAt: Date
    createdByUserId: string | null
    updatedByUserId: string | null
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
    price?: boolean
    isActive?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
    category?: boolean | CategoryArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    imagePath?: boolean
    price?: boolean
    isActive?: boolean
    categoryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdByUserId?: boolean
    updatedByUserId?: boolean
  }

  export type ProductInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | CategoryArgs<ExtArgs>
    createdByUser?: boolean | UserArgs<ExtArgs>
    updatedByUser?: boolean | UserArgs<ExtArgs>
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductArgs> = runtime.Types.GetFindResult<ProductPayload, S>

  type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Product'> extends True ? Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Product'> extends True ? Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<runtime.Types.GetResult<ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    category<T extends CategoryArgs<ExtArgs> = {}>(args?: Subset<T, CategoryArgs<ExtArgs>>): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    createdByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    updatedByUser<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Product base type for findUnique actions
   */
  export type ProductFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUnique
   */
  export interface ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends ProductFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product base type for findFirst actions
   */
  export type ProductFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }

  /**
   * Product findFirst
   */
  export interface ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends ProductFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: Enumerable<ProductOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: Enumerable<ProductScalarFieldEnum>
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Enumerable<ProductCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product without action
   */
  export type ProductArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imagePath: 'imagePath',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdByUserId: 'createdByUserId',
    updatedByUserId: 'updatedByUserId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    imagePath: 'imagePath',
    price: 'price',
    isActive: 'isActive',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdByUserId: 'createdByUserId',
    updatedByUserId: 'updatedByUserId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    valid: 'valid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
    firstName: 'firstName',
    lastName: 'lastName',
    password: 'password',
    verificationCode: 'verificationCode',
    passwordResetCode: 'passwordResetCode',
    verified: 'verified',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdByUserId: 'createdByUserId',
    updatedByUserId: 'updatedByUserId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    password?: StringFilter | string
    verificationCode?: StringFilter | string
    passwordResetCode?: StringNullableFilter | string | null
    verified?: BoolFilter | boolean
    role?: EnumUserRoleFilter | UserRole
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
    sessions?: SessionListRelationFilter
    createdByUser?: XOR<UserRelationFilter, UserWhereInput> | null
    createdUsers?: UserListRelationFilter
    updatedByUser?: XOR<UserRelationFilter, UserWhereInput> | null
    updatedUsers?: UserListRelationFilter
    createdCategories?: CategoryListRelationFilter
    updatedCategories?: CategoryListRelationFilter
    createdProducts?: ProductListRelationFilter
    updatedProducts?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    passwordResetCode?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    createdByUser?: UserOrderByWithRelationInput
    createdUsers?: UserOrderByRelationAggregateInput
    updatedByUser?: UserOrderByWithRelationInput
    updatedUsers?: UserOrderByRelationAggregateInput
    createdCategories?: CategoryOrderByRelationAggregateInput
    updatedCategories?: CategoryOrderByRelationAggregateInput
    createdProducts?: ProductOrderByRelationAggregateInput
    updatedProducts?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    passwordResetCode?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    verificationCode?: StringWithAggregatesFilter | string
    passwordResetCode?: StringNullableWithAggregatesFilter | string | null
    verified?: BoolWithAggregatesFilter | boolean
    role?: EnumUserRoleWithAggregatesFilter | UserRole
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter | string | null
    updatedByUserId?: StringNullableWithAggregatesFilter | string | null
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    valid?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = {
    id?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userId?: StringWithAggregatesFilter | string
    valid?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    imagePath?: StringFilter | string
    parentId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
    parent?: XOR<CategoryRelationFilter, CategoryWhereInput> | null
    children?: CategoryListRelationFilter
    products?: ProductListRelationFilter
    createdByUser?: XOR<UserRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    parent?: CategoryOrderByWithRelationInput
    children?: CategoryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = {
    id?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    imagePath?: StringWithAggregatesFilter | string
    parentId?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter | string | null
    updatedByUserId?: StringNullableWithAggregatesFilter | string | null
  }

  export type ProductWhereInput = {
    AND?: Enumerable<ProductWhereInput>
    OR?: Enumerable<ProductWhereInput>
    NOT?: Enumerable<ProductWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    imagePath?: StringFilter | string
    price?: DecimalFilter | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter | boolean
    categoryId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    createdByUser?: XOR<UserRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
  }

  export type ProductWhereUniqueInput = {
    id?: string
  }

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    imagePath?: StringWithAggregatesFilter | string
    price?: DecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter | boolean
    categoryId?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdByUserId?: StringNullableWithAggregatesFilter | string | null
    updatedByUserId?: StringNullableWithAggregatesFilter | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedCategoriesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedCategoriesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type EnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    passwordResetCode?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    passwordResetCode?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    password?: SortOrder
    verificationCode?: SortOrder
    passwordResetCode?: SortOrder
    verified?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type EnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    valid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type DecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    imagePath?: SortOrder
    price?: SortOrder
    isActive?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdByUserId?: SortOrder
    updatedByUserId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByUserInput>, Enumerable<UserUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByUserInput>
    createMany?: UserCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutUpdatedUsersInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<UserCreateWithoutUpdatedByUserInput>, Enumerable<UserUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: UserCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCreatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCreatedByUserInput>
    createMany?: CategoryCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUpdatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: CategoryCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCreatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCreatedByUserInput>
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<ProductCreateWithoutUpdatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: Enumerable<SessionWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByUserInput>, Enumerable<UserUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByUserInput>
    createMany?: UserCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<UserCreateWithoutUpdatedByUserInput>, Enumerable<UserUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: UserCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCreatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCreatedByUserInput>
    createMany?: CategoryCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUpdatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: CategoryCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCreatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCreatedByUserInput>
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<Enumerable<ProductCreateWithoutUpdatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutUpdatedByUserInput>
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByUserInput>, Enumerable<UserUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: UserCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUpdateOneWithoutUpdatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    upsert?: UserUpsertWithoutUpdatedUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
  }

  export type UserUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUpdatedByUserInput>, Enumerable<UserUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: UserCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCreatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: CategoryCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUpdatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: CategoryCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCreatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutUpdatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SessionCreateWithoutUserInput>, Enumerable<SessionUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SessionCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SessionUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SessionCreateManyUserInputEnvelope
    set?: Enumerable<SessionWhereUniqueInput>
    disconnect?: Enumerable<SessionWhereUniqueInput>
    delete?: Enumerable<SessionWhereUniqueInput>
    connect?: Enumerable<SessionWhereUniqueInput>
    update?: Enumerable<SessionUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SessionUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SessionScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutCreatedByUserInput>, Enumerable<UserUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: UserCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<UserCreateWithoutUpdatedByUserInput>, Enumerable<UserUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: UserCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    connect?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutCreatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: CategoryCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutUpdatedByUserInput>, Enumerable<CategoryUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: CategoryCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCreatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutCreatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCreatedByUserInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCreatedByUserInput>
    createMany?: ProductCreateManyCreatedByUserInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCreatedByUserInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCreatedByUserInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutUpdatedByUserInput>, Enumerable<ProductUncheckedCreateWithoutUpdatedByUserInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutUpdatedByUserInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput>
    createMany?: ProductCreateManyUpdatedByUserInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutUpdatedByUserInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutCreatedCategoriesInput = {
    create?: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedCategoriesInput = {
    create?: XOR<UserCreateWithoutUpdatedCategoriesInput, UserUncheckedCreateWithoutUpdatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: Enumerable<CategoryWhereUniqueInput>
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: Enumerable<ProductWhereUniqueInput>
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type UserUpdateOneWithoutCreatedCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedCategoriesInput
    upsert?: UserUpsertWithoutCreatedCategoriesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCreatedCategoriesInput, UserUncheckedUpdateWithoutCreatedCategoriesInput>
  }

  export type UserUpdateOneWithoutUpdatedCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedCategoriesInput, UserUncheckedCreateWithoutUpdatedCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedCategoriesInput
    upsert?: UserUpsertWithoutUpdatedCategoriesInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUpdatedCategoriesInput, UserUncheckedUpdateWithoutUpdatedCategoriesInput>
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<CategoryCreateWithoutParentInput>, Enumerable<CategoryUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<CategoryCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<CategoryUpsertWithWhereUniqueWithoutParentInput>
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: Enumerable<CategoryWhereUniqueInput>
    disconnect?: Enumerable<CategoryWhereUniqueInput>
    delete?: Enumerable<CategoryWhereUniqueInput>
    connect?: Enumerable<CategoryWhereUniqueInput>
    update?: Enumerable<CategoryUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<CategoryUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<CategoryScalarWhereInput>
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<Enumerable<ProductCreateWithoutCategoryInput>, Enumerable<ProductUncheckedCreateWithoutCategoryInput>>
    connectOrCreate?: Enumerable<ProductCreateOrConnectWithoutCategoryInput>
    upsert?: Enumerable<ProductUpsertWithWhereUniqueWithoutCategoryInput>
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: Enumerable<ProductWhereUniqueInput>
    disconnect?: Enumerable<ProductWhereUniqueInput>
    delete?: Enumerable<ProductWhereUniqueInput>
    connect?: Enumerable<ProductWhereUniqueInput>
    update?: Enumerable<ProductUpdateWithWhereUniqueWithoutCategoryInput>
    updateMany?: Enumerable<ProductUpdateManyWithWhereWithoutCategoryInput>
    deleteMany?: Enumerable<ProductScalarWhereInput>
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedProductsInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedProductsInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    connect?: UserWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateOneWithoutCreatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedProductsInput
    upsert?: UserUpsertWithoutCreatedProductsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
  }

  export type UserUpdateOneWithoutUpdatedProductsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedProductsInput
    upsert?: UserUpsertWithoutUpdatedProductsInput
    disconnect?: boolean
    delete?: boolean
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumUserRoleFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleFilter | UserRole
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumUserRoleWithAggregatesFilter = {
    equals?: UserRole
    in?: Enumerable<UserRole>
    notIn?: Enumerable<UserRole>
    not?: NestedEnumUserRoleWithAggregatesFilter | UserRole
    _count?: NestedIntFilter
    _min?: NestedEnumUserRoleFilter
    _max?: NestedEnumUserRoleFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDecimalFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalFilter | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string>
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalWithAggregatesFilter | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter
    _avg?: NestedDecimalFilter
    _sum?: NestedDecimalFilter
    _min?: NestedDecimalFilter
    _max?: NestedDecimalFilter
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: Enumerable<SessionCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutCreatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByUserInput, UserUncheckedCreateWithoutCreatedByUserInput>
  }

  export type UserCreateManyCreatedByUserInputEnvelope = {
    data: Enumerable<UserCreateManyCreatedByUserInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUpdatedUsersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedUsersInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
  }

  export type UserCreateWithoutUpdatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedByUserInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedByUserInput, UserUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type UserCreateManyUpdatedByUserInputEnvelope = {
    data: Enumerable<UserCreateManyUpdatedByUserInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCreatedByUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCreatedByUserInput, CategoryUncheckedCreateWithoutCreatedByUserInput>
  }

  export type CategoryCreateManyCreatedByUserInputEnvelope = {
    data: Enumerable<CategoryCreateManyCreatedByUserInput>
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUpdatedByUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUpdatedByUserInput, CategoryUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type CategoryCreateManyUpdatedByUserInputEnvelope = {
    data: Enumerable<CategoryCreateManyUpdatedByUserInput>
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
  }

  export type ProductUncheckedCreateWithoutCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
  }

  export type ProductCreateOrConnectWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductCreateManyCreatedByUserInputEnvelope = {
    data: Enumerable<ProductCreateManyCreatedByUserInput>
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutProductsInput
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
  }

  export type ProductUncheckedCreateWithoutUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type ProductCreateOrConnectWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductCreateManyUpdatedByUserInputEnvelope = {
    data: Enumerable<ProductCreateManyUpdatedByUserInput>
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutSessionsInput>
  }

  export type SessionScalarWhereInput = {
    AND?: Enumerable<SessionScalarWhereInput>
    OR?: Enumerable<SessionScalarWhereInput>
    NOT?: Enumerable<SessionScalarWhereInput>
    id?: StringFilter | string
    userId?: StringFilter | string
    valid?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByUserInput, UserUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<UserCreateWithoutCreatedByUserInput, UserUncheckedCreateWithoutCreatedByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByUserInput, UserUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: StringFilter | string
    email?: StringFilter | string
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    password?: StringFilter | string
    verificationCode?: StringFilter | string
    passwordResetCode?: StringNullableFilter | string | null
    verified?: BoolFilter | boolean
    role?: EnumUserRoleFilter | UserRole
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
  }

  export type UserUpsertWithoutUpdatedUsersInput = {
    update: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
  }

  export type UserUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUpdatedByUserInput, UserUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<UserCreateWithoutUpdatedByUserInput, UserUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUpdatedByUserInput, UserUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type UserUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUpdatedUsersInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutCreatedByUserInput, CategoryUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<CategoryCreateWithoutCreatedByUserInput, CategoryUncheckedCreateWithoutCreatedByUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutCreatedByUserInput, CategoryUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutCreatedCategoriesInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: Enumerable<CategoryScalarWhereInput>
    OR?: Enumerable<CategoryScalarWhereInput>
    NOT?: Enumerable<CategoryScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    imagePath?: StringFilter | string
    parentId?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
  }

  export type CategoryUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUpdatedByUserInput, CategoryUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<CategoryCreateWithoutUpdatedByUserInput, CategoryUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUpdatedByUserInput, CategoryUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUpdatedCategoriesInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCreatedByUserInput, ProductUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<ProductCreateWithoutCreatedByUserInput, ProductUncheckedCreateWithoutCreatedByUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCreatedByUserInput, ProductUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCreatedProductsInput>
  }

  export type ProductScalarWhereInput = {
    AND?: Enumerable<ProductScalarWhereInput>
    OR?: Enumerable<ProductScalarWhereInput>
    NOT?: Enumerable<ProductScalarWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    description?: StringFilter | string
    imagePath?: StringFilter | string
    price?: DecimalFilter | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter | boolean
    categoryId?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    createdByUserId?: StringNullableFilter | string | null
    updatedByUserId?: StringNullableFilter | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUpdatedByUserInput, ProductUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<ProductCreateWithoutUpdatedByUserInput, ProductUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUpdatedByUserInput, ProductUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUpdatedProductsInput>
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedCategoriesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: CategoryCreateNestedManyWithoutParentInput
    products?: ProductCreateNestedManyWithoutCategoryInput
    createdByUser?: UserCreateNestedOneWithoutCreatedCategoriesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: Enumerable<CategoryCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUser?: UserCreateNestedOneWithoutCreatedProductsInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedProductsInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: Enumerable<ProductCreateManyCategoryInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedCategoriesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedCategoriesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
  }

  export type UserCreateWithoutUpdatedCategoriesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedCategoriesInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedCategoriesInput, UserUncheckedCreateWithoutUpdatedCategoriesInput>
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedCategoriesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutChildrenInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutProductsInput>
  }

  export type UserUpsertWithoutCreatedCategoriesInput = {
    update: XOR<UserUpdateWithoutCreatedCategoriesInput, UserUncheckedUpdateWithoutCreatedCategoriesInput>
    create: XOR<UserCreateWithoutCreatedCategoriesInput, UserUncheckedCreateWithoutCreatedCategoriesInput>
  }

  export type UserUpdateWithoutCreatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedCategoriesInput = {
    update: XOR<UserUpdateWithoutUpdatedCategoriesInput, UserUncheckedUpdateWithoutUpdatedCategoriesInput>
    create: XOR<UserCreateWithoutUpdatedCategoriesInput, UserUncheckedCreateWithoutUpdatedCategoriesInput>
  }

  export type UserUpdateWithoutUpdatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: CategoryCreateNestedOneWithoutChildrenInput
    children?: CategoryCreateNestedManyWithoutParentInput
    createdByUser?: UserCreateNestedOneWithoutCreatedCategoriesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type UserCreateWithoutCreatedProductsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    updatedProducts?: ProductCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedProductsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    updatedProducts?: ProductUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
  }

  export type UserCreateWithoutUpdatedProductsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    createdByUser?: UserCreateNestedOneWithoutCreatedUsersInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByUserInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedUsersInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedProductsInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdCategories?: CategoryUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedCategories?: CategoryUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdProducts?: ProductUncheckedCreateNestedManyWithoutCreatedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedCategoriesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
  }

  export type UserUpsertWithoutCreatedProductsInput = {
    update: XOR<UserUpdateWithoutCreatedProductsInput, UserUncheckedUpdateWithoutCreatedProductsInput>
    create: XOR<UserCreateWithoutCreatedProductsInput, UserUncheckedCreateWithoutCreatedProductsInput>
  }

  export type UserUpdateWithoutCreatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedProductsInput = {
    update: XOR<UserUpdateWithoutUpdatedProductsInput, UserUncheckedUpdateWithoutUpdatedProductsInput>
    create: XOR<UserCreateWithoutUpdatedProductsInput, UserUncheckedCreateWithoutUpdatedProductsInput>
  }

  export type UserUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    valid?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyCreatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
  }

  export type UserCreateManyUpdatedByUserInput = {
    id?: string
    email: string
    firstName: string
    lastName: string
    password: string
    verificationCode?: string
    passwordResetCode?: string | null
    verified?: boolean
    role?: UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type CategoryCreateManyCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
  }

  export type CategoryCreateManyUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type ProductCreateManyCreatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    updatedByUserId?: string | null
  }

  export type ProductCreateManyUpdatedByUserInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    valid?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedUsersNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedUsersNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdCategories?: CategoryUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedCategories?: CategoryUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdProducts?: ProductUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedProducts?: ProductUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    verificationCode?: StringFieldUpdateOperationsInput | string
    passwordResetCode?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUserRoleFieldUpdateOperationsInput | UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutCreatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUpdatedCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCreatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyWithoutCreatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyWithoutUpdatedProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    imagePath: string
    price: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdByUserId?: string | null
    updatedByUserId?: string | null
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    products?: ProductUpdateManyWithoutCategoryNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedCategoriesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUser?: UserUpdateOneWithoutCreatedProductsNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    imagePath?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    updatedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
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