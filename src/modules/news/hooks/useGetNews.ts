"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

import { getNews } from "../api/GetNews"

export default function useGetNews() {
    return useApiQuery({
        queryKey: ["news"],
        queryFn: () => getNews(),
        options: {
            staleTime: 1000 * 60 * 10,
            gcTime: 1000 * 60 * 30,
            refetchOnWindowFocus: false,
            retry: false,
        },
    });
}