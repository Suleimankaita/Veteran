import React, { useMemo, useState } from "react";
import {
  Archive,
  ArrowLeft,
  Bell,
  Check,
  CheckCheck,
  ChevronDown,
  Clock,
  FileText,
  Image,
  Mail,
  Menu,
  MoreVertical,
  Paperclip,
  Phone,
  Plus,
  Search,
  Send,
  Settings,
  Shield,
  Smile,
  Star,
  Trash2,
  User,
  Users,
  X,
  MessageSquare,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*
|--------------------------------------------------------------------------
| RHV MESSAGES / COMMUNICATION CENTER
|--------------------------------------------------------------------------
|
| Designed for the RHV SuperAdmin dashboard.
|
| Features:
|
| - Inbox
| - Direct messages
| - Group messages
| - Search
| - Unread messages
| - Starred messages
| - Archived messages
| - Member conversations
| - Message composer
| - Attachments
| - Emoji button
| - Read status
| - Online/offline status
| - Conversation information
| - New conversation modal
| - Delete/archive conversation
| - Responsive mobile layout
|
|--------------------------------------------------------------------------
*/

const INITIAL_CONVERSATIONS = [
  {
    id: "c1",
    name: "Ibrahim Musa",
    initials: "IM",
    role: "State Coordinator",
    state: "Katsina",
    online: true,
    unread: 3,
    starred: true,
    archived: false,
    lastMessage:
      "The Katsina chapter registration has been updated.",
    lastTime: "10:42 AM",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Good morning Admin.",
        time: "10:25 AM",
        read: true,
      },
      {
        id: 2,
        sender: "them",
        text: "The Katsina chapter registration has been updated.",
        time: "10:42 AM",
        read: false,
      },
    ],
  },

  {
    id: "c2",
    name: "Amina Bello",
    initials: "AB",
    role: "Program Manager",
    state: "Kaduna",
    online: true,
    unread: 0,
    starred: false,
    archived: false,
    lastMessage:
      "I have uploaded the new project report.",
    lastTime: "Yesterday",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "I have uploaded the new project report.",
        time: "Yesterday",
        read: true,
      },
      {
        id: 2,
        sender: "me",
        text: "Excellent. I will review it.",
        time: "Yesterday",
        read: true,
      },
    ],
  },

  {
    id: "c3",
    name: "RHV Abuja Chapter",
    initials: "RA",
    role: "Chapter Group",
    state: "FCT",
    online: true,
    unread: 8,
    starred: false,
    archived: false,
    group: true,
    lastMessage:
      "Meeting starts at 2:00 PM tomorrow.",
    lastTime: "Yesterday",
    messages: [
      {
        id: 1,
        sender: "them",
        senderName: "Chapter Chairman",
        text: "Meeting starts at 2:00 PM tomorrow.",
        time: "Yesterday",
        read: false,
      },
    ],
  },

  {
    id: "c4",
    name: "Yusuf Abdullahi",
    initials: "YA",
    role: "Member",
    state: "Kano",
    online: false,
    unread: 0,
    starred: false,
    archived: false,
    lastMessage:
      "Thank you for approving my membership.",
    lastTime: "Aug 31",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Thank you for approving my membership.",
        time: "Aug 31",
        read: true,
      },
    ],
  },

  {
    id: "c5",
    name: "Finance Department",
    initials: "FD",
    role: "Department",
    state: "Nigeria",
    online: true,
    unread: 1,
    starred: true,
    archived: false,
    group: true,
    lastMessage:
      "Monthly financial report is ready.",
    lastTime: "Aug 30",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Monthly financial report is ready.",
        time: "Aug 30",
        read: false,
      },
    ],
  },

  {
    id: "c6",
    name: "Chinedu Okafor",
    initials: "CO",
    role: "Volunteer Coordinator",
    state: "Enugu",
    online: false,
    unread: 0,
    starred: false,
    archived: true,
    lastMessage:
      "Volunteer activities have been completed.",
    lastTime: "Aug 28",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Volunteer activities have been completed.",
        time: "Aug 28",
        read: true,
      },
    ],
  },
];

