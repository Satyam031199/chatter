import { create } from "zustand";
import { axiosInstance, BASE_URL } from "../lib/axios";
import { io } from "socket.io-client";

export const useChatStore = create((set, get) => ({
  users: [],
  conversations: [],
  messages: [],
  selectedUser: null,
  isConversationsLoading: true,
  isUsersLoading: true,
  isMessagesLoading: true,
  activeConversationId: null,
  searchQuery: "",
  sidebarTab: "chats",
  composerText: "",
  isSoundEnabled: true,
  isSendingMedia: false,
}));
