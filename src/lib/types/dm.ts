export interface Message {
  id: string;
  content: string;
  createdAt: string; // ISO 8601 datetime string
  sender: { id: string; name: string; image: string | null };
}
