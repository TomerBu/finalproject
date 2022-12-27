import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article, Articles } from "./news.d";

const initialState: Articles = {
  articles: [],
  error: "",
  loading: false,
};

export const fetchNews = createAsyncThunk<Article[]>("news/fetchNews", () =>
  fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=8f477e48200d4836bb9dd55e0dde859c"
  )
    .then((res) => res.json())
    .then((json) => json.articles)
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.loading = true;
        state.error = "";
        state.articles = [];
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Something went wrong';
        state.articles = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.articles = action.payload;
      });
  },
});

export default newsSlice.reducer
