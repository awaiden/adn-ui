type Provider = ({ children }: React.PropsWithChildren) => React.ReactNode;

export function composeProviders(...providers: Provider[]): Provider {
  return ({ children }: React.PropsWithChildren) =>
    providers.reduceRight(
      (acc, Provider) => <Provider key={Provider.name}>{acc}</Provider>,
      children,
    );
}
