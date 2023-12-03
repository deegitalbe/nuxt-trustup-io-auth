const LocalStorageProviderConstructor = <
  TValue extends string,
  TKey extends string = string,
>(
  key: TKey,
) => {
  const provider = localStorage;

  const get = () => provider.getItem(key) as TValue | null;
  const set = (value: TValue | null) =>
    value ? provider.setItem(key, value) : provider.removeItem(key);

  return {
    get,
    set,
  };
};

export type LocalStorageProvider = ReturnType<
  typeof LocalStorageProviderConstructor
>;
export default LocalStorageProviderConstructor;
