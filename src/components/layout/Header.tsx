"use client";

import { useTheme } from "next-themes";

import Switch from "@/components/ui/custom/Switch";

export default function Header() {
  const { setTheme } = useTheme();

  function changeTheme(checked: boolean) {
    setTheme(checked ? "dark" : "light");
  }

  return (
    <div className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Switch id="theme-change" onCheckedChange={changeTheme}>
        Theme Change
      </Switch>
    </div>
  );
}
