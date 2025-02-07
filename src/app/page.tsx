"use client";

import Autocomplete from "@/components/Autocomplete";
import { Navigation } from "@/components/Navigation";
import { Badge } from "@/components/tw-components/badge";
import { Button } from "@/components/tw-components/button";
import { Divider } from "@/components/tw-components/divider";
import { Heading, Subheading } from "@/components/tw-components/heading";
import { Input } from "@/components/tw-components/input";
import { Select } from "@/components/tw-components/select";
import { Text } from "@/components/tw-components/text";

export default function Home() {
  const onChange = async (text: string) => {
    console.log(text);
    try {
      const response = await fetch("http://localhost:3001/api/lookup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
      });

      const data = await response.json();
      console.log({ data });
    } catch (err) {
      console.log({ err });
    }
  };

  return (
    <>
      <Navigation />
      <div className="grow p-6 lg:rounded-lg lg:p-10 lg:ring-1 lg:shadow-xs lg:ring-zinc-950/5 dark:lg:ring-white/10">
        <div className="flex w-full flex-wrap items-end justify-between gap-4 border-zinc-950/10 pb-6 dark:border-white/10">
          <Heading>Welcome, Jon!</Heading>
        </div>
        <div>
          <Divider />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            My Net Worth
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            $2,950,150
          </div>
          <div className="mt-3 text-sm/6 sm:text-xs/6">
            {/* <Badge color={change.startsWith('+') ? 'lime' : 'pink'}>{change}</Badge>{' '} */}
            <Badge color={"lime"}>+4.5%</Badge>{" "}
            <span className="text-zinc-500">from last market close</span>
          </div>
        </div>{" "}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <Divider className="my-10 mt-6" />

          <section className="grid gap-x-8 gap-y-6 sm:grid-cols-5">
            <div className="">
              <Subheading>Add Transaction</Subheading>
              <Text>This will be displayed on your public profile.</Text>
            </div>
            <div>
              <Autocomplete onChange={onChange} />
            </div>
            <div>
              <Select aria-label="Action" name="action" defaultValue="buy">
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
              </Select>
            </div>
            <div>
              <Input
                aria-label="Quantity"
                name="quantity"
                type="number"
                placeholder="Quantity"
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full rounded-md bg-indigo-600 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}