"use client";
import { useApiQuery } from "@/shared/hooks/useApiQuery";

import { getNewsCategory } from "../api/GetNewsCategory"

export default function useGetNewsCategory(category: string) {
    return useApiQuery({
        queryKey: ["news", category],
        queryFn: () => getNewsCategory(category),
        options: {
            staleTime: 1000 * 60 * 10, 
            gcTime: 1000 * 60 * 30,
            refetchOnWindowFocus: false,
            retry: false,
        },
    });
}