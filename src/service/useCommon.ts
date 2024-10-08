import useSWR from "swr";

let _sidebar: boolean = true;

interface UseCommonProps {
  isOpenSidebar?: boolean;
  setOpenSidebar: (sidebar: boolean) => void;
}

export default function useCommon(): UseCommonProps {
  const { data: isOpenSidebar, mutate: mutateOpenSidebar } = useSWR<boolean>(
    "sidebar",
    () => _sidebar
  );

  function setOpenSidebar(sidebar: boolean) {
    _sidebar = sidebar;
    return mutateOpenSidebar();
  }

  return {
    isOpenSidebar,
    setOpenSidebar,
  };
}
