import { Keyv, KeyvStoreAdapter } from 'keyv';

/**
 * Interface defining Cache Manager configuration options.
 *
 * @publicApi
 */
export interface CacheManagerOptions {
  /**
   * Cache storage manager.  Default is `'memory'` (in-memory store).  See
   * [Different stores](https://docs.nestjs.com/techniques/caching#different-stores)
   * for more info.
   */
  stores?: Keyv | KeyvStoreAdapter | (Keyv | KeyvStoreAdapter)[];
  /**
   * Cache storage namespace, default `keyv`
   * This is a global configuration, that will cover all `KeyvStoreAdapter`
   */
  namespace?: string;
  /**
   * Default time to live in milliseconds.
   * The time to live in milliseconds. This is the maximum amount of time that an item can be in the cache before it is removed.
   */
  ttl?: number;
  /**
   * optional, if refreshThreshold is set and after retrieving a value from cache the TTL will be checked.
   * If the remaining TTL is less than refreshThreshold, the system will update the value asynchronously
   */
  refreshThreshold?: number;
  /**
   * Default false
   * If set to true, the system will not block when multiple stores are used.
   * how it affects tye type of functions visit [doc](https://www.npmjs.com/package/cache-manager#options)
   */
  nonBlocking?: boolean;
}
