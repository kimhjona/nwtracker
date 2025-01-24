import Autocomplete from "@/components/Autocomplete";
import { Navigation } from "@/components/Navigation";
import { Stat } from "@/components/Stat";
import { Button } from "@/components/tw-components/button";
import { Heading } from "@/components/tw-components/heading";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="grow p-6 lg:rounded-lg lg:bg-white lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:bg-zinc-900 dark:lg:ring-white/10">
        <div className="flex w-full flex-wrap items-end justify-between gap-4 border-zinc-950/10 pb-6 dark:border-white/10">
          <Heading>Welcome, kimhjona@gmail.com</Heading>
          <div className="flex gap-4">
            <Button outline>Refund</Button>
          </div>
        </div>
        <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          <Stat title="Total revenue" value="$2.6M" change="+4.5%" />
          <Stat title="Average order value" value="$455" change="-0.5%" />
          <Stat title="Tickets sold" value="5,888" change="+4.5%" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mx-auto">
            <Autocomplete />
            
          </div>
        </div>
      </div>
    </>
  );
}