export default function RHVMessages() {
  const [conversations, setConversations] = useState(
    INITIAL_CONVERSATIONS
  );

  const [selectedId, setSelectedId] = useState(
    "c1"
  );

  const [search, setSearch] = useState("");

  const [activeFolder, setActiveFolder] =
    useState("inbox");

  const [message, setMessage] = useState("");

  const [showInfo, setShowInfo] = useState(false);

  const [showNewMessage, setShowNewMessage] =
    useState(false);

  const [showMobileList, setShowMobileList] =
    useState(true);

  const [newRecipient, setNewRecipient] =
    useState("");

  const [newMessageText, setNewMessageText] =
    useState("");

  const [toast, setToast] = useState(null);

  /*
  |--------------------------------------------------------------------------
  | Selected conversation
  |--------------------------------------------------------------------------
  */

  const selectedConversation = conversations.find(
    (conversation) =>
      conversation.id === selectedId
  );

  /*
  |--------------------------------------------------------------------------
  | Filter conversations
  |--------------------------------------------------------------------------
  */

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) => {
      const matchesSearch =
        conversation.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        conversation.lastMessage
          .toLowerCase()
          .includes(search.toLowerCase());

      if (!matchesSearch) return false;

      if (activeFolder === "starred") {
        return conversation.starred;
      }

      if (activeFolder === "archived") {
        return conversation.archived;
      }

      if (activeFolder === "unread") {
        return conversation.unread > 0;
      }

      return !conversation.archived;
    });
  }, [
    conversations,
    search,
    activeFolder,
  ]);

  /*
  |--------------------------------------------------------------------------
  | Send message
  |--------------------------------------------------------------------------
  */

  const sendMessage = () => {
    const text = message.trim();

    if (!text || !selectedConversation) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
      time: formatTime(new Date()),
      read: true,
    };

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === selectedId
          ? {
              ...conversation,
              lastMessage: text,
              lastTime: "Now",
              messages: [
                ...conversation.messages,
                newMessage,
              ],
            }
          : conversation
      )
    );

    setMessage("");

    showToast(
      "success",
      "Message sent successfully."
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Enter key
  |--------------------------------------------------------------------------
  */

  const handleComposerKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  /*
  |--------------------------------------------------------------------------
  | Select conversation
  |--------------------------------------------------------------------------
  */

  const selectConversation = (id) => {
    setSelectedId(id);

    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              unread: 0,
              messages:
                conversation.messages.map(
                  (msg) => ({
                    ...msg,
                    read: true,
                  })
                ),
            }
          : conversation
      )
    );

    setShowMobileList(false);
  };

  /*
  |--------------------------------------------------------------------------
  | Star conversation
  |--------------------------------------------------------------------------
  */

  const toggleStar = (id) => {
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              starred: !conversation.starred,
            }
          : conversation
      )
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Archive
  |--------------------------------------------------------------------------
  */

  const archiveConversation = (id) => {
    setConversations((previous) =>
      previous.map((conversation) =>
        conversation.id === id
          ? {
              ...conversation,
              archived: true,
            }
          : conversation
      )
    );

    showToast(
      "success",
      "Conversation archived."
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Delete
  |--------------------------------------------------------------------------
  */

  const deleteConversation = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this conversation?"
    );

    if (!confirmed) return;

    setConversations((previous) =>
      previous.filter(
        (conversation) => conversation.id !== id
      )
    );

    setSelectedId(null);

    showToast(
      "success",
      "Conversation deleted."
    );
  };

  /*
  |--------------------------------------------------------------------------
  | New Conversation
  |--------------------------------------------------------------------------
  */

  const createConversation = () => {
    if (!newRecipient.trim()) {
      showToast(
        "error",
        "Enter a recipient name."
      );
      return;
    }

    const newConversation = {
      id: `c-${Date.now()}`,
      name: newRecipient,
      initials: getInitials(newRecipient),
      role: "Member",
      state: "Nigeria",
      online: true,
      unread: 0,
      starred: false,
      archived: false,
      lastMessage:
        newMessageText ||
        "New conversation started.",
      lastTime: "Now",
      messages: newMessageText
        ? [
            {
              id: Date.now(),
              sender: "me",
              text: newMessageText,
              time: formatTime(
                new Date()
              ),
              read: true,
            },
          ]
        : [],
    };

    setConversations((previous) => [
      newConversation,
      ...previous,
    ]);

    setSelectedId(newConversation.id);

    setNewRecipient("");
    setNewMessageText("");
    setShowNewMessage(false);
    setShowMobileList(false);

    showToast(
      "success",
      "New conversation created."
    );
  };

  /*
  |--------------------------------------------------------------------------
  | Toast
  |--------------------------------------------------------------------------
  */

  const showToast = (type, message) => {
    setToast({
      type,
      message,
    });

    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  const unreadCount = conversations.reduce(
    (total, conversation) =>
      total + conversation.unread,
    0
  );

  return (
    <div className="h-screen bg-[#f6f9f7] flex flex-col overflow-hidden">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="fixed top-5 right-5 z-[100] bg-white border border-gray-200 shadow-2xl rounded-2xl px-5 py-4 flex items-center gap-3"
          >
            <div
              className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                toast.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {toast.type === "success" ? (
                <Check size={18} />
              ) : (
                <X size={18} />
              )}
            </div>

            <p className="text-sm font-semibold">
              {toast.message}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="h-[76px] bg-white border-b border-gray-200 shrink-0">
        <div className="h-full px-4 sm:px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#075c35] flex items-center justify-center">
              <MessageSquare
                size={20}
                className="text-white"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#043c23]">
                Messages
              </h1>

              <p className="hidden sm:block text-xs text-gray-500">
                RHV Communication Center
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                setShowNewMessage(true)
              }
              className="h-10 px-4 rounded-xl bg-[#075c35] hover:bg-[#043c23] text-white text-sm font-semibold flex items-center gap-2 transition"
            >
              <Plus size={17} />
              <span className="hidden sm:inline">
                New Message
              </span>
            </button>

            <button className="relative w-10 h-10 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center">
              <Bell size={18} />

              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {unreadCount > 9
                    ? "9+"
                    : unreadCount}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-3 pl-2">
              <div className="w-9 h-9 rounded-full bg-[#e9f3ee] text-[#075c35] flex items-center justify-center font-bold text-sm">
                SA
              </div>

              <div>
                <p className="text-sm font-bold">
                  SuperAdmin
                </p>

                <p className="text-[11px] text-gray-500">
                  Administrator
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="flex flex-1 min-h-0">
        {/* Conversation Sidebar */}
        <aside
          className={`
            ${
              showMobileList
                ? "flex"
                : "hidden"
            }
            lg:flex
            w-full
            lg:w-[360px]
            xl:w-[390px]
            bg-white
            border-r
            border-gray-200
            flex-col
            shrink-0
          `}
        >
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <Search
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search conversations..."
                className="w-full h-11 rounded-xl bg-[#f5f7f6] border border-transparent focus:border-[#075c35] focus:bg-white outline-none pl-10 pr-4 text-sm transition"
              />
            </div>
          </div>

          {/* Folders */}
          <div className="px-3 py-3 border-b border-gray-100">
            <div className="grid grid-cols-4 gap-1">
              <FolderButton
                active={
                  activeFolder === "inbox"
                }
                onClick={() =>
                  setActiveFolder("inbox")
                }
                icon={Mail}
                label="Inbox"
                count={conversations.filter(
                  (c) => !c.archived
                ).length}
              />

              <FolderButton
                active={
                  activeFolder === "unread"
                }
                onClick={() =>
                  setActiveFolder("unread")
                }
                icon={MessageSquare}
                label="Unread"
                count={unreadCount}
              />

              <FolderButton
                active={
                  activeFolder === "starred"
                }
                onClick={() =>
                  setActiveFolder("starred")
                }
                icon={Star}
                label="Starred"
              />

              <FolderButton
                active={
                  activeFolder === "archived"
                }
                onClick={() =>
                  setActiveFolder("archived")
                }
                icon={Archive}
                label="Archive"
              />
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto">
            {filteredConversations.length ===
            0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-6">
                <div className="w-14 h-14 rounded-2xl bg-[#e9f3ee] text-[#075c35] flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <h3 className="font-bold mt-4">
                  No conversations
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  No messages match your current
                  filter.
                </p>
              </div>
            ) : (
              filteredConversations.map(
                (conversation) => (
                  <ConversationItem
                    key={conversation.id}
                    conversation={conversation}
                    selected={
                      conversation.id ===
                      selectedId
                    }
                    onClick={() =>
                      selectConversation(
                        conversation.id
                      )
                    }
                    onStar={() =>
                      toggleStar(
                        conversation.id
                      )
                    }
                  />
                )
              )
            )}
          </div>
        </aside>

        {/* Chat */}
        <section
          className={`
            ${
              !showMobileList
                ? "flex"
                : "hidden"
            }
            lg:flex
            flex-1
            min-w-0
            flex-col
            bg-[#f8faf9]
          `}
        >
          {!selectedConversation ? (
            <EmptyChat
              onNew={() =>
                setShowNewMessage(true)
              }
            />
          ) : (
            <>
              {/* Chat header */}
              <div className="h-[72px] bg-white border-b border-gray-200 px-4 sm:px-6 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <button
                    onClick={() =>
                      setShowMobileList(true)
                    }
                    className="lg:hidden w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center shrink-0"
                  >
                    <ArrowLeft size={18} />
                  </button>

                  <Avatar
                    conversation={
                      selectedConversation
                    }
                    size="md"
                  />

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h2 className="font-bold text-sm sm:text-base truncate">
                        {
                          selectedConversation.name
                        }
                      </h2>

                      {selectedConversation.online && (
                        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-green-600 font-medium">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Online
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 truncate">
                      {selectedConversation.role}{" "}
                      •{" "}
                      {selectedConversation.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() =>
                      toggleStar(
                        selectedConversation.id
                      )
                    }
                    className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                      selectedConversation.starred
                        ? "text-[#c99e38] bg-amber-50"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <Star
                      size={18}
                      fill={
                        selectedConversation.starred
                          ? "currentColor"
                          : "none"
                      }
                    />
                  </button>

                  <button
                    onClick={() =>
                      setShowInfo(!showInfo)
                    }
                    className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      showInfo
                        ? "bg-[#e9f3ee] text-[#075c35]"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    <MoreVertical size={18} />
                  </button>
                </div>
              </div>

              {/* Chat content */}
              <div className="flex-1 flex min-h-0">
                {/* Messages */}
                <div className="flex-1 min-w-0 flex flex-col">
                  <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                    <div className="max-w-4xl mx-auto">
                      <ConversationDate />

                      <div className="space-y-4">
                        {selectedConversation.messages.map(
                          (msg) => (
                            <MessageBubble
                              key={msg.id}
                              message={msg}
                              conversation={
                                selectedConversation
                              }
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Composer */}
                  <div className="bg-white border-t border-gray-200 p-3 sm:p-4">
                    <div className="max-w-4xl mx-auto">
                      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden focus-within:border-[#075c35] transition">
                        <textarea
                          value={message}
                          onChange={(event) =>
                            setMessage(
                              event.target.value
                            )
                          }
                          onKeyDown={
                            handleComposerKeyDown
                          }
                          placeholder={`Message ${selectedConversation.name}...`}
                          rows={2}
                          className="w-full resize-none outline-none px-4 pt-4 pb-2 text-sm"
                        />

                        <div className="h-12 px-3 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() =>
                                showToast(
                                  "success",
                                  "Attachment picker opened."
                                )
                              }
                              className="w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center"
                            >
                              <Paperclip
                                size={18}
                              />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                showToast(
                                  "success",
                                  "Image picker opened."
                                )
                              }
                              className="w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center"
                            >
                              <Image
                                size={18}
                              />
                            </button>

                            <button
                              type="button"
                              onClick={() =>
                                setMessage(
                                  (value) =>
                                    `${value} 😊`
                                )
                              }
                              className="w-9 h-9 rounded-lg text-gray-500 hover:bg-gray-100 flex items-center justify-center"
                            >
                              <Smile
                                size={18}
                              />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="hidden sm:block text-[11px] text-gray-400">
                              Enter to send
                            </span>

                            <button
                              type="button"
                              onClick={
                                sendMessage
                              }
                              disabled={
                                !message.trim()
                              }
                              className="h-9 px-4 rounded-xl bg-[#075c35] hover:bg-[#043c23] disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold flex items-center gap-2 transition"
                            >
                              <Send size={15} />
                              Send
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="text-[10px] text-gray-400 text-center mt-2">
                        RHV Communication Center •
                        Messages are protected by
                        role-based access controls.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Information panel */}
                <AnimatePresence>
                  {showInfo && (
                    <motion.aside
                      initial={{
                        width: 0,
                        opacity: 0,
                      }}
                      animate={{
                        width: 300,
                        opacity: 1,
                      }}
                      exit={{
                        width: 0,
                        opacity: 0,
                      }}
                      className="hidden xl:block bg-white border-l border-gray-200 overflow-hidden shrink-0"
                    >
                      <div className="w-[300px] h-full overflow-y-auto">
                        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                          <h3 className="font-bold">
                            Conversation
                          </h3>

                          <button
                            onClick={() =>
                              setShowInfo(false)
                            }
                            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                          >
                            <X size={17} />
                          </button>
                        </div>

                        <div className="p-6">
                          <div className="flex flex-col items-center text-center">
                            <Avatar
                              conversation={
                                selectedConversation
                              }
                              size="xl"
                            />

                            <h3 className="font-bold text-lg mt-4">
                              {
                                selectedConversation.name
                              }
                            </h3>

                            <p className="text-sm text-gray-500 mt-1">
                              {
                                selectedConversation.role
                              }
                            </p>

                            <span className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e9f3ee] text-[#075c35] text-xs font-semibold">
                              <MapPin
                                size={12}
                              />
                              {
                                selectedConversation.state
                              }
                            </span>
                          </div>

                          <div className="mt-7 space-y-2">
                            <InfoAction
                              icon={User}
                              label="View Member Profile"
                              onClick={() =>
                                showToast(
                                  "success",
                                  "Member profile selected."
                                )
                              }
                            />

                            <InfoAction
                              icon={Phone}
                              label="Call Member"
                              onClick={() =>
                                showToast(
                                  "success",
                                  "Calling feature connected to backend."
                                )
                              }
                            />

                            <InfoAction
                              icon={Bell}
                              label="Notification Settings"
                              onClick={() =>
                                showToast(
                                  "success",
                                  "Notification settings opened."
                                )
                              }
                            />

                            <InfoAction
                              icon={Archive}
                              label="Archive Conversation"
                              onClick={() =>
                                archiveConversation(
                                  selectedConversation.id
                                )
                              }
                            />

                            <InfoAction
                              icon={Trash2}
                              label="Delete Conversation"
                              danger
                              onClick={() =>
                                deleteConversation(
                                  selectedConversation.id
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </motion.aside>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </section>
      </div>

      {/* New message modal */}
      <AnimatePresence>
        {showNewMessage && (
          <NewMessageModal
            recipient={newRecipient}
            setRecipient={setNewRecipient}
            message={newMessageText}
            setMessage={setNewMessageText}
            onClose={() =>
              setShowNewMessage(false)
            }
            onCreate={createConversation}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Conversation Item
|--------------------------------------------------------------------------
*/

function ConversationItem({
  conversation,
  selected,
  onClick,
  onStar,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-4 py-4 border-b border-gray-100 transition ${
        selected
          ? "bg-[#edf7f1]"
          : "hover:bg-gray-50"
      }`}
    >
      <div className="flex gap-3">
        <Avatar
          conversation={conversation}
          size="md"
        />

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <p
                className={`text-sm truncate ${
                  conversation.unread
                    ? "font-bold text-gray-900"
                    : "font-semibold text-gray-800"
                }`}
              >
                {conversation.name}
              </p>

              <p className="text-[11px] text-gray-500 mt-0.5 truncate">
                {conversation.role}
              </p>
            </div>

            <span className="text-[10px] text-gray-400 shrink-0">
              {conversation.lastTime}
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <p
              className={`text-xs truncate flex-1 ${
                conversation.unread
                  ? "text-gray-800 font-medium"
                  : "text-gray-500"
              }`}
            >
              {conversation.lastMessage}
            </p>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onStar();
              }}
              className={`shrink-0 ${
                conversation.starred
                  ? "text-[#c99e38]"
                  : "text-gray-300 hover:text-gray-500"
              }`}
            >
              <Star
                size={14}
                fill={
                  conversation.starred
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

            {conversation.unread > 0 && (
              <span className="min-w-[19px] h-[19px] px-1 rounded-full bg-[#075c35] text-white text-[10px] font-bold flex items-center justify-center">
                {conversation.unread}
              </span>
            )}
          </div>
        </div>
      </div>
    </button>
  );
}

/*
|--------------------------------------------------------------------------
| Avatar
|--------------------------------------------------------------------------
*/

function Avatar({
  conversation,
  size = "md",
}) {
  const sizes = {
    sm: "w-8 h-8 text-[10px]",
    md: "w-11 h-11 text-xs",
    lg: "w-14 h-14 text-sm",
    xl: "w-24 h-24 text-xl",
  };

  return (
    <div className="relative shrink-0">
      <div
        className={`${sizes[size]} rounded-full bg-[#e9f3ee] text-[#075c35] flex items-center justify-center font-bold overflow-hidden`}
      >
        {conversation.group ? (
          <Users
            size={
              size === "xl"
                ? 32
                : size === "lg"
                ? 23
                : 18
            }
          />
        ) : (
          conversation.initials
        )}
      </div>

      {conversation.online &&
        size !== "xl" && (
          <span className="absolute right-0 bottom-0 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
        )}
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Message Bubble
|--------------------------------------------------------------------------
*/

function MessageBubble({
  message,
  conversation,
}) {
  const isMe = message.sender === "me";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className={`flex ${
        isMe
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] sm:max-w-[65%] ${
          isMe ? "items-end" : "items-start"
        } flex flex-col`}
      >
        {!isMe &&
          message.senderName && (
            <span className="text-[11px] font-semibold text-gray-500 mb-1 ml-2">
              {message.senderName}
            </span>
          )}

        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-6 ${
            isMe
              ? "bg-[#075c35] text-white rounded-br-md"
              : "bg-white border border-gray-200 text-gray-800 rounded-bl-md shadow-sm"
          }`}
        >
          {message.text}
        </div>

        <div
          className={`flex items-center gap-1.5 mt-1 px-1 ${
            isMe
              ? "text-gray-400"
              : "text-gray-400"
          }`}
        >
          <span className="text-[10px]">
            {message.time}
          </span>

          {isMe &&
            (message.read ? (
              <CheckCheck
                size={13}
                className="text-[#075c35]"
              />
            ) : (
              <Check size={13} />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Folder Button
|--------------------------------------------------------------------------
*/

function FolderButton({
  active,
  onClick,
  icon: Icon,
  label,
  count,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex flex-col items-center justify-center gap-1 py-2 rounded-xl transition ${
        active
          ? "bg-[#e9f3ee] text-[#075c35]"
          : "text-gray-500 hover:bg-gray-50"
      }`}
    >
      <Icon size={16} />

      <span className="text-[10px] font-semibold">
        {label}
      </span>

      {count !== undefined && count > 0 && (
        <span className="absolute top-1 right-2 min-w-[15px] h-[15px] rounded-full bg-[#075c35] text-white text-[8px] font-bold flex items-center justify-center">
          {count > 9 ? "9+" : count}
        </span>
      )}
    </button>
  );
}

/*
|--------------------------------------------------------------------------
| Conversation Date
|--------------------------------------------------------------------------
*/

function ConversationDate() {
  return (
    <div className="flex items-center gap-3 my-5">
      <div className="h-px flex-1 bg-gray-200" />

      <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
        Today
      </span>

      <div className="h-px flex-1 bg-gray-200" />
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Empty Chat
|--------------------------------------------------------------------------
*/

function EmptyChat({ onNew }) {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="text-center max-w-sm">
        <div className="w-20 h-20 rounded-3xl bg-[#e9f3ee] text-[#075c35] flex items-center justify-center mx-auto">
          <MessageSquare size={34} />
        </div>

        <h2 className="text-xl font-bold text-[#043c23] mt-5">
          Your messages
        </h2>

        <p className="text-sm text-gray-500 mt-2 leading-6">
          Select a conversation from the inbox or
          start a new conversation with an RHV
          member, coordinator or department.
        </p>

        <button
          onClick={onNew}
          className="mt-5 h-11 px-5 rounded-xl bg-[#075c35] text-white font-semibold text-sm inline-flex items-center gap-2"
        >
          <Plus size={17} />
          New Message
        </button>
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Info Action
|--------------------------------------------------------------------------
*/

function InfoAction({
  icon: Icon,
  label,
  danger,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left text-sm transition ${
        danger
          ? "text-red-600 hover:bg-red-50"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      <Icon size={17} />
      <span>{label}</span>
    </button>
  );
}

/*
|--------------------------------------------------------------------------
| New Message Modal
|--------------------------------------------------------------------------
*/

function NewMessageModal({
  recipient,
  setRecipient,
  message,
  setMessage,
  onClose,
  onCreate,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onMouseDown={onClose}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 20,
          scale: 0.97,
        }}
        onMouseDown={(event) =>
          event.stopPropagation()
        }
        className="w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#043c23]">
              New Message
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Start a conversation
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl hover:bg-gray-100 flex items-center justify-center"
          >
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Recipient
            </label>

            <div className="relative">
              <UserPlus
                size={17}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={recipient}
                onChange={(event) =>
                  setRecipient(
                    event.target.value
                  )
                }
                placeholder="Search member, coordinator or department..."
                className="w-full h-11 rounded-xl border border-gray-200 pl-10 pr-4 outline-none focus:border-[#075c35] focus:ring-2 focus:ring-[#075c35]/10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>

            <textarea
              value={message}
              onChange={(event) =>
                setMessage(event.target.value)
              }
              placeholder="Write your message..."
              rows={5}
              className="w-full rounded-xl border border-gray-200 px-4 py-3 resize-none outline-none focus:border-[#075c35] focus:ring-2 focus:ring-[#075c35]/10"
            />
          </div>

          <div className="rounded-xl bg-[#f5f8f6] p-4 flex gap-3">
            <Shield
              size={18}
              className="text-[#075c35] shrink-0"
            />

            <p className="text-xs text-gray-500 leading-5">
              Messages sent through the RHV
              Communication Center should follow
              organizational communication and
              privacy policies.
            </p>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="h-10 px-4 rounded-xl border border-gray-200 text-sm font-semibold hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            onClick={onCreate}
            className="h-10 px-5 rounded-xl bg-[#075c35] hover:bg-[#043c23] text-white text-sm font-semibold flex items-center gap-2"
          >
            <Send size={15} />
            Send Message
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) =>
      word.charAt(0).toUpperCase()
    )
    .join("");
}

function formatTime(date) {
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
  });
}