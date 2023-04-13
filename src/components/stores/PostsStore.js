import { defineStore } from "pinia";

export const usePostStore = defineStore("movieStore", {
    state: () => ({
        posts: [],
        dialogVisible: false,
        isPostsLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            { value: "title", name: "По названию" },
            { value: "body", name: "По содержимому" },
        ],
    }),
});