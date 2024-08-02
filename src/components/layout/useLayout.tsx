import { useRouter } from "next/router";

const useLayout = () => {
  const router = useRouter();
  const noLayout = ["signup", "login"];
  return {
    noLayout,
    asPath: router.asPath,
  };
};

export default useLayout;
