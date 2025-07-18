import { $fc } from '../app/api/frourio.client'; // 生成されたルートクライアントをインポート

export const apiClient = $fc({
  // 必要に応じてオプションを指定
  baseURL: process.env.APP_URL, // APIのベースURL
});
