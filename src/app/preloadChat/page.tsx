import NoChannelSelectedWrapper from "./NoChannelSelectedWrapper";

export default async function NoChannelSelectedPage() {
  // @ts-expect-error async Server Component
  return <NoChannelSelectedWrapper />;
}
