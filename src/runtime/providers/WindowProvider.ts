const WindowProviderConstructor = <TValue, TKey extends string = string>(
  key: TKey,
) => {
  const provider = window as { [TProp in TKey]: TValue } & Window;

  const set = (value: (typeof provider)[TKey]): void => {
    provider[key] = value;
  };
  const get = () => provider[key];

  return {
    get,
    set,
  };
};

export default WindowProviderConstructor;
