export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
export type OptionalExcept<T, K extends keyof T> = Pick<T, K> & Omit<Partial<T>, K>;
