import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topBar: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoHeader: {
    width: 90,
    height: 30,
  },
  profileIcon: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#7A33D4",
    marginBottom: 16,
  },
  chatCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  chatInfo: {
    flex: 1,
  },
  chatNome: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  tagsRow: {
    flexDirection: "row",
    gap: 4,
    marginTop: 4,
  },
  tagBadge: {
    backgroundColor: "#F2E9FC",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  tagText: {
    fontSize: 9,
    color: "#7A33D4",
  },
  chatData: {
    fontSize: 10,
    color: "#999",
  },
  bottomBar: {
    height: 55,
    backgroundColor: "#E06287",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabItem: {
    alignItems: "center",
  },
  tabText: {
    color: "#FFF",
    fontSize: 10,
    marginTop: 2,
  },
});