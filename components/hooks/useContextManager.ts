export const useContextManager = (context: any) => {
  if (!context) {
    throw new Error("SomeComponent must be used within a GlobalProvider");
  }
  const { state, setState } = context;

  return { state, setState };
};
