import request from "@/admin/utils/request";

export async function queryTags(): Promise<any> {
  return request.get("/tags");
}
