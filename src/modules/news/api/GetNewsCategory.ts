import apiClient from "../../../services/apiClient";

import { ENV } from "../../../config/env"

export interface NewsResponse {
    status: string;
    totalResults: number;
    results: NewsItem[];
}

export interface NewsItem {
    article_id: string;
    link: string;
    title: string;
    description: string;
    keywords?: string[];
    creator?: string[];
    language: string;
    category: string[];
    image_url: string;
}

export function getNewsCategory(category: string): Promise<NewsResponse> {
    return apiClient.get(
        `/latest?apikey=${ENV.ACCESS_TOKEN_KEY}&language=ar&category=${category}`
    );
}
