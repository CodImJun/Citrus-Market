export const isStatusInData = <T>(
  response: T
): response is T & { message: string; status: number } =>
  (response as any).status !== undefined;
