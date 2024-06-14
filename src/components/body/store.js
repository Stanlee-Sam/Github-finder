import { create } from "zustand";

const store = create((set) => ({
  username: "",
  userData: null,
  repos: [],
  followers: [],
  following: [],
  loading: false,
  error: null,
  setUsername: (username) => set({ username }),
  setUserData: (userData) => set({ userData }),
  setRepos: (repos) => set({ repos }),
  setFollowing: (following) => set({ following }),
  setFollowers: (followers) => set({ followers }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));
export default store;
