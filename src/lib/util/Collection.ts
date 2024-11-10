export declare type RecordKey = string | number | symbol;
export declare type RecordValue<TRecord> = TRecord extends Record<string | number | symbol, infer TType> ? TType : never;
export declare type PartialRecord<K extends RecordKey, V> = Partial<Record<K, V>>;

type Lit = string | number | boolean | undefined | null | /*void |*/ object;
export const tuple = <T extends Lit[]>(...args: T) => args;