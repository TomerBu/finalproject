import { fetchArticles } from "./../../services/news-service";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article, Articles } from "./news.d";

const initialState: Articles = {
  articles: [],
  error: "",
  loading: false,
};

export const fetchNews = createAsyncThunk<Article[]>(
  "news/fetchNews",
  fetchArticles
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    //payload = id of the article
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.articles.findIndex((a) => a.id === action.payload);
      if (index !== -1) {
        state.articles[index].isFavorite = !state.articles[index].isFavorite;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state, action) => {
        state.loading = true;
        state.error = "";
        state.articles = [];
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
        state.articles = [];
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.articles = action.payload;
      });
  },
});

export default newsSlice.reducer;

//export const favoriteActions = newsSlice.actions;
export const { toggleFavorite } = newsSlice.actions;
