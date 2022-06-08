import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const options = {
// 	method: 'GET',
// 	url: 'https://bing-news-search1.p.rapidapi.com/news',
// 	params: { safeSearch: 'Off', textFormat: 'Raw' },
// 	headers: {
// 		'X-BingApis-SDK': 'true',
// 		'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
// 		'X-RapidAPI-Key': '815a4792dcmsh49ab1c4aedcb73cp19a0e4jsn0c94010a7f56',
// 	},
// };
const cryptoNewsHeader = {
	'X-BingApis-SDK': 'true',
	'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
	'X-RapidAPI-Key': '815a4792dcmsh49ab1c4aedcb73cp19a0e4jsn0c94010a7f56',
};
const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
const createRequest = url => ({ url, header: cryptoNewsHeader });

export const newsApi = createApi({
	reducerPath: 'newsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		getNews: builder.query({
			query: ({ newsCategory, count }) =>
				createRequest(
					`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
				),
		}),
	}),
});
export const { useGetNewsQuery } = newsApi;
