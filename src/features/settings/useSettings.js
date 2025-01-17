import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSetting";

export function useSettings() {
  const {
    isLoading,
    data: settings,
    error,
  } = useQuery({ queryKey: ["settings"], queryFn: getSettings });

  return { isLoading, error, settings };
}
